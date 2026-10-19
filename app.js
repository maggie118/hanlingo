(function(){
  'use strict';

  /* ================= 1. 核心配置与状态 ================= */
  var dataset = window.HanLingoDB;
  var KEY = 'hanlingo_d10_v15'; 
  var TOTAL = 10;
  var cur = 'mix';
  var currentList = [];
  var rIdx = 0;
  var isShuffleMode = false;
  var state = loadState();

  var CATS = [
    {id:'mix', icon:'??', label:"Today's Mix"},
    {id:'survival', icon:'?', label:'Survival & Daily'},
    {id:'business', icon:'??', label:'Business'},
    {id:'classics', icon:'??', label:'Classics & Myths'}
  ];
  var CAT_LABEL = { survival: 'Survival & Daily', business: 'Business', classics: 'Classics & Myths', mix: "Today's Mix", trends: 'Trends & Slang' };

  function loadState() {
    var st = { streak: 0, lastDone: null, day: null, idx: {}, totalMastered: 0 };
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        st.streak = p.streak || 0;
        st.lastDone = p.lastDone || null;
        st.day = p.day || null;
        st.idx = p.idx || {};
        st.totalMastered = p.totalMastered || 0;
      }
    } catch(e){}
    var d = new Date();
    var todayStr = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    if (st.day !== todayStr) { st.day = todayStr; st.idx = {}; }
    return st;
  }
  function saveState() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){} }

  /* ================= 2. 7+2+1 抽取引擎 ================= */
  function getRng(seedStr) {
    if (!seedStr) return Math.random;
    var seed = 0;
    for (var i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) % 233280;
    return function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }
  function shuffle(arr, rand) {
    if (!arr || arr.length === 0) return [];
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function getTodaySentences(category, isShuffle) {
    var dateStr = new Date().toISOString().split('T')[0];
    var rand = getRng(isShuffle ? null : dateStr + category);

    if (category === 'mix') {
      var sPart = shuffle(dataset.survival, rand).slice(0, 7);
      var cPart = shuffle(dataset.classics, rand).slice(0, 2);
      var tPart = shuffle(dataset.trends.length ? dataset.trends : dataset.business, rand).slice(0, 1);
      var mix = sPart.concat(cPart).concat(tPart);
      while (mix.length > 0 && mix.length < 10) { mix.push(mix[0]); }
      return shuffle(mix, rand).slice(0, 10);
    } else {
      var list = dataset[category] || [];
      var res = shuffle(list, rand).slice(0, 10);
      while (res.length > 0 && res.length < 10) { res.push(res[0]); }
      return res;
    }
  }

  /* ================= 3. TTS 语音 ================= */
  var synth = window.speechSynthesis;
  var zhVoice = null;
  if (synth) {
    var initVoices = function() {
      zhVoice = synth.getVoices().find(function(v) { return v.lang === 'zh-CN' || v.lang === 'zh_CN'; }) || synth.getVoices().find(function(v) { return v.lang.indexOf('zh') === 0; });
    };
    initVoices();
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = initVoices;
  }
  function playAudio() {
    var s = currentList[rIdx];
    if (!s || !synth) return;
    synth.cancel();
    document.getElementById('listen').classList.add('speaking');
    var u = new SpeechSynthesisUtterance(s.zh);
    u.lang = 'zh-CN'; u.rate = 0.85;
    if (zhVoice) u.voice = zhVoice;
    u.onend = u.onerror = function() { document.getElementById('listen').classList.remove('speaking'); };
    synth.speak(u);
  }

  /* ================= 4. UI 渲染 ================= */
  var $ = function(id) { return document.getElementById(id); };
  var card = $('card'), done = $('done'), btnListen = $('listen'), btnNext = $('next');

  function renderChips() {
    var html = '';
    CATS.forEach(function(c) {
      html += '<button class="chip" type="button" data-cat="' + c.id + '" aria-selected="' + (c.id === cur) + '">' + c.icon + ' ' + c.label + '</button>';
    });
    $('chips').innerHTML = html;
  }

  function renderCard() {
    var s = currentList[rIdx];
    if (!s) return;

    $('num').innerHTML = 'SENTENCE <b>' + (rIdx + 1) + '</b> / ' + TOTAL;
    $('cat').textContent = CAT_LABEL[s.category] || s.category;
    $('pinyin').textContent = s.pinyin;
    $('hanzi').textContent = s.zh;
    $('english').textContent = s.en;
    btnNext.textContent = (rIdx >= TOTAL - 1) ? 'Finish ?' : 'Next →';
    $('fill').style.width = (rIdx / TOTAL * 100) + '%';
    $('bottomProg').textContent = 'Today\'s Progress: ' + (rIdx + 1) + '/10';
    
    card.style.opacity = '0'; card.style.transform = 'translateY(10px)';
    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
  }

  function loadNewBatch() {
    currentList = getTodaySentences(cur, isShuffleMode);
    rIdx = 0;
    done.hidden = true;
    card.hidden = false;
    renderCard();
  }

  function showDone() {
    card.hidden = true; done.hidden = false;
    var todayStr = new Date().toDateString();
    if (state.lastDone !== todayStr && !isShuffleMode) {
      var yest = new Date(); yest.setDate(yest.getDate() - 1);
      state.streak = (state.lastDone === yest.toDateString()) ? state.streak + 1 : 1;
      state.lastDone = todayStr;
      state.totalMastered += 10;
      saveState();
    }
    $('streak').textContent = state.streak;
    $('totalMastered').textContent = state.totalMastered;
  }

  /* ================= 5. 手势与交互 ================= */
  var startX = 0, startY = 0, isSwiping = false;
  var wrapper = $('cardWrapper');

  wrapper.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    isSwiping = false; card.style.transition = 'none';
  }, { passive: false });

  wrapper.addEventListener('touchmove', function(e) {
    if (!startX || !startY) return;
    var dx = e.touches[0].clientX - startX;
    var dy = e.touches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy)) {
      isSwiping = true;
      if (e.cancelable) e.preventDefault();
      card.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx * 0.05) + 'deg)';
    }
  }, { passive: false });

  wrapper.addEventListener('touchend', function(e) {
    if (!startX) return;
    var dx = e.changedTouches[0].clientX - startX;
    card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    card.style.transform = '';
    if (isSwiping) {
      if (dx < -60) handleNext();
      else if (dx > 60 && rIdx > 0) handlePrev();
    }
    startX = 0; startY = 0;
  });

  function handleNext() {
    if (synth) synth.cancel();
    if (rIdx >= TOTAL - 1) { showDone(); return; }
    rIdx++; renderCard(); setTimeout(playAudio, 300);
  }
  function handlePrev() {
    if (synth) synth.cancel();
    if (rIdx > 0) { rIdx--; renderCard(); setTimeout(playAudio, 300); }
  }

  $('chips').addEventListener('click', function(e) {
    var b = e.target.closest('.chip');
    if (!b) return;
    cur = b.getAttribute('data-cat');
    isShuffleMode = false;
    renderChips();
    loadNewBatch();
  });

  $('shuffleBtn').addEventListener('click', function() {
    isShuffleMode = true;
    loadNewBatch();
  });

  btnListen.addEventListener('click', playAudio);
  btnNext.addEventListener('click', handleNext);

  $('replay').addEventListener('click', function() {
    isShuffleMode = false;
    loadNewBatch();
  });

  /* ================= 6. 分享卡片生成 ================= */
  $('shareBtn').addEventListener('click', function() {
    var s = currentList[rIdx] || currentList[0];
    if(!s) return;
    $('sharePinyin').textContent = s.pinyin;
    $('shareHanzi').textContent = s.zh;
    $('shareEnglish').textContent = s.en;
    $('shareStreak').textContent = state.streak;

    var shareCard = document.getElementById('share-card');
    html2canvas(shareCard, { scale: 2, backgroundColor: '#F4F3EF' }).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'HanLingo-Daily10.png';
      link.href = imgData;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var w = window.open(); w.document.write('<img src="' + imgData + '" style="width:100%; display:block;" />');
      } else { link.click(); }
    });
  });

  /* ================= 初始化 ================= */
  renderChips();
  $('streak').textContent = state.streak;
  loadNewBatch();
})();