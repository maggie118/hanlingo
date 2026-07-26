// data/sentences.js
// HanLingo · HSK1 完整句子库 (150句)


let HSK1_SENTENCES = [

  // ============ 问候与介绍 (1-15) ============

  {

    id: 'hsk1_001',

    chinese: '你好吗？',

    pinyin: 'Nǐ hǎo ma?',

    translation: 'How are you?',

    audioUrl: '/audio/hsk1_001.mp3',

    words: ['你', '好', '吗'],

    fillAnswer: '好',

    choices: [

      { text: 'How are you?', correct: true },

      { text: 'Good morning.', correct: false },

      { text: 'Thank you.', correct: false },

      { text: 'What is your name?', correct: false }

    ],

    vocab: '你 (you) · 好 (good) · 吗 (question particle)',

    pattern: 'Subject + Adj + 吗？ (Yes/No question)',

    context: '?? Greeting · Any situation',

    culture: '"你好吗" is a common greeting, similar to "How are you?"'

  },

  {

    id: 'hsk1_002',

    chinese: '你叫什么名字？',

    pinyin: 'Nǐ jiào shénme míngzi?',

    translation: 'What is your name?',

    audioUrl: '/audio/hsk1_002.mp3',

    words: ['你', '叫', '什么', '名字'],

    fillAnswer: '什么',

    choices: [

      { text: 'What is your name?', correct: true },

      { text: 'How are you?', correct: false },

      { text: 'Where are you from?', correct: false },

      { text: 'How old are you?', correct: false }

    ],

    vocab: '叫 (to call) · 什么 (what) · 名字 (name)',

    pattern: 'Subject + Verb + 什么 + Noun?',

    context: '?? First meeting · Introductions',

    culture: 'In Chinese, you ask "叫什么" (jiào shénme) for names, not "是什么"'

  },

  {

    id: 'hsk1_003',

    chinese: '我是学生。',

    pinyin: 'Wǒ shì xuésheng.',

    translation: 'I am a student.',

    audioUrl: '/audio/hsk1_003.mp3',

    words: ['我', '是', '学生'],

    fillAnswer: '学生',

    choices: [

      { text: 'I am a student.', correct: true },

      { text: 'You are a student.', correct: false },

      { text: 'I am a teacher.', correct: false },

      { text: 'He is a student.', correct: false }

    ],

    vocab: '我 (I) · 是 (to be) · 学生 (student)',

    pattern: 'Subject + 是 + Noun',

    context: '?? Introducing yourself · School',

    culture: 'Chinese "是" has no tense changes.'

  },

  {

    id: 'hsk1_004',

    chinese: '他是我的同学。',

    pinyin: 'Tā shì wǒ de tóngxué.',

    translation: 'He is my classmate.',

    audioUrl: '/audio/hsk1_004.mp3',

    words: ['他', '是', '我', '的', '同学'],

    fillAnswer: '同学',

    choices: [

      { text: 'He is my classmate.', correct: true },

      { text: 'She is my friend.', correct: false },

      { text: 'He is my teacher.', correct: false },

      { text: 'I am his classmate.', correct: false }

    ],

    vocab: '他 (he) · 的 (possession) · 同学 (classmate)',

    pattern: 'Subject + 是 + Possessor + 的 + Noun',

    context: '?? Introducing someone · School',

    culture: 'Use "的" to show possession.'

  },

  {

    id: 'hsk1_005',

    chinese: '她是我的老师。',

    pinyin: 'Tā shì wǒ de lǎoshī.',

    translation: 'She is my teacher.',

    audioUrl: '/audio/hsk1_005.mp3',

    words: ['她', '是', '我', '的', '老师'],

    fillAnswer: '老师',

    choices: [

      { text: 'She is my teacher.', correct: true },

      { text: 'She is my friend.', correct: false },

      { text: 'He is my teacher.', correct: false },

      { text: 'I am her student.', correct: false }

    ],

    vocab: '她 (she) · 的 (possession) · 老师 (teacher)',

    pattern: 'Subject + 是 + Possessor + 的 + Noun',

    context: '????? Introducing someone · School',

    culture: 'Chinese students greet teachers with "老师好".'

  },

  {

    id: 'hsk1_006',

    chinese: '我爸爸是医生。',

    pinyin: 'Wǒ bàba shì yīshēng.',

    translation: 'My father is a doctor.',

    audioUrl: '/audio/hsk1_006.mp3',

    words: ['我', '爸爸', '是', '医生'],

    fillAnswer: '医生',

    choices: [

      { text: 'My father is a doctor.', correct: true },

      { text: 'My mother is a doctor.', correct: false },

      { text: 'My father is a teacher.', correct: false },

      { text: 'He is my father.', correct: false }

    ],

    vocab: '爸爸 (father) · 是 (to be) · 医生 (doctor)',

    pattern: 'Possessor + Noun + 是 + Noun',

    context: '???????? Family introductions',

    culture: 'Chinese has specific terms for family members.'

  },

  {

    id: 'hsk1_007',

    chinese: '我妈妈是老师。',

    pinyin: 'Wǒ māma shì lǎoshī.',

    translation: 'My mother is a teacher.',

    audioUrl: '/audio/hsk1_007.mp3',

    words: ['我', '妈妈', '是', '老师'],

    fillAnswer: '老师',

    choices: [

      { text: 'My mother is a teacher.', correct: true },

      { text: 'My father is a teacher.', correct: false },

      { text: 'My mother is a doctor.', correct: false },

      { text: 'She is my mother.', correct: false }

    ],

    vocab: '妈妈 (mother) · 是 (to be) · 老师 (teacher)',

    pattern: 'Possessor + Noun + 是 + Noun',

    context: '???????? Family introductions',

    culture: '"妈妈" is more common than "母亲" in daily speech.'

  },

  {

    id: 'hsk1_008',

    chinese: '他是我朋友。',

    pinyin: 'Tā shì wǒ péngyou.',

    translation: 'He is my friend.',

    audioUrl: '/audio/hsk1_008.mp3',

    words: ['他', '是', '我', '朋友'],

    fillAnswer: '朋友',

    choices: [

      { text: 'He is my friend.', correct: true },

      { text: 'She is my friend.', correct: false },

      { text: 'He is my brother.', correct: false },

      { text: 'I am his friend.', correct: false }

    ],

    vocab: '他 (he) · 是 (to be) · 朋友 (friend)',

    pattern: 'Subject + 是 + Possessor + Noun',

    context: '?? Introducing friends',

    culture: '"朋友" is very commonly used in Chinese.'

  },

  {

    id: 'hsk1_009',

    chinese: '你认识他吗？',

    pinyin: 'Nǐ rènshi tā ma?',

    translation: 'Do you know him?',

    audioUrl: '/audio/hsk1_009.mp3',

    words: ['你', '认识', '他', '吗'],

    fillAnswer: '认识',

    choices: [

      { text: 'Do you know him?', correct: true },

      { text: 'Do you know her?', correct: false },

      { text: 'He knows you?', correct: false },

      { text: 'Who is he?', correct: false }

    ],

    vocab: '认识 (to know) · 吗 (question particle)',

    pattern: 'Subject + Verb + Object + 吗？',

    context: '? Asking about people',

    culture: '"认识" is for knowing someone, "知道" is for knowing facts.'

  },

  {

    id: 'hsk1_010',

    chinese: '很高兴认识你。',

    pinyin: 'Hěn gāoxìng rènshi nǐ.',

    translation: 'Nice to meet you.',

    audioUrl: '/audio/hsk1_010.mp3',

    words: ['很', '高兴', '认识', '你'],

    fillAnswer: '认识',

    choices: [

      { text: 'Nice to meet you.', correct: true },

      { text: 'How are you?', correct: false },

      { text: 'Good morning.', correct: false },

      { text: 'Thank you.', correct: false }

    ],

    vocab: '很 (very) · 高兴 (happy) · 认识 (to know)',

    pattern: '很 + Adj + Verb + Object',

    context: '?? First meeting',

    culture: 'Essential phrase for first-time meetings.'

  },

  {

    id: 'hsk1_011',

    chinese: '你是中国人吗？',

    pinyin: 'Nǐ shì Zhōngguó rén ma?',

    translation: 'Are you Chinese?',

    audioUrl: '/audio/hsk1_011.mp3',

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

    context: '?? Asking nationality',

    culture: '"中国人" vs "华人" have different meanings.'

  },

  {

    id: 'hsk1_012',

    chinese: '我是美国人。',

    pinyin: 'Wǒ shì Měiguó rén.',

    translation: 'I am American.',

    audioUrl: '/audio/hsk1_012.mp3',

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

    context: '?? Introducing nationality',

    culture: 'Country name + 人 = nationality.'

  },

  {

    id: 'hsk1_013',

    chinese: '你好！',

    pinyin: 'Nǐ hǎo!',

    translation: 'Hello!',

    audioUrl: '/audio/hsk1_013.mp3',

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

    context: '?? Greeting · Any situation',

    culture: 'The most basic greeting, known worldwide.'

  },

  {

    id: 'hsk1_014',

    chinese: '再见！',

    pinyin: 'Zàijiàn!',

    translation: 'Goodbye!',

    audioUrl: '/audio/hsk1_014.mp3',

    words: ['再', '见'],

    fillAnswer: '见',

    choices: [

      { text: 'Goodbye!', correct: true },

      { text: 'Hello!', correct: false },

      { text: 'See you tomorrow!', correct: false },

      { text: 'Thank you!', correct: false }

    ],

    vocab: '再 (again) · 见 (see)',

    pattern: '再 + Verb',

    context: '?? Saying goodbye',

    culture: 'Literally means "see you again".'

  },

  {

    id: 'hsk1_015',

    chinese: '你叫什么？',

    pinyin: 'Nǐ jiào shénme?',

    translation: 'What is your name? (informal)',

    audioUrl: '/audio/hsk1_015.mp3',

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

    context: '?? Informal introductions',

    culture: '"叫什么" is more casual than "叫什么名字".'

  },



  // ============ 数字与时间 (16-30) ============

  {

    id: 'hsk1_016',

    chinese: '现在几点？',

    pinyin: 'Xiànzài jǐ diǎn?',

    translation: 'What time is it now?',

    audioUrl: '/audio/hsk1_016.mp3',

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

    context: '?? Asking time · Daily life',

    culture: '"几" is for small numbers, "多少" for larger quantities.'

  },

  {

    id: 'hsk1_017',

    chinese: '现在三点。',

    pinyin: 'Xiànzài sān diǎn.',

    translation: 'It is 3 o\'clock now.',

    audioUrl: '/audio/hsk1_017.mp3',

    words: ['现在', '三', '点'],

    fillAnswer: '点',

    choices: [

      { text: 'It is 3 o\'clock now.', correct: true },

      { text: 'It is 2 o\'clock now.', correct: false },

      { text: 'It is 4 o\'clock now.', correct: false },

      { text: 'What time is it?', correct: false }

    ],

    vocab: '三 (three) · 点 (o\'clock)',

    pattern: 'Subject + Numeral + 点',

    context: '?? Telling time',

    culture: 'Chinese says "三点" not "三个点".'

  },

  {

    id: 'hsk1_018',

    chinese: '今天几号？',

    pinyin: 'Jīntiān jǐ hào?',

    translation: 'What is today\'s date?',

    audioUrl: '/audio/hsk1_018.mp3',

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

    context: '?? Asking date · Daily life',

    culture: 'Use "号" (hào) for date in spoken Chinese.'

  },

  {

    id: 'hsk1_019',

    chinese: '今天八月九号。',

    pinyin: 'Jīntiān bā yuè jiǔ hào.',

    translation: 'Today is August 9th.',

    audioUrl: '/audio/hsk1_019.mp3',

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

    context: '?? Stating date',

    culture: 'Chinese date format: Year-Month-Day.'

  },

  {

    id: 'hsk1_020',

    chinese: '你几岁？',

    pinyin: 'Nǐ jǐ suì?',

    translation: 'How old are you?',

    audioUrl: '/audio/hsk1_020.mp3',

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

    context: '?? Asking age',

    culture: 'Asking adults\' age can be sensitive in some situations.'

  },

  {

    id: 'hsk1_021',

    chinese: '我二十五岁。',

    pinyin: 'Wǒ èrshíwǔ suì.',

    translation: 'I am 25 years old.',

    audioUrl: '/audio/hsk1_021.mp3',

    words: ['我', '二十', '五', '岁'],

    fillAnswer: '岁',

    choices: [

      { text: 'I am 25 years old.', correct: true },

      { text: 'I am 20 years old.', correct: false },

      { text: 'I am 15 years old.', correct: false },

      { text: 'Are you 25?', correct: false }

    ],

    vocab: '二十 (twenty) · 五 (five) · 岁 (years old)',

    pattern: 'Subject + Number + 岁',

    context: '?? Telling age',

    culture: 'Chinese use both nominal age and actual age.'

  },

  {

    id: 'hsk1_022',

    chinese: '我儿子三岁了。',

    pinyin: 'Wǒ érzi sān suì le.',

    translation: 'My son is 3 years old.',

    audioUrl: '/audio/hsk1_022.mp3',

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

    context: '????? Talking about family · Age',

    culture: 'Use "了" to indicate reaching a certain age.'

  },

  {

    id: 'hsk1_023',

    chinese: '我女儿两岁。',

    pinyin: 'Wǒ nǚ\'ér liǎng suì.',

    translation: 'My daughter is 2 years old.',

    audioUrl: '/audio/hsk1_023.mp3',

    words: ['我', '女儿', '两', '岁'],

    fillAnswer: '岁',

    choices: [

      { text: 'My daughter is 2 years old.', correct: true },

      { text: 'My son is 2 years old.', correct: false },

      { text: 'I have two daughters.', correct: false },

      { text: 'My daughter is 3 years old.', correct: false }

    ],

    vocab: '女儿 (daughter) · 两 (two) · 岁 (years old)',

    pattern: 'Subject + Number + 岁',

    context: '????? Talking about family · Age',

    culture: '"两" is used before measure words, "二" for numbers.'

  },

  {

    id: 'hsk1_024',

    chinese: '今天星期日。',

    pinyin: 'Jīntiān xīngqīrì.',

    translation: 'Today is Sunday.',

    audioUrl: '/audio/hsk1_024.mp3',

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

    context: '?? Talking about days',

    culture: '星期天 (xīngqītiān) = 星期日, both are used.'

  },

  {

    id: 'hsk1_025',

    chinese: '明天是星期一。',

    pinyin: 'Míngtiān shì xīngqīyī.',

    translation: 'Tomorrow is Monday.',

    audioUrl: '/audio/hsk1_025.mp3',

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

    context: '?? Talking about days',

    culture: 'Monday to Sunday = 星期一到星期天.'

  },

  {

    id: 'hsk1_026',

    chinese: '一个星期有七天。',

    pinyin: 'Yī gè xīngqī yǒu qī tiān.',

    translation: 'There are seven days in a week.',

    audioUrl: '/audio/hsk1_026.mp3',

    words: ['一', '个', '星期', '有', '七', '天'],

    fillAnswer: '有',

    choices: [

      { text: 'There are seven days in a week.', correct: true },

      { text: 'There are five days in a week.', correct: false },

      { text: 'A week has seven days.', correct: false },

      { text: 'There are seven weeks in a month.', correct: false }

    ],

    vocab: '个 (measure) · 星期 (week) · 有 (have) · 七 (seven) · 天 (day)',

    pattern: 'Numeral + 个 + Noun + 有 + Numeral + 天',

    context: '?? Talking about time',

    culture: '"个" is the most common measure word.'

  },

  {

    id: 'hsk1_027',

    chinese: '一年有十二个月。',

    pinyin: 'Yī nián yǒu shí\'èr gè yuè.',

    translation: 'There are twelve months in a year.',

    audioUrl: '/audio/hsk1_027.mp3',

    words: ['一', '年', '有', '十二', '个', '月'],

    fillAnswer: '有',

    choices: [

      { text: 'There are twelve months in a year.', correct: true },

      { text: 'There are ten months in a year.', correct: false },

      { text: 'A year has twelve months.', correct: false },

      { text: 'There are twelve years in a month.', correct: false }

    ],

    vocab: '年 (year) · 有 (have) · 十二 (twelve) · 月 (month)',

    pattern: 'Numeral + 年 + 有 + Numeral + 个 + 月',

    context: '?? Talking about time',

    culture: 'Chinese lunar calendar has 12 months, sometimes a leap month.'

  },

  {

    id: 'hsk1_028',

    chinese: '你什么时候去中国？',

    pinyin: 'Nǐ shénme shíhou qù Zhōngguó?',

    translation: 'When are you going to China?',

    audioUrl: '/audio/hsk1_028.mp3',

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

    context: '?? Planning travel',

    culture: 'Chinese people often ask this when talking about travel.'

  },

  {

    id: 'hsk1_029',

    chinese: '我上午去学校。',

    pinyin: 'Wǒ shàngwǔ qù xuéxiào.',

    translation: 'I go to school in the morning.',

    audioUrl: '/audio/hsk1_029.mp3',

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

    context: '?? Daily routine',

    culture: '上午 = from early morning to 12 PM.'

  },

  {

    id: 'hsk1_030',

    chinese: '我下午两点去饭店。',

    pinyin: 'Wǒ xiàwǔ liǎng diǎn qù fàndiàn.',

    translation: 'I go to the restaurant at 2 PM.',

    audioUrl: '/audio/hsk1_030.mp3',

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

    context: '??? Making plans · Daily life',

    culture: 'Lunch time varies across different regions of China.'

  },



  // ============ 日常活动：吃/喝/买 (31-50) ============

  {

    id: 'hsk1_031',

    chinese: '我想吃米饭。',

    pinyin: 'Wǒ xiǎng chī mǐfàn.',

    translation: 'I want to eat rice.',

    audioUrl: '/audio/hsk1_031.mp3',

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

    context: '?? Ordering food · Restaurant',

    culture: 'Southern Chinese love rice, Northern Chinese love noodles.'

  },

  {

    id: 'hsk1_032',

    chinese: '我想喝一杯茶。',

    pinyin: 'Wǒ xiǎng hē yī bēi chá.',

    translation: 'I want to drink a cup of tea.',

    audioUrl: '/audio/hsk1_032.mp3',

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

    context: '? Ordering drinks · Cafe/Restaurant',

    culture: 'Chinese tea culture has a long history.'

  },

  {

    id: 'hsk1_033',

    chinese: '我想买苹果。',

    pinyin: 'Wǒ xiǎng mǎi píngguǒ.',

    translation: 'I want to buy apples.',

    audioUrl: '/audio/hsk1_033.mp3',

    words: ['我', '想', '买', '苹果'],

    fillAnswer: '买',

    choices: [

      { text: 'I want to buy apples.', correct: true },

      { text: 'I want to buy oranges.', correct: false },

      { text: 'I want to eat apples.', correct: false },

      { text: 'I bought apples.', correct: false }

    ],

    vocab: '想 (want) · 买 (buy) · 苹果 (apple)',

    pattern: 'Subject + 想 + Verb + Object',

    context: '?? Shopping · Fruit market',

    culture: 'Apples symbolize peace in Chinese culture.'

  },

  {

    id: 'hsk1_034',

    chinese: '我喜欢吃水果。',

    pinyin: 'Wǒ xǐhuan chī shuǐguǒ.',

    translation: 'I like to eat fruit.',

    audioUrl: '/audio/hsk1_034.mp3',

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

    context: '?? Talking about food preferences',

    culture: 'Chinese people often eat fruit after meals.'

  },

  {

    id: 'hsk1_035',

    chinese: '我去超市买菜。',

    pinyin: 'Wǒ qù chāoshì mǎi cài.',

    translation: 'I go to the supermarket to buy vegetables.',

    audioUrl: '/audio/hsk1_035.mp3',

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

    context: '?? Shopping · Daily life',

    culture: '"买菜" can mean buying any food, not just vegetables.'

  },

  {

    id: 'hsk1_036',

    chinese: '我买了三个苹果。',

    pinyin: 'Wǒ mǎi le sān gè píngguǒ.',

    translation: 'I bought three apples.',

    audioUrl: '/audio/hsk1_036.mp3',

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

    context: '?? Shopping · Past action',

    culture: 'Use "了" to indicate completed action.'

  },

  {

    id: 'hsk1_037',

    chinese: '我买了一些水果。',

    pinyin: 'Wǒ mǎi le yīxiē shuǐguǒ.',

    translation: 'I bought some fruit.',

    audioUrl: '/audio/hsk1_037.mp3',

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

    context: '?? Shopping · Grocery',

    culture: '"一些" indicates an uncertain quantity.'

  },

  {

    id: 'hsk1_038',

    chinese: '这个苹果很大。',

    pinyin: 'Zhège píngguǒ hěn dà.',

    translation: 'This apple is very big.',

    audioUrl: '/audio/hsk1_038.mp3',

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

    context: '?? Describing things · Shopping',

    culture: '"很" is often used before adjectives as a grammatical requirement.'

  },

  {

    id: 'hsk1_039',

    chinese: '这个杯子很小。',

    pinyin: 'Zhège bēizi hěn xiǎo.',

    translation: 'This cup is very small.',

    audioUrl: '/audio/hsk1_039.mp3',

    words: ['这个', '杯子', '很', '小'],

    fillAnswer: '小',

    choices: [

      { text: 'This cup is very small.', correct: true },

      { text: 'This cup is very big.', correct: false },

      { text: 'That cup is very small.', correct: false },

      { text: 'This glass is very small.', correct: false }

    ],

    vocab: '这个 (this) · 杯子 (cup/glass) · 很 (very) · 小 (small)',

    pattern: 'Subject + 很 + Adj',

    context: '? Describing objects',

    culture: '杯子 (bēizi) vs 玻璃杯 (bōlibēi) - different materials.'

  },

  {

    id: 'hsk1_040',

    chinese: '你的衣服很漂亮。',

    pinyin: 'Nǐ de yīfu hěn piàoliang.',

    translation: 'Your clothes are very beautiful.',

    audioUrl: '/audio/hsk1_040.mp3',

    words: ['你', '的', '衣服', '很', '漂亮'],

    fillAnswer: '漂亮',

    choices: [

      { text: 'Your clothes are very beautiful.', correct: true },

      { text: 'My clothes are very beautiful.', correct: false },

      { text: 'Your clothes are very expensive.', correct: false },

      { text: 'Your shirt is beautiful.', correct: false }

    ],

    vocab: '的 (possession) · 衣服 (clothes) · 很 (very) · 漂亮 (pretty)',

    pattern: 'Possessor + 的 + Noun + 很 + Adj',

    context: '?? Complimenting someone',

    culture: '"漂亮" is commonly used to compliment people.'

  },

  {

    id: 'hsk1_041',

    chinese: '杯子里的水很少。',

    pinyin: 'Bēizi lǐ de shuǐ hěn shǎo.',

    translation: 'There is very little water in the cup.',

    audioUrl: '/audio/hsk1_041.mp3',

    words: ['杯子', '里', '的', '水', '很', '少'],

    fillAnswer: '少',

    choices: [

      { text: 'There is very little water in the cup.', correct: true },

      { text: 'There is a lot of water in the cup.', correct: false },

      { text: 'The cup has no water.', correct: false },

      { text: 'There is very little tea in the cup.', correct: false }

    ],

    vocab: '里 (inside) · 的 (possession) · 水 (water) · 很 (very) · 少 (little)',

    pattern: 'Location + 的 + Noun + 很 + Adj',

    context: '?? Describing quantity',

    culture: '"少" indicates insufficiency.'

  },

  {

    id: 'hsk1_042',

    chinese: '商店里有很多人。',

    pinyin: 'Shāngdiàn lǐ yǒu hěn duō rén.',

    translation: 'There are many people in the store.',

    audioUrl: '/audio/hsk1_042.mp3',

    words: ['商店', '里', '有', '很', '多', '人'],

    fillAnswer: '多',

    choices: [

      { text: 'There are many people in the store.', correct: true },

      { text: 'There are few people in the store.', correct: false },

      { text: 'There is no one in the store.', correct: false },

      { text: 'There are many stores here.', correct: false }

    ],

    vocab: '商店 (store) · 里 (inside) · 有 (have) · 很多 (many) · 人 (people)',

    pattern: 'Location + 有 + 很多 + Noun',

    context: '?? Describing places',

    culture: 'Many people in Chinese stores is a common sight.'

  },

  {

    id: 'hsk1_043',

    chinese: '你买什么？',

    pinyin: 'Nǐ mǎi shénme?',

    translation: 'What are you buying?',

    audioUrl: '/audio/hsk1_043.mp3',

    words: ['你', '买', '什么'],

    fillAnswer: '什么',

    choices: [

      { text: 'What are you buying?', correct: true },

      { text: 'What do you want to buy?', correct: false },

      { text: 'Are you buying?', correct: false },

      { text: 'What did you buy?', correct: false }

    ],

    vocab: '买 (buy) · 什么 (what)',

    pattern: 'Subject + Verb + 什么？',

    context: '?? Shopping · Asking questions',

    culture: '"什么" is one of the most important HSK1 question words.'

  },

  {

    id: 'hsk1_044',

    chinese: '你想吃点儿什么？',

    pinyin: 'Nǐ xiǎng chī diǎnr shénme?',

    translation: 'What would you like to eat?',

    audioUrl: '/audio/hsk1_044.mp3',

    words: ['你', '想', '吃', '点儿', '什么'],

    fillAnswer: '点儿',

    choices: [

      { text: 'What would you like to eat?', correct: true },

      { text: 'What would you like to drink?', correct: false },

      { text: 'What are you eating?', correct: false },

      { text: 'Do you want to eat?', correct: false }

    ],

    vocab: '想 (want) · 吃 (eat) · 点儿 (a little) · 什么 (what)',

    pattern: 'Subject + 想 + Verb + 点儿 + 什么？',

    context: '??? Restaurant · Asking preference',

    culture: '"点儿" makes the tone more polite.'

  },

  {

    id: 'hsk1_045',

    chinese: '你想喝什么？',

    pinyin: 'Nǐ xiǎng hē shénme?',

    translation: 'What would you like to drink?',

    audioUrl: '/audio/hsk1_045.mp3',

    words: ['你', '想', '喝', '什么'],

    fillAnswer: '什么',

    choices: [

      { text: 'What would you like to drink?', correct: true },

      { text: 'What would you like to eat?', correct: false },

      { text: 'Do you want to drink?', correct: false },

      { text: 'Are you drinking?', correct: false }

    ],

    vocab: '想 (want) · 喝 (drink) · 什么 (what)',

    pattern: 'Subject + 想 + Verb + 什么？',

    context: '? Restaurant/Cafe',

    culture: 'Chinese people often ask "喝什么" when hosting.'

  },

  {

    id: 'hsk1_046',

    chinese: '一杯咖啡多少钱？',

    pinyin: 'Yī bēi kāfēi duōshao qián?',

    translation: 'How much does a cup of coffee cost?',

    audioUrl: '/audio/hsk1_046.mp3',

    words: ['一', '杯', '咖啡', '多少', '钱'],

    fillAnswer: '多少',

    choices: [

      { text: 'How much does a cup of coffee cost?', correct: true },

      { text: 'How many cups of coffee?', correct: false },

      { text: 'Do you want a cup of coffee?', correct: false },

      { text: 'Where can I get coffee?', correct: false }

    ],

    vocab: '杯 (measure) · 咖啡 (coffee) · 多少 (how much) · 钱 (money)',

    pattern: 'Measure + Noun + 多少钱？',

    context: '?? Shopping · Asking price',

    culture: 'Coffee is becoming increasingly popular in China.'

  },

  {

    id: 'hsk1_047',

    chinese: '这个苹果三块钱。',

    pinyin: 'Zhège píngguǒ sān kuài qián.',

    translation: 'This apple is 3 RMB.',

    audioUrl: '/audio/hsk1_047.mp3',

    words: ['这个', '苹果', '三', '块', '钱'],

    fillAnswer: '块',

    choices: [

      { text: 'This apple is 3 RMB.', correct: true },

      { text: 'This apple is 5 RMB.', correct: false },

      { text: 'These apples are 3 RMB each.', correct: false },

      { text: 'The apple costs 3 dollars.', correct: false }

    ],

    vocab: '这个 (this) · 苹果 (apple) · 三 (three) · 块 (RMB measure) · 钱 (money)',

    pattern: 'Subject + Number + 块 + 钱',

    context: '?? Shopping · Price',

    culture: '"块" is the spoken unit for RMB = 元 (yuán).'

  },

  {

    id: 'hsk1_048',

    chinese: '这本书三十块钱。',

    pinyin: 'Zhè běn shū sānshí kuài qián.',

    translation: 'This book costs 30 RMB.',

    audioUrl: '/audio/hsk1_048.mp3',

    words: ['这', '本', '书', '三十', '块', '钱'],

    fillAnswer: '本',

    choices: [

      { text: 'This book costs 30 RMB.', correct: true },

      { text: 'This book costs 20 RMB.', correct: false },

      { text: 'This book is very expensive.', correct: false },

      { text: 'I bought this book for 30 RMB.', correct: false }

    ],

    vocab: '本 (measure for books) · 书 (book) · 三十 (thirty) · 块 (RMB)',

    pattern: 'Subject + Number + 块 + 钱',

    context: '?? Shopping · Books',

    culture: 'Books in China usually cost 20-50 RMB.'

  },

  {

    id: 'hsk1_049',

    chinese: '这件衣服五十块钱。',

    pinyin: 'Zhè jiàn yīfu wǔshí kuài qián.',

    translation: 'This dress costs 50 RMB.',

    audioUrl: '/audio/hsk1_049.mp3',

    words: ['这', '件', '衣服', '五十', '块', '钱'],

    fillAnswer: '件',

    choices: [

      { text: 'This dress costs 50 RMB.', correct: true },

      { text: 'This dress costs 15 RMB.', correct: false },

      { text: 'This shirt costs 50 RMB.', correct: false },

      { text: 'I bought this dress for 50 RMB.', correct: false }

    ],

    vocab: '件 (measure for clothes) · 衣服 (clothes) · 五十 (fifty) · 块 (RMB)',

    pattern: 'Subject + Number + 块 + 钱',

    context: '?? Shopping · Clothes',

    culture: '"件" is used for tops and clothing items.'

  },

  {

    id: 'hsk1_050',

    chinese: '我买了很多东西。',

    pinyin: 'Wǒ mǎi le hěn duō dōngxi.',

    translation: 'I bought a lot of things.',

    audioUrl: '/audio/hsk1_050.mp3',

    words: ['我', '买', '了', '很', '多', '东西'],

    fillAnswer: '了',

    choices: [

      { text: 'I bought a lot of things.', correct: true },

      { text: 'I want to buy a lot of things.', correct: false },

      { text: 'I bought a few things.', correct: false },

      { text: 'There are many things here.', correct: false }

    ],

    vocab: '买 (buy) · 了 (completed) · 很多 (a lot) · 东西 (things)',

    pattern: 'Subject + Verb + 了 + 很多 + Object',

    context: '?? Shopping · After shopping',

    culture: '"东西" = things, used for almost any object.'

  },



  // ============ 交通与出行 (51-65) ============

  {

    id: 'hsk1_051',

    chinese: '我坐飞机去中国。',

    pinyin: 'Wǒ zuò fēijī qù Zhōngguó.',

    translation: 'I go to China by plane.',

    audioUrl: '/audio/hsk1_051.mp3',

    words: ['我', '坐', '飞机', '去', '中国'],

    fillAnswer: '飞机',

    choices: [

      { text: 'I go to China by plane.', correct: true },

      { text: 'I go to China by train.', correct: false },

      { text: 'I go to Beijing by plane.', correct: false },

      { text: 'I take a plane to China.', correct: false }

    ],

    vocab: '坐 (travel by) · 飞机 (plane) · 去 (go) · 中国 (China)',

    pattern: 'Subject + 坐 + Vehicle + Verb + Place (Serial verbs)',

    context: '?? Travel · Transportation',

    culture: 'Chinese people prefer planes or high-speed trains for long trips.'

  },

  {

    id: 'hsk1_052',

    chinese: '我坐出租车去火车站。',

    pinyin: 'Wǒ zuò chūzūchē qù huǒchēzhàn.',

    translation: 'I take a taxi to the train station.',

    audioUrl: '/audio/hsk1_052.mp3',

    words: ['我', '坐', '出租车', '去', '火车站'],

    fillAnswer: '火车站',

    choices: [

      { text: 'I take a taxi to the train station.', correct: true },

      { text: 'I take a bus to the train station.', correct: false },

      { text: 'I take a taxi to the airport.', correct: false },

      { text: 'I go to the train station by taxi.', correct: false }

    ],

    vocab: '坐 (travel by) · 出租车 (taxi) · 去 (go) · 火车站 (train station)',

    pattern: 'Subject + 坐 + Vehicle + Verb + Place',

    context: '?? Transportation',

    culture: 'Taxis are plentiful in China, and Didi is very convenient.'

  },

  {

    id: 'hsk1_053',

    chinese: '我住在北京。',

    pinyin: 'Wǒ zhù zài Běijīng.',

    translation: 'I live in Beijing.',

    audioUrl: '/audio/hsk1_053.mp3',

    words: ['我', '住', '在', '北京'],

    fillAnswer: '在',

    choices: [

      { text: 'I live in Beijing.', correct: true },

      { text: 'I live in Shanghai.', correct: false },

      { text: 'I am in Beijing.', correct: false },

      { text: 'I want to live in Beijing.', correct: false }

    ],

    vocab: '住 (live) · 在 (at) · 北京 (Beijing)',

    pattern: 'Subject + 住 + 在 + Place',

    context: '?? Living · Location',

    culture: 'Beijing is the capital of China.'

  },

  {

    id: 'hsk1_054',

    chinese: '他在医院工作。',

    pinyin: 'Tā zài yīyuàn gōngzuò.',

    translation: 'He works at a hospital.',

    audioUrl: '/audio/hsk1_054.mp3',

    words: ['他', '在', '医院', '工作'],

    fillAnswer: '在',

    choices: [

      { text: 'He works at a hospital.', correct: true },

      { text: 'He works at a school.', correct: false },

      { text: 'He is at the hospital.', correct: false },

      { text: 'He works in a bank.', correct: false }

    ],

    vocab: '在 (at) · 医院 (hospital) · 工作 (work)',

    pattern: 'Subject + 在 + Place + Verb',

    context: '?? Work · Jobs',

    culture: 'Doctors are highly respected in China.'

  },

  {

    id: 'hsk1_055',

    chinese: '我妈妈在商店买东西。',

    pinyin: 'Wǒ māma zài shāngdiàn mǎi dōngxi.',

    translation: 'My mother is buying things at the store.',

    audioUrl: '/audio/hsk1_055.mp3',

    words: ['我', '妈妈', '在', '商店', '买', '东西'],

    fillAnswer: '在',

    choices: [

      { text: 'My mother is buying things at the store.', correct: true },

      { text: 'My mother is at the store.', correct: false },

      { text: 'My mother wants to buy things.', correct: false },

      { text: 'My mother bought things at the store.', correct: false }

    ],

    vocab: '妈妈 (mother) · 在 (at) · 商店 (store) · 买 (buy) · 东西 (things)',

    pattern: 'Subject + 在 + Place + Verb + Object',

    context: '??? Describing what someone is doing',

    culture: 'Chinese mothers often go shopping.'

  },

  {

    id: 'hsk1_056',

    chinese: '我去商店买水果。',

    pinyin: 'Wǒ qù shāngdiàn mǎi shuǐguǒ.',

    translation: 'I go to the store to buy fruit.',

    audioUrl: '/audio/hsk1_056.mp3',

    words: ['我', '去', '商店', '买', '水果'],

    fillAnswer: '商店',

    choices: [

      { text: 'I go to the store to buy fruit.', correct: true },

      { text: 'I go to the market to buy fruit.', correct: false },

      { text: 'I want to buy fruit at the store.', correct: false },

      { text: 'I go to the store to buy vegetables.', correct: false }

    ],

    vocab: '去 (go) · 商店 (store) · 买 (buy) · 水果 (fruit)',

    pattern: 'Subject + 去 + Place + Verb + Object (Serial verbs)',

    context: '?? Daily routine',

    culture: 'Many Chinese communities have fruit shops.'

  },

  {

    id: 'hsk1_057',

    chinese: '我是坐飞机来的。',

    pinyin: 'Wǒ shì zuò fēijī lái de.',

    translation: 'I came by plane.',

    audioUrl: '/audio/hsk1_057.mp3',

    words: ['我', '是', '坐', '飞机', '来', '的'],

    fillAnswer: '是...的',

    choices: [

      { text: 'I came by plane.', correct: true },

      { text: 'I will go by plane.', correct: false },

      { text: 'I came by train.', correct: false },

      { text: 'I took a plane to come.', correct: false }

    ],

    vocab: '是 (emphatic) · 坐 (travel by) · 飞机 (plane) · 来 (come) · 的 (emphasis)',

    pattern: 'Subject + 是 + Manner + Verb + 的',

    context: '?? Emphasizing how something happened',

    culture: '"是...的" structure emphasizes the manner.'

  },

  {

    id: 'hsk1_058',

    chinese: '你是昨天来的吗？',

    pinyin: 'Nǐ shì zuótiān lái de ma?',

    translation: 'Did you come yesterday?',

    audioUrl: '/audio/hsk1_058.mp3',

    words: ['你', '是', '昨天', '来', '的', '吗'],

    fillAnswer: '是...的',

    choices: [

      { text: 'Did you come yesterday?', correct: true },

      { text: 'Are you coming today?', correct: false },

      { text: 'Did you come here?', correct: false },

      { text: 'You came yesterday?', correct: false }

    ],

    vocab: '是 (emphatic) · 昨天 (yesterday) · 来 (come) · 吗 (question) · 的 (emphasis)',

    pattern: 'Subject + 是 + Time + Verb + 的 + 吗？',



    context: '? Asking about past events',

    culture: 'Use "是...的" to ask about details of past events.'

  },

  {

    id: 'hsk1_059',

    chinese: '你什么时候去北京？',

    pinyin: 'Nǐ shénme shíhou qù Běijīng?',

    translation: 'When are you going to Beijing?',

    audioUrl: '/audio/hsk1_059.mp3',

    words: ['你', '什么', '时候', '去', '北京'],

    fillAnswer: '时候',

    choices: [

      { text: 'When are you going to Beijing?', correct: true },

      { text: 'How are you going to Beijing?', correct: false },

      { text: 'Where are you going?', correct: false },

      { text: 'Why are you going to Beijing?', correct: false }

    ],

    vocab: '什么时候 (when) · 去 (go) · 北京 (Beijing)',

    pattern: 'Subject + 什么时候 + Verb + Place？',

    context: '?? Planning travel',

    culture: 'Beijing is a popular tourist destination.'

  },

  {

    id: 'hsk1_060',

    chinese: '我下个月去北京。',

    pinyin: 'Wǒ xià gè yuè qù Běijīng.',

    translation: 'I am going to Beijing next month.',

    audioUrl: '/audio/hsk1_060.mp3',

    words: ['我', '下', '个', '月', '去', '北京'],

    fillAnswer: '下',

    choices: [

      { text: 'I am going to Beijing next month.', correct: true },

      { text: 'I am going to Beijing this month.', correct: false },

      { text: 'I went to Beijing last month.', correct: false },

      { text: 'I am going to Shanghai next month.', correct: false }

    ],

    vocab: '下 (next) · 个 (measure) · 月 (month) · 去 (go) · 北京 (Beijing)',

    pattern: 'Subject + Time + Verb + Place',

    context: '?? Making plans',

    culture: '"下个月" = next month.'

  },

  {

    id: 'hsk1_061',

    chinese: '我上午八点去学校。',

    pinyin: 'Wǒ shàngwǔ bā diǎn qù xuéxiào.',

    translation: 'I go to school at 8 in the morning.',

    audioUrl: '/audio/hsk1_061.mp3',

    words: ['我', '上午', '八', '点', '去', '学校'],

    fillAnswer: '点',

    choices: [

      { text: 'I go to school at 8 in the morning.', correct: true },

      { text: 'I go to school at 8 in the evening.', correct: false },

      { text: 'I go to work at 8 in the morning.', correct: false },

      { text: 'I go to school at 9 in the morning.', correct: false }

    ],

    vocab: '上午 (morning) · 八 (eight) · 点 (o\'clock) · 去 (go) · 学校 (school)',

    pattern: 'Subject + Time + Verb + Place',

    context: '?? Daily routine · School',

    culture: 'Chinese students usually start school at 8 AM.'

  },

  {

    id: 'hsk1_062',

    chinese: '妈妈在哪儿呢？',

    pinyin: 'Māma zài nǎr ne?',

    translation: 'Where is Mom?',

    audioUrl: '/audio/hsk1_062.mp3',

    words: ['妈妈', '在', '哪儿', '呢'],

    fillAnswer: '呢',

    choices: [

      { text: 'Where is Mom?', correct: true },

      { text: 'Is Mom here?', correct: false },

      { text: 'Where are you?', correct: false },

      { text: 'Mom is here.', correct: false }

    ],

    vocab: '妈妈 (mother) · 在 (at) · 哪儿 (where) · 呢 (question particle)',

    pattern: 'Subject + 在 + 哪儿 + 呢？',

    context: '?? Asking location',

    culture: '"呢" makes the question softer.'

  },

  {

    id: 'hsk1_063',

    chinese: '书在桌子上。',

    pinyin: 'Shū zài zhuōzi shàng.',

    translation: 'The book is on the table.',

    audioUrl: '/audio/hsk1_063.mp3',

    words: ['书', '在', '桌子', '上'],

    fillAnswer: '上',

    choices: [

      { text: 'The book is on the table.', correct: true },

      { text: 'The book is under the table.', correct: false },

      { text: 'The book is on the desk.', correct: false },

      { text: 'The books are on the table.', correct: false }

    ],

    vocab: '书 (book) · 在 (at) · 桌子 (table) · 上 (on)',

    pattern: 'Subject + 在 + Place + 上',

    context: '?? Describing location',

    culture: '"桌子上" is a very common expression.'

  },

  {

    id: 'hsk1_064',

    chinese: '我的手机在哪儿？',

    pinyin: 'Wǒ de shǒujī zài nǎr?',

    translation: 'Where is my phone?',

    audioUrl: '/audio/hsk1_064.mp3',

    words: ['我', '的', '手机', '在', '哪儿'],

    fillAnswer: '手机',

    choices: [

      { text: 'Where is my phone?', correct: true },

      { text: 'Where is your phone?', correct: false },

      { text: 'Is my phone here?', correct: false },

      { text: 'I lost my phone.', correct: false }

    ],

    vocab: '的 (possession) · 手机 (phone) · 在 (at) · 哪儿 (where)',

    pattern: 'Possessor + 的 + Noun + 在 + 哪儿？',

    context: '?? Daily life · Searching for things',

    culture: 'Phones are essential in modern life.'

  },

  {

    id: 'hsk1_065',

    chinese: '杯子在桌子上。',

    pinyin: 'Bēizi zài zhuōzi shàng.',

    translation: 'The cup is on the table.',

    audioUrl: '/audio/hsk1_065.mp3',

    words: ['杯子', '在', '桌子', '上'],

    fillAnswer: '上',

    choices: [

      { text: 'The cup is on the table.', correct: true },

      { text: 'The cup is under the table.', correct: false },

      { text: 'The cup is in the drawer.', correct: false },

      { text: 'The cup is on the desk.', correct: false }

    ],

    vocab: '杯子 (cup) · 在 (at) · 桌子 (table) · 上 (on)',

    pattern: 'Subject + 在 + Place + 上',

    context: '?? Describing location',

    culture: 'Location words: 上 (on), 下 (under), 里 (inside), 外 (outside).'

  },



  // ============ 天气与感受 (66-80) ============

  {

    id: 'hsk1_066',

    chinese: '今天天气很好。',

    pinyin: 'Jīntiān tiānqì hěn hǎo.',

    translation: 'The weather is very nice today.',

    audioUrl: '/audio/hsk1_066.mp3',

    words: ['今天', '天气', '很', '好'],

    fillAnswer: '好',

    choices: [

      { text: 'The weather is very nice today.', correct: true },

      { text: 'Today is a good day.', correct: false },

      { text: 'The weather is bad today.', correct: false },

      { text: 'It is sunny today.', correct: false }

    ],

    vocab: '今天 (today) · 天气 (weather) · 很 (very) · 好 (good)',

    pattern: 'Subject + 很 + Adj',

    context: '?? Small talk · Weather',

    culture: 'Weather is a common small talk topic in China.'

  },

  {

    id: 'hsk1_067',

    chinese: '今天太热了。',

    pinyin: 'Jīntiān tài rè le.',

    translation: 'It\'s too hot today.',

    audioUrl: '/audio/hsk1_067.mp3',

    words: ['今天', '太', '热', '了'],

    fillAnswer: '热',

    choices: [

      { text: 'It\'s too hot today.', correct: true },

      { text: 'It\'s too cold today.', correct: false },

      { text: 'Today is very hot.', correct: false },

      { text: 'It\'s too hot here.', correct: false }

    ],

    vocab: '今天 (today) · 太 (too) · 热 (hot) · 了 (change/emphasis)',

    pattern: 'Subject + 太 + Adj + 了',

    context: '?? Commenting on weather',

    culture: 'Chinese people often say "太热了" in summer.'

  },

  {

    id: 'hsk1_068',

    chinese: '今天太冷了。',

    pinyin: 'Jīntiān tài lěng le.',

    translation: 'It\'s too cold today.',

    audioUrl: '/audio/hsk1_068.mp3',

    words: ['今天', '太', '冷', '了'],

    fillAnswer: '冷',

    choices: [

      { text: 'It\'s too cold today.', correct: true },

      { text: 'It\'s too hot today.', correct: false },

      { text: 'Today is cold.', correct: false },

      { text: 'It\'s too cold here.', correct: false }

    ],

    vocab: '今天 (today) · 太 (too) · 冷 (cold) · 了 (change)',

    pattern: 'Subject + 太 + Adj + 了',

    context: '?? Commenting on weather',

    culture: 'Northern China is very cold in winter.'

  },

  {

    id: 'hsk1_069',

    chinese: '今天下雨了。',

    pinyin: 'Jīntiān xià yǔ le.',

    translation: 'It rained today.',

    audioUrl: '/audio/hsk1_069.mp3',

    words: ['今天', '下雨', '了'],

    fillAnswer: '下雨',

    choices: [

      { text: 'It rained today.', correct: true },

      { text: 'It is raining today.', correct: false },

      { text: 'It will rain today.', correct: false },

      { text: 'It snowed today.', correct: false }

    ],

    vocab: '今天 (today) · 下雨 (to rain) · 了 (change)',

    pattern: 'Subject + Verb + Object + 了',

    context: '??? Weather · Rain',

    culture: '"下雨了" indicates it has started raining.'

  },

  {

    id: 'hsk1_070',

    chinese: '明天会下雨吗？',

    pinyin: 'Míngtiān huì xià yǔ ma?',

    translation: 'Will it rain tomorrow?',

    audioUrl: '/audio/hsk1_070.mp3',

    words: ['明天', '会', '下雨', '吗'],

    fillAnswer: '会',

    choices: [

      { text: 'Will it rain tomorrow?', correct: true },

      { text: 'Is it raining tomorrow?', correct: false },

      { text: 'Will it be sunny tomorrow?', correct: false },

      { text: 'Did it rain today?', correct: false }

    ],

    vocab: '明天 (tomorrow) · 会 (will) · 下雨 (to rain) · 吗 (question)',

    pattern: 'Subject + 会 + Verb + Object + 吗？',

    context: '??? Weather forecast',

    culture: '"会" expresses future possibility.'

  },

  {

    id: 'hsk1_071',

    chinese: '北京很冷吗？',

    pinyin: 'Běijīng hěn lěng ma?',

    translation: 'Is Beijing very cold?',

    audioUrl: '/audio/hsk1_071.mp3',

    words: ['北京', '很', '冷', '吗'],

    fillAnswer: '冷',

    choices: [

      { text: 'Is Beijing very cold?', correct: true },

      { text: 'Is Beijing very hot?', correct: false },

      { text: 'Is it cold in Beijing?', correct: false },

      { text: 'Beijing is cold.', correct: false }

    ],

    vocab: '北京 (Beijing) · 很 (very) · 冷 (cold) · 吗 (question)',

    pattern: 'Subject + 很 + Adj + 吗？',

    context: '? Asking about weather',

    culture: 'Beijing is very cold in winter and hot in summer.'

  },

  {

    id: 'hsk1_072',

    chinese: '我今天很高兴。',

    pinyin: 'Wǒ jīntiān hěn gāoxìng.',

    translation: 'I am very happy today.',

    audioUrl: '/audio/hsk1_072.mp3',

    words: ['我', '今天', '很', '高兴'],

    fillAnswer: '高兴',

    choices: [

      { text: 'I am very happy today.', correct: true },

      { text: 'I am very sad today.', correct: false },

      { text: 'I am very busy today.', correct: false },

      { text: 'I am happy every day.', correct: false }

    ],

    vocab: '我 (I) · 今天 (today) · 很 (very) · 高兴 (happy)',

    pattern: 'Subject + Time + 很 + Adj',

    context: '?? Expressing feelings',

    culture: '"高兴" is an important HSK1 emotion word.'

  },

  {

    id: 'hsk1_073',

    chinese: '你累了吗？',

    pinyin: 'Nǐ lèi le ma?',

    translation: 'Are you tired?',

    audioUrl: '/audio/hsk1_073.mp3',

    words: ['你', '累', '了', '吗'],

    fillAnswer: '累',

    choices: [

      { text: 'Are you tired?', correct: true },

      { text: 'Are you happy?', correct: false },

      { text: 'You are tired.', correct: false },

      { text: 'Are you busy?', correct: false }

    ],

    vocab: '你 (you) · 累 (tired) · 了 (change) · 吗 (question)',

    pattern: 'Subject + Adj + 了 + 吗？',

    context: '?? Caring for someone',

    culture: 'Chinese people ask "累了吗" to show care for friends.'

  },

  {

    id: 'hsk1_074',

    chinese: '我想休息一下。',

    pinyin: 'Wǒ xiǎng xiūxi yīxià.',

    translation: 'I want to rest for a while.',

    audioUrl: '/audio/hsk1_074.mp3',

    words: ['我', '想', '休息', '一下'],

    fillAnswer: '休息',

    choices: [

      { text: 'I want to rest for a while.', correct: true },

      { text: 'I want to work.', correct: false },

      { text: 'I want to sleep.', correct: false },

      { text: 'I am resting.', correct: false }

    ],

    vocab: '想 (want) · 休息 (rest) · 一下 (a while)',

    pattern: 'Subject + 想 + Verb + 一下',

    context: '?? Taking a break',

    culture: '"一下" makes the tone more casual.'

  },

  {

    id: 'hsk1_075',

    chinese: '你吃饭了吗？',

    pinyin: 'Nǐ chī fàn le ma?',

    translation: 'Have you eaten?',

    audioUrl: '/audio/hsk1_075.mp3',

    words: ['你', '吃', '饭', '了', '吗'],

    fillAnswer: '了',

    choices: [

      { text: 'Have you eaten?', correct: true },

      { text: 'Do you want to eat?', correct: false },

      { text: 'Are you eating?', correct: false },

      { text: 'Did you eat?', correct: false }

    ],

    vocab: '吃 (eat) · 饭 (meal) · 了 (completion) · 吗 (question)',

    pattern: 'Subject + Verb + Object + 了 + 吗？',

    context: '?? Daily life · Chinese greeting',

    culture: '"吃了吗" is the most famous Chinese greeting!'

  },

  {

    id: 'hsk1_076',

    chinese: '我吃饱了。',

    pinyin: 'Wǒ chī bǎo le.',

    translation: 'I am full.',

    audioUrl: '/audio/hsk1_076.mp3',

    words: ['我', '吃', '饱', '了'],

    fillAnswer: '饱',

    choices: [

      { text: 'I am full.', correct: true },

      { text: 'I am hungry.', correct: false },

      { text: 'I ate too much.', correct: false },

      { text: 'I want to eat more.', correct: false }

    ],

    vocab: '吃 (eat) · 饱 (full) · 了 (change)',

    pattern: 'Subject + Verb + Adj + 了',

    context: '??? After a meal',

    culture: 'Chinese hosts often ask "吃饱了吗"?'

  },

  {

    id: 'hsk1_077',

    chinese: '谢谢！不客气。',

    pinyin: 'Xièxie! Bù kèqi.',

    translation: 'Thank you! You\'re welcome.',

    audioUrl: '/audio/hsk1_077.mp3',

    words: ['谢谢', '不', '客气'],

    fillAnswer: '客气',

    choices: [

      { text: 'Thank you! You\'re welcome.', correct: true },

      { text: 'Sorry! It\'s okay.', correct: false },

      { text: 'Hello! Goodbye.', correct: false },

      { text: 'Thank you! Goodbye.', correct: false }

    ],

    vocab: '谢谢 (thank you) · 不 (not) · 客气 (polite)',

    pattern: '谢谢 + 不客气',

    context: '?? Politeness · Everyday',

    culture: '"不客气" is the standard response to "谢谢".'

  },

  {

    id: 'hsk1_078',

    chinese: '对不起！没关系。',

    pinyin: 'Duìbuqǐ! Méi guānxi.',

    translation: 'Sorry! That\'s okay.',

    audioUrl: '/audio/hsk1_078.mp3',

    words: ['对不起', '没', '关系'],

    fillAnswer: '关系',

    choices: [

      { text: 'Sorry! That\'s okay.', correct: true },

      { text: 'Sorry! You\'re welcome.', correct: false },

      { text: 'Thank you! You\'re welcome.', correct: false },

      { text: 'Excuse me! No problem.', correct: false }

    ],

    vocab: '对不起 (sorry) · 没关系 (it\'s okay)',

    pattern: '对不起 + 没关系',

    context: '?? Apologizing · Everyday',

    culture: 'Chinese people say "对不起" when they make mistakes.'

  },

  {

    id: 'hsk1_079',

    chinese: '我能坐在这儿吗？',

    pinyin: 'Wǒ néng zuò zài zhèr ma?',

    translation: 'Can I sit here?',

    audioUrl: '/audio/hsk1_079.mp3',

    words: ['我', '能', '坐', '在', '这儿', '吗'],

    fillAnswer: '能',

    choices: [

      { text: 'Can I sit here?', correct: true },

      { text: 'Can I stand here?', correct: false },

      { text: 'Can you sit here?', correct: false },

      { text: 'I want to sit here.', correct: false }

    ],

    vocab: '能 (can) · 坐 (sit) · 在 (at) · 这儿 (here) · 吗 (question)',

    pattern: 'Subject + 能 + Verb + Place + 吗？',

    context: '?? Asking permission',

    culture: 'Use "能...吗" to make polite requests.'

  },

  {

    id: 'hsk1_080',

    chinese: '你能帮我吗？',

    pinyin: 'Nǐ néng bāng wǒ ma?',

    translation: 'Can you help me?',

    audioUrl: '/audio/hsk1_080.mp3',

    words: ['你', '能', '帮', '我', '吗'],

    fillAnswer: '帮',

    choices: [

      { text: 'Can you help me?', correct: true },

      { text: 'Can I help you?', correct: false },

      { text: 'Can you help him?', correct: false },

      { text: 'You can help me.', correct: false }

    ],

    vocab: '能 (can) · 帮 (help) · 我 (me) · 吗 (question)',

    pattern: 'Subject + 能 + Verb + Object + 吗？',

    context: '?? Asking for help',

    culture: 'Helping each other is common in Chinese culture.'

  },



  // ============ 日常对话与生活 (81-100) ============

  {

    id: 'hsk1_081',

    chinese: '你在干什么？',

    pinyin: 'Nǐ zài gàn shénme?',

    translation: 'What are you doing?',

    audioUrl: '/audio/hsk1_081.mp3',

    words: ['你', '在', '干', '什么'],

    fillAnswer: '干',

    choices: [

      { text: 'What are you doing?', correct: true },

      { text: 'What do you want to do?', correct: false },

      { text: 'What are you saying?', correct: false },

      { text: 'What did you do?', correct: false }

    ],

    vocab: '在 (in progress) · 干 (do) · 什么 (what)',

    pattern: 'Subject + 在 + Verb + 什么？',

    context: '?? Asking about current activity',

    culture: '"干什么" is a common daily question.'

  },

  {

    id: 'hsk1_082',

    chinese: '我在看电视。',

    pinyin: 'Wǒ zài kàn diànshì.',

    translation: 'I am watching TV.',

    audioUrl: '/audio/hsk1_082.mp3',

    words: ['我', '在', '看', '电视'],

    fillAnswer: '看',

    choices: [

      { text: 'I am watching TV.', correct: true },

      { text: 'I want to watch TV.', correct: false },

      { text: 'I am watching a movie.', correct: false },

      { text: 'I watch TV every day.', correct: false }

    ],

    vocab: '在 (in progress) · 看 (watch) · 电视 (TV)',

    pattern: 'Subject + 在 + Verb + Object',

    context: '?? Telling current activity',

    culture: 'Chinese families like watching TV together.'

  },

  {

    id: 'hsk1_083',

    chinese: '我看电影呢。',

    pinyin: 'Wǒ kàn diànyǐng ne.',

    translation: 'I am watching a movie.',

    audioUrl: '/audio/hsk1_083.mp3',

    words: ['我', '看', '电影', '呢'],

    fillAnswer: '呢',

    choices: [

      { text: 'I am watching a movie.', correct: true },

      { text: 'I want to watch a movie.', correct: false },

      { text: 'I watch movies.', correct: false },

      { text: 'I watched a movie.', correct: false }

    ],

    vocab: '看 (watch) · 电影 (movie) · 呢 (progressive)',

    pattern: 'Subject + Verb + Object + 呢',

    context: '?? Telling current activity',

    culture: '"呢" indicates an ongoing action.'

  },

  {

    id: 'hsk1_084',

    chinese: '你喜欢看电影吗？',

    pinyin: 'Nǐ xǐhuan kàn diànyǐng ma?',

    translation: 'Do you like watching movies?',

    audioUrl: '/audio/hsk1_084.mp3',

    words: ['你', '喜欢', '看', '电影', '吗'],

    fillAnswer: '喜欢',

    choices: [

      { text: 'Do you like watching movies?', correct: true },

      { text: 'Do you like movies?', correct: false },

      { text: 'Do you watch movies?', correct: false },

      { text: 'Do you like this movie?', correct: false }

    ],

    vocab: '喜欢 (like) · 看 (watch) · 电影 (movie) · 吗 (question)',

    pattern: 'Subject + 喜欢 + Verb + Object + 吗？',

    context: '?? Talking about hobbies',

    culture: 'Movies are a popular leisure activity for young Chinese.'

  },

  {

    id: 'hsk1_085',

    chinese: '我喜欢听音乐。',

    pinyin: 'Wǒ xǐhuan tīng yīnyuè.',

    translation: 'I like listening to music.',

    audioUrl: '/audio/hsk1_085.mp3',

    words: ['我', '喜欢', '听', '音乐'],

    fillAnswer: '喜欢',

    choices: [

      { text: 'I like listening to music.', correct: true },

      { text: 'I like listening to songs.', correct: false },

      { text: 'I like music.', correct: false },

      { text: 'I am listening to music.', correct: false }

    ],

    vocab: '喜欢 (like) · 听 (listen) · 音乐 (music)',

    pattern: 'Subject + 喜欢 + Verb + Object',

    context: '?? Talking about hobbies',

    culture: 'Young people love listening to music on their phones.'

  },

  {

    id: 'hsk1_086',

    chinese: '你会说汉语吗？',

    pinyin: 'Nǐ huì shuō Hànyǔ ma?',

    translation: 'Can you speak Chinese?',

    audioUrl: '/audio/hsk1_086.mp3',

    words: ['你', '会', '说', '汉语', '吗'],

    fillAnswer: '会',

    choices: [

      { text: 'Can you speak Chinese?', correct: true },

      { text: 'Do you speak Chinese?', correct: false },

      { text: 'Can you write Chinese?', correct: false },

      { text: 'Do you like Chinese?', correct: false }

    ],

    vocab: '会 (can) · 说 (speak) · 汉语 (Chinese) · 吗 (question)',

    pattern: 'Subject + 会 + Verb + Object + 吗？',

    context: '??? Language ability',

    culture: 'Chinese people are impressed when foreigners speak Chinese!'

  },

  {

    id: 'hsk1_087',

    chinese: '我会说一点儿汉语。',

    pinyin: 'Wǒ huì shuō yīdiǎnr Hànyǔ.',

    translation: 'I can speak a little Chinese.',

    audioUrl: '/audio/hsk1_087.mp3',

    words: ['我', '会', '说', '一点', '儿', '汉语'],

    fillAnswer: '一点',

    choices: [

      { text: 'I can speak a little Chinese.', correct: true },

      { text: 'I cannot speak Chinese.', correct: false },

      { text: 'I speak very good Chinese.', correct: false },

      { text: 'I want to learn Chinese.', correct: false }

    ],

    vocab: '会 (can) · 说 (speak) · 一点儿 (a little) · 汉语 (Chinese)',

    pattern: 'Subject + 会 + Verb + 一点儿 + Object',

    context: '??? Language ability',

    culture: '"会一点儿" is a humble Chinese expression.'

  },

  {

    id: 'hsk1_088',

    chinese: '你会写这个字吗？',

    pinyin: 'Nǐ huì xiě zhège zì ma?',

    translation: 'Can you write this character?',

    audioUrl: '/audio/hsk1_088.mp3',

    words: ['你', '会', '写', '这个', '字', '吗'],

    fillAnswer: '字',

    choices: [

      { text: 'Can you write this character?', correct: true },

      { text: 'Can you read this character?', correct: false },

      { text: 'Do you know this character?', correct: false },

      { text: 'Can you write Chinese?', correct: false }

    ],

    vocab: '会 (can) · 写 (write) · 这个 (this) · 字 (character) · 吗 (question)',

    pattern: 'Subject + 会 + Verb + Measure + Noun + 吗？',

    context: '?? Learning Chinese',

    culture: 'Writing Chinese characters is one of the hardest parts of learning Chinese.'

  },

  {

    id: 'hsk1_089',

    chinese: '你认识这个字吗？',

    pinyin: 'Nǐ rènshi zhège zì ma?',

    translation: 'Do you know this character?',

    audioUrl: '/audio/hsk1_089.mp3',

    words: ['你', '认识', '这个', '字', '吗'],

    fillAnswer: '认识',

    choices: [

      { text: 'Do you know this character?', correct: true },

      { text: 'Can you write this character?', correct: false },

      { text: 'Can you read this character?', correct: false },

      { text: 'Do you like this character?', correct: false }

    ],

    vocab: '认识 (know) · 这个 (this) · 字 (character) · 吗 (question)',

    pattern: 'Subject + 认识 + Object + 吗？',

    context: '?? Learning Chinese',

    culture: '"认识" is for characters or people, "知道" is for facts.'

  },

  {

    id: 'hsk1_090',

    chinese: '我在学汉语。',

    pinyin: 'Wǒ zài xué Hànyǔ.',

    translation: 'I am learning Chinese.',

    audioUrl: '/audio/hsk1_090.mp3',

    words: ['我', '在', '学', '汉语'],

    fillAnswer: '学',

    choices: [

      { text: 'I am learning Chinese.', correct: true },

      { text: 'I want to learn Chinese.', correct: false },

      { text: 'I learn Chinese every day.', correct: false },

      { text: 'I can speak Chinese.', correct: false }

    ],

    vocab: '在 (in progress) · 学 (learn) · 汉语 (Chinese)',

    pattern: 'Subject + 在 + Verb + Object',

    context: '?? Learning Chinese',

    culture: 'More and more people are learning Chinese worldwide.'

  },

  {

    id: 'hsk1_091',

    chinese: '你学汉语多长时间了？',

    pinyin: 'Nǐ xué Hànyǔ duō cháng shíjiān le?',

    translation: 'How long have you been learning Chinese?',

    audioUrl: '/audio/hsk1_091.mp3',

    words: ['你', '学', '汉语', '多长', '时间', '了'],

    fillAnswer: '多长',

    choices: [

      { text: 'How long have you been learning Chinese?', correct: true },

      { text: 'When did you start learning Chinese?', correct: false },

      { text: 'Do you like learning Chinese?', correct: false },

      { text: 'How is your Chinese?', correct: false }

    ],

    vocab: '学 (learn) · 汉语 (Chinese) · 多长时间 (how long) · 了 (change)',

    pattern: 'Subject + Verb + Object + 多长时间 + 了？',

    context: '?? Asking about learning experience',

    culture: 'Learning duration is a common question among learners.'

  },

  {

    id: 'hsk1_092',

    chinese: '我在北京大学学习。',

    pinyin: 'Wǒ zài Běijīng Dàxué xuéxí.',

    translation: 'I study at Beijing University.',

    audioUrl: '/audio/hsk1_092.mp3',

    words: ['我', '在', '北京', '大学', '学习'],

    fillAnswer: '在',

    choices: [

      { text: 'I study at Beijing University.', correct: true },

      { text: 'I work at Beijing University.', correct: false },

      { text: 'I study at Peking University.', correct: false },

      { text: 'I am in Beijing University.', correct: false }

    ],

    vocab: '在 (at) · 北京 (Beijing) · 大学 (university) · 学习 (study)',

    pattern: 'Subject + 在 + Place + Verb',

    context: '??? Education',

    culture: 'Peking University is one of the best universities in China.'

  },

  {

    id: 'hsk1_093',

    chinese: '我们学校很大。',

    pinyin: 'Wǒmen xuéxiào hěn dà.',

    translation: 'Our school is very big.',

    audioUrl: '/audio/hsk1_093.mp3',

    words: ['我们', '学校', '很', '大'],

    fillAnswer: '大',

    choices: [

      { text: 'Our school is very big.', correct: true },

      { text: 'My school is very big.', correct: false },

      { text: 'Our school is very small.', correct: false },

      { text: 'The school is big.', correct: false }

    ],

    vocab: '我们 (we) · 学校 (school) · 很 (very) · 大 (big)',

    pattern: 'Possessor + 学校 + 很 + Adj',

    context: '?? Describing school',

    culture: 'Chinese university campuses are usually very large.'

  },

  {

    id: 'hsk1_094',

    chinese: '我回家吃饭。',

    pinyin: 'Wǒ huí jiā chī fàn.',

    translation: 'I go home to eat.',

    audioUrl: '/audio/hsk1_094.mp3',

    words: ['我', '回', '家', '吃', '饭'],

    fillAnswer: '回',

    choices: [

      { text: 'I go home to eat.', correct: true },

      { text: 'I come home to eat.', correct: false },

      { text: 'I eat at home.', correct: false },

      { text: 'I go home for lunch.', correct: false }

    ],

    vocab: '回 (return) · 家 (home) · 吃 (eat) · 饭 (meal)',

    pattern: 'Subject + 回 + Place + Verb + Object (Serial verbs)',

    context: '?? Daily routine',

    culture: 'Chinese people traditionally like to eat at home.'

  },

  {

    id: 'hsk1_095',

    chinese: '我睡觉了。',

    pinyin: 'Wǒ shuìjiào le.',

    translation: 'I went to bed / I am going to bed.',

    audioUrl: '/audio/hsk1_095.mp3',

    words: ['我', '睡觉', '了'],

    fillAnswer: '了',

    choices: [

      { text: 'I went to bed.', correct: true },

      { text: 'I am sleeping.', correct: false },

      { text: 'I want to sleep.', correct: false },

      { text: 'I slept.', correct: false }

    ],

    vocab: '睡觉 (sleep) · 了 (change)',

    pattern: 'Subject + Verb + 了',

    context: '?? Daily routine · Bedtime',

    culture: 'Chinese people typically go to bed around 10 PM.'

  },

  {

    id: 'hsk1_096',

    chinese: '他在睡觉呢。',

    pinyin: 'Tā zài shuìjiào ne.',

    translation: 'He is sleeping.',

    audioUrl: '/audio/hsk1_096.mp3',

    words: ['他', '在', '睡觉', '呢'],

    fillAnswer: '呢',

    choices: [

      { text: 'He is sleeping.', correct: true },

      { text: 'He wants to sleep.', correct: false },

      { text: 'He is sleeping now.', correct: false },

      { text: 'He went to bed.', correct: false }

    ],

    vocab: '在 (in progress) · 睡觉 (sleep) · 呢 (progressive)',

    pattern: 'Subject + 在 + Verb + 呢',

    context: '?? Describing current state',

    culture: '"在...呢" indicates an ongoing action.'

  },

  {

    id: 'hsk1_097',

    chinese: '你早上几点起床？',

    pinyin: 'Nǐ zǎoshang jǐ diǎn qǐchuáng?',

    translation: 'What time do you get up in the morning?',

    audioUrl: '/audio/hsk1_097.mp3',

    words: ['你', '早上', '几', '点', '起床'],

    fillAnswer: '起床',

    choices: [

      { text: 'What time do you get up in the morning?', correct: true },

      { text: 'What time do you go to bed?', correct: false },

      { text: 'Do you get up early?', correct: false },

      { text: 'What do you do in the morning?', correct: false }

    ],

    vocab: '早上 (morning) · 几 (how many) · 点 (o\'clock) · 起床 (get up)',

    pattern: 'Subject + Time + 几点 + Verb？',

    context: '? Daily routine',

    culture: 'Chinese people usually get up at 6-7 AM.'

  },

  {

    id: 'hsk1_098',

    chinese: '我早上七点起床。',

    pinyin: 'Wǒ zǎoshang qī diǎn qǐchuáng.',

    translation: 'I get up at 7 AM.',

    audioUrl: '/audio/hsk1_098.mp3',

    words: ['我', '早上', '七', '点', '起床'],

    fillAnswer: '七',

    choices: [

      { text: 'I get up at 7 AM.', correct: true },

      { text: 'I get up at 8 AM.', correct: false },

      { text: 'I go to bed at 7 AM.', correct: false },

      { text: 'I get up at 7 PM.', correct: false }

    ],

    vocab: '早上 (morning) · 七 (seven) · 点 (o\'clock) · 起床 (get up)',

    pattern: 'Subject + Time + Verb',

    context: '? Daily routine',

    culture: 'Chinese people traditionally wake up early and go to bed early.'

  },

  {

    id: 'hsk1_099',

    chinese: '我想去商店买点儿东西。',

    pinyin: 'Wǒ xiǎng qù shāngdiàn mǎi diǎnr dōngxi.',

    translation: 'I want to go to the store to buy some things.',

    audioUrl: '/audio/hsk1_099.mp3',

    words: ['我', '想', '去', '商店', '买', '点儿', '东西'],

    fillAnswer: '点儿',

    choices: [

      { text: 'I want to go to the store to buy some things.', correct: true },

      { text: 'I go to the store to buy things.', correct: false },

      { text: 'I want to buy some things.', correct: false },

      { text: 'I want to go to the supermarket.', correct: false }

    ],

    vocab: '想 (want) · 去 (go) · 商店 (store) · 买 (buy) · 点儿 (a little) · 东西 (things)',

    pattern: 'Subject + 想 + 去 + Place + 买 + Object (Serial verbs)',

    context: '?? Planning to shop',

    culture: 'Chinese people often go to stores to buy things.'

  },

  {

    id: 'hsk1_100',

    chinese: '你做什么工作？',

    pinyin: 'Nǐ zuò shénme gōngzuò?',

    translation: 'What kind of work do you do?',

    audioUrl: '/audio/hsk1_100.mp3',

    words: ['你', '做', '什么', '工作'],

    fillAnswer: '工作',

    choices: [

      { text: 'What kind of work do you do?', correct: true },

      { text: 'Where do you work?', correct: false },

      { text: 'What is your job?', correct: false },

      { text: 'Do you work?', correct: false }

    ],

    vocab: '做 (do) · 什么 (what) · 工作 (work/job)',

    pattern: 'Subject + 做 + 什么 + Noun？',

    context: '?? Asking about job',

    culture: 'Chinese people often ask about each other\'s jobs when first meeting.'

  },



  // ============ 购物与数字 (101-120) ============

  {

    id: 'hsk1_101',

    chinese: '这个多少钱？',

    pinyin: 'Zhège duōshao qián?',

    translation: 'How much is this?',

    audioUrl: '/audio/hsk1_101.mp3',

    words: ['这个', '多少', '钱'],

    fillAnswer: '多少',

    choices: [

      { text: 'How much is this?', correct: true },

      { text: 'How many is this?', correct: false },

      { text: 'How are you?', correct: false },

      { text: 'Where is this?', correct: false }

    ],

    vocab: '这个 (this) · 多少 (how much) · 钱 (money)',

    pattern: 'Subject + 多少钱？',

    context: '?? Shopping · Asking price',

    culture: 'A must-know phrase for shopping!'

  },

  {

    id: 'hsk1_102',

    chinese: '太贵了！',

    pinyin: 'Tài guì le!',

    translation: 'Too expensive!',

    audioUrl: '/audio/hsk1_102.mp3',

    words: ['太', '贵', '了'],

    fillAnswer: '贵',

    choices: [

      { text: 'Too expensive!', correct: true },

      { text: 'Very cheap!', correct: false },

      { text: 'Very good!', correct: false },

      { text: 'Too much!', correct: false }

    ],

    vocab: '太 (too) · 贵 (expensive) · 了 (emphasis)',

    pattern: '太 + Adj + 了',

    context: '?? Shopping · Reacting to price',

    culture: 'Bargaining is common in Chinese markets.'

  },

  {

    id: 'hsk1_103',

    chinese: '很便宜。',

    pinyin: 'Hěn piányi.',

    translation: 'Very cheap.',

    audioUrl: '/audio/hsk1_103.mp3',

    words: ['很', '便宜'],

    fillAnswer: '便宜',

    choices: [

      { text: 'Very cheap.', correct: true },

      { text: 'Very expensive.', correct: false },

      { text: 'Very good.', correct: false },

      { text: 'Too cheap.', correct: false }

    ],

    vocab: '很 (very) · 便宜 (cheap)',

    pattern: '很 + Adj',

    context: '?? Shopping · Price comment',

    culture: 'Chinese people like buying things that are cheap.'

  },

  {

    id: 'hsk1_104',

    chinese: '你们学校有多少学生？',

    pinyin: 'Nǐmen xuéxiào yǒu duōshao xuésheng?',

    translation: 'How many students are there in your school?',

    audioUrl: '/audio/hsk1_104.mp3',

    words: ['你们', '学校', '有', '多少', '学生'],

    fillAnswer: '多少',

    choices: [

      { text: 'How many students are there in your school?', correct: true },

      { text: 'Are there many students in your school?', correct: false },

      { text: 'How many schools do you have?', correct: false },

      { text: 'Where is your school?', correct: false }

    ],

    vocab: '学校 (school) · 有 (have) · 多少 (how many) · 学生 (student)',

    pattern: 'Place + 有 + 多少 + Noun？',

    context: '?? Asking about quantity',

    culture: 'Chinese schools often have many students.'

  },

  {

    id: 'hsk1_105',

    chinese: '我家有三口人。',

    pinyin: 'Wǒ jiā yǒu sān kǒu rén.',

    translation: 'There are three people in my family.',

    audioUrl: '/audio/hsk1_105.mp3',

    words: ['我', '家', '有', '三', '口', '人'],

    fillAnswer: '口',

    choices: [

      { text: 'There are three people in my family.', correct: true },

      { text: 'I have three family members.', correct: false },

      { text: 'There are three people in my home.', correct: false },

      { text: 'I have three children.', correct: false }

    ],

    vocab: '家 (family) · 有 (have) · 三 (three) · 口 (measure for family) · 人 (people)',

    pattern: 'Place + 有 + Number + 口 + 人',

    context: '???????? Talking about family',

    culture: 'A typical Chinese family has 3-4 people.'

  },

  {

    id: 'hsk1_106',

    chinese: '你有一个儿子？',

    pinyin: 'Nǐ yǒu yī gè érzi?',

    translation: 'Do you have a son?',

    audioUrl: '/audio/hsk1_106.mp3',

    words: ['你', '有', '一', '个', '儿子'],

    fillAnswer: '个',

    choices: [

      { text: 'Do you have a son?', correct: true },

      { text: 'I have a son.', correct: false },

      { text: 'Do you have a daughter?', correct: false },

      { text: 'You have one son.', correct: false }

    ],

    vocab: '有 (have) · 一 (one) · 个 (measure) · 儿子 (son)',

    pattern: 'Subject + 有 + Number + 个 + Noun？',

    context: '????? Family questions',

    culture: 'Traditional preference for sons is changing in China.'

  },

  {

    id: 'hsk1_107',

    chinese: '我有两个女儿。',

    pinyin: 'Wǒ yǒu liǎng gè nǚ\'ér.',

    translation: 'I have two daughters.',

    audioUrl: '/audio/hsk1_107.mp3',

    words: ['我', '有', '两', '个', '女儿'],

    fillAnswer: '两',

    choices: [

      { text: 'I have two daughters.', correct: true },

      { text: 'I have two sons.', correct: false },

      { text: 'I have a daughter.', correct: false },

      { text: 'I have two children.', correct: false }

    ],

    vocab: '有 (have) · 两 (two) · 个 (measure) · 女儿 (daughter)',

    pattern: 'Subject + 有 + Number + 个 + Noun',

    context: '????? Family',

    culture: '"两" is used before measure words, "二" for numbers.'

  },

  {

    id: 'hsk1_108',

    chinese: '那本书是谁的？',

    pinyin: 'Nà běn shū shì shéi de?',

    translation: 'Whose book is that?',

    audioUrl: '/audio/hsk1_108.mp3',

    words: ['那', '本', '书', '是', '谁', '的'],

    fillAnswer: '谁',

    choices: [

      { text: 'Whose book is that?', correct: true },

      { text: 'Is that your book?', correct: false },

      { text: 'Whose book is this?', correct: false },

      { text: 'That book is mine.', correct: false }

    ],

    vocab: '那 (that) · 本 (measure) · 书 (book) · 是 (to be) · 谁 (who) · 的 (possession)',

    pattern: 'Subject + 是 + 谁的 + Noun？',

    context: '? Asking ownership',

    culture: '"谁的" is used to ask about the owner of an item.'

  },

  {

    id: 'hsk1_109',

    chinese: '这是谁的手机？',

    pinyin: 'Zhè shì shéi de shǒujī?',

    translation: 'Whose phone is this?',

    audioUrl: '/audio/hsk1_109.mp3',

    words: ['这', '是', '谁', '的', '手机'],

    fillAnswer: '谁',

    choices: [

      { text: 'Whose phone is this?', correct: true },

      { text: 'Is this your phone?', correct: false },

      { text: 'Whose phone is that?', correct: false },

      { text: 'This is my phone.', correct: false }

    ],

    vocab: '这 (this) · 是 (to be) · 谁 (who) · 的 (possession) · 手机 (phone)',

    pattern: 'Subject + 是 + 谁的 + Noun？',

    context: '? Asking ownership',

    culture: 'Phones are the most valuable personal item for modern people.'

  },

  {

    id: 'hsk1_110',

    chinese: '这本书是我的。',

    pinyin: 'Zhè běn shū shì wǒ de.',

    translation: 'This book is mine.',

    audioUrl: '/audio/hsk1_110.mp3',

    words: ['这', '本', '书', '是', '我', '的'],

    fillAnswer: '的',

    choices: [

      { text: 'This book is mine.', correct: true },

      { text: 'This book is yours.', correct: false },

      { text: 'That book is mine.', correct: false },

      { text: 'This is my book.', correct: false }

    ],

    vocab: '这 (this) · 本 (measure) · 书 (book) · 是 (to be) · 我 (I) · 的 (possession)',

    pattern: 'Subject + 是 + Possessor + 的',

    context: '?? Stating ownership',

    culture: '"的" structure can be used independently.'

  },

  {

    id: 'hsk1_111',

    chinese: '那是谁的房子？',

    pinyin: 'Nà shì shéi de fángzi?',

    translation: 'Whose house is that?',

    audioUrl: '/audio/hsk1_111.mp3',

    words: ['那', '是', '谁', '的', '房子'],

    fillAnswer: '房子',

    choices: [

      { text: 'Whose house is that?', correct: true },

      { text: 'Is that your house?', correct: false },

      { text: 'Whose house is this?', correct: false },

      { text: 'That is my house.', correct: false }

    ],

    vocab: '那 (that) · 是 (to be) · 谁 (who) · 的 (possession) · 房子 (house)',

    pattern: 'Subject + 是 + 谁的 + Noun？',

    context: '?? Asking ownership',

    culture: 'Housing prices are a hot topic in China.'

  },

  {

    id: 'hsk1_112',

    chinese: '你有几个朋友？',

    pinyin: 'Nǐ yǒu jǐ gè péngyou?',

    translation: 'How many friends do you have?',

    audioUrl: '/audio/hsk1_112.mp3',

    words: ['你', '有', '几', '个', '朋友'],

    fillAnswer: '几',

    choices: [

      { text: 'How many friends do you have?', correct: true },

      { text: 'Do you have many friends?', correct: false },

      { text: 'How many people do you have?', correct: false },

      { text: 'Do you have friends?', correct: false }

    ],

    vocab: '有 (have) · 几 (how many) · 个 (measure) · 朋友 (friend)',

    pattern: 'Subject + 有 + 几 + 个 + Noun？',

    context: '?? Asking about quantity',

    culture: '"几" is used for small quantities.'

  },

  {

    id: 'hsk1_113',

    chinese: '我有很多朋友。',

    pinyin: 'Wǒ yǒu hěn duō péngyou.',

    translation: 'I have a lot of friends.',

    audioUrl: '/audio/hsk1_113.mp3',

    words: ['我', '有', '很', '多', '朋友'],

    fillAnswer: '多',

    choices: [

      { text: 'I have a lot of friends.', correct: true },

      { text: 'I have many friends.', correct: false },

      { text: 'I have few friends.', correct: false },

      { text: 'I have some friends.', correct: false }

    ],

    vocab: '有 (have) · 很多 (a lot) · 朋友 (friends)',

    pattern: 'Subject + 有 + 很多 + Noun',

    context: '?? Talking about relationships',

    culture: 'Chinese people value friendships highly.'

  },

  {

    id: 'hsk1_114',

    chinese: '他在前面走。',

    pinyin: 'Tā zài qiánmiàn zǒu.',

    translation: 'He is walking in front.',

    audioUrl: '/audio/hsk1_114.mp3',

    words: ['他', '在', '前面', '走'],

    fillAnswer: '前面',

    choices: [

      { text: 'He is walking in front.', correct: true },

      { text: 'He is walking behind.', correct: false },

      { text: 'He is walking here.', correct: false },

      { text: 'He is walking there.', correct: false }

    ],

    vocab: '在 (at) · 前面 (in front) · 走 (walk)',

    pattern: 'Subject + 在 + Location + Verb',

    context: '?? Describing position',

    culture: 'Location words: 前面, 后面, 左面, 右面 are important.'

  },

  {

    id: 'hsk1_115',

    chinese: '她在后面等你。',

    pinyin: 'Tā zài hòumiàn děng nǐ.',

    translation: 'She is waiting for you in the back.',

    audioUrl: '/audio/hsk1_115.mp3',

    words: ['她', '在', '后面', '等', '你'],

    fillAnswer: '后面',

    choices: [

      { text: 'She is waiting for you in the back.', correct: true },

      { text: 'She is waiting for you in front.', correct: false },

      { text: 'She is behind you.', correct: false },

      { text: 'She is waiting for me.', correct: false }

    ],

    vocab: '在 (at) · 后面 (behind) · 等 (wait) · 你 (you)',

    pattern: 'Subject + 在 + Location + Verb + Object',

    context: '?? Describing position',

    culture: 'Chinese people like to meet at specific locations in public places.'

  },

  {

    id: 'hsk1_116',

    chinese: '小狗在桌子下面。',

    pinyin: 'Xiǎo gǒu zài zhuōzi xiàmiàn.',

    translation: 'The puppy is under the table.',

    audioUrl: '/audio/hsk1_116.mp3',

    words: ['小', '狗', '在', '桌子', '下面'],

    fillAnswer: '下面',

    choices: [

      { text: 'The puppy is under the table.', correct: true },

      { text: 'The cat is under the table.', correct: false },

      { text: 'The puppy is on the table.', correct: false },

      { text: 'The puppy is near the table.', correct: false }

    ],

    vocab: '小狗 (puppy) · 在 (at) · 桌子 (table) · 下面 (under)',

    pattern: 'Subject + 在 + Place + 下面',

    context: '?? Describing location',

    culture: 'Chinese people love keeping small dogs as pets.'

  },

  {

    id: 'hsk1_117',

    chinese: '咱们回家吧！',

    pinyin: 'Zánmen huí jiā ba!',

    translation: 'Let\'s go home!',

    audioUrl: '/audio/hsk1_117.mp3',

    words: ['咱们', '回', '家', '吧'],

    fillAnswer: '吧',

    choices: [

      { text: 'Let\'s go home!', correct: true },

      { text: 'We go home.', correct: false },

      { text: 'I go home.', correct: false },

      { text: 'Let\'s eat!', correct: false }

    ],

    vocab: '咱们 (we/us) · 回 (return) · 家 (home) · 吧 (suggestion)',

    pattern: 'Subject + Verb + Object + 吧',

    context: '?? Making suggestions',

    culture: '"咱们" includes the listener, "我们" may not.'

  },

  {

    id: 'hsk1_118',

    chinese: '咱们吃饭吧！',

    pinyin: 'Zánmen chī fàn ba!',

    translation: 'Let\'s eat!',

    audioUrl: '/audio/hsk1_118.mp3',

    words: ['咱们', '吃', '饭', '吧'],

    fillAnswer: '吧',

    choices: [

      { text: 'Let\'s eat!', correct: true },

      { text: 'We eat.', correct: false },

      { text: 'I want to eat.', correct: false },

      { text: 'Let\'s go!', correct: false }

    ],

    vocab: '咱们 (we) · 吃 (eat) · 饭 (meal) · 吧 (suggestion)',

    pattern: 'Subject + Verb + Object + 吧',

    context: '??? Making suggestions',

    culture: '"吧" makes suggestions sound more friendly.'

  },

  {

    id: 'hsk1_119',

    chinese: '我们走吧！',

    pinyin: 'Wǒmen zǒu ba!',

    translation: 'Let\'s go!',

    audioUrl: '/audio/hsk1_119.mp3',

    words: ['我们', '走', '吧'],

    fillAnswer: '走',

    choices: [

      { text: 'Let\'s go!', correct: true },

      { text: 'We go.', correct: false },

      { text: 'We are leaving.', correct: false },

      { text: 'Let\'s walk!', correct: false }

    ],

    vocab: '我们 (we) · 走 (go/leave) · 吧 (suggestion)',

    pattern: 'Subject + Verb + 吧',

    context: '?? Making suggestions',

    culture: '"走吧" is a very common daily expression.'

  },

  {

    id: 'hsk1_120',

    chinese: '你叫什么？我叫李明。',

    pinyin: 'Nǐ jiào shénme? Wǒ jiào Lǐ Míng.',

    translation: 'What is your name? My name is Li Ming.',

    audioUrl: '/audio/hsk1_120.mp3',

    words: ['你', '叫', '什么', '我', '叫', '李', '明'],

    fillAnswer: '叫',

    choices: [

      { text: 'What is your name? My name is Li Ming.', correct: true },

      { text: 'How are you? I am fine.', correct: false },

      { text: 'Where are you from? I am from China.', correct: false },

      { text: 'How old are you? I am 20.', correct: false }

    ],

    vocab: '叫 (called) · 什么 (what) · 李明 (Li Ming - name)',

    pattern: 'Subject + 叫 + Name',

    context: '?? Introducing yourself',

    culture: 'Chinese names are usually 2 or 3 characters.'

  },



  // ============ 更多日常表达 (121-150) ============

  {

    id: 'hsk1_121',

    chinese: '我今年二十岁。',

    pinyin: 'Wǒ jīnnián èrshí suì.',

    translation: 'I am 20 years old this year.',

    audioUrl: '/audio/hsk1_121.mp3',

    words: ['我', '今年', '二十', '岁'],

    fillAnswer: '二十',

    choices: [

      { text: 'I am 20 years old this year.', correct: true },

      { text: 'I am 20 years old.', correct: false },

      { text: 'I am 12 years old.', correct: false },

      { text: 'I am 20 years old next year.', correct: false }

    ],

    vocab: '今年 (this year) · 二十 (twenty) · 岁 (years old)',

    pattern: 'Subject + Time + Number + 岁',

    context: '?? Telling age',

    culture: 'Chinese people often associate age with zodiac signs.'

  },

  {

    id: 'hsk1_122',

    chinese: '你女儿几岁了？',

    pinyin: 'Nǐ nǚ\'ér jǐ suì le?',

    translation: 'How old is your daughter?',

    audioUrl: '/audio/hsk1_122.mp3',

    words: ['你', '女儿', '几', '岁', '了'],

    fillAnswer: '几',

    choices: [

      { text: 'How old is your daughter?', correct: true },

      { text: 'How old is your son?', correct: false },

      { text: 'Do you have a daughter?', correct: false },

      { text: 'Where is your daughter?', correct: false }

    ],

    vocab: '女儿 (daughter) · 几 (how many) · 岁 (years old) · 了 (change)',

    pattern: 'Subject + 几 + 岁 + 了？',

    context: '????? Asking age of family member',

    culture: 'Asking about children\'s age is a common conversation topic.'

  },

  {

    id: 'hsk1_123',

    chinese: '我女儿三岁了。',

    pinyin: 'Wǒ nǚ\'ér sān suì le.',

    translation: 'My daughter is 3 years old.',

    audioUrl: '/audio/hsk1_123.mp3',

    words: ['我', '女儿', '三', '岁', '了'],

    fillAnswer: '三',

    choices: [

      { text: 'My daughter is 3 years old.', correct: true },

      { text: 'My son is 3 years old.', correct: false },

      { text: 'My daughter is 5 years old.', correct: false },

      { text: 'I have a 3-year-old daughter.', correct: false }

    ],

    vocab: '女儿 (daughter) · 三 (three) · 岁 (years old) · 了 (change)',

    pattern: 'Subject + Number + 岁 + 了',

    context: '????? Talking about family',

    culture: 'Age 3 is when children start kindergarten in China.'

  },

  {

    id: 'hsk1_124',

    chinese: '你妈妈在家吗？',

    pinyin: 'Nǐ māma zài jiā ma?',

    translation: 'Is your mother at home?',

    audioUrl: '/audio/hsk1_124.mp3',

    words: ['你', '妈妈', '在', '家', '吗'],

    fillAnswer: '在',

    choices: [

      { text: 'Is your mother at home?', correct: true },

      { text: 'Where is your mother?', correct: false },

      { text: 'Is your father at home?', correct: false },

      { text: 'Your mother is at home.', correct: false }

    ],

    vocab: '妈妈 (mother) · 在 (at) · 家 (home) · 吗 (question)',

    pattern: 'Subject + 在 + Place + 吗？',

    context: '?? Asking location',

    culture: 'Chinese families have strong family values.'

  },

  {

    id: 'hsk1_125',

    chinese: '爸爸在家。',

    pinyin: 'Bàba zài jiā.',

    translation: 'Dad is at home.',

    audioUrl: '/audio/hsk1_125.mp3',

    words: ['爸爸', '在', '家'],

    fillAnswer: '在',

    choices: [

      { text: 'Dad is at home.', correct: true },

      { text: 'Mom is at home.', correct: false },

      { text: 'Dad is not at home.', correct: false },

      { text: 'Dad is here.', correct: false }

    ],

    vocab: '爸爸 (father) · 在 (at) · 家 (home)',

    pattern: 'Subject + 在 + Place',

    context: '?? Stating location',

    culture: 'The father traditionally has a high status in Chinese families.'

  },

  {

    id: 'hsk1_126',

    chinese: '我不认识那个人。',

    pinyin: 'Wǒ bù rènshi nà ge rén.',

    translation: 'I don\'t know that person.',

    audioUrl: '/audio/hsk1_126.mp3',

    words: ['我', '不', '认识', '那', '个', '人'],

    fillAnswer: '不',

    choices: [

      { text: 'I don\'t know that person.', correct: true },

      { text: 'I know that person.', correct: false },

      { text: 'I don\'t like that person.', correct: false },

      { text: 'I don\'t see that person.', correct: false }

    ],

    vocab: '不 (not) · 认识 (know) · 那个人 (that person)',

    pattern: 'Subject + 不 + Verb + Object',

    context: '?? Talking about people',

    culture: '"不认识" is for people, "不知道" is for facts.'

  },

  {

    id: 'hsk1_127',

    chinese: '她不在家。',

    pinyin: 'Tā bù zài jiā.',

    translation: 'She is not at home.',

    audioUrl: '/audio/hsk1_127.mp3',

    words: ['她', '不', '在', '家'],

    fillAnswer: '不',

    choices: [

      { text: 'She is not at home.', correct: true },

      { text: 'She is at home.', correct: false },

      { text: 'She is not here.', correct: false },

      { text: 'She is not at school.', correct: false }

    ],

    vocab: '不 (not) · 在 (at) · 家 (home)',

    pattern: 'Subject + 不 + 在 + Place',

    context: '?? Stating absence',

    culture: 'Chinese people often visit each other, so "not at home" is common.'

  },

  {

    id: 'hsk1_128',

    chinese: '我不是学生。',

    pinyin: 'Wǒ bù shì xuésheng.',

    translation: 'I am not a student.',

    audioUrl: '/audio/hsk1_128.mp3',

    words: ['我', '不', '是', '学生'],

    fillAnswer: '不',

    choices: [

      { text: 'I am not a student.', correct: true },

      { text: 'I am a student.', correct: false },

      { text: 'I am not a teacher.', correct: false },

      { text: 'You are not a student.', correct: false }

    ],

    vocab: '不 (not) · 是 (to be) · 学生 (student)',

    pattern: 'Subject + 不 + 是 + Noun',

    context: '?? Negating identity',

    culture: '"不是" is the most basic negation expression.'

  },

  {

    id: 'hsk1_129',

    chinese: '他不在医院工作。',

    pinyin: 'Tā bù zài yīyuàn gōngzuò.',

    translation: 'He does not work at the hospital.',

    audioUrl: '/audio/hsk1_129.mp3',

    words: ['他', '不', '在', '医院', '工作'],

    fillAnswer: '不',

    choices: [

      { text: 'He does not work at the hospital.', correct: true },

      { text: 'He works at the hospital.', correct: false },

      { text: 'He is not at the hospital.', correct: false },

      { text: 'He does not work.', correct: false }

    ],

    vocab: '不 (not) · 在 (at) · 医院 (hospital) · 工作 (work)',

    pattern: 'Subject + 不 + 在 + Place + Verb',

    context: '?? Negating location + action',

    culture: 'Negation words come before the verb.'

  },

  {

    id: 'hsk1_130',

    chinese: '我不会开车。',

    pinyin: 'Wǒ bù huì kāichē.',

    translation: 'I cannot drive.',

    audioUrl: '/audio/hsk1_130.mp3',

    words: ['我', '不', '会', '开车'],

    fillAnswer: '会',

    choices: [

      { text: 'I cannot drive.', correct: true },

      { text: 'I can drive.', correct: false },

      { text: 'I don\'t like driving.', correct: false },

      { text: 'I don\'t have a car.', correct: false }

    ],

    vocab: '不 (not) · 会 (can) · 开车 (drive)',

    pattern: 'Subject + 不 + 会 + Verb',

    context: '?? Expressing inability',

    culture: 'More and more people are driving in Chinese cities.'

  },

  {

    id: 'hsk1_131',

    chinese: '你喝茶吗？',

    pinyin: 'Nǐ hē chá ma?',

    translation: 'Do you drink tea?',

    audioUrl: '/audio/hsk1_131.mp3',

    words: ['你', '喝', '茶', '吗'],

    fillAnswer: '喝',

    choices: [

      { text: 'Do you drink tea?', correct: true },

      { text: 'Do you want tea?', correct: false },

      { text: 'Do you like tea?', correct: false },

      { text: 'Are you drinking tea?', correct: false }

    ],

    vocab: '喝 (drink) · 茶 (tea) · 吗 (question)',

    pattern: 'Subject + Verb + Object + 吗？',

    context: '? Asking about preferences',

    culture: 'Tea is one of China\'s most important drinks.'

  },

  {

    id: 'hsk1_132',

    chinese: '她喜欢吃水果。',

    pinyin: 'Tā xǐhuan chī shuǐguǒ.',

    translation: 'She likes to eat fruit.',

    audioUrl: '/audio/hsk1_132.mp3',

    words: ['她', '喜欢', '吃', '水果'],

    fillAnswer: '喜欢',

    choices: [

      { text: 'She likes to eat fruit.', correct: true },

      { text: 'She likes fruit.', correct: false },

      { text: 'She wants to eat fruit.', correct: false },

      { text: 'She is eating fruit.', correct: false }

    ],

    vocab: '喜欢 (like) · 吃 (eat) · 水果 (fruit)',

    pattern: 'Subject + 喜欢 + Verb + Object',

    context: '?? Talking about preferences',

    culture: 'Chinese women especially love eating fruit.'

  },

  {

    id: 'hsk1_133',

    chinese: '你想喝点儿什么？',

    pinyin: 'Nǐ xiǎng hē diǎnr shénme?',

    translation: 'What would you like to drink?',

    audioUrl: '/audio/hsk1_133.mp3',

    words: ['你', '想', '喝', '点儿', '什么'],

    fillAnswer: '点儿',

    choices: [

      { text: 'What would you like to drink?', correct: true },

      { text: 'What would you like to eat?', correct: false },

      { text: 'Do you want to drink something?', correct: false },

      { text: 'Are you drinking?', correct: false }

    ],

    vocab: '想 (want) · 喝 (drink) · 点儿 (a little) · 什么 (what)',

    pattern: 'Subject + 想 + Verb + 点儿 + 什么？',

    context: '? Restaurant/Cafe · Serving',

    culture: '"点儿" makes the invitation more polite.'

  },

  {

    id: 'hsk1_134',

    chinese: '我儿子喜欢吃米饭。',

    pinyin: 'Wǒ érzi xǐhuan chī mǐfàn.',

    translation: 'My son likes to eat rice.',

    audioUrl: '/audio/hsk1_134.mp3',

    words: ['我', '儿子', '喜欢', '吃', '米饭'],

    fillAnswer: '喜欢',

    choices: [

      { text: 'My son likes to eat rice.', correct: true },

      { text: 'My daughter likes to eat rice.', correct: false },

      { text: 'My son likes noodles.', correct: false },

      { text: 'My son eats rice.', correct: false }

    ],

    vocab: '儿子 (son) · 喜欢 (like) · 吃 (eat) · 米饭 (rice)',

    pattern: 'Subject + 喜欢 + Verb + Object',

    context: '?? Talking about food preferences',

    culture: 'Southern Chinese people love rice.'

  },

  {

    id: 'hsk1_135',

    chinese: '我妈妈做的菜很好吃。',

    pinyin: 'Wǒ māma zuò de cài hěn hàochī.',

    translation: 'My mother\'s cooking is very delicious.',

    audioUrl: '/audio/hsk1_135.mp3',

    words: ['我', '妈妈', '做', '的', '菜', '很', '好吃'],

    fillAnswer: '好吃',

    choices: [

      { text: 'My mother\'s cooking is very delicious.', correct: true },

      { text: 'My mother makes delicious food.', correct: false },

      { text: 'My mother is a good cook.', correct: false },

      { text: 'My mother cooks well.', correct: false }

    ],

    vocab: '妈妈 (mother) · 做 (make) · 的 (nominalization) · 菜 (food) · 很 (very) · 好吃 (delicious)',

    pattern: 'Possessor + Verb + 的 + Noun + 很 + Adj',

    context: '?? Complimenting food',

    culture: 'Chinese cuisine is world-famous, and mom\'s cooking is the most special.'

  },

  {

    id: 'hsk1_136',

    chinese: '她是一个漂亮的女孩子。',

    pinyin: 'Tā shì yī gè piàoliang de nǚ háizi.',

    translation: 'She is a beautiful girl.',

    audioUrl: '/audio/hsk1_136.mp3',

    words: ['她', '是', '一', '个', '漂亮', '的', '女', '孩子'],

    fillAnswer: '漂亮',

    choices: [

      { text: 'She is a beautiful girl.', correct: true },

      { text: 'She is a beautiful woman.', correct: false },

      { text: 'She is a pretty girl.', correct: false },

      { text: 'She is a nice girl.', correct: false }

    ],

    vocab: '是 (to be) · 一个 (a) · 漂亮 (beautiful) · 的 (modifier) · 女孩子 (girl)',

    pattern: 'Subject + 是 + 形容词 + 的 + Noun',

    context: '?? Describing people',

    culture: 'Complimenting someone\'s appearance is common social behavior.'

  },

  {

    id: 'hsk1_137',

    chinese: '他是我哥哥。',

    pinyin: 'Tā shì wǒ gēge.',

    translation: 'He is my older brother.',

    audioUrl: '/audio/hsk1_137.mp3',

    words: ['他', '是', '我', '哥哥'],

    fillAnswer: '哥哥',

    choices: [

      { text: 'He is my older brother.', correct: true },

      { text: 'He is my younger brother.', correct: false },

      { text: 'She is my sister.', correct: false },

      { text: 'He is my friend.', correct: false }

    ],

    vocab: '是 (to be) · 我 (my) · 哥哥 (older brother)',

    pattern: 'Subject + 是 + Possessor + Noun',

    context: '???????? Family introductions',

    culture: 'Chinese distinguishes between older/younger brothers and sisters.'

  },

  {

    id: 'hsk1_138',

    chinese: '她是我姐姐。',

    pinyin: 'Tā shì wǒ jiějie.',

    translation: 'She is my older sister.',

    audioUrl: '/audio/hsk1_138.mp3',

    words: ['她', '是', '我', '姐姐'],

    fillAnswer: '姐姐',

    choices: [

      { text: 'She is my older sister.', correct: true },

      { text: 'She is my younger sister.', correct: false },

      { text: 'She is my friend.', correct: false },

      { text: 'He is my brother.', correct: false }

    ],

    vocab: '是 (to be) · 我 (my) · 姐姐 (older sister)',

    pattern: 'Subject + 是 + Possessor + Noun',

    context: '???????? Family introductions',

    culture: 'Chinese family terms are more specific than English.'

  },

  {

    id: 'hsk1_139',

    chinese: '你有妹妹吗？',

    pinyin: 'Nǐ yǒu mèimei ma?',

    translation: 'Do you have a younger sister?',

    audioUrl: '/audio/hsk1_139.mp3',

    words: ['你', '有', '妹妹', '吗'],

    fillAnswer: '妹妹',

    choices: [

      { text: 'Do you have a younger sister?', correct: true },

      { text: 'Do you have an older sister?', correct: false },

      { text: 'Do you have a sister?', correct: false },

      { text: 'Do you have a brother?', correct: false }

    ],

    vocab: '有 (have) · 妹妹 (younger sister) · 吗 (question)',

    pattern: 'Subject + 有 + Noun + 吗？',

    context: '???????? Family questions',

    culture: 'The one-child policy has affected Chinese family structures.'

  },

  {

    id: 'hsk1_140',

    chinese: '我没有弟弟。',

    pinyin: 'Wǒ méiyǒu dìdi.',

    translation: 'I don\'t have a younger brother.',

    audioUrl: '/audio/hsk1_140.mp3',

    words: ['我', '没有', '弟弟'],

    fillAnswer: '没有',

    choices: [

      { text: 'I don\'t have a younger brother.', correct: true },

      { text: 'I don\'t have a brother.', correct: false },

      { text: 'I have a brother.', correct: false },

      { text: 'I don\'t have an older brother.', correct: false }

    ],

    vocab: '没有 (don\'t have) · 弟弟 (younger brother)',

    pattern: 'Subject + 没有 + Noun',

    context: '???????? Family questions',

    culture: '"没有" = 不 + 有.'

  },

  {

    id: 'hsk1_141',

    chinese: '你最近怎么样？',

    pinyin: 'Nǐ zuìjìn zěnmeyàng?',

    translation: 'How are you lately?',

    audioUrl: '/audio/hsk1_141.mp3',

    words: ['你', '最近', '怎么样'],

    fillAnswer: '怎么样',

    choices: [

      { text: 'How are you lately?', correct: true },

      { text: 'What are you doing lately?', correct: false },

      { text: 'How is everything?', correct: false },

      { text: 'Are you okay?', correct: false }

    ],

    vocab: '最近 (lately) · 怎么样 (how)',

    pattern: 'Subject + 最近 + 怎么样？',

    context: '?? Greeting · Caring',

    culture: '"最近怎么样" is used to show care for others.'

  },

  {

    id: 'hsk1_142',

    chinese: '你身体怎么样？',

    pinyin: 'Nǐ shēntǐ zěnmeyàng?',

    translation: 'How is your health?',

    audioUrl: '/audio/hsk1_142.mp3',

    words: ['你', '身体', '怎么样'],

    fillAnswer: '怎么样',

    choices: [

      { text: 'How is your health?', correct: true },

      { text: 'How are you?', correct: false },

      { text: 'What is your body like?', correct: false },

      { text: 'Are you healthy?', correct: false }

    ],

    vocab: '身体 (body/health) · 怎么样 (how)',

    pattern: 'Subject + 身体 + 怎么样？',

    context: '?? Caring for others',

    culture: 'Chinese people care a lot about family members\' health.'

  },

  {

    id: 'hsk1_143',

    chinese: '我今天很忙。',

    pinyin: 'Wǒ jīntiān hěn máng.',

    translation: 'I am very busy today.',

    audioUrl: '/audio/hsk1_143.mp3',

    words: ['我', '今天', '很', '忙'],

    fillAnswer: '忙',

    choices: [

      { text: 'I am very busy today.', correct: true },

      { text: 'I am very free today.', correct: false },

      { text: 'I am very tired today.', correct: false },

      { text: 'I am very happy today.', correct: false }

    ],

    vocab: '今天 (today) · 很 (very) · 忙 (busy)',

    pattern: 'Subject + Time + 很 + Adj',

    context: '?? Daily life',

    culture: 'Modern Chinese people often say they are "忙".'

  },

  {

    id: 'hsk1_144',

    chinese: '你忙不忙？',

    pinyin: 'Nǐ máng bù máng?',

    translation: 'Are you busy?',

    audioUrl: '/audio/hsk1_144.mp3',

    words: ['你', '忙', '不', '忙'],

    fillAnswer: '忙',

    choices: [

      { text: 'Are you busy?', correct: true },

      { text: 'Are you free?', correct: false },

      { text: 'Are you tired?', correct: false },

      { text: 'Are you happy?', correct: false }

    ],

    vocab: '忙 (busy) · 不 (not)',

    pattern: 'Subject + Adj + 不 + Adj？',

    context: '?? Asking about availability',

    culture: '"Adj不Adj" is an important HSK1 question pattern.'

  },

  {

    id: 'hsk1_145',

    chinese: '这个汉字你会写吗？',

    pinyin: 'Zhège Hànzì nǐ huì xiě ma?',

    translation: 'Can you write this Chinese character?',

    audioUrl: '/audio/hsk1_145.mp3',

    words: ['这个', '汉字', '你', '会', '写', '吗'],

    fillAnswer: '会',

    choices: [

      { text: 'Can you write this Chinese character?', correct: true },

      { text: 'Do you know this character?', correct: false },

      { text: 'Can you read this character?', correct: false },

      { text: 'Can you write Chinese?', correct: false }

    ],

    vocab: '汉字 (Chinese character) · 会 (can) · 写 (write) · 吗 (question)',

    pattern: 'Subject + 会 + Verb + Object + 吗？',

    context: '?? Learning Chinese',

    culture: 'Chinese characters are one of the biggest challenges in learning Chinese.'

  },

  {

    id: 'hsk1_146',

    chinese: '这个字怎么读？',

    pinyin: 'Zhège zì zěnme dú?',

    translation: 'How do you read this character?',

    audioUrl: '/audio/hsk1_146.mp3',

    words: ['这个', '字', '怎么', '读'],

    fillAnswer: '怎么',

    choices: [

      { text: 'How do you read this character?', correct: true },

      { text: 'Can you read this character?', correct: false },

      { text: 'What does this character mean?', correct: false },

      { text: 'How do you write this character?', correct: false }

    ],

    vocab: '这个 (this) · 字 (character) · 怎么 (how) · 读 (read)',

    pattern: 'Subject + 怎么 + Verb？',

    context: '?? Learning Chinese',

    culture: 'Beginners often ask "这个字怎么读"?'

  },

  {

    id: 'hsk1_147',

    chinese: '你的中文很好。',

    pinyin: 'Nǐ de Zhōngwén hěn hǎo.',

    translation: 'Your Chinese is very good.',

    audioUrl: '/audio/hsk1_147.mp3',

    words: ['你', '的', '中文', '很', '好'],

    fillAnswer: '好',

    choices: [

      { text: 'Your Chinese is very good.', correct: true },

      { text: 'Your Chinese is bad.', correct: false },

      { text: 'You speak Chinese well.', correct: false },

      { text: 'Your Chinese is getting better.', correct: false }

    ],

    vocab: '的 (possession) · 中文 (Chinese language) · 很 (very) · 好 (good)',

    pattern: 'Possessor + 的 + Noun + 很 + Adj',

    context: '??? Complimenting language ability',

    culture: 'Chinese people often encourage foreigners by saying "很好".'

  },

  {

    id: 'hsk1_148',

    chinese: '我每天学汉语。',

    pinyin: 'Wǒ měitiān xué Hànyǔ.',

    translation: 'I study Chinese every day.',

    audioUrl: '/audio/hsk1_148.mp3',

    words: ['我', '每天', '学', '汉语'],

    fillAnswer: '每天',

    choices: [

      { text: 'I study Chinese every day.', correct: true },

      { text: 'I study Chinese today.', correct: false },

      { text: 'I study Chinese every week.', correct: false },

      { text: 'I like studying Chinese.', correct: false }

    ],

    vocab: '每天 (every day) · 学 (study) · 汉语 (Chinese)',

    pattern: 'Subject + Time + Verb + Object',

    context: '?? Study routine',

    culture: 'Learning Chinese requires daily practice.'

  },

  {

    id: 'hsk1_149',

    chinese: '我要去北京。',

    pinyin: 'Wǒ yào qù Běijīng.',

    translation: 'I am going to Beijing.',

    audioUrl: '/audio/hsk1_149.mp3',

    words: ['我', '要', '去', '北京'],

    fillAnswer: '要',

    choices: [

      { text: 'I am going to Beijing.', correct: true },

      { text: 'I want to go to Beijing.', correct: false },

      { text: 'I went to Beijing.', correct: false },

      { text: 'I will go to Beijing.', correct: false }

    ],

    vocab: '要 (will/want) · 去 (go) · 北京 (Beijing)',

    pattern: 'Subject + 要 + Verb + Place',

    context: '?? Making plans',

    culture: 'Beijing is the capital of China and a popular tourist destination.'

  },

  {

    id: 'hsk1_150',

    chinese: '你工作忙吗？',

    pinyin: 'Nǐ gōngzuò máng ma?',

    translation: 'Is your work busy?',

    audioUrl: '/audio/hsk1_150.mp3',

    words: ['你', '工作', '忙', '吗'],

    fillAnswer: '忙',

    choices: [

      { text: 'Is your work busy?', correct: true },

      { text: 'Are you busy with work?', correct: false },

      { text: 'Is your job busy?', correct: false },

      { text: 'Do you work?', correct: false }

    ],

    vocab: '工作 (work) · 忙 (busy) · 吗 (question)',

    pattern: 'Subject + Noun + Adj + 吗？',

    context: '?? Work life',

    culture: 'Chinese people have busy work lives, so "工作忙吗" is common.'

  }

];



// ============================================================

// 批量添加 audioUrl（如果已有则保留，没有则自动生成）

// ============================================================

HSK1_SENTENCES = HSK1_SENTENCES.map(function(s) {

  if (!s.audioUrl) {

    s.audioUrl = '/audio/' + s.id + '.mp3';

  }

  return s;

});



// 导出数据

if (typeof module !== 'undefined' && module.exports) {

  module.exports = { HSK1_SENTENCES };

}