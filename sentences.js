// data/sentences.js
// HanLingo · HSK1 完整句子库 (150句)
// 严格按照HSK1词汇 + 语法点编写

const HSK1_SENTENCES = [
  // ============ 问候与介绍 (1-15) ============
  {
    id: 'hsk1_001',
    chinese: '你好吗？',
    pinyin: 'Nǐ hǎo ma?',
    translation: 'How are you?',
    words: ['你', '好', '吗'],
    fillAnswer: '好',
    choices: [
      { text: 'How are you?', correct: true },
      { text: 'Good morning.', correct: false },
      { text: 'Thank you.', correct: false },
      { text: 'What is your name?', correct: false }
    ],
    vocab: '你 (you) · 好 (good) · 吗 (question particle)',
    pattern: 'Subject + Adj + 吗？',
    context: 'Greeting · Any situation',
    culture: '中国人见面常说"你好吗？"',
    grammarPoint: '吗'
  },
  {
    id: 'hsk1_002',
    chinese: '你叫什么名字？',
    pinyin: 'Nǐ jiào shénme míngzi?',
    translation: 'What is your name?',
    words: ['你', '叫', '什么', '名字'],
    fillAnswer: '什么',
    choices: [
      { text: 'What is your name?', correct: true },
      { text: 'How old are you?', correct: false },
      { text: 'Where are you from?', correct: false },
      { text: 'How are you?', correct: false }
    ],
    vocab: '叫 (call/name) · 什么 (what) · 名字 (name)',
    pattern: 'Subject + Verb + 什么 + Noun?',
    context: 'First meeting · Introductions',
    culture: '中文问名字用"叫什么"，不是"是什么"',
    grammarPoint: '什么'
  },
  {
    id: 'hsk1_003',
    chinese: '我是学生。',
    pinyin: 'Wǒ shì xuésheng.',
    translation: 'I am a student.',
    words: ['我', '是', '学生'],
    fillAnswer: '是',
    choices: [
      { text: 'I am a student.', correct: true },
      { text: 'You are a student.', correct: false },
      { text: 'I am a teacher.', correct: false },
      { text: 'He is a student.', correct: false }
    ],
    vocab: '我 (I/me) · 是 (to be) · 学生 (student)',
    pattern: 'Subject + 是 + Noun',
    context: 'Introducing yourself · School',
    culture: '中文"是"没有时态变化',
    grammarPoint: '是'
  },
  {
    id: 'hsk1_004',
    chinese: '他是我的同学。',
    pinyin: 'Tā shì wǒ de tóngxué.',
    translation: 'He is my classmate.',
    words: ['他', '是', '我', '的', '同学'],
    fillAnswer: '的',
    choices: [
      { text: 'He is my classmate.', correct: true },
      { text: 'She is my friend.', correct: false },
      { text: 'He is my teacher.', correct: false },
      { text: 'I am his classmate.', correct: false }
    ],
    vocab: '他 (he) · 的 (possession) · 同学 (classmate)',
    pattern: 'Subject + 是 + Possessor + 的 + Noun',
    context: 'Introducing someone · School',
    culture: '用"的"表示所属关系',
    grammarPoint: '的'
  },
  {
    id: 'hsk1_005',
    chinese: '她是我的老师。',
    pinyin: 'Tā shì wǒ de lǎoshī.',
    translation: 'She is my teacher.',
    words: ['她', '是', '我', '的', '老师'],
    fillAnswer: '老师',
    choices: [
      { text: 'She is my teacher.', correct: true },
      { text: 'She is my friend.', correct: false },
      { text: 'He is my teacher.', correct: false },
      { text: 'I am her student.', correct: false }
    ],
    vocab: '她 (she) · 老师 (teacher)',
    pattern: 'Subject + 是 + Possessor + 的 + Noun',
    context: 'Introducing someone · School',
    culture: '中国学生对老师说"老师好"',
    grammarPoint: '的'
  },
  {
    id: 'hsk1_006',
    chinese: '我爸爸是医生。',
    pinyin: 'Wǒ bàba shì yīshēng.',
    translation: 'My father is a doctor.',
    words: ['我', '爸爸', '是', '医生'],
    fillAnswer: '医生',
    choices: [
      { text: 'My father is a doctor.', correct: true },
      { text: 'My mother is a doctor.', correct: false },
      { text: 'My father is a teacher.', correct: false },
      { text: 'He is my father.', correct: false }
    ],
    vocab: '爸爸 (father/dad) · 医生 (doctor)',
    pattern: 'Possessor + Noun + 是 + Noun',
    context: 'Family introductions',
    culture: '中文称呼比英文更具体（爸爸/妈妈）',
    grammarPoint: '是'
  },
  {
    id: 'hsk1_007',
    chinese: '我妈妈是老师。',
    pinyin: 'Wǒ māma shì lǎoshī.',
    translation: 'My mother is a teacher.',
    words: ['我', '妈妈', '是', '老师'],
    fillAnswer: '老师',
    choices: [
      { text: 'My mother is a teacher.', correct: true },
      { text: 'My father is a teacher.', correct: false },
      { text: 'My mother is a doctor.', correct: false },
      { text: 'She is my mother.', correct: false }
    ],
    vocab: '妈妈 (mother/mom) · 老师 (teacher)',
    pattern: 'Possessor + Noun + 是 + Noun',
    context: 'Family introductions',
    culture: '中文用"妈妈"比"母亲"更日常',
    grammarPoint: '是'
  },
  {
    id: 'hsk1_008',
    chinese: '他是我朋友。',
    pinyin: 'Tā shì wǒ péngyou.',
    translation: 'He is my friend.',
    words: ['他', '是', '我', '朋友'],
    fillAnswer: '朋友',
    choices: [
      { text: 'He is my friend.', correct: true },
      { text: 'She is my friend.', correct: false },
      { text: 'He is my brother.', correct: false },
      { text: 'I am his friend.', correct: false }
    ],
    vocab: '朋友 (friend)',
    pattern: 'Subject + 是 + Possessor + Noun',
    context: 'Introducing friends',
    culture: '中文"朋友"很常用',
    grammarPoint: '是'
  },
  {
    id: 'hsk1_009',
    chinese: '你认识他吗？',
    pinyin: 'Nǐ rènshi tā ma?',
    translation: 'Do you know him?',
    words: ['你', '认识', '他', '吗'],
    fillAnswer: '认识',
    choices: [
      { text: 'Do you know him?', correct: true },
      { text: 'Do you know her?', correct: false },
      { text: 'He knows you?', correct: false },
      { text: 'Who is he?', correct: false }
    ],
    vocab: '认识 (to know someone) · 吗 (question)',
    pattern: 'Subject + Verb + Object + 吗？',
    context: 'Asking about people',
    culture: '"认识"用于认识某人，"知道"用于知道事情',
    grammarPoint: '吗'
  },
  {
    id: 'hsk1_010',
    chinese: '很高兴认识你。',
    pinyin: 'Hěn gāoxìng rènshi nǐ.',
    translation: 'Nice to meet you.',
    words: ['很', '高兴', '认识', '你'],
    fillAnswer: '高兴',
    choices: [
      { text: 'Nice to meet you.', correct: true },
      { text: 'How are you?', correct: false },
      { text: 'Good morning.', correct: false },
      { text: 'Thank you.', correct: false }
    ],
    vocab: '很 (very) · 高兴 (happy/glad) · 认识 (to know)',
    pattern: '很 + Adj + Verb + Object',
    context: 'First meeting',
    culture: '第一次见面必说的一句话',
    grammarPoint: '很'
  },
  {
    id: 'hsk1_011',
    chinese: '你是中国人吗？',
    pinyin: 'Nǐ shì Zhōngguó rén ma?',
    translation: 'Are you Chinese?',
    words: ['你', '是', '中国', '人', '吗'],
    fillAnswer: '中国',
    choices: [
      { text: 'Are you Chinese?', correct: true },
      { text: 'Are you from China?', correct: false },
      { text: 'Is he Chinese?', correct: false },
      { text: 'You are Chinese.', correct: false }
    ],
    vocab: '中国 (China) · 人 (person) · 吗 (question)',
    pattern: 'Subject + 是 + Noun + 吗？',
    context: 'Asking nationality',
    culture: '"中国人" vs "华人" 有不同用法',
    grammarPoint: '是...吗'
  },
  {
    id: 'hsk1_012',
    chinese: '我是美国人。',
    pinyin: 'Wǒ shì Měiguó rén.',
    translation: 'I am American.',
    words: ['我', '是', '美国', '人'],
    fillAnswer: '美国',
    choices: [
      { text: 'I am American.', correct: true },
      { text: 'I am Chinese.', correct: false },
      { text: 'I am from the UK.', correct: false },
      { text: 'Are you American?', correct: false }
    ],
    vocab: '美国 (USA) · 人 (person)',
    pattern: 'Subject + 是 + Nationality + 人',
    context: 'Introducing nationality',
    culture: '国家名 + 人 = 国籍',
    grammarPoint: '是'
  },
  {
    id: 'hsk1_013',
    chinese: '你好！',
    pinyin: 'Nǐ hǎo!',
    translation: 'Hello!',
    words: ['你', '好'],
    fillAnswer: '好',
    choices: [
      { text: 'Hello!', correct: true },
      { text: 'Goodbye!', correct: false },
      { text: 'Thank you!', correct: false },
      { text: 'Sorry!', correct: false }
    ],
    vocab: '你 (you) · 好 (good)',
    pattern: 'Subject + Adj',
    context: 'Greeting · Any situation',
    culture: '最基本的问候语，全球都知道',
    grammarPoint: 'Adj predicate'
  },
  {
    id: 'hsk1_014',
    chinese: '再见！',
    pinyin: 'Zàijiàn!',
    translation: 'Goodbye!',
    words: ['再', '见'],
    fillAnswer: '见',
    choices: [
      { text: 'Goodbye!', correct: true },
      { text: 'Hello!', correct: false },
      { text: 'See you tomorrow!', correct: false },
      { text: 'Thank you!', correct: false }
    ],
    vocab: '再 (again) · 见 (see)',
    pattern: '再 + Verb (meaning "again")',
    context: 'Saying goodbye',
    culture: '直译是"再次见面"，很礼貌',
    grammarPoint: '再'
  },
  {
    id: 'hsk1_015',
    chinese: '你叫什么？',
    pinyin: 'Nǐ jiào shénme?',
    translation: 'What is your name? (informal)',
    words: ['你', '叫', '什么'],
    fillAnswer: '什么',
    choices: [
      { text: 'What is your name?', correct: true },
      { text: 'How are you?', correct: false },
      { text: 'Where are you from?', correct: false },
      { text: 'How old are you?', correct: false }
    ],
    vocab: '叫 (to call) · 什么 (what)',
    pattern: 'Subject + Verb + 什么？',
    context: 'Informal introductions',
    culture: '"叫什么"比"叫什么名字"更口语化',
    grammarPoint: '什么'
  },

  // ============ 数字与时间 (16-30) ============
  {
    id: 'hsk1_016',
    chinese: '现在几点？',
    pinyin: 'Xiànzài jǐ diǎn?',
    translation: 'What time is it now?',
    words: ['现在', '几', '点'],
    fillAnswer: '几',
    choices: [
      { text: 'What time is it now?', correct: true },
      { text: 'What day is it today?', correct: false },
      { text: 'How much is it?', correct: false },
      { text: 'How many people?', correct: false }
    ],
    vocab: '现在 (now) · 几 (how many) · 点 (o\'clock)',
    pattern: 'Subject + 几 + Noun?',
    context: 'Asking time · Daily life',
    culture: '"几"用于问少量数字，"多少"用于大量',
    grammarPoint: '几'
  },
  {
    id: 'hsk1_017',
    chinese: '现在三点。',
    pinyin: 'Xiànzài sān diǎn.',
    translation: 'It is 3 o\'clock now.',
    words: ['现在', '三', '点'],
    fillAnswer: '三',
    choices: [
      { text: 'It is 3 o\'clock now.', correct: true },
      { text: 'It is 2 o\'clock now.', correct: false },
      { text: 'It is 4 o\'clock now.', correct: false },
      { text: 'What time is it?', correct: false }
    ],
    vocab: '三 (three) · 点 (o\'clock)',
    pattern: 'Subject + Numeral + 点',
    context: 'Telling time',
    culture: '中文说"三点"不是"三个点"',
    grammarPoint: '点'
  },
  {
    id: 'hsk1_018',
    chinese: '今天几号？',
    pinyin: 'Jīntiān jǐ hào?',
    translation: 'What is today\'s date?',
    words: ['今天', '几', '号'],
    fillAnswer: '号',
    choices: [
      { text: 'What is today\'s date?', correct: true },
      { text: 'What day is today?', correct: false },
      { text: 'What time is it?', correct: false },
      { text: 'What month is it?', correct: false }
    ],
    vocab: '今天 (today) · 几 (how many) · 号 (day of month)',
    pattern: 'Subject + 几 + Noun?',
    context: 'Asking date · Daily life',
    culture: '问日期用"号"不是"日"（口语）',
    grammarPoint: '几'
  },
  {
    id: 'hsk1_019',
    chinese: '今天八月九号。',
    pinyin: 'Jīntiān bā yuè jiǔ hào.',
    translation: 'Today is August 9th.',
    words: ['今天', '八', '月', '九', '号'],
    fillAnswer: '九',
    choices: [
      { text: 'Today is August 9th.', correct: true },
      { text: 'Today is September 8th.', correct: false },
      { text: 'Today is August 8th.', correct: false },
      { text: 'Yesterday was August 9th.', correct: false }
    ],
    vocab: '八 (eight) · 月 (month) · 九 (nine) · 号 (day)',
    pattern: 'Subject + Month + Date',
    context: 'Stating date',
    culture: '中国日期格式：年月日',
    grammarPoint: '月/号'
  },
  {
    id: 'hsk1_020',
    chinese: '你几岁？',
    pinyin: 'Nǐ jǐ suì?',
    translation: 'How old are you?',
    words: ['你', '几', '岁'],
    fillAnswer: '岁',
    choices: [
      { text: 'How old are you?', correct: true },
      { text: 'How are you?', correct: false },
      { text: 'What is your name?', correct: false },
      { text: 'Where are you from?', correct: false }
    ],
    vocab: '几 (how many) · 岁 (year of age)',
    pattern: 'Subject + 几 + 岁？',
    context: 'Asking age',
    culture: '问成年人年龄可能不礼貌，要分场合',
    grammarPoint: '几岁'
  },
  {
    id: 'hsk1_021',
    chinese: '我二十五岁。',
    pinyin: 'Wǒ èrshíwǔ suì.',
    translation: 'I am 25 years old.',
    words: ['我', '二十', '五', '岁'],
    fillAnswer: '五',
    choices: [
      { text: 'I am 25 years old.', correct: true },
      { text: 'I am 20 years old.', correct: false },
      { text: 'I am 15 years old.', correct: false },
      { text: 'Are you 25?', correct: false }
    ],
    vocab: '二十 (twenty) · 五 (five) · 岁 (years old)',
    pattern: 'Subject + Number + 岁',
    context: 'Telling age',
    culture: '中国人用虚岁（传统）和周岁（官方）',
    grammarPoint: '岁'
  },
  {
    id: 'hsk1_022',
    chinese: '我儿子三岁了。',
    pinyin: 'Wǒ érzi sān suì le.',
    translation: 'My son is 3 years old.',
    words: ['我', '儿子', '三', '岁', '了'],
    fillAnswer: '了',
    choices: [
      { text: 'My son is 3 years old.', correct: true },
      { text: 'My daughter is 3 years old.', correct: false },
      { text: 'My son is 5 years old.', correct: false },
      { text: 'I have a 3-year-old son.', correct: false }
    ],
    vocab: '儿子 (son) · 三 (three) · 岁 (years old) · 了 (change)',
    pattern: 'Subject + Number + 岁 + 了',
    context: 'Talking about family · Age',
    culture: '用"了"表示已经达到某年龄',
    grammarPoint: '了'
  },
  {
    id: 'hsk1_023',
    chinese: '我女儿两岁。',
    pinyin: 'Wǒ nǚ\'ér liǎng suì.',
    translation: 'My daughter is 2 years old.',
    words: ['我', '女儿', '两', '岁'],
    fillAnswer: '两',
    choices: [
      { text: 'My daughter is 2 years old.', correct: true },
      { text: 'My son is 2 years old.', correct: false },
      { text: 'I have two daughters.', correct: false },
      { text: 'My daughter is 3 years old.', correct: false }
    ],
    vocab: '女儿 (daughter) · 两 (two) · 岁 (years old)',
    pattern: 'Subject + Number + 岁',
    context: 'Talking about family · Age',
    culture: '"两"用于量词前，"二"用于数字',
    grammarPoint: '两'
  },
  {
    id: 'hsk1_024',
    chinese: '今天星期日。',
    pinyin: 'Jīntiān xīngqīrì.',
    translation: 'Today is Sunday.',
    words: ['今天', '星期', '日'],
    fillAnswer: '星期',
    choices: [
      { text: 'Today is Sunday.', correct: true },
      { text: 'Today is Monday.', correct: false },
      { text: 'Today is Saturday.', correct: false },
      { text: 'Tomorrow is Sunday.', correct: false }
    ],
    vocab: '今天 (today) · 星期日 (Sunday)',
    pattern: 'Subject + Noun Predicate',
    context: 'Talking about days',
    culture: '星期天 = 星期日，两种说法',
    grammarPoint: '名词谓语句'
  },
  {
    id: 'hsk1_025',
    chinese: '明天是星期一。',
    pinyin: 'Míngtiān shì xīngqīyī.',
    translation: 'Tomorrow is Monday.',
    words: ['明天', '是', '星期', '一'],
    fillAnswer: '是',
    choices: [
      { text: 'Tomorrow is Monday.', correct: true },
      { text: 'Today is Monday.', correct: false },
      { text: 'Tomorrow is Sunday.', correct: false },
      { text: 'Yesterday was Monday.', correct: false }
    ],
    vocab: '明天 (tomorrow) · 是 (to be) · 星期一 (Monday)',
    pattern: 'Subject + 是 + Noun',
    context: 'Talking about days',
    culture: '星期一到星期天，7天',
    grammarPoint: '是'
  },
  {
    id: 'hsk1_026',
    chinese: '一个星期有七天。',
    pinyin: 'Yī gè xīngqī yǒu qī tiān.',
    translation: 'There are seven days in a week.',
    words: ['一', '个', '星期', '有', '七', '天'],
    fillAnswer: '有',
    choices: [
      { text: 'There are seven days in a week.', correct: true },
      { text: 'There are five days in a week.', correct: false },
      { text: 'A week has seven days.', correct: false },
      { text: 'There are seven weeks in a month.', correct: false }
    ],
    vocab: '个 (measure word) · 星期 (week) · 有 (have) · 七 (seven) · 天 (day)',
    pattern: 'Numeral + 个 + Noun + 有 + Numeral + 天',
    context: 'Talking about time',
    culture: '"个"是最常用的量词',
    grammarPoint: '有'
  },
  {
    id: 'hsk1_027',
    chinese: '一年有十二个月。',
    pinyin: 'Yī nián yǒu shí\'èr gè yuè.',
    translation: 'There are twelve months in a year.',
    words: ['一', '年', '有', '十二', '个', '月'],
    fillAnswer: '月',
    choices: [
      { text: 'There are twelve months in a year.', correct: true },
      { text: 'There are ten months in a year.', correct: false },
      { text: 'A year has twelve months.', correct: false },
      { text: 'There are twelve years in a month.', correct: false }
    ],
    vocab: '年 (year) · 有 (have) · 十二 (twelve) · 月 (month)',
    pattern: 'Numeral + 年 + 有 + Numeral + 个 + 月',
    context: 'Talking about time',
    culture: '中国农历有12个月，还有闰月',
    grammarPoint: '有'
  },
  {
    id: 'hsk1_028',
    chinese: '你什么时候去中国？',
    pinyin: 'Nǐ shénme shíhou qù Zhōngguó?',
    translation: 'When are you going to China?',
    words: ['你', '什么', '时候', '去', '中国'],
    fillAnswer: '时候',
    choices: [
      { text: 'When are you going to China?', correct: true },
      { text: 'How are you going to China?', correct: false },
      { text: 'Where are you going in China?', correct: false },
      { text: 'Why are you going to China?', correct: false }
    ],
    vocab: '什么 (what) · 时候 (time) · 去 (go) · 中国 (China)',
    pattern: 'Subject + 什么时候 + Verb + Object?',
    context: 'Planning travel',
    culture: '中国人旅游时爱问这个问题',
    grammarPoint: '什么时候'
  },
  {
    id: 'hsk1_029',
    chinese: '我上午去学校。',
    pinyin: 'Wǒ shàngwǔ qù xuéxiào.',
    translation: 'I go to school in the morning.',
    words: ['我', '上午', '去', '学校'],
    fillAnswer: '上午',
    choices: [
      { text: 'I go to school in the morning.', correct: true },
      { text: 'I go to school in the afternoon.', correct: false },
      { text: 'I go to work in the morning.', correct: false },
      { text: 'He goes to school in the morning.', correct: false }
    ],
    vocab: '上午 (morning) · 去 (go) · 学校 (school)',
    pattern: 'Subject + Time + Verb + Object',
    context: 'Daily routine',
    culture: '上午 = 早上到中午12点',
    grammarPoint: '时间状语'
  },
  {
    id: 'hsk1_030',
    chinese: '我下午两点去饭店。',
    pinyin: 'Wǒ xiàwǔ liǎng diǎn qù fàndiàn.',
    translation: 'I go to the restaurant at 2 PM.',
    words: ['我', '下午', '两', '点', '去', '饭店'],
    fillAnswer: '饭店',
    choices: [
      { text: 'I go to the restaurant at 2 PM.', correct: true },
      { text: 'I go to the restaurant at 2 AM.', correct: false },
      { text: 'I go to school at 2 PM.', correct: false },
      { text: 'He goes to the restaurant at 2 PM.', correct: false }
    ],
    vocab: '下午 (afternoon) · 两点 (2 o\'clock) · 去 (go) · 饭店 (restaurant)',
    pattern: 'Subject + Time + Verb + Object',
    context: 'Making plans · Daily life',
    culture: '中国人下午两点吃午饭？不同地方习惯不同',
    grammarPoint: '时间状语'
  },

  // ============ 日常活动：吃/喝/买 (31-50) ============
  {
    id: 'hsk1_031',
    chinese: '我想吃米饭。',
    pinyin: 'Wǒ xiǎng chī mǐfàn.',
    translation: 'I want to eat rice.',
    words: ['我', '想', '吃', '米饭'],
    fillAnswer: '吃',
    choices: [
      { text: 'I want to eat rice.', correct: true },
      { text: 'I want to drink water.', correct: false },
      { text: 'I like rice.', correct: false },
      { text: 'I want to eat noodles.', correct: false }
    ],
    vocab: '想 (want) · 吃 (eat) · 米饭 (cooked rice)',
    pattern: 'Subject + 想 + Verb + Object',
    context: 'Ordering food · Restaurant',
    culture: '中国南方人爱吃米饭，北方人爱吃面条',
    grammarPoint: '想'
  },
  {
    id: 'hsk1_032',
    chinese: '我想喝一杯茶。',
    pinyin: 'Wǒ xiǎng hē yī bēi chá.',
    translation: 'I want to drink a cup of tea.',
    words: ['我', '想', '喝', '一', '杯', '茶'],
    fillAnswer: '杯',
    choices: [
      { text: 'I want to drink a cup of tea.', correct: true },
      { text: 'I want to drink a cup of coffee.', correct: false },
      { text: 'I want to eat a cup of tea.', correct: false },
      { text: 'I want a cup of water.', correct: false }
    ],
    vocab: '想 (want) · 喝 (drink) · 一 (one) · 杯 (cup/measure) · 茶 (tea)',
    pattern: 'Subject + 想 + Verb + Measure + Noun',
    context: 'Ordering drinks · Cafe/Restaurant',
    culture: '中国人喝茶有很多讲究，茶文化悠久',
    grammarPoint: '想 + 量词'
  },
  {
    id: 'hsk1_033',
    chinese: '我想买苹果。',
    pinyin: 'Wǒ xiǎng mǎi píngguǒ.',
    translation: 'I want to buy apples.',
    words: ['我', '想', '买', '苹果'],
    fillAnswer: '苹果',
    choices: [
      { text: 'I want to buy apples.', correct: true },
      { text: 'I want to buy oranges.', correct: false },
      { text: 'I want to eat apples.', correct: false },
      { text: 'I bought apples.', correct: false }
    ],
    vocab: '想 (want) · 买 (buy) · 苹果 (apple)',
    pattern: 'Subject + 想 + Verb + Object',
    context: 'Shopping · Fruit market',
    culture: '苹果在中国文化中象征平安',
    grammarPoint: '想'
  },
  {
    id: 'hsk1_034',
    chinese: '我喜欢吃水果。',
    pinyin: 'Wǒ xǐhuan chī shuǐguǒ.',
    translation: 'I like to eat fruit.',
    words: ['我', '喜欢', '吃', '水果'],
    fillAnswer: '喜欢',
    choices: [
      { text: 'I like to eat fruit.', correct: true },
      { text: 'I like to eat vegetables.', correct: false },
      { text: 'I like fruit.', correct: false },
      { text: 'I want to eat fruit.', correct: false }
    ],
    vocab: '喜欢 (like) · 吃 (eat) · 水果 (fruit)',
    pattern: 'Subject + 喜欢 + Verb + Object',
    context: 'Talking about food preferences',
    culture: '中国人饭后喜欢吃水果',
    grammarPoint: '喜欢'
  },
  {
    id: 'hsk1_035',
    chinese: '我去超市买菜。',
    pinyin: 'Wǒ qù chāoshì mǎi cài.',
    translation: 'I go to the supermarket to buy vegetables.',
    words: ['我', '去', '超市', '买', '菜'],
    fillAnswer: '菜',
    choices: [
      { text: 'I go to the supermarket to buy vegetables.', correct: true },
      { text: 'I go to the store to buy fruit.', correct: false },
      { text: 'I go to the supermarket to buy meat.', correct: false },
      { text: 'I go to the market to buy food.', correct: false }
    ],
    vocab: '去 (go) · 超市 (supermarket) · 买 (buy) · 菜 (vegetables/food)',
    pattern: 'Subject + 去 + Place + Verb + Object (Serial verbs)',
    context: 'Shopping · Daily life',
    culture: '"买菜"可以泛指买食物，不一定是菜',
    grammarPoint: '连动句'
  },
  {
    id: 'hsk1_036',
    chinese: '我买了三个苹果。',
    pinyin: 'Wǒ mǎi le sān gè píngguǒ.',
    translation: 'I bought three apples.',
    words: ['我', '买', '了', '三', '个', '苹果'],
    fillAnswer: '了',
    choices: [
      { text: 'I bought three apples.', correct: true },
      { text: 'I want to buy three apples.', correct: false },
      { text: 'I bought two apples.', correct: false },
      { text: 'I buy three apples every day.', correct: false }
    ],
    vocab: '买 (buy) · 了 (completed action) · 三 (three) · 个 (measure) · 苹果 (apple)',
    pattern: 'Subject + Verb + 了 + Measure + Noun',
    context: 'Shopping · Past action',
    culture: '用"了"表示动作已经完成',
    grammarPoint: '了 (completion)'
  },
  {
    id: 'hsk1_037',
    chinese: '我买了一些水果。',
    pinyin: 'Wǒ mǎi le yīxiē shuǐguǒ.',
    translation: 'I bought some fruit.',
    words: ['我', '买', '了', '一些', '水果'],
    fillAnswer: '一些',
    choices: [
      { text: 'I bought some fruit.', correct: true },
      { text: 'I bought three fruits.', correct: false },
      { text: 'I want to buy some fruit.', correct: false },
      { text: 'I bought some vegetables.', correct: false }
    ],
    vocab: '买 (buy) · 了 (completed) · 一些 (some) · 水果 (fruit)',
    pattern: 'Subject + Verb + 了 + 一些 + Noun',
    context: 'Shopping · Grocery',
    culture: '"一些"表示不确定的数量',
    grammarPoint: '了'
  },
  {
    id: 'hsk1_038',
    chinese: '这个苹果很大。',
    pinyin: 'Zhège píngguǒ hěn dà.',
    translation: 'This apple is very big.',
    words: ['这个', '苹果', '很', '大'],
    fillAnswer: '大',
    choices: [
      { text: 'This apple is very big.', correct: true },
      { text: 'That apple is very small.', correct: false },
      { text: 'This apple is very red.', correct: false },
      { text: 'These apples are big.', correct: false }
    ],
    vocab: '这个 (this) · 苹果 (apple) · 很 (very) · 大 (big)',
    pattern: 'Subject + 很 + Adj',
    context: 'Describing things · Shopping',
    culture: '"很"在形容词前不一定表示"very"，有时是语法需要',
    grammarPoint: 'Adj predicate'
  },
  {
    id: 'hsk1_039',
    chinese: '这个杯子很小。',
    pinyin: 'Zhège bēizi hěn xiǎo.',
    translation: 'This cup is very small.',
    words: ['这个', '杯子', '很', '小'],
    fillAnswer: '小',
    choices: [
       { text: 'This cup is very small', isCorrect: true }
    ]
  }
];  