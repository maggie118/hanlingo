/* ============================================================
   HanLingo · data/trends.js
   ------------------------------------------------------------
   Trends & Slang —— 2026 年地道流行语 / 网络热词数据源。

   【维护说明】
   1. 本文件与 data/daily.js、data/business.js、data/classics.js 完全平级。
   2. 增删改只需编辑本文件，index.html 主逻辑无需改动。
   3. 若临时下架整个板块，在 index.html 注释掉
        <script src="data/trends.js"></script>
      即可，主逻辑会自动降级为空数组，Daily 10 用 Survival 兜底。
   4. 新增条目请保持字段完整、zh 唯一（主逻辑会按 zh 去重）。

   【字段约定】
     zh      必填  string  中文原句 / 词条
     pinyin  必填  string  拼音（含声调，词与词之间用空格）
     en      必填  string  英文释义（卡片主释义）
     usage   可选  string  使用场景说明（卡片下方 "When to use it"）
   ============================================================ */

window.TRENDS_DATA = [

  /* ---------- 01 · 情绪 / 反应类 ---------- */
  {
    zh: "硬控",
    pinyin: "yìng kòng",
    en: "To be completely captivated / unable to look away",
    usage: "原指游戏里的硬性控制，现在形容被短视频、剧情或某件事牢牢吸住注意力，明知该停却停不下来。例：这部剧太硬控了，我一口气看到凌晨三点。"
  },
  {
    zh: "我勒个豆",
    pinyin: "wǒ lēi gè dòu",
    en: "Oh my god! / Goodness!",
    usage: "表示惊讶、感叹，相当于口语“我的天”，没有恶意，是轻松的感叹词。例：我勒个豆，这价格也太离谱了吧。"
  },
  {
    zh: "破防",
    pinyin: "pò fáng",
    en: "To have one's emotional defenses broken",
    usage: "心理防线被戳穿。一句话、一个视频让人突然情绪涌上来，带点幽默感地承认“我被击中了”。例：看到妈妈发的语音，我直接破防。"
  },
  {
    zh: "尊嘟假嘟",
    pinyin: "zūn dū jiǎ dū",
    en: "Really? For real?",
    usage: "“真的假的”的可爱说法，表示半信半疑、询问确认，语气单纯卖萌。例：你中奖了？尊嘟假嘟？"
  },
  {
    zh: "盐都不盐了",
    pinyin: "yán dōu bù yán le",
    en: "Not even pretending anymore",
    usage: "“演都不演了”的谐音，指人不再假装，直接表露真实状态，比如走神、偷懒。例：老板一转身，他盐都不盐了，直接趴桌上睡。"
  },

  /* ---------- 02 · 态度 / 回应类 ---------- */
  {
    zh: "包的",
    pinyin: "bāo de",
    en: "For sure! / No problem!",
    usage: "表示肯定、答应、没问题，相当于“放心，交给我，一定行”。非常口语化。例：明天八点叫我？包的。"
  },
  {
    zh: "当个事儿办",
    pinyin: "dāng gè shìr bàn",
    en: "Treat it like a real priority / Take it seriously",
    usage: "万能回复公式。无论是考试、健身还是取快递，都可以说“当个事儿办”，表示认真对待、不敷衍。例：这次体检你可得当个事儿办。"
  },
  {
    zh: "那咋了，受着呗",
    pinyin: "nà zǎ le, shòu zhe bei",
    en: "So what? Just deal with it.",
    usage: "无奈又无所谓的回应，表示“就算这样又能怎样，只能接受”。适合朋友间吐槽时用。例：又加班？那咋了，受着呗。"
  },
  {
    zh: "爱你老己",
    pinyin: "ài nǐ lǎo jǐ",
    en: "Kudos to me / Love yourself, dear self",
    usage: "谐音“爱你自己”。年轻人用来自我关怀、自我奖励，比如一个人吃饭时对自己说“爱你老己，明天见”。"
  },
  {
    zh: "活人感",
    pinyin: "huó rén gǎn",
    en: "Human touch / Realness",
    usage: "形容人真实自然、不做作、有烟火气。是正面评价，和“预制感”相对。例：这个博主好有活人感，评论区都回。"
  },

  /* ---------- 03 · 职场 / 生活状态 ---------- */
  {
    zh: "脆皮打工人",
    pinyin: "cuì pí dǎ gōng rén",
    en: "Fragile worker / Office worker with a glass constitution",
    usage: "自嘲身体亚健康、一碰就碎的上班族，熬夜、久坐、外卖导致小毛病不断。例：本脆皮打工人，吹个空调都能感冒。"
  },
  {
    zh: "拉爆",
    pinyin: "lā bào",
    en: "To crush it / Push beyond your limits",
    usage: "指超越自己原有水平、突破极限，带有努力、上进的意思。例：这次考试他把模拟题刷爆了，直接拉爆自己。"
  },
  {
    zh: "斩杀线",
    pinyin: "zhǎn shā xiàn",
    en: "Cut-off line / Minimum threshold",
    usage: "原指游戏临界值，现在指给自己定的目标分数线、及格线。例：我的斩杀线是 60 分，多了不要。"
  },
  {
    zh: "从从容容游刃有余",
    pinyin: "cóng cóng róng róng yóu rèn yǒu yú",
    en: "Calm and effortless (or the gap between ideal and reality)",
    usage: "2025-2026 年热词。常和“匆匆忙忙连滚带爬”对照使用，调侃理想中的从容和现实中的狼狈。例：理想中是，从从容容游刃有余；现实中是，匆匆忙忙连滚带爬。"
  },

  /* ---------- 04 · 社交 / 评价他人 ---------- */
  {
    zh: "显眼包",
    pinyin: "xiǎn yǎn bāo",
    en: "Attention magnet / Class clown",
    usage: "指性格外向、爱表现、自带笑点的人。中性偏褒义，多为同学朋友间的玩笑称呼。例：他是我们班的显眼包，走到哪笑到哪。"
  },
  {
    zh: "PUA",
    pinyin: "PUA",
    en: "To manipulate / Gaslight",
    usage: "原指情感操控，现在泛指通过打击对方来操控其行为。说“这很 PUA”就是在提醒这个互动不太对劲。例：别 PUA 我，我可不吃这一套。"
  },
  {
    zh: "欧皇",
    pinyin: "ōu huáng",
    en: "Lucky person / Someone with god-tier luck",
    usage: "指运气特别好的人，抽奖、考试、遇事总能顺利。反义词是“非酋”。例：他一抽就是隐藏款，纯纯欧皇。"
  },
  {
    zh: "非酋",
    pinyin: "fēi qiú",
    en: "Unlucky person / Jinxed",
    usage: "和“欧皇”相对，自嘲运气差、凡事不顺利，没有负面心理，纯属调侃。例：抽了十次全是重复卡，我这非酋体质没救了。"
  },
  {
    zh: "谷子",
    pinyin: "gǔ zi",
    en: "Merch / Anime & game goods",
    usage: "英文 goods 的音译，指动漫、游戏相关的周边纪念品，如卡片、手办、徽章等。例：这个月工资全买谷子了。"
  },
  {
    zh: "YYDS",
    pinyin: "yǒng yuǎn de shén",
    en: "The eternal god / GOAT",
    usage: "“永远的神”拼音缩写。看到好吃的、好用的、表现超神的，都可以丢一句 YYDS。例：这家火锅真的 YYDS，我能吃一辈子。"
  }

];

/* ============================================================
   【扩展示例】后续新增条目按同样结构追加即可，无需改动其他文件：

   {
     zh: "新词条",
     pinyin: "xīn cí tiáo",
     en: "English meaning",
     usage: "什么时候用、举个例子。"
   },

   【质量建议】
   - zh 保持为“真实对话中会出现的完整短句或独立词条”，避免只放一个汉字。
   - usage 尽量包含 1 个例句（可用“例：……”开头），让学习者能直接迁移。
   - en 优先给“使用者想表达的功能/语气”，而不是逐字直译。
   ============================================================ */// JavaScript Document