(() => {
  'use strict';

  // Stripe Payment Link or your backend's Checkout-session endpoint.
  // Leave empty for demo mode (the "Subscribe" button just unlocks locally).
  const CHECKOUT_URL = '';

  const $ = (s) => document.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  const CATEGORY_META = {
    strange: {
      title: 'Liaozhai Tales',
      vertical: '聊',
      seal: '斋',
      highlight: 'Classic ghost stories with atmosphere and texture.',
      description: 'Explore the strange, the eerie, and the mythical at a measured pace with story-first Mandarin practice.'
    },
    daily: {
      title: 'Daily Life',
      vertical: '生',
      seal: '活',
      highlight: 'Real-life Mandarin for everyday conversation.',
      description: 'Learn how to greet people, order food, travel, shop, and chat naturally in daily situations.'
    },
    business: {
      title: 'Business & Workplace',
      vertical: '商',
      seal: '务',
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
    currentCategory: 'strange',
    vocab: store.get('hanlingo_vocab', []),
    pro: store.get('hanlingo_pro', false),
    plan: store.get('hanlingo_plan', 'b'),
    settings: Object.assign({ hsk: 'HSK 3-4', pinyin: false, translation: false }, store.get('hanlingo_settings', {}))
  };

  function saveSubscriptionState() {
    store.set('hanlingo_pro', state.pro);
    store.set('hanlingo_plan', state.plan);
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

    if (speechSynthesis.getVoices().length) {
      speechSynthesis.speak(u);
      return;
    }

    const onVoicesReady = () => {
      const readyVoice = pickVoice();
      if (readyVoice) u.voice = readyVoice;
      speechSynthesis.speak(u);
      window.removeEventListener('voiceschanged', onVoicesReady);
    };
    window.addEventListener('voiceschanged', onVoicesReady, { once: true });
    setTimeout(() => {
      try { speechSynthesis.speak(u); } catch {}
      window.removeEventListener('voiceschanged', onVoicesReady);
    }, 220);
  }

  /* ---------- Views & bottom nav ---------- */
  const VIEWS = ['learn', 'reader', 'vocab', 'profile'];

  function show(view) {
    VIEWS.forEach((v) => { $('#view-' + v).hidden = v !== view; });
    const tab = view === 'reader' ? 'learn' : view;
    document.querySelectorAll('.bottom-nav button').forEach((b) => {
      if (b.dataset.view === tab) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    closeOverlays();
    if (view === 'vocab') renderVocab();
    if (view === 'profile') renderProfile();
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

  function splitWordPinyin(word, pinyin) {
    const chars = Array.from(word);
    const trimmed = (pinyin || '').trim();
    if (!trimmed) return Array.from({ length: chars.length }, () => '');

    const syllables = trimmed.split(/\s+/).filter(Boolean);
    if (syllables.length === chars.length) return syllables;

    const compact = trimmed.replace(/\s+/g, '');
    if (chars.length === 2) {
      if (compact.length <= 5) return [compact.slice(0, 2), compact.slice(2)];
      return [compact.slice(0, Math.ceil(compact.length / 2)), compact.slice(Math.ceil(compact.length / 2))];
    }
    if (chars.length === 3 && compact.length <= 9) {
      return [compact.slice(0, 3), compact.slice(3, 5), compact.slice(5)];
    }

    const fallback = [];
    let cursor = 0;
    for (let i = 0; i < chars.length; i++) {
      const remaining = chars.length - i;
      const take = remaining === 1 ? compact.length - cursor : Math.max(1, Math.round((compact.length - cursor) / remaining));
      fallback.push(compact.slice(cursor, cursor + take));
      cursor += take;
    }
    if (fallback.length && fallback.length === chars.length && cursor >= compact.length) return fallback;

    return Array.from({ length: chars.length }, (_, i) => (syllables[i] || ''));
  }

  function charWrap(ch, py, showPinyin) {
    const wrap = h('span', { class: 'char-wrap' + (/^[，。！？；：、,.!?;:]+$/.test(ch) ? ' punctuation' : '') });
    if (showPinyin && py) wrap.append(h('span', { class: 'pinyin' }, py));
    wrap.append(h('span', { class: 'hanzi' }, ch));
    return wrap;
  }

  function plainCharGroup(chars, showPinyin) {
    return h('span', { class: 'char-group' }, ...chars.map((ch) => charWrap(ch, '', showPinyin)));
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
        u.onend = () => {
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
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
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
    const playBtn = h('button', { class: 'play-btn', type: 'button', 'aria-label': '播放' }, icons.play);
    const muteBtn = h('button', { class: 'mute-btn', type: 'button', 'aria-label': '静音' }, icons.vol);
    const seek = h('input', { class: 'seek-range', id: uid + '-seek', type: 'range', min: '0', max: '1000', value: '0', 'aria-label': '播放进度' });
    const vol = h('input', { class: 'volume-range', id: uid + '-vol', type: 'range', min: '0', max: '100', value: '100', 'aria-label': '音量' });
    const time = h('span', { class: 'time-tag' }, '0:00 / 0:00');
    const seekWrap = h('div', { class: 'seek-wrap' }, seek);
    const topBar = h('div', { class: 'player-bar' }, playBtn, seekWrap, time, muteBtn, vol);
    const abBtn = h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'ab', id: uid + '-ab' }, 'A-B循环');
    const dictInput = h('input', { type: 'checkbox', id: uid + '-dict' });

    const modeRow = h('div', { class: 'player-row', role: 'group', 'aria-label': '播放模式' },
      abBtn,
      h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'continuous' }, '连续播放'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'sentence' }, '单句循环'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'mode', 'data-value': 'once' }, '单次播放'),
      h('label', { class: 'toggle' },
        dictInput,
        h('span', { class: 'toggle-track' }),
        h('span', { class: 'toggle-label' }, '听写模式')));

    const speedRow = h('div', { class: 'player-row', role: 'group', 'aria-label': '倍速' },
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '0.6' }, '0.6x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '0.8' }, '0.8x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '1' }, '1x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '1.2' }, '1.2x'),
      h('button', { class: 'chip sm', type: 'button', 'data-kind': 'speed', 'data-value': '1.5' }, '1.5x'));

    const subsRow = h('div', { class: 'player-row', role: 'group', 'aria-label': '字幕显示' },
      h('button', { class: 'chip', type: 'button', 'data-kind': 'subs', 'data-value': 'both' }, '中英'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'subs', 'data-value': 'en' }, '英文'),
      h('button', { class: 'chip', type: 'button', 'data-kind': 'subs', 'data-value': 'zh' }, '中文'));

    const dictBox = h('textarea', {
      class: 'dict-input',
      rows: '2',
      maxlength: '120',
      placeholder: '请输入中文句子',
      'aria-label': '听写：请输入中文句子'
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
      playBtn.setAttribute('aria-label', media.paused ? '播放' : '暂停');
      muteBtn.innerHTML = media.muted || media.volume === 0 ? icons.muted : icons.vol;
      muteBtn.setAttribute('aria-label', media.muted || media.volume === 0 ? '取消静音' : '静音');
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
        hint.textContent = '听写模式：输入中文句子，按语音内容书写';
        wrapper.appendChild(hint);
        dictBox.value = st.dictText;
        dictBox.placeholder = '请输入中文句子';
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
      if (st.A == null) abBtn.textContent = 'A-B循环';
      else if (st.B == null) abBtn.textContent = 'A ' + formatClock(st.A) + ' · 设B';
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

    root.append(topBar, modeRow, speedRow, subsRow, dictBox);
    return root;
  }

  function renderReader() {
    const c = state.cards[state.idx];
    const total = state.cards.length;
    const last = state.idx === total - 1;
    const showPinyin = !!state.settings.pinyin;
    const sentence = h('p', { class: 'sentence', lang: 'zh-CN' },
      ...tokenize(c.sentence, c.vocabList).map((tk) => {
        if (tk.v) {
          const chars = Array.from(tk.t);
          const pinyinByChar = splitWordPinyin(tk.v.word, tk.v.pinyin);
          return h('button', {
            class: 'word' + (hasWord(tk.v.word) ? ' saved' : ''),
            type: 'button',
            onclick: () => openWord(tk.v)
          }, ...chars.map((ch, idx) => charWrap(ch, pinyinByChar[idx] || '', showPinyin)));
        }
        return plainCharGroup(Array.from(tk.t), showPinyin);
      }));
    const sentencePinyin = showPinyin && (!Array.isArray(c.vocabList) || c.vocabList.length === 0)
      ? h('p', { class: 'sentence-pinyin', lang: 'zh-Latn' }, c.pinyin)
      : null;

    $('#view-reader').replaceChildren(
      h('div', { class: 'reader' },
        h('div', { class: 'r-top' },
          h('button', { class: 'btn ghost', type: 'button', onclick: () => show('learn') }, 'Back'),
          h('span', { class: 'count' }, `Card ${state.idx + 1} / ${total}`),
          h('span', { class: 'tag ' + (c.isFree ? 'free' : 'pro') }, c.isFree ? 'Free' : 'Pro')),
        h('div', { class: 'bar' }, h('i', { style: `width:${((state.idx + 1) / total) * 100}%` })),
        h('div', { class: 'r-title' }, c.title),
        h('div', { class: 'card-subtitle' },
          sentence,
          sentencePinyin,
          state.settings.translation ? h('p', { class: 'trans' }, c.translation) : null,
          c.grammarPoint ? h('p', { class: 'grammar-note' },
            h('strong', {}, 'HSK 5–6 focus · '), c.grammarPoint) : null),
        renderAudioPlayer(c),
        h('div', { class: 'r-nav' },
          h('button', { class: 'btn', type: 'button', disabled: state.idx === 0, onclick: () => go(state.idx - 1) }, 'Previous'),
          h('button', { class: 'btn primary', type: 'button', onclick: () => (last ? show('learn') : go(state.idx + 1)) }, last ? 'Finish' : 'Next'))));
  }

  // Paywall gate: a locked card is never rendered, so its text never reaches the DOM.
  function go(i) {
    if (i < 0 || i >= state.cards.length) return;
    const c = state.cards[i];
    if (!c.isFree && !state.pro) { state.pending = i; openPaywall(); return; }
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
    state.idx = 0;
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
          h('button', { class: 'btn ghost', type: 'button', onclick: () => show('learn') }, 'Back')),
        h('div', { class: 'cover big ' + (s.coverClass || 'c1'), 'aria-hidden': 'true' }, s.cover || zh.slice(0, 1)),
        h('h2', { class: 'intro-title' }, en),
        h('p', { class: 'intro-zh', lang: 'zh-CN' }, zh),
        s.intro ? h('p', { class: 'intro-text' }, s.intro) : null,
        s.introZh ? h('p', { class: 'intro-sent', lang: 'zh-CN' }, s.introZh) : null,
        h('div', { class: 'tags' },
          h('span', { class: 'tag' }, s.hskRange || 'HSK 3-4'),
          h('span', { class: 'tag' }, s.totalCards + ' cards'),
          h('span', { class: 'tag free' }, 'Cards 1-' + s.freeCards + ' Free')),
        h('button', { class: 'btn primary start', type: 'button', onclick: () => go(0) }, 'Start reading')));
  }

  function renderCategoryHero() {
    const advancedStories = state.settings.hsk === 'HSK 5-6';
    const meta = advancedStories && state.currentCategory === 'strange' ? {
      title: 'The Art of War',
      vertical: '战',
      seal: '略',
      highlight: 'Strategy, human nature, and dramatic turns.',
      description: 'Explore Sun Tzu through thirteen advanced story packs with classic lines and HSK 5–6 language.'
    } : advancedStories && state.currentCategory === 'daily' ? {
      title: 'Advanced Daily Life',
      vertical: '日',
      seal: '常',
      highlight: 'Modern life, expressed with advanced Mandarin.',
      description: 'Explore thirteen story packs on relationships, wellbeing, culture, and more with HSK 5–6 language.'
    } : CATEGORY_META[state.currentCategory] || CATEGORY_META.strange;
    const titleEl = document.getElementById('hero-title');
    const subEl = document.querySelector('#view-learn .hero .sub');
    const verticalEl = document.querySelector('.hero-title-v');
    const sealTextEl = document.querySelector('.seal-text');
    const metaList = document.querySelector('#view-learn .hero .meta');
    const visible = state.stories.filter((story) =>
      (story.category || 'strange') === state.currentCategory &&
      (story.hskRange || 'HSK 3-4') === state.settings.hsk);

    if (titleEl) titleEl.textContent = meta.title;
    if (subEl) subEl.innerHTML = '<strong>' + meta.highlight + '</strong><br>' + meta.description;
    if (verticalEl) verticalEl.textContent = meta.vertical;
    if (sealTextEl) sealTextEl.textContent = meta.seal;
    if (metaList) {
      const cardCount = visible.reduce((total, story) => total + story.cards.length, 0);
      const freeCount = visible.reduce((total, story) => total + story.cards.filter((card) => card.isFree).length, 0);
      metaList.replaceChildren(
        h('li', {}, state.settings.hsk),
        h('li', {}, visible.length + ' Story Packs'),
        h('li', {}, cardCount + ' Cards'),
        h('li', { class: 'free' }, freeCount + ' Free Cards'));
    }
  }

  function renderStream() {
    renderCategoryHero();
    const root = $('#stream');
    const visible = state.stories.filter((s) =>
      (s.category || 'strange') === state.currentCategory &&
      (s.hskRange || 'HSK 3-4') === state.settings.hsk);
    if (!visible.length) {
      root.replaceChildren();
      $('#soon').hidden = false;
      return;
    }

    root.replaceChildren(
      ...visible.map((s, i) => {
        const zh = (s.title.split('·')[0] || '').trim();
        const en = (s.title.split('·')[1] || s.title).trim();
        const storyIndex = state.stories.findIndex((item) => item === s);
        return h('button', { class: 'pack', type: 'button', 'data-open': storyIndex, onclick: () => openStory(storyIndex) },
          h('div', { class: 'cover ' + (s.coverClass || 'c1'), 'aria-hidden': 'true' }, s.cover || zh.slice(0, 1)),
          h('div', {},
            h('h3', {}, en),
            h('p', {}, zh + ' · ' + s.totalCards + ' cards'),
            s.intro ? h('p', { class: 'blurb' }, s.intro) : null,
            h('div', { class: 'tags' },
              h('span', { class: 'tag' }, s.hskRange || 'HSK 3-4'),
              h('span', { class: 'tag free' }, 'Cards 1-' + s.freeCards + ' Free'),
              h('span', { class: 'tag pro' }, 'Pro'))));
      }));
    $('#soon').hidden = true;
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
          h('span', { class: 'lvl' }, v.hskLevel ? 'HSK ' + v.hskLevel : 'Story word'))));
    $('#sheet').hidden = false;
  }

  function openPaywall() {
    const plans = [
      { key: 'a', label: 'A', price: '$1.99', detail: 'Single deck • one-time', badge: null, description: 'Unlock this 12-card deck', recommended: false },
      { key: 'b', label: 'B', price: '$12.99', detail: 'Category pass • one-time', badge: 'MOST POPULAR', description: 'Unlock this category and all future deck updates', recommended: true },
      { key: 'c', label: 'C', price: '$49.99', detail: 'Lifetime all-access • one-time', badge: 'BEST VALUE • FOUNDING MEMBER', description: 'Unlock the full site, current + future packs', recommended: false }
    ];

    const selectedPlan = plans.find((plan) => plan.key === state.plan) || plans[1];

    const planButtons = plans.map((plan) =>
      h('button', {
        class: 'plan-option' + (state.plan === plan.key ? ' active' : '') + (plan.recommended ? ' popular' : ''),
        type: 'button',
        'data-plan': plan.key,
        onclick: () => {
          state.plan = plan.key;
          openPaywall();
        }
      },
        h('span', { class: 'plan-topline' },
          h('span', { class: 'plan-label' }, plan.label),
          plan.badge ? h('em', { class: 'plan-badge' }, plan.badge) : null),
        h('span', { class: 'plan-price' }, plan.price),
        h('small', { class: 'plan-detail' }, plan.detail),
        h('span', { class: 'plan-description' }, plan.description)));

    $('#paywall').replaceChildren(
      h('div', { class: 'dialog', role: 'dialog', 'aria-labelledby': 'pw-title' },
        h('div', { class: 'dialog-head' },
          h('button', { class: 'close-x', type: 'button', 'aria-label': 'Close pricing', onclick: closeOverlays }, '×'),
          h('div', { class: 'dialog-copy' },
            h('h2', { id: 'pw-title' }, 'Unlock Full HanLingo Experience'),
            h('p', {}, 'Master Chinese sentence by sentence, with zero subscription fatigue.'))),
        h('div', { class: 'plan-grid' }, ...planButtons),
        h('div', { class: 'trust-row' }, 'One-time payment • No monthly recurring fees • Instant access'),
        h('div', { class: 'price' }, selectedPlan.price + ' ', h('small', {}, selectedPlan.detail)),
        h('ul', {},
          h('li', {}, 'Stripe: Credit Card / Apple Pay / Google Pay'),
          h('li', {}, 'PayNow accepted in Singapore'),
          h('li', {}, 'Unlock ' + (selectedPlan.key === 'a' ? 'this 12-card deck' : selectedPlan.key === 'b' ? 'this category and future updates' : 'the full site and all future content'))),
        h('button', { class: 'btn primary', type: 'button', onclick: () => subscribe(state.plan) }, CHECKOUT_URL ? 'Continue to Stripe' : 'Unlock now'),
        h('button', { class: 'btn ghost', type: 'button', onclick: closeOverlays }, 'Not now'),
        CHECKOUT_URL ? null : h('p', { class: 'note' }, 'Demo mode: the checkout link is not connected yet, so this unlocks locally on this device.')));
    $('#paywall').hidden = false;
  }

  function subscribe(planKey = state.plan) {
    state.plan = planKey || 'b';
    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
      return;
    }
    state.pro = true;
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

  function toggleRow(label, hint, key) {
    return h('label', { class: 'row' },
      h('span', {}, label, h('small', {}, hint)),
      h('input', {
        type: 'checkbox', checked: state.settings[key],
        onchange: (e) => { state.settings[key] = e.target.checked; saveSettings(); }
      }));
  }

  function renderProfile() {
    $('#view-profile').replaceChildren(
      h('h2', { class: 'page-title' }, 'Profile'),
      h('div', { class: 'row' },
        h('span', {}, 'Plan', h('small', {}, state.pro ? 'HanLingo Pro' : 'Free: cards 1-4 of each story')),
        state.pro ? h('button', { class: 'btn ghost', type: 'button', onclick: openPaywall }, 'Manage') : h('button', { class: 'btn primary', type: 'button', onclick: openPaywall }, 'Upgrade')),
      toggleRow('Pinyin', 'Show pinyin while reading', 'pinyin'),
      toggleRow('Translation', 'Show English translations while reading', 'translation'),
      h('div', { class: 'row' },
        h('span', {}, 'Clear saved data', h('small', {}, 'Removes your vocab and settings from this device')),
        h('button', {
          class: 'btn', type: 'button',
          onclick: () => {
            if (!confirm('Remove all saved words and settings?')) return;
            ['hanlingo_vocab', 'hanlingo_settings', 'hanlingo_pro', 'hanlingo_plan'].forEach((k) => localStorage.removeItem(k));
            state.pro = false;
            state.plan = 'b';
            saveSubscriptionState();
            location.reload();
          }
        }, 'Clear')));
  }

  /* ---------- Boot ---------- */
  function bind() {
    document.querySelectorAll('.bottom-nav button').forEach((b) =>
      b.addEventListener('click', () => show(b.dataset.view)));
    document.querySelectorAll('[data-open]').forEach((b) =>
      b.addEventListener('click', () => openStory(Number(b.dataset.open) || 0)));
    document.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((x) => x.setAttribute('aria-selected', x === t));
      state.currentCategory = t.dataset.cat || 'strange';
      $('#stream').hidden = false;
      renderCategoryHero();
      renderStream();
    }));
    const hsk = $('#hsk');
    if (!Array.from(hsk.options).some((option) => option.value === state.settings.hsk)) {
      state.settings.hsk = hsk.value;
      saveSettings();
    }
    hsk.value = state.settings.hsk;
    $('#hsk').addEventListener('change', (e) => {
      state.settings.hsk = e.target.value;
      saveSettings();
      renderStream();
    });
    $('#pro-btn').addEventListener('click', () => (state.pro ? show('profile') : openPaywall()));
    [$('#sheet'), $('#paywall')].forEach((o) => o.addEventListener('click', (e) => { if (e.target === o) closeOverlays(); }));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlays(); });
  }

  async function init() {
    bind();
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
    renderCategoryHero();
    renderStream();
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch((e) => console.log('SW:', e)));
    }
  }

  init();
})();
