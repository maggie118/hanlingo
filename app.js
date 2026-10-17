(() => {
  'use strict';

  /* ================================================================
   *  ⭐ 上线配置区 · LAUNCH CONFIG — 上线前只需在这里填
   *  ================================================================
   *  1) checkoutUrl   — Stripe Payment Link 或后端 checkout-session 端点。
   *                     留空 = Demo 模式（"Subscribe" 本地解锁、不收费）。
   *  2) pushApi/vapid — 每日金句推送服务器（部署见 push-server/README）。
   *                     pushApi 填服务器域名后自动从 /api/keys 拉 VAPID；
   *                     vapidPublic 仅作未部署时的兜底。
   *  3) communityInvite — Exec Circle 私密社群邀请链接（members-only）。
   *                     填任一个，已解锁会员点 "Join the Exec Circle" 直达；
   *                     都留空则弹 Demo 提示。
   *  ----------------------------------------------------------------
   */
  const LAUNCH = {
    checkoutUrl: '',
    pushApi: '',
    vapidPublic: '',
    communityInvite: { whatsapp: '', linkedin: '' }
  };

  // Internal aliases — do not edit below this line.
  const CHECKOUT_URL = LAUNCH.checkoutUrl;
  const COMMUNITY_INVITE = LAUNCH.communityInvite;

  const $ = (s) => document.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  const CATEGORY_META = {
    strange: {
      title: 'Liaozhai Tales',
      vertical: '聊斋',
      seal: '志异',
      highlight: 'Classic ghost stories with atmosphere and texture.',
      description: 'Explore the strange, the eerie, and the mythical at a measured pace with story-first Mandarin practice.'
    },
    daily: {
      title: 'Daily Life',
    vertical: '日常',
    seal: '生活',
      highlight: 'Real-life Mandarin for everyday conversation.',
      description: 'Learn how to greet people, order food, travel, shop, and chat naturally in daily situations.'
    },
    business: {
      title: 'Business & Workplace',
      vertical: '商务',
      seal: '职场',
      highlight: 'Polite, clear Mandarin for everyday work.',
      description: 'Practice beginner-friendly phrases for introductions, meetings, calls, client visits, and daily office life.'
    }
  };

  const state = {
    stories: [],
    cards: [],
    idx: 0,
    pending: null,
    currentStoryTitle: '',
    currentStoryIdx: -1,
    currentStoryColumn: '',
    currentBoard: 'survival',
    hidePinyin: false,
    stories: [],
    vocab: store.get('hanlingo_vocab', []),
    pro: store.get('hanlingo_pro', false),
    plan: store.get('hanlingo_plan', 'life'),
    access: store.get('hanlingo_access', { level: false, business: false, theme: [] }),
    settings: Object.assign({ pinyin: false, translation: false }, store.get('hanlingo_settings', {}))
  };
  let deferredInstallPrompt = null;

  function saveSubscriptionState() {
    store.set('hanlingo_pro', state.pro);
    store.set('hanlingo_plan', state.plan);
    store.set('hanlingo_access', state.access);
  }

  // Tiny DOM builder; strings are appended as text nodes, so nothing is parsed as HTML.
  function h(tag, props, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (k === 'class') e.className = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else if (v === true) e.setAttribute(k, '');
      else if (v !== false && v != null) e.setAttribute(k, v);
    }
    kids.flat().forEach((c) => c != null && e.append(c));
    return e;
  }

  const saveVocab = () => store.set('hanlingo_vocab', state.vocab);
  const saveSettings = () => store.set('hanlingo_settings', state.settings);
  const hasWord = (w) => state.vocab.some((v) => v.word === w);

  function speak(text, rate = 0.7) {
    if (!('speechSynthesis' in window) || !text) return;
    const pickVoice = () => {
      const voices = speechSynthesis.getVoices();
      const match = /zh|mandarin|china|xiao|yu/i;
      return voices.find((v) => match.test((v.name || '') + ' ' + (v.lang || ''))) || voices[0] || null;
    };

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = rate;
    u.pitch = 1.02;
    u.volume = 1;
    const voice = pickVoice();
    if (voice) u.voice = voice;
    speechSynthesis.cancel();

    const doSpeak = () => {
      try { speechSynthesis.speak(u); } catch (e) {}
    };

    if (speechSynthesis.getVoices().length) {
      // Chrome: cancel() clears asynchronously; defer so the new utterance is not swallowed.
      setTimeout(doSpeak, 80);
      return;
    }

    const onVoicesReady = () => {
      const readyVoice = pickVoice();
      if (readyVoice) u.voice = readyVoice;
      doSpeak();
      window.removeEventListener('voiceschanged', onVoicesReady);
    };
    window.addEventListener('voiceschanged', onVoicesReady, { once: true });
    setTimeout(() => {
      doSpeak();
      window.removeEventListener('voiceschanged', onVoicesReady);
    }, 220);
  }

  /* ---------- Views & bottom nav ---------- */
  const VIEWS = ['learn', 'reader', 'vocab', 'profile', 'premium', 'community'];

  function show(view) {
    VIEWS.forEach((v) => { $('#view-' + v).hidden = v !== view; });
    document.body.classList.toggle('theme-premium', view === 'premium');
    document.body.classList.toggle('theme-community', view === 'community');
    const tab = view === 'reader' ? 'learn' : view;
    document.querySelectorAll('.bottom-nav button').forEach((b) => {
      if (b.dataset.view === tab) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    closeOverlays();
    if (view === 'learn') renderDashboard();
    if (view === 'vocab') renderVocab();
    if (view === 'profile') renderProfile();
    if (view === 'premium') renderPremium();
    if (view === 'community') renderCommunity();
    // Deep-linkable hash for SEO landing views (#premium / #community); reset to root when leaving it.
    const target = view === 'premium' ? '#premium' : (view === 'community' ? '#community' : (location.hash === '#premium' || location.hash === '#community' ? '' : location.hash));
    if (location.hash !== target) {
      try { history.replaceState(null, '', location.pathname + location.search + target); } catch (e) { location.hash = target; }
    }
    window.scrollTo(0, 0);
  }

  /* ---------- Reader ---------- */
  function tokenize(s, list) {
    const out = [];
    let i = 0;
    while (i < s.length) {
      let hit = null;
      for (const v of list) {
        if (s.startsWith(v.word, i) && (!hit || v.word.length > hit.word.length)) hit = v;
      }
      if (hit) { out.push({ t: hit.word, v: hit }); i += hit.word.length; }
      else {
        const last = out[out.length - 1];
        if (last && !last.v) last.t += s[i]; else out.push({ t: s[i] });
        i++;
      }
    }
    return out;
  }

  const PINYIN_SYLLABLES = new Set(('a ai an ang ao ba bai ban bang bao bei ben beng bi bian biao bie bin bing bo bu ' +
    'ca cai can cang cao ce cen ceng cha chai chan chang chao che chen cheng chi chong chou chu chua chuai chuan chuang chui chun chuo ci cong cou cu cuan cui cun cuo ' +
    'da dai dan dang dao de dei den deng di dia dian diao die ding diu dong dou du duan dui dun duo e ei en eng er fa fan fang fei fen feng fo fou fu ' +
    'ga gai gan gang gao ge gei gen geng gong gou gu gua guai guan guang gui gun guo ha hai han hang hao he hei hen heng hong hou hu hua huai huan huang hui hun huo ' +
    'ji jia jian jiang jiao jie jin jing jiong jiu ju juan jue jun ka kai kan kang kao ke ken keng kong kou ku kua kuai kuan kuang kui kun kuo ' +
    'la lai lan lang lao le lei leng li lia lian liang liao lie lin ling liu long lou lu luan lun lv lve luo ma mai man mang mao me mei men meng mi mian miao mie min ming miu mo mou mu ' +
    'na nai nan nang nao ne nei nen neng ni nian niang niao nie nin ning niu nong nou nu nuan nv nve nuo nar zher o ou ' +
    'pa pai pan pang pao pei pen peng pi pian piao pie pin ping po pou pu qi qia qian qiang qiao qie qin qing qiong qiu qu quan que qun ' +
    'ran rang rao re ren reng ri rong rou ru rua ruan rui run ruo sa sai san sang sao se sen seng sha shai shan shang shao she shei shen sheng shi shou shu shua shuai shuan shuang shui shun shuo si song sou su suan sui sun suo ' +
    'ta tai tan tang tao te teng ti tian tiao tie ting tong tou tu tuan tui tun tuo wa wai wan wang wei wen weng wo wu ' +
    'xi xia xian xiang xiao xie xin xing xiong xiu xu xuan xue xun ya yan yang yao ye yi yin ying yo yong you yu yuan yue yun ' +
    'za zai zan zang zao ze zei zen zeng zha zhai zhan zhang zhao zhe zhei zhen zheng zhi zhong zhou zhu zhua zhuai zhuan zhuang zhui zhun zhuo zi zong zou zu zuan zui zun zuo').split(/\s+/));
  const isHanzi = (ch) => /^[\u3400-\u9fff]$/u.test(ch);

  function pinyinLetters(value) {
    const result = [];
    for (const char of value) {
      const base = /[üǖǘǚǜÜǕǗǙǛ]/.test(char)
        ? 'v'
        : char.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      if (/^[a-z]$/.test(base)) result.push({ base, display: char });
    }
    return result;
  }

  function splitPinyinSyllables(sentence, pinyin) {
    const latinWords = new Set((sentence.match(/[a-z]+/gi) || []).map((word) => word.toLowerCase()));
    const tokens = (pinyin || '').trim().split(/[\s'’]+/).filter(Boolean)
      .filter((token) => !latinWords.has(token.toLowerCase()));
    const letters = tokens.flatMap(pinyinLetters);
    const compact = letters.map((letter) => letter.base).join('');
    const boundaries = new Set();
    let position = 0;
    tokens.forEach((token) => {
      position += pinyinLetters(token).length;
      boundaries.add(position);
    });

    const hanziCount = Array.from(sentence).filter(isHanzi).length;
    const erhuaCount = tokens.filter((token) =>
      ['nar', 'zher'].includes(pinyinLetters(token).map((letter) => letter.base).join(''))).length;
    const targetCount = hanziCount - erhuaCount;
    const memo = new Map();
    function splitAt(index, remaining) {
      const key = index + ':' + remaining;
      if (memo.has(key)) return memo.get(key);
      if (!remaining) return index === compact.length ? { score: 0, parts: [] } : null;

      let best = null;
      for (let end = index + 1; end <= Math.min(compact.length, index + 6); end++) {
        const base = compact.slice(index, end);
        if (!PINYIN_SYLLABLES.has(base)) continue;
        const rest = splitAt(end, remaining - 1);
        if (!rest) continue;
        const score = rest.score + (end === compact.length || boundaries.has(end) ? 0 : 1);
        if (!best || score < best.score) {
          best = {
            score,
            parts: [{ base, reading: letters.slice(index, end).map((letter) => letter.display).join('') }, ...rest.parts]
          };
        }
      }
      memo.set(key, best);
      return best;
    }

    const result = splitAt(0, targetCount);
    if (!result) return null;
    const aligned = [];
    let hanziIndex = 0;
    for (const part of result.parts) {
      aligned[hanziIndex] = part.reading;
      if (part.base.endsWith('r') && sentenceHanzi(sentence)[hanziIndex + 1] === '儿') {
        aligned[hanziIndex + 1] = '';
        hanziIndex += 2;
      } else {
        hanziIndex++;
      }
    }
    return aligned;
  }

  function sentenceHanzi(sentence) {
    return Array.from(sentence).filter(isHanzi);
  }

  function charWrap(ch, py, showPinyin, extraClass = '') {
    const punctuation = /^[，。！？；：、,.!?;:]+$/.test(ch);
    const wrap = h('span', { class: 'char-wrap' + (punctuation ? ' punctuation' : '') + (extraClass ? ' ' + extraClass : '') });
    if (showPinyin && py) wrap.append(h('span', { class: 'pinyin' }, py));
    wrap.append(h('span', { class: 'hanzi' }, ch));
    return wrap;
  }

  function renderAlignedChars(chars, alignment, alignmentStart) {
    const rendered = [];
    let hanziOffset = alignmentStart;
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      if (!isHanzi(ch)) {
        rendered.push(charWrap(ch, '', true));
        continue;
      }
      const pinyin = alignment[hanziOffset] || '';
      if (pinyin && /r$/i.test(pinyin) && chars[i + 1] === '儿') {
        rendered.push(charWrap(ch + chars[i + 1], pinyin, true, 'erhua'));
        i++;
        hanziOffset += 2;
      } else {
        rendered.push(charWrap(ch, pinyin, true));
        hanziOffset++;
      }
    }
    return { nodes: rendered, nextHanzi: hanziOffset };
  }

  function getCardSegments(card) {
    if (Array.isArray(card.segments) && card.segments.length) {
      return card.segments.map((seg) => ({
        s: Number(seg.s) || 0,
        e: Number(seg.e) || 0,
        zh: seg.zh || card.sentence || '',
        en: seg.en || card.translation || ''
      }));
    }
    const sentence = (card.sentence || '').trim();
    const translation = (card.translation || '').trim();
    const duration = Number(card.audioDuration) > 0 ? Number(card.audioDuration) : Math.max(12, Math.ceil((sentence.length || 1) / 7) + 8);
    return [{ s: 0, e: duration, zh: sentence, en: translation }];
  }

  function formatClock(value) {
    const total = Math.max(0, Math.floor(Number(value) || 0));
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return mins + ':' + String(secs).padStart(2, '0');
  }

  function renderAudioPlayer(card) {
    const segments = getCardSegments(card);
    const uid = 'player-' + (card.id || String(Math.random()).slice(2));
    const duration = Math.max(20, segments.reduce((max, seg) => Math.max(max, Number(seg.e) || 0), 0));

    class DemoMedia extends EventTarget {
      constructor(total, text) {
        super();
        this.duration = total;
        this._t = 0;
        this.paused = true;
        this.playbackRate = 0.8;
        this.volume = 1;
        this.muted = false;
        this._text = text || '';
        this._last = performance.now();
        this._iv = null;
        this._ttsTimer = null;
      }
      get currentTime() { return this._t; }
      set currentTime(v) {
        this._t = Math.max(0, Math.min(this.duration, Number(v) || 0));
        this.dispatchEvent(new Event('timeupdate'));
      }
      _syncTts() {
        if (!('speechSynthesis' in window)) return;
        const voice = pickSpeechVoice();
        const u = new SpeechSynthesisUtterance(this._text);
        u.lang = 'zh-CN';
        u.rate = Math.max(0.6, Math.min(1.0, this.playbackRate * 0.8));
        u.pitch = 1.02;
        u.volume = this.muted ? 0 : this.volume;
        if (voice) u.voice = voice;
        const end = () => {
          if (!this.paused) {
            this.paused = true;
            clearInterval(this._iv);
            this._iv = null;
            this._t = this.duration;
            this.dispatchEvent(new Event('pause'));
            this.dispatchEvent(new Event('timeupdate'));
            this.dispatchEvent(new Event('ended'));
          }
        };
        u.onend = end;
        u.onerror = end;
        speechSynthesis.cancel();
        clearTimeout(this._ttsTimer);
        // Chrome: cancel() clears asynchronously; defer so this utterance is not swallowed.
        this._ttsTimer = setTimeout(() => {
          if (this.paused) return;
          try { speechSynthesis.speak(u); } catch (e) {}
        }, 80);
      }
      play() {
        if (!this.paused) return Promise.resolve();
        if (this._t >= this.duration) this._t = 0;
        this.paused = false;
        this._last = performance.now();
        this._iv = setInterval(() => {
          const now = performance.now();
          this._t += ((now - this._last) / 1000) * this.playbackRate;
          this._last = now;
          if (this._t >= this.duration) {
            this._t = this.duration;
          }
          this.dispatchEvent(new Event('timeupdate'));
        }, 100);
        this.dispatchEvent(new Event('play'));
        if ('speechSynthesis' in window) this._syncTts();
        return Promise.resolve();
      }
      pause() {
        if (this.paused) return;
        this.paused = true;
        clearInterval(this._iv);
        this._iv = null;
        clearTimeout(this._ttsTimer);
        if ('speechSynthesis' in window) speechSynthesis.cancel();
        this.dispatchEvent(new Event('pause'));
      }
    }

    const media = card.audioUrl ? new Audio(card.audioUrl) : new DemoMedia(duration, (card.sentence || '').trim());
    if (card.audioUrl) {
      media.preload = 'metadata';
      media.src = card.audioUrl;
      media.load();
    }

    const st = { mode: 'once', speed: 0.8, subs: 'both', dict: false, dictText: '', A: null, B: null, loopSeg: 0, lastSeg: 0, shown: -1, segments };
    media.playbackRate = st.speed;

    const icons = {
      play: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5.5v13l11-6.5-11-6.5z"/></svg>',
      pause: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1.5"/><rect x="14" y="4" width="5" height="16" rx="1.5"/></svg>',
      vol: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4zm11.5 1.5a4 4 0 0 1 0 5M17 7a8 8 0 0 1 0 10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
      muted: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4zm11 1 5 5m0-5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    };

    const root = h('section', { class: 'player-shell', 'aria-label': 'Audio player' });
    const sub = h('div', { class: 'audio-sub', 'aria-live': 'polite' });
    const playBtn = h('button', { class: 'play-btn', type: 'button', 'aria-label': 'Play' }, icons.play);
    const muteBtn = h('button', { class: 'mute-btn', type: 'button', 'aria-label': 'Mute' }, icons.vol);
    const seek = h('input', { class: 'seek-range', id: uid + '-seek', type: 'range', min: '0', max: '1000', value: '0', 'aria-label': 'Playback position' });
    const vol = h('input', { class: 'volume-range', id: uid + '-vol', type: 'range', min: '0', max: '100', value: '100', 'aria-label': 'Volume' });
    const time = h('span', { class: 'time-tag' }, '0:00 / 0:00');
    const seekWrap = h('div', { class: 'seek-wrap' }, seek);
    const topBar = h('div', { class: 'player-bar' }, playBtn, seekWrap, time, muteBtn, vol);
    const abBtn = h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'ab', id: uid + '-ab' }, 'A-B Loop');
    const dictInput = h('input', { type: 'checkbox', id: uid + '-dict' });

    const modeRow = h('div', { class: 'player-row', role: 'group', 'aria-label': 'Playback mode' },
      abBtn,
      h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'continuous' }, 'Continuous'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'sentence' }, 'Sentence Loop'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'once' }, 'Play Once'),
      h('label', { class: 'toggle' },
        dictInput,
        h('span', { class: 'toggle-track' }),
        h('span', { class: 'toggle-label' }, 'Dictation Mode')));

    const speedRow = h('div', { class: 'player-row', role: 'group', 'aria-label': 'Playback speed' },
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '0.6' }, '0.6x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '0.8' }, '0.8x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '1' }, '1x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '1.2' }, '1.2x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '1.5' }, '1.5x'));

    const subsRow = h('div', { class: 'player-row', role: 'group', 'aria-label': 'Subtitle display' },
      h('button', { class: 'chip', type: 'button', 'data-kind': 'subs', 'data-value': 'both' }, 'Chinese + English'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'subs', 'data-value': 'en' }, 'English'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'subs', 'data-value': 'zh' }, 'Chinese'));

    const dictBox = h('textarea', {
      class: 'dict-input',
      rows: '2',
      maxlength: '120',
      placeholder: 'Type the Chinese sentence you hear',
      'aria-label': 'Dictation: type the Chinese sentence you hear'
    });

    const setSeekFill = (el) => {
      const min = Number(el.min) || 0;
      const max = Number(el.max) || 1000;
      const value = Number(el.value) || 0;
      const pct = ((value - min) / (max - min)) * 100;
      el.style.setProperty('--p', pct + '%');
    };

    function segAt(cur) {
      for (let i = 0; i < segments.length; i++) {
        if (cur >= segments[i].s && cur < segments[i].e) return i;
      }
      return Math.max(0, segments.length - 1);
    }

    function pickSpeechVoice() {
      const all = 'speechSynthesis' in window ? speechSynthesis.getVoices() : [];
      const candidates = [
        /xiaoxiao|xiao.*(xiao|yan)|zh-cn.*female|google.*zh|ms.*xiao/i,
        /zh-cn|zh-cn.*(voice|female)/i,
        /.*(zh|china|chinese).*/i
      ];
      for (const rx of candidates) {
        const found = all.find((v) => rx.test(v.name || '') || rx.test(v.lang || ''));
        if (found) return found;
      }
      return null;
    }

    function syncPlayState() {
      playBtn.innerHTML = media.paused ? icons.play : icons.pause;
      playBtn.setAttribute('aria-label', media.paused ? 'Play' : 'Pause');
      muteBtn.innerHTML = media.muted || media.volume === 0 ? icons.muted : icons.vol;
      muteBtn.setAttribute('aria-label', media.muted || media.volume === 0 ? 'Unmute' : 'Mute');
    }

    function drawMarkers() {
      seekWrap.querySelectorAll('.marker').forEach((m) => m.remove());
      [st.A, st.B].forEach((v) => {
        if (v == null || duration <= 0) return;
        const marker = document.createElement('i');
        marker.className = 'marker';
        marker.style.left = 'calc(' + ((v / duration) * 100) + '% - 1px)';
        seekWrap.appendChild(marker);
      });
    }

    function renderSubtitle() {
      const current = segments[segAt(media.currentTime)] || segments[0];
      const wrapper = document.createElement('div');
      wrapper.className = 'subtitle-inner';
      if (st.dict) {
        const hint = document.createElement('p');
        hint.className = 'sub-hint';
        hint.textContent = 'Dictation mode: type the Chinese sentence you hear.';
        wrapper.appendChild(hint);
        dictBox.value = st.dictText;
        dictBox.placeholder = 'Type the Chinese sentence you hear';
        dictBox.hidden = false;
      } else {
        dictBox.hidden = true;
        if (st.subs !== 'en') {
          const zh = document.createElement('p');
          zh.className = 'sub-zh';
          zh.lang = 'zh-CN';
          zh.textContent = current.zh || '';
          wrapper.appendChild(zh);
        }
        if (st.subs !== 'zh') {
          const en = document.createElement('p');
          en.className = 'sub-en';
          en.textContent = current.en || '';
          wrapper.appendChild(en);
        }
      }
      sub.replaceChildren(wrapper);
    }

    function updateModeButtons() {
      root.querySelectorAll('[data-kind="mode"]').forEach((chip) => {
        const active = chip.dataset.value === st.mode;
        chip.classList.toggle('on', active);
        chip.setAttribute('aria-pressed', String(active));
      });
      root.querySelectorAll('[data-kind="speed"]').forEach((chip) => {
        const active = String(Number(chip.dataset.value)) === String(Number(st.speed));
        chip.classList.toggle('on', active);
        chip.setAttribute('aria-pressed', String(active));
      });
      root.querySelectorAll('[data-kind="subs"]').forEach((chip) => {
        const active = chip.dataset.value === st.subs;
        chip.classList.toggle('on', active);
        chip.setAttribute('aria-pressed', String(active));
      });
      if (st.A == null) abBtn.textContent = 'A-B Loop';
      else if (st.B == null) abBtn.textContent = 'A ' + formatClock(st.A) + ' · Set B';
      else abBtn.textContent = formatClock(st.A) + '–' + formatClock(st.B);
      dictInput.checked = st.dict;
    }

    function refresh() {
      updateModeButtons();
      drawMarkers();
      renderSubtitle();
    }

    function onTimeUpdate() {
      const current = media.currentTime;
      const t = Number(current) || 0;
      const total = Number(media.duration) || duration;
      seek.value = String((t / total) * 1000);
      setSeekFill(seek);
      time.textContent = formatClock(t) + ' / ' + formatClock(total);

      if (st.mode === 'ab' && st.A != null && st.B != null && t >= st.B) {
        media.currentTime = st.A;
        return;
      }
      if (st.mode === 'sentence' && segments[st.loopSeg] && t >= segments[st.loopSeg].e) {
        media.currentTime = segments[st.loopSeg].s;
        return;
      }
      if (st.dict && !media.paused && segments[st.lastSeg] && t >= segments[st.lastSeg].e - 0.05) {
        const next = Math.min(st.lastSeg + 1, segments.length - 1);
        media.pause();
        st.lastSeg = next;
        media.currentTime = segments[next].s;
        return;
      }

      st.lastSeg = segAt(t);
      const idx = segAt(t);
      if (idx !== st.shown) {
        st.shown = idx;
        renderSubtitle();
      }
    }

    function abClick() {
      if (st.A == null) {
        st.A = media.currentTime;
        st.B = null;
      } else if (st.B == null) {
        const now = media.currentTime;
        let start = st.A;
        let end = now;
        if (end < start) {
          [start, end] = [end, start];
        }
        if (end - start < 0.5) end = Math.min(start + 1, duration);
        st.A = start;
        st.B = end;
        st.mode = 'ab';
      } else {
        st.A = null;
        st.B = null;
        st.mode = 'once';
      }
      refresh();
    }

    playBtn.addEventListener('click', () => {
      if (media.paused) {
        const p = media.play();
        if (p && p.catch) p.catch(() => {});
      } else {
        media.pause();
      }
    });

    seek.addEventListener('input', (e) => {
      const target = Number(e.target.value) || 0;
      const total = Number(media.duration) || duration;
      media.currentTime = Math.max(0, (target / 1000) * total);
      st.loopSeg = st.lastSeg = segAt(media.currentTime);
      setSeekFill(e.target);
    });

    vol.addEventListener('input', (e) => {
      const value = Number(e.target.value) || 0;
      media.volume = value / 100;
      media.muted = media.volume === 0;
      setSeekFill(e.target);
      syncPlayState();
    });

    muteBtn.addEventListener('click', () => {
      media.muted = !media.muted;
      syncPlayState();
    });

    dictInput.addEventListener('change', (e) => {
      st.dict = e.target.checked;
      if (!st.dict) st.dictText = dictBox.value || '';
      st.lastSeg = segAt(media.currentTime);
      refresh();
    });

    dictBox.addEventListener('input', (e) => {
      st.dictText = e.target.value || '';
    });

    root.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-kind]');
      if (!chip) return;
      const kind = chip.dataset.kind;
      const value = chip.dataset.value;
      if (kind === 'mode') {
        if (value === 'ab') { abClick(); return; }
        st.mode = value;
        if (value === 'sentence') st.loopSeg = segAt(media.currentTime);
        st.A = null;
        st.B = null;
      } else if (kind === 'speed') {
        st.speed = Number(value);
        media.playbackRate = st.speed;
      } else if (kind === 'subs') {
        st.subs = value;
      }
      refresh();
    });

    media.addEventListener('timeupdate', onTimeUpdate);
    media.addEventListener('loadedmetadata', () => { onTimeUpdate(); drawMarkers(); });
    media.addEventListener('play', () => { st.lastSeg = segAt(media.currentTime); syncPlayState(); });
    media.addEventListener('pause', syncPlayState);
    media.addEventListener('ended', () => {
      if (st.mode === 'continuous') {
        media.currentTime = 0;
        media.play();
      }
      syncPlayState();
    });

    setSeekFill(seek);
    setSeekFill(vol);
    syncPlayState();
    refresh();
    time.textContent = formatClock(0) + ' / ' + formatClock(duration);

    root.append(topBar, sub, modeRow, speedRow, subsRow, dictBox);
    return root;
  }

  function renderReader() {
    const c = state.cards[state.idx];
    const total = state.cards.length;
    const last = state.idx === total - 1;
    const pinyinAlignment = splitPinyinSyllables(c.sentence, c.pinyin);
    if (!pinyinAlignment) console.error('Could not align card pinyin:', c.id);
    let hanziOffset = 0;
    const sentence = h('p', { class: 'sentence', lang: 'zh-CN' },
      ...tokenize(c.sentence, c.vocabList).map((tk) => {
        const aligned = renderAlignedChars(Array.from(tk.t), pinyinAlignment || [], hanziOffset);
        hanziOffset = aligned.nextHanzi;
        if (tk.v) {
          return h('button', {
            class: 'word' + (hasWord(tk.v.word) ? ' saved' : ''),
            type: 'button',
            onclick: () => openWord(tk.v)
          }, ...aligned.nodes);
        }
        return h('span', { class: 'char-group' }, ...aligned.nodes);
      }));
    let backHanziOffset = 0;
    const backSentence = h('p', { class: 'sentence back-aligned', lang: 'zh-CN' },
      ...tokenize(c.sentence, c.vocabList).map((tk) => {
        const aligned = renderAlignedChars(Array.from(tk.t), pinyinAlignment || [], backHanziOffset);
        backHanziOffset = aligned.nextHanzi;
        return h('span', { class: 'char-group' }, ...aligned.nodes);
      }));

    $('#view-reader').replaceChildren(
      h('div', { class: 'cardflow' },
        h('div', { class: 'cf-top' },
          h('button', { class: 'cf-back', type: 'button', 'aria-label': 'Back', onclick: () => show('learn') }, '←'),
          h('span', { class: 'cf-count' }, '#' + (c.audioKey || String(state.idx + 1))),
          h('span', { class: 'tag ' + (freeNow(c) ? 'free' : 'pro') }, freeNow(c) ? 'Free' : 'Pro')),
        h('div', { class: 'cf-card', 'data-flip': '0', onclick: () => flipCard() },
          h('div', { class: 'cf-inner' },
            h('div', { class: 'cf-face cf-front' },
              h('div', { class: 'cf-sentence', 'data-hidepy': state.hidePinyin ? '1' : '0' },
                sentence),
              h('div', { class: 'cf-audio3' },
                h('button', { class: 'cf-speed slow', type: 'button', onclick: (e) => { e.stopPropagation(); playAudio(c, 'slow'); } }, '🐢 Slow'),
                h('button', { class: 'cf-speed normal', type: 'button', onclick: (e) => { e.stopPropagation(); playAudio(c, 'normal'); } }, '▶ Normal'),
                h('button', { class: 'cf-speed fast', type: 'button', onclick: (e) => { e.stopPropagation(); playAudio(c, 'fast'); } }, '🐇 Fast')),
              h('p', { class: 'cf-ai-audio' }, 'Audio: AI-generated native voice'),
              h('p', { class: 'cf-drill' }, '🔁 Repeat: listen Slow → repeat 3× → record & compare → say the Chinese from the English.'),
              h('div', { class: 'cf-flip' }, '⟳ Tap to flip')),
            h('div', { class: 'cf-face cf-back' },
              backSentence,
              h('p', { class: 'cf5-en' }, c.translation || ''),
              ...(c.undercurrent ? [
                h('div', { class: 'cf5-uc' },
                  (c.undercurrent.origin ? h('p', { class: 'cf5-idiom' }, '✦ ' + c.undercurrent.origin) : null),
                  (c.undercurrent.idiom ? h('p', { class: 'cf5-idiom' }, '✦ ' + c.undercurrent.idiom) : null),
                  (c.undercurrent.source ? h('p', { class: 'cf5-src' }, '📜 ' + c.undercurrent.source) : null),
                  h('p', { class: 'cf5-ctx' }, '💬 ' + c.undercurrent.context),
                  h('p', { class: 'cf5-sig' }, '🔑 ' + c.undercurrent.signal))
                ] : [
                h('div', { class: 'cf5-note' },
                  h('b', {}, '💡 Annotation'),
                  h('p', {}, ...(cardNote(c) ? highlightZh(cardNote(c)) : ['—']))),
                h('div', { class: 'cf5-reply' },
                  h('b', {}, '🔁 Likely reply'),
                  ...(c.replyPinyin ? [h('p', { class: 'cf5-reply-py' }, c.replyPinyin)] : []),
                  h('p', { class: 'cf5-reply-zh' }, cardReply(c) || '—'))
                ]),
              h('p', { class: 'cf-hint' }, 'Tap to flip')))),
        h('div', { class: 'cf-actions' },
          h('button', { class: 'cf-btn fav' + (isStarred(c.id) ? ' faved' : ''), type: 'button', onclick: () => markStar() }, isStarred(c.id) ? '♥ Saved' : '♡ Save'),
          h('button', { class: 'cf-btn check', type: 'button', onclick: () => { recordDaily(); bumpStoryProgress(); const _id = state.cards[state.idx].id; srsLearn(_id); if (last) { maybeCelebrate(); show('learn'); } else go(state.idx + 1); } }, last ? '✓ 完成' : 'Next →'))));
  }

  function levelIsLow(c) { const r = (c.hskRange || ''); return /1-2|1-3/.test(r); }
  function cardNote(c) {
    if (c.note) return c.note;
    if (c.context) return c.context;
    if (c.grammarPoint) return c.grammarPoint;
    return '文化：日常口语，自然亲切。通俗用法：直接套用这个句子。什么时候说：' + (levelIsLow(c) ? '跟朋友、服务员或熟人轻松聊天时。' : '日常对话或轻松场合，开口就能用。');
  }
  function cardReply(c) {
    if (c.reply) return c.reply;
    return '对方可能回："好的。" / "可以。"（视场景而定）';
  }
  function audioPath(c, tag) {
    const k = c.audioKey;
    if (!k) return '';
    const f = tag === 'slow' ? `${k}_slow.mp3` : tag === 'fast' ? `${k}_fast.mp3` : `${k}.mp3`;
    const dir = { survival: 'survival', business: 'business', mastery: 'elite' }[state.currentBoard] || 'survival';
    return 'audio/' + dir + '/' + f;
  }
  function playAudio(c, tag) {
    const src = audioPath(c, tag);
    if (!src) { speak(c.sentence); return; }
    let a = document.getElementById('hanlingo-speed-audio');
    if (!a) { a = document.createElement('audio'); a.id = 'hanlingo-speed-audio'; document.body.appendChild(a); }
    a.src = src; a.play().catch(() => {});
  }
  function flipCard() {
    const card = document.querySelector('.cf-card');
    if (!card) return;
    card.setAttribute('data-flip', card.getAttribute('data-flip') === '1' ? '0' : '1');
  }
  function togglePinyin() {
    state.hidePinyin = !state.hidePinyin;
    renderReader();
  }
  function highlightZh(text) {
    return String(text).split(/([（(][^（）()]{1,24}[）)])/g)
      .filter(Boolean)
      .map((p) => (/^[（(]/.test(p) ? h('mark', {}, p) : p));
  }
  function highlightCtx(text) {
    return String(text).split(/('[^']{2,60}'|"[^"]{2,60}")/g).filter(Boolean)
      .map((p) => (/^['"]/.test(p) ? h('mark', {}, p) : p));
  }
  function loadStars() { try { return store.get('hanlingo_stars', {}); } catch (e) { return {}; } }
  function saveStars(s) { store.set('hanlingo_stars', s); }
  function isStarred(id) { return !!loadStars()[id]; }
  function markStar() {
    const id = state.cards[state.idx].id;
    const stars = loadStars();
    stars[id] = !stars[id];
    saveStars(stars);
    const b = document.querySelector('.cf-btn.fav');
    if (b) { b.classList.toggle('faved'); b.innerText = stars[id] ? '♥ Saved' : '♡ Save'; }
  }

  // Paywall gate: a locked card is never rendered, so its text never reaches the DOM.
  function freeNow() {
    const s = state.stories[state.currentStoryIdx];
    return !!s && state.idx < (s.freeCards || 0);
  }
  function go(i) {
    if (i < 0 || i >= state.cards.length) return;
    const s = state.stories[state.currentStoryIdx];
    const trialN = (s && s.freeCards) || 0;
    if (i >= trialN && !canOpenStory(s)) { state.pending = i; openPaywall(s && s.category === 'business' ? 'biz' : 'level'); return; }
    state.idx = i;
    show('reader');
    renderReader();
  }

  /* ---------- Stories (multi-deck) ---------- */
  function openStory(i) {
    const s = state.stories[i];
    if (!s) return;
    state.cards = s.cards;
    state.currentStoryTitle = (s.title.split('·')[1] || s.title).trim();
    state.currentStoryIdx = i;
    state.currentStoryColumn = s.columnId || '';
    state.idx = 0;
    state.currentBoard = s.category === 'business' ? 'business' : (s.category === 'strange' || s.category === 'mastery' || s.category === 'elite' || s.category === 'hsk79' ? 'mastery' : 'survival');
    renderIntro(s);
    show('reader');
  }

  // Story intro screen: shown before card 1 so readers know what they are starting.
  function renderIntro(s) {
    const zh = (s.title.split('·')[0] || '').trim();
    const en = (s.title.split('·')[1] || s.title).trim();
    $('#view-reader').replaceChildren(
      h('div', { class: 'intro' },
        h('div', { class: 'r-top' },
          h('button', { class: 'btn ghost', type: 'button', onclick: () => show('learn') }, 'Back'),
          h('button', { class: 'btn ghost', type: 'button', onclick: () => sharePack(s) }, 'Share')),
        h('div', { class: 'cover big ' + (s.coverClass || 'c1'), 'aria-hidden': 'true' }, s.cover || zh.slice(0, 1)),
        h('h2', { class: 'intro-title' }, en),
        h('p', { class: 'intro-zh', lang: 'zh-CN' }, zh),
        s.introEn ? h('p', { class: 'intro-text intro-text-en' }, s.introEn) : null,
        s.intro ? h('p', { class: 'intro-text intro-text-zh', lang: 'zh-CN' }, s.intro) : null,
        s.introZh ? h('p', { class: 'intro-sent', lang: 'zh-CN' }, s.introZh) : null,
        h('div', { class: 'tags' },
          h('span', { class: 'tag' }, levelLabel(s.hskRange)),
          h('span', { class: 'tag' }, cefrLabel(s.hskRange)),
          h('span', { class: 'tag' }, '≈' + estMins(s) + ' min'),
          h('span', { class: 'tag' }, s.totalCards + ' cards'),
          h('span', { class: 'tag free' }, 'Cards 1-' + s.freeCards + ' Free')),
        h('button', { class: 'btn primary start', type: 'button', onclick: () => go(0) }, 'Start reading')));
  }

  function hskRank(r) { return (r === 'HSK 1-2' || r === 'HSK 1-3') ? 1 : r === 'HSK 5-6' ? 3 : 2; }

  function packSlug(t) { const e = t.indexOf(' · '); const n = e >= 0 ? t.slice(e + 3) : t; return n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'pack'; }
  function sharePack(s) {
    const url = 'https://hanlingo.app/story/' + packSlug(s.title) + '.html';
    function doCopy() {
      function fallback() { const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); showMiniToast('Link copied — share this story'); } catch (e2) { prompt('Copy this link:', url); } ta.remove(); }
      try { navigator.clipboard.writeText(url).then(() => showMiniToast('Link copied — share this story')).catch(() => fallback()); } catch (e) { fallback(); }
    }
    if (navigator.share) { navigator.share({ title: s.title || '', url }).catch(() => {}); } else { doCopy(); }
  }

  // User-facing level label (avoids the HSK acronym outsiders may not know)
  function levelLabel(r) {
    const x = r || '';
    if (x === 'HSK 1-2' || x === 'HSK 1-3') return 'Beginner · Free forever';
    if (x === 'HSK 5-6') return 'Advanced · Pro';
    if (x === 'HSK 4-6') return 'Intermediate · Pro';
    if (x === 'HSK 7-9') return 'Advanced · Executive';
    return 'Pro';
  }

  function canOpenStory(s) {
    if (!s) return true;
    const cid = s.columnId || '';
    if (s.category === 'business') return state.access.business || state.access.theme.indexOf(cid) >= 0;
    const _r = s.hskRange || 'HSK 3-4';
    if (_r === 'HSK 1-2' || _r === 'HSK 1-3') return true;
    return state.access.level || state.access.theme.indexOf(cid) >= 0;
  }

  const BOARD_CAT = { survival: 'daily', business: 'business', mastery: 'strange' };
  const DAY_GOAL = { survival: 10, business: 5, mastery: 3 };
  function dayGoal() { return DAY_GOAL[state.currentBoard] || 5; }

  function dailyKey(d) { return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function dailyProgress() {
    const now = new Date();
    const key = dailyKey(now);
    const rec = store.get('hanlingo_daily', {});
    if (rec && rec.date === key) return rec;
    return { date: key, count: 0 };
  }
  function recordDaily() {
    const rec = dailyProgress();
    rec.count += 1;
    store.set('hanlingo_daily', rec);
  }
  function maybeShowInstallBanner() {
    if (document.getElementById('install-banner')) return;
    if (store.get('hanlingo_install_dismiss', false) || store.get('hanlingo_installed', false)) return;
    if ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true) return;
    const banner = h('div', { class: 'install-banner', id: 'install-banner' },
      h('div', { class: 'install-banner-inner' },
        h('div', { class: 'ib-art', 'aria-hidden': 'true' }),
        h('div', { class: 'ib-copy' },
          h('b', {}, 'Want to learn on the train?'),
          h('span', {}, 'Add HanLingo to your Home Screen in 1-click. No download required.')),
        h('button', { class: 'ib-btn', type: 'button', onclick: () => { dismissInstallBanner(true); installApp(); } }, 'Add'),
        h('button', { class: 'ib-x', type: 'button', 'aria-label': 'Dismiss', onclick: () => dismissInstallBanner(false) }, '×')));
    document.body.appendChild(banner);
  }
  function dismissInstallBanner(installed) {
    store.set('hanlingo_install_dismiss', true);
    if (installed) store.set('hanlingo_installed', true);
    const b = document.getElementById('install-banner');
    if (b) b.remove();
  }
  function todayQuote() {
    const cat = BOARD_CAT[state.currentBoard];
    const s = state.stories.find((x) => (x.category || 'strange') === cat && x.cards && x.cards.some((c) => c.isFree));
    if (!s || !s.cards) return null;
    return s.cards.find((x) => x.isFree) || s.cards[0] || null;
  }
  const VAPID_PUBLIC_KEY = LAUNCH.vapidPublic; // fallback; the push server's /api/keys is preferred
  const PUSH_API = LAUNCH.pushApi; // push-server URL — set in LAUNCH above
  function urlB64ToUint8Array(b64) {
    const pad = '='.repeat((4 - (b64.length % 4)) % 4);
    const base64 = (b64 + pad).replace(/-/g, '+').replace(/_/g, '/');
    const raw = atob(base64);
    return new Uint8Array([].map.call(raw, (ch) => ch.charCodeAt(0)));
  }
  function fetchVapidKey() {
    if (!PUSH_API) return Promise.resolve(VAPID_PUBLIC_KEY);
    return fetch(PUSH_API + '/api/keys')
      .then((r) => r.text())
      .then((k) => (k || '').trim() || VAPID_PUBLIC_KEY)
      .catch(() => VAPID_PUBLIC_KEY);
  }
  function sendSubscription(sub) {
    if (!PUSH_API) return;
    fetch(PUSH_API + '/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sub) }).catch(() => {});
  }
  function enableDailyPush() {
    if (!('Notification' in window)) return;
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((perm) => { if (perm === 'granted') subscribeDailyPush(); });
    } else subscribeDailyPush();
  }
  function subscribeDailyPush() {
    if (!navigator.serviceWorker) return;
    navigator.serviceWorker.ready.then((reg) => {
      reg.pushManager.getSubscription().then((existing) => {
        if (existing) { updatePushUI(true); return; }
        fetchVapidKey().then((vapid) => {
          const doSub = () => reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlB64ToUint8Array(vapid) })
            .then((sub) => { store.set('hanlingo_push_sub', JSON.stringify(sub)); sendSubscription(sub); updatePushUI(true); showPreviewNotification(); })
            .catch(() => { store.set('hanlingo_push_demo', true); updatePushUI(true); showPreviewNotification(); });
          if (vapid) doSub(); else { store.set('hanlingo_push_demo', true); updatePushUI(true); showPreviewNotification(); }
        });
      });
    });
  }
  function showPreviewNotification() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const q = todayQuote();
    const body = q ? 'Good morning! Today\'s phrase: ' + q.sentence + '  —  ' + q.translation : 'Good morning! Today\'s phrase is ready.';
    new Notification('HanLingo · Daily Phrase', { body, icon: 'icons/icon-192.png', badge: 'icons/favicon-32.png', tag: 'hanlingo-daily-preview' });
  }
  function updatePushUI(enabled) {
    const st = $('#dp-state');
    if (st) st.innerText = enabled ? '✅ Enabled — morning phrase at 8:30 SGT' : 'Off — get a morning sentence at 8:30 SGT, tuned to your level.';
    const b = $('#dp-toggle');
    if (b) b.innerText = enabled ? 'Manage' : 'Enable';
  }
  function svgRing(pct) {    const r = 34, c = 2 * Math.PI * r;
    return h('svg', { class: 'ring', viewBox: '0 0 80 80', 'aria-hidden': 'true' },
      h('circle', { cx: '40', cy: '40', r: String(r), fill: 'none', stroke: 'var(--line)', 'stroke-width': '7' }),
      h('circle', { cx: '40', cy: '40', r: String(r), fill: 'none', stroke: 'var(--sage)', 'stroke-width': '7', 'stroke-linecap': 'round', 'stroke-dasharray': String(c), 'stroke-dashoffset': String(c * (1 - pct / 100)), transform: 'rotate(-90 40 40)' }));
  }
  function boardLabel() {
    return state.currentBoard === 'survival' ? 'Daily Life' : (state.currentBoard === 'business' ? 'Corporate' : 'Elite');
  }
  function bumpStoryProgress() {
    const col = state.currentStoryColumn; if (!col) return null;
    const total = state.cards ? state.cards.length : 0;
    const p = store.get('hanlingo_progress', {});
    const e = p[col] || { completed: 0, total };
    const beforeTotal = Object.keys(p).reduce((a, k) => a + ((p[k] || {}).completed || 0), 0);
    e.completed = Math.min(e.completed + 1, e.total || total);
    e.total = total;
    p[col] = e;
    store.set('hanlingo_progress', p);
    if (beforeTotal === 0 && e.completed >= 1) {
      if (!store.get('hanlingo_synctip_shown')) {
        store.set('hanlingo_synctip_shown', true);
        showSyncToast();
      }
      if (!store.get('hanlingo_install_suggested') && !store.get('hanlingo_installed')) {
        store.set('hanlingo_install_suggested', true);
        setTimeout(() => maybeShowInstallBanner(), 7000);
      }
    }
    return e;
  }
  function showSyncToast() {
    let t = document.getElementById('sync-toast');
    if (!t) { t = document.createElement('div'); t.id = 'sync-toast'; t.className = 'sync-toast'; document.body.appendChild(t); }
    t.replaceChildren(
      h('span', { class: 'sync-toast-msg' }, 'Progress saved on this device. Want it on your phone too? '),
      h('button', { class: 'btn', type: 'button', onclick: () => { t.remove(); openSaveProgress(); } }, 'Save it'),
      h('button', { class: 'sync-toast-x', type: 'button', 'aria-label': 'Dismiss', onclick: () => t.remove() }, '×'));
    t.hidden = false;
    clearTimeout(t._t);
    t._t = setTimeout(() => { if (t.parentNode) t.remove(); }, 8000);
  }
  function boardPercent() {
    const cat = BOARD_CAT[state.currentBoard];
    const packs = state.stories.filter((s) => (s.category || 'strange') === cat);
    const total = packs.reduce((a, s) => a + (s.cards ? s.cards.length : 0), 0);
    const p = store.get('hanlingo_progress', {});
    const done = packs.reduce((a, s) => a + ((p[s.columnId] || {}).completed || 0), 0);
    return total ? Math.min(100, Math.round((done / total) * 100)) : 0;
  }
  function boardPacks(k) {
    const cat = BOARD_CAT[k];
    return state.stories.filter((s) =>
      (s.category || 'strange') === cat &&
      (k !== 'survival' || (s.hskRange || 'HSK 3-4') === 'HSK 1-2' || (s.hskRange || 'HSK 3-4') === 'HSK 1-3'));
  }
  function boardCapsuleStats(key) {
    const k = key || state.currentBoard;
    const packs = boardPacks(k);
    const p = store.get('hanlingo_progress', {});
    const total = packs.length;
    const done = packs.filter((s) => {
      const e = p[s.columnId];
      const t = (e && e.total) || (s.cards ? s.cards.length : 0);
      return e && t && e.completed >= t;
    }).length;
    return { done, total };
  }
  function boardSentenceStats(key) {
    const k = key || state.currentBoard;
    const packs = boardPacks(k);
    const p = store.get('hanlingo_progress', {});
    const total = packs.reduce((a, s) => a + (s.cards ? s.cards.length : 0), 0);
    const done = packs.reduce((a, s) => a + ((p[s.columnId] || {}).completed || 0), 0);
    return { done, total };
  }
  /* ---------- SRS spaced-repetition (Ebbinghaus) ---------- */
  function srsGetAll() { return store.get('hanlingo_srs', {}); }
  function srsSaveAll(m) { store.set('hanlingo_srs', m); }
  function srsLearn(cardId) {
    const m = srsGetAll();
    const e = m[cardId] || { state: 'learning', interval: 1, reps: 0, next: 0 };
    if (!e.state) { e.state = 'learning'; e.interval = 1; }
    e.next = Date.now() + (e.interval * 86400000);
    m[cardId] = e; srsSaveAll(m);
  }
  function srsRecall(cardId, recall) {
    const m = srsGetAll();
    const e = m[cardId] || { state: 'learning', interval: 1, reps: 0 };
    const days = [3, 7, 30];
    if (recall) {
      e.reps = (e.reps || 0) + 1;
      e.interval = days[Math.min(e.reps - 1, days.length - 1)] || 30;
      e.state = e.reps >= 3 ? 'mastered' : 'review';
    } else {
      e.reps = 0; e.interval = 1; e.state = 'learning';
    }
    e.next = Date.now() + (e.interval * 86400000);
    m[cardId] = e; srsSaveAll(m);
  }
  function srsDueCount() {
    const m = srsGetAll(); const now = Date.now();
    return Object.values(m).filter((e) => e.state !== 'mastered' && e.next <= now).length;
  }
  function findCardById(id) {
    for (const s of state.stories) {
      if (!s.cards) continue;
      for (const c of s.cards) if (c.id === id) return { story: s, card: c };
    }
    return null;
  }
  function renderReview() {
    const m = srsGetAll(); const now = Date.now();
    const due = Object.entries(m).filter(([id, e]) => e.state !== 'mastered' && e.next <= now).map(([id, e]) => id);
    if (!due.length) { const o = $('#review'); if (o) o.remove(); return; }
    let ri = 0;
    const overlay = h('div', { class: 'review', id: 'review' },
      h('div', { class: 'review-card' }, h('p', { class: 'rc-progress' }, 'Review 1/' + due.length),
        h('div', { class: 'rc-body', id: 'rc-body' }),
        h('div', { class: 'rc-actions' },
          h('button', { class: 'cf-btn rc-no', type: 'button', onclick: () => { srsRecall(due[ri], false); nextReview(); } }, 'Still Learning'),
          h('button', { class: 'cf-btn rc-yes', type: 'button', onclick: () => { srsRecall(due[ri], true); nextReview(); } }, 'Got It'))));
    function paint() {
      const f = findCardById(due[ri]);
      const body = overlay.querySelector('#rc-body');
      if (!f || !body) { nextReview(); return; }
      const c = f.card;
      body.replaceChildren(
        h('div', { class: 'rc-zh', lang: 'zh-CN' }, c.sentence),
        c.pinyin ? h('div', { class: 'rc-pinyin' }, c.pinyin) : null,
        h('div', { class: 'rc-en' }, c.translation || ''));
      overlay.querySelector('.rc-progress').innerText = 'Review ' + (ri + 1) + '/' + due.length;
    }
    function nextReview() {
      ri += 1;
      if (ri >= due.length) { overlay.remove(); notifyReviewDone(); return; }
      paint();
    }
    paint();
    document.body.appendChild(overlay);
  }
  function notifyReviewDone() {
    const d = h('div', { class: 'review-done' },
      h('span', {}, '✅ Review complete'),
      h('button', { class: 'ib-btn', type: 'button', onclick: () => d.remove() }, 'OK'));
    document.body.appendChild(d);
  }
  function checkSrsReview() { if (srsDueCount() > 0) renderReview(); }
  function maybeCelebrate() {
    const col = state.currentStoryColumn; if (!col) return;
    const total = state.cards ? state.cards.length : 0;
    const p = store.get('hanlingo_progress', {});
    const e = p[col];
    if (!total || !e || e.completed < e.total) return;
    showCelebrate(boardLabel(), boardCapsuleStats());
  }
  function showCelebrate(board, caps) {
    if (document.getElementById('celebrate')) return;
    const pct = caps.total ? Math.round((caps.done / caps.total) * 100) : 0;
    const overlay = h('div', { class: 'celebrate', id: 'celebrate' },
      h('div', { class: 'celebrate-card' },
        h('div', { class: 'cel-badge' }, '✅'),
        h('h2', {}, 'Capsule Complete!'),
        h('p', {}, 'You\'ve unlocked ' + pct + '% of ' + board + ' Mandarin! (' + caps.done + '/' + caps.total + ' Capsules)'),
        h('button', { class: 'ib-btn cel-btn', type: 'button', onclick: () => { const c = $('#celebrate'); if (c) c.remove(); } }, 'Keep Going')));
    document.body.appendChild(overlay);
  }
  function capsuleBadge(s) {
    const p = store.get('hanlingo_progress', {});
    const e = p[s.columnId];
    if (!e || !e.completed) return null;
    const done = e.completed;
    const total = e.total || (s.cards ? s.cards.length : 0);
    const full = total && done >= total;
    return h('span', { class: 'capsule-badge' + (full ? ' done' : '') }, (full ? '✅ ' : '') + done + '/' + total + ' learned');
  }
  function setBoardTabs(key) {
    document.querySelectorAll('.board-tabs .tab').forEach((b) => {
      b.setAttribute('aria-selected', b.dataset.board === key ? 'true' : 'false');
    });
  }
  function renderDashboard() {
    const dash = $('#dashboard');
    if (!dash) return;
    const prog = store.get('hanlingo_progress', {});
    let totalLearned = 0;
    for (const k in prog) totalLearned += (prog[k].completed || 0);
    if (!totalLearned) { dash.replaceChildren(); return; }
    const contPack = state.stories.reduce((best, s) => {
      const e = prog[s.columnId];
      if (!e || !e.completed) return best;
      return (!best || e.completed > (prog[best.columnId] || {}).completed) ? s : best;
    }, null);
    const goal = dayGoal();
    const rec = dailyProgress();
    const pct = Math.min(100, Math.round((rec.count / goal) * 100));
    const remaining = Math.max(0, goal - rec.count);
    const boards = [
      { key: 'survival', icon: '🌏', title: 'Survival & Daily Life', level: 'Beginner · Free forever', mins: '≈3 min', scene: '点单 · 结账 · 打包 · 打车 · 周末约朋友', caps: boardCapsuleStats('survival'), sent: boardSentenceStats('survival') },
      { key: 'business', icon: '💼', title: 'Business & Workplace Pro', level: 'Intermediate · Pro', mins: '≈5 min', scene: '跨境谈判 · 大厂黑话 · 拒劝酒', caps: boardCapsuleStats('business'), sent: boardSentenceStats('business') },
      { key: 'mastery', icon: '👑', title: 'Mastery · Sun Tzu Strategy', level: 'Advanced · Executive', mins: '≈7 min', scene: 'Sun Tzu’s Art of War · executive dining & negotiation', caps: boardCapsuleStats('mastery'), sent: boardSentenceStats('mastery') }
    ];
    const q = todayQuote();
    dash.replaceChildren(
      h('section', { class: 'dash' },
        (contPack ? h('div', { class: 'dash-continue', role: 'button', tabindex: '0', onclick: () => { const s = contPack; state.cards = s.cards; state.currentStoryIdx = state.stories.indexOf(s); state.idx = 0; show('reader'); renderReader(); } },
          h('b', {}, 'Continue where you left off'),
          h('span', {}, ((prog[contPack.columnId] || {}).completed || 0) + '/' + (contPack.cards ? contPack.cards.length : 0) + ' sentences · ' + ((contPack.title || '').split('·')[1] || contPack.title).trim())) : null),
        h('div', { class: 'dash-streak' },
          h('div', { class: 'streak-ring' },
            svgRing(pct),
            h('div', { class: 'streak-num' }, h('b', {}, String(rec.count)), h('span', {}, '/ ' + goal + ' sentences'))),
          h('div', { class: 'streak-text' },
            h('h2', {}, 'Today’s Progress'),
            h('p', {}, remaining > 0 ? remaining + ' sentences left today — keep the streak 🔥' : 'Daily goal reached 🎉'))),
        (srsDueCount() > 0 ? h('button', { class: 'dash-due', type: 'button', onclick: renderReview }, '🔁 ' + srsDueCount() + ' card' + (srsDueCount() > 1 ? 's' : '') + ' due for review — tap to recall') : null),
        h('div', { class: 'dash-boards' },
          boards.map((b) => h('button', { class: 'dash-board', type: 'button', onclick: () => {
            state.currentBoard = b.key;
            setBoardTabs(b.key);
            renderStream();
            const t = document.getElementById('stories');
            if (t) t.scrollIntoView({ behavior: 'smooth' });
          } },
            h('span', { class: 'db-icon' }, b.icon),
            h('div', {},
              h('b', {}, b.title),
              h('span', { class: 'db-level' }, b.level + ' · ' + b.mins),
              h('span', { class: 'db-scene' }, b.scene),
              h('span', { class: 'db-caps' },
                h('i', { class: 'db-caps-fill', style: 'width:' + (b.sent.total ? Math.round((b.sent.done / b.sent.total) * 100) : 0) + '%' }),
                h('em', {}, 'Done ' + b.sent.done + '/' + b.sent.total + ' sentences · ' + b.caps.done + '/' + b.caps.total + ' Capsules')))))),
        q ? h('div', { class: 'dash-quote', role: 'button', tabindex: '0', onclick: () => { const s = state.stories.find((x) => x.cards && x.cards.indexOf(q) >= 0); if (s) { state.cards = s.cards; state.currentStoryIdx = state.stories.indexOf(s); state.idx = s.cards.indexOf(q); show('reader'); renderReader(); } } },
          h('span', { class: 'dq-label' }, 'Quote of the Day'),
          h('p', { class: 'dq-py' }, q.pinyin || ''),
          h('p', { class: 'dq-zh', lang: 'zh-CN' }, q.sentence),
          h('p', { class: 'dq-en' }, q.translation || '')) : null,
        h('div', { class: 'dash-push' },
          h('div', { class: 'dp-copy' },
            h('b', {}, '🔔 Daily Phrase Push'),
            h('span', { class: 'dp-state', id: 'dp-state' }, 'Off — get a morning sentence at 8:30 SGT, tuned to your level.')),
          h('div', { class: 'dp-actions' },
            h('button', { class: 'ib-btn', id: 'dp-toggle', type: 'button', onclick: enableDailyPush }, 'Enable'),
            h('button', { class: 'ib-btn dp-preview', type: 'button', onclick: showPreviewNotification }, 'Preview')))));
  }

  function renderSkeletons() {
    const stream = $('#stream');
    if (stream && !stream.children.length) {
      stream.replaceChildren(...Array.from({ length: 4 }, () => h('div', { class: 'skeleton-card' },
        h('div', { class: 'sk-cover' }),
        h('div', { class: 'sk-lines' }, h('i', { class: 'sk-line w70' }), h('i', { class: 'sk-line w40' }), h('i', { class: 'sk-line w55' })))));
    }
    const dash = $('#dashboard');
    if (dash && !dash.children.length) {
      dash.replaceChildren(h('div', { class: 'skeleton-dash' },
        h('div', { class: 'sk-block' }), h('div', { class: 'sk-block' }), h('div', { class: 'sk-block' })));
    }
  }

  function modernPlay(s) {
    const id = s.columnId || '';
    const t = (s.title || '') + ' ' + id + ' ' + (s.introEn || '');
    const map = {
      elite_strategy: 'Modern: Sun Tzu’s rule #1 — have a plan before you enter the room',
      elite_budget: 'Modern: master the numbers — money talks in every boardroom',
      elite_sales: 'Modern: the win-the-deal playbook, from first call to signature',
      elite_team: 'Modern: build alignment the way Sun Tzu builds armies',
      elite_fund: 'Modern: pitch to investors with the confidence of a general',
      elite_product: 'Modern: ship a product your customers can’t ignore',
      elite_crisis: 'Modern: Sun Tzu’s calm — lead when the fire is worst',
      elite_transform: 'Modern: change before you’re forced to — the art of reinvention',
      elite_perf: 'Modern: the review-room script that earns respect',
      elite_crossculture: 'Modern: negotiate across cultures, win everywhere',
      elite_dining: 'Modern: close deals at the dinner table, toast like a local',
      elite_visit: 'Modern: host the perfect visit — power is in the details',
      elite_gifting: 'Modern: the gift that opens doors (and closes them, too)',
      elite_smalltalk: 'Modern: small talk that builds real relationships',
      elite_gov: 'Modern: navigate regulation and government with finesse',
      elite_negotiation: 'Modern: the ten moves of Sun Tzu’s negotiation table',
      elite_board: 'Modern: run your board the way a general runs his war room',
      elite_global: 'Modern: going global — Sun Tzu’s strategy for new markets',
      elite_ai: 'Modern: arm yourself with AI the way generals arm their troops',
      elite_ethics: 'Modern: win the long game — integrity is the ultimate edge',
      elite_oriental: 'Modern: the 3,000-year wisdom behind every deal',
      elite_suntzu: 'Modern: the Art of War, rewritten for today’s boardroom'
    };
    if (map[id]) return map[id];
    if (/art[-_ ]?of[-_ ]?war|孙子|battle|calculat/i.test(t)) return 'Modern: pre-flight competitive intel for founders';
    if (/journey[-_ ]?west|西游|monkey king/i.test(t)) return 'Modern: turning the "impossible" into a growth story';
    if (/liaozhai|聊斋/i.test(t)) return 'Modern: reading the unspoken at work & in society';
    return 'Modern: apply this classic to today\'s deals & teams';
  }
  function classicPack(s, o) {
    const zh = (s.title.split('·')[0] || '').trim();
    const en = (s.title.split('·')[1] || s.title).trim();
    const first = s.cards && s.cards[0];
    const tag = o.isFree ? '🟢 FREE' : (o.locked ? '🔒 LEVEL PASS' : null);
    return h('button', { class: 'pack classic' + (o.locked ? ' locked' : ''), type: 'button', onclick: () => (o.locked ? openPaywall('level') : openStory(o.storyIndex)) },
      o.locked ? h('div', { class: 'blur-layer' }) : null,
      tag ? h('span', { class: 'story-tag ' + (o.isFree ? 'free' : 'locked') }, tag) : null,
      h('div', { class: 'classic-origin', lang: 'zh-CN' }, first ? first.sentence : zh),
      h('div', { class: 'classic-copy' },
        h('h3', {}, en),
        (s.introEn || s.intro) ? h('p', { class: 'blurb' }, s.introEn || s.intro) : null,
        h('div', { class: 'tags' },
          h('span', { class: 'tag' }, levelLabel(s.hskRange)),
          h('span', { class: 'tag' }, cefrLabel(s.hskRange)),
          h('span', { class: 'tag' }, '≈' + estMins(s) + ' min'),
          h('span', { class: 'tag classic-modern' }, '⚔ ' + modernPlay(s)),
          ...(capsuleBadge(s) ? [capsuleBadge(s)] : []),
          o.isFree ? h('span', { class: 'tag free' }, 'Free') : h('span', { class: 'tag pro' }, 'Level Pass'))));
  }

  function renderStream() {
    const root = $('#stream');
    const visible = boardPacks(state.currentBoard);
    visible.sort((a, b) => hskRank(a.hskRange || 'HSK 3-4') - hskRank(b.hskRange || 'HSK 3-4'));
    if (!visible.length) {
      root.replaceChildren();
      $('#soon').hidden = false;
      return;
    }

    root.replaceChildren(
      ...visible.map((s) => {
        const zh = (s.title.split('·')[0] || '').trim();
        const en = (s.title.split('·')[1] || s.title).trim();
        const storyIndex = state.stories.findIndex((item) => item === s);
        const isFree = (s.hskRange || 'HSK 3-4') === 'HSK 1-2' || (s.hskRange || 'HSK 3-4') === 'HSK 1-3';
        const trial = (s.freeCards || 0) > 0;
        const locked = !isFree && !canOpenStory(s) && !trial;
        const tag = isFree ? '🟢 FREE' : (locked ? '🔒 LEVEL PASS' : null);
        if (state.currentBoard === 'mastery') return classicPack(s, { isFree, locked, storyIndex });
        return h('button', { class: 'pack' + (locked ? ' locked' : ''), type: 'button', onclick: () => (locked ? openPaywall('level') : openStory(storyIndex)) },
          locked ? h('div', { class: 'blur-layer' }) : null,
          tag ? h('span', { class: 'story-tag ' + (isFree ? 'free' : 'locked') }, tag) : null,
          h('div', { class: 'cover ' + (s.coverClass || 'c1'), 'aria-hidden': 'true' }, s.cover || zh.slice(0, 1)),
          h('div', {},
            h('h3', {}, en),
            h('p', {}, zh + ' · ' + s.totalCards + ' cards'),
            (s.introEn || s.intro) ? h('p', { class: 'blurb' }, s.introEn || s.intro) : null,
            h('div', { class: 'tags' },
              h('span', { class: 'tag' }, levelLabel(s.hskRange)),
              h('span', { class: 'tag' }, cefrLabel(s.hskRange)),
              h('span', { class: 'tag' }, '≈' + estMins(s) + ' min'),
              ...(capsuleBadge(s) ? [capsuleBadge(s)] : []),
              isFree ? null : h('span', { class: 'tag pro' }, 'Level Pass'))));
      }));
    $('#soon').hidden = true;
  }

  /* ---------- Premium Business zone ---------- */
  const PREMIUM_TOPICS = [
    { zh: '黑话', en: 'Why Is Everyone Saying “Fù Néng” and “Zhǔ Shǒu”?', hook: 'Decode the big-tech jargon and closed-loop logic insiders expect you to know.', columnId: 'biz_office' },
    { zh: '生存', en: 'What Do I Say When the Boss Blames Me in a Meeting?', hook: 'High-EQ survival lines that keep your composure — and your job.', columnId: 'biz_office' },
    { zh: '汇报', en: 'How Do I Explain to HQ Why the Chinese Project Is Delayed?', hook: 'Own the narrative, protect the relationship, and manage the message home.', columnId: 'biz_meeting' },
    { zh: '拒绝', en: 'How to Softly Reject an Unreasonable Request from a Client?', hook: 'Say no to a client without losing the account — or the face.', columnId: 'biz_meeting' },
    { zh: '压价', en: 'What Should I Say to Get a Better Price from the Factory?', hook: 'Supply-chain negotiation lines that actually move the number.', columnId: 'biz_dining' },
    { zh: '路演', en: 'How to Pitch Alibaba/Tencent Without Sounding Like an Amateur?', hook: 'Pitch vocabulary that makes the investors lean in.', columnId: 'biz_interview' },
    { zh: '饭局', en: 'What Am I Supposed to Talk About at a Chinese Business Dinner?', hook: 'Toast, small talk, and the table topics that quietly seal deals.', columnId: 'biz_dining' },
    { zh: '挡酒', en: 'How Do I Politely Avoid Drinking Alcohol at a Dinner?', hook: 'Graceful lines to decline the drink without the awkwardness.', columnId: 'biz_dining' },
    { zh: '破冰', en: 'How to Gossip Legally with My Chinese Coworkers?', hook: 'Safe banter that builds trust and rapport with your team.', columnId: 'biz_interview' }
  ];

  function openBizStory(s) {
    if (!s) return;
    state.cards = s.cards;
    state.currentStoryTitle = (s.title.split('·')[1] || s.title).trim();
    state.currentStoryIdx = state.stories.findIndex((x) => x === s);
    state.currentStoryColumn = s.columnId || '';
    state.idx = 0;
    state.currentBoard = 'business';
    renderIntro(s);
    show('reader');
  }

  function renderPremium() {
    const root = $('#view-premium');
    root.replaceChildren(
      h('div', { class: 'premium-page' },
        h('section', { class: 'pricing-section' },
          h('h2', { class: 'biz-section-title' }, 'Pick your track'),
          h('p', { class: 'pricing-note' }, 'Try before you buy: every paid pack includes free preview sentences. Paid access is a one-time payment and non-refundable — no recurring fees. Local customers can also pay in SGD at checkout.'),
          h('div', { class: 'pricing-grid' },
            h('div', { class: 'price-card free' },
              h('div', { class: 'price-name' }, 'Free'),
              h('div', { class: 'price-amt' }, '$0', h('small', {}, 'forever')),
              h('ul', { class: 'price-feats' },
                h('li', {}, 'Beginner track free forever — no card'),
                h('li', {}, 'Free preview sentences in paid packs'),
                h('li', {}, 'Local-first progress on your device'),
                h('li', {}, 'Three-speed native audio on free lines'),
                h('li', {}, 'Export & import your progress JSON')),
              h('button', { class: 'btn', type: 'button', onclick: () => show('learn') }, 'Start free')),
            h('div', { class: 'price-card pro' },
              h('div', { class: 'price-name' }, 'Pro'),
              h('div', { class: 'price-amt' }, '$129', h('small', {}, 'one-time')),
              h('ul', { class: 'price-feats' },
                h('li', {}, 'All Survival & Business packs (60 packs · 300 sentences)'),
                h('li', {}, 'CEFR A1–C1 mapped to every pack'),
                h('li', {}, 'Native male three-speed audio on every line'),
                h('li', {}, 'Offline learning (PWA install)'),
                h('li', {}, 'AI read-along pronunciation practice'),
                h('li', {}, 'Cross-device sync via email link')),
              h('button', { class: 'btn primary', type: 'button', onclick: () => openPaywall('biz') }, 'Go Pro')),
            h('div', { class: 'price-card exec' },
              h('div', { class: 'price-name' }, 'Executive'),
              h('div', { class: 'price-amt' }, '$249', h('small', {}, 'one-time')),
              h('ul', { class: 'price-feats' },
                h('li', {}, 'Everything in Pro'),
                h('li', {}, 'Mastery · Sun Tzu Strategy (HSK 7-9 · 22 packs · 315 sentences)'),
                h('li', {}, 'CEFR C1–C2 executive Mandarin'),
                h('li', {}, 'AI role-play conversation practice'),
                h('li', {}, 'Executive scene packs — negotiation, boardroom, toasts'),
                h('li', {}, 'Priority access to new packs')),
              h('button', { class: 'btn primary', type: 'button', onclick: () => openPaywall('life') }, 'Go Executive')))) ,
        h('div', { class: 'premium-grid' },
          ...PREMIUM_TOPICS.map((t) => {
            const story = state.stories.find((x) => x.columnId === t.columnId);
            const open = state.access.business;
            return h('button', { class: 'q-card', type: 'button', onclick: () => openBizStory(story) },
              h('span', { class: 'q-zh' }, t.zh),
              h('span', { class: 'q-en' }, t.en),
              h('span', { class: 'q-hook' }, t.hook),
              h('span', { class: 'q-meta' },
                h('span', { class: 'q-tag ' + (open ? 'free' : 'locked') }, open ? '✓ Unlocked' : '🔒 PREMIUM'),
                h('span', {}, story ? story.totalCards + ' cards · ' + levelLabel(story.hskRange) : '')));
          })),
        h('div', { class: 'premium-block' },
          h('h2', { class: 'biz-section-title' }, 'Explore All Business Packs'),
          ...buildBizGroups().map((g) =>
            h('div', { class: 'biz-group' },
              h('h3', { class: 'biz-group-title' }, g.label + '  (' + g.list.length + ')'),
              h('div', { class: 'biz-grid' },
                ...g.list.map((p) => bizCard(p))))))));
  }

  /* ---------- Premium: all business packs (24) ---------- */
  function getAllBusinessDecks() {
    return (state.stories || []).filter((s) => (s.category || '').toLowerCase() === 'business');
  }

  function buildBizGroups() {
    const groups = [
      { range: 'HSK 1-2', label: 'Beginner · 职场入门 · Workplace Starter' },
      { range: 'HSK 3-4', label: 'Intermediate · 商务沟通 · Business Communication' },
      { range: 'HSK 4-6', label: 'Intermediate · 商务职场 · Workplace Pro' },
      { range: 'HSK 5-6', label: 'Advanced · 高级商务 · Executive Mandarin' }
    ];
    const packs = getAllBusinessDecks();
    return groups.map((g) => Object.assign({}, g, {
      list: packs.filter((p) => (p.hskRange || '') === g.range)
    })).filter((g) => g.list.length > 0);
  }

  function bizCard(p) {
    const open = state.access.business;
    const parts = String(p.title || '').split('·');
    const zh = (parts[0] || '').trim();
    const en = (parts[1] || p.title || '').trim();
    const n = p.totalCards || (p.cards ? p.cards.length : 0);
    return h('button', { class: 'q-card biz-card', type: 'button', onclick: () => openBizStory(p) },
      h('span', { class: 'q-zh' }, zh),
      h('span', { class: 'q-en' }, en),
      h('span', { class: 'q-meta' },
        h('span', { class: 'q-tag ' + (open ? 'free' : 'locked') }, open ? '✓ Unlocked' : '🔒 PREMIUM'),
        h('span', {}, n + ' cards · ' + levelLabel(p.hskRange))));
  }

  /* ---------- Overlays ---------- */
  function closeOverlays() {
    $('#sheet').hidden = true;
    $('#paywall').hidden = true;
  }

  function openWord(v) {
    const saved = hasWord(v.word);
    $('#sheet').replaceChildren(
      h('div', { class: 'sheet-card', role: 'dialog', 'aria-label': v.word },
        h('div', { class: 'zh', lang: 'zh-CN' }, v.word),
        h('div', { class: 'py' }, v.pinyin),
        h('div', { class: 'en' }, v.translation),
        h('div', { class: 'sheet-actions' },
          h('button', {
            class: 'btn ' + (saved ? 'ghost' : 'sage'), type: 'button',
            onclick: () => {
              if (saved) state.vocab = state.vocab.filter((x) => x.word !== v.word);
              else state.vocab.push({ word: v.word, pinyin: v.pinyin, translation: v.translation, hskLevel: v.hskLevel });
              saveVocab();
              renderReader();
              openWord(v);
            }
          }, saved ? 'Saved (tap to remove)' : '+ Add to Vocab'),
          h('span', { class: 'lvl' }, v.hskLevel ? 'Level ' + v.hskLevel : 'Story word'))));
    $('#sheet').hidden = false;
  }

  /* ---------- Community: members-only exec network ---------- */
  function commCard(ic, t, d) {
    return h('div', { class: 'comm-card' }, h('div', { class: 'cc-ic' }, ic), h('h4', {}, t), h('p', {}, d));
  }
  function renderCommunity() {
    const access = store.get('hanlingo_access', { level: false, business: false, theme: [] });
    const unlocked = access.business || (Array.isArray(access.theme) && access.theme.includes('lifetime'));
    $('#view-community').replaceChildren(
      h('div', { class: 'comm-wrap' },
        h('p', { class: 'comm-kicker' }, 'MEMBERS-ONLY NETWORK'),
        h('h1', { class: 'comm-title' }, 'The HanLingo Exec Circle'),
        h('p', { class: 'comm-sub' }, 'More than a language app — a private network of professionals doing business across Asia.'),
        h('div', { class: 'comm-grid' },
          commCard('🌏', 'Cross-border Network', 'Connect with executives who actually do business in China, Singapore and beyond.'),
          commCard('💬', 'Live Practice Room', 'Deploy the sentences you just learned in real conversations — not in a vacuum.'),
          commCard('🎯', 'Weekly Scenario', 'Each week a real business prompt, e.g. “pitch your project using 3 new formulas”.'),
          commCard('🔒', 'Private & Curated', 'Approval-only. No spam, no tourists — only serious professionals.')),
        h('div', { class: 'comm-channel' },
          h('h3', {}, 'Join where Asia actually talks'),
          h('p', {}, 'A members-only WhatsApp group — the #1 channel for professionals in Singapore & SEA — with a curated LinkedIn Group for longer-form deal talk.'),
          h('div', { class: 'ch-badges' },
            h('span', { class: 'ch-badge ch-wa' }, '💬 WhatsApp Group'),
            h('span', { class: 'ch-badge' }, '🔗 LinkedIn Group'))),
        h('div', { class: 'comm-steps' },
          h('h3', {}, 'How to get your invite'),
          h('ol', {},
            h('li', {}, 'Unlock Premium Business or Lifetime All-Access'),
            h('li', {}, 'Verify your subscription (auto, one click)'),
            h('li', {}, 'Receive your private WhatsApp invite link instantly')),
          h('div', { class: 'comm-cta' },
            unlocked
              ? h('button', { class: 'btn primary', type: 'button', onclick: notifyCommunity }, 'Join the Exec Circle ↗')
              : h('button', { class: 'btn primary', type: 'button', onclick: () => openPaywall('biz') }, 'Unlock the Exec Circle · from $129')))),
    );
  }
  function notifyCommunity() {
    const wa = (COMMUNITY_INVITE.whatsapp || '').trim();
    const li = (COMMUNITY_INVITE.linkedin || '').trim();
    if (wa) { window.open(wa, '_blank', 'noopener'); return; }
    if (li) { window.open(li, '_blank', 'noopener'); return; }
    const n = h('div', { class: 'review-done' },
      h('span', {}, '✅ Invite link not configured yet. (Fill LAUNCH.communityInvite at the top of app.js — the private WhatsApp/LinkedIn invite URL — and this button takes members straight to the group.)'),
      h('button', { class: 'ib-btn', type: 'button', onclick: () => n.remove() }, 'OK'));
    document.body.appendChild(n);
  }

  function openPaywall(prefer) {
    if (prefer) state.plan = prefer;
    const plans = [
      { key: 'level', label: 'Free', price: '$0', detail: 'Forever', badge: 'FREE', description: 'Beginner track free forever — no card required. Upgrade to Pro or Executive anytime to unlock all packs.', recommended: false },
      { key: 'biz', label: 'Premium Business Pass', price: '$129', detail: 'One-Time Payment', badge: '💼 CAREER UPGRADE', premium: true, description: 'Unlock ALL 100+ corporate sentence formulas across every level. Master 9 critical scenarios: WeChat networking, salary negotiation, tech slangs, and client management. Native-speed professional audio.', recommended: false },
      { key: 'life', label: 'Lifetime All-Access', price: '$249', detail: 'One-Time Investment', badge: '👑 BEST VALUE', description: 'Level Pass + Premium Business Pass fully combined. Unlock the ENTIRE site + all current & future updates forever. Includes upcoming premium theme and sentence drops. One billing — never a recurring fee again.', recommended: true }
    ];

    const selectedPlan = plans.find((plan) => plan.key === state.plan) || plans.find((plan) => plan.recommended) || plans[2];
    const unlockText = selectedPlan.key === 'level' ? 'Start Free' : selectedPlan.key === 'biz' ? 'Unlock Business Pack' : '👉 GET LIFETIME ACCESS';

    const planButtons = plans.map((plan) =>
      h('button', {
        class: 'plan-option' + (state.plan === plan.key ? ' active' : '') + (plan.recommended ? ' popular' : '') + (plan.premium ? ' premium' : ''),
        type: 'button',
        'data-plan': plan.key,
        onclick: () => {
          state.plan = plan.key;
          openPaywall();
        }
      },
        h('span', { class: 'plan-topline' },
          h('span', { class: 'plan-label' }, plan.label),
          plan.badge ? h('em', { class: 'plan-badge' + (plan.premium ? ' premium' : '') }, plan.badge) : null),
        h('span', { class: 'plan-price' }, plan.price),
        h('small', { class: 'plan-detail' }, plan.detail),
        h('span', { class: 'plan-description' }, plan.description)));

    $('#paywall').replaceChildren(
      h('div', { class: 'dialog', role: 'dialog', 'aria-labelledby': 'pw-title' },
        h('div', { class: 'dialog-head' },
          h('button', { class: 'close-x', type: 'button', 'aria-label': 'Close pricing', onclick: closeOverlays }, '×'),
          h('div', { class: 'dialog-copy' },
            h('h2', { id: 'pw-title' }, 'Pay Once. Speak Mandarin Like an Executive.'),
            h('p', {}, 'No subscription fatigue. Own your learning assets forever.'))),
        h('div', { class: 'plan-grid' }, ...planButtons),
        h('div', { class: 'trust-row' }, 'Start free • Try before you buy • One-time payment · No refunds on paid access'),
        h('div', { class: 'price' }, selectedPlan.price + ' ', h('small', {}, selectedPlan.detail)),
        h('p', { class: 'secure-footer' }, '🔒 Secure Checkout: Powered by Stripe. Your payment info is 256-bit SSL encrypted. A professional tax invoice will be emailed instantly for corporate learning & development reimbursement.'),
        h('button', { class: 'btn primary', type: 'button', onclick: () => subscribe(state.plan) }, CHECKOUT_URL ? 'Continue to Stripe' : unlockText),
        h('button', { class: 'btn ghost', type: 'button', onclick: closeOverlays }, 'Not now'),
        CHECKOUT_URL ? null : h('p', { class: 'note' }, 'Demo mode: the checkout link is not connected yet, so this unlocks locally on this device.')));
    $('#paywall').hidden = false;
  }

  function subscribe(planKey = state.plan) {
    state.plan = planKey || 'life';
    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
      return;
    }
    if (planKey === 'level') {
      closeOverlays();
      show('learn');
      return;
    }
    state.pro = true;
    if (planKey === 'biz') {
      state.access.business = true;
    } else {
      state.access.level = true;
      state.access.business = true;
    }
    saveSubscriptionState();
    closeOverlays();
    if (state.pending != null) go(state.pending);
  }

  /* ---------- Vocab & profile ---------- */
  function renderVocab() {
    const root = $('#view-vocab');
    root.replaceChildren(
      h('h2', { class: 'page-title' }, `Vocab (${state.vocab.length})`),
      state.vocab.length
        ? h('div', { class: 'list' }, state.vocab.map((v) =>
          h('div', { class: 'item' },
            h('div', { class: 'grow' },
              h('div', { class: 'zh', lang: 'zh-CN' }, v.word),
              h('div', { class: 'py' }, v.pinyin),
              h('div', { class: 'en' }, v.translation)),
            h('button', {
              class: 'icon-btn', type: 'button', 'aria-label': 'Remove ' + v.word,
              onclick: () => { state.vocab = state.vocab.filter((x) => x.word !== v.word); saveVocab(); renderVocab(); }
            }, '✕'))))
        : h('p', { class: 'empty' }, 'No saved words yet. Tap an underlined word while reading to save it.'));
  }

  let storagePersist = '';
  async function ensureStoragePersist() {
    try {
      if (!navigator.storage || !navigator.storage.persist || !navigator.storage.persisted) { storagePersist = 'unsupported'; return storagePersist; }
      const already = await navigator.storage.persisted();
      if (already) { storagePersist = 'persisted'; return storagePersist; }
      storagePersist = (await navigator.storage.persist()) ? 'persisted' : 'denied';
    } catch (e) { storagePersist = 'unsupported'; }
    return storagePersist;
  }
  function cefrLabel(r) {
    let cefr;
    if (r === 'HSK 1-2' || r === 'HSK 1-3') cefr = 'CEFR A1–A2';
    else if (r === 'HSK 5-6' || r === 'HSK 7-9') cefr = 'CEFR C1–C2';
    else if (r === 'HSK 4-6') cefr = 'CEFR B1–B2';
    else cefr = 'CEFR B1';
    return cefr + ' · ' + (r || '') + ' equivalent';
  }
  function estMins(s) { const n = s.cards ? s.cards.length : 0; return Math.max(2, Math.round(n / 15 * 5)); }
  function exportProgress() {
    const keys = ['hanlingo_progress', 'hanlingo_stars', 'hanlingo_srs', 'hanlingo_daily', 'hanlingo_vocab', 'hanlingo_settings', 'hanlingo_access', 'hanlingo_pro', 'hanlingo_plan'];
    const data = {};
    keys.forEach((k) => data[k] = store.get(k, null));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'hanlingo-progress.json';
    a.click();
  }
  function importProgress() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'application/json,.json';
    inp.onchange = () => {
      const f = inp.files && inp.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = () => { try { const d = JSON.parse(r.result); Object.keys(d).forEach((k) => store.set(k, d[k])); location.reload(); } catch (e) { alert('Invalid backup file'); } };
      r.readAsText(f);
    };
    inp.click();
  }
  function restorePurchase() {
    location.reload();
  }
  function renderProfile() {
    const prog = store.get('hanlingo_progress', {});
    let learned = 0;
    for (const k in prog) learned += (prog[k].completed || 0);
    const total = state.stories.reduce((a, s) => a + (s.cards ? s.cards.length : 0), 0);
    const rec = dailyProgress();
    $('#view-profile').replaceChildren(
      h('h2', { class: 'page-title' }, 'Progress'),
      h('div', { class: 'row' },
        h('span', {}, 'Learned on this device', h('small', {}, learned + '/' + total + ' sentences · saved locally, no account needed')),
        h('button', { class: 'btn', type: 'button', onclick: () => { show('learn'); } }, 'Keep going')),
      h('div', { class: 'row' },
        h('span', {}, 'Today’s streak', h('small', {}, rec.count + '/' + dayGoal() + ' sentences today')),
        h('span', { class: 'row-static' }, '🔥 ' + rec.count)),
      h('div', { class: 'row' },
        h('span', {}, 'Storage', h('small', {}, storagePersist === 'persisted' ? 'Persisted — clearing browser data won’t erase your progress here' : 'Best-effort — clearing browser data may erase progress; keep a JSON backup')),
        h('span', { class: 'row-static' }, storagePersist === 'persisted' ? '✓ Persisted' : '⚠ Best-effort')),
      h('div', { class: 'row' },
        h('span', {}, 'Sync across devices', h('small', {}, 'Email yourself a link to carry your progress to your phone & laptop')),
        h('button', { class: 'btn', type: 'button', onclick: openSaveProgress }, 'Sync')),
      h('div', { class: 'row row-col' },
        h('span', {}, 'Get a daily sentence by email', h('small', {}, 'One useful sentence in your inbox each day — no spam, opt in only, opt out anytime.')),
        h('div', { class: 'row-input' },
          h('input', { id: 'daily-email', class: 'sv-input', type: 'email', placeholder: 'you@company.com', value: store.get('hanlingo_email', '') }),
          h('button', { class: 'btn', type: 'button', onclick: saveDailyEmail }, 'Get daily sentence'))),
      h('div', { class: 'row' },
        h('span', {}, 'Export progress', h('small', {}, 'Download a JSON backup of your progress, streak & vocab')),
        h('button', { class: 'btn', type: 'button', onclick: exportProgress }, 'Export JSON')),
      h('div', { class: 'row' },
        h('span', {}, 'Import progress', h('small', {}, 'Restore a backup from another device')),
        h('button', { class: 'btn', type: 'button', onclick: importProgress }, 'Import')),
      h('div', { class: 'row' },
        h('span', {}, 'Restore purchase', h('small', {}, 'Purchases are stored on this device — refresh to restore them')),
        h('button', { class: 'btn', type: 'button', onclick: restorePurchase }, 'Restore')),
      h('div', { class: 'row' },
        h('span', {}, 'Save to your phone', h('small', {}, 'Add to home screen for quick, offline access')),
        h('button', { class: 'btn', type: 'button', onclick: installApp }, 'Install')),
      h('div', { class: 'row' },
        h('span', {}, 'Clear local data', h('small', {}, 'Removes progress, streak, vocab & settings from this device')),
        h('button', { class: 'btn danger', type: 'button', onclick: () => {
          if (!confirm('Remove all progress and saved data?')) return;
          ['hanlingo_vocab', 'hanlingo_settings', 'hanlingo_pro', 'hanlingo_plan', 'hanlingo_progress', 'hanlingo_stars', 'hanlingo_srs', 'hanlingo_daily'].forEach((k) => localStorage.removeItem(k));
          state.pro = false; state.plan = 'life'; saveSubscriptionState(); location.reload();
        } }, 'Clear')));
  }

  function saveDailyEmail() {
    const i = document.getElementById('daily-email');
    const v = (i && i.value || '').trim();
    if (!v || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { alert('Please enter a valid email address.'); return; }
    store.set('hanlingo_email', v);
    store.set('hanlingo_daily_optin', '1');
    showMiniToast('Got it — a daily sentence is on its way. No spam, opt out anytime.');
  }
  function showMiniToast(msg) {
    let t = document.getElementById('mini-toast');
    if (!t) { t = document.createElement('div'); t.id = 'mini-toast'; t.className = 'mini-toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(t._t);
    t._t = setTimeout(() => { if (t.parentNode) t.remove(); }, 4000);
  }

  /* ---------- Boot ---------- */
  function openSaveProgress() {
    const saved = store.get('hanlingo_email', '');
    $('#sheet').replaceChildren(
      h('div', { class: 'sheet-card', role: 'dialog', 'aria-label': 'Save Progress' },
        h('button', { class: 'icon-btn install-help-close', type: 'button', 'aria-label': 'Close', onclick: closeOverlays }, '×'),
        h('h2', { class: 'page-title' }, 'Save your progress across devices'),
        h('p', { class: 'sheet-note' }, 'We’ll email you a link to sync your progress. No marketing emails unless you opt in.'),
        h('input', { id: 'sv-email', class: 'sv-input', type: 'email', placeholder: 'you@company.com', value: saved, required: 'true' }),
        h('button', { class: 'btn primary', type: 'button', onclick: saveProgressEmail }, 'Email me the sync link'),
        h('p', { class: 'sheet-note' }, 'Your progress already saves on this device. Adding an email lets us send you a link to sync it to your phone and laptop. For now the email is stored on this device; the sync link will be sent once sync is enabled.')));
    $('#sheet').hidden = false;
    setTimeout(() => { const i = document.getElementById('sv-email'); if (i) i.focus(); }, 50);
  }
  function saveProgressEmail() {
    const i = document.getElementById('sv-email');
    const v = (i && i.value || '').trim();
    if (v && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      store.set('hanlingo_email', v);
      $('#sheet').replaceChildren(
        h('div', { class: 'sheet-card', role: 'dialog', 'aria-label': 'Email saved' },
          h('button', { class: 'icon-btn install-help-close', type: 'button', 'aria-label': 'Close', onclick: closeOverlays }, '×'),
          h('h2', { class: 'page-title' }, 'Email saved'),
          h('p', {}, 'We’ll email you a link to sync your progress when sync is enabled. No marketing emails unless you opt in.'),
          h('button', { class: 'btn ghost', type: 'button', onclick: closeOverlays }, 'Close')));
      $('#sheet').hidden = false;
    } else {
      alert('Please enter a valid email address.');
    }
  }
  function showInstallHelp() {
    $('#sheet').replaceChildren(
      h('div', { class: 'sheet-card install-help', role: 'dialog', 'aria-label': 'Install HanLingo' },
        h('button', { class: 'icon-btn install-help-close', type: 'button', 'aria-label': 'Close', onclick: closeOverlays }, '×'),
        h('h2', { class: 'page-title' }, 'Install HanLingo'),
        h('p', {}, 'Add HanLingo to your home screen for quick access and an app-like experience.'),
        h('p', {}, 'On iPhone or iPad, open this page in Safari, tap Share, then choose “Add to Home Screen.”'),
        h('p', {}, 'On Android or desktop, use the Install app option in your browser menu or address bar.'),
        h('button', { class: 'btn ghost', type: 'button', onclick: closeOverlays }, 'Close')));
    $('#sheet').hidden = false;
  }

  async function installApp() {
    if (!deferredInstallPrompt) {
      showInstallHelp();
      return;
    }

    const installPrompt = deferredInstallPrompt;
    deferredInstallPrompt = null;
    try {
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      if (choice.outcome === 'accepted') $('#install-app-footer').hidden = true;
    } catch (error) {
      console.error('Could not open the install prompt:', error);
      showInstallHelp();
    }
  }

  function bind() {
    document.querySelectorAll('.bottom-nav button[data-view]').forEach((b) =>
      b.addEventListener('click', () => show(b.dataset.view)));
    $('#install-app-footer').addEventListener('click', installApp);
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
    });
    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      $('#install-app-footer').hidden = true;
      const b = document.getElementById('install-banner');
      if (b) b.remove();
      // Track installs (local-first analytics): timestamp + persist installed state.
      store.set('hanlingo_app_installed', new Date().toISOString());
      store.set('hanlingo_installed', true);
      store.set('hanlingo_install_dismiss', true);
    });
    document.querySelectorAll('.tabs').forEach((group) => {
      group.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => {
        group.querySelectorAll('.tab').forEach((x) => x.setAttribute('aria-selected', x === t));
        if (t.dataset.board) state.currentBoard = t.dataset.board;
        $('#stream').hidden = false;
        renderStream();
        renderDashboard();
      }));
    });
    document.querySelectorAll('[data-nav="premium"]').forEach((b) =>
      b.addEventListener('click', () => show('premium')));
    document.querySelectorAll('[data-nav="community"]').forEach((b) =>
      b.addEventListener('click', () => show('community')));
    document.querySelectorAll('[data-nav="levels"]').forEach((b) =>
      b.addEventListener('click', () => {
        show('learn');
        const s = document.getElementById('stories');
        if (s) s.scrollIntoView({ behavior: 'smooth' });
      }));
    document.querySelectorAll('.lego-brick').forEach((b) => b.addEventListener('click', () => {
      document.querySelectorAll('.lego-brick').forEach((x) => x.classList.remove('speaking'));
      b.classList.add('speaking');
      if (b.dataset.word) speak(b.dataset.word);
      setTimeout(() => b.classList.remove('speaking'), 900);
    }));
    const logo = document.querySelector('.logo');
    if (logo) logo.addEventListener('click', (e) => {
      e.preventDefault();
      show('learn');
      window.scrollTo(0, 0);
      if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    });
    $('#pro-btn').addEventListener('click', () => show('premium'));
    $('#cta-sample').addEventListener('click', () => {
      const d = document.getElementById('exec-demo');
      if (d) d.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const norm = d ? d.querySelector('.pill[data-rate="1"]') : null;
      if (norm) { d.querySelectorAll('.pill').forEach((x) => x.classList.remove('active')); norm.classList.add('active'); norm.click(); }
    });
    $('#theme-toggle').addEventListener('click', () => { toggleTheme(); });
    $('#nav-streak').addEventListener('click', () => { show('learn'); const s = document.getElementById('stories'); if (s) s.scrollIntoView({ behavior: 'smooth' }); });
    [$('#sheet'), $('#paywall')].forEach((o) => o.addEventListener('click', (e) => { if (e.target === o) closeOverlays(); }));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlays(); });
  }

  /* ---------- Theme (manual light/dark toggle, remembers choice) ---------- */
  function initTheme() {
    const p = localStorage.getItem('hanlingo_theme');
    let dark;
    if (p === 'dark') dark = true;
    else if (p === 'light') dark = false;
    else dark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const t = $('#theme-toggle');
    if (t) { t.setAttribute('aria-pressed', dark ? 'true' : 'false'); t.innerText = dark ? '☾' : '☀'; t.title = dark ? 'Switch to light mode' : 'Switch to dark mode'; }
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark';
    localStorage.setItem('hanlingo_theme', cur ? 'light' : 'dark');
    initTheme();
  }
  /* ---------- Navbar daily-progress streak ring ---------- */
  function renderNavStreak() {
    const el = $('#nav-streak'); if (!el) return;
    const d = store.get('hanlingo_daily', { date: '', count: 0 });
    const today = new Date().toISOString().slice(0, 10);
    const count = d.date === today ? (d.count || 0) : 0;
    const goal = dayGoal();
    const pct = goal ? Math.min(1, count / goal) : 0;
    const r = 11, c = 2 * Math.PI * r;
    el.innerHTML = '<svg viewBox="0 0 28 28" width="26" height="26" aria-hidden="true"><circle cx="14" cy="14" r="' + r + '" fill="none" stroke="currentColor" stroke-opacity=".18" stroke-width="3"/><circle cx="14" cy="14" r="' + r + '" fill="none" stroke="var(--ochre)" stroke-width="3" stroke-linecap="round" stroke-dasharray="' + (pct * c) + ' ' + c + '" transform="rotate(-90 14 14)"/><text x="14" y="16" text-anchor="middle" font-size="8.5" fill="currentColor" font-family="Inter,sans-serif">' + Math.min(count, 99) + '</text></svg>';
  }

  async function init() {
    initTheme();
    renderNavStreak();
    bind();
    renderSkeletons();
    let stories = [];
    if (window.STORIES_DATA && Array.isArray(window.STORIES_DATA.stories)) {
      stories = window.STORIES_DATA.stories;
    } else {
      try {
        const res = await fetch('stories.json');
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        stories = data.stories || [];
      } catch (err) {
        console.error('Could not load cards:', err);
      }
    }
    state.stories = stories;
    if (!state.stories.length) {
      $('#view-learn').append(h('p', { class: 'empty' }, 'Could not load stories. Check the files and reload.'));
    }
    renderStream();
    renderDashboard();
    await ensureStoragePersist();
    // Open with a spaced-repetition review if any learned cards are due.
    checkSrsReview();
    // If the user deep-linked straight into #premium before stories finished loading,
    // re-render the Premium zone now that real story data is available.
    if (location.hash === '#premium' || (document.body && document.body.classList.contains('theme-premium'))) {
      renderPremium();
    }
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch((e) => console.log('SW:', e)));
    }
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      $('#install-app-footer').hidden = true;
    }
  }

  init();

  // Deep-link bootstrap: open #premium / #levels directly.
  // Runs on several ticks so it works regardless of when the initial hash is
  // applied or when async story data finishes loading. show() is idempotent,
  // so repeated calls are safe.
  function bootFromHash() {
    if (location.hash === '#premium') show('premium');
    else if (location.hash === '#community') show('community');
    else if (location.hash === '#levels') show('learn');
  }
  bootFromHash();
  setTimeout(bootFromHash, 0);
  setTimeout(bootFromHash, 800);
  setTimeout(bootFromHash, 2500);
  window.addEventListener('hashchange', bootFromHash);
})();
