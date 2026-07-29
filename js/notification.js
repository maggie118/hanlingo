// ============ 每日提醒通知模块 ============
(function() {
  'use strict';

  // ============ 配置 ============
  var CONFIG = {
    // 默认提醒时间 (24小时制)
    defaultHour: 20,
    defaultMinute: 0,
    // 通知图标
    icon: '/icon-192.png',
    // 站点名称
    siteName: 'HanLingo'
  };

  // ============ 权限管理 ============
  function requestNotificationPermission() {
    if (!('Notification' in window)) {
      console.log('⚠️ This browser does not support notifications.');
      return Promise.resolve(false);
    }

    if (Notification.permission === 'granted') {
      return Promise.resolve(true);
    }

    if (Notification.permission === 'denied') {
      console.log('⚠️ Notification permission denied.');
      return Promise.resolve(false);
    }

    return Notification.requestPermission().then(function(permission) {
      return permission === 'granted';
    });
  }

  window.requestNotificationPermission = requestNotificationPermission;

  // ============ 发送通知 ============
  function sendNotification(title, body, options) {
    options = options || {};
    
    if (!('Notification' in window)) {
      console.log('⚠️ Notifications not supported.');
      return false;
    }

    if (Notification.permission !== 'granted') {
      console.log('⚠️ Notification permission not granted.');
      return false;
    }

    try {
      var notification = new Notification(title, {
        body: body,
        icon: options.icon || CONFIG.icon,
        tag: options.tag || 'hanlingo-daily',
        requireInteraction: options.requireInteraction || true,
        silent: options.silent || false,
        data: options.data || {}
      });

      // 点击通知时的行为
      notification.onclick = function() {
        window.focus();
        // 跳转到学习页面
        window.location.href = '/learn.html';
        notification.close();
      };

      // 自动关闭
      if (options.autoClose !== false) {
        setTimeout(function() {
          notification.close();
        }, 30000);
      }

      return true;
    } catch (e) {
      console.error('❌ Failed to send notification:', e);
      return false;
    }
  }

  window.sendNotification = sendNotification;

  // ============ 每日提醒调度 ============
  var reminderTimer = null;

  function scheduleDailyReminder(hour, minute) {
    hour = hour || CONFIG.defaultHour;
    minute = minute || CONFIG.defaultMinute;

    // 清除之前的定时器
    if (reminderTimer) {
      clearTimeout(reminderTimer);
      reminderTimer = null;
    }

    var now = new Date();
    var target = new Date();
    target.setHours(hour, minute, 0, 0);

    // 如果目标时间已过，设置到明天
    if (target <= now) {
      target.setDate(target.getDate() + 1);
    }

    var delay = target.getTime() - now.getTime();
    console.log('📅 Next reminder scheduled for: ' + target.toLocaleString());

    reminderTimer = setTimeout(function() {
      sendDailyReminder();
      // 递归调度下一天
      scheduleDailyReminder(hour, minute);
    }, delay);

    // 保存调度信息到 localStorage
    try {
      var scheduleInfo = {
        hour: hour,
        minute: minute,
        nextTime: target.toISOString(),
        scheduled: true
      };
      localStorage.setItem('hanlingo_reminder_schedule', JSON.stringify(scheduleInfo));
    } catch (e) {}

    return true;
  }

  window.scheduleDailyReminder = scheduleDailyReminder;

  // ============ 发送每日提醒 ============
  function sendDailyReminder() {
    // 获取学习进度
    var learned = JSON.parse(localStorage.getItem('juli_learned') || '[]');
    var saved = JSON.parse(localStorage.getItem('juli_saved') || '[]');
    var streak = parseInt(localStorage.getItem('juli_streak')) || 0;
    var level = parseInt(localStorage.getItem('juli_level')) || 1;
    var today = new Date().toDateString();
    var lastStudyDate = localStorage.getItem('juli_last_date') || '';

    // 检查今天是否已学习
    var hasStudiedToday = (lastStudyDate === today);

    // 构建通知内容
    var title = '📚 该学中文啦！';
    var body = '';
    var emoji = '';

    if (hasStudiedToday) {
      // 今天已学习 - 鼓励继续
      var dailyGoal = parseInt(localStorage.getItem('juli_daily_goal')) || 5;
      var startIdx = (level - 1) * dailyGoal;
      var endIdx = Math.min(startIdx + dailyGoal, getTotalSentences());
      var todaySentences = getSentencesSlice(startIdx, endIdx);
      var done = todaySentences.filter(function(s) { return learned.indexOf(s.id) !== -1; }).length;
      var total = todaySentences.length || dailyGoal;

      if (done >= total) {
        emoji = '🌟';
        title = '🌟 太棒了！今日任务已完成！';
        body = '你已完成今天的所有句子！🎉 明天继续加油！';
      } else {
        emoji = '💪';
        title = '💪 继续学习！';
        body = '你今天已学 ' + done + '/' + total + ' 句，继续完成剩下的吧！';
      }
    } else {
      // 今天还没学习
      emoji = '🔔';
      title = '🔔 每日学习提醒';
      var savedCount = saved.length;
      if (savedCount > 0) {
        body = '你有 ' + savedCount + ' 个收藏句子待复习。今天花5分钟学5个句子吧！';
      } else {
        body = '每天5个句子，轻松学中文。点击开始今日学习！';
      }

      // 根据连续天数增加激励
      if (streak >= 7) {
        body += ' 🔥 你已经坚持 ' + streak + ' 天了！';
      } else if (streak >= 3) {
        body += ' 🔥 你已经坚持 ' + streak + ' 天了，继续保持！';
      }
    }

    // 发送通知
    var sent = sendNotification(title, body, {
      tag: 'hanlingo-daily-' + today,
      requireInteraction: !hasStudiedToday,
      data: {
        type: 'daily-reminder',
        date: today,
        hasStudied: hasStudiedToday
      }
    });

    if (sent) {
      console.log('✅ Daily reminder sent:', title);
      // 记录发送时间
      localStorage.setItem('hanlingo_last_reminder', new Date().toISOString());
    }

    return sent;
  }

  window.sendDailyReminder = sendDailyReminder;

  // ============ 辅助函数 ============
  function getTotalSentences() {
    if (typeof HSK1_SENTENCES !== 'undefined') {
      return HSK1_SENTENCES.length;
    }
    return 30;
  }

  function getSentencesSlice(start, end) {
    if (typeof HSK1_SENTENCES !== 'undefined') {
      return HSK1_SENTENCES.slice(start, end);
    }
    return [];
  }

  // ============ 获取提醒状态 ============
  function getReminderStatus() {
    var status = {
      enabled: false,
      permission: Notification.permission || 'default',
      hour: CONFIG.defaultHour,
      minute: CONFIG.defaultMinute,
      nextTime: null,
      lastReminder: null,
      hasStudiedToday: false
    };

    try {
      var schedule = JSON.parse(localStorage.getItem('hanlingo_reminder_schedule') || '{}');
      if (schedule.scheduled) {
        status.enabled = true;
        status.hour = schedule.hour || CONFIG.defaultHour;
        status.minute = schedule.minute || CONFIG.defaultMinute;
        status.nextTime = schedule.nextTime || null;
      }
    } catch (e) {}

    try {
      status.lastReminder = localStorage.getItem('hanlingo_last_reminder') || null;
    } catch (e) {}

    var today = new Date().toDateString();
    var lastStudyDate = localStorage.getItem('juli_last_date') || '';
    status.hasStudiedToday = (lastStudyDate === today);

    return status;
  }

  window.getReminderStatus = getReminderStatus;

  // ============ 启用/禁用提醒 ============
  function enableReminder(hour, minute) {
    hour = hour || CONFIG.defaultHour;
    minute = minute || CONFIG.defaultMinute;

    // 先请求权限
    return requestNotificationPermission().then(function(granted) {
      if (!granted) {
        console.log('⚠️ Notification permission not granted.');
        return false;
      }

      // 调度提醒
      scheduleDailyReminder(hour, minute);
      
      // 保存设置
      try {
        var settings = {
          enabled: true,
          hour: hour,
          minute: minute
        };
        localStorage.setItem('hanlingo_reminder_settings', JSON.stringify(settings));
      } catch (e) {}

      console.log('✅ Daily reminder enabled at ' + hour + ':' + String(minute).padStart(2, '0'));
      return true;
    });
  }

  window.enableReminder = enableReminder;

  function disableReminder() {
    if (reminderTimer) {
      clearTimeout(reminderTimer);
      reminderTimer = null;
    }

    try {
      localStorage.removeItem('hanlingo_reminder_schedule');
      localStorage.removeItem('hanlingo_reminder_settings');
    } catch (e) {}

    console.log('✅ Daily reminder disabled');
    return true;
  }

  window.disableReminder = disableReminder;

  // ============ 测试通知 ============
  function testNotification() {
    return requestNotificationPermission().then(function(granted) {
      if (!granted) {
        alert('⚠️ 请允许浏览器通知权限，然后重试。');
        return false;
      }

      return sendNotification('🔔 HanLingo 测试通知', '如果你看到这条消息，通知功能正常工作！', {
        tag: 'test-notification',
        requireInteraction: false,
        autoClose: true
      });
    });
  }

  window.testNotification = testNotification;

  // ============ 自动初始化 ============
  function autoInit() {
    // 检查是否已启用提醒
    try {
      var settings = JSON.parse(localStorage.getItem('hanlingo_reminder_settings') || '{}');
      if (settings.enabled) {
        var hour = settings.hour || CONFIG.defaultHour;
        var minute = settings.minute || CONFIG.defaultMinute;
        
        // 如果权限已授予，直接调度
        if (Notification.permission === 'granted') {
          scheduleDailyReminder(hour, minute);
          console.log('🔄 Auto-scheduled daily reminder at ' + hour + ':' + String(minute).padStart(2, '0'));
        } else if (Notification.permission === 'default') {
          // 等待用户交互后再请求权限
          console.log('⏳ Notification permission not yet granted. Will request on user action.');
        }
      }
    } catch (e) {}
  }

  // 页面加载时自动初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

  console.log('✅ HanLingo Notification module loaded');
  console.log('📌 Notification permission: ' + Notification.permission);

})();