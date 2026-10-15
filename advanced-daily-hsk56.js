(function () {
  const base = window.STORIES_DATA || { stories: [] };
  const advancedDailyStories = [
  {
    "columnId": "advanced_daily_01",
    "title": "职场晋升与职业规划 \u00b7 Career Promotion & Professional Planning",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "职",
    "coverClass": "c1",
    "intro": "Explore advanced Mandarin through career promotion & professional planning, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_001",
        "title": "01. 职场晋升与职业规划",
        "isFree": true,
        "sentence": "经过多年的职场历练，他终于迎来了晋升的机会。",
        "pinyin": "Jīng guò duō nián de zhí chǎng lì liàn, tā zhōng yú yíng lái le jìn shēng de jī huì.",
        "translation": "After years of workplace seasoning, he finally welcomed promotion.",
        "grammarPoint": "高级词汇 (历练/晋升)",
        "vocabList": []
      },
      {
        "id": "adv56_002",
        "title": "02. 职场晋升与职业规划",
        "isFree": true,
        "sentence": "面对新的岗位职责，他展现出了极强的胜任能力。",
        "pinyin": "Miàn duì xīn de gǎng wèi zhí zé, tā zhǎn xiàn chū le jí qiáng de shèng rèn néng lì.",
        "translation": "Facing new responsibilities, he showed strong competency.",
        "grammarPoint": "高级搭配 (胜任能力/展现)",
        "vocabList": []
      },
      {
        "id": "adv56_003",
        "title": "03. 职场晋升与职业规划",
        "isFree": true,
        "sentence": "职业规划不仅要看眼前的薪资，更要关注长远的发展空间。",
        "pinyin": "Zhí yè guī huà bù jǐn yào kàn yǎn qián de xīn zī, gèng yào guān zhù cháng yuǎn de fā zhǎn kōng jiān.",
        "translation": "Career planning looks beyond immediate salary to long-term growth.",
        "grammarPoint": "递进复句 (不仅……更……)",
        "vocabList": []
      },
      {
        "id": "adv56_004",
        "title": "04. 职场晋升与职业规划",
        "isFree": true,
        "sentence": "主管对他在项目中的卓越表现给予了高度评价。",
        "pinyin": "Zhǔ guǎn duì tā zài xiàng mù zhōng de zhuō yuè biǎo xiàn jǐ yǔ le gāo dù píng jià.",
        "translation": "The supervisor highly praised his exceptional performance.",
        "grammarPoint": "书面语动词 (给予/卓越)",
        "vocabList": []
      },
      {
        "id": "adv56_005",
        "title": "05. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "他深谙职场之道，懂得如何在竞争中保持核心竞争力。",
        "pinyin": "Tā shēn ān zhí chǎng zhī dào, dǒng de rú hé zài jìng zhēng zhōng bǎo chí hé xīn jìng zhēng lì.",
        "translation": "He understands workplace rules and how to maintain core competitiveness.",
        "grammarPoint": "成语与高级词汇 (深谙/核心竞争力)",
        "vocabList": []
      },
      {
        "id": "adv56_006",
        "title": "06. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "跨部门的沟通与协调是这项工作最大的挑战。",
        "pinyin": "Kuà bù mén de gōu tōng yǔ xié tiáo shì zhè xiàng gōng zuò zuì dà de tiǎo zhàn.",
        "translation": "Cross-departmental communication and coordination is the biggest challenge.",
        "grammarPoint": "专业名词 (跨部门/协调)",
        "vocabList": []
      },
      {
        "id": "adv56_007",
        "title": "07. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "为了突破职业瓶颈，他决定利用业余时间进修充电。",
        "pinyin": "Wèi le tū pò zhí yè píng jǐng, tā jué dìng lì yòng yè yú shí jiān jìn xiù chōng diàn.",
        "translation": "To break career bottlenecks, he decided to study in spare time.",
        "grammarPoint": "高级词汇 (瓶颈/进修/充电)",
        "vocabList": []
      },
      {
        "id": "adv56_008",
        "title": "08. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "这次失败并没有打击他的自信，反而激发了他的斗志。",
        "pinyin": "Zhè cì shī bài bìng méi yǒu dǎ jī tā de zì xìn, fǎn ér jī fā le tā de dòu zhì.",
        "translation": "This failure didn't dent his confidence; instead, it sparked his fighting spirit.",
        "grammarPoint": "转折关联 (反而) 与心理描写",
        "vocabList": []
      },
      {
        "id": "adv56_009",
        "title": "09. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "领导赏识他的雷厉风行，委任他全权负责新分公司。",
        "pinyin": "Lǐng dǎo shǎng shi tā de léi lì fēng xíng, wěi rèn tā quán quán fù zé xīn fēn gōng sī.",
        "translation": "Leadership admires his decisiveness, appointing him to head the new branch.",
        "grammarPoint": "成语 (雷厉风行) 与高级动词 (委任)",
        "vocabList": []
      },
      {
        "id": "adv56_010",
        "title": "10. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "他在行业峰会上发表了极具洞察力的主旨演讲。",
        "pinyin": "Tā zài háng yè fēng huì shang fā biǎo le jí jù dòng chá lì de zhǔ zhǐ yǎn jiǎng.",
        "translation": "He delivered an insightful keynote speech at the industry summit.",
        "grammarPoint": "高级成语 (极具洞察力)",
        "vocabList": []
      },
      {
        "id": "adv56_011",
        "title": "11. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "职场如战场，唯有不断迭代认知，才能立于不败之地。",
        "pinyin": "Zhí chǎng rú zhàn chǎng, wéi yǒu bù duàn diē dài rèn zhī, cái néng lì yú bù bài zhī dì.",
        "translation": "Workplace is a battlefield; only continuous cognitive iteration ensures survival.",
        "grammarPoint": "哲理性高级表达 (迭代认知)",
        "vocabList": []
      },
      {
        "id": "adv56_012",
        "title": "12. 职场晋升与职业规划",
        "isFree": false,
        "sentence": "他始终保持着居安思危的意识，未雨绸缪应对行业变革。",
        "pinyin": "Tā shǐ zhōng bǎo chí zhe jū ān sī wēi de yì shi, wèi yǔ chóu móu yìng duì háng yè biàn gé.",
        "translation": "He always maintains crisis awareness, preparing beforehand for industry shifts.",
        "grammarPoint": "高级成语 (居安思危/未雨绸缪)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_02",
    "title": "深度人际交往与社交艺术 \u00b7 Advanced Socializing & Interpersonal Art",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "深",
    "coverClass": "c2",
    "intro": "Explore advanced Mandarin through advanced socializing & interpersonal art, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_013",
        "title": "01. 深度人际交往与社交艺术",
        "isFree": true,
        "sentence": "高情商的社交不仅是八面玲珑，更是真诚地倾听。",
        "pinyin": "Gāo qíng shāng de shè jiāo bù jǐn shì bā miàn líng lóng, gèng shì zhēn chéng de qīng tīng.",
        "translation": "High EQ socializing isn't just being smooth, but listening sincerely.",
        "grammarPoint": "成语 (八面玲珑) 与递进复句",
        "vocabList": []
      },
      {
        "id": "adv56_014",
        "title": "02. 深度人际交往与社交艺术",
        "isFree": true,
        "sentence": "在复杂的社交场合中，他总能游刃有余地处理人际关系。",
        "pinyin": "Zài fù zá de shè jiāo chǎng hé zhōng, tā zǒng néng yóu rèn yǒu yú de chǔ lǐ rén jì guān xì.",
        "translation": "In complex social settings, he always handles relationships with ease.",
        "grammarPoint": "成语 (游刃有余)",
        "vocabList": []
      },
      {
        "id": "adv56_015",
        "title": "03. 深度人际交往与社交艺术",
        "isFree": true,
        "sentence": "真正的挚友不必天天联系，但能在关键时刻守望相助。",
        "pinyin": "Zhēn zhèng de zhì yǒu bù bì tiān tiān lián xì, dàn néng zài guān jiàn shí kè shǒu wàng xiāng zhù.",
        "translation": "True friends needn't daily contact, but support each other in crucial times.",
        "grammarPoint": "高级词汇与成语 (挚友/守望相助)",
        "vocabList": []
      },
      {
        "id": "adv56_016",
        "title": "04. 深度人际交往与社交艺术",
        "isFree": true,
        "sentence": "面对别人的无理取闹，他选择淡然处之，不作过多纠缠。",
        "pinyin": "Miàn duì bié rén de wú lǐ qǔ nào, tā xuǎn zé dàn rán chǔ zhī, bù zuò guò duō jiū chán.",
        "translation": "Facing unreasonable fuss, he chooses indifference without excessive entanglement.",
        "grammarPoint": "成语 (淡然处之/无理取闹)",
        "vocabList": []
      },
      {
        "id": "adv56_017",
        "title": "05. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "说话点到为止是一种修养，也是对他人隐私的尊重。",
        "pinyin": "Shuō huà diǎn dào wéi zhǐ shì yī zhǒng xiū yǎng, yě shì duì tā rén yǐn sī de zūn zhòng.",
        "translation": "Speaking suggestively is refinement and respect for others' privacy.",
        "grammarPoint": "熟语 (点到为止) 与高级名词 (修养/隐私)",
        "vocabList": []
      },
      {
        "id": "adv56_018",
        "title": "06. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "他用一番推心置腹的话，成功化解了多年的心结。",
        "pinyin": "Tā yòng yī fān tuī xīn zhì fù de huà, chéng gōng huà jiě le duō nián de xīn jié.",
        "translation": "With heartfelt words, he successfully resolved years of emotional knots.",
        "grammarPoint": "成语 (推心置腹/化解心结)",
        "vocabList": []
      },
      {
        "id": "adv56_019",
        "title": "07. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "社交中把握好边界感，是对彼此最恰当的保护。",
        "pinyin": "Shè jiāo zhōng bǎ wò hǎo biān jiè gǎn, shì duì bǐ cǐ zuì qià dàng de bǎo hù.",
        "translation": "Grasping boundaries in socializing is the most appropriate mutual protection.",
        "grammarPoint": "现代社交热词 (边界感/恰当)",
        "vocabList": []
      },
      {
        "id": "adv56_020",
        "title": "08. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "面对异见时，他委婉地表达了不同观点，顾全了对方面子。",
        "pinyin": "Miàn duì yì jiàn shí, tā wěi wǎn de biǎo dá le bù tóng guān diǎn, gù quán le duì fāng miàn zi.",
        "translation": "Facing dissent, he tactfully expressed different views, saving face for others.",
        "grammarPoint": "高级副词 (委婉) 与成语 (顾全面子)",
        "vocabList": []
      },
      {
        "id": "adv56_021",
        "title": "09. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "萍水相逢的缘分虽浅，也能在记忆中留下温馨的涟漪。",
        "pinyin": "Píng shuǐ xiāng féng de yuán fèn suī qiǎn, yě néng zài jì yì zhōng liú xià wēn xīn de lián yī.",
        "translation": "Casual encounters, though brief, leave warm ripples in memory.",
        "grammarPoint": "文学色彩成语 (萍水相逢/涟漪)",
        "vocabList": []
      },
      {
        "id": "adv56_022",
        "title": "10. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "他不卑不亢的谈吐赢得了在场所有人的由衷赞赏。",
        "pinyin": "Tā bù bēi bù kàng de tán tǔ yíng dé le zài chǎng suǒ yǒu rén de yóu zhōng zàn shǎng.",
        "translation": "His neither humble nor arrogant speech won heartfelt admiration from all.",
        "grammarPoint": "成语 (不卑不亢) 与高级名词 (谈吐)",
        "vocabList": []
      },
      {
        "id": "adv56_023",
        "title": "11. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "识人不必言尽，留三分余地，日后好相见。",
        "pinyin": "Shí rén bù bì yán jìn, liú sān fēn yú dì, rì hòu hǎo xiāng jiàn.",
        "translation": "Knowing people doesn't require exhausting words; leave leeway for the future.",
        "grammarPoint": "传统智慧与熟语 (留有余地)",
        "vocabList": []
      },
      {
        "id": "adv56_024",
        "title": "12. 深度人际交往与社交艺术",
        "isFree": false,
        "sentence": "岁月的沉淀让他看清了人情冷暖，内心愈发通透豁达。",
        "pinyin": "Suì yuè de chén diàn ràng tā kàn qīng le rén qíng lěng nuǎn, nèi xīn yù fā tōng tòu huō dá.",
        "translation": "Years of precipitation made him see human warmth/coldness, making him clear and broad-minded.",
        "grammarPoint": "高级词汇 (沉淀/人情冷暖/豁达)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_03",
    "title": "商务谈判与合同博弈 \u00b7 Business Negotiation & Contracts",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "商",
    "coverClass": "c3",
    "intro": "Explore advanced Mandarin through business negotiation & contracts, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_025",
        "title": "01. 商务谈判与合同博弈",
        "isFree": true,
        "sentence": "这场历时数月的商务谈判终于迎来了实质性的突破。",
        "pinyin": "Zhè chǎng lì shí shù yuè de shāng wù tán pàn zhōng yú yíng lái le shí zhì xìng de tū pò.",
        "translation": "This months-long business negotiation finally ushered in a substantive breakthrough.",
        "grammarPoint": "高级短语 (实质性突破)",
        "vocabList": []
      },
      {
        "id": "adv56_026",
        "title": "02. 商务谈判与合同博弈",
        "isFree": true,
        "sentence": "双方在核心条款上寸步不让，空气中弥漫着紧张的气氛。",
        "pinyin": "Shuāng fāng zài hé xīn tiáo kuǎn shang cùn bù bù ràng, kōng qì zhōng mí màn zhe jǐn zhāng de qì fēn.",
        "translation": "Both sides yielded not an inch on core clauses; the air was filled with tension.",
        "grammarPoint": "成语 (寸步不让/弥漫)",
        "vocabList": []
      },
      {
        "id": "adv56_027",
        "title": "03. 商务谈判与合同博弈",
        "isFree": true,
        "sentence": "作为首席谈判代表，他展现出了极高的战略定力。",
        "pinyin": "Zuǒ wéi shǒu xí tán pàn dài biǎo, tā zhǎn xiàn chū le jí gāo de zhè lüè dìng lì.",
        "translation": "As chief negotiator, he demonstrated extreme strategic composure.",
        "grammarPoint": "职业称谓与高级词汇 (战略定力)",
        "vocabList": []
      },
      {
        "id": "adv56_028",
        "title": "04. 商务谈判与合同博弈",
        "isFree": true,
        "sentence": "在利益分配上，必须兼顾彼此的关切才能达成共识。",
        "pinyin": "Zài lì yì fēn pèi shang, bì xū jiān gù bǐ cǐ de guān qiè cái néng dǎ chéng gòng shì.",
        "translation": "On benefit distribution, mutual concerns must be balanced to reach consensus.",
        "grammarPoint": "高级动词 (兼顾) 与专业词汇 (共识)",
        "vocabList": []
      },
      {
        "id": "adv56_029",
        "title": "05. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "法务团队连夜对合同条款进行了严密的审核与修订。",
        "pinyin": "Fǎ wù tuán duì lián yè duì hé tóng tiáo kuǎn jìn xíng le yán mì de shěn hé yǔ xiū dìng.",
        "translation": "The legal team overnight conducted rigorous review and revision of contract clauses.",
        "grammarPoint": "专业词汇 (法务/审核/修订)",
        "vocabList": []
      },
      {
        "id": "adv56_030",
        "title": "06. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "任何隐蔽的法律漏洞，都可能在后期演变成致命的风险。",
        "pinyin": "Rèn hé yǐn bì de fǎ lǜ lòu dòng, dōu kě néng zài hòu qī yǎn biàn chéng zhì mìng de fēng xiǎn.",
        "translation": "Any hidden legal loopholes could evolve into fatal risks later.",
        "grammarPoint": "高级副词/形容词 (隐蔽/演变/致命)",
        "vocabList": []
      },
      {
        "id": "adv56_031",
        "title": "07. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "经过几轮艰难的博弈，双方终于在价格上达成妥协。",
        "pinyin": "Jīng guò jǐ lún jiān nán de bó yì shuāng fāng zhōng yú zài jià gé shàng dǎ chéng tuǒ xié.",
        "translation": "After several tough rounds of negotiation, both sides finally reached a compromise on price.",
        "grammarPoint": "高级词汇 (博弈/妥协)",
        "vocabList": []
      },
      {
        "id": "adv56_032",
        "title": "08. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "签字仪式上，两家企业的负责人郑重地交换了文本。",
        "pinyin": "Qiān zì yí shì shang, liǎng jiā qǐ yè de fù zé rén zhèng zhòng de jiāo huàn le wén běn.",
        "translation": "At the signing ceremony, heads of both enterprises solemnly exchanged texts.",
        "grammarPoint": "仪式高级描写 (郑重)",
        "vocabList": []
      },
      {
        "id": "adv56_033",
        "title": "09. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "契约精神是现代商业文明得以良性运转的基石。",
        "pinyin": "Qì yuē jīng shén shì xiàn dài shāng yè wén míng dé yǐ liáng xìng yùn zhuǎn de jī shí.",
        "translation": "Contract spirit is the cornerstone for modern commercial civilization to run healthily.",
        "grammarPoint": "经济文化高级词汇 (契约精神)",
        "vocabList": []
      },
      {
        "id": "adv56_034",
        "title": "10. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "面对对方的突发加码，他临危不乱，迅速提出了备选方案。",
        "pinyin": "Miàn duì duì fāng de tū fā jiā mǎ, tā lín wēi bù luàn, xùn sù tí chū le bèi xuǎn fāng àn.",
        "translation": "Facing sudden demands, he stayed calm in crisis, swiftly offering alternatives.",
        "grammarPoint": "成语 (临危不乱) 与专业词 (备选方案)",
        "vocabList": []
      },
      {
        "id": "adv56_035",
        "title": "11. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "这份合同的违约责任条款必须具备足够的约束力。",
        "pinyin": "Zhè fèn hé tóng de wéi yuē zé rèn tiáo kuǎn bì xū jù bèi zú gòu de yuē shù lì.",
        "translation": "The breach of contract liability clause must possess sufficient binding force.",
        "grammarPoint": "专业术语 (违约责任/约束力)",
        "vocabList": []
      },
      {
        "id": "adv56_036",
        "title": "12. 商务谈判与合同博弈",
        "isFree": false,
        "sentence": "诚信为本，互利共赢，是这次合作能够水到渠成的关键。",
        "pinyin": "Chéng xìn wéi běn, hù lì gòng yíng, shì zhè cì hé zuò néng gòu shuǐ dào qú chéng de guān jiàn.",
        "translation": "Integrity and win-win are key to making this cooperation naturally succeed.",
        "grammarPoint": "成语 (水到渠成) 与商务金句",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_04",
    "title": "财务规划与投资理财 \u00b7 Financial Planning & Investment",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "财",
    "coverClass": "c4",
    "intro": "Explore advanced Mandarin through financial planning & investment, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_037",
        "title": "01. 财务规划与投资理财",
        "isFree": true,
        "sentence": "理财规划不仅是记账，更是对未来生活的一种资产配置。",
        "pinyin": "Lǐ cái guī huà bù jǐn shì jì zhàng, gèng shì duì wèi lái shēng huó de yī zhǒng zī chǎn pèi zhì.",
        "translation": "Financial planning is asset allocation for future life, not just bookkeeping.",
        "grammarPoint": "财经专业词汇 (资产配置)",
        "vocabList": []
      },
      {
        "id": "adv56_038",
        "title": "02. 财务规划与投资理财",
        "isFree": true,
        "sentence": "俗话说“鸡蛋不要放在同一个篮子里”，意在强调分散风险。",
        "pinyin": "Sú huà shuō \"jī dàn bù yào fàng zài tóng yī gè lán zi li\", yì zài qiáng diào fēn sǎn fēng xiǎn.",
        "translation": "\"Don't put eggs in one basket\" emphasizes diversifying risks.",
        "grammarPoint": "俗语引用与专业词 (分散风险)",
        "vocabList": []
      },
      {
        "id": "adv56_039",
        "title": "03. 财务规划与投资理财",
        "isFree": true,
        "sentence": "在复杂的资本市场中，盲目跟风往往会血本无归。",
        "pinyin": "Zài fù zá de zī běn shì chǎng zhōng, máng mù gēn fēng wǎng wǎng huì xuè běn wú guī.",
        "translation": "In complex capital markets, blindly following trends leads to total loss.",
        "grammarPoint": "成语 (血本无归/盲目跟风)",
        "vocabList": []
      },
      {
        "id": "adv56_040",
        "title": "04. 财务规划与投资理财",
        "isFree": true,
        "sentence": "他通过长期的指数基金定投，实现了资产稳健增值。",
        "pinyin": "Tā tōng guò cháng qī de zhǐ shù jī jīn dìng tóu, shí xiàn le zī chǎn wěn jiàn zēng zhí.",
        "translation": "Through long-term index fund dollar-cost averaging, he achieved steady appreciation.",
        "grammarPoint": "财经词汇 (指数基金/定投/增值)",
        "vocabList": []
      },
      {
        "id": "adv56_041",
        "title": "05. 财务规划与投资理财",
        "isFree": false,
        "sentence": "面对高收益的理财产品，必须保持警惕，认清背后的高风险。",
        "pinyin": "Miàn duì gāo shōu yì de lǐ cái chǎn pǐn, bì xū bǎo chí jǐng tì, rèn qīng bèi hòu de gāo fēng xiǎn.",
        "translation": "High-yield financial products require vigilance against underlying high risks.",
        "grammarPoint": "复合结构 (高收益伴随高风险)",
        "vocabList": []
      },
      {
        "id": "adv56_042",
        "title": "06. 财务规划与投资理财",
        "isFree": false,
        "sentence": "财务自由的终极目标，是让被动收入覆盖日常的基本开销。",
        "pinyin": "Cái wù zì yóu de zhōng jí mù biāo, shì ràng bèi dòng shōu rù fù gài rì cháng de jī běn kāi xiāo.",
        "translation": "Ultimate financial freedom is passive income covering daily basic expenses.",
        "grammarPoint": "现代财经热词 (财务自由/被动收入)",
        "vocabList": []
      },
      {
        "id": "adv56_043",
        "title": "07. 财务规划与投资理财",
        "isFree": false,
        "sentence": "通货膨胀会悄无声息地侵蚀普通人的购买力。",
        "pinyin": "Tōng huò péng zhàng huì qiāo wú shēng xī de qīn shí pǔ tōng rén de gòu mǎi lì.",
        "translation": "Inflation quietly erodes the purchasing power of ordinary people.",
        "grammarPoint": "高级词汇 (通货膨胀/侵蚀/购买力)",
        "vocabList": []
      },
      {
        "id": "adv56_044",
        "title": "08. 财务规划与投资理财",
        "isFree": false,
        "sentence": "他精打细算，制定了严格的月度预算与储蓄计划。",
        "pinyin": "Tā jīng dǎ xì suàn, zhì dìng le yán gé de yuè dù yù suàn yǔ chú xù jì hua.",
        "translation": "He budgeted meticulously, setting strict monthly budgets and savings plans.",
        "grammarPoint": "成语 (精打细算) 与专业词 (预算/储蓄)",
        "vocabList": []
      },
      {
        "id": "adv56_045",
        "title": "09. 财务规划与投资理财",
        "isFree": false,
        "sentence": "房贷和车贷曾让他喘不过气，后来通过债务优化缓解了压力。",
        "pinyin": "Fáng dài hé chē dài céng ràng tā chuǎn bu guò qì, hòu lái tōng guò zhài wù yōu huà huǎn jiě le yā lì.",
        "translation": "Mortgages once choked him; later debt optimization relieved pressure.",
        "grammarPoint": "俗语比喻 (喘不过气) 与专业词 (债务优化)",
        "vocabList": []
      },
      {
        "id": "adv56_046",
        "title": "10. 财务规划与投资理财",
        "isFree": false,
        "sentence": "投资的本质是对认知能力的变现，认知之外的钱赚不到。",
        "pinyin": "Tóu zī de běn zhì shì duì rèn zhī néng lì de biàn xiàn, rèn zhī zhī wài de qián zhuàn bù dào.",
        "translation": "Investment essence is monetizing cognition; money beyond cognition can't be earned.",
        "grammarPoint": "哲学财经金句 (认知变现)",
        "vocabList": []
      },
      {
        "id": "adv56_047",
        "title": "11. 财务规划与投资理财",
        "isFree": false,
        "sentence": "应急资金的储备是家庭财务安全的第一道防线。",
        "pinyin": "Yīng jí zī jīn de chǔ bèi shì jiā tíng cái wù ān quán de dì yī dào fáng xiàn.",
        "translation": "Emergency fund reserves are the first line of family financial safety.",
        "grammarPoint": "复合词 (应急资金/防线)",
        "vocabList": []
      },
      {
        "id": "adv56_048",
        "title": "12. 财务规划与投资理财",
        "isFree": false,
        "sentence": "树立正确的财富观，才不会被物欲裹挟而迷失方向。",
        "pinyin": "Shù lì zhèng què de cái fù guān, cái bù huì bèi wù yù guǒ xié ér mí shī fāng xiàng.",
        "translation": "Establishing correct wealth views prevents being swept away by material desires.",
        "grammarPoint": "高级词汇 (财富观/裹挟)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_05",
    "title": "健康管理与身心平衡 \u00b7 Health Management & Work-Life Balance",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "健",
    "coverClass": "c5",
    "intro": "Explore advanced Mandarin through health management & work-life balance, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_049",
        "title": "01. 健康管理与身心平衡",
        "isFree": true,
        "sentence": "快节奏的都市生活中，亚健康状态已经成了常态。",
        "pinyin": "Kuài jié zòu de dōu shì shēng huì zhōng, yà jiàn kāng zhuàng tài yǐ jīng chéng le cháng tài.",
        "translation": "In fast-paced urban life, sub-health status has become normal.",
        "grammarPoint": "现代健康热词 (亚健康/常态)",
        "vocabList": []
      },
      {
        "id": "adv56_050",
        "title": "02. 健康管理与身心平衡",
        "isFree": true,
        "sentence": "现代人常说“工作是做不完的，但身体是自己的”。",
        "pinyin": "Xiàn dài rén cháng shuō \"gōng zuò shì zuò bu wán de, dàn shēn tǐ shì zì jǐ de\".",
        "translation": "Modern people often say work is endless, but health belongs to oneself.",
        "grammarPoint": "常用生活哲理金句",
        "vocabList": []
      },
      {
        "id": "adv56_051",
        "title": "03. 健康管理与身心平衡",
        "isFree": true,
        "sentence": "定期进行全面的体检，是预防重大疾病的关键举措。",
        "pinyin": "Dì qī jìn xíng quán miàn de tǐ jiǎn, shì yù fáng zhòng dà jí bìng de guān jiàn jǔ cuō.",
        "translation": "Regular comprehensive health checks are key measures to prevent major diseases.",
        "grammarPoint": "专业词汇 (全面体检/举措)",
        "vocabList": []
      },
      {
        "id": "adv56_052",
        "title": "04. 健康管理与身心平衡",
        "isFree": true,
        "sentence": "他开始戒掉熬夜的坏习惯，并养成了早睡早起的作息。",
        "pinyin": "Tā kāi shǐ jiè diào áo yè de huài xí guàn, bìng yǎng chéng le zǎo shuì zǎo qǐ de zuò xī.",
        "translation": "He began quitting late-night habits, developing an early-to-bed routine.",
        "grammarPoint": "动宾搭配 (戒掉熬夜/作息)",
        "vocabList": []
      },
      {
        "id": "adv56_053",
        "title": "05. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "适度的有氧运动不仅能减脂塑形，更能释放心理压力。",
        "pinyin": "Shì dù de yǒu yǎng yùn dòng bù jǐn néng jiǎn zhī sù xíng, gèng néng shì fàng xīn lǐ yā lì.",
        "translation": "Moderate aerobic exercise not only slims, but releases mental pressure.",
        "grammarPoint": "复合递进与健身词汇 (有氧运动)",
        "vocabList": []
      },
      {
        "id": "adv56_054",
        "title": "06. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "面对高压环境，学会正念冥想有助于找回内心的平静。",
        "pinyin": "Miàn duì gāo yā huán jìng, xué huì zhèng niàn míng xiǎng yǒu zhù yú zhǎo huí nèi xīn de píng jìng.",
        "translation": "Facing high pressure, learning mindfulness helps regain inner peace.",
        "grammarPoint": "心理健康热词 (正念冥想)",
        "vocabList": []
      },
      {
        "id": "adv56_055",
        "title": "07. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "饮食结构的调整让我摆脱了多年的肠胃困扰。",
        "pinyin": "Yǐn shí jié gòu de tiáo zhěng ràng wǒ bǎi tuō le duō nián de cháng wèi kùn rǎo.",
        "translation": "Dietary adjustments freed me from years of digestive troubles.",
        "grammarPoint": "高级词汇 (饮食结构/摆脱/困扰)",
        "vocabList": []
      },
      {
        "id": "adv56_056",
        "title": "08. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "工作与生活的平衡并非易事，需要刻意练习。",
        "pinyin": "Gōng zuò yǔ shēng huó de píng héng bìng fēi yì shì, xū yào kè yì liàn xí.",
        "translation": "Work-life balance isn't easy; it requires deliberate practice.",
        "grammarPoint": "职场生活平衡主题",
        "vocabList": []
      },
      {
        "id": "adv56_057",
        "title": "09. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "充足且高质量的睡眠是恢复精力的最佳灵丹妙药。",
        "pinyin": "Chōng zú qiě gāo zhì liàng de shuì mián shì huī fù jīng lì de zuì jiā líng dān miào yào.",
        "translation": "Sufficient and quality sleep is the best cure for recovering energy.",
        "grammarPoint": "高级成语 (灵丹妙药)",
        "vocabList": []
      },
      {
        "id": "adv56_058",
        "title": "10. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "他在周末果断开启“数字排毒”，远离手机享受自然。",
        "pinyin": "Tā zài zhōu mò guǒ duàn kāi qǐ \"shù zì pái dú\", yuǎn lí shǒu jī xiǎng shòu zì rán.",
        "translation": "Over weekend he decisively started \"digital detox,\" enjoying nature away from phones.",
        "grammarPoint": "现代新词 (数字排毒)",
        "vocabList": []
      },
      {
        "id": "adv56_059",
        "title": "11. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "身体是革命的本钱，透支健康换取财富得不偿失。",
        "pinyin": "Shēn tǐ shì gé mìng de běn qián, tòu zhī jiàn kāng huàn qǔ cái fù dé bù cháng shī.",
        "translation": "Health is capital; overdrawing health for wealth is losing more than gained.",
        "grammarPoint": "俗语与成语 (得不偿失)",
        "vocabList": []
      },
      {
        "id": "adv56_060",
        "title": "12. 健康管理与身心平衡",
        "isFree": false,
        "sentence": "学会接纳自己的情绪起伏，是自我关怀的第一步。",
        "pinyin": "Xué huì jiē nà zì jǐ de qíng xù qǐ fú, shì zì wǒ guān huái de dì yī bù.",
        "translation": "Learning to accept emotional fluctuations is step one of self-care.",
        "grammarPoint": "心理学高级表达 (接纳情绪/自我关怀)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_06",
    "title": "置业安居与家居美学 \u00b7 Real Estate & Home Aesthetics",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "置",
    "coverClass": "c1",
    "intro": "Explore advanced Mandarin through real estate & home aesthetics, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_061",
        "title": "01. 置业安居与家居美学",
        "isFree": true,
        "sentence": "经过长时间的精挑细选，他终于在城郊买下了一套心仪的房子。",
        "pinyin": "Jīng guò cháng shí jiān de jīng tiāo xì xuǎn, tā zhōng yú zài chéng jiāo mǎi xià le yī tào xīn yí de fáng zi.",
        "translation": "After meticulous selection, he bought an ideal house in the suburbs.",
        "grammarPoint": "高级成语 (精挑细选/心仪)",
        "vocabList": []
      },
      {
        "id": "adv56_062",
        "title": "02. 置业安居与家居美学",
        "isFree": true,
        "sentence": "买房不仅看重地段和户型，更考量小学的学区与物业水平。",
        "pinyin": "Mǎi fáng bù jǐn kàn zhòng dì duàn hé hù xíng, gèng kǎo liàng xiǎo xué de xué qū yǔ wù yè shuǐ píng.",
        "translation": "Buying focuses on location, layout, school districts, and property management.",
        "grammarPoint": "房产专业词汇 (地段/户型/物业)",
        "vocabList": []
      },
      {
        "id": "adv56_063",
        "title": "03. 置业安居与家居美学",
        "isFree": true,
        "sentence": "面对繁琐的房屋装修，他决定聘请专业的设计师操刀。",
        "pinyin": "Miàn duì fán suǒ de fáng wū zhuāng xiū, tā jué dìng pìn qǐng zhuān yè de shè jì shī cāo dāo.",
        "translation": "Facing tedious interior decoration, he hired professional designers.",
        "grammarPoint": "高级词汇 (繁琐/操刀)",
        "vocabList": []
      },
      {
        "id": "adv56_064",
        "title": "04. 置业安居与家居美学",
        "isFree": true,
        "sentence": "他偏爱原木风与极简主义，追求温馨且克制的家居美学。",
        "pinyin": "Tā piān ài yuán mù fēng hé jí jiǎn zhǔ yì, zhuī qiú wēn xīn qiě kè zhì de jiā jū měi xué.",
        "translation": "He prefers wood style and minimalism, seeking warm, restrained aesthetics.",
        "grammarPoint": "设计生活词汇 (极简主义/美学)",
        "vocabList": []
      },
      {
        "id": "adv56_065",
        "title": "05. 置业安居与家居美学",
        "isFree": false,
        "sentence": "客厅采光极佳，阳光透过落地窗洒满整个木地板。",
        "pinyin": "Kè tīng cǎi guāng jí jiā, yáng guāng tòu guò luò dì chuāng sǎ mǎn zhěng gè mù dì bǎn.",
        "translation": "Living room lighting is superb; sunlight through French windows fills the floor.",
        "grammarPoint": "房产描述词汇 (采光/落地窗)",
        "vocabList": []
      },
      {
        "id": "adv56_066",
        "title": "06. 置业安居与家居美学",
        "isFree": false,
        "sentence": "阳台上错落有致地摆放着各种绿植，生机盎然。",
        "pinyin": "Yáng tái shang cuò luò yǒu zhì de bǎi fàng zhe gè zhǒng lǜ zhí, shēng jī àng rán.",
        "translation": "Balcony features neatly arranged green plants full of vitality.",
        "grammarPoint": "成语 (错落有致/生机盎然)",
        "vocabList": []
      },
      {
        "id": "adv56_067",
        "title": "07. 置业安居与家居美学",
        "isFree": false,
        "sentence": "开放式厨房和宽敞的中岛台，成了朋友聚会的完美场所。",
        "pinyin": "Kāi fàng shì chú fáng hé kuān chǎng de zhōng dǎo tái, chéng le péng you jù huì de wán měi chǎng suǒ.",
        "translation": "Open kitchen and spacious island became the perfect party venue.",
        "grammarPoint": "家居现代词汇 (开放式厨房/中岛台)",
        "vocabList": []
      },
      {
        "id": "adv56_068",
        "title": "08. 置业安居与家居美学",
        "isFree": false,
        "sentence": "智能家居系统的引入，让日常生活变得更加便捷智能。",
        "pinyin": "Zhì néng jiā jū xì tǒng de yǐn rù, ràng rì cháng shēng huó biàn de gèng jiā biàn jié zhì néng.",
        "translation": "Smart home system integration makes daily life more convenient.",
        "grammarPoint": "科技家居词汇 (智能家居系统)",
        "vocabList": []
      },
      {
        "id": "adv56_069",
        "title": "09. 置业安居与家居美学",
        "isFree": false,
        "sentence": "卧室必须注重隔音与遮光，这是保障深度睡眠的基础。",
        "pinyin": "Wò shì bì xū zhù zhòng gé yīn hé zhē guāng, zhè shì bǎo zhàng shēn dù shuì mián de jī chǔ.",
        "translation": "Bedrooms must prioritize soundproofing and blackout for deep sleep.",
        "grammarPoint": "装修专业词汇 (隔音/遮光)",
        "vocabList": []
      },
      {
        "id": "adv56_070",
        "title": "10. 置业安居与家居美学",
        "isFree": false,
        "sentence": "搬进新家那天，亲朋好友齐聚一堂温锅庆祝，热闹非凡。",
        "pinyin": "Bān jìn xīn jiā nà tiān, qīn péng hǎo yǒu qí jù yī táng wēn guō qìng zhù, rè nào fēi fán.",
        "translation": "Moving-in day gathered friends and family for housewarming celebration.",
        "grammarPoint": "传统民俗词汇 (温锅/热闹非凡)",
        "vocabList": []
      },
      {
        "id": "adv56_071",
        "title": "11. 置业安居与家居美学",
        "isFree": false,
        "sentence": "房子是租来的，但生活不是，生活品质从不妥协。",
        "pinyin": "Fáng zi shì zū lái de, dàn shēng huó bú shì, shēng huó pǐn zhì cóng bù tuǒ xié.",
        "translation": "House is rented, life is not; life quality is never compromised.",
        "grammarPoint": "现代流行生活金句",
        "vocabList": []
      },
      {
        "id": "adv56_072",
        "title": "12. 置业安居与家居美学",
        "isFree": false,
        "sentence": "喧嚣都市中，有一处属于自己的安居之所，便是最大的幸福。",
        "pinyin": "Xuān xiāo dōu shì zhōng, yǒu yī chù shǔ yú zì jǐ de ān jū zhī suǒ, biàn shì zuì dà de xìng fú.",
        "translation": "In bustling cities, having one's own dwelling place is greatest happiness.",
        "grammarPoint": "成语与高级表达 (安居之所/喧嚣)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_07",
    "title": "深度情感与亲密关系 \u00b7 Deep Emotions & Intimate Relationships",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "深",
    "coverClass": "c2",
    "intro": "Explore advanced Mandarin through deep emotions & intimate relationships, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_073",
        "title": "01. 深度情感与亲密关系",
        "isFree": true,
        "sentence": "好的亲密关系不是没有摩擦，而是懂得在争吵后及时修复。",
        "pinyin": "Hǎo de qīn mì guān xì bú shì méi yǒu mó cā, ér shì dǒng de zài zhēng chǎo hòu jí shí xiū fù.",
        "translation": "Good intimacy isn't lack of friction, but timely repair after arguments.",
        "grammarPoint": "心理学观点表达 (亲密关系/修复)",
        "vocabList": []
      },
      {
        "id": "adv56_074",
        "title": "02. 深度情感与亲密关系",
        "isFree": true,
        "sentence": "灵魂的契合与精神的共鸣，远比外在的条件更经得起考验。",
        "pinyin": "Líng hún de qì hé yǔ jīng shén de gòng míng, yuǎn bǐ wài zài de tiáo jiàn gèng jīng de qǐ kǎo yàn.",
        "translation": "Soul alignment and spiritual resonance withstand tests better than external conditions.",
        "grammarPoint": "高级词汇 (契合/共鸣/经得起考验)",
        "vocabList": []
      },
      {
        "id": "adv56_075",
        "title": "03. 深度情感与亲密关系",
        "isFree": true,
        "sentence": "在漫长的岁月里，相濡以沫的陪伴胜过任何甜言蜜语。",
        "pinyin": "Zài màn cháng de suì yuè li, xiāng rú yǐ mò de péi bàn shèng guò rèn hé tián yán mì yǔ.",
        "translation": "In long years, mutual support through hardship beats sweet talks.",
        "grammarPoint": "成语 (相濡以沫/甜言蜜语)",
        "vocabList": []
      },
      {
        "id": "adv56_076",
        "title": "04. 深度情感与亲密关系",
        "isFree": true,
        "sentence": "真正的爱是克制与成全，而不是盲目的占有和束缚。",
        "pinyin": "Zhēn zhèng de ài shì kè zhì yǔ chéng quán, ér bú shì máng mù de zhàn yǒu hé shù fù.",
        "translation": "True love is restraint and fulfillment, not blind possession and binding.",
        "grammarPoint": "高级抽象名词 (克制/成全/束缚)",
        "vocabList": []
      },
      {
        "id": "adv56_077",
        "title": "05. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "异地恋虽然充满考验，但共同期待的未来给了他们坚定信念。",
        "pinyin": "Y\u00ec d\u00ec li\u00e0n su\u012b r\u00e1n ch\u014dng m\u01cen k\u01ceo y\u00e0n, d\u00e0n g\u00f2ng t\u00f3ng q\u012b d\u00e0i de w\u00e8i l\u00e1i g\u011bi le t\u0101 men ji\u0101n d\u00ecng x\u00ecn ni\u00e0n.",
        "translation": "Long-distance love tests resolve, but a shared vision gives firm belief.",
        "grammarPoint": "复合结构与高级词汇 (考验/信念)",
        "vocabList": []
      },
      {
        "id": "adv56_078",
        "title": "06. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "沟通中的“非暴力表达”有效避免了许多不必要的误解。",
        "pinyin": "Gōu tōng zhōng de \"fēi bào lì biǎo dá\" yǒu xiào bì miǎn le xǔ duō bù bì yào de wù jiě.",
        "translation": "\"Non-violent communication\" effectively avoids unnecessary misunderstandings.",
        "grammarPoint": "心理学沟通概念",
        "vocabList": []
      },
      {
        "id": "adv56_079",
        "title": "07. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "学会在亲密关系中保持独立，才不会因过度依赖而窒息。",
        "pinyin": "Xué huì zài qīn mì guān xì zhōng bǎo chí dú lì, cái bù huì yīn guò dù yī lài ér zhì xī.",
        "translation": "Learning independence in intimacy prevents suffocation from over-reliance.",
        "grammarPoint": "现代情感观点 (保持独立)",
        "vocabList": []
      },
      {
        "id": "adv56_080",
        "title": "08. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "岁月流转，两人的感情非但没有变淡，反而愈发醇厚。",
        "pinyin": "Suì yuè liú zhuǎn, liǎng rén de gǎn qíng fēi dàn méi yǒu biàn dàn, fǎn ér yù fā chún hòu.",
        "translation": "Years passed; their affection didn't fade, but grew richer instead.",
        "grammarPoint": "高级副词/形容词 (非但/反而/醇厚)",
        "vocabList": []
      },
      {
        "id": "adv56_081",
        "title": "09. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "遇见对的人，余生皆是风景，每一个平凡的日子都熠熠生辉。",
        "pinyin": "Yù jiàn duì de rén, yú shēng jiē shì fēng jǐng, měi yí gè píng fán de rì zi dōu yì yì shēng huī.",
        "translation": "Meeting the right person makes life scenic; ordinary days shine brilliantly.",
        "grammarPoint": "文学色彩高级表达 (熠熠生辉)",
        "vocabList": []
      },
      {
        "id": "adv56_082",
        "title": "10. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "原谅对方的无心之失，是维系长期关系不可或缺的包容。",
        "pinyin": "Yuán liàng duì fāng de wú xīn zhī shī, shì wéi xì cháng qī guān xì bù kě huò quē de bāo róng.",
        "translation": "Forgiving unintentional slips is indispensable tolerance for long-term bonds.",
        "grammarPoint": "成语 (无心之失/不可或缺)",
        "vocabList": []
      },
      {
        "id": "adv56_083",
        "title": "11. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "婚姻不仅是浪漫的结合，更是柴米油盐中的责任与担当。",
        "pinyin": "Hūn yīn bù jǐn shì làng màn de jié hé, gèng shì chái mǐ yóu yán zhōng de zé rèn yǔ dān dāng.",
        "translation": "Marriage is romance plus responsibility and accountability in daily life.",
        "grammarPoint": "熟语与高级词汇 (柴米油盐/担当)",
        "vocabList": []
      },
      {
        "id": "adv56_084",
        "title": "12. 深度情感与亲密关系",
        "isFree": false,
        "sentence": "愿我们在各自的轨道上闪闪发光，又能在人海中紧紧相拥。",
        "pinyin": "Yuàn wǒ men zài gè zì de guǐ dào shang shǎn shǎn fā guāng, yòu néng zài rén hǎi zhōng jǐn jǐn xiāng yōng.",
        "translation": "May we shine in our orbits and embrace tightly in the human sea.",
        "grammarPoint": "现代诗意情感表达",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_08",
    "title": "终身学习与自我提升 \u00b7 Lifelong Learning & Self-Improvement",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "终",
    "coverClass": "c3",
    "intro": "Explore advanced Mandarin through lifelong learning & self-improvement, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_085",
        "title": "01. 终身学习与自我提升",
        "isFree": true,
        "sentence": "在这个瞬息万变的时代，终身学习已经成为生存的刚需。",
        "pinyin": "Zài zhè gè shùn xī wàn biàn de shí dài, zhōng shēn xué xí yǐ jīng chéng wéi shēng cún de gāng xū.",
        "translation": "In this ever-changing era, lifelong learning is a survival necessity.",
        "grammarPoint": "成语 (瞬息万变) 与热词 (刚需)",
        "vocabList": []
      },
      {
        "id": "adv56_086",
        "title": "02. 终身学习与自我提升",
        "isFree": true,
        "sentence": "碎片化时间利用得当，也能积少成多完成一套大部头著作。",
        "pinyin": "Suì piàn huà shí jiān lì yòng de dàng, yě néng jī shǎo chéng duō wán chéng yī tào dà bù tóu zhù zuò.",
        "translation": "Properly used fragmented time accumulates to finish major literary works.",
        "grammarPoint": "成语 (积少成多) 与词汇 (大部头)",
        "vocabList": []
      },
      {
        "id": "adv56_087",
        "title": "03. 终身学习与自我提升",
        "isFree": true,
        "sentence": "他每天雷打不动地阅读一小时，这种自律令人肃然起敬。",
        "pinyin": "Tā měi tiān léi dǎ bù dòng de yuè dú yī xiǎo shí, zhè zhǒng zì lǜ lìng rén sù rán qǐ jìng.",
        "translation": "His steadfast one-hour daily reading inspires deep respect.",
        "grammarPoint": "成语 (雷打不动/肃然起敬)",
        "vocabList": []
      },
      {
        "id": "adv56_088",
        "title": "04. 终身学习与自我提升",
        "isFree": true,
        "sentence": "批判性思维帮助他在海量信息中去粗取精。",
        "pinyin": "Pī pàn xìng sī wéi bāng zhù tā zài hǎi liàng xìn xī zhōng qù cū qǔ jīng.",
        "translation": "Critical thinking helps him sift grain from chaff in massive information.",
        "grammarPoint": "高级成语 (去粗取精) 与专业学术词",
        "vocabList": []
      },
      {
        "id": "adv56_089",
        "title": "05. 终身学习与自我提升",
        "isFree": false,
        "sentence": "学习新语言不仅是掌握工具，更是打开一扇全新的文化之窗。",
        "pinyin": "Xué xí xīn yǔ yán bù jǐn shì zhǎng wò gōng jù, gèng shì dǎ kāi yī shàn quán xīn de wén huà zhī chuāng.",
        "translation": "Learning new languages is mastering tools and opening cultural windows.",
        "grammarPoint": "递进复句与比喻修辞",
        "vocabList": []
      },
      {
        "id": "adv56_090",
        "title": "06. 终身学习与自我提升",
        "isFree": false,
        "sentence": "舒适圈是个人成长的坟墓，唯有不断跳出边界才能蜕变。",
        "pinyin": "Shū shì quān shì gè rén chéng zhǎng de fén mù, wéi yǒu bù duàn tiào chū biān jiè cái néng tuì biàn.",
        "translation": "Comfort zones are growth graves; only leaping past boundaries transforms us.",
        "grammarPoint": "现代流行语 (舒适圈/蜕变)",
        "vocabList": []
      },
      {
        "id": "adv56_091",
        "title": "07. 终身学习与自我提升",
        "isFree": false,
        "sentence": "费曼学习法强调通过输出和教授他人来检验真正的掌握。",
        "pinyin": "Fèi màn xué xí fǎ qiáng diào tōng guò shū chū hé jiào shòu tā rén lái jiǎn yàn zhēn zhèng de zhǎng wò.",
        "translation": "Feynman technique emphasizes output and teaching to test true mastery.",
        "grammarPoint": "教育方法学专业名词",
        "vocabList": []
      },
      {
        "id": "adv56_092",
        "title": "08. 终身学习与自我提升",
        "isFree": false,
        "sentence": "面对挫折和失败，他将其视为复盘反思的绝佳契机。",
        "pinyin": "Miàn duì cuò zhé hé shī bài, tā jiāng qí shì wéi fù pán fǎn sī de jué jiā qì jī.",
        "translation": "Facing setbacks, he views them as prime opportunities for review and reflection.",
        "grammarPoint": "专业词汇 (复盘/契机)",
        "vocabList": []
      },
      {
        "id": "adv56_093",
        "title": "09. 终身学习与自我提升",
        "isFree": false,
        "sentence": "拒绝盲目焦虑，把注意力聚焦在当下能掌控的行动上。",
        "pinyin": "Jù jué máng mù jiāo lǜ, bǎ zhù yì lì jù jiāo zài dāng xià néng zhǎng kòng de xíng dòng shang.",
        "translation": "Reject blind anxiety; focus attention on actions controllable right now.",
        "grammarPoint": "现代心理词汇 (焦虑/聚焦)",
        "vocabList": []
      },
      {
        "id": "adv56_094",
        "title": "10. 终身学习与自我提升",
        "isFree": false,
        "sentence": "读书百遍其义自见，深度的沉浸式阅读能滋养灵魂。",
        "pinyin": "Dú shū bǎi biàn qí yì zì jiàn, shēn dù de chén jìn shì yuè dú néng zī yǎng líng hún.",
        "translation": "Thorough reading yields understanding; deep immersive reading nourishes the soul.",
        "grammarPoint": "古典成语与高级动词 (滋养)",
        "vocabList": []
      },
      {
        "id": "adv56_095",
        "title": "11. 终身学习与自我提升",
        "isFree": false,
        "sentence": "他利用线上公开课攻克了自己并不擅长的编程领域。",
        "pinyin": "Tā lì yòng xiàn shàng gōng kāi kè gōng kè le zì jǐ bìng bú shàn cháng de biān chéng lǐng yù.",
        "translation": "He used MOOCs to conquer programming fields he wasn't good at.",
        "grammarPoint": "现代科技教育词汇",
        "vocabList": []
      },
      {
        "id": "adv56_096",
        "title": "12. 终身学习与自我提升",
        "isFree": false,
        "sentence": "所谓的牛人，不过是把每一个平凡的日常都做到了极致。",
        "pinyin": "Suǒ wèi de niú rén, bú guò shì bǎ měi yí gè píng fán de rì zi dōu zuò dào le jí zhì.",
        "translation": "So-called experts just push every ordinary day to its absolute limit.",
        "grammarPoint": "现代流行语与高级词汇 (极致)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_09",
    "title": "城市生活与应对压力 \u00b7 Urban Life & Coping with Stress",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "城",
    "coverClass": "c4",
    "intro": "Explore advanced Mandarin through urban life & coping with stress, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_097",
        "title": "01. 城市生活与应对压力",
        "isFree": true,
        "sentence": "早高峰的地铁人潮汹涌，每个人都步履匆匆地赶往公司。",
        "pinyin": "Zǎo gāo fēng de dì tiě rén cháo xiōng yǒng, měi gè rén dōu bù lǚ cōng cōng de gǎn wǎng gōng sī.",
        "translation": "Morning rush hour subway is surging; everyone hurries to company.",
        "grammarPoint": "高级词汇 (人潮汹涌/步履匆匆)",
        "vocabList": []
      },
      {
        "id": "adv56_098",
        "title": "02. 城市生活与应对压力",
        "isFree": true,
        "sentence": "面对绩效考核与房租的重压，他偶尔也会感到心力交瘁。",
        "pinyin": "Miàn duì jì xiào kǎo hé yǔ fáng zū de zhòng yā, tā ǒu'ěr yě huì gǎn dào xīn lì jiāo cuì.",
        "translation": "Facing performance reviews and rent pressure, he occasionally feels exhausted.",
        "grammarPoint": "成语 (心力交瘁)",
        "vocabList": []
      },
      {
        "id": "adv56_099",
        "title": "03. 城市生活与应对压力",
        "isFree": true,
        "sentence": "城市虽然提供了广阔的发展平台，但也伴随着巨大的孤独感。",
        "pinyin": "Chéng shì suī rán tí gōng le guǎng kuò de fā zhǎn píng tái, dàn yě bàn suí zhe jù dà de gū dú gǎn.",
        "translation": "Cities offer wide platforms, but also accompany immense loneliness.",
        "grammarPoint": "转折复句与高级名词 (孤独感)",
        "vocabList": []
      },
      {
        "id": "adv56_100",
        "title": "04. 城市生活与应对压力",
        "isFree": true,
        "sentence": "夜幕降临，写字楼里依然灯火辉煌，那是无数奋斗者的背影。",
        "pinyin": "Yè mù jiàng lín, xiě zì lóu li yī rán dēng huǒ huī huáng, nà shì wú shù fèn dòu zhě de bèi yǐng.",
        "translation": "Night falls, office buildings still bright—silhouettes of countless strivers.",
        "grammarPoint": "成语 (灯火辉煌) 与文学描写",
        "vocabList": []
      },
      {
        "id": "adv56_101",
        "title": "05. 城市生活与应对压力",
        "isFree": false,
        "sentence": "周末逃离城市去郊外露营，成了年轻人释放压力的网红方式。",
        "pinyin": "Zhōu mò táo lí chéng shì qù jiāo wài lù yíng, chéng le nián qīng rén shì fàng yā lì de wǎng hóng fāng shì.",
        "translation": "Escaping to suburbs for weekend camping became a popular stress-relief trend.",
        "grammarPoint": "现代生活热词 (露营/网红方式)",
        "vocabList": []
      },
      {
        "id": "adv56_102",
        "title": "06. 城市生活与应对压力",
        "isFree": false,
        "sentence": "他擅长通过长跑排解负面情绪，让汗水带走内心的焦虑。",
        "pinyin": "Tā shàn zhǎng tōng guò cháng pǎo pái jiě fù miàn qíng xù, ràng hàn shuǐ dài zǒu nèi xīn de jiāo lǜ.",
        "translation": "He excels at relieving negative emotions via long runs, sweating anxiety away.",
        "grammarPoint": "高级动词 (排解) 与心理词汇",
        "vocabList": []
      },
      {
        "id": "adv56_103",
        "title": "07. 城市生活与应对压力",
        "isFree": false,
        "sentence": "面对突如其来的生活变故，保持韧性是最好的应对策略。",
        "pinyin": "Miàn duì tū rú qí lái de shēng huó biàn gù, bǎo chí rèn xìng shì zuì hǎo de yìng duì cè lüè.",
        "translation": "Facing sudden life shifts, maintaining resilience is the best coping strategy.",
        "grammarPoint": "高级词汇 (突如其来/韧性/策略)",
        "vocabList": []
      },
      {
        "id": "adv56_104",
        "title": "08. 城市生活与应对压力",
        "isFree": false,
        "sentence": "咖啡因成了白领们的续命神器，陪伴他们度过漫长的工作日。",
        "pinyin": "Kā fēi yīn chéng le bái lǐng men de xù mìng shén qì, péi bàn tā men dù guò màn cháng de gōng zuò rì.",
        "translation": "Caffeine became white-collars' life-extending tool through long workdays.",
        "grammarPoint": "现代网络热词 (续命神器)",
        "vocabList": []
      },
      {
        "id": "adv56_105",
        "title": "09. 城市生活与应对压力",
        "isFree": false,
        "sentence": "偶尔停下脚步，去菜市场感受一把人间烟火气，格外治愈。",
        "pinyin": "ǒu'ěr tíng xià jiǎo bù, qù cài shì chǎng gǎn shòu yī bǎ rén jiān yān huǒ qì, gé wài zhì yù.",
        "translation": "Stopping to feel the worldly warmth at farmers' markets is healing.",
        "grammarPoint": "现代热词 (人间烟火气/治愈)",
        "vocabList": []
      },
      {
        "id": "adv56_106",
        "title": "10. 城市生活与应对压力",
        "isFree": false,
        "sentence": "他学会了向生活妥协，在完美的追求与现实的局限中找平衡。",
        "pinyin": "Tā xué huì le xiàng shēng huó tuǒ xié, zài wán měi de zhuī qiú yǔ xiàn shí de jú xiàn zhōng zhǎo píng héng.",
        "translation": "He learned to compromise with life, finding balance between perfection and limits.",
        "grammarPoint": "高级词汇 (局限/妥协)",
        "vocabList": []
      },
      {
        "id": "adv56_107",
        "title": "11. 城市生活与应对压力",
        "isFree": false,
        "sentence": "无论生活多么琐碎，内心都要保留一片诗意的自留地。",
        "pinyin": "Wú lùn shēng huó duō me suǒ suì nèi xīn dōu yào bǎo liú yì piàn shī yì de zì liú dì.",
        "translation": "No matter how trivial life is, keep a poetic sanctuary in your heart.",
        "grammarPoint": "高级词汇 (琐碎/自留地)",
        "vocabList": []
      },
      {
        "id": "adv56_108",
        "title": "12. 城市生活与应对压力",
        "isFree": false,
        "sentence": "每一个在异乡咬牙坚持的深夜，终将汇聚成迎接黎明的曙光。",
        "pinyin": "Měi yí gè zài yì xiāng yǎo yá jiān chí de shēn yè, zhōng jiāng huì jù chéng yíng jiē lí míng de shǔ guāng.",
        "translation": "Every deep night biting teeth in foreign lands converges into dawn's light.",
        "grammarPoint": "文学色彩高级激励句",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_10",
    "title": "闲暇生活与文化审美 \u00b7 Leisure & Cultural Appreciation",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "闲",
    "coverClass": "c5",
    "intro": "Explore advanced Mandarin through leisure & cultural appreciation, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_109",
        "title": "01. 闲暇生活与文化审美",
        "isFree": true,
        "sentence": "闲暇之余，他喜欢泡上一壶清茶，临摹几页古代碑帖。",
        "pinyin": "Xián xiá zhī yú, tā xǐ huan pào shang yī hú qīng chá, lín mó jǐ yè gǔ dài bēi tiè.",
        "translation": "In spare time, he brews clear tea and copies ancient steles.",
        "grammarPoint": "高级词汇 (闲暇之余/临摹/碑帖)",
        "vocabList": []
      },
      {
        "id": "adv56_110",
        "title": "02. 闲暇生活与文化审美",
        "isFree": true,
        "sentence": "博物馆里展出的青铜器，无声地诉说着千年的历史沧桑。",
        "pinyin": "Bó wù guǎn li zhǎn chū de qīng tóng qì, wú shēng de sù shuō zhe qiān nián de lì shǐ cāng sāng.",
        "translation": "Museum bronze wares silently recount millennia of historical vicissitudes.",
        "grammarPoint": "成语 (历史沧桑) 与高级动词 (诉说)",
        "vocabList": []
      },
      {
        "id": "adv56_111",
        "title": "03. 闲暇生活与文化审美",
        "isFree": true,
        "sentence": "艺术源于生活而高于生活，好的作品总能直击心灵深处。",
        "pinyin": "Yì shù yuán yú shēng huó ér gāo yú shēng huó, hǎo de zuò pǐn zǒng néng zhí jī xīn líng shēn chù.",
        "translation": "Art originates from life yet surpasses it; good works strike deep hearts.",
        "grammarPoint": "经典美学观点表达",
        "vocabList": []
      },
      {
        "id": "adv56_112",
        "title": "04. 闲暇生活与文化审美",
        "isFree": true,
        "sentence": "他沉迷于古典音乐的交织旋律中，暂时忘却了尘世的喧嚣。",
        "pinyin": "Tā chén mí zài gǔ diǎn yīn yuè de jiāo zhī xuán lǜ zhōng, zàn shí wàng què le chén shì de xuān xiāo.",
        "translation": "He indulged in classical music melodies, temporarily forgetting worldly noise.",
        "grammarPoint": "高级词汇 (沉迷/交织/喧嚣)",
        "vocabList": []
      },
      {
        "id": "adv56_113",
        "title": "05. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "周末去看一场话剧演出，是对精神世界的一次滋养。",
        "pinyin": "Zhōu mò qù kàn yī chǎng huà jù yǎn chū, shì duì jīng shén shì jiè de yī cì zī yǎng.",
        "translation": "Going to a play on weekend is nourishment for the spiritual world.",
        "grammarPoint": "专业戏剧词汇 (话剧演出)",
        "vocabList": []
      },
      {
        "id": "adv56_114",
        "title": "06. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "他用镜头捕捉光影的流转，将平凡的街景拍出了电影感。",
        "pinyin": "Tā yòng jìng tóu bǔ zhuō guāng yǐng de liú zhuǎn, jiāng píng fán de jiē jǐng pāi chū le diàn yǐng gǎn.",
        "translation": "He captures light flows with lenses, shooting ordinary streets with cinematic feel.",
        "grammarPoint": "摄影美学词汇 (光影/捕获)",
        "vocabList": []
      },
      {
        "id": "adv56_115",
        "title": "07. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "读一本好书就像与高尚的灵魂对话，让人受益匪浅。",
        "pinyin": "Dú yī běn hǎo shū jiù xiàng yǔ gāo shàng de líng hún duì huà, ràng rén shòu yì fěi qiǎn.",
        "translation": "Reading a book is conversing with noble souls, benefiting immensely.",
        "grammarPoint": "成语 (受益匪浅) 与比喻修辞",
        "vocabList": []
      },
      {
        "id": "adv56_116",
        "title": "08. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "中国传统园林的造景艺术讲究曲径通幽、一步一景。",
        "pinyin": "Zhōng guó chuán tǒng yuán lín de zào jǐng yì shù jiǎng jiù qū jìng tōng yōu, yī bù yī jǐng.",
        "translation": "Traditional Chinese garden design emphasizes winding paths and scenery at every step.",
        "grammarPoint": "传统文化成语 (曲径通幽)",
        "vocabList": []
      },
      {
        "id": "adv56_117",
        "title": "09. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "审美能力的提升需要日复一日的熏陶与文化积淀。",
        "pinyin": "Shěn měi néng lì de tí shēng xū yào rì fù yī rì de xūn táo yǔ w\u00e9n hu\u00e0 jī diàn.",
        "translation": "Enhancing aesthetic ability requires day-by-day cultivation and cultural buildup.",
        "grammarPoint": "高级词汇 (熏陶/积淀)",
        "vocabList": []
      },
      {
        "id": "adv56_118",
        "title": "10. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "他在陶艺工作室亲手捏制了一只粗朴自然的茶盏。",
        "pinyin": "Tā zài táo yì gōng zuò shì qīn shǒu niē zhì le yī zhī cū pǔ zì rán de chá zhǎn.",
        "translation": "He hand-sculpted a rustic, natural tea cup in a pottery studio.",
        "grammarPoint": "工艺美学词汇 (陶艺/粗朴/茶盏)",
        "vocabList": []
      },
      {
        "id": "adv56_119",
        "title": "11. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "慢下来的时光里，连一片落叶的飘零都显得韵味十足。",
        "pinyin": "Màn xià lái de shí guāng li, lián yí piàn luò yè de piāo líng dōu xiǎn de yùn wèi shí zú.",
        "translation": "In slowed-down times, even a falling leaf's drift is full of poetic charm.",
        "grammarPoint": "高级词汇 (飘零/韵味十足)",
        "vocabList": []
      },
      {
        "id": "adv56_120",
        "title": "12. 闲暇生活与文化审美",
        "isFree": false,
        "sentence": "文化是一代代人的精神根脉，滋养着我们的文化自信。",
        "pinyin": "Wén huà shì yī dài dài rén de jīng shén gēn mài, zī yǎng zhe wǒ men de wén huà zì xìn.",
        "translation": "Culture is spiritual roots of generations, nourishing cultural confidence.",
        "grammarPoint": "高级词汇 (根脉/滋养/自信)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_11",
    "title": "社交媒体与数字生活 \u00b7 Social Media & Digital Lifestyle",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "社",
    "coverClass": "c1",
    "intro": "Explore advanced Mandarin through social media & digital lifestyle, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_121",
        "title": "01. 社交媒体与数字生活",
        "isFree": true,
        "sentence": "算法推荐精准地投其所好，让人不知不觉陷入信息茧房。",
        "pinyin": "Suàn fǎ tuī jiàn jīng zhǔn de tóu qí suǒ hào, ràng rén bù zhī bù jué xiàn rù xìn xī jiǎn fáng.",
        "translation": "Algorithm recommendations feed preferences, sinking us into echo chambers.",
        "grammarPoint": "现代互联网词汇 (信息茧房/精准推荐)",
        "vocabList": []
      },
      {
        "id": "adv56_122",
        "title": "02. 社交媒体与数字生活",
        "isFree": true,
        "sentence": "朋友圈里的岁月静好，往往只是别人生活精修后的切片。",
        "pinyin": "Péng you quān li de suì yuè jìng hǎo, wǎng wǎng zhǐ shì bié rén shēng huó jīng xiū hòu de qiē piàn.",
        "translation": "Social media serenity is often just heavily edited slices of others' lives.",
        "grammarPoint": "现代热词 (岁月静好/精修)",
        "vocabList": []
      },
      {
        "id": "adv56_123",
        "title": "03. 社交媒体与数字生活",
        "isFree": true,
        "sentence": "面对网络上的恶意评论，他选择冷处理，不与水军纠缠。",
        "pinyin": "Miàn duì wǎng luò shang de è yì píng lùn, tā xuǎn zé lěng chǔ lǐ, bù yǔ shuǐ jūn jiū chán.",
        "translation": "Faced with abusive comments online, he chose not to engage or get drawn into arguments with trolls.",
        "grammarPoint": "现代网络词 (水军/冷处理)",
        "vocabList": []
      },
      {
        "id": "adv56_124",
        "title": "04. 社交媒体与数字生活",
        "isFree": true,
        "sentence": "远程办公打破了地理限制，但也模糊了工作与生活的边界。",
        "pinyin": "Yuǎn chéng bàn gōng dǎ pò le dì lǐ xiàn zhì, dàn yě mó hú le gōng zuò yǔ shēng huó de biān jiè.",
        "translation": "Remote work breaks geographic limits, but blurs work-life boundaries.",
        "grammarPoint": "科技职场热词 (远程办公/边界)",
        "vocabList": []
      },
      {
        "id": "adv56_125",
        "title": "05. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "短视频的碎片化轰炸，正在悄悄瓦解现代人的深度专注力。",
        "pinyin": "Duǎn shì pín de suì piàn huà hōng zhà, zhèng zài qiāo qiāo wǎ jiě xiàn dài rén de shēn dù zhuān zhù lì.",
        "translation": "Fragmented short-video bombardment is stealthily eroding modern focus.",
        "grammarPoint": "高级动词 (瓦解/轰炸) 与专业词",
        "vocabList": []
      },
      {
        "id": "adv56_126",
        "title": "06. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "人工智能的爆发式发展，让人类不得不重新思考自身的独特性。",
        "pinyin": "Rén gōng zhì néng de bào fā shì fā zhǎn, ràng rén lì bù dé bù chóng xīn sī kǎo zì shēn de dú tè xìng.",
        "translation": "AI's explosive growth forces humans to rethink their unique traits.",
        "grammarPoint": "前沿科技热词 (人工智能/爆发式)",
        "vocabList": []
      },
      {
        "id": "adv56_127",
        "title": "07. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "线上社交越频繁，有时反而会加剧现实中的孤独感。",
        "pinyin": "Xiàn shàng shè jiāo yuè pín fán, yǒu shí fǎn ér huì jiā jù xiàn shí zhōng de gū dú gǎn.",
        "translation": "Online socializing, the denser it is, sometimes intensifies real-world loneliness.",
        "grammarPoint": "进阶语法 (越……越……) 与高级词 (加剧)",
        "vocabList": []
      },
      {
        "id": "adv56_128",
        "title": "08. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "他注册了一个个人博客，坚持用文字记录真实的思考轨迹。",
        "pinyin": "Tā zhù cè le yí gè gè rén bó kè, jiān chí yòng wén zì jì lù zhēn shí de sī kǎo guǐ jì.",
        "translation": "He registered a personal blog, persisting in recording real thought trails.",
        "grammarPoint": "科技生活词汇 (博客/轨迹)",
        "vocabList": []
      },
      {
        "id": "adv56_129",
        "title": "09. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "数字化支付的普及，让出门不带钱包成了习以为常的事。",
        "pinyin": "Shù zì huà zhī fù de pǔ jí, ràng chū mén bú dài qián bāo chéng le xí yǐ wéi cháng de shì.",
        "translation": "Digital payment popularization makes going out wallet-free commonplace.",
        "grammarPoint": "成语 (习以为常) 与专业词 (普及)",
        "vocabList": []
      },
      {
        "id": "adv56_130",
        "title": "10. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "隐私泄露和大数据杀熟，成了数字时代隐形的威胁。",
        "pinyin": "Yǐn sī xiè lòu hé dà shù jù shā shú, chéng le shù zì shí dài yǐn xíng de wēi xié.",
        "translation": "Data leaks and big-data price discrimination are digital age invisible threats.",
        "grammarPoint": "现代网络安全词汇 (大数据杀熟/隐私)",
        "vocabList": []
      },
      {
        "id": "adv56_131",
        "title": "11. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "他果断关闭了手机推送通知，找回了不被打扰的宁静。",
        "pinyin": "Tā guǒ duàn guān bì le shǒu jī tuī sòng tōng zhī, zhǎo huí le bù bèi dǎ rǎo de níng jìng.",
        "translation": "He decisively turned off phone push notifications, reclaiming undisturbed peace.",
        "grammarPoint": "高级动词 (果断关闭/打扰)",
        "vocabList": []
      },
      {
        "id": "adv56_132",
        "title": "12. 社交媒体与数字生活",
        "isFree": false,
        "sentence": "技术本无善恶，关键在于人类如何驾驭它服务于美好的生活。",
        "pinyin": "Jì shù běn wú shàn è, guān jiàn zài yú rén lèi rú hé jià yù tā fú wù yú měi hǎo de shēng huó.",
        "translation": "Tech lacks inherent morals; key is how humans harness it to serve better lives.",
        "grammarPoint": "哲学思辨高级表达 (驾驭/善恶)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_12",
    "title": "突发状况与危机公关 \u00b7 Emergencies & Crisis PR",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "突",
    "coverClass": "c2",
    "intro": "Explore advanced Mandarin through emergencies & crisis pr, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_133",
        "title": "01. 突发状况与危机公关",
        "isFree": true,
        "sentence": "面对突如其来的舆论危机，公关团队必须第一时间介入。",
        "pinyin": "Miàn duì tū rú qí lái de yú lùn wēi jī, gōng guān tuán duì bì xū dì yī shí jiān jiè rù.",
        "translation": "When a public-opinion crisis breaks out, the PR team must step in right away.",
        "grammarPoint": "专业词汇 (舆论危机/公关团队/介入)",
        "vocabList": []
      },
      {
        "id": "adv56_134",
        "title": "02. 突发状况与危机公关",
        "isFree": true,
        "sentence": "航班突然取消打乱了全部行程，他沉着冷静地改签了机票。",
        "pinyin": "Háng bān tū rán qǔ xiāo dǎ luàn le quán bù xíng chéng, tā chén zháo lěng jìng de gǎi qiān le jī piào.",
        "translation": "Sudden flight cancellation disrupted plans; he calmly rescheduled tickets.",
        "grammarPoint": "成语 (沉着冷静) 与专业词 (改签)",
        "vocabList": []
      },
      {
        "id": "adv56_135",
        "title": "03. 突发状况与危机公关",
        "isFree": true,
        "sentence": "关键时刻掉链子是大忌，凡事必须预留备用方案。",
        "pinyin": "Guān jiàn shí kè diào liàn zi shì dà jì, fán shì bì xū yù liú bèi yòng fāng àn.",
        "translation": "Dropping the ball at critical moments is taboo; always have backups.",
        "grammarPoint": "俗语 (掉链子/大忌) 与专业词 (备用方案)",
        "vocabList": []
      },
      {
        "id": "adv56_136",
        "title": "04. 突发状况与危机公关",
        "isFree": true,
        "sentence": "面对交通事故，双方没有争吵，而是理性地拍照交警处理。",
        "pinyin": "Miàn duì jiāo tōng shì gù, shuāng fāng méi yǒu zhēng chǎo, ér shì lǐ xìng de pāi zhào jiāo jǐng chǔ lǐ.",
        "translation": "Facing traffic accidents, they didn't fight, but rationally took photos for police.",
        "grammarPoint": "高级词汇 (理性/交警处理)",
        "vocabList": []
      },
      {
        "id": "adv56_137",
        "title": "05. 突发状况与危机公关",
        "isFree": false,
        "sentence": "突发的暴雨导致地下车库被淹，物业迅速启动了应急预案。",
        "pinyin": "Tū fā de bào yǔ dǎo zhì dì xià chē kù bèi yān, wù yè xùn sù qǐ dòng le yìng jí yù àn.",
        "translation": "Sudden rain flooded the garage; property management quickly triggered emergency plans.",
        "grammarPoint": "专业灾害词汇 (应急预案)",
        "vocabList": []
      },
      {
        "id": "adv56_138",
        "title": "06. 突发状况与危机公关",
        "isFree": false,
        "sentence": "面对客户的愤怒投诉，客服经理用极高的同理心化解了矛盾。",
        "pinyin": "Miàn duì kè hù de fèn nù tóu sù, kè fú jīng lǐ yòng jí gāo de tóng lǐ xīn huà jiě le máo dùn.",
        "translation": "Facing angry customer complaints, CS manager resolved conflicts with high empathy.",
        "grammarPoint": "现代商务心理词汇 (同理心)",
        "vocabList": []
      },
      {
        "id": "adv56_139",
        "title": "07. 突发状况与危机公关",
        "isFree": false,
        "sentence": "公司的产品出现质量瑕疵，管理层连夜公开致歉并召回。",
        "pinyin": "Gōng sī de chǎn pǐn chū xiàn zhì liàng xiá cī, guǎn lǐ céng lián yè gōng kāi zhì qiàn bìng zhào huí.",
        "translation": "Company products had quality flaws; management overnight apologized publicly and recalled.",
        "grammarPoint": "专业词汇 (质量瑕疵/召回)",
        "vocabList": []
      },
      {
        "id": "adv56_140",
        "title": "08. 突发状况与危机公关",
        "isFree": false,
        "sentence": "突发疾病时，掌握基本的急救常识往往能挽救一条生命。",
        "pinyin": "Tū fā jí bìng shí, zhǎng wò jī běn de jí jiù cháng shí wǎng wǎng néng wǎn jiù yī tiáo shēng mìng.",
        "translation": "During sudden illness, basic first aid knowledge often saves lives.",
        "grammarPoint": "专业医疗词汇 (急救常识/挽救)",
        "vocabList": []
      },
      {
        "id": "adv56_141",
        "title": "09. 突发状况与危机公关",
        "isFree": false,
        "sentence": "面对网络谣言，企业第一时间发布了辟谣声明以正视听。",
        "pinyin": "Miàn duì wǎng luò yáo yán, qǐ yè dì yī shí jiān fā bù le pì yáo shēng míng yǐ zhèng shì tīng.",
        "translation": "Facing online rumors, the enterprise released an anti-rumor statement to set records straight.",
        "grammarPoint": "专业词汇 (谣言/辟谣声明/正视听)",
        "vocabList": []
      },
      {
        "id": "adv56_142",
        "title": "10. 突发状况与危机公关",
        "isFree": false,
        "sentence": "机场安检时发现护照遗失，他果断联系领事馆挂失补办。",
        "pinyin": "Jī chǎng ān jiàn shí fā xiàn hù zhào yí shī, tā guǒ duàn lián xì lǐng shì guǎn guà shī bǔ bàn.",
        "translation": "Passport lost at security; he decisively contacted consulate for loss report and reissue.",
        "grammarPoint": "专业词汇 (遗失/挂失补办)",
        "vocabList": []
      },
      {
        "id": "adv56_143",
        "title": "11. 突发状况与危机公关",
        "isFree": false,
        "sentence": "危机就是转机，处理得当反而能提升品牌的公众信誉。",
        "pinyin": "Wēi jī jiù shì zhuǎn jī, chǔ lǐ de dàng fǎn ér néng tí shēng pǐn pái de gōng zhòng xìn yù.",
        "translation": "Crisis is turning point; proper handling enhances brand public credit.",
        "grammarPoint": "成语与高级表达 (危机转机)",
        "vocabList": []
      },
      {
        "id": "adv56_144",
        "title": "12. 突发状况与危机公关",
        "isFree": false,
        "sentence": "居安思危，常备不懈，是在复杂环境中安身立命的法则。",
        "pinyin": "Jū ān sī wēi, cháng bèi bù xiè, shì zài fù zá huán jìng zhōng ān shēn lì mìng de fǎ zé.",
        "translation": "Thinking of danger in safety and staying prepared is the rule for survival in complex environments.",
        "grammarPoint": "成语 (居安思危/安身立命)",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_daily_13",
    "title": "人生哲学与长远愿景 \u00b7 Life Philosophy & Long-term Vision",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "daily",
    "cover": "人",
    "coverClass": "c3",
    "intro": "Explore advanced Mandarin through life philosophy & long-term vision, with modern vocabulary, idioms, and complex sentence patterns.",
    "introZh": "从真实生活议题出发，学习高级词汇、成语与复杂句式。",
    "cards": [
      {
        "id": "adv56_145",
        "title": "01. 人生哲学与长远愿景",
        "isFree": true,
        "sentence": "人生天地间，若白驹过隙，唯有内心充实方不虚此行。",
        "pinyin": "Rén shēng tiān dì jiān, ruò bái jū guò xì, wéi yǒu nèi xīn chōng shí fāng bù xū cǐ xíng.",
        "translation": "Human life between heaven and earth is a fleeting white horse; fulfillment prevents wasted trips.",
        "grammarPoint": "古典诗意成语 (白驹过隙/不虚此行)",
        "vocabList": []
      },
      {
        "id": "adv56_146",
        "title": "02. 人生哲学与长远愿景",
        "isFree": true,
        "sentence": "真正的成熟，是看清生活的真相后依然热爱生活。",
        "pinyin": "Zhēn zhèng de chéng shú, shì kàn qīng shēng huó de zhēn xiàng hòu yī rán rè ài shēng huó.",
        "translation": "True maturity is loving life after seeing its truth clearly.",
        "grammarPoint": "经典人生哲学金句",
        "vocabList": []
      },
      {
        "id": "adv56_147",
        "title": "03. 人生哲学与长远愿景",
        "isFree": true,
        "sentence": "种一棵树最好的时间是十年前，其次是现在。",
        "pinyin": "Zhǒng yì kē shù zuì hǎo de shí jiān shì shí nián qián, qí cì shì xiàn zài.",
        "translation": "The best time to plant a tree was 10 years ago; the second best is now.",
        "grammarPoint": "著名人生哲理警句",
        "vocabList": []
      },
      {
        "id": "adv56_148",
        "title": "04. 人生哲学与长远愿景",
        "isFree": true,
        "sentence": "回首过往的岁月，那些曾经的坎坷都成了生命的勋章。",
        "pinyin": "Huí shǒu guò wǎng de suì yuè, nà xiē céng jīng de kǎn kě dōu chéng le shēng mìng de xūn zhāng.",
        "translation": "Looking back, past bumps all became life's medals.",
        "grammarPoint": "高级词汇 (回首/坎坷/勋章)",
        "vocabList": []
      },
      {
        "id": "adv56_149",
        "title": "05. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "宠辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。",
        "pinyin": "Chǒng rǔ bù jīng, kàn tíng qián huā kāi huā luò; qù liú wú yì, wàng tiān kōng yún juǎn yún shū.",
        "translation": "Unmoved by honor/disgrace, watching flowers bloom/fall; indifferent to staying/leaving, watching clouds roll.",
        "grammarPoint": "经典古典哲学美学意境",
        "vocabList": []
      },
      {
        "id": "adv56_150",
        "title": "06. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "浮躁的社会里，能坚守内心初心的人弥足珍贵。",
        "pinyin": "Fú zào de shè huì li, néng jiān shǒu nèi xīn chū xin de rén mí zú zhēn guì.",
        "translation": "In a restless society, those keeping original inner aspiration are extremely precious.",
        "grammarPoint": "高级词汇 (浮躁/坚守/弥足珍贵)",
        "vocabList": []
      },
      {
        "id": "adv56_151",
        "title": "07. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "幸福不是拥有得多，而是计较得少，懂得知足常乐。",
        "pinyin": "Xìng fú bú shì yōng yǒu de duō, ér shì jì jiào de shǎo, dǒng de zhī zú cháng lè.",
        "translation": "Happiness isn't owning more, but calculating less and knowing contentment.",
        "grammarPoint": "传统智慧金句 (知足常乐)",
        "vocabList": []
      },
      {
        "id": "adv56_152",
        "title": "08. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "一个人走得快，但一群人才能走得远，格局决定结局。",
        "pinyin": "Yī gè rén zǒu de kuài, dàn yì qún rén cái néng zǒu de yuǎn, gé jú jué dìng jié jú.",
        "translation": "One walks fast, but a group walks far; perspective dictates outcomes.",
        "grammarPoint": "现代格局思维金句",
        "vocabList": []
      },
      {
        "id": "adv56_153",
        "title": "09. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "岁月会带走青春的容颜，却会沉淀出智慧与从容。",
        "pinyin": "Suì yuè huì dài zǒu qīng chūn de róng yán, què huì chén diàn chū zhì huì yǔ cóng róng.",
        "translation": "Years take youth's face, but precipitate wisdom and composure.",
        "grammarPoint": "高级词汇 (沉淀/从容)",
        "vocabList": []
      },
      {
        "id": "adv56_154",
        "title": "10. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "愿我们在历经千帆后，依然能保持少年的赤子之心。",
        "pinyin": "Yuàn wǒ men zài lì jīng qiān fān hòu, yī rán néng bǎo chí shào nián de chì zǐ zhī xīn.",
        "translation": "May we, after thousands of sails, still retain youthful innocent hearts.",
        "grammarPoint": "成语 (历经千帆/赤子之心)",
        "vocabList": []
      },
      {
        "id": "adv56_155",
        "title": "11. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "生命的意义不在于长度，而在于宽度与厚度的拓展。",
        "pinyin": "Shēng mìng de yì yì bù zài yú cháng dù, ér zài yú kuān dù yǔ hòu dù de tuò zhǎn.",
        "translation": "Life's meaning lies not in length, but in expansion of width and depth.",
        "grammarPoint": "哲学思辨表达 (宽度与厚度)",
        "vocabList": []
      },
      {
        "id": "adv56_156",
        "title": "12. 人生哲学与长远愿景",
        "isFree": false,
        "sentence": "星光不问赶路人，时光不负有心人，未来的你会感谢现在的拼搏。",
        "pinyin": "Xīng guāng bù wèn gǎn lù rén, shí guāng bù fù yǒu xīn rén, wèi lái de nǐ huì xiè xie xiàn zài de pīn bó.",
        "translation": "Starlight bypasses no travelers; time rewards the devoted; your future thanks today's hustle.",
        "grammarPoint": "哲理性激励表达与复句结构",
        "vocabList": []
      }
    ]
  }
];
  window.STORIES_DATA = {
    ...(base && typeof base === 'object' ? base : {}),
    collection: (base && base.collection) ? base.collection + ' + Advanced Daily Life HSK 5-6' : 'HanLingo Advanced Daily Life HSK 5-6',
    stories: [
      ...((base && Array.isArray(base.stories)) ? base.stories : []),
      ...advancedDailyStories
    ]
  };
})();
