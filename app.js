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

  const state = {
    stories: [],
    cards: [],
    idx: 0,
    pending: null,
    currentStoryTitle: '',
    vocab: store.get('hanlingo_vocab', []),
    pro: store.get('hanlingo_pro', false),
    settings: Object.assign({ hsk: 'HSK 3-4', pinyin: true, translation: true }, store.get('hanlingo_settings', {}))
  };

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

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.85;
    speechSynthesis.speak(u);
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

  function renderReader() {
    const c = state.cards[state.idx];
    const total = state.cards.length;
    const last = state.idx === total - 1;
    const sentence = h('p', { class: 'sentence', lang: 'zh-CN' },
      tokenize(c.sentence, c.vocabList).map((tk) =>
        tk.v
          ? h('button', { class: 'word' + (hasWord(tk.v.word) ? ' saved' : ''), type: 'button', onclick: () => openWord(tk.v) }, tk.t)
          : tk.t));

    $('#view-reader').replaceChildren(
      h('div', { class: 'reader' },
        h('div', { class: 'r-top' },
          h('button', { class: 'btn ghost', type: 'button', onclick: () => show('learn') }, 'Back'),
          h('span', { class: 'count' }, `Card ${state.idx + 1} / ${total}`),
          h('span', { class: 'tag ' + (c.isFree ? 'free' : 'pro') }, c.isFree ? 'Free' : 'Pro')),
        h('div', { class: 'bar' }, h('i', { style: `width:${((state.idx + 1) / total) * 100}%` })),
        h('div', { class: 'r-title' }, c.title),
        sentence,
        state.settings.pinyin ? h('p', { class: 'pinyin' }, c.pinyin) : null,
        state.settings.translation ? h('p', { class: 'trans' }, c.translation) : null,
        h('div', { class: 'r-nav' },
          h('button', { class: 'btn', type: 'button', disabled: state.idx === 0, onclick: () => go(state.idx - 1) }, 'Previous'),
          h('button', { class: 'btn', type: 'button', onclick: () => speak(c.sentence) }, 'Listen'),
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
    go(0);
  }

  function renderStream() {
    const root = $('#stream');
    root.replaceChildren(
      ...state.stories.map((s, i) => {
        const zh = (s.title.split('·')[0] || '').trim();
        const en = (s.title.split('·')[1] || s.title).trim();
        return h('button', { class: 'pack', type: 'button', 'data-open': i },
          h('div', { class: 'cover ' + (s.coverClass || 'c1'), 'aria-hidden': 'true' }, s.cover || zh.slice(0, 1)),
          h('div', {},
            h('h3', {}, en),
            h('p', {}, zh + ' · ' + s.totalCards + ' cards'),
            h('div', { class: 'tags' },
              h('span', { class: 'tag' }, s.hskRange || 'HSK 3-4'),
              h('span', { class: 'tag free' }, 'Cards 1-' + s.freeCards + ' Free'),
              h('span', { class: 'tag pro' }, 'Pro'))));
      }));
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
          h('button', { class: 'btn', type: 'button', onclick: () => speak(v.word) }, 'Listen'),
          h('span', { class: 'lvl' }, 'HSK ' + v.hskLevel))));
    $('#sheet').hidden = false;
  }

  function openPaywall() {
    $('#paywall').replaceChildren(
      h('div', { class: 'dialog', role: 'dialog', 'aria-labelledby': 'pw-title' },
        h('h2', { id: 'pw-title' }, 'Upgrade to HanLingo Pro'),
        h('p', {}, 'Unlock the full story and exclusive audio.'),
        h('ul', {}, h('li', {}, 'All ' + (state.stories[0] ? state.stories[0].totalCards : 12) + ' cards of ' + state.currentStoryTitle), h('li', {}, 'Audio for every card'), h('li', {}, 'New tales as they arrive')),
        h('div', { class: 'price' }, '$6.99 ', h('small', {}, '/ month')),
        h('button', { class: 'btn primary', type: 'button', onclick: subscribe }, 'Subscribe with Stripe'),
        h('button', { class: 'btn ghost', type: 'button', onclick: closeOverlays }, 'Not now'),
        CHECKOUT_URL ? null : h('p', { class: 'note' }, 'Demo mode: no Stripe link configured, so this unlocks locally.')));
    $('#paywall').hidden = false;
  }

  function subscribe() {
    if (CHECKOUT_URL) { window.location.href = CHECKOUT_URL; return; }
    state.pro = true;
    store.set('hanlingo_pro', true);
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
            h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Listen', onclick: () => speak(v.word) }, '🔊'),
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
        state.pro ? null : h('button', { class: 'btn primary', type: 'button', onclick: openPaywall }, 'Upgrade')),
      toggleRow('Show pinyin', 'Under each sentence', 'pinyin'),
      toggleRow('Show translation', 'English, under each sentence', 'translation'),
      h('div', { class: 'row' },
        h('span', {}, 'Clear saved data', h('small', {}, 'Removes your vocab and settings from this device')),
        h('button', {
          class: 'btn', type: 'button',
          onclick: () => {
            if (!confirm('Remove all saved words and settings?')) return;
            ['hanlingo_vocab', 'hanlingo_settings', 'hanlingo_pro'].forEach((k) => localStorage.removeItem(k));
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
      const strange = t.dataset.cat === 'strange';
      $('#stream').hidden = !strange;
      $('#soon').hidden = strange;
    }));
    $('#hsk').value = state.settings.hsk;
    $('#hsk').addEventListener('change', (e) => { state.settings.hsk = e.target.value; saveSettings(); });
    $('#pro-btn').addEventListener('click', () => (state.pro ? show('profile') : openPaywall()));
    [$('#sheet'), $('#paywall')].forEach((o) => o.addEventListener('click', (e) => { if (e.target === o) closeOverlays(); }));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlays(); });
  }

  async function init() {
    bind();
    try {
      const res = await fetch('stories.json');
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      state.stories = data.stories || [];
      renderStream();
    } catch (err) {
      console.error('Could not load cards:', err);
      $('#view-learn').append(h('p', { class: 'empty' }, 'Could not load stories. Check your connection and reload.'));
    }
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch((e) => console.log('SW:', e)));
    }
  }

  init();
})();
