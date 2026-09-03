// ============================================================
// HanLingo — Complete 15-Topic 150-Phrase Database
// Topics 1-4: FREE (all 10 phrases unlocked)
// Topics 5-15: PAID (content served from /api/get-topic after token verification)
// Audio: ./audio/{topicNum}_{phraseNum}.mp3
// ============================================================

(function() {
  'use strict';

  // ---------- Helper: split a phrase into character-level word units ----------
  // Each unit: { w: char, py: pinyinFrag, mn: meaning }
  // We use approximate per-character pinyin & minimal meanings for tooltips.
  function buildWords(zhText, pyText, meanings) {
    // meanings = array of per-char or per-word simple definitions (optional)
    var units = [];
    var zhChars = [];
    var i;
    for (i = 0; i < zhText.length; i++) {
      var c = zhText.charAt(i);
      if (c.trim() === '' || /[，。！？、；：""''（）…—·\!\?,\.]/.test(c)) {
        // Skip most punctuation as word units, add as spacer with empty mn
        if (/[，。！？、；：！？\.\,]/.test(c)) {
          zhChars.push({ ch: c, punc: true });
        }
      } else {
        zhChars.push({ ch: c, punc: false });
      }
    }
    // Split pinyin by whitespace to get rough tokens, then distribute to chars
    var pyTokens = (pyText || '').replace(/[，。！？\!\?,\.]/g, '').trim().split(/\s+/);
    var tokenIdx = 0;
    var charPerTokenRatio = zhChars.filter(function(z){return !z.punc;}).length / Math.max(1, pyTokens.length);
    var charCount = 0;
    zhChars.forEach(function(zc, idx) {
      if (zc.punc) {
        units.push({ w: zc.ch, py: '', mn: '' });
      } else {
        // assign a pinyin token (rough alignment — the karaoke visual uses ordered highlighting)
        var pyFrag = pyTokens[tokenIdx] || '';
        // For tones carried by characters (e.g., Duìbuqǐ = 对 不 起), we split if token has hyphen or no space
        // For simplicity, we assign full token and advance based on ratio
        units.push({
          w: zc.ch,
          py: pyFrag,
          mn: meanings && meanings[idx] ? meanings[idx] : ''
        });
        charCount++;
        if (charCount >= Math.ceil(charPerTokenRatio) * (tokenIdx + 1) && tokenIdx < pyTokens.length - 1) {
          tokenIdx++;
        }
      }
    });
    return units;
  }

  // ============================================================
  // TOPIC 1: Daily Politeness & Icebreakers (FREE)
  // ============================================================
  var T1_CULTURE = '华人见面不习惯拥抱或贴面，握手是最安全得体的礼仪，微笑点头也非常合适。初次见面递名片时，双手奉上且文字朝向对方，在新加坡和台湾同样适用。问"你怎么样？"时，对方若回答"还行"表示"so-so"，不必追问细节，这只是客套寒暄。';

  var t1 = [
    { id: '1_1', zh: '你好！',           py: 'Nǐ hǎo!',                       en: 'Hello!',
      words: buildWords('你好！','Nǐ hǎo!',['you','good','']) },
    { id: '1_2', zh: '谢谢！',           py: 'Xièxie!',                       en: 'Thank you!',
      words: buildWords('谢谢！','Xièxie!',['thank','thank','']) },
    { id: '1_3', zh: '对不起。',         py: 'Duìbuqǐ.',                      en: 'Sorry / Excuse me.',
      words: buildWords('对不起。','Duìbuqǐ.',['correct/face','not','rise','']) },
    { id: '1_4', zh: '没关系。',         py: 'Méi guānxi.',                    en: "It's okay / No problem.",
      words: buildWords('没关系。','Méi guānxi.',['no','relation/matter','','']) },
    { id: '1_5', zh: '再见！',           py: 'Zàijiàn!',                       en: 'Goodbye!',
      words: buildWords('再见！','Zàijiàn!',['again','see','']) },
    { id: '1_6', zh: '你怎么样？',       py: 'Nǐ zěnmeyàng?',                  en: 'How are you doing?',
      words: buildWords('你怎么样？','Nǐ zěnmeyàng?',['you','how','appearance','?']) },
    { id: '1_7', zh: '我很好，你呢？',   py: 'Wǒ hěn hǎo, nǐ ne?',             en: "I'm fine, and you?",
      words: buildWords('我很好，你呢？','Wǒ hěn hǎo nǐ ne',['I','very','good','','you','particle','?']) },
    { id: '1_8', zh: '你叫什么名字？',   py: 'Nǐ jiào shénme míngzi?',         en: "What's your name?",
      words: buildWords('你叫什么名字？','Nǐ jiào shénme míngzi?',['you','be called','what','name','word','?']) },
    { id: '1_9', zh: '我叫大卫。',       py: 'Wǒ jiào Dàwèi.',                 en: 'My name is David.',
      words: buildWords('我叫大卫。','Wǒ jiào Dàwèi.',['I','be called','Da','wei','']) },
    { id: '1_10',zh: '认识你很高兴。',   py: 'Rènshi nǐ hěn gāoxìng.',          en: 'Nice to meet you.',
      words: buildWords('认识你很高兴。','Rènshi nǐ hěn gāoxìng.',['know/recognize','you','very','happy','','']) }
  ];

  // ============================================================
  // TOPIC 2: Numbers, Paying & Shopping (FREE)
  // ============================================================
  var T2_CULTURE = '在夜市和小贩中心讨价还价是常见现象，但连锁店和商场明码标价不能还价。新加坡小贩中心一般也不还价，摊位价格已固定。说"太贵了"后卖家若不让价，表示已到底价。块（kuài）和毛（máo）是口语中的"元"和"角"，新加坡人也用"块"指代新加坡元。';

  var t2 = [
    { id: '2_1', zh: '这个多少钱？',       py: 'Zhège duōshao qián?',            en: 'How much is this?',
      words: buildWords('这个多少钱？','Zhège duōshao qián?',['this','measure','how much','money','?']) },
    { id: '2_2', zh: '太贵了！',           py: 'Tài guì le!',                    en: 'Too expensive!',
      words: buildWords('太贵了！','Tài guì le!',['too','expensive','particle','']) },
    { id: '2_3', zh: '便宜一点吧。',       py: 'Piányi yīdiǎn ba.',              en: 'A little cheaper, please.',
      words: buildWords('便宜一点吧。','Piányi yīdiǎn ba.',['cheap','inexpensive','one','a bit','particle','']) },
    { id: '2_4', zh: '我要这个。',         py: 'Wǒ yào zhège.',                  en: "I'll take this one.",
      words: buildWords('我要这个。','Wǒ yào zhège.',['I','want','this','measure','']) },
    { id: '2_5', zh: '一共多少钱？',       py: 'Yīgòng duōshao qián?',           en: 'How much in total?',
      words: buildWords('一共多少钱？','Yīgòng duōshao qián?',['one','total','how much','money','?']) },
    { id: '2_6', zh: '可以刷卡吗？',       py: 'Kěyǐ shuā kǎ ma?',               en: 'Can I pay by card?',
      words: buildWords('可以刷卡吗？','Kěyǐ shuā kǎ ma?',['can','may','swipe','card','particle','?']) },
    { id: '2_7', zh: '我没有现金。',       py: 'Wǒ méiyǒu xiànjīn.',             en: "I don't have cash.",
      words: buildWords('我没有现金。','Wǒ méiyǒu xiànjīn.',['I','not have','cash','money','']) },
    { id: '2_8', zh: '请找我钱。',         py: 'Qǐng zhǎo wǒ qián.',              en: 'Please give me my change.',
      words: buildWords('请找我钱。','Qǐng zhǎo wǒ qián.',['please','find/give change','me','money','']) },
    { id: '2_9', zh: '只要这个。',         py: 'Zhǐyào zhège.',                  en: 'Only this one, please.',
      words: buildWords('只要这个。','Zhǐyào zhège.',['only','want','this','measure','']) },
    { id: '2_10',zh: '十块五毛。',         py: 'Shí kuài wǔ máo.',               en: 'Ten dollars fifty cents (local currency).',
      words: buildWords('十块五毛。','Shí kuài wǔ máo.',['ten','dollar/yuan','five','dime/mao','']) }
  ];

  // ============================================================
  // TOPIC 3: Dining Out & Food Preferences (FREE)
  // ============================================================
  var T3_CULTURE = '在中国大陆和台湾，"买单"是最通用的说法。在新加坡，"买单"也完全通用，部分老一辈会说"结账"。如果你不吃辣，一定要强调"不要辣"或"不辣"，因为很多菜默认放辣椒。用筷子时，千万不要把筷子竖插在米饭上——这像祭拜，是大忌。等大家都入座后再开始吃是基本礼貌。';

  var t3 = [
    { id: '3_1', zh: '我饿了！',                 py: 'Wǒ è le!',                        en: "I'm hungry!",
      words: buildWords('我饿了！','Wǒ è le!',['I','hungry','particle','']) },
    { id: '3_2', zh: '请给我菜单。',             py: 'Qǐng gěi wǒ càidān.',              en: 'Please give me the menu.',
      words: buildWords('请给我菜单。','Qǐng gěi wǒ càidān.',['please','give','me','menu','','']) },
    { id: '3_3', zh: '我要一杯水。',             py: 'Wǒ yào yī bēi shuǐ.',              en: 'I want a glass of water.',
      words: buildWords('我要一杯水。','Wǒ yào yī bēi shuǐ.',['I','want','one','cup/glass','water','']) },
    { id: '3_4', zh: '不要辣！',                 py: 'Bùyào là!',                        en: 'No spicy, please!',
      words: buildWords('不要辣！','Bùyào là!',['not want','spicy','']) },
    { id: '3_5', zh: '我不吃猪肉。',             py: 'Wǒ bù chī zhūròu.',                en: "I don't eat pork.",
      words: buildWords('我不吃猪肉。','Wǒ bù chī zhūròu.',['I','not','eat','pig','meat','']) },
    { id: '3_6', zh: '有素食吗？',               py: 'Yǒu sùshí ma?',                    en: 'Do you have vegetarian food?',
      words: buildWords('有素食吗？','Yǒu sùshí ma?',['have','vegetarian','food','particle','?']) },
    { id: '3_7', zh: '这个很好吃！',             py: 'Zhège hěn hǎochī!',                en: 'This is delicious!',
      words: buildWords('这个很好吃！','Zhège hěn hǎochī!',['this','measure','very','good eat','']) },
    { id: '3_8', zh: '买单！',                   py: 'Mǎidān!',                          en: 'Check, please!',
      words: buildWords('买单！','Mǎidān!',['buy','bill','']) },
    { id: '3_9', zh: '请给我打包。',             py: 'Qǐng gěi wǒ dǎbāo.',               en: 'Please pack this to go.',
      words: buildWords('请给我打包。','Qǐng gěi wǒ dǎbāo.',['please','give','me','pack','bag','']) },
    { id: '3_10',zh: '请给我叉子/筷子。',        py: 'Qǐng gěi wǒ chāzi / kuàizi.',       en: 'Please give me a fork / chopsticks.',
      words: buildWords('请给我叉子筷子。','Qǐng gěi wǒ chāzi kuàizi.',['please','give','me','fork','chopsticks','']) }
  ];

  // ============================================================
  // TOPIC 4: Getting Around (FREE)
  // ============================================================
  var T4_CULTURE = '在新加坡，说"巴士"比"公交车"更普遍；在台湾说"公车"；在中国大陆说"公交车"。问路时最好先微笑说"打扰一下"以示礼貌。出租车司机大多会讲简单英语，但说中文更容易得到亲切回应。坐地铁时"先下后上"（xiān xià hòu shàng）是基本秩序。';

  var t4 = [
    { id: '4_1', zh: '厕所在哪里？',         py: 'Cèsuǒ zài nǎli?',                    en: 'Where is the restroom?',
      words: buildWords('厕所在哪里？','Cèsuǒ zài nǎli?',['toilet/restroom','at','where','?']) },
    { id: '4_2', zh: '我想去这个地方。',     py: 'Wǒ xiǎng qù zhège dìfang.',          en: 'I want to go to this place (show address).',
      words: buildWords('我想去这个地方。','Wǒ xiǎng qù zhège dìfang.',['I','want to','go','this','measure','place','']) },
    { id: '4_3', zh: '怎么走？',             py: 'Zěnme zǒu?',                          en: 'How do I get there?',
      words: buildWords('怎么走？','Zěnme zǒu?',['how','walk/go','?']) },
    { id: '4_4', zh: '往左转。',             py: 'Wǎng zuǒ zhuǎn.',                     en: 'Turn left.',
      words: buildWords('往左转。','Wǎng zuǒ zhuǎn.',['toward','left','turn','']) },
    { id: '4_5', zh: '往右转。',             py: 'Wǎng yòu zhuǎn.',                     en: 'Turn right.',
      words: buildWords('往右转。','Wǎng yòu zhuǎn.',['toward','right','turn','']) },
    { id: '4_6', zh: '一直往前走。',         py: 'Yīzhí wǎng qián zǒu.',                en: 'Go straight ahead.',
      words: buildWords('一直往前走。','Yīzhí wǎng qián zǒu.',['always','straight','toward','front','walk','']) },
    { id: '4_7', zh: '很近，走路五分钟。',   py: 'Hěn jìn, zǒulù wǔ fēnzhōng.',         en: 'Very close, 5-minute walk.',
      words: buildWords('很近，走路五分钟。','Hěn jìn zǒulù wǔ fēnzhōng.',['very','close','','walk road','five','minute','','']) },
    { id: '4_8', zh: '坐地铁/巴士。',        py: 'Zuò dìtiě / bāshì.',                 en: 'Take the subway / bus.',
      words: buildWords('坐地铁巴士。','Zuò dìtiě bāshì.',['sit/take','subway iron','bus','']) },
    { id: '4_9', zh: '我迷路了。',           py: 'Wǒ mílù le.',                         en: "I'm lost.",
      words: buildWords('我迷路了。','Wǒ mílù le.',['I','lost road','particle','']) },
    { id: '4_10',zh: '请在这里停。',         py: 'Qǐng zài zhèli tíng.',                en: 'Please stop here (to taxi driver).',
      words: buildWords('请在这里停。','Qǐng zài zhèli tíng.',['please','at','here','stop','']) }
  ];

  // ============================================================
  // TOPIC 5: Work & Office Greetings (PAID)
  // ============================================================
  var T5_CULTURE = '';

  var t5 = [];

  // ============================================================
  // TOPIC 6: Feeling Sick & Doctor Visit (PAID)
  // ============================================================
  var T6_CULTURE = '';

  var t6 = [];

  // ============================================================
  // TOPIC 7: Real Feelings & Emotions (PAID)
  // ============================================================
  var T7_CULTURE = '';

  var t7 = [];

  // ============================================================
  // TOPIC 8: Phone, Wi-Fi & Digital Pay (PAID)
  // ============================================================
  var T8_CULTURE = '';

  var t8 = [];

  // ============================================================
  // TOPIC 9: Hotel Check-in & Room Service (PAID)
  // ============================================================
  var T9_CULTURE = '';

  var t9 = [];

  // ============================================================
  // TOPIC 10: Inviting Friends & Social Life (PAID)
  // ============================================================
  var T10_CULTURE = '';

  var t10 = [];

  // ============================================================
  // TOPIC 11: Bank, Exchange & Numbers (PAID)
  // ============================================================
  var T11_CULTURE = '';

  var t11 = [];

  // ============================================================
  // TOPIC 12: Time, Date & Appointments (PAID)
  // ============================================================
  var T12_CULTURE = '';

  var t12 = [];

  // ============================================================
  // TOPIC 13: Weather, Seasons & Dressing (PAID)
  // ============================================================
  var T13_CULTURE = '';

  var t13 = [];

  // ============================================================
  // TOPIC 14: Learning Chinese & Asking for Help (PAID)
  // ============================================================
  var T14_CULTURE = '';

  var t14 = [];

  // ============================================================
  // TOPIC 15: Emergency & Lost Items (PAID)
  // ============================================================
  var T15_CULTURE = '';

  var t15 = [];

  // ============================================================
  // ASSEMBLE: topics metadata + topicPhrases
  // ============================================================
  var TOPICS_META = [
    { key: 'topic-01', icon: '👋', title: 'Daily Politeness & Icebreakers', desc: 'Greet, thank, apologize, introduce yourself — make a great first impression.', cultureTip: T1_CULTURE },
    { key: 'topic-02', icon: '💰', title: 'Numbers, Paying & Shopping',      desc: 'Ask price, bargain, pay with card — avoid getting overcharged.', cultureTip: T2_CULTURE },
    { key: 'topic-03', icon: '🍜', title: 'Dining Out & Food Preferences',   desc: 'Order food, avoid allergies, ask for the bill — eat with confidence.', cultureTip: T3_CULTURE },
    { key: 'topic-04', icon: '🚕', title: 'Getting Around',                   desc: 'Ask directions, take taxi/bus, never get lost in a Chinese city.', cultureTip: T4_CULTURE },
    { key: 'topic-05', icon: '💼', title: 'Work & Office Greetings',          desc: 'Thank colleagues, talk schedules, cheer the team — fit right in.', cultureTip: T5_CULTURE },
    { key: 'topic-06', icon: '🏥', title: 'Feeling Sick & Doctor Visit',     desc: 'Describe pain, allergies, ask for medicine — critical travel words.', cultureTip: T6_CULTURE },
    { key: 'topic-07', icon: '❤️', title: 'Real Feelings & Emotions',        desc: 'Move past "I\'m fine" — share joy, stress, tiredness naturally.', cultureTip: T7_CULTURE },
    { key: 'topic-08', icon: '📱', title: 'Phone, Wi-Fi & Digital Pay',      desc: 'Ask for Wi-Fi, scan QR pay, charge battery — modern daily essentials.', cultureTip: T8_CULTURE },
    { key: 'topic-09', icon: '🏨', title: 'Hotel Check-in & Room Service',   desc: 'Book in, request amenities, check out smoothly — handle the front desk.', cultureTip: T9_CULTURE },
    { key: 'topic-10', icon: '🍻', title: 'Inviting Friends & Social Life',  desc: 'Plan dinner, invite people over, say "my treat" — make real friends.', cultureTip: T10_CULTURE },
    { key: 'topic-11', icon: '🏦', title: 'Bank, Exchange & Numbers',        desc: 'Exchange money, withdraw, open account — big transactions with calm.', cultureTip: T11_CULTURE },
    { key: 'topic-12', icon: '⏰', title: 'Time, Date & Appointments',       desc: 'Ask the time, set meetings, reschedule gracefully — punctuality wins.', cultureTip: T12_CULTURE },
    { key: 'topic-13', icon: '🌤️', title: 'Weather, Seasons & Dressing',     desc: 'Small-talk like a local — the safest icebreaker in any Chinese context.', cultureTip: T13_CULTURE },
    { key: 'topic-14', icon: '📚', title: 'Learning Chinese & Asking Help',  desc: 'Survival phrases for learning itself — slow down, repeat, ask meaning.', cultureTip: T14_CULTURE },
    { key: 'topic-15', icon: '🚨', title: 'Emergency & Lost Items',          desc: 'Call for help, report theft, find embassy — hope you never need these.', cultureTip: T15_CULTURE }
  ];

  var TOPIC_PHRASES = {
    'topic-01': t1,
    'topic-02': t2,
    'topic-03': t3,
    'topic-04': t4,
    'topic-05': t5,
    'topic-06': t6,
    'topic-07': t7,
    'topic-08': t8,
    'topic-09': t9,
    'topic-10': t10,
    'topic-11': t11,
    'topic-12': t12,
    'topic-13': t13,
    'topic-14': t14,
    'topic-15': t15
  };

  // For each phrase, attach the topic-level cultural note so the Big Card can display it.
  Object.keys(TOPIC_PHRASES).forEach(function(key, ti) {
    var cultureTip = (TOPICS_META[ti] && TOPICS_META[ti].cultureTip) ? TOPICS_META[ti].cultureTip : '';
    TOPIC_PHRASES[key].forEach(function(p) {
      p.culture = cultureTip;
    });
  });

  // Build flat PHRASE_DATA map (pid -> phrase object)
  var PHRASE_DATA = {};
  Object.keys(TOPIC_PHRASES).forEach(function(key) {
    TOPIC_PHRASES[key].forEach(function(p) {
      if (p.id) PHRASE_DATA[p.id] = p;
    });
  });

  // TOPIC_KEYS: ordered array of topic keys
  var TOPIC_KEYS = TOPICS_META.map(function(t) { return t.key; });

  // TOPIC_LABELS: key -> title label for Big Card tag display
  var TOPIC_LABELS = {};
  TOPICS_META.forEach(function(t) {
    TOPIC_LABELS[t.key] = t.title;
  });

  // Export globally
  window.HANLINGO_DATA = {
    topics: TOPICS_META,
    topicPhrases: TOPIC_PHRASES
  };
  window.PHRASE_DATA = PHRASE_DATA;
  window.TOPIC_KEYS = TOPIC_KEYS;
  window.TOPIC_LABELS = TOPIC_LABELS;

  console.log('HanLingo DATA loaded. Free phrases: local. Paid topics 5-15: server-side.');
})();