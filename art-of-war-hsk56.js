(function () {
  const base = window.STORIES_DATA || { stories: [] };
  const themes = [
  {
    "title": "始计篇——庙算与胜负之源 · Calculations Before Battle",
    "intro": "诸侯召集谋士，正要为开战拍板。孙子没有先谈刀剑，反而铺开竹简，算起一场战争会让国库少掉多少银子。",
    "introEn": "Rulers gather their advisers to decide whether to go to war. Sun Tzu sets aside talk of weapons, unrolls his bamboo slips, and calculates how much a war would drain from the treasury.",
    "cards": [
      {"sentence":"孙子曰：“兵者，国之大事也。”","pinyin":"Sūn Zǐ yuē: \"Bīng zhě, guó zhī dà shì yě.\"","translation":"Sun Tzu said, \"War is a matter of vital importance to the state.\"","grammarPoint":"经典引文；“者……也”是文言判断句式。"},
      {"sentence":"战争不仅关系百姓的生死，更决定国家的存亡。","pinyin":"Zhànzhēng bùjǐn guānxì bǎixìng de shēngsǐ, gèng juédìng guójiā de cúnwáng.","translation":"War concerns not only the lives of ordinary people, but also the survival of the state.","grammarPoint":"递进结构：“不仅……更……”。"},
      {"sentence":"因此，君主必须深思熟虑，不可贸然行事。","pinyin":"Yīncǐ, jūnzhǔ bìxū shēnsī shúlǜ, bùkě màorán xíngshì.","translation":"Therefore, a ruler must think carefully and must not act rashly.","grammarPoint":"因果连接词“因此”；成语“深思熟虑”。"},
      {"sentence":"评估一场战争的胜负，至少要从五个根本维度考量。","pinyin":"Pínggū yì chǎng zhànzhēng de shèngfù, zhìshǎo yào cóng wǔ ge gēnběn wéidù kǎoliáng.","translation":"To assess the outcome of a war, one must consider at least five fundamental dimensions.","grammarPoint":"目的结构：“要从……考量”；抽象名词“维度”。"},
      {"sentence":"首先是“道”：上下同心，百姓才愿意与君主同甘共苦。","pinyin":"Shǒuxiān shì \"dào\": shàngxià tóngxīn, bǎixìng cái yuànyì yǔ jūnzhǔ tónggān gòngkǔ.","translation":"First comes the Way: only when rulers and people share one mind will the people share hardship with them.","grammarPoint":"条件关联：“……才……”；成语“同甘共苦”。"},
      {"sentence":"其次是“天”，也就是寒暑、昼夜与季节的变化。","pinyin":"Qícì shì \"tiān\", yě jiùshì hánshǔ, zhòuyè yǔ jìjié de biànhuà.","translation":"Next is Heaven: the changes of cold and heat, day and night, and the seasons.","grammarPoint":"解释结构：“也就是……”。"},
      {"sentence":"再者是“地”，包括路程远近、地势险易与空间宽窄。","pinyin":"Zàizhě shì \"dì\", bāokuò lùchéng yuǎnjìn, dìshì xiǎnyì yǔ kōngjiān kuānzhǎi.","translation":"Then comes Terrain: distance, the difficulty of the land, and the breadth of the space.","grammarPoint":"并列列举；反义复合词“远近、险易、宽窄”。"},
      {"sentence":"第四是“将”，将帅须兼具智、信、仁、勇、严。","pinyin":"Dì-sì shì \"jiàng\", jiàngshuài xū jiānjù zhì, xìn, rén, yǒng, yán.","translation":"Fourth is the commander, who must possess wisdom, trustworthiness, benevolence, courage, and discipline.","grammarPoint":"书面语“兼具”；成组概念的列举。"},
      {"sentence":"最后是“法”，从编制到赏罚，样样都得有章可循。","pinyin":"Zuìhòu shì \"fǎ\", cóng biānzhì dào shǎngfá, yàngyàng dōu děi yǒu zhāng kě xún.","translation":"Finally comes organization: from structure to rewards and penalties, everything must follow clear rules.","grammarPoint":"范围结构：“从……到……”；成语“有章可循”。"},
      {"sentence":"五事摆在眼前，孙子又提出七项比较，逐一推算胜算。","pinyin":"Wǔ shì bǎi zài yǎnqián, Sūn Zǐ yòu tíchū qī xiàng bǐjiào, zhúyī tuīsuàn shèngsuàn.","translation":"With the five factors laid out, Sun Tzu proposed seven comparisons and calculated the odds one by one.","grammarPoint":"承接副词“又”；“逐一”表示按顺序逐项进行。"},
      {"sentence":"谋士看着满桌竹简，忍不住问：“大王，您算过军费吗？”","pinyin":"Móushì kàn zhe mǎn zhuō zhújiǎn, rěn bu zhù wèn: \"Dàwáng, nín suàn guo jūnfèi ma?\"","translation":"Looking at the table piled with bamboo slips, the strategist could not help asking, \"Your Majesty, have you calculated the military costs?\"","grammarPoint":"情态补语“忍不住”；反问句式。"},
      {"sentence":"孙子笑而不答，只把一张国库账单推到了大王面前。","pinyin":"Sūn Zǐ xiào ér bù dá, zhǐ bǎ yì zhāng guókù zhàngdān tuī dào le dàwáng miànqián.","translation":"Sun Tzu smiled without answering and simply slid a treasury bill in front of the ruler.","grammarPoint":"文言痕迹“笑而不答”；把字句与动作结果。"},
      {"sentence":"大王这才明白：仗还没打，胜负已经先在账本上露出了端倪。","pinyin":"Dàwáng zhè cái míngbai: zhàng hái méi dǎ, shèngfù yǐjīng xiān zài zhàngběn shàng lù chū le duānní.","translation":"Only then did the ruler understand: before a battle began, the accounts had already revealed the first signs of victory or defeat.","grammarPoint":"时间焦点“这才”；成语“露出端倪”。"}
    ]
  },
  {
    "title": "作战篇——兵贵神速与后勤博弈 · Speed and Logistics",
    "intro": "远征的大军在泥泞的官道上缓慢前进，粮草车陷入泥潭。将领面对巨大的财政赤字，正面临是否继续推进的痛苦抉择。",
    "introEn": "An expeditionary army struggles along a muddy road as supply carts sink into the mire. Facing a mounting deficit, the commanders must decide whether to press on.",
    "cards": [
      {
        "sentence": "孙子指出：“凡用兵之法，驰车千驷……千里馈粮。”",
        "pinyin": "Sūn Zǐ zhǐ chū Fán yòng bīng zhī fǎ chí chē qiān sì qiān lǐ kuì liáng.",
        "translation": "Sun Tzu wrote, “In war, a thousand swift chariots and provisions carried a thousand li...”",
        "grammarPoint": "经典引文与历史背景"
      },
      {
        "sentence": "庞大的军队出征，必然伴随着天文数字的消耗。",
        "pinyin": "Páng dà de jūn duì chū zhēng, bì rán bàn suí zhe tiān wén shù zì de xiāo hào.",
        "translation": "A massive army on campaign inevitably brings astronomical resource consumption.",
        "grammarPoint": "高级成语/比喻 (天文数字)"
      },
      {
        "sentence": "前线打仗一天，后方的物资开销就足以压垮一座城。",
        "pinyin": "Qián xiàn dǎ zhàn yī tiān, hòu fāng de wù zī kāi xiāo jiù zú yǐ yā kuǎ yī zuò chéng.",
        "translation": "One day of frontline combat incurs expenses enough to crush a city.",
        "grammarPoint": "结果补语与假设句式"
      },
      {
        "sentence": "“兵贵神速”，如果旷日持久，国库必定空虚。\"",
        "pinyin": "Bīng guì shén sù\", rú guǒ kuàng rì chí jiǔ, guó kù bì dìng kōng xū.",
        "translation": "Speed is the essence of war\"; if prolonged, the state treasury will surely be depleted.",
        "grammarPoint": "成语与高级形容词 (旷日持久/空虚)"
      },
      {
        "sentence": "运送粮草的民夫在风雪中艰难跋涉。",
        "pinyin": "Yùn sòng liáng cǎo de mín fū zài fēng xuě zhōng jiān nán bá shè.",
        "translation": "The laborers transporting provisions trudged through wind and snow.",
        "grammarPoint": "动宾搭配与动词 (跋涉)"
      },
      {
        "sentence": "路上消耗过半，真正能送到前线的所剩无几。",
        "pinyin": "Lù shang xiāo hào guò bàn, zhēn zhèng néng sòng dào qián xiàn de suǒ shèng wú jǐ.",
        "translation": "Half is consumed on the way; very little actually reaches the front line.",
        "grammarPoint": "成语 (所剩无几)"
      },
      {
        "sentence": "将领不仅要懂得如何进攻，更要精于算计成本。",
        "pinyin": "Jiāng lǐng bù jǐn yào dǒng de rú hé jìn gōng, gèng yào jīng yú suàn jì chéng běn.",
        "translation": "A commander must not only know how to attack, but excel at calculating costs.",
        "grammarPoint": "递进结构与专业词汇 (成本)"
      },
      {
        "sentence": "孙子曰：“兵闻拙速，未睹巧之久也。”笨拙的速战，也胜过高明的久拖不决。",
        "pinyin": "Sūn Zǐ yuē: \"Bīng wén zhuō sù, wèi dǔ qiǎo zhī jiǔ yě.\" Bèn zhuō de sù zhàn, yě shèng guò gāo míng de jiǔ tuō bù jué.",
        "translation": "Sun Tzu said, \"I have heard that speed may be clumsy, but I have never seen skill in a long campaign.\" Even a rough swift victory is better than a clever stalemate.",
        "grammarPoint": "经典引文；“未睹……”用于强调经验判断。"
      },
      {
        "sentence": "敌国虽然坚固，但内部的经济已经出现崩溃的迹象。",
        "pinyin": "Dí guó suī rán jiān gù, dàn nèi bù de jīng jì yǐ jīng chū xiàn bēng kuì de jī xiàng.",
        "translation": "Though the enemy state is fortified, its internal economy shows signs of collapse.",
        "grammarPoint": "转折复句 (虽然……但……)"
      },
      {
        "sentence": "乘其疲惫发起闪击，才能以最小的代价获取胜利。",
        "pinyin": "Chéng qí pí bèi fā qǐ shǎn jī, cái néng yǐ zuì xiǎo de dài jià huò qǔ shèng lì.",
        "translation": "Taking advantage of their fatigue to launch a blitz can secure victory at minimal cost.",
        "grammarPoint": "介词结构 (以……代价)"
      },
      {
        "sentence": "辎重车队终于抵达营地，士兵们发出了欢呼。",
        "pinyin": "Zī zhòng chē duì zhōng yú dǐ dá yíng dì, shì bīng men fā chū le huān hū.",
        "translation": "The supply caravan finally reached the camp, and the soldiers cheered.",
        "grammarPoint": "状态结果 (终于抵达)"
      },
      {
        "sentence": "谋士提醒将军：速战速决的时机已经成熟。",
        "pinyin": "Móu shì tí xǐng jiāng jūn: sù zhàn sù jué de shí jī yǐ jīng chéng shú.",
        "translation": "The strategist reminded the general: the timing for a quick decisive battle has matured.",
        "grammarPoint": "宾语从句与成语 (速战速决)"
      },
      {
        "sentence": "战鼓雷动，庞大的战争机器全速运转起来。",
        "pinyin": "Zhàn gǔ léi dòng, páng dà de zhàn zhēng jī qì quán sù yùn zhuǎn qǐ lai.",
        "translation": "Battle drums thundered, and the massive war machine rolled into full speed.",
        "grammarPoint": "拟人化描写与动态渲染"
      }
    ]
  },
  {
    "title": "谋攻篇——不战而屈人之兵 · Subduing the Enemy Without Fighting",
    "intro": "两军在城下对峙。孙子没有选择强攻城池，而是派了一名使者，带了一封信和几坛好酒，走进敌营。",
    "introEn": "Two armies face each other beneath a city wall. Instead of ordering an assault, Sun Tzu sends an envoy into the enemy camp with a letter and several jars of fine wine.",
    "cards": [
      {
        "sentence": "“凡用兵之法，全国为上，破国次之。”\"",
        "pinyin": "Fán yòng bīng zhī fǎ, quán guó wéi shàng, pò guó cì zhī.",
        "translation": "In warfare, preserving the enemy state intact is best; destroying it is second.",
        "grammarPoint": "战略评价层级 (为上/次之)"
      },
      {
        "sentence": "强行攻城是不得已的下策，往往会付出惨痛代价。",
        "pinyin": "Qiáng xíng gōng chéng shì bù dé yǐ de xià cè, wǎng wǎng huì fù chū cǎn tòng dài jià.",
        "translation": "Forcing a siege is a last resort and often incurs a painful price.",
        "grammarPoint": "高级词汇 (下策/惨痛)"
      },
      {
        "sentence": "孙子主张：“上兵伐谋，其次伐交，其次伐兵。”",
        "pinyin": "Sūn Zǐ zhǔ zhāng: \"Shàng bīng fá móu, qí cì fá jiāo, qí cì fá bīng.",
        "translation": "Sun Tzu advocated: \"Best is to attack enemy strategy; next is diplomacy; next is troops.",
        "grammarPoint": "递进策略层级"
      },
      {
        "sentence": "最卓越的军事智慧，是不动刀枪就让敌人臣服。",
        "pinyin": "Zuì zhuó yuè de jūn shì zhì huì, shì bù dòng dāo qiāng jiù ràng dí rén chén fú.",
        "translation": "The most brilliant military wisdom is making the enemy submit without bloodshed.",
        "grammarPoint": "定语从句与高级动词 (臣服)"
      },
      {
        "sentence": "使者带着孙子的信，从容不迫地走进了敌方帅府。",
        "pinyin": "Shǐ zhě dài zhe Sūn Zǐ de xìn, cóng róng bù pò de zǒu jìn le dí fāng shuài fǔ.",
        "translation": "The envoy, carrying Sun Tzu's letter, calmly walked into the enemy headquarters.",
        "grammarPoint": "成语 (从容不迫)"
      },
      {
        "sentence": "信中详细剖析了敌军孤立无援的困境。",
        "pinyin": "Xìn zhōng xiáng xì pōu xī le dí jūn gū lì wú yuán de kùn jìng.",
        "translation": "The letter detailed the isolated and helpless predicament of the enemy army.",
        "grammarPoint": "高级动词与成语 (剖析/孤立无援)"
      },
      {
        "sentence": "敌方主帅看完信，额头渗出了冷汗。",
        "pinyin": "Dí fāng zhǔ shuài kàn wán xìn, é tóu shèn chū le lěng hàn.",
        "translation": "After reading the letter, the enemy commander broke out in cold sweat.",
        "grammarPoint": "动宾搭配与心理描写"
      },
      {
        "sentence": "城外驻扎的联军正在悄然瓦解，军心涣散。",
        "pinyin": "Chéng wài zhù zhā de lián jūn zhèng zài qiǎo rán wǎ jiě, jūn xīn huàn sàn.",
        "translation": "The coalition camped outside was quietly disintegrating, morale shattered.",
        "grammarPoint": "高级动词 (瓦解) 与成语 (军心涣散)"
      },
      {
        "sentence": "“与其玉石俱焚，不如体面地归降。”使者诚恳地说。\"",
        "pinyin": "Yǔ qí yù shí jù fén bù rú tǐ miàn de guī xiáng shǐ zhě chéng kěn de shuō.",
        "translation": "“Better to surrender with dignity than destroy both sides,” the envoy said earnestly.",
        "grammarPoint": "抉择句式 (与其……不如……)"
      },
      {
        "sentence": "敌方将领陷入了激烈的内心挣扎。",
        "pinyin": "Dí fāng jiāng lǐng xiàn rù le jī liè de nèi xīn zhēng zhá.",
        "translation": "The enemy general fell into intense inner struggle.",
        "grammarPoint": "心理描写 (内心挣扎)"
      },
      {
        "sentence": "最终，城门缓缓打开，守军放下了武器。",
        "pinyin": "Zuì zhōng, chéng mén huǎn huǎn dǎ kāi, shǒu jūn fàng xià le wǔ qì.",
        "translation": "Finally, the city gates slowly opened, and the defenders laid down their weapons.",
        "grammarPoint": "副词修饰 (缓缓)"
      },
      {
        "sentence": "没有发生一场战争，敌国便不战而降了。",
        "pinyin": "Méi yǒu fā shēng yī zhǎng zhàn zhēng, dí guó biàn bù zhàn ér jiàng le.",
        "translation": "Without a single battle, the enemy state surrendered without a fight.",
        "grammarPoint": "经典成语 (不战而降)"
      },
      {
        "sentence": "这就是《孙子兵法》最高境界的完美诠释。",
        "pinyin": "Zhè jiù shì \"Sūn Zǐ Bīng Fǎ\" zuì gāo jìng jiè de wán měi quán shì.",
        "translation": "This is the perfect interpretation of the ultimate realm of The Art of War.",
        "grammarPoint": "高级名词 (境界/诠释)"
      }
    ]
  },
  {
    "title": "军形篇——立于不败之地 · Formations and Invincibility",
    "intro": "营帐内，年轻的副将向孙子请教防御与进攻的辩证关系。孙子在沙盘上用水流比喻军队的形态。",
    "introEn": "Inside the command tent, a young deputy asks Sun Tzu how defense and attack depend on each other. Using a sand table, Sun Tzu compares the shape of an army to the flow of water.",
    "cards": [
      {
        "sentence": "“昔之善战者，先为不可胜，以待敌之可胜。”\"",
        "pinyin": "Xī zhī shàn zhàn zhě, xiān wéi bù kě shèng, yǐ dài dí zhī kě shèng.",
        "translation": "Ancient masters of war first made themselves invincible, then waited for vulnerability.",
        "grammarPoint": "文言文引文结构"
      },
      {
        "sentence": "不可胜在己，可胜在敌。主动权永远掌握在自己手中。",
        "pinyin": "Bù kě shèng zài jǐ kě shèng zài dí zhǔ dòng quán yǒng yuǎn zhǎng wò zài zì jǐ shǒu zhōng.",
        "translation": "You can make yourself impossible to defeat, but victory depends on your opponent. The initiative is always in your hands.",
        "grammarPoint": "哲理对比句"
      },
      {
        "sentence": "防御稳固得像铜墙铁壁，敌人就找不到任何破绽。",
        "pinyin": "Fáng yù wěn gù de xiàng tóng qiáng tiě bì, dí rén jiù zhǎo bù dào rèn hé pò zhàn.",
        "translation": "Defense solid as an iron wall gives the enemy no flaws to exploit.",
        "grammarPoint": "比喻修辞 (铜墙铁壁)"
      },
      {
        "sentence": "善于作战的人，不会犯低级错误，更不会错失良机。",
        "pinyin": "Shàn yú zuò zhàn de rén, bù huì fàn dī jí cuò wù, gèng bù huì cuò shī liáng jī.",
        "translation": "Good strategists don't make elementary errors or miss prime opportunities.",
        "grammarPoint": "递进复句 (更不会)"
      },
      {
        "sentence": "胜利有形的积累，外人看来往往觉得不可思议。",
        "pinyin": "Shèng lì yǒu xíng de jī lěi, wài rén kàn lái wǎng wǎng jué de bù kě sī yì.",
        "translation": "The tangible accumulation of victory often seems incomprehensible to outsiders.",
        "grammarPoint": "高级词汇 (不可思议/积累)"
      },
      {
        "sentence": "真正的强者，其作战没有奇迹，只有必然的规律。",
        "pinyin": "Zhēn zhèng de qiǎng zhě, qí zuò zhàn méi yǒu qí jì, zhǐ yǒu bì rán de guī lǜ.",
        "translation": "True masters achieve victory without miracles, only through inevitable laws.",
        "grammarPoint": "哲学陈述句"
      },
      {
        "sentence": "“胜兵先胜而后求战，败兵先战而后求胜。”\"",
        "pinyin": "Shèng bīng xiān shèng ér hòu qiú zhàn, bài bīng xiān zhàn ér hòu qiú shèng.",
        "translation": "Victorious armies win first and then fight; defeated armies fight and hope to win.",
        "grammarPoint": "经典对仗名句"
      },
      {
        "sentence": "副将盯着沙盘，若有所思地点了点头。",
        "pinyin": "Fù jiàng dīng zhe shā pán, ruò yǒu suǒ sī de diǎn le diǎn tóu.",
        "translation": "The deputy stared at the sandbox, nodding thoughtfully.",
        "grammarPoint": "高级成语 (若有所思)"
      },
      {
        "sentence": "军队的形体应当像水一样因地制宜。",
        "pinyin": "Jūn duì de xíng tǐ yīng dāng xiàng shuǐ yī yàng yīn dì zhì yí.",
        "translation": "An army's form should be like water, adapting to the terrain.",
        "grammarPoint": "成语 (因地制宜)"
      },
      {
        "sentence": "水因高而流下，因低而汇聚，兵无常势，水无常形。",
        "pinyin": "Shuǐ yīn gāo ér liú xià, yīn dī ér huì jù, bīng wú cháng shì, shuǐ wú cháng xíng.",
        "translation": "Water flows from high to low; troops have no constant posture, water no constant shape.",
        "grammarPoint": "高级自然比喻"
      },
      {
        "sentence": "能根据敌情变化而取胜的，叫做“神”。",
        "pinyin": "Néng gēn jù dí qíng biàn huà ér qǔ shèng de, jiào zuò \"shén\".",
        "translation": "Those who win by adapting to enemy changes are called \"divine.",
        "grammarPoint": "定语后置/名词定义"
      },
      {
        "sentence": "这就是军形篇的核心奥秘：先求不败，后求胜。",
        "pinyin": "Zhè jiù shì jūn xíng piān de hé xīn ào mì: xiān qiú bù bài, hòu qiú shèng.",
        "translation": "This is the core mystery of the Formations chapter: seek non-defeat first, then victory.",
        "grammarPoint": "核心概念 (奥秘)"
      },
      {
        "sentence": "营帐内的烛光摇曳，战略的种子在年轻将领心中生根。",
        "pinyin": "Yíng zhàng nèi de zhú guāng yáo yè, zhè lüè de zhǒng zǐ zài nián qīng jiāng lǐng xīn zhōng shēng gēn.",
        "translation": "Candlelight flickered in the tent, planting strategic seeds in the young commander's heart.",
        "grammarPoint": "意境渲染与比喻"
      }
    ]
  },
  {
    "title": "兵势篇——势如彍弩与奇正相生 · Momentum and Unorthodox Tactics",
    "intro": "两军在峡谷隘口遭遇。敌众我寡，孙子命令部队占据险要高地，摆出奇正相生的阵型，蓄势待发。",
    "introEn": "Two armies meet at a narrow mountain pass. Outnumbered, Sun Tzu's troops seize the high ground and prepare a formation that blends conventional and unexpected tactics.",
    "cards": [
      {
        "sentence": "“凡治众如治寡，分数是也。”\"",
        "pinyin": "Fán zhì zhòng rú zhì guā, fēn shù shì yě.",
        "translation": "Managing a massive army is like managing a few; it is a matter of division and organization.",
        "grammarPoint": "军事管理学"
      },
      {
        "sentence": "军队人数虽多，但只要指挥系统清晰，就能令行禁止。",
        "pinyin": "Jūn duì rén shù suī duō, dàn zhǐ yào zhǐ huī xì tǒng qīng xī, jiù néng lìng xíng jìn zhǐ.",
        "translation": "Though an army is large, with a clear command system, orders are strictly obeyed.",
        "grammarPoint": "成语 (令行禁止)"
      },
      {
        "sentence": "战场上的局势瞬息万变，犹如拉满的硬弓。",
        "pinyin": "Zhàn chǎng shàng de jú shì shùn xī wàn biàn, yóu rú lā mǎn de yìng gōng.",
        "translation": "The battlefield situation changes in a flash, resembling a fully drawn hard bow.",
        "grammarPoint": "高级成语 (瞬息万变)"
      },
      {
        "sentence": "“激水之疾，至于漂石者，势也。”\"",
        "pinyin": "Jī shuǐ zhī jí, zhì yú piào shí zhě, shì yě.",
        "translation": "The rush of torrents that can carry stones is due to momentum.",
        "grammarPoint": "势能理论的物理比喻"
      },
      {
        "sentence": "优秀的将领造势，就像在百尺高崖上滚圆石。",
        "pinyin": "Yōu xiù de jiāng lǐng zào shì, jiù xiàng zài bǎi chǐ gāo yá shang gǔn yuán shí.",
        "translation": "Excellent commanders create momentum like rolling boulders down a 100-foot cliff.",
        "grammarPoint": "比喻修辞 (造势)"
      },
      {
        "sentence": "敌军虽然气势汹汹，但其锐气正在一点点被消磨。",
        "pinyin": "Dí guó suī rán qì shì xiōng xiōng, dàn qí ruì qì zhèng zài yī diǎn diǎn bèi xiāo mó.",
        "translation": "Though the enemy is aggressive, their sharp edge is being slowly worn away.",
        "grammarPoint": "成语 (气势汹汹) 与高级动词 (消磨)"
      },
      {
        "sentence": "“战势不过奇正，奇正之变，不可胜穷也。”\"",
        "pinyin": "Zhàn shì bù guò qí zhēng, qí zhēng zhī biàn, bù kě shèng qióng yě.",
        "translation": "Tactical momentum is merely unorthodox and orthodox; their variations are inexhaustible.",
        "grammarPoint": "核心战略概念 (奇正)"
      },
      {
        "sentence": "正兵正面牵制，奇兵出其不意从侧翼包抄。",
        "pinyin": "Zhèng bīng zhèng miàn qiān zhì, qí bīng chū qí bù yì cóng cè yì bāo chāo.",
        "translation": "Orthodox troops pin them frontally; unorthodox troops surprise-flank from the side.",
        "grammarPoint": "高级军事术语 (侧翼/牵制/奇兵)"
      },
      {
        "sentence": "这种战术千变万化，令敌人防不胜防。",
        "pinyin": "Zhè zhǒng zhàn shù qiān biàn wàn huà, lìng dí rén fáng bù shèng fáng.",
        "translation": "This tactic transforms infinitely, making it impossible for the enemy to defend.",
        "grammarPoint": "成语 (千变万化/防不胜防)"
      },
      {
        "sentence": "时机成熟，孙子一声令下：“放箭！”",
        "pinyin": "Shí jī chéng shú, Sūn Zǐ yī shēng lìng xià: \"Fàng jiàn!",
        "translation": "Timing ripe, Sun Tzu gave the order: \"Release arrows!",
        "grammarPoint": "动宾搭配与果断指令"
      },
      {
        "sentence": "如同山崩地裂般的箭雨呼啸着射向敌阵。",
        "pinyin": "Rú tóng shān bēng dì liè bān de jiàn yǔ hū xiào zhe shè xiàng dí zhèn.",
        "translation": "An arrow rain resembling a landslide shrieked toward the enemy formation.",
        "grammarPoint": "夸张与拟声修辞"
      },
      {
        "sentence": "敌军瞬间阵脚大乱，溃不成军。",
        "pinyin": "Dí guó shùn jiān zhèn jiǎo dà luàn, kuì bù chéng jūn.",
        "translation": "The enemy instantly fell into total chaos, routing completely.",
        "grammarPoint": "高级成语 (溃不成军)"
      },
      {
        "sentence": "这就是“势”的力量，顺之者昌，逆之者亡。",
        "pinyin": "Zhè jiù shì \"shì\" de lì liàng, shùn zhī zhě chāng, nì zhī zhě wáng.",
        "translation": "This is the power of momentum: those who align with it prosper, those who oppose perish.",
        "grammarPoint": "哲学总结"
      }
    ]
  },
  {
    "title": "虚实篇——避实击虚与主动权 · Vacuity, Substance, and Initiative",
    "intro": "敌军倾巢而出攻打我方坚固的正面营地，却发现营内空无一人。正当敌军错愕时，孙子率奇兵直捣敌军空虚的大本营。",
    "introEn": "The enemy attacks a heavily fortified camp, only to find it empty. While they are still bewildered, Sun Tzu leads a surprise force against their undefended base.",
    "cards": [
      {
        "sentence": "“故善战者，致人而不致于人。”\"",
        "pinyin": "Gù shàn zhàn zhě, zhì rén ér bù zhì yú rén.",
        "translation": "Therefore, those skilled in war bring the enemy to the battlefield and are not brought.",
        "grammarPoint": "核心战略主导权"
      },
      {
        "sentence": "主动权是战争的灵魂，绝不能被敌人牵着鼻子走。",
        "pinyin": "Zhǔ dòng quán shì zhàn zhēng de líng hún, jué bù néng bèi dí rén qiān zhe bí zi zǒu.",
        "translation": "Initiative is the soul of war; never let the enemy lead you by the nose.",
        "grammarPoint": "高级比喻 (牵着鼻子走)"
      },
      {
        "sentence": "敌军气势汹汹扑向我方坚固的正面，却扑了个空。",
        "pinyin": "Dí guó qì shì xiōng xiōng pū xiàng wǒ fāng jiān gù de zhèng miàn, què pū le gè kōng.",
        "translation": "The aggressive enemy pounced on our solid front, only to grab empty air.",
        "grammarPoint": "成语与俗语搭配 (扑了个空)"
      },
      {
        "sentence": "“避其锐气，击其惰归”，这是虚实篇的精髓。\"",
        "pinyin": "Bì qí ruì qì, jī qí duò guī\", zhè shì xū shí piān de jīng suì.",
        "translation": "Avoid their sharp vigor, strike when they tire and retreat\"; the essence of vacuity.",
        "grammarPoint": "经典战术原则 (避实击虚)"
      },
      {
        "sentence": "孙子巧妙地调动敌人，让敌人疲于奔命。",
        "pinyin": "Sūn Zǐ qiǎo miǎo de tiào dòng dí rén, ràng dí rén pí yú bēn mìng.",
        "translation": "Sun Tzu skillfully manipulated the enemy, making them run themselves ragged.",
        "grammarPoint": "成语 (疲于奔命)"
      },
      {
        "sentence": "敌军统帅发现中计，脸色瞬间变得煞白。",
        "pinyin": "Dí guó tǒng shuài fā xiàn zhòng jì, liǎn sè shùn jiān biàn de shà bái.",
        "translation": "Realizing they fell for the trap, the enemy commander's face instantly turned pale.",
        "grammarPoint": "心理与生理反应描写"
      },
      {
        "sentence": "“水之形，避高而趋下；兵之形，避实而击虚。”\"",
        "pinyin": "Shuǐ de xíng, bì gāo ér qū xià; bīng de xíng, bì shí ér jī xū.",
        "translation": "Water avoids heights and flows to lows; military form avoids substance and strikes vacuity.",
        "grammarPoint": "高级哲理对比"
      },
      {
        "sentence": "我方精锐部队犹如神兵天降，攻入敌军大本营。",
        "pinyin": "Wǒ fāng jīng ruì bù duì yóu rú shén bīng tiān jiàng, gōng rù dí guó dà běn yíng.",
        "translation": "Our elite troops descended like divine soldiers, storming the enemy headquarters.",
        "grammarPoint": "成语 (神兵天降)"
      },
      {
        "sentence": "敌方粮草大营瞬间陷入火海，防线全面崩溃。",
        "pinyin": "Dí fāng liáng cǎo dà yíng shùn jiān xiàn rù huǒ hǎi, fáng xiàn quán miàn bēng kuì.",
        "translation": "The enemy supply camp instantly plunged into a sea of fire; defense completely collapsed.",
        "grammarPoint": "动态渲染与高级词汇 (崩溃)"
      },
      {
        "sentence": "战争的胜负，往往取决于谁能精准洞察虚实。",
        "pinyin": "Zhàn zhēng de shèng fù, wǎng wǎng qǔ jué yú shuí néng jīng zhǔn dòng chá xū shí.",
        "translation": "Victory or defeat often depends on who accurately perceives vacuity and substance.",
        "grammarPoint": "动宾搭配 (洞察虚实)"
      },
      {
        "sentence": "敌人回救不及，军心彻底瓦解。",
        "pinyin": "Dí rén huí jiù bù jí, jūn xīn chè dǐ wǎ jiě.",
        "translation": "The enemy failed to return in time; morale completely disintegrated.",
        "grammarPoint": "可能补语与高级动词 (瓦解)"
      },
      {
        "sentence": "这场精彩的围魏救赵，被载入了军事史册。",
        "pinyin": "Zhè chǎng jīng cǎi de wéi wèi jiù zhào, bèi zài rù le jūn shì shǐ cè.",
        "translation": "This brilliant siege of Wei to rescue Zhao was recorded in military history.",
        "grammarPoint": "历史典故与被动句式"
      },
      {
        "sentence": "运筹帷幄之中，决胜千里之外，莫过于此。",
        "pinyin": "Yùn chóu wéi wò zhī zhōng, jué shèng qiān lǐ zhī wài, mò guò yú cǐ.",
        "translation": "Devising strategies in the tent and winning victory a thousand li away—nothing exceeds this.",
        "grammarPoint": "高级古典成语总结"
      }
    ]
  },
  {
    "title": "军争篇——以迂为直与后发先至 · Maneuvering and Indirect Approaches",
    "intro": "两军争夺战略要地。敌军选择了一条看似最近但布满陷阱的直路，而孙子则率领大军从一条看似绕远的山路急行军。",
    "introEn": "Two armies race for a strategic position. The enemy takes the seemingly shortest road, unaware of its traps, while Sun Tzu leads his troops along a longer-looking mountain route.",
    "cards": [
      {
        "sentence": "“军争之难者，以迂为直，以患为利。”\"",
        "pinyin": "Jūn zhēng zhī nán zhě, yǐ yū wéi zhí, yǐ huàn wéi lì.",
        "translation": "The difficulty of maneuver is turning the roundabout into direct, the hazard into benefit.",
        "grammarPoint": "辩证思维核心金句"
      },
      {
        "sentence": "表面上看是绕远路，实际上却能抢占先机。",
        "pinyin": "Biǎo miàn shang kàn shì rào yuǎn lù, shí jì shang què néng qiǎng zhàn xiān jī.",
        "translation": "It looks like a detour on the surface, but actually seizes the initiative.",
        "grammarPoint": "转折连词 (实际上/却)"
      },
      {
        "sentence": "敌军急于求成，盲目选择了狭窄的直道急行军。",
        "pinyin": "Dí guó jí yú qiú chéng, máng mù xuǎn zé le xiá zhǎi de zhí dào jí xíng jūn.",
        "translation": "The enemy, eager for quick success, blindly chose the narrow direct road for marching.",
        "grammarPoint": "高级成语 (急于求成/盲目)"
      },
      {
        "sentence": "“故绝地无留，险地无舍，围地则谋。”\"",
        "pinyin": "Gù jué dì wú liú, xiǎn dì wú shě, wéi dì zé móu.",
        "translation": "In dead terrain stay not; in perilous terrain encamp not; in encircled terrain strategize.",
        "grammarPoint": "经典战地原则"
      },
      {
        "sentence": "山路崎岖难行，士兵们负重艰难前行。",
        "pinyin": "Shān lù qí qū nán xíng, shì bīng men fù zhòng jiān nán qián xíng.",
        "translation": "The mountain road was rugged; soldiers marched heavily burdened and with difficulty.",
        "grammarPoint": "高级形容词 (崎岖) 与状态描写"
      },
      {
        "sentence": "孙子与士兵同甘共苦，极大地鼓舞了士气。",
        "pinyin": "Sūn Zǐ yǔ shì bīng tóng gān gòng kǔ, jí dà de gǔ wǔ le shì qì.",
        "translation": "Sun Tzu shared weal and woe with soldiers, greatly boosting morale.",
        "grammarPoint": "高级成语 (同甘共苦/士气大振)"
      },
      {
        "sentence": "相反，敌军在直道上遭遇暴雨和泥石流，辎重尽失。",
        "pinyin": "Xiāng fǎn, dí guó zài zhí dào shang zāo yù bào yǔ hé ní shí liú, zī zhòng jìn shī.",
        "translation": "Conversely, the enemy faced heavy rain and mudflows on the direct road, losing all supplies.",
        "grammarPoint": "对比连接词 (相反) 与成语 (尽失)"
      },
      {
        "sentence": "“后人发，先人至”，这是兵法中最高明的谋略。\"",
        "pinyin": "Hòu rén fā, xiān rén zhì\", zhè shì bīng fǎ zhōng zuì gāo míng de móu lüè.",
        "translation": "Starting later but arriving first\"—the most brilliant strategy in military art.",
        "grammarPoint": "高级概念 (后发先至)"
      },
      {
        "sentence": "当敌军狼狈不堪赶到要地时，我方早已严阵以待。",
        "pinyin": "Dāng dí guó láng bèi bù kān gǎn dào yào dì shí, wǒ fāng zǎo yǐ yán zhèn yǐ dài.",
        "translation": "When the disheveled enemy rushed to the key point, we had long been waiting in formation.",
        "grammarPoint": "成语 (狼狈不堪/严阵以待)"
      },
      {
        "sentence": "面对以逸待劳的我军，敌军瞬间失去了抵抗意志。",
        "pinyin": "Miàn duì yǐ yì dài láo de wǒ jūn, dí guó shùn jiān shī qù le dǐ kàng yì zhì.",
        "translation": "Facing our rested troops waiting for the fatigued, the enemy instantly lost the will to resist.",
        "grammarPoint": "成语 (以逸待劳)"
      },
      {
        "sentence": "不战而屈人之兵的奇迹再次上演。",
        "pinyin": "Bù zhàn ér qū rén zhī bīng de qí jì zài cì shàng yǎn.",
        "translation": "The miracle of subduing the enemy without fighting was staged once more.",
        "grammarPoint": "经典主题呼应"
      },
      {
        "sentence": "军事上的远见，往往超越了单纯的力气博弈。",
        "pinyin": "Jūn shì shang de yuǎn jiàn, wǎng wǎng chāo yuè le dān chún de lì qi bó yì.",
        "translation": "Military foresight often transcends mere physical wrestling of strength.",
        "grammarPoint": "高级名词 (远见/博弈)"
      },
      {
        "sentence": "智者的棋局，从来不走寻常路。",
        "pinyin": "Zhì zhě de qí jú, cóng lái bù zǒu xún cháng lù.",
        "translation": "The wise person's chess game never follows conventional paths.",
        "grammarPoint": "诗意总结句"
      }
    ]
  },
  {
    "title": "九变篇——灵活应变与将帅之道 · Nine Variations and Leadership",
    "intro": "突发暴雨导致河水暴涨，原本制定的作战计划被迫全部推翻。将领们惊慌失措，孙子冷静地给出了九变的原则。",
    "introEn": "A sudden storm sends the river surging and makes the original battle plan useless. As the commanders panic, Sun Tzu calmly explains the principles of adapting to changing circumstances.",
    "cards": [
      {
        "sentence": "“是故智者之虑，必杂于利害。”\"",
        "pinyin": "Shì gù zhì zhě de lǜ, bì zá yú lì hài.",
        "translation": "Therefore, the calculations of the wise must blend considerations of benefit and harm.",
        "grammarPoint": "辩证思维原则"
      },
      {
        "sentence": "杂于利害，而务可信也；杂于患，而患可解也。",
        "pinyin": "Zá yú lì hài, ér wù kě xìn yě; zá yú huàn, ér huàn kě jiě yě.",
        "translation": "Blending benefits, business can expand; blending harms, troubles can be resolved.",
        "grammarPoint": "高级古典文法平行句"
      },
      {
        "sentence": "战场形势瞬息万变，死守教条必然走向灭亡。",
        "pinyin": "Zhàn chǎng xíng shì shùn xī wàn biàn, sǐ shǒu jiào tiáo bì rán zǒu xiàng miè wáng.",
        "translation": "The battlefield changes instantly; rigid dogmatism inevitably leads to destruction.",
        "grammarPoint": "高级词汇 (教条/灭亡)"
      },
      {
        "sentence": "孙子提出了“九变”原则，强调将领必须临机应变。",
        "pinyin": "Sūn Zǐ tí chū le \"jiǔ biàn\" yuán zé, qiáng diào jiāng lǐng bì xū lín jī yìng biàn.",
        "translation": "Sun Tzu proposed the \"Nine Variations,\" stressing commanders must adapt on the spot.",
        "grammarPoint": "专业成语 (临机应变)"
      },
      {
        "sentence": "突发的大洪水切断了退路，副将急得团团转。",
        "pinyin": "Tū fā de dà hóng shuǐ qiè duàn le tuì lù, fù jiàng jí de tuán tuán zhuàn.",
        "translation": "Sudden massive floods cut off the retreat; the deputy spun around in anxiety.",
        "grammarPoint": "动作状语与俗语 (急得团团转)"
      },
      {
        "sentence": "“将有五危：死可杀，生可虏，忿可侮，廉可辱，爱民可烦。”\"",
        "pinyin": "Jiāng yǒu wǔ wēi: sǐ kě shā, shēng kě lǔ, fèn kě wǔ, lián kě rǔ, ài mín kě fán.",
        "translation": "A general has 5 dangers: reckless death, cowardice, hot-tempered, overly proud, overly compassionate.",
        "grammarPoint": "军事领导力缺陷分析"
      },
      {
        "sentence": "优秀的将领必须克服这五种致命的性格缺陷。",
        "pinyin": "Yōu xiù de jiāng lǐng bì xū kè fú zhè wǔ zhǒng zhì mìng de xìng gé què xiàn.",
        "translation": "Excellent commanders must overcome these five fatal personality flaws.",
        "grammarPoint": "高级词汇 (致命/缺陷)"
      },
      {
        "sentence": "面对洪水，孙子果断下令转移至高处扎营。",
        "pinyin": "Miàn duì hóng shuǐ, Sūn Zǐ guǒ duàn xià lìng zhuǎn yí zhì gāo chù zhā yíng.",
        "translation": "Faced with flood, Sun Tzu decisively ordered relocation to high ground for camping.",
        "grammarPoint": "副词 (果端) 与动宾搭配"
      },
      {
        "sentence": "不拘泥于原定计划，这才是真正的通权达变。",
        "pinyin": "Bù jū ní yú yuán dìng jì huà, zhè cái shì zhēn zhèng de tōng quán dá biàn.",
        "translation": "Not clinging to original plans—this is true tactical flexibility.",
        "grammarPoint": "成语 (拘泥/通权达变)"
      },
      {
        "sentence": "敌军因为死守教条，在洪水中遭受了毁灭性打击。",
        "pinyin": "Dí guó yīn wèi sǐ shǒu jiào tiáo, zài hóng shuǐ zhōng zāo shòu le huǐ miè xìng dǎ jī.",
        "translation": "The enemy, clinging to dogma, suffered devastating blows in the flood.",
        "grammarPoint": "高级修饰语 (毁灭性打击)"
      },
      {
        "sentence": "将领们终于领悟到兵法活学活用的真谛。",
        "pinyin": "Jiāng lǐng men zhōng yú lǐng wù dào bīng fǎ huó xué huó yòng de zhēn dì.",
        "translation": "The commanders finally grasped the true essence of applying military art flexibly.",
        "grammarPoint": "高级词汇 (领悟/真谛)"
      },
      {
        "sentence": "兵无常势，水无常形，唯变所适。",
        "pinyin": "Bīng wú cháng shì, shuǐ wú cháng xíng, wéi biàn suǒ shì.",
        "translation": "Troops have no constant posture, water no constant shape; adapt according to change.",
        "grammarPoint": "经典战略哲学总结"
      },
      {
        "sentence": "智者的指挥艺术，在危机中绽放出耀眼的光芒。",
        "pinyin": "Zhì zhě de zhǐ huī yì shù, zài wēi jī zhōng zhàn fàng chū yào yǎn de guāng máng.",
        "translation": "The wise commander's art of command blooms with dazzling light in crisis.",
        "grammarPoint": "意境结尾"
      }
    ]
  },
  {
    "title": "行军篇——观察敌情与树立军威 · Marching and Assessing the Enemy",
    "intro": "军队开拔进入山地。孙子骑在马上，仔细观察沿途的飞鸟、树木动静以及敌军留下的蛛丝马迹。",
    "introEn": "The army marches into the mountains. From horseback, Sun Tzu watches the birds, the movement among the trees, and every trace the enemy has left behind.",
    "cards": [
      {
        "sentence": "行军作战，对地形和敌情细致的观察至关重要。",
        "pinyin": "Xíng jūn zuò zhàn, duì dì xíng hé dí qíng xì zhì de guān chá zhì guān zhòng yào.",
        "translation": "Marching and fighting requires meticulous observation of terrain and enemy intelligence.",
        "grammarPoint": "高级短语 (至关重要)"
      },
      {
        "sentence": "孙子教导将士们如何通过自然现象判断敌踪。",
        "pinyin": "Sūn Zǐ jiào dǎo jiāng shì men rú hé tōng guò zì rán xiàn xiàng pàn duàn dí zōng.",
        "translation": "Sun Tzu taught soldiers how to judge enemy tracks through natural phenomena.",
        "grammarPoint": "动宾结构 (判断敌踪)"
      },
      {
        "sentence": "“群鸟飞起，下有伏兵；兽惊，主来也。”\"",
        "pinyin": "Qún niǎo fēi qǐ, xià yǒu fú bīng; shòu jīng, zhǔ lái yě.",
        "translation": "Birds flying up mean hidden troops below; startled beasts mean the enemy approaches.",
        "grammarPoint": "古典侦察口诀"
      },
      {
        "sentence": "树木摇晃不定，说明敌军正在秘密调动。",
        "pinyin": "Shù mù yáo huàng bù dìng, shuō míng dí jūn zhèng zài mì mì diào dòng.",
        "translation": "Shaking trees unsteadily indicate secret enemy troop redeployment.",
        "grammarPoint": "动态描写 (摇晃不定)"
      },
      {
        "sentence": "尘土高扬而狭长，是战车正在快速驰骋的信号。",
        "pinyin": "Chén tǔ gāo yáng ér xiá cháng, shì zhàn chē zhèng zài kuài sù chí chěng de xìn hào.",
        "translation": "High and narrow dust clouds signal chariots galloping fast.",
        "grammarPoint": "高级词汇 (驰骋/信号)"
      },
      {
        "sentence": "尘土散乱而矮小，代表敌人正在砍伐树木扎营。",
        "pinyin": "Chén tǔ sàn luàn ér ǎi xiǎo, dài biǎo dí rén zhèng zài kǎn fá shù mù zhā yíng.",
        "translation": "Scattered low dust represents enemies cutting wood to camp.",
        "grammarPoint": "动作细节描写"
      },
      {
        "sentence": "语言卑谦却暗中加紧备战的，说明敌军即将发起进攻。",
        "pinyin": "Yǔ yán bēi qiān què àn zhōng jiā jǐn bèi zhàn de, shuō míng dí jūn jí jiāng fā qǐ jìn gōng.",
        "translation": "Polite words but secret step-up in prep indicate impending enemy attack.",
        "grammarPoint": "转折对比结构"
      },
      {
        "sentence": "双方频繁使者往来又没有实质进展，说明敌方内心虚弱。",
        "pinyin": "Shuāng fāng pín fàn shǐ zhě wǎng lái yòu méi yǒu shí zhì jìn zhǎn, shuō míng dí fāng nèi xīn xū ruò.",
        "translation": "Frequent envoys without substantial progress show enemy inner weakness.",
        "grammarPoint": "心理剖析"
      },
      {
        "sentence": "治军必须恩威并施，才能让士兵心悦诚服。",
        "pinyin": "Zhì jūn bì xū ēn wēi bìng shī, cái néng ràng shì bīng xīn yuè chéng fú.",
        "translation": "Managing an army requires both grace and severity for soldiers to submit willingly.",
        "grammarPoint": "高级成语 (恩威并施/心悦诚服)"
      },
      {
        "sentence": "对部下过于严苛或过于纵容，都会导致军纪涣散。",
        "pinyin": "Duì bù xià guò yú yán kē huò guò yú zòng róng, dōu huì dǎo zhì jūn jì huàn sàn.",
        "translation": "Overly harsh or lenient treatment of subordinates leads to indiscipline.",
        "grammarPoint": "高级词汇 (严苛/纵容/涣散)"
      },
      {
        "sentence": "士兵还未完全归附就盲目惩罚，他们会产生逆反心理。",
        "pinyin": "Shì bīng hái wèi wán quán guī fù jiù máng mù chéng fá, tā men huì chǎn shēng nì fǎn xīn lǐ.",
        "translation": "Punishing soldiers blindly before winning loyalty creates rebellious psychology.",
        "grammarPoint": "心理学词汇 (逆反心理)"
      },
      {
        "sentence": "只有平日训练有素、赏罚分明，军队才能战无不胜。",
        "pinyin": "Zhǐ yǒu píng rì xùn liàn yǒu sù, shǎng fá fēn míng, jūn duì cái néng zhàn wú bù shèng.",
        "translation": "Only with daily rigorous training and clear rewards/punishments can an army be invincible.",
        "grammarPoint": "高级成语 (赏罚分明/战无不胜)"
      },
      {
        "sentence": "侦察与治军的完美结合，构成了百战不殆的基石。",
        "pinyin": "Zhēn chá yǔ zhì jūn de wán měi jié hé, gòu chéng le bǎi zhàn bù dài de jī shí.",
        "translation": "The perfect blend of scouting and discipline forms the cornerstone of eternal victory.",
        "grammarPoint": "学术总结句"
      }
    ]
  },
  {
    "title": "地形篇——六种险地与将领过失 · Terrain Types and General's Flaws",
    "intro": "军队开进一片复杂诡异的峡谷地带。孙子指着前方的地形，给将领们详细剖析可能导致全军覆没的六种地形绝境。",
    "introEn": "The army enters a maze of unfamiliar canyons. Pointing ahead, Sun Tzu explains six dangerous kinds of terrain—and the commander's mistakes that could cost an entire army.",
    "cards": [
      {
        "sentence": "“地形有通者、有挂者、有散者、有险者、有阻者、有远者。”\"",
        "pinyin": "Dì xíng yǒu tōng zhě, yǒu guà zhě, yǒu sàn zhě, yǒu xiǎn zhě, yǒu zǔ zhě, yǒu yuǎn zhě.",
        "translation": "Terrains include accessible, entangling, halting, perilous, obstructed, distant.",
        "grammarPoint": "六种基本地形分类"
      },
      {
        "sentence": "我们可以去的地方，敌人也能去，这叫通形。",
        "pinyin": "Wǒ men kě yǐ qù de dì fang, dí rén yě néng qù, zhè jiào tōng xíng.",
        "translation": "Places we can reach where enemies can also go are called accessible terrain.",
        "grammarPoint": "条件定义句"
      },
      {
        "sentence": "进得去却很难返回的，是容易陷入被动的挂形。",
        "pinyin": "Jìn de qù què hěn nán fǎn huí de, shì róng yì xiàn rù bèi dòng de guà xíng.",
        "translation": "Terrain easy to enter but hard to return from is entangling terrain.",
        "grammarPoint": "高级词汇 (陷入被动)"
      },
      {
        "sentence": "在自家领土作战容易军心分散，这叫散形。",
        "pinyin": "Zài zì jiā lǐng tǔ zuò zhàn róng yì jūn xīn fēn sàn, zhè jiào sàn xíng.",
        "translation": "Fighting on home soil easily scatters morale, called scattering terrain.",
        "grammarPoint": "军事地理心理学"
      },
      {
        "sentence": "“兵有走者、有弛者、有陷者、有崩者、有乱者、有北者。”\"",
        "pinyin": "Bīng yǒu zǒu zhě, yǒu chí zhě, yǒu xiàn zhě, yǒu bēng zhě, yǒu luàn zhě, yǒu běi zhě.",
        "translation": "Troops face six failures: flight, collapse, ruin, implosion, chaos, defeat.",
        "grammarPoint": "军队六种灾难性失误"
      },
      {
        "sentence": "这些灾难并非天灾，全都是将领自身的过失造成的。",
        "pinyin": "Zhè xiē zāi nàn bìng fēi tiān zāi, quán dōu shì jiāng lǐng zì shēn de guò shī zào chéng de.",
        "translation": "These disasters are not natural calamities, but caused by the commander's own flaws.",
        "grammarPoint": "否定强调 (并非……全都是)"
      },
      {
        "sentence": "实力相当却以一击十，叫做“走”（逃跑）。",
        "pinyin": "Shí lì xiāng dāng què yǐ yī jī shí, jiào zuò \"zǒu\" (táo pǎo).",
        "translation": "Equal strength but one fighting ten leads to \"flight.",
        "grammarPoint": "军事概念对比"
      },
      {
        "sentence": "士兵强悍而将领孱弱，导致军队无法有效指挥，叫“弛”。",
        "pinyin": "Shì bīng qiáng hàn ér jiāng lǐng chán ruò, dǎo zhì jūn duì wú fǎ yǒu xiào zhǐ huī, jiào \"chí.",
        "translation": "Fierce troops with weak generals lead to breakdown, called \"relaxation/ruin.",
        "grammarPoint": "高级词汇 (孱弱/无效)"
      },
      {
        "sentence": "将领暴躁无能、部下骄横跋扈，遭遇战必败，叫“陷”。",
        "pinyin": "Jiāng lǐng bào zào wú néng, bù xià jiāo hèng bá hù, zāo yù zhàn bì bài, jiào \"xiàn.",
        "translation": "Impetuous generals and arrogant subordinates mean defeat upon engagement, called \"implosion.",
        "grammarPoint": "高级成语 (骄横跋扈)"
      },
      {
        "sentence": "高级将领心怀怨恨、遇到不顺就抗命，叫“崩”。",
        "pinyin": "Gāo jí jiāng lǐng xīn huái yuàn hèn, yù dào bù shùn jiù kàng mìng, jiào \"bēng.",
        "translation": "Senior generals harboring resentment and defying orders face \"collapse.",
        "grammarPoint": "高级心理描写 (心怀怨恨)"
      },
      {
        "sentence": "将领优柔寡断、赏罚不明，导致部队军心涣散，叫“乱”。",
        "pinyin": "Jiāng lǐng yōu róu guǎ duàn, shǎng fá bù míng, dǎo zhì bù duì jūn xīn huàn sàn, jiào \"luàn.",
        "translation": "Indecisive generals with murky rewards/punishments cause chaos.",
        "grammarPoint": "成语 (优柔寡断)"
      },
      {
        "sentence": "面对弱敌却不敢交战、纵容敌人，叫“北”（大败）。",
        "pinyin": "Miàn duì ruò dí què bù gǎn jiāo zhàn, zòng róng dí rén, jiào \"běi\" (dà bài).",
        "translation": "Facing weak foes but avoiding battle and conniving leads to defeat.",
        "grammarPoint": "动宾搭配与结果"
      },
      {
        "sentence": "孙子环视诸将：“避开这六种绝境，是将领的天职。”",
        "pinyin": "Sūn Zǐ huán shì zhù jiāng: \"Bì kāi zhè liù zhǒng jué jìng, shì jiāng lǐng de tiān zhí.",
        "translation": "Sun Tzu looked around: \"Avoiding these six perils is the general's sacred duty.",
        "grammarPoint": "权责概念 (天职)"
      }
    ]
  },
  {
    "title": "九地篇——投之亡地然后存 · Nine Terrains and Desperate Strategy",
    "intro": "军队被逼入绝境，退路被大火封死。绝望之中，孙子下达了一道让所有人震惊的命令：全军背水一战，向死而生！",
    "introEn": "The army is trapped, with fire cutting off its retreat. In the midst of despair, Sun Tzu gives a startling order: stand with your backs to the river and fight as if survival depends on it.",
    "cards": [
      {
        "sentence": "孙子将战场细分为九种地形，其中最奇妙的是“死地”。",
        "pinyin": "Sūn Zǐ jiāng zhàn chǎng xì fēn wéi jiǔ zhǒng dì xíng, qí zhōng zuì qí miào de shì \"sǐ dì.",
        "translation": "Sun Tzu divided the battlefield into 9 terrains; most wondrous is \"Desperate Ground.",
        "grammarPoint": "高级副词 (细分)"
      },
      {
        "sentence": "“投之亡地然后存，陷之死地然后生。”\"",
        "pinyin": "Tóu zhī wáng dì rán hòu cún, xiàn zhī sǐ dì rán hòu shēng.",
        "translation": "Throw them into doomed ground and they survive; plunge into death ground and they live.",
        "grammarPoint": "经典背水一战哲学"
      },
      {
        "sentence": "敌军从四面八方包围上来，形势千钧一发。",
        "pinyin": "Dí guó cóng sì miàn bā fāng bao wéi shàng lái, xíng shì qiān jūn yī fà.",
        "translation": "Enemies surrounded from all sides; the situation hung by a hair.",
        "grammarPoint": "成语 (千钧一发)"
      },
      {
        "sentence": "士兵们看着身后的绝壁，眼中露出了惊恐。",
        "pinyin": "Shì bīng men kàn zhe shēn hòu de jué bì, yǎn zhōng lù chū le jīng kǒng.",
        "translation": "Soldiers looked at the cliff behind, fear showing in their eyes.",
        "grammarPoint": "动作与心理描写"
      },
      {
        "sentence": "然而，孙子神色平静，大声宣布：“今日我们无路可退！”",
        "pinyin": "Rán ér Sūn Zǐ shén sè píng jìng dà shēng xuān bù Jīn rì wǒ men wú lù kě tuì.",
        "translation": "Yet Sun Tzu remained calm and announced loudly, “Today, there is no turning back!”",
        "grammarPoint": "转折连词与高级词汇 (神色平静)"
      },
      {
        "sentence": "退缩者斩！只有向前冲锋，方能杀出一条血路！",
        "pinyin": "Tuì suō zhě zhǎn zhǐ yǒu xiàng qián chōng fēng fāng néng shā chū yì tiáo xuè lù.",
        "translation": "“Anyone who retreats will be executed! We must charge ahead to fight our way out!”",
        "grammarPoint": "严厉军纪与高级表达 (方能)"
      },
      {
        "sentence": "绝境激发了人类潜意识中最恐怖的战斗力。",
        "pinyin": "Jué jìng jī fā le rén lèi qián yì shí zhōng zuì kǒng bù de zhàn dòu lì.",
        "translation": "Desperate situations stimulate the most terrifying combat power in human subconscious.",
        "grammarPoint": "心理学词汇 (潜意识)"
      },
      {
        "sentence": "士兵们丢掉多余的辎重，双眼通红，犹如猛虎下山。",
        "pinyin": "Shì bīng men diū diào duō yú de zī zhòng, shuāng yǎn tōng hóng, yóu rú měng hǔ xià shān.",
        "translation": "Soldiers shed excess supplies, eyes burning red, like ferocious tigers coming down mountains.",
        "grammarPoint": "生动的比喻修辞"
      },
      {
        "sentence": "齐声呐喊震动山谷，气势瞬间压倒了合围的敌军。",
        "pinyin": "Qí shēng nà hǎn zhèn dòng shān gǔ, qì shì shùn jiān yā dǎo le hé wéi de dí guó.",
        "translation": "Unified shouts shook valleys, momentum instantly overwhelming encircling enemies.",
        "grammarPoint": "高级动词 (压倒)"
      },
      {
        "sentence": "敌军万万没想到，绝境中的军队竟然能爆发出如此恐怖的力量。",
        "pinyin": "Dí guó wàn wàn méi xiǎng dào, jué jìng zhōng de jūn duì jìng rán néng bào fā chū rú cǐ kǒng bù de lì liàng.",
        "translation": "Enemies never expected desperate troops to burst out with such terrifying power.",
        "grammarPoint": "副词强化 (万万没想到/竟然)"
      },
      {
        "sentence": "势如破竹的冲锋直接撕裂了敌军的防线。",
        "pinyin": "Shì rú pò zhú de chōng fēng zhí jiē sī liè le dí guó de fáng xiàn.",
        "translation": "The irresistible charge directly tore apart the enemy defense line.",
        "grammarPoint": "成语 (势如破竹)"
      },
      {
        "sentence": "敌军溃败逃窜，再也没有人敢轻视这支背水一战的军队。",
        "pinyin": "Dí guó kuì bài táo cuàn, zài yě méi yǒu rén gǎn qīng shì zhè zhī bèi shuǐ yī zhàn de jūn duì.",
        "translation": "The enemy routed in flight; no one dared despise this army fighting with backs to water.",
        "grammarPoint": "高级成语 (溃败逃窜)"
      },
      {
        "sentence": "向死而生，这是《孙子兵法》对生命的终极拷问。",
        "pinyin": "Xiàng sǐ ér shēng, zhè shì \"Sūn Zǐ Bīng Fǎ\" duì shēng mìng de zhōng jí kǎo wèn.",
        "translation": "Facing death to live—this is the ultimate inquiry of The Art of War into life.",
        "grammarPoint": "哲学升华总结"
      }
    ]
  },
  {
    "title": "火攻篇——天时地利与五种火攻 · Fire Attacks and Environmental Control",
    "intro": "夜晚，狂风大作。干燥的芦苇荡旁，孙子下令将事先准备好的火油坛砸碎，一场改变战局的大火即将点燃。",
    "introEn": "A fierce wind rises at night beside a field of dry reeds. Sun Tzu orders the prepared jars of oil to be broken open, and a fire that could change the course of the battle is about to begin.",
    "cards": [
      {
        "sentence": "“凡火攻有五：一曰火人，二曰火积，三曰火辎，四曰火库，五曰火队。”\"",
        "pinyin": "Fán huǒ gōng yǒu wǔ: yī yuē huǒ rén, èr yuē huǒ jī, sān yuē huǒ zī, sì yuē huǒ kù, wǔ yuē huǒ duì.",
        "translation": "There are five kinds of fire attack: against troops, supplies, baggage, storehouses, and transport units.",
        "grammarPoint": "五种经典火攻分类"
      },
      {
        "sentence": "发动火攻必须具备精确的天时与干燥的环境。",
        "pinyin": "Fā dòng huǒ gōng bì xū jù bèi jīng què de tiān shí yǔ gān zào de huán jìng.",
        "translation": "Launching fire attacks requires precise timing and dry environment.",
        "grammarPoint": "结构与高级词汇 (具备/精确)"
      },
      {
        "sentence": "夜晚，东南风狂飙大作，正是火攻的绝佳时机。",
        "pinyin": "Yè wǎn, dōng nán fēng kuáng biāo dà zuò, zhèng shì huǒ gōng de jué jiā shí jī.",
        "translation": "At night, southeast gale raged fiercely—prime timing for fire attacks.",
        "grammarPoint": "气象描写成语 (狂飙大作)"
      },
      {
        "sentence": "孙子一声令下，数千支火箭划破夜空。",
        "pinyin": "Sūn Zǐ yī shēng lìng xià, shù qiān zhī huǒ jiàn huá pò yè kōng.",
        "translation": "Sun Tzu gave the order; thousands of fire arrows split the night sky.",
        "grammarPoint": "动宾搭配与动词 (划破)"
      },
      {
        "sentence": "火借风势，风助火威，瞬间化作一条咆哮的火龙。",
        "pinyin": "Huǒ jiè fēng shì, fēng zhù huǒ wēi, shùn jiān huà zuò yī tiáo páo xiào de huǒ lóng.",
        "translation": "Fire borrowed wind, wind aided fire, instantly transforming into a roaring fire dragon.",
        "grammarPoint": "经典对仗与拟人修辞"
      },
      {
        "sentence": "敌军营地乱作一团，士兵在烈火中惊恐万状。",
        "pinyin": "Dí guó yíng dì luàn zuò yī tuán, shì bīng zài liè huǒ zhōng jīng kǒng wàn zhuàng.",
        "translation": "Enemy camps fell into chaos; soldiers panicked exceedingly in blazing fire.",
        "grammarPoint": "成语 (乱作一团/惊恐万状)"
      },
      {
        "sentence": "“凡用火应于变，火发于内，则早应之于外。”\"",
        "pinyin": "Fán yòng huǒ yìng yú biàn, huǒ fā yú nèi, zé zǎo yìng zhī yú wài.",
        "translation": "Fire attacks must respond to change; internal fires must coordinate with external response.",
        "grammarPoint": "战术配合原则"
      },
      {
        "sentence": "敌军试图突围，却被我方早已布置的伏兵迎头痛击。",
        "pinyin": "Dí guó shì tú tū wéi, què bèi wǒ fāng zǎo yǐ bù zhì de fú bīng yíng tóu tòng jī.",
        "translation": "Enemies attempted breakout, but were severely struck by our pre-arranged ambush.",
        "grammarPoint": "高级动词 (试图/迎头痛击)"
      },
      {
        "sentence": "熊熊烈火映红了半边天，烧毁了敌人的所有辎重。",
        "pinyin": "Xióng xióng liè huǒ yìng hóng le bàn biān tiān, shāo huǐ le dí rén de suǒ yǒu zī zhòng.",
        "translation": "Roaring flames lit half the sky red, destroying all enemy supplies.",
        "grammarPoint": "视觉感官高级渲染"
      },
      {
        "sentence": "面对天威般的烈火，敌军彻底丧失了抵抗意志。",
        "pinyin": "Miàn duì tiān wēi bān de liè huǒ, dí guó chè dǐ sàng shī le dǐ kàng yì zhì.",
        "translation": "Faced with heavenly wrath of fire, enemies completely lost will to resist.",
        "grammarPoint": "高级词汇 (丧失意志)"
      },
      {
        "sentence": "这场完美的火攻战例，被后世兵家奉为圭臬。",
        "pinyin": "Zhè chǎng wán měi de huǒ gōng zhàn lì, bèi hòu shì bīng jiā fèng wéi guī niè.",
        "translation": "This perfect fire attack case was revered as a standard by later strategists.",
        "grammarPoint": "书面语成语 (奉为圭臬)"
      },
      {
        "sentence": "战争不仅是智力的博弈，更是对自然规律的极致利用。",
        "pinyin": "Zhàn zhēng bù jǐn shì zhì lì de bó yì, gèng shì duì zì rán guī lǜ de jí zhì lì yòng.",
        "translation": "War is not just intellectual wrestling, but ultimate exploitation of natural laws.",
        "grammarPoint": "深刻哲学总结"
      },
      {
        "sentence": "硝烟散去，黎明的曙光照亮了胜利的战场。",
        "pinyin": "Xiāo yān sàn qù, lí míng de shǔ guāng zhào liàng le shèng lì de zhàn chǎng.",
        "translation": "Smoke cleared; dawn's first light illuminated the victorious battlefield.",
        "grammarPoint": "优美收尾意境"
      }
    ]
  },
  {
    "title": "用间篇——间谍情报与最高智慧 · Espionage and the Ultimate Wisdom",
    "intro": "战争彻底胜利后，孙子独自站在高台上。他向年轻的谋士揭示了《孙子兵法》全书最核心、也最神秘的收官篇章——间谍与情报的秘密。",
    "introEn": "After victory is secured, Sun Tzu stands alone on a high platform. He reveals to a young adviser the book's final and most mysterious lesson: the power of spies and intelligence.",
    "cards": [
      {
        "sentence": "《孙子兵法》的终极篇章，聚焦于决定战争成败的间谍。\"",
        "pinyin": "Sūn Zǐ Bīng Fǎ\" de zhōng jí piān zhāng, jù jiāo yú jué dìng zhàn zhēng chéng bài de jiàn dié.",
        "translation": "The ultimate chapter of The Art of War focuses on spies who determine war outcome.",
        "grammarPoint": "高级动词 (聚焦)"
      },
      {
        "sentence": "“故唯明君贤将，能以上智为间者，必成大功。”\"",
        "pinyin": "Gù wéi míng jūn xián jiāng, néng yǐ shàng zhì wéi jiàn zhě, bì chéng dà gōng.",
        "translation": "Only wise rulers and worthy generals using top intelligence as spies achieve great feats.",
        "grammarPoint": "经典古典引文"
      },
      {
        "sentence": "战争花费巨大，但若吝啬情报费用，则是极大的愚蠢。",
        "pinyin": "Zhàn zhēng huā fèi jù dà, dàn ruò lìn sè qíng bào fèi yòng, zé shì jí dà de yú chǔn.",
        "translation": "War is costly; but being stingy with intelligence fees is supreme foolishness.",
        "grammarPoint": "高级词汇 (吝啬/愚蠢)"
      },
      {
        "sentence": "孙子将间谍分为五类：因间、内间、反间、死间、生间。",
        "pinyin": "Sūn Zǐ jiāng jiàn dié fēn wéi wǔ lèi: yīn jiàn, nèi jiàn, fǎn jiàn, sǐ jiàn, shēng jiàn.",
        "translation": "Sun Tzu categorized spies into five: local, internal, converted, doomed, surviving.",
        "grammarPoint": "军事情报分类学"
      },
      {
        "sentence": "利用敌国乡民做间谍的，称为因间。",
        "pinyin": "Lì yòng dí guó xiāng mín zuò jiàn dié de, chēng wéi yīn jiàn.",
        "translation": "Using enemy local villagers as spies is called local spying.",
        "grammarPoint": "定语从句定义法"
      },
      {
        "sentence": "策反敌国官僚作为内应的，称为内间。",
        "pinyin": "Cè fǎn dí guó guān liáo zuò wéi nèi yìng de, chēng wéi nèi yìng.",
        "translation": "Subverting enemy officials as inside support is internal spying.",
        "grammarPoint": "专业词汇 (策反/内应)"
      },
      {
        "sentence": "发现并反过来利用敌方派来的间谍，称为反间。",
        "pinyin": "Fā xiàn bìng fǎn guò lái lì yòng dí fāng pài lái de jiàn dié, chēng wéi fǎn jiàn.",
        "translation": "Discovering and turning enemy spies back is converted spying.",
        "grammarPoint": "复合动作与反间计"
      },
      {
        "sentence": "散布虚假情报让死士去敌方散播的，称为死间。",
        "pinyin": "Sàn bù xū jiǎ qíng bào ràng sǐ shì qù dí fāng sàn bù de, chēng wéi sǐ jiàn.",
        "translation": "Spreading false intel via death squads is doomed spying.",
        "grammarPoint": "战术欺骗手段"
      },
      {
        "sentence": "能够活着带回情报的，则称为生间。",
        "pinyin": "Néng gòu huó zhe dài huí qíng bào de, zé chēng wéi shēng jiàn.",
        "translation": "Those who survive to bring back intelligence are surviving spies.",
        "grammarPoint": "对比称谓"
      },
      {
        "sentence": "“五间之道，必知其道，知之必在于反间。”\"",
        "pinyin": "Wǔ jiàn zhī dào, bì zhī qí dào, zhī zhī bì zài yú fǎn jiàn.",
        "translation": "Of the five spies, one must know their ways; knowing them lies in converted spies.",
        "grammarPoint": "情报核心关键点"
      },
      {
        "sentence": "知己知彼，百战不殆，其核心就在于信息的绝对掌控。",
        "pinyin": "Zhī jǐ zhī bǐ, bǎi zhàn bù dài, qí hé xīn jiù zài yú xìn xī de jué duì zhǎng kòng.",
        "translation": "Know enemy and self, 100 battles safe; core lies in absolute control of information.",
        "grammarPoint": "千古名句与高级词汇 (掌控)"
      },
      {
        "sentence": "智慧的最高境界，是让战争在无形中结束。",
        "pinyin": "Zhì huì de zuì gāo jìng jiè, shì ràng zhàn zhēng zài wú xíng zhōng jié shù.",
        "translation": "The highest realm of wisdom is letting war end invisibly.",
        "grammarPoint": "抽象哲学升华"
      },
      {
        "sentence": "孙子收起竹简，望向远方。千年的兵法，化作了一缕历史的清风。",
        "pinyin": "Sūn Zǐ shōu qǐ zhú jiǎn wàng xiàng yuǎn fāng qiān nián de bīng fǎ huà zuò le yì lǚ lì shǐ de qīng fēng.",
        "translation": "Sun Tzu put away the bamboo slips and gazed into the distance. His ancient art of war became a gentle breeze through history.",
        "grammarPoint": "史诗感诗意收尾"
      }
    ]
  }
];

  const stories = themes.map((theme, themeIndex) => ({
    columnId: `art_of_war_${String(themeIndex + 1).padStart(2, '0')}`,
    title: theme.title,
    category: 'strange',
    hskRange: 'HSK 5-6',
    totalCards: 13,
    freeCards: 4,
    cover: theme.title.slice(0, 1),
    coverClass: `c${(themeIndex % 10) + 1}`,
    intro: theme.intro,
    introEn: theme.introEn,
    cards: theme.cards.map((card, cardIndex) => ({
      id: `aow56_${String(themeIndex * 13 + cardIndex + 1).padStart(3, '0')}`,
      title: `${String(cardIndex + 1).padStart(2, '0')}. ${theme.title.split(String.fromCharCode(183))[1].trim()}`,
      isFree: cardIndex < 4,
      sentence: card.sentence,
      pinyin: card.pinyin,
      translation: card.translation,
      grammarPoint: card.grammarPoint,
      vocabList: []
    }))
  }));

  window.STORIES_DATA = {
    ...(base && typeof base === 'object' ? base : {}),
    collection: (base && base.collection) ? base.collection + ' + The Art of War HSK 5-6' : 'HanLingo The Art of War HSK 5-6',
    stories: [...((base && Array.isArray(base.stories)) ? base.stories : []), ...stories]
  };
})();
