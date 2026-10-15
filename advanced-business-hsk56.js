(function () {
  const base = window.STORIES_DATA || { stories: [] };
  const advancedBusinessStories = [
  {
    "columnId": "advanced_business_01",
    "title": "宏观经济与战略愿景 · Macroeconomics & Strategic Vision",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "宏",
    "coverClass": "c1",
    "intro": "Build advanced workplace Mandarin through macroeconomics & strategic vision, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "通过宏观趋势与企业战略案例，提升商务分析与远景表达能力。",
    "cards": [
      {
        "id": "biz56_001",
        "title": "01. 宏观经济与战略愿景",
        "isFree": true,
        "sentence": "面对复杂多变的宏观经济形势，企业必须审时度势。",
        "pinyin": "Miàn duì fù zá duō biàn de hóng guān jīng jì xíng shì, qǐ yè bì xū shěn shí dù shì.",
        "translation": "Facing a complex and changing macroeconomic climate, companies must assess conditions and adapt their strategy.",
        "grammarPoint": "高级成语 (审时度势) 与专业词 (宏观经济)",
        "vocabList": []
      },
      {
        "id": "biz56_002",
        "title": "02. 宏观经济与战略愿景",
        "isFree": true,
        "sentence": "数字化转型已不再是选择题，而是关乎生存的必答题。",
        "pinyin": "Shù zì huà zhuǎn xíng yǐ bù zài shì xuǎn zé tí, ér shì guān hū shēng cún de bì dá tí.",
        "translation": "Digital transformation is no longer optional, but a survival imperative.",
        "grammarPoint": "递进对比结构与高级词 (关乎生存)",
        "vocabList": []
      },
      {
        "id": "biz56_003",
        "title": "03. 宏观经济与战略愿景",
        "isFree": true,
        "sentence": "我们需要立足本土市场，同时保持放眼全球的战略视野。",
        "pinyin": "Wǒ men xū yào lì zú běn tǔ shì chǎng, tóng shí bǎo chí fàng yǎn quán qiú de zhè lüè shì yě.",
        "translation": "We need to base ourselves locally while maintaining a global strategic vision.",
        "grammarPoint": "高级短语 (立足本土/放眼全球)",
        "vocabList": []
      },
      {
        "id": "biz56_004",
        "title": "04. 宏观经济与战略愿景",
        "isFree": true,
        "sentence": "行业周期的波动对我们既是严峻的挑战，也是洗牌的契机。",
        "pinyin": "Háng yè zhōu qī de bō dòng duì wǒ men jì shì yán jùn de tiǎo zhàn, yě shì xǐ pái de qì jī.",
        "translation": "Industry cycle fluctuations are both severe challenges and reshaping opportunities.",
        "grammarPoint": "并列复句 (既是……也是……)",
        "vocabList": []
      },
      {
        "id": "biz56_005",
        "title": "05. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "公司的长期愿景是成为该垂直领域无可替代的领军者。",
        "pinyin": "Gōng sī de cháng qī yuàn jǐng shì chéng wéi gāi chuí zhí lǐng yù wú kě tì dài de lǐng jūn zhě.",
        "translation": "The long-term vision is to be an irreplaceable leader in this vertical field.",
        "grammarPoint": "专业词汇 (垂直领域/愿景/领军者)",
        "vocabList": []
      },
      {
        "id": "biz56_006",
        "title": "06. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "只有持续进行颠覆式创新，才能在激烈的竞争中立于不败之地。",
        "pinyin": "Zhǐ yǒu chí xù jìn xíng diān fù shì chuāng xīn, cái néng zài jī liè de jìng zhēng zhōng lì yú bù bài zhī dì.",
        "translation": "Only continuous disruptive innovation ensures invincibility in fierce competition.",
        "grammarPoint": "条件复句与高级成语 (颠覆式创新)",
        "vocabList": []
      },
      {
        "id": "biz56_007",
        "title": "07. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "集团董事会高瞻远瞩，提前布局了下一代核心技术。",
        "pinyin": "Jítuán dǒng shì huì gāo zhān yuǎn zhǔ, tí qián bù jú le xià yī dài hé xīn jì shù.",
        "translation": "The group board showed great foresight, deploying next-gen core tech early.",
        "grammarPoint": "高级成语 (高瞻远瞩/布局)",
        "vocabList": []
      },
      {
        "id": "biz56_008",
        "title": "08. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "我们必须打破路径依赖，通过精细化管理降本增效。",
        "pinyin": "Wǒ men bì xū dǎ pò lù jìng yī lài, tōng guò jīng xì huà guǎn lǐ jiàng běn zēng xiào.",
        "translation": "We must break path dependence, cutting costs and boosting efficiency via refinement.",
        "grammarPoint": "经管专业词汇 (路径依赖/降本增效)",
        "vocabList": []
      },
      {
        "id": "biz56_009",
        "title": "09. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "绿色可持续发展已成为衡量企业社会责任的核心指标。",
        "pinyin": "Lǜ sè kě chí xù fā zhǎn yǐ chéng wéi héng liáng qǐ yè shè huì zé rèn de hé xīn zhǐ biāo.",
        "translation": "Green sustainable development is a core metric for corporate social responsibility.",
        "grammarPoint": "专业术语 (可持续发展/核心指标)",
        "vocabList": []
      },
      {
        "id": "biz56_010",
        "title": "10. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "评估海外市场的合规风险，是拓展国际业务的当务之急。",
        "pinyin": "Píng gū hǎi wài shì chǎng de hé guī fēng xiǎn, shì tuò zhǎn guó jì yè wù de dāng wù zhī jí.",
        "translation": "Assessing overseas compliance risks is the top priority for international expansion.",
        "grammarPoint": "专业词汇 (合规风险/当务之急)",
        "vocabList": []
      },
      {
        "id": "biz56_011",
        "title": "11. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "跨国并购不仅要看财务报表，更要注重企业文化的深度融合。",
        "pinyin": "Kuà guó bìng gòu bù jǐn yào kàn cái wù bào biǎo, gèng yào zhù zhòng qǐ yè wén huà de shēn dù róng hé.",
        "translation": "Cross-border M&A looks beyond financials to deep corporate culture integration.",
        "grammarPoint": "专业词汇 (跨国并购/财务报表/融合)",
        "vocabList": []
      },
      {
        "id": "biz56_012",
        "title": "12. 宏观经济与战略愿景",
        "isFree": false,
        "sentence": "面对黑天鹅事件频发的时代，构建柔性供应链刻不容缓。",
        "pinyin": "Miàn duì hēi tiān ē shì jiàn pín fā de shí dài, gòu jiàn róu xìng gōng yìng liàn kè bù róng huǎn.",
        "translation": "In an era of frequent black swans, building a flexible supply chain is urgent.",
        "grammarPoint": "高级成语 (刻不容缓) 与财经热词 (黑天鹅)主题二：投融资与资本运作 (Investment, Financing & Capital Operations)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_02",
    "title": "投融资与资本运作 · Investment, Financing & Capital Operations",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "投",
    "coverClass": "c2",
    "intro": "Build advanced workplace Mandarin through investment, financing & capital operations, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "结合融资、估值和资本结构，学习真实投融资语境中的表达。",
    "cards": [
      {
        "id": "biz56_013",
        "title": "01. 投融资与资本运作",
        "isFree": true,
        "sentence": "该初创企业凭借颠覆性的商业模式成功完成了首轮融资。",
        "pinyin": "Gāi chū chuàng qǐ yè píng jiè diān fù xìng de shāng yè mó shì chéng gōng wán chéng le shǒu lún róng zī.",
        "translation": "The startup successfully completed its first equity funding round through a disruptive business model.",
        "grammarPoint": "财经词汇 (初创企业/A轮融资)",
        "vocabList": []
      },
      {
        "id": "biz56_014",
        "title": "02. 投融资与资本运作",
        "isFree": true,
        "sentence": "投资人对项目的商业闭环和现金流状况提出了严厉质询。",
        "pinyin": "Tòu zī rén duì xiàng mù de shāng yè bì huán hé xiàn jīn liú zhuàng kuàng tí chū le yán lì zhì xún.",
        "translation": "Investors sharply interrogated the project's business loop and cash flow.",
        "grammarPoint": "专业财经词汇 (商业闭环/现金流/质询)",
        "vocabList": []
      },
      {
        "id": "biz56_015",
        "title": "03. 投融资与资本运作",
        "isFree": true,
        "sentence": "尽职调查团队正在对目标公司进行全方位的审计。",
        "pinyin": "Jìn zhí diào chá tuán duì zhèng zài duì mù biāo gōng sī jìn xíng quán fāng wèi de shěn jì.",
        "translation": "The due diligence team is conducting a comprehensive audit of the target company.",
        "grammarPoint": "商务专业词汇 (尽职调查/审计)",
        "vocabList": []
      },
      {
        "id": "biz56_016",
        "title": "04. 投融资与资本运作",
        "isFree": true,
        "sentence": "由于估值分歧过大，本轮并购谈判陷入了僵局。",
        "pinyin": "Yóu yú gū zhí fēn qí guò dà, běn lùn bìng gòu tán pàn xiàn rù le jiāng jú.",
        "translation": "Due to massive valuation divergence, this M&A negotiation stalled.",
        "grammarPoint": "高级词汇 (估值分歧/陷入僵局)",
        "vocabList": []
      },
      {
        "id": "biz56_017",
        "title": "05. 投融资与资本运作",
        "isFree": false,
        "sentence": "健全的财务内控机制是企业登陆资本市场的前提条件。",
        "pinyin": "Jiàn quán de cái wù nèi kòng jī zhì shì qǐ yè dēng lù zī běn shì chǎng de qián tí tiáo jiàn.",
        "translation": "Sound financial internal control is a prerequisite for entering capital markets.",
        "grammarPoint": "财经专业词汇 (财务内控/资本市场)",
        "vocabList": []
      },
      {
        "id": "biz56_018",
        "title": "06. 投融资与资本运作",
        "isFree": false,
        "sentence": "股权结构的设计直接关系到创始团队对公司的控制权。",
        "pinyin": "Gǔ quán jié gòu de shè jì zhí jiē guān xì dào chuàng shǐ tuán duì duì gōng sī de kòng zhì quán.",
        "translation": "Equity structure design directly relates to founders' corporate control.",
        "grammarPoint": "专业法律财务词汇 (股权结构/控制权)",
        "vocabList": []
      },
      {
        "id": "biz56_019",
        "title": "07. 投融资与资本运作",
        "isFree": false,
        "sentence": "随着宏观流动性收紧，?????????机构的投资态度日趋谨慎。",
        "pinyin": "Suí zhe hóng guān liú dòng xìng shōu jǐn, VC/PE jī gòu de tóu zī tài dù rì qū jǐn shèn.",
        "translation": "As macro liquidity tightens, VC/PE investment attitudes grow increasingly cautious.",
        "grammarPoint": "专业词汇 (流动性收紧/日趋谨慎)",
        "vocabList": []
      },
      {
        "id": "biz56_020",
        "title": "08. 投融资与资本运作",
        "isFree": false,
        "sentence": "这项资产重组方案旨在剥离不良业务，释放盈利空间。",
        "pinyin": "Zhè xiàng zī chǎn chóng zǔ fāng àn zhǐ zài bō lí bù liáng yè wù, shì fàng yíng lì kōng jiān.",
        "translation": "This asset restructuring aims to strip toxic assets and release profit room.",
        "grammarPoint": "专业词汇 (资产重组/剥离)",
        "vocabList": []
      },
      {
        "id": "biz56_021",
        "title": "09. 投融资与资本运作",
        "isFree": false,
        "sentence": "投资组合的多样化有效对冲了单一市场的系统性风险。",
        "pinyin": "Tóu zī zǔ hé de duō yàng huà yǒu xiào duì chōng le dān yī shì chǎng de xì tǒng xìng fēng xiǎn.",
        "translation": "Portfolio diversification effectively hedged single-market systematic risk.",
        "grammarPoint": "投资专业词汇 (投资组合/对冲/系统性风险)",
        "vocabList": []
      },
      {
        "id": "biz56_022",
        "title": "10. 投融资与资本运作",
        "isFree": false,
        "sentence": "公司计划通过发行可转债来筹集后续扩张所需资金。",
        "pinyin": "Gōng sī jì hù tōng guò fā xíng kě zhuǎn zhài lái chóu jí hòu xù kuò zhāng suǒ xū zī jīn.",
        "translation": "The company plans to raise expansion funds via convertible bonds.",
        "grammarPoint": "财经专业词汇 (发行可转债/筹集)",
        "vocabList": []
      },
      {
        "id": "biz56_023",
        "title": "11. 投融资与资本运作",
        "isFree": false,
        "sentence": "资本往往具有逐利性和短期性，必须保持战略定力。",
        "pinyin": "Zī běn wǎng wǎng jù yǒu zhú lì xìng hé duǎn qī xìng, bì xū bǎo chí zhè lüè dìng lì.",
        "translation": "Capital is profit-driven and short-term; strategic composure must be kept.",
        "grammarPoint": "财经哲理表达 (逐利性/战略定力)",
        "vocabList": []
      },
      {
        "id": "biz56_024",
        "title": "12. 投融资与资本运作",
        "isFree": false,
        "sentence": "敲响上市钟声的那一刻，是对多年艰辛创业最好的回报。",
        "pinyin": "Qiāo xiǎng shàng shì zhōng shēng de nà yí kè, shì duì duō nián jiān xīn chuàng yè zuì hǎo de huí bào.",
        "translation": "The bell-ringing IPO moment is the best reward for years of hard entrepreneurship.",
        "grammarPoint": "高级文笔与资本市场词汇 (敲响上市钟声)主题三：高级商务谈判与博弈 (Advanced Business Negotiation & Gaming)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_03",
    "title": "高级商务谈判与博弈 · Advanced Business Negotiation & Gaming",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "高",
    "coverClass": "c3",
    "intro": "Build advanced workplace Mandarin through advanced business negotiation & gaming, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "在多方谈判案例中，练习提出条件、交换筹码与达成共识。",
    "cards": [
      {
        "id": "biz56_025",
        "title": "01. 高级商务谈判与博弈",
        "isFree": true,
        "sentence": "在这场多方博弈的谈判中，保持信息不对称是我们的筹码。",
        "pinyin": "Zài zhè chǎng duō fāng bó yì de tán pàn zhōng, bǎo chí xìn xī bù duì chèn shì wǒ men de chóu mǎ.",
        "translation": "In this multi-party negotiation, maintaining an information advantage is one of our bargaining chips.",
        "grammarPoint": "经济博弈词汇 (信息不对称/筹码)",
        "vocabList": []
      },
      {
        "id": "biz56_026",
        "title": "02. 高级商务谈判与博弈",
        "isFree": true,
        "sentence": "对方在开场时便抛出了极具压迫感的底线条件。",
        "pinyin": "Duì fāng zài kāi chǎng shí biàn pāo chū le jí jù yā pò gǎn de dǐ xiàn tiáo jiàn.",
        "translation": "The opponent tossed out extremely oppressive bottom-line terms at the opening.",
        "grammarPoint": "高级词汇 (压迫感/底线条件)",
        "vocabList": []
      },
      {
        "id": "biz56_027",
        "title": "03. 高级商务谈判与博弈",
        "isFree": true,
        "sentence": "谈判专家善于运用“锚定效应”，先发制人掌控议程节奏。",
        "pinyin": "Tán pàn zhuān jiā shàn yú yùn yòng \"máo dìng xiào yìng\", xiān fā zhì rén zhǎng kòng yì chéng jié zòu.",
        "translation": "Negotiation experts excel at anchoring effects, seizing initiative on agendas.",
        "grammarPoint": "心理学与商务词汇 (锚定效应/先发制人)",
        "vocabList": []
      },
      {
        "id": "biz56_028",
        "title": "04. 高级商务谈判与博弈",
        "isFree": true,
        "sentence": "为了打破僵局，我们适时提出了一套互利共赢的替代方案。",
        "pinyin": "Wèi le dǎ pò jiāng jú, wǒ men shì shí tí chū le yī tào hù lì gòng yíng de tì dài fāng àn.",
        "translation": "To break the stalemate, we timely proposed a win-win alternative package.",
        "grammarPoint": "高级词汇 (适时/互利共赢)",
        "vocabList": []
      },
      {
        "id": "biz56_029",
        "title": "05. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "商务谈判不仅是唇枪舌剑的交锋，更是心理素质的较量。",
        "pinyin": "Shāng wù tán pàn bù jǐn shì chún qiāng shé jiàn de jiāo fēng, gèng shì xīn lǐ sù zhì de jiào liàng.",
        "translation": "Biz negotiations are not just verbal duels, but psychological contests.",
        "grammarPoint": "成语 (唇枪舌剑/较量)",
        "vocabList": []
      },
      {
        "id": "biz56_030",
        "title": "06. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "在核心利益上我们绝不退让，但在非关键条款上可以灵活变通。",
        "pinyin": "Zài hé xīn lì yì shang wǒ men jué bù tuì ràng, dàn zài fēi guān jiàn tiáo kuǎn shang kě yǐ líng huó biàn tōng.",
        "translation": "We yield nothing on core interests, but stay flexible on non-critical clauses.",
        "grammarPoint": "转折连词与高级词汇 (灵活变通)",
        "vocabList": []
      },
      {
        "id": "biz56_031",
        "title": "07. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "对方试图通过极限施压迫使我们让步，但这只会适得其反。",
        "pinyin": "Duì fāng shì tú tōng guò jí xiàn shī yā pò shǐ wǒ men ràng bù, dàn zhè zhǐ huì shì dé qí fǎn.",
        "translation": "They tried squeezing us via extreme pressure, but it would backfire.",
        "grammarPoint": "成语 (极限施压/适得其反)",
        "vocabList": []
      },
      {
        "id": "biz56_032",
        "title": "08. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "高明的谈判者往往懂得“欲擒故纵”，给对手留出台阶。",
        "pinyin": "Gāo míng de tán pàn zhě wǎng wǎng dǒng de \"yù qín gù zòng\", gěi duì shǒu liú chū tái jiē.",
        "translation": "Skilled negotiators know how to play hard-to-get, leaving face for rivals.",
        "grammarPoint": "经典成语 (欲擒故纵/留台阶)",
        "vocabList": []
      },
      {
        "id": "biz56_033",
        "title": "09. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "所有的口头承诺必须落实为严谨的法律条文方具效力。",
        "pinyin": "Suǒ yǒu de kǒu tóu chéng nuò bì xū luò shí wéi yán jǐn de fǎ lǜ tiáo wén fāng jù xiào lì.",
        "translation": "All verbal promises must crystallize into rigorous legal clauses to be valid.",
        "grammarPoint": "语法结构 (……方具效力) 与专业词 (落实)",
        "vocabList": []
      },
      {
        "id": "biz56_034",
        "title": "10. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "经过长达十几个小时的拉锯战，双方终于草签了协议。",
        "pinyin": "Jīng guò cháng dá shí jǐ gè xiǎo shí de lā jù zhàn, shuāng fāng zhōng yú cǎo qiān le xié yì.",
        "translation": "After over 10 hours of tug-of-war, both sides finally initialed the agreement.",
        "grammarPoint": "高级词汇 (拉锯战/草签)",
        "vocabList": []
      },
      {
        "id": "biz56_035",
        "title": "11. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "合同签署并不意味着博弈的结束，而是履约履责的开始。",
        "pinyin": "Hétong qiān shǔ bìng bú yì wèi zhe bó yì de jié shù, ér shì lǚ yuē lǚ zé de kāi shǐ.",
        "translation": "Contract signing doesn't end the gaming; it starts performance and compliance.",
        "grammarPoint": "递进复句与商务术语 (履约履责)",
        "vocabList": []
      },
      {
        "id": "biz56_036",
        "title": "12. 高级商务谈判与博弈",
        "isFree": false,
        "sentence": "保持克制与专业，是在残酷的商业谈判中赢得尊重的秘诀。",
        "pinyin": "Bǎo chí kè zhì yǔ zhuān yè, shì zài cán kù de shāng wù tán pàn zhōng yíng de zūn zhòng de mì jué.",
        "translation": "Keeping restraint and professionalism is the secret to respect in brutal talks.",
        "grammarPoint": "高级词汇 (克制/残酷/秘诀)主题四：组织架构与人才战略 (Organizational Structure & Talent Strategy)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_04",
    "title": "组织架构与人才战略 · Organizational Structure & Talent Strategy",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "组",
    "coverClass": "c4",
    "intro": "Build advanced workplace Mandarin through organizational structure & talent strategy, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "学习组织设计、人才识别与绩效管理中的高级职场表达。",
    "cards": [
      {
        "id": "biz56_037",
        "title": "01. 组织架构与人才战略",
        "isFree": true,
        "sentence": "为了提高决策效率，集团决定将扁平化管理推行到底。",
        "pinyin": "Wèi le tí gāo jué cè xiào lǜ, jí tuán jué dìng jiāng biǎn píng huà guǎn lǐ tuī xíng dào dǐ.",
        "translation": "To improve decision-making efficiency, the group decided to fully implement a flatter management structure.",
        "grammarPoint": "经管专业词汇 (扁平化管理/决策效率)",
        "vocabList": []
      },
      {
        "id": "biz56_038",
        "title": "02. 组织架构与人才战略",
        "isFree": true,
        "sentence": "优秀的组织架构应当赋能一线，打破传统的部门壁垒。",
        "pinyin": "Yōu xiù de zǔ zhī jià gòu yīng dāng fù néng yī xiàn, dǎ pò chuán tǒng de bù mén bì lěi.",
        "translation": "Excellent organizational structures must empower front lines and break silos.",
        "grammarPoint": "现代管理词汇 (赋能一线/部门壁垒)",
        "vocabList": []
      },
      {
        "id": "biz56_039",
        "title": "03. 组织架构与人才战略",
        "isFree": true,
        "sentence": "人才梯队建设是企业穿越经济周期的核心护城河。",
        "pinyin": "Rén cái tī duì jiàn shè shì qǐ yè chuān yuè jīng jì zhōu qī de hé xīn hù chéng hé.",
        "translation": "Talent pipeline building is the core moat crossing industry cycles.",
        "grammarPoint": "高级比喻 (护城河) 与人力资源专业词 (人才梯队)",
        "vocabList": []
      },
      {
        "id": "biz56_040",
        "title": "04. 组织架构与人才战略",
        "isFree": true,
        "sentence": "面对高离职率，人力资源部门正在着手优化薪酬福利与激励机制。",
        "pinyin": "Miàn duì gāo lí zhí lǜ, rén lì zī yuán bù mén zhèng zài zhuó shǒu yōu huà xīn chóu fú lì yǔ jī lì jī zhì.",
        "translation": "Facing high turnover, HR is optimizing compensation and incentive systems.",
        "grammarPoint": "专业词汇 (离职率/薪酬福利/激励机制)",
        "vocabList": []
      },
      {
        "id": "biz56_041",
        "title": "05. 组织架构与人才战略",
        "isFree": false,
        "sentence": "我们不仅要“外部海选”牛人，更要注重内部高潜人才的盘点。",
        "pinyin": "Wǒ men bù jǐn yào \"wài bù hǎi xuǎn\" niú rén, gèng yào zhù zhòng nèi bù gāo qiǎn rén cái de pán diǎn.",
        "translation": "We must scout externally and audit internal high-potential talent pools.",
        "grammarPoint": "网络词与专业词 (海选/高潜人才/盘点)",
        "vocabList": []
      },
      {
        "id": "biz56_042",
        "title": "06. 组织架构与人才战略",
        "isFree": false,
        "sentence": "绩效考核指标的科学设定直接调动了团队的积极性。",
        "pinyin": "Jì xiào kǎo hé de kē xué shè dìng zhí jiē tiào dòng le tuán duì de jī jí xìng.",
        "translation": "Scientific KPI/OKR setting directly mobilized team enthusiasm.",
        "grammarPoint": "管理专业词汇 (绩效考核/科学设定)",
        "vocabList": []
      },
      {
        "id": "biz56_043",
        "title": "07. 组织架构与人才战略",
        "isFree": false,
        "sentence": "组织文化的重塑需要从高管层的以身作则开始做起。",
        "pinyin": "Zǔ zhī wén huà de chóng sù xū yào cóng gāo guǎn céng de yǐ shēn zuò zé kāi shǐ zuò qǐ.",
        "translation": "Reforming organizational culture requires leadership leading by example.",
        "grammarPoint": "成语 (以身作则/重塑)",
        "vocabList": []
      },
      {
        "id": "biz56_044",
        "title": "08. 组织架构与人才战略",
        "isFree": false,
        "sentence": "猎头顾问正在全力协助我们物色技术研发的首席科学家。",
        "pinyin": "Liè tóu gù wèn zhèng zài quán lì xié zhù wǒ men wù sè jì shù yán fā de shǒu xí kē xué jiā.",
        "translation": "Headhunters are fully assisting us in scouting a chief research scientist.",
        "grammarPoint": "商务专业词汇 (猎头顾问/物色/首席科学家)",
        "vocabList": []
      },
      {
        "id": "biz56_045",
        "title": "09. 组织架构与人才战略",
        "isFree": false,
        "sentence": "跨文化的团队管理考验着管理者的高度包容与同理心。",
        "pinyin": "Kuà wén huà de tuán duì guǎn lǐ kǎo yàn zhe guǎn lǐ zhě de gāo dù bǎo róng yǔ tóng lǐ xīn.",
        "translation": "Cross-cultural team management tests leadership's extreme tolerance and empathy.",
        "grammarPoint": "专业词汇 (跨文化管理/包容/同理心)",
        "vocabList": []
      },
      {
        "id": "biz56_046",
        "title": "10. 组织架构与人才战略",
        "isFree": false,
        "sentence": "实施末位淘汰制虽然严苛，但能有效激活团队的危机意识。",
        "pinyin": "Shí shī mò wèi táo tài zhì suī rán yán kē, dàn néng yǒu xiào jī huó tuán duì de wēi jī yì shi.",
        "translation": "Implementing bottom-out ranking is harsh, but effectively activates crisis awareness.",
        "grammarPoint": "经管专业词汇 (末位淘汰制/严苛)",
        "vocabList": []
      },
      {
        "id": "biz56_047",
        "title": "11. 组织架构与人才战略",
        "isFree": false,
        "sentence": "员工持股计划将个人利益与公司命运深度绑定。",
        "pinyin": "Yuán gōng chí gǔ jì huà jiāng gè rén lì yì yǔ gōng sī mìng yùn shēn dù bǎng dìng.",
        "translation": "Employee stock ownership plans deeply bind personal interests with corporate fate.",
        "grammarPoint": "财经专业词汇 (ESOP/深度绑定)",
        "vocabList": []
      },
      {
        "id": "biz56_048",
        "title": "12. 组织架构与人才战略",
        "isFree": false,
        "sentence": "优秀的领导者不仅是指挥官，更是团队成长与试错的赋能者。",
        "pinyin": "Yōu xiù de lǐng dǎo zhě bù jǐn shì zhǐ huī guān, gèng shì tuán duì chéng zhǎng yǔ shì cuò de fù néng zhě.",
        "translation": "Great leaders aren't just commanders, but enablers of growth and trial-and-error.",
        "grammarPoint": "递进复句与高级管理哲学主题五：市场营销与品牌定位 (Marketing & Brand Positioning)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_05",
    "title": "市场营销与品牌定位 · Marketing & Brand Positioning",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "市",
    "coverClass": "c5",
    "intro": "Build advanced workplace Mandarin through marketing & brand positioning, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "从市场细分到品牌定位，掌握营销策略与客户价值表达。",
    "cards": [
      {
        "id": "biz56_049",
        "title": "01. 市场营销与品牌定位",
        "isFree": true,
        "sentence": "在同质化严重的红海市场中，精准的品牌定位是破局的关键。",
        "pinyin": "Zài tóng zhì huà yán zhòng de hóng hǎi shì chǎng zhōng, jīng zhǔn de pǐn pái dìng wèi shì pò jú de guān jiàn.",
        "translation": "In a highly commoditized red-ocean market, precise brand positioning is key to breaking through.",
        "grammarPoint": "市场营销热词 (同质化/红海市场/品牌定位)",
        "vocabList": []
      },
      {
        "id": "biz56_050",
        "title": "02. 市场营销与品牌定位",
        "isFree": true,
        "sentence": "我们的核心诉求是占领用户心智，打造具有护城河的高端心智。",
        "pinyin": "Wǒ men de hé xīn sù qiú shì zhàn lǐng yòng hù xīn zhì, dǎ zào jù yǒu hù chéng hé de gāo duān xīn zhì.",
        "translation": "Core demand is occupying user minds, building high-end cognitive moats.",
        "grammarPoint": "营销专业词汇 (占领用户心智/护城河)",
        "vocabList": []
      },
      {
        "id": "biz56_051",
        "title": "03. 市场营销与品牌定位",
        "isFree": true,
        "sentence": "数字化营销通过大数据分析实现了千人千面的精准触达。",
        "pinyin": "Shù zì huà yíng xiāo tōng guò dà shù jù fēn xī shí xiàn le qiān rén qiān miàn de jīng zhǔn chù dá.",
        "translation": "Digital marketing achieves personalized precision reach via big data analytics.",
        "grammarPoint": "现代营销词汇 (千人千面/精准触达)",
        "vocabList": []
      },
      {
        "id": "biz56_052",
        "title": "04. 市场营销与品牌定位",
        "isFree": true,
        "sentence": "这场跨界联名营销活动在社交媒体上引发了现象级的病毒式传播。",
        "pinyin": "Zhè chǎng kuà jiè lián míng yíng xiāo huó dòng zài shè jiāo méi tǐ shang yǐn fā le xiàn xiàng jí de bìng dú shì chuán bō.",
        "translation": "This cross-over co-branding campaign triggered phenomenal viral spread.",
        "grammarPoint": "专业词汇 (跨界联名/现象级/病毒式传播)",
        "vocabList": []
      },
      {
        "id": "biz56_053",
        "title": "05. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "年轻一代消费者更愿意为品牌背后的文化认同和价值观买单。",
        "pinyin": "Nián qīng yī dài xiāo fèi zhě gèng yuàn yì wèi pǐn pái bèi hòu de wén huà rèn tóng hé jià zhí guān mǎi dān.",
        "translation": "Younger consumers are willing to pay for cultural identity and values behind brands.",
        "grammarPoint": "营销热词 (价值观买单/文化认同)",
        "vocabList": []
      },
      {
        "id": "biz56_054",
        "title": "06. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "私域流量的精细化运营，有效提升了用户的复购率与终身价值。",
        "pinyin": "Sī yù liú liàng de jīng xì huà yùn yíng, yǒu xiào tí shēng le yòng hù de fù gòu lǜ yǔ zhōng shēn jià zhí.",
        "translation": "Private traffic precision operations effectively boost repeat purchase rates and LTV.",
        "grammarPoint": "现代营销词汇 (私域流量/复购率/终身价值)",
        "vocabList": []
      },
      {
        "id": "biz56_055",
        "title": "07. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "营销预算必须讲究品效合一，杜绝盲目烧钱却没有转化的虚荣指标。",
        "pinyin": "Yíng xiāo yù suàn bì xū jiǎng jiù pǐn xiào hé yī, dù jué máng mù shāo qián què méi yǒu zhuǎn huà de xū róng zhǐ biāo.",
        "translation": "Marketing budgets demand brand-performance integration, shunning vanity metrics.",
        "grammarPoint": "营销经管高级词 (品效合一/虚荣指标)",
        "vocabList": []
      },
      {
        "id": "biz56_056",
        "title": "08. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "我们成功塑造了富有温度的品牌人设，拉近了与消费者的距离。",
        "pinyin": "Wǒ men chéng gōng sù zào le fù yǒu wēn dù de pǐn pái rén shě, lā jìn le yǔ xiāo fèi zhě de jù lí.",
        "translation": "We successfully shaped a warm brand persona, narrowing distances with consumers.",
        "grammarPoint": "营销热词 (品牌人设/富有温度)",
        "vocabList": []
      },
      {
        "id": "biz56_057",
        "title": "09. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "面对竞品的恶性价格战，我们决定以差异化服务进行降维打击。",
        "pinyin": "Miàn duì jìng pǐn de è xìng jià gé zhàn, wǒ men jué dìng yǐ chā yì huà fú wù jìn xíng jiàng wéi dǎ jī.",
        "translation": "Facing vicious competitor price wars, we chose dimensional strikes via differentiated services.",
        "grammarPoint": "高级商业词汇 (恶意价格战/降维打击)",
        "vocabList": []
      },
      {
        "id": "biz56_058",
        "title": "10. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "口碑营销依然是获取高质量自然流量最具性价比的杠杆。",
        "pinyin": "Kǒu bēi yíng xiāo yī rán shì huò qǔ gāo zhì liàng zì rán liú liàng zuì jù xìng jià bǐ de gàng gǎn.",
        "translation": "Word-of-mouth remains the most cost-effective lever for high-quality organic traffic.",
        "grammarPoint": "专业词汇 (口碑营销/自然流量/杠杆)",
        "vocabList": []
      },
      {
        "id": "biz56_059",
        "title": "11. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "品牌声誉的建立需要长年累月的匠心打磨，毁掉却只需瞬间。",
        "pinyin": "Pǐn pái shēng yù de jiàn lì xū yào cháng nián lèi yuè de jiàng xīn dǎ mó, huǐ diào què zhǐ xū shùn jiān.",
        "translation": "Building brand reputation takes years of meticulous craft; destroying it takes seconds.",
        "grammarPoint": "高级成语 (长年累月/匠心打磨)",
        "vocabList": []
      },
      {
        "id": "biz56_060",
        "title": "12. 市场营销与品牌定位",
        "isFree": false,
        "sentence": "全渠道零售布局打通了线上线下的壁垒，带来了完美的购物闭环。",
        "pinyin": "Quán qū dào líng shòu bù jú dǎ tōng le xiàn shàng xiàn xià de bì lěi, dài lái le wán měi de gòu wù bì huán.",
        "translation": "Omnichannel retail bridges online-offline silos, forging perfect shopping loops.",
        "grammarPoint": "专业词汇 (全渠道零售/购物闭环)主题六：供应链管理与风控 (Supply Chain Management & Risk Control)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_06",
    "title": "供应链管理与风控 · Supply Chain Management & Risk Control",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "供",
    "coverClass": "c1",
    "intro": "Build advanced workplace Mandarin through supply chain management & risk control, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "围绕供应中断、成本波动与供应商管理，学习风险控制表达。",
    "cards": [
      {
        "id": "biz56_061",
        "title": "01. 供应链管理与风控",
        "isFree": true,
        "sentence": "全球供应链的脆弱性迫使企业重新审视供应商的多元化布局。",
        "pinyin": "Quán qiú gōng yìng liàn de cuì ruò xìng pò shǐ qǐ yè chóng xīn shěn shì gōng yìng shāng de duō yuán huà bù jú.",
        "translation": "Fragility in global supply chains is forcing companies to reconsider supplier diversification.",
        "grammarPoint": "专业供应链词汇 (脆弱性/多元化布局)",
        "vocabList": []
      },
      {
        "id": "biz56_062",
        "title": "02. 供应链管理与风控",
        "isFree": true,
        "sentence": "我们通过引入物联网与区块链技术，实现了全链路的溯源追踪。",
        "pinyin": "Wǒ men tōng guò yǐn rù wù lián wǎng hé qū kuài lián jìshu, shí xiàn le quán liàn lù de sù yuán zhuī zōng.",
        "translation": "By introducing IoT and blockchain, we achieved full-chain traceability.",
        "grammarPoint": "科技供应链词汇 (物联网/区块链/溯源追踪)",
        "vocabList": []
      },
      {
        "id": "biz56_063",
        "title": "03. 供应链管理与风控",
        "isFree": true,
        "sentence": "库存周转率的优化直接释放了大量的流动资金。",
        "pinyin": "Kù cún zhōu zhuǎn lǜ de yōu huà zhí jiē shì fàng le dà liàng de liú dòng zī jīn.",
        "translation": "Inventory turnover optimization directly released massive liquid capital.",
        "grammarPoint": "供应链财经词汇 (库存周转率/流动资金)",
        "vocabList": []
      },
      {
        "id": "biz56_064",
        "title": "04. 供应链管理与风控",
        "isFree": true,
        "sentence": "核心零部件的单一信赖构成了不可忽视的供应链断裂风险。",
        "pinyin": "Hé xīn líng bù jiàn de dān yī xìn lài gòu chéng le bù kě hū shì de gōng yìng liàn duàn liè fēng xiǎn.",
        "translation": "Sole reliance on critical parts constitutes an unignorable supply chain snap risk.",
        "grammarPoint": "高级短语 (不可忽视/断裂风险)",
        "vocabList": []
      },
      {
        "id": "biz56_065",
        "title": "05. 供应链管理与风控",
        "isFree": false,
        "sentence": "敏捷供应链管理的核心在于快速响应市场需求的不确定性。",
        "pinyin": "Mǐn jié gōng yìng liàn guǎn lǐ de hé xīn zài yú kuài sù xiǎng yìng shì chǎng xū qiú de bù què dìng xìng.",
        "translation": "Agility supply chain core lies in rapid response to market demand uncertainty.",
        "grammarPoint": "专业管理词汇 (敏捷供应链/不确定性)",
        "vocabList": []
      },
      {
        "id": "biz56_066",
        "title": "06. 供应链管理与风控",
        "isFree": false,
        "sentence": "严格的合规风控审查是企业防范法律雷区的第一道屏障。",
        "pinyin": "Yán gé de hé guī fēng kòng shěn chá shì qǐ yè fáng fàn fǎ lǜ léi qū de dì yī dào píng zhàng.",
        "translation": "Rigorous compliance risk reviews form firms' first barrier against legal minefields.",
        "grammarPoint": "高级比喻 (法律雷区) 与专业词 (合规风控)",
        "vocabList": []
      },
      {
        "id": "biz56_067",
        "title": "07. 供应链管理与风控",
        "isFree": false,
        "sentence": "信用风险评估模型的建立有效降低了坏账率与逾期成本。",
        "pinyin": "Xìn yòng fēng xiǎn píng gū mó xíng de jiàn lì yǒu xiào jiàng dī le huài zhàng lǜ yǔ yú qī chéng běn.",
        "translation": "Credit risk evaluation model building effectively cut bad debt rates and overdue costs.",
        "grammarPoint": "金融风控专业词汇 (信用风险模型/坏账率)",
        "vocabList": []
      },
      {
        "id": "biz56_068",
        "title": "08. 供应链管理与风控",
        "isFree": false,
        "sentence": "面对地缘政治带来的不确定性，企业正在加速推进本地化采购。",
        "pinyin": "Miàn duì dì yuán zhèng zhì dài lái de bù què dìng xìng, qǐ yè zhèng zài jiā sù tuī jìn běn dì huà cǎi gòu.",
        "translation": "Facing geopolitical uncertainties, enterprises are accelerating localization sourcing.",
        "grammarPoint": "宏观供应链词汇 (地缘政治/本地化采购)",
        "vocabList": []
      },
      {
        "id": "biz56_069",
        "title": "09. 供应链管理与风控",
        "isFree": false,
        "sentence": "物流成本的飙升压缩了利润空间，倒逼我们升级运输网络。",
        "pinyin": "Wù liú chéng běn de biāo shēng yā suō le lì rùn kōng jiān, dào bī wǒ men shēng jí yùn shū wǎng luò.",
        "translation": "Surging logistics costs squeeze profit rooms, forcing transport network upgrades.",
        "grammarPoint": "高级动词 (飙升/压缩/倒逼)",
        "vocabList": []
      },
      {
        "id": "biz56_070",
        "title": "10. 供应链管理与风控",
        "isFree": false,
        "sentence": "备用供应商的战略储备确保了极端情况下的持续交付能力。",
        "pinyin": "Bèi yòng gōng yìng shāng de zhè lüè chǔ bèi què bǎo le jí duān qíng kuàng xià de chí xù jiāo fù néng lì.",
        "translation": "Strategic reserve of backup suppliers ensures continued delivery during extremes.",
        "grammarPoint": "专业词汇 (战略储备/持续交付)",
        "vocabList": []
      },
      {
        "id": "biz56_071",
        "title": "11. 供应链管理与风控",
        "isFree": false,
        "sentence": "财务杠杆的过度使用往往会放大市场波动带来的灾难性后果。",
        "pinyin": "Cái wù gàn gǎn de guò dù shǐ yòng wǎng wǎng huì fàng dà shì chǎng bō dòng dài lái de zāi nàn xìng hòu guǒ.",
        "translation": "Overuse of financial leverage often magnifies catastrophic market volatility results.",
        "grammarPoint": "财经风控词汇 (财务杠杆/灾难性后果)",
        "vocabList": []
      },
      {
        "id": "biz56_072",
        "title": "12. 供应链管理与风控",
        "isFree": false,
        "sentence": "健全的风险预警机制可以让我们在危机爆发前夕化险为夷。",
        "pinyin": "Jiàn quán de fēng xiǎn yù jǐng jī zhì kě yǐ ràng wǒ men zài wēi jī bào fā qián xī huà xiǎn wéi yí.",
        "translation": "Sound risk early-warning mechanisms let us turn danger into safety pre-crisis.",
        "grammarPoint": "成语 (化险为夷) 与专业词 (预警机制)主题七：高管领导力与团队管理 (Executive Leadership & Team Management)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_07",
    "title": "高管领导力与团队管理 · Executive Leadership & Team Management",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "高",
    "coverClass": "c2",
    "intro": "Build advanced workplace Mandarin through executive leadership & team management, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "练习愿景沟通、授权决策与团队激励等高管领导力语言。",
    "cards": [
      {
        "id": "biz56_073",
        "title": "01. 高管领导力与团队管理",
        "isFree": true,
        "sentence": "高管团队的格局和视野，直接决定了企业的天花板高度。",
        "pinyin": "Gāo guǎn tuán duì de gé jú hé shì yě, zhí jiē jué dìng le qǐ yè de tiān huā bǎn gāo dù.",
        "translation": "The executive team?s perspective and vision directly determine the company?s growth ceiling.",
        "grammarPoint": "高级职场短语 (天花板高度/格局)",
        "vocabList": []
      },
      {
        "id": "biz56_074",
        "title": "02. 高管领导力与团队管理",
        "isFree": true,
        "sentence": "在充满不确定性的时代，领导者不仅要规划愿景，更要具备容错的胸怀。",
        "pinyin": "Zài chōng mǎn bù què dìng xìng de shí dài, lǐng dǎo zhě bù jǐn yào guī huà yuàn jǐng, gèng yào jù bèi róng cuò de xiōng huái.",
        "translation": "In the VUCA era, leaders must plan visions and hold tolerance for faults.",
        "grammarPoint": "现代管理热词 (VUCA时代/容错胸怀)",
        "vocabList": []
      },
      {
        "id": "biz56_075",
        "title": "03. 高管领导力与团队管理",
        "isFree": true,
        "sentence": "授权并不等于放任不管，科学的监督与过程管理同样不可或缺。",
        "pinyin": "Shòu quán bìng bù děng yú fàng rèn bù guǎn, kē xué de jiān dū yǔ guò chéng guǎn lǐ tóng yàng bù kě huò quē.",
        "translation": "Delegation doesn't mean laissez-faire; scientific oversight is indispensable.",
        "grammarPoint": "递进复句与高级成语 (不可或缺)",
        "vocabList": []
      },
      {
        "id": "biz56_076",
        "title": "04. 高管领导力与团队管理",
        "isFree": true,
        "sentence": "卓越的领导力体现在危机时刻能够稳定军心、凝聚共识。",
        "pinyin": "Zhuō yuè de lǐng dǎo lì tǐ xiàn zài wēi jī shí kè néng gòu wěn dìng jūn xīn, níng jù gòng shì.",
        "translation": "Great leadership shows in stabilizing morale and forging consensus during crises.",
        "grammarPoint": "成语 (稳定军心/凝聚共识)",
        "vocabList": []
      },
      {
        "id": "biz56_077",
        "title": "05. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "我们应该摒弃官僚主义，鼓励跨层级的坦诚沟通与头脑风暴。",
        "pinyin": "Wǒ men yīng gāi bìng qì guān liáo zhǔ yì, gǔ lì kuà céng jí de tǎn chéng gōu tōng yǔ tóu nǎo fēng bào.",
        "translation": "We should ditch bureaucracy, encouraging cross-level candid talks & brainstorming.",
        "grammarPoint": "高级动词 (摒弃/官僚主义)",
        "vocabList": []
      },
      {
        "id": "biz56_078",
        "title": "06. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "倾听不同甚至反对的声音，是高级管理者保持清醒的必修课。",
        "pinyin": "Qīng tīng bù tóng shén zhì fǎn duì de shēng yīn, shì gāo jí guǎn lǐ zhě bǎo chí qīng xǐng de bì xiū kè.",
        "translation": "Listening to dissenting voices is a mandatory course for execs to stay clear-headed.",
        "grammarPoint": "高级短语 (必修课/清醒)",
        "vocabList": []
      },
      {
        "id": "biz56_079",
        "title": "07. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "战略的落地有赖于执行力的坚决贯彻，细节决定成败。",
        "pinyin": "Zhè lüè de luò dì yǒu lài yú zhí xíng lì de jiān jué guàn chè, xì jié jué dìng chéng bài.",
        "translation": "Strategic execution relies on resolute enforcement; details dictate success/failure.",
        "grammarPoint": "熟语与高级词汇 (坚决贯彻/执行力)",
        "vocabList": []
      },
      {
        "id": "biz56_080",
        "title": "08. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "管理者要学会激发员工的内驱力，而不是单纯依靠绩效指标进行驱动。",
        "pinyin": "Guǎn lǐ zhě yào xué huì jī fā yuán gōng de nèi qū lì, ér bú shì dān chún yī kào jì xiào zhǐ biāo jìn xíng qū dòng.",
        "translation": "Managers must ignite inner employee drives rather than purely running on KPIs.",
        "grammarPoint": "现代管理词汇 (内驱力/驱动)",
        "vocabList": []
      },
      {
        "id": "biz56_081",
        "title": "09. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "面对团队成员的职业倦怠，管理者需要及时提供关怀与调整。",
        "pinyin": "Miàn duì tuán duì chéng yuán de zhí yè juàn dài, guǎn lǐ zhě xū yào jí shí tí gōng guān huái yǔ tiáo zhěng.",
        "translation": "Facing team burnout, leaders need to timely offer care and adjustments.",
        "grammarPoint": "专业心理与职场词汇 (职业倦怠/关怀)",
        "vocabList": []
      },
      {
        "id": "biz56_082",
        "title": "10. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "建立容错机制和创新孵化器，能让团队勇于试错、不断迭代。",
        "pinyin": "Jiàn lì róng cuò jī zhì hé chuàng xīn fú huà qì, néng ràng tuán duì yǒng yú shì cuò, bù duàn diē dài.",
        "translation": "Fault tolerance and incubators let teams dare to err and iteratively evolve.",
        "grammarPoint": "经管词汇 (孵化器/迭代)",
        "vocabList": []
      },
      {
        "id": "biz56_083",
        "title": "11. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "一言堂的决策模式极易导致盲目扩张与战略性失误。",
        "pinyin": "Yī yán táng de jué cè mò shì jí yì dǎo zhì máng mù kuò zhāng yǔ zhè lüè xìng shī wù.",
        "translation": "One-man-show decision-making easily causes blind expansion and strategic errors.",
        "grammarPoint": "成语 (一言堂) 与专业词 (战略性失误)",
        "vocabList": []
      },
      {
        "id": "biz56_084",
        "title": "12. 高管领导力与团队管理",
        "isFree": false,
        "sentence": "成就他人是最高级的领导力，团队的成长才是管理者最大的名片。",
        "pinyin": "Chéng jiù tā rén shì zuì gāo jí de lǐng dǎo lì, tuán duì de chéng zhǎng cái shì guǎn lǐ zhě zuì dà de míng piàn.",
        "translation": "Enabling others is supreme leadership; team growth is a leader's biggest namecard.",
        "grammarPoint": "高级管理哲学金句主题八：危机公关与公信力重塑 (Crisis PR & Rebuilding Credibility)卡号中文句子 (HSK 5-6 级别)拼音 (Pinyin)英文翻译 (English)HSK 5–6 语法/高级商务词汇考点",
        "vocabList": []
      }
    ]
  },
  {
    "columnId": "advanced_business_08",
    "title": "危机公关与公信力重塑 · Crisis PR & Rebuilding Credibility",
    "hskRange": "HSK 5-6",
    "totalCards": 12,
    "freeCards": 4,
    "category": "business",
    "cover": "危",
    "coverClass": "c3",
    "intro": "Build advanced workplace Mandarin through crisis pr & rebuilding credibility, with authentic business vocabulary and complex sentence patterns.",
    "introZh": "通过危机响应、公开致歉与信任修复，学习公关沟通策略。",
    "cards": [
      {
        "id": "biz56_085",
        "title": "01. 危机公关与公信力重塑",
        "isFree": true,
        "sentence": "黄金24小时是危机公关的生死线，绝不能有半点迟疑与掩饰。",
        "pinyin": "Huáng jīn èr shí sì xiǎo shí shì wēi jī gōng guān de shēng sǐ xiàn, jué bù néng yǒu bàn diǎn chí yí yǔ yǎn shì.",
        "translation": "The golden 24 hours is the PR death-line; zero hesitation or whitewashing allowed.",
        "grammarPoint": "商务专业词汇 (生死线/黄金24小时)",
        "vocabList": []
      },
      {
        "id": "biz56_086",
        "title": "02. 危机公关与公信力重塑",
        "isFree": true,
        "sentence": "面对产品质量质疑，我们第一时间成立了独立调查组并公开致歉。",
        "pinyin": "Miàn duì chǎn pǐn zhì liàng zhì yí, wǒ men dì yī shí jiān chéng lì le dú lì diào chá zǔ bìng gōng kāi zhì qiàn.",
        "translation": "Facing quality doubts, we instantly formed an independent probe and apologized.",
        "grammarPoint": "专业词汇 (独立调查组/公开致歉)",
        "vocabList": []
      },
      {
        "id": "biz56_087",
        "title": "03. 危机公关与公信力重塑",
        "isFree": true,
        "sentence": "虚假声明和推卸责任只会火上浇油，彻底透支企业的公信力。",
        "pinyin": "Xū jiǎ shēng míng hé tuī xiè zé rèn zhǐ huì huǒ shàng jiāo yóu, chè dǐ tòu zhī qǐ yè de gōng xìn lì.",
        "translation": "False statements and shifting blame add fuel to fire, bankrupting public credibility.",
        "grammarPoint": "成语 (火上浇油/透支) 与专业词 (公信力)",
        "vocabList": []
      },
      {
        "id": "biz56_088",
        "title": "04. 危机公关与公信力重塑",
        "isFree": true,
        "sentence": "高管层必须以坦诚的姿态直面媒体，展现解决问题的最大诚意。",
        "pinyin": "Gāo guǎn céng bì xū yǐ tǎn chéng de zī tài zhí miàn méi tǐ, zhǎn xiàn jiě jué wèn tí de zuì dà chéng yì.",
        "translation": "Leadership must face media candidly, showing utmost sincerity in solving issues.",
        "grammarPoint": "高级词汇 (坦诚姿态/直面/诚意)",
        "vocabList": []
      },
      {
        "id": "biz56_089",
        "title": "05. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "建立常态化的舆情监测机制，能在负面萌芽阶段将其迅速扑灭。",
        "pinyin": "Jiàn lì cháng tài huà de yú qíng jiān cè jī zhì, néng zài fù miàn méng yá jiē duàn jiāng qí xùn sù pū miè.",
        "translation": "Routine sentiment monitoring nubs negatives swiftly in their bud stages.",
        "grammarPoint": "专业词汇 (舆情监测/萌芽阶段/扑灭)",
        "vocabList": []
      },
      {
        "id": "biz56_090",
        "title": "06. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "危机过后的声誉修复是一场持久战，需要靠扎实的产品与服务重塑。",
        "pinyin": "Wēi jī guò hòu de shēng yù xiù fù shì yī chǎng chí jiǔ zhàn, xū yào kào zhā shí de chǎn pǐn yǔ fú wù chóng sù.",
        "translation": "Post-crisis reputation repair is a war of attrition, requiring solid products to rebuild.",
        "grammarPoint": "成语 (持久战/扎实) 与专业词 (声誉修复)",
        "vocabList": []
      },
      {
        "id": "biz56_091",
        "title": "07. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "涉事品牌的危机发言人条理清晰、不卑不亢，赢得了公众的理解。",
        "pinyin": "Shè shì pǐn pái de wēi jī fā yán rén tiáo lǐ qīng xī, bù bēi bù kàng, yíng de le gōng zhòng de lǐ jiě.",
        "translation": "The crisis spokesperson was logical, poised, winning public understanding.",
        "grammarPoint": "成语 (条理清晰/不卑不亢)",
        "vocabList": []
      },
      {
        "id": "biz56_092",
        "title": "08. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "谣言止于智者更止于真相，透明度是抵御谣言最好的免疫力。",
        "pinyin": "Yáo yán zhǐ yú zhì zhě gèng zhǐ yú zhēn xiàng, tòu míng dù shì dǐ yù yáo yán zuì hǎo de miǎn yì lì.",
        "translation": "Rumors stop at wisdom and truth; transparency is the best rumor immunity.",
        "grammarPoint": "成语与科学比喻 (免疫力/透明度)",
        "vocabList": []
      },
      {
        "id": "biz56_093",
        "title": "09. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "我们吸取了此次教训，全面升级了品控标准与合规审计流程。",
        "pinyin": "Wǒ men xī qǔ le cǐ cì jiào xùn, quán miàn shēng jí le pǐn kòng biāo zhǔn yǔ hé guī shěn jì liú chéng.",
        "translation": "We drew lessons, comprehensively upgrading quality control & audit flows.",
        "grammarPoint": "商务专业词汇 (品控标准/吸取教训)",
        "vocabList": []
      },
      {
        "id": "biz56_094",
        "title": "10. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "恶意抹黑和不正当竞争虽然带来了短期冲击，但也验证了我们的韧性。",
        "pinyin": "È yì mǒ hēi hé bù zhèng dāng jìng zhēng suī rán dài lái le duǎn qī chōng jī, dàn yě yàn zhèng le wǒ men de rèn xìng.",
        "translation": "Malicious smears and unfair competition caused a short-term setback, but also demonstrated our resilience.",
        "grammarPoint": "专业商务词汇 (不正当竞争/短期冲击/韧性)",
        "vocabList": []
      },
      {
        "id": "biz56_095",
        "title": "11. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "危机不仅是考验，更是企业脱胎换骨、实现战略升级的转折点。",
        "pinyin": "Wēi jī bù jǐn shì kǎo yàn, gèng shì qǐ yè tuō tāi huàn gǔ, shí xiàn zhè lüè shēng jí de zhuǎn zhè diǎn.",
        "translation": "Crises test firms, serving as turning points for rebirth and strategic upgrading.",
        "grammarPoint": "成语 (脱胎换骨) 与高级商业思维",
        "vocabList": []
      },
      {
        "id": "biz56_096",
        "title": "12. 危机公关与公信力重塑",
        "isFree": false,
        "sentence": "守法合规、心怀敬畏，是企业在商海中行稳致远的最高法则。",
        "pinyin": "Shǒu fǎ hé guī, xīn huái jìng wèi, shì qǐ yè zài shāng hǎi zhōng xíng wěn zhì yuǎn de zuì gāo fǎ zé.",
        "translation": "Compliance and awe are supreme rules for enterprises traveling far safely in business seas.",
        "grammarPoint": "????????? (????)",
        "vocabList": []
      }
    ]
  }
];
  window.STORIES_DATA = {
    ...(base && typeof base === 'object' ? base : {}),
    collection: (base && base.collection) ? base.collection + ' + Advanced Business HSK 5-6' : 'HanLingo Advanced Business HSK 5-6',
    stories: [
      ...((base && Array.isArray(base.stories)) ? base.stories : []),
      ...advancedBusinessStories
    ]
  };
})();
