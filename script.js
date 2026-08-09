/**
 * HanLingo — 完整优化 JavaScript
 * 功能模块：汉堡菜单 | 滚动阴影 | 工具提示 | 付费墙 | CTA 导航 | 音频播放
 * 架构：模块化 IIFE，零全局污染
 */

(function () {
  "use strict";

  // ================================================================
  //  1. 配置 & 常量
  // ================================================================

  const CONFIG = {
    // 音频
    VOICE_FEMALE: 'zh-CN-XiaoxiaoNeural',
    VOICE_MALE: 'zh-CN-YunyangNeural',
    VOICE_STORAGE_KEY: 'hanlingo_voice',
    SPEED_STORAGE_KEY: 'hanlingo_speed',

    // 工具提示
    TOOLTIP_DELAY: 80, // 悬停延迟 (ms)
    TOOLTIP_HIDE_DELAY: 420, // 隐藏延迟 (ms)

    // 滚动
    SCROLL_SHADOW_THRESHOLD: 10, // 触发阴影的滚动距离 (px)
  };

  // 音频代理列表
  const PROXY_LIST = [
    'https://edge-tts-api.vercel.app/api/tts?text={text}&voice={voice}&rate={rate}',
    'https://tts.zhangci.net/tts?text={text}&voice={voice}&rate={rate}',
    'https://api.zhitui.cc/tts?text={text}&voice={voice}&speed={rate}',
  ];

  // 付费墙文案
  const PAYWALL_STRINGS = {
    topic_taxi: { title: 'Unlock Taxi & Travel', sub: 'Get all 10 taxi, airport, and transit phrases — with native audio, breakdowns, and grammar notes.', price: '1.99' },
    topic_food: { title: 'Unlock Ordering Food', sub: '10 restaurant phrases including allergens, takeaway, and asking for the bill like a local.', price: '1.99' },
    topic_directions: { title: 'Unlock Asking Directions', sub: 'Navigate any city confidently: subway exits, overpasses, QR directions, and more.', price: '1.99' },
    exam_hsk2: { title: 'Unlock HSK 2', sub: 'Full 300-word HSK 2 syllabus with native audio, sentences, and quizzes.', price: '4.99' },
    exam_hsk3: { title: 'Unlock HSK 3', sub: '600 words for real travel & work conversations.', price: '4.99' },
    exam_hsk4: { title: 'Unlock HSK 4', sub: '1200 words — start expressing complex opinions.', price: '4.99' },
    exam_hsk5: { title: 'Unlock HSK 5', sub: '2500 advanced words for news, essays, and work.', price: '4.99' },
    exam_hsk6: { title: 'Unlock HSK 6', sub: '5000-word fluency — near-native mastery.', price: '4.99' },
    exam_yct: { title: 'Unlock YCT 1–4', sub: 'K–12 youth Chinese path with games & stories.', price: '4.99' },
    exam_bct: { title: 'Unlock BCT A/B', sub: 'Business Chinese for meetings, emails, contracts.', price: '4.99' },
    exam_mct: { title: 'Unlock MCT I–II', sub: 'Medical Chinese — symptoms, prescriptions, ER.', price: '4.99' },
    locked_phrase: { title: 'Unlock this topic', sub: 'Get instant access to every locked phrase, word-by-word breakdown, and slow native audio.', price: '1.99' },
  };

  // ================================================================
  //  2. DOM 工具函数
  // ================================================================

  const $ = (id) => document.getElementById(id);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ================================================================
  //  3. 模块：汉堡菜单
  // ================================================================

  const MobileNav = {
    init() {
      this.hamburger = document.getElementById('hamburgerBtn');
      this.nav = document.getElementById('mainNav');
      if (!this.hamburger || !this.nav) return;

      this.hamburger.addEventListener('click', this.toggle.bind(this));

      // 点击菜单项后自动关闭
      this.nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', this.close.bind(this));
      });

      // 点击页面其他区域关闭菜单
      document.addEventListener('click', (e) => {
        if (this.isOpen() && !this.nav.contains(e.target) && !this.hamburger.contains(e.target)) {
          this.close();
        }
      });
    },

    toggle() {
      const isOpen = this.hamburger.classList.toggle('active');
      this.nav.classList.toggle('mobile-open');
      this.hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    },

    close() {
      this.hamburger.classList.remove('active');
      this.nav.classList.remove('mobile-open');
      this.hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    },

    isOpen() {
      return this.nav.classList.contains('mobile-open');
    },
  };

  // ================================================================
  //  4. 模块：滚动阴影
  // ================================================================

  const ScrollShadow = {
    init() {
      this.header = document.querySelector('.hdr');
      if (!this.header) return;
      this.threshold = CONFIG.SCROLL_SHADOW_THRESHOLD;

      // 使用 requestAnimationFrame 节流
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.update();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    },

    update() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      this.header.classList.toggle('scrolled', scrollY > this.threshold);
    },
  };

  // ================================================================
  //  5. 模块：工具提示 (Tooltip)
  // ================================================================

  const Tooltip = {
    init() {
      this.tip = document.getElementById('tip');
      if (!this.tip) return;

      this.pinyin = document.getElementById('tipPinyin');
      this.meaning = document.getElementById('tipMeaning');
      this.breakdown = document.getElementById('tipBreakdown');
      this.grammar = document.getElementById('tipGrammar');

      this.activeCard = null;
      this.hideTimer = null;
      this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

      // 标签页切换
      this.setupTabs();

      // 绑定目标元素
      this.bindTargets();

      // 窗口变化时重新定位
      const reposition = () => { if (this.activeCard) this.position(this.activeCard); };
      window.addEventListener('scroll', reposition, { passive: true });
      window.addEventListener('resize', reposition, { passive: true });

      // 点击外部关闭
      document.addEventListener('click', (e) => {
        if (!this.activeCard) return;
        if (this.activeCard.contains(e.target) || this.tip.contains(e.target)) return;
        this.hide();
      }, true);

      // 鼠标悬停保持显示
      this.tip.addEventListener('mouseenter', () => clearTimeout(this.hideTimer));
      this.tip.addEventListener('mouseleave', () => this.hide(240));
    },

    setupTabs() {
      const tabs = $$('.tip-tab', this.tip);
      const panes = $$('.tip-pane', this.tip);

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const tabId = tab.dataset.tab;
          tabs.forEach((t) => {
            t.classList.toggle('active', t === tab);
            t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
          });
          panes.forEach((pane) => {
            pane.classList.toggle('active', pane.dataset.pane === tabId);
          });
        });
      });
    },

    bindTargets() {
      const targets = $$('[data-pinyin], [data-meaning], [data-breakdown], [data-grammar]');

      targets.forEach((el) => {
        if (this.isTouch) {
          // 触摸设备：点击切换
          el.addEventListener('click', (e) => {
            if (e.target.closest('.speaker')) return;
            if (this.activeCard === el) {
              this.hide(0);
              return;
            }
            e.preventDefault();
            this.show(el);
          }, { passive: false });
        } else {
          // 桌面：悬停触发
          let enterTimer = null;
          el.addEventListener('mouseenter', () => {
            clearTimeout(enterTimer);
            clearTimeout(this.hideTimer);
            enterTimer = setTimeout(() => this.show(el), CONFIG.TOOLTIP_DELAY);
          });
          el.addEventListener('mouseleave', () => {
            clearTimeout(enterTimer);
            this.hide();
          });
          el.addEventListener('focus', () => this.show(el));
          el.addEventListener('blur', () => this.hide());
        }
      });
    },

    show(el) {
      if (!this.hasData(el)) return;
      clearTimeout(this.hideTimer);
      this.activeCard = el;
      this.populate(el);
      this.position(el);
      this.tip.classList.add('visible');
      this.tip.setAttribute('aria-hidden', 'false');
    },

    hide(delay) {
      clearTimeout(this.hideTimer);
      this.hideTimer = setTimeout(() => {
        this.tip.classList.remove('visible');
        this.tip.setAttribute('aria-hidden', 'true');
        this.activeCard = null;
      }, typeof delay === 'number' ? delay : CONFIG.TOOLTIP_HIDE_DELAY);
    },

    hasData(el) {
      return el && (el.hasAttribute('data-pinyin') ||
        el.hasAttribute('data-meaning') ||
        el.hasAttribute('data-breakdown') ||
        el.hasAttribute('data-grammar'));
    },

    populate(el) {
      const py = el.getAttribute('data-pinyin') || '';
      const mg = el.getAttribute('data-meaning') || '';
      const br = el.getAttribute('data-breakdown') || '';
      const gr = el.getAttribute('data-grammar') || '';

      this.pinyin.textContent = py;
      this.pinyin.style.display = py ? '' : 'none';
      this.meaning.textContent = mg;
      this.meaning.style.display = mg ? '' : 'none';

      this.breakdown.innerHTML = '';
      try {
        const arr = br ? JSON.parse(br) : [];
        if (Array.isArray(arr) && arr.length) {
          arr.forEach((item) => {
            const li = document.createElement('li');
            const w = document.createElement('span');
            w.className = 'tw';
            w.textContent = item.w || '';
            const p = document.createElement('span');
            p.className = 'tp';
            p.textContent = item.p || '';
            const m = document.createElement('span');
            m.className = 'tm';
            m.textContent = item.m || '';
            li.append(w, p, m);
            this.breakdown.append(li);
          });
        } else {
          this.breakdown.innerHTML = '<li style="grid-template-columns:1fr;color:var(--text-3);padding:6px;">No breakdown available.</li>';
        }
      } catch (_) {
        this.breakdown.innerHTML = '<li style="grid-template-columns:1fr;color:var(--text-3);padding:6px;">No breakdown available.</li>';
      }

      this.grammar.textContent = gr || '—';
    },

    position(el) {
      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const gap = 12;
      const margin = 10;

      // 先隐藏再测量
      this.tip.style.visibility = 'hidden';
      this.tip.classList.add('visible');

      requestAnimationFrame(() => {
        const tr = this.tip.getBoundingClientRect();
        let top = rect.bottom + gap;
        let left = rect.left + rect.width / 2 - tr.width / 2;

        // 如果下方空间不够，放到上方
        if (top + tr.height + margin > vh) {
          top = rect.top - tr.height - gap;
        }
        // 水平边界修正
        if (left < margin) left = margin;
        if (left + tr.width + margin > vw) left = vw - tr.width - margin;
        if (top < margin) top = margin;

        this.tip.style.top = top + 'px';
        this.tip.style.left = left + 'px';
        this.tip.style.visibility = '';
      });
    },
  };

  // ================================================================
  //  6. 模块：付费墙 (Paywall)
  // ================================================================

  const Paywall = {
    init() {
      this.modal = document.getElementById('paywallModal');
      if (!this.modal) return;

      this.title = document.getElementById('paywallTitle');
      this.sub = document.getElementById('paywallSub');
      this.amount = document.getElementById('paywallAmount');
      this.buyBtn = document.getElementById('paywallBuyBtn');

      // 关闭按钮
      $$('[data-modal-close]', this.modal).forEach((el) => {
        el.addEventListener('click', this.close.bind(this));
      });

      // ESC 关闭
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen()) this.close();
      });

      // 点击背景关闭
      this.modal.querySelector('.modal-backdrop').addEventListener('click', this.close.bind(this));

      // 绑定触发按钮
      this.bindTriggers();

      // 购买按钮
      if (this.buyBtn) {
        this.buyBtn.addEventListener('click', this.handleBuy.bind(this));
      }
    },

    isOpen() {
      return this.modal.classList.contains('open');
    },

    open(key, priceOverride) {
      const cfg = PAYWALL_STRINGS[key] || PAYWALL_STRINGS.locked_phrase;
      this.title.textContent = cfg.title || 'Unlock This Content';
      this.sub.textContent = cfg.sub || 'Unlock premium phrases, audio, and breakdowns forever.';
      const price = priceOverride || cfg.price || '1.99';
      this.amount.textContent = '$' + price;
      this.modal.classList.add('open');
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // 存储当前打开的 key，供购买按钮使用
      this._currentKey = key;
      this._currentPrice = price;
    },

    close() {
      this.modal.classList.remove('open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    },

    handleBuy() {
      const btn = this.buyBtn;
      btn.textContent = 'Redirecting to secure checkout…';
      btn.disabled = true;

      // 模拟支付跳转
      setTimeout(() => {
        this.close();
        setTimeout(() => {
          btn.innerHTML =
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>' +
            ' Unlock Now';
          btn.disabled = false;
        }, 1500);
      }, 900);
    },

    bindTriggers() {
      // 1. 解锁主题按钮
      $$('[data-unlock-topic]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const topic = btn.dataset.unlockTopic;
          const price = btn.dataset.price || '1.99';
          this.open('topic_' + topic, price);
        });
      });

      // 2. 锁定的短语（点击打开付费墙）
      $$('.phrase.locked').forEach((li) => {
        const topic = li.dataset.locked || '';
        const handler = (e) => {
          e.stopPropagation();
          this.open('topic_' + topic, '1.99');
        };
        li.addEventListener('click', handler);
        const speaker = li.querySelector('.speaker');
        if (speaker) {
          speaker.addEventListener('click', handler);
        }
      });

      // 3. Exam 卡片
      $$('.exam-card').forEach((card) => {
        const exam = card.dataset.exam || '';
        const price = card.dataset.price || '4.99';

        // 点击卡片（但排除按钮本身）
        card.addEventListener('click', (e) => {
          if (e.target.closest('button') && !e.target.classList.contains('exam-btn')) return;
          if (exam === 'hsk1') {
            document.getElementById('survival')?.scrollIntoView({ behavior: 'smooth' });
            return;
          }
          this.open('exam_' + exam, price);
        });

        // 点击按钮
        const btn = card.querySelector('.exam-btn');
        if (btn) {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (exam === 'hsk1') {
              document.getElementById('survival')?.scrollIntoView({ behavior: 'smooth' });
              return;
            }
            this.open('exam_' + exam, price);
          });
        }
      });

      // 4. 定价计划按钮 (通过 data-plan 属性)
      $$('.plan .btn').forEach((btn) => {
        const plan = btn.closest('.plan');
        const planType = plan ? plan.dataset.plan : null;
        btn.addEventListener('click', () => {
          if (planType === 'lifetime') {
            this.open('pricing_lifetime', '29.99');
            this.title.textContent = 'Claim Your Lifetime Pass';
            this.sub.textContent = 'One single payment of $29.99 — every course today, plus every course we ever build, forever. (Early Bird price.)';
          } else if (planType === 'monthly') {
            this.open('pricing_monthly', '9.99');
            this.title.textContent = 'Start Monthly Pass';
            this.sub.textContent = 'All content for 30 days. Cancel any time from your account page.';
          } else {
            this.open('pricing_single', '1.99');
          }
        });
      });
    },
  };

  // ================================================================
  //  7. 模块：CTA 导航按钮
  // ================================================================

  const CTA = {
    init() {
      // "Get Started" 按钮
      const freeBtn = document.querySelector('.nav-cta-free');
      if (freeBtn) {
        freeBtn.addEventListener('click', () => {
          document.getElementById('survival')?.scrollIntoView({ behavior: 'smooth' });
        });
      }

      // Hero "Start Speaking Free"
      const heroStart = document.querySelector('.hero-ctas .btn-cta');
      if (heroStart) {
        heroStart.addEventListener('click', () => {
          document.getElementById('survival')?.scrollIntoView({ behavior: 'smooth' });
        });
      }

      // Hero "View Pricing"
      const heroPrice = document.querySelector('.hero-ctas .btn-soft');
      if (heroPrice) {
        heroPrice.addEventListener('click', () => {
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  };

  // ================================================================
  //  8. 模块：音频播放 (保持原有功能，代码质量优化)
  // ================================================================

  const AudioPlayer = {
    init() {
      this.voiceSelect = document.getElementById('voice-select');
      this.speedSelect = document.getElementById('speed-select');
      if (!this.voiceSelect) return;

      this.selectedVoice = CONFIG.VOICE_FEMALE;
      this.currentSpeed = 0.85;
      this.currentAudio = null;
      this.activeSpeaker = null;

      // 初始化下拉菜单
      this.populateVoiceSelect();
      this.initSpeed();

      // 绑定事件
      this.voiceSelect.addEventListener('change', this.onVoiceChange.bind(this));
      if (this.speedSelect) {
        this.speedSelect.addEventListener('change', this.onSpeedChange.bind(this));
      }

      // 绑定喇叭
      this.bindSpeakers();
    },

    populateVoiceSelect() {
      const select = this.voiceSelect;
      select.innerHTML = '';
      const optF = document.createElement('option');
      optF.value = CONFIG.VOICE_FEMALE;
      optF.textContent = 'Female (Xiaoxiao)';
      select.appendChild(optF);
      const optM = document.createElement('option');
      optM.value = CONFIG.VOICE_MALE;
      optM.textContent = 'Male (Yunyang)';
      select.appendChild(optM);

      const saved = localStorage.getItem(CONFIG.VOICE_STORAGE_KEY);
      if (saved === CONFIG.VOICE_FEMALE || saved === CONFIG.VOICE_MALE) {
        this.selectedVoice = saved;
        select.value = saved;
      } else {
        select.value = CONFIG.VOICE_FEMALE;
        this.selectedVoice = CONFIG.VOICE_FEMALE;
      }
    },

    initSpeed() {
      const saved = localStorage.getItem(CONFIG.SPEED_STORAGE_KEY);
      this.currentSpeed = saved === 'normal' ? 1.0 : 0.85;
      if (this.speedSelect) {
        this.speedSelect.value = saved === 'normal' ? 'normal' : 'slow';
      }
    },

    onVoiceChange(e) {
      this.selectedVoice = e.target.value;
      localStorage.setItem(CONFIG.VOICE_STORAGE_KEY, this.selectedVoice);
    },

    onSpeedChange(e) {
      this.currentSpeed = e.target.value === 'normal' ? 1.0 : 0.85;
      localStorage.setItem(CONFIG.SPEED_STORAGE_KEY, e.target.value);
    },

    bindSpeakers() {
      $$('.phrase.clickable').forEach((card) => {
        const speaker = card.querySelector('.speaker');
        const fire = (e) => {
          if (e) e.stopPropagation();
          const text = card.getAttribute('data-speak');
          this.speak(text, speaker);
        };

        if (speaker) {
          speaker.addEventListener('click', fire);
          speaker.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              fire(e);
            }
          });
        }

        card.addEventListener('click', (e) => {
          if (e.target.closest('.speaker')) return;
          fire(e);
        });

        card.addEventListener('keydown', (e) => {
          if (e.target.closest('.speaker')) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fire(e);
          }
        });

        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
      });
    },

    speak(text, speakerEl) {
      if (!text) return;

      // 停止当前播放
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio = null;
      }

      if (speakerEl) {
        if (this.activeSpeaker && this.activeSpeaker !== speakerEl) {
          this.activeSpeaker.classList.remove('playing');
        }
        this.activeSpeaker = speakerEl;
        speakerEl.classList.add('playing');
      }

      const voiceId = this.selectedVoice || CONFIG.VOICE_FEMALE;
      const rate = Math.min(Math.max(this.currentSpeed, 0.5), 2.0);

      // 生成代理 URL
      const urls = PROXY_LIST.map((template) =>
        template
          .replace(/\{text\}/g, encodeURIComponent(text))
          .replace(/\{voice\}/g, voiceId)
          .replace(/\{rate\}/g, rate)
      );

      this.tryProxy(urls, 0, text, speakerEl);
    },

    tryProxy(urls, index, text, speakerEl) {
      if (index >= urls.length) {
        this.fallbackSpeak(text, speakerEl);
        return;
      }

      fetch(urls[index])
        .then((response) => {
          if (!response.ok) throw new Error('HTTP ' + response.status);
          return response.blob();
        })
        .then((blob) => {
          const audioUrl = URL.createObjectURL(blob);
          const audio = new Audio(audioUrl);
          this.currentAudio = audio;

          audio.addEventListener('ended', () => {
            URL.revokeObjectURL(audioUrl);
            if (speakerEl) speakerEl.classList.remove('playing');
            if (this.currentAudio === audio) this.currentAudio = null;
          });

          audio.addEventListener('error', () => {
            URL.revokeObjectURL(audioUrl);
            if (speakerEl) speakerEl.classList.remove('playing');
            if (this.currentAudio === audio) this.currentAudio = null;
            this.tryProxy(urls, index + 1, text, speakerEl);
          });

          audio.play().catch(() => {
            this.tryProxy(urls, index + 1, text, speakerEl);
          });
        })
        .catch(() => {
          this.tryProxy(urls, index + 1, text, speakerEl);
        });
    },

    fallbackSpeak(text, speakerEl) {
      if (!('speechSynthesis' in window)) {
        if (speakerEl) speakerEl.classList.remove('playing');
        return;
      }

      const synth = window.speechSynthesis;
      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = this.currentSpeed;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      if (speakerEl) {
        utterance.onend = () => {
          speakerEl.classList.remove('playing');
          if (this.activeSpeaker === speakerEl) this.activeSpeaker = null;
        };
        utterance.onerror = () => {
          speakerEl.classList.remove('playing');
          if (this.activeSpeaker === speakerEl) this.activeSpeaker = null;
        };
      }

      synth.speak(utterance);
    },
  };

  // ================================================================
  //  9. 启动器
  // ================================================================

  const App = {
    init() {
      console.log('[HanLingo] ?? Starting up...');

      // 按顺序初始化各模块
      MobileNav.init();
      ScrollShadow.init();
      Tooltip.init();
      Paywall.init();
      CTA.init();
      AudioPlayer.init();

      console.log('[HanLingo] ? Startup complete!');
    },
  };

  // ================================================================
  //  10. 启动
  // ================================================================

  // DOM 就绪后启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init(), { once: true });
  } else {
    App.init();
  }
})();