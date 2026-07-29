// ============ 用户系统模块 ============
(function() {
  'use strict';

  // ============ 工具函数 ============
  
  // 简单的 SHA-256 哈希（使用 SubtleCrypto API）
  async function hashPassword(password) {
    if (window.crypto && window.crypto.subtle) {
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      } catch (e) {
        return simpleHash(password);
      }
    }
    return simpleHash(password);
  }

  // 简单哈希（后备方案）
  function simpleHash(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'hash_' + Math.abs(hash).toString(36) + '_' + str.length;
  }

  // 生成随机 ID
  function generateId() {
    return Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
  }

  // 获取当前时间
  function getTimestamp() {
    return new Date().toISOString();
  }

  // ============ 用户数据管理 ============
  
  var USER_DB_KEY = 'hanlingo_users';
  var SESSION_KEY = 'hanlingo_session';
  var DATA_KEY_PREFIX = 'hanlingo_user_data_';

  // 获取所有用户
  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USER_DB_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  // 保存用户
  function saveUsers(users) {
    localStorage.setItem(USER_DB_KEY, JSON.stringify(users));
  }

  // 获取当前会话
  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    } catch (e) {
      return null;
    }
  }

  // 保存会话
  function saveSession(session) {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }

  // ============ 注册 ============
  async function register(email, password, displayName) {
    // 验证
    if (!email || !password) {
      return { success: false, message: 'Please enter email and password.' };
    }

    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters.' };
    }

    // 验证邮箱格式
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    var users = getUsers();
    
    // 检查邮箱是否已注册
    if (users[email]) {
      return { success: false, message: 'This email is already registered.' };
    }

    // 创建用户
    var hashedPassword = await hashPassword(password);
    var userId = generateId();
    
    users[email] = {
      id: userId,
      email: email,
      displayName: displayName || email.split('@')[0],
      password: hashedPassword,
      createdAt: getTimestamp(),
      lastLogin: getTimestamp()
    };

    saveUsers(users);

    // 创建用户数据
    var userData = {
      learned: [],
      saved: [],
      wrongIds: [],
      correctCount: {},
      wrongCount: {},
      level: 1,
      streak: 0,
      dailyGoal: 5,
      checkinData: { streak: 0, totalCheckins: 0, months: {}, lastCheckin: null },
      questCompleted: {},
      lastStudyDate: null,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp()
    };
    saveUserData(email, userData);

    // 自动登录
    var session = {
      email: email,
      userId: userId,
      displayName: users[email].displayName,
      loginTime: getTimestamp()
    };
    saveSession(session);

    return { 
      success: true, 
      message: 'Account created successfully!', 
      user: session 
    };
  }

  // ============ 登录 ============
  async function login(email, password) {
    if (!email || !password) {
      return { success: false, message: 'Please enter email and password.' };
    }

    var users = getUsers();
    
    if (!users[email]) {
      return { success: false, message: 'No account found with this email.' };
    }

    var hashedPassword = await hashPassword(password);
    
    if (users[email].password !== hashedPassword) {
      return { success: false, message: 'Incorrect password.' };
    }

    // 更新登录时间
    users[email].lastLogin = getTimestamp();
    saveUsers(users);

    // 创建会话
    var session = {
      email: email,
      userId: users[email].id,
      displayName: users[email].displayName || email.split('@')[0],
      loginTime: getTimestamp()
    };
    saveSession(session);

    return { 
      success: true, 
      message: 'Welcome back, ' + session.displayName + '!', 
      user: session 
    };
  }

  // ============ 登出 ============
  function logout() {
    saveSession(null);
    return { success: true, message: 'Logged out successfully.' };
  }

  // ============ 获取当前用户 ============
  function getCurrentUser() {
    return getSession();
  }

  // ============ 检查是否已登录 ============
  function isLoggedIn() {
    return getSession() !== null;
  }

  // ============ 保存用户数据 ============
  function saveUserData(email, data) {
    var key = DATA_KEY_PREFIX + email;
    localStorage.setItem(key, JSON.stringify(data));
  }

  // ============ 获取用户数据 ============
  function getUserData(email) {
    email = email || getCurrentUser()?.email;
    if (!email) return null;

    var key = DATA_KEY_PREFIX + email;
    try {
      var data = JSON.parse(localStorage.getItem(key) || 'null');
      if (!data) {
        // 创建默认数据
        data = {
          learned: [],
          saved: [],
          wrongIds: [],
          correctCount: {},
          wrongCount: {},
          level: 1,
          streak: 0,
          dailyGoal: 5,
          checkinData: { streak: 0, totalCheckins: 0, months: {}, lastCheckin: null },
          questCompleted: {},
          lastStudyDate: null,
          createdAt: getTimestamp(),
          updatedAt: getTimestamp()
        };
        saveUserData(email, data);
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  // ============ 更新用户数据（合并） ============
  function updateUserData(email, updates) {
    var data = getUserData(email);
    if (!data) return null;

    for (var key in updates) {
      if (updates.hasOwnProperty(key)) {
        if (typeof updates[key] === 'object' && updates[key] !== null && !Array.isArray(updates[key])) {
          data[key] = { ...data[key], ...updates[key] };
        } else {
          data[key] = updates[key];
        }
      }
    }
    data.updatedAt = getTimestamp();
    saveUserData(email, data);
    return data;
  }

  // ============ 同步本地数据到用户账户 ============
  function syncLocalToUser() {
    var user = getCurrentUser();
    if (!user) return { success: false, message: 'Not logged in.' };

    var userData = getUserData(user.email);
    if (!userData) {
      userData = {
        learned: [],
        saved: [],
        wrongIds: [],
        correctCount: {},
        wrongCount: {},
        level: 1,
        streak: 0,
        dailyGoal: 5,
        checkinData: { streak: 0, totalCheckins: 0, months: {}, lastCheckin: null },
        questCompleted: {},
        lastStudyDate: null,
        createdAt: getTimestamp(),
        updatedAt: getTimestamp()
      };
    }

    // 从 localStorage 读取本地数据
    var localLearned = JSON.parse(localStorage.getItem('juli_learned') || '[]');
    var localSaved = JSON.parse(localStorage.getItem('juli_saved') || '[]');
    var localWrongIds = JSON.parse(localStorage.getItem('juli_wrong_ids') || '[]');
    var localCorrectCount = JSON.parse(localStorage.getItem('juli_correct_count') || '{}');
    var localWrongCount = JSON.parse(localStorage.getItem('juli_wrong_count') || '{}');
    var localLevel = parseInt(localStorage.getItem('juli_level') || '1');
    var localStreak = parseInt(localStorage.getItem('juli_streak') || '0');
    var localDailyGoal = parseInt(localStorage.getItem('juli_daily_goal') || '5');
    var localCheckinData = JSON.parse(localStorage.getItem('hanlingo_checkin_data') || '{}');
    var localQuestCompleted = JSON.parse(localStorage.getItem('juli_quest_completed') || '{}');
    var localLastStudyDate = localStorage.getItem('juli_last_date') || null;

    // 合并数据（取并集，保留用户数据中已有的）
    var mergedLearned = userData.learned || [];
    localLearned.forEach(function(id) {
      if (mergedLearned.indexOf(id) === -1) mergedLearned.push(id);
    });

    var mergedSaved = userData.saved || [];
    localSaved.forEach(function(id) {
      if (mergedSaved.indexOf(id) === -1) mergedSaved.push(id);
    });

    var mergedWrongIds = userData.wrongIds || [];
    localWrongIds.forEach(function(id) {
      if (mergedWrongIds.indexOf(id) === -1) mergedWrongIds.push(id);
    });

    var mergedCorrectCount = { ...(userData.correctCount || {}) };
    for (var key in localCorrectCount) {
      mergedCorrectCount[key] = (mergedCorrectCount[key] || 0) + localCorrectCount[key];
    }

    var mergedWrongCount = { ...(userData.wrongCount || {}) };
    for (var key in localWrongCount) {
      mergedWrongCount[key] = (mergedWrongCount[key] || 0) + localWrongCount[key];
    }

    var mergedLevel = Math.max(userData.level || 1, localLevel);
    var mergedStreak = Math.max(userData.streak || 0, localStreak);
    var mergedDailyGoal = Math.max(userData.dailyGoal || 5, localDailyGoal);
    var mergedQuestCompleted = { ...(userData.questCompleted || {}) };
    for (var key in localQuestCompleted) {
      mergedQuestCompleted[key] = localQuestCompleted[key];
    }

    var mergedCheckinData = { ...(userData.checkinData || {}) };
    for (var key in localCheckinData) {
      if (typeof localCheckinData[key] === 'object' && localCheckinData[key] !== null) {
        mergedCheckinData[key] = { ...(mergedCheckinData[key] || {}), ...localCheckinData[key] };
      } else {
        mergedCheckinData[key] = localCheckinData[key];
      }
    }

    var mergedLastStudyDate = localLastStudyDate || userData.lastStudyDate || null;

    // 保存合并后的数据
    var updatedData = {
      learned: mergedLearned,
      saved: mergedSaved,
      wrongIds: mergedWrongIds,
      correctCount: mergedCorrectCount,
      wrongCount: mergedWrongCount,
      level: mergedLevel,
      streak: mergedStreak,
      dailyGoal: mergedDailyGoal,
      checkinData: mergedCheckinData,
      questCompleted: mergedQuestCompleted,
      lastStudyDate: mergedLastStudyDate,
      updatedAt: getTimestamp()
    };

    saveUserData(user.email, updatedData);

    // 也更新本地数据
    applyUserDataToLocal(updatedData);

    return { 
      success: true, 
      message: 'Data synced successfully!',
      data: updatedData
    };
  }

  // ============ 将用户数据应用到本地 ============
  function applyUserDataToLocal(data) {
    if (data.learned) localStorage.setItem('juli_learned', JSON.stringify(data.learned));
    if (data.saved) localStorage.setItem('juli_saved', JSON.stringify(data.saved));
    if (data.wrongIds) localStorage.setItem('juli_wrong_ids', JSON.stringify(data.wrongIds));
    if (data.correctCount) localStorage.setItem('juli_correct_count', JSON.stringify(data.correctCount));
    if (data.wrongCount) localStorage.setItem('juli_wrong_count', JSON.stringify(data.wrongCount));
    if (data.level) localStorage.setItem('juli_level', String(data.level));
    if (data.streak) localStorage.setItem('juli_streak', String(data.streak));
    if (data.dailyGoal) localStorage.setItem('juli_daily_goal', String(data.dailyGoal));
    if (data.checkinData) localStorage.setItem('hanlingo_checkin_data', JSON.stringify(data.checkinData));
    if (data.questCompleted) localStorage.setItem('juli_quest_completed', JSON.stringify(data.questCompleted));
    if (data.lastStudyDate) localStorage.setItem('juli_last_date', data.lastStudyDate);
  }

  // ============ 导出数据（跨设备同步） ============
  function exportUserData() {
    var user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Please login first.' };
    }

    var data = getUserData(user.email);
    if (!data) {
      return { success: false, message: 'No data to export.' };
    }

    // 添加元数据
    var exportData = {
      version: '1.0',
      exportedAt: getTimestamp(),
      user: {
        email: user.email,
        displayName: user.displayName
      },
      data: data
    };

    // 转换为 JSON 字符串
    var jsonStr = JSON.stringify(exportData, null, 2);
    
    // 简单的 Base64 编码（不是加密，只是让传输更安全）
    var encoded = btoa(encodeURIComponent(jsonStr));

    return {
      success: true,
      data: encoded,
      filename: 'HanLingo_Backup_' + new Date().toISOString().slice(0,10) + '.txt'
    };
  }

  // ============ 导入数据（跨设备同步） ============
  function importUserData(encodedData) {
    var user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Please login first.' };
    }

    try {
      // 解码
      var jsonStr = decodeURIComponent(atob(encodedData));
      var importData = JSON.parse(jsonStr);

      // 验证数据格式
      if (!importData.version || !importData.data) {
        return { success: false, message: 'Invalid data format.' };
      }

      // 检查数据是否来自同一用户（可选）
      if (importData.user && importData.user.email !== user.email) {
        var confirmImport = confirm(
          '⚠️ This data belongs to ' + importData.user.email + 
          '\n\nImporting will overwrite your current data.\nContinue?'
        );
        if (!confirmImport) {
          return { success: false, message: 'Import cancelled.' };
        }
      }

      // 导入数据
      var imported = importData.data;
      var mergedData = {
        learned: imported.learned || [],
        saved: imported.saved || [],
        wrongIds: imported.wrongIds || [],
        correctCount: imported.correctCount || {},
        wrongCount: imported.wrongCount || {},
        level: imported.level || 1,
        streak: imported.streak || 0,
        dailyGoal: imported.dailyGoal || 5,
        checkinData: imported.checkinData || { streak: 0, totalCheckins: 0, months: {}, lastCheckin: null },
        questCompleted: imported.questCompleted || {},
        lastStudyDate: imported.lastStudyDate || null,
        updatedAt: getTimestamp()
      };

      saveUserData(user.email, mergedData);
      applyUserDataToLocal(mergedData);

      return {
        success: true,
        message: 'Data imported successfully! ' + 
          (mergedData.learned ? mergedData.learned.length : 0) + ' sentences learned.',
        data: mergedData
      };
    } catch (e) {
      return { success: false, message: 'Failed to import data: ' + e.message };
    }
  }

  // ============ 删除账户 ============
  function deleteAccount() {
    var user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Not logged in.' };
    }

    if (!confirm('⚠️ Are you sure you want to delete your account?\nAll data will be permanently lost.')) {
      return { success: false, message: 'Deletion cancelled.' };
    }

    if (!confirm('⚠️ This action cannot be undone. Confirm deletion?')) {
      return { success: false, message: 'Deletion cancelled.' };
    }

    // 删除用户数据
    var key = DATA_KEY_PREFIX + user.email;
    localStorage.removeItem(key);

    // 删除用户账户
    var users = getUsers();
    delete users[user.email];
    saveUsers(users);

    // 登出
    saveSession(null);

    return { success: true, message: 'Account deleted successfully.' };
  }

  // ============ 更改密码 ============
  async function changePassword(oldPassword, newPassword) {
    var user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Not logged in.' };
    }

    if (newPassword.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters.' };
    }

    var users = getUsers();
    var hashedOld = await hashPassword(oldPassword);
    var hashedNew = await hashPassword(newPassword);

    if (users[user.email].password !== hashedOld) {
      return { success: false, message: 'Incorrect current password.' };
    }

    users[user.email].password = hashedNew;
    saveUsers(users);

    return { success: true, message: 'Password changed successfully.' };
  }

  // ============ 获取用户统计数据 ============
  function getUserStats(email) {
    email = email || getCurrentUser()?.email;
    if (!email) return null;

    var data = getUserData(email);
    if (!data) return null;

    return {
      learnedCount: (data.learned || []).length,
      savedCount: (data.saved || []).length,
      wrongCount: (data.wrongIds || []).length,
      level: data.level || 1,
      streak: data.streak || 0,
      dailyGoal: data.dailyGoal || 5,
      totalCorrect: Object.values(data.correctCount || {}).reduce(function(a, b) { return a + b; }, 0),
      totalWrong: Object.values(data.wrongCount || {}).reduce(function(a, b) { return a + b; }, 0)
    };
  }

  // ============ 导出公共 API ============
  window.HanLingoUser = {
    register: register,
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    isLoggedIn: isLoggedIn,
    getUserData: getUserData,
    updateUserData: updateUserData,
    syncLocalToUser: syncLocalToUser,
    applyUserDataToLocal: applyUserDataToLocal,
    exportUserData: exportUserData,
    importUserData: importUserData,
    deleteAccount: deleteAccount,
    changePassword: changePassword,
    getUserStats: getUserStats,
    getSession: getSession,
    saveSession: saveSession
  };

  // ============ 自动检查登录状态并同步 ============
  function autoLogin() {
    var session = getSession();
    if (session) {
      // 如果有会话，自动同步数据
      var result = syncLocalToUser();
      if (result.success) {
        console.log('🔄 Auto-synced data for ' + session.email);
      }
      return session;
    }
    return null;
  }

  // 页面加载时自动尝试登录
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoLogin);
  } else {
    autoLogin();
  }

  console.log('✅ HanLingo User System loaded');
  console.log('📌 Session: ' + (getSession() ? 'Active (' + getSession().email + ')' : 'None'));

})();