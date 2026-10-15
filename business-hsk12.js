(function () {
  const base = window.STORIES_DATA || { stories: [] };

  const words = {
    '你好': ['nǐ hǎo', 'hello', 1], '我': ['wǒ', 'I; me', 1], '叫': ['jiào', 'to be called', 1],
    '名字': ['míngzi', 'name', 1], '认识': ['rènshi', 'to meet; to know', 2], '高兴': ['gāoxìng', 'happy; glad', 1],
    '公司': ['gōngsī', 'company', 2], '工作': ['gōngzuò', 'work; job', 2], '经理': ['jīnglǐ', 'manager', 2],
    '同事': ['tóngshì', 'colleague', 2], '一起': ['yìqǐ', 'together', 1], '请': ['qǐng', 'please', 1],
    '谢谢': ['xièxie', 'thank you', 1], '名片': ['míngpiàn', 'business card', 2], '帮忙': ['bāngmáng', 'to help', 2],
    '今天': ['jīntiān', 'today', 1], '明天': ['míngtiān', 'tomorrow', 1], '现在': ['xiànzài', 'now', 1],
    '上午': ['shàngwǔ', 'morning; a.m.', 1], '下午': ['xiàwǔ', 'afternoon; p.m.', 1], '时间': ['shíjiān', 'time', 1],
    '文件': ['wénjiàn', 'document; file', 2], '发': ['fā', 'to send', 2], '看': ['kàn', 'to look; to read', 1],
    '做': ['zuò', 'to do; to make', 1], '忙': ['máng', 'busy', 1], '等': ['děng', 'to wait', 2],
    '开会': ['kāihuì', 'to have a meeting', 2], '会议': ['huìyì', 'meeting', 2], '开始': ['kāishǐ', 'to begin', 2],
    '问题': ['wèntí', 'question; problem', 2], '觉得': ['juéde', 'to think; to feel', 2], '可以': ['kěyǐ', 'can; may', 1],
    '说': ['shuō', 'to say; to speak', 1], '再': ['zài', 'again', 1], '一次': ['yí cì', 'once; one time', 2],
    '同意': ['tóngyì', 'to agree', 2], '办法': ['bànfǎ', 'way; method', 2], '好': ['hǎo', 'good; well', 1],
    '电话': ['diànhuà', 'telephone; phone call', 1], '打电话': ['dǎ diànhuà', 'to make a phone call', 1],
    '接': ['jiē', 'to answer; to receive', 2], '号码': ['hàomǎ', 'number', 2], '消息': ['xiāoxi', 'message; news', 2],
    '联系': ['liánxì', 'to contact', 2], '听': ['tīng', 'to listen', 1], '说话': ['shuōhuà', 'to speak', 1],
    '回': ['huí', 'to reply; to return', 1], '等一下': ['děng yíxià', 'wait a moment', 1], '不好意思': ['bù hǎoyìsi', 'excuse me; sorry', 2],
    '欢迎': ['huānyíng', 'welcome', 2], '吃饭': ['chīfàn', 'to eat a meal', 1], '喝': ['hē', 'to drink', 1],
    '水': ['shuǐ', 'water', 1], '茶': ['chá', 'tea', 1], '咖啡': ['kāfēi', 'coffee', 1],
    '喜欢': ['xǐhuan', 'to like', 1], '味道': ['wèidào', 'taste; flavor', 2], '一起': ['yìqǐ', 'together', 1],
    '客人': ['kèrén', 'guest', 2], '请客': ['qǐngkè', 'to treat someone', 2], '谢谢': ['xièxie', 'thank you', 1],
    '出差': ['chūchāi', 'to travel for work', 2], '飞机': ['fēijī', 'airplane', 1], '机场': ['jīchǎng', 'airport', 2],
    '到': ['dào', 'to arrive; to', 1], '接': ['jiē', 'to meet; to pick up', 2], '酒店': ['jiǔdiàn', 'hotel', 2],
    '房间': ['fángjiān', 'room', 1], '这里': ['zhèlǐ', 'here', 1], '那边': ['nàbiān', 'over there', 1],
    '车': ['chē', 'car; vehicle', 1], '请坐': ['qǐng zuò', 'please sit', 1], '欢迎': ['huānyíng', 'welcome', 2],
    '产品': ['chǎnpǐn', 'product', 2], '这个': ['zhège', 'this; this one', 1], '新': ['xīn', 'new', 1],
    '好看': ['hǎokàn', 'good-looking; nice', 1], '喜欢': ['xǐhuan', 'to like', 1], '价格': ['jiàgé', 'price', 2],
    '多少': ['duōshao', 'how many; how much', 1], '钱': ['qián', 'money', 1], '可以': ['kěyǐ', 'can; may', 1],
    '试': ['shì', 'to try', 2], '看看': ['kànkan', 'to have a look', 1], '需要': ['xūyào', 'to need', 2],
    '项目': ['xiàngmù', 'project', 2], '进度': ['jìndù', 'progress', 2], '已经': ['yǐjīng', 'already', 2],
    '完成': ['wánchéng', 'to finish; to complete', 2], '还': ['hái', 'still; yet', 1], '没有': ['méiyǒu', 'not have; have not', 1],
    '今天': ['jīntiān', 'today', 1], '明天': ['míngtiān', 'tomorrow', 1], '早': ['zǎo', 'early', 1],
    '晚': ['wǎn', 'late', 1], '一点': ['yìdiǎn', 'a little', 1], '时间': ['shíjiān', 'time', 1],
    '第一': ['dì-yī', 'first', 1], '第二': ['dì-èr', 'second', 1], '好': ['hǎo', 'good; well', 1],
    '帮助': ['bāngzhù', 'to help', 2], '请问': ['qǐngwèn', 'may I ask', 1], '可以': ['kěyǐ', 'can; may', 1],
    '一下': ['yíxià', 'a little; briefly', 1], '休息': ['xiūxi', 'to rest', 2], '身体': ['shēntǐ', 'body; health', 1],
    '不舒服': ['bù shūfu', 'to feel unwell', 2], '请假': ['qǐngjià', 'to ask for leave', 2], '明天': ['míngtiān', 'tomorrow', 1],
    '回家': ['huí jiā', 'to go home', 1], '下班': ['xiàbān', 'to finish work', 2], '再见': ['zàijiàn', 'goodbye', 1],
    '谢谢': ['xièxie', 'thank you', 1], '没关系': ['méi guānxi', 'that is okay; no problem', 1],
    '帮': ['bāng', 'to help', 2], '办公室': ['bàngōngshì', 'office', 2], '合作': ['hézuò', 'to work together', 2],
    '希望': ['xīwàng', 'to hope; to wish', 2], '出差': ['chūchāi', 'to travel for work', 2], '祝': ['zhù', 'to wish', 2],
    '愉快': ['yúkuài', 'happy; pleasant', 2], '顺利': ['shùnlì', 'smoothly; without problems', 2], '一切': ['yíqiè', 'everything', 2],
    '吃': ['chī', 'to eat', 1], '信号': ['xìnhào', 'signal', 2], '清楚': ['qīngchu', 'clear', 2],
    '想': ['xiǎng', 'to want; to think', 1], '走': ['zǒu', 'to leave; to walk', 1], '收到': ['shōudào', 'to receive', 2],
    '写': ['xiě', 'to write', 1], '放': ['fàng', 'to put; to place', 2], '请假': ['qǐngjià', 'to ask for leave', 2],
    '帮忙': ['bāngmáng', 'to help', 2], '菜': ['cài', 'dish; food', 1], '月': ['yuè', 'month; moon', 1]
  };

  const decks = [
    {
      columnId: 'business_hsk12_intro',
      title: '职场自我介绍与破冰 · Self-Introductions & Workplace Icebreakers',
      cover: '你', coverClass: 'c3',
      intro: 'Simple, polite ways to introduce yourself and start a friendly conversation at work.',
      introZh: '用简单礼貌的话介绍自己，在职场自然开启对话。',
      cards: [
        ['你好，我是安娜，在公司工作。', 'Nǐ hǎo, wǒ shì Ānnà, zài gōngsī gōngzuò.', 'Hello, I’m Anna. I work at the company.', ['你好', '公司', '工作']],
        ['我叫大卫，很高兴认识你。', 'Wǒ jiào Dàwèi, hěn gāoxìng rènshi nǐ.', 'My name is David. It’s nice to meet you.', ['叫', '认识', '高兴']],
        ['我在市场部工作。', 'Wǒ zài Shìchǎng Bù gōngzuò.', 'I work in the marketing department.', ['工作']],
        ['这是我的名片。', 'Zhè shì wǒ de míngpiàn.', 'This is my business card.', ['名片']],
        ['很高兴和你一起工作！', 'Hěn gāoxìng hé nǐ yìqǐ gōngzuò!', 'I’m very happy to work with you!', ['高兴', '一起', '工作']],
        ['请问，你叫什么名字？', 'Qǐngwèn, nǐ jiào shénme míngzi?', 'May I ask your name?', ['请问', '名字']],
        ['你可以叫我王经理。', 'Nǐ kěyǐ jiào wǒ Wáng jīnglǐ.', 'You can call me Manager Wang.', ['可以', '经理']],
        ['我以前在上海工作。', 'Wǒ yǐqián zài Shànghǎi gōngzuò.', 'I worked in Shanghai before.', ['工作']],
        ['我刚来公司，请多帮我。', 'Wǒ gāng lái gōngsī, qǐng duō bāng wǒ.', 'I just joined the company. Please help me when you can.', ['公司', '请', '帮']],
        ['我的中文说得不太好。', 'Wǒ de Zhōngwén shuō de bú tài hǎo.', 'My Chinese is not very good.', ['说', '好']],
        ['有问题的话，请告诉我。', 'Yǒu wèntí de huà, qǐng gàosu wǒ.', 'If you have any questions, please tell me.', ['问题', '请']],
        ['希望我们合作愉快！', 'Xīwàng wǒmen hézuò yúkuài!', 'I hope we enjoy working together!', ['希望', '合作', '愉快']]
      ]
    },
    {
      columnId: 'business_hsk12_daily',
      title: '日常办公与任务安排 · Daily Office Tasks & Schedule',
      cover: '工', coverClass: 'c4',
      intro: 'Useful phrases for daily tasks, sharing files, and planning your workday.',
      introZh: '用简单句子处理日常工作、文件和时间安排。',
      cards: [
        ['我今天有很多工作要做。', 'Wǒ jīntiān yǒu hěn duō gōngzuò yào zuò.', 'I have a lot of work to do today.', ['今天', '工作', '做']],
        ['请帮我看一下这个文件。', 'Qǐng bāng wǒ kàn yíxià zhège wénjiàn.', 'Please help me look at this file.', ['请', '帮', '文件']],
        ['这个文件今天要做好。', 'Zhège wénjiàn jīntiān yào zuò hǎo.', 'This file needs to be ready today.', ['这个', '文件', '今天', '做']],
        ['我现在在写邮件。', 'Wǒ xiànzài zài xiě yóujiàn.', 'I’m writing an email now.', ['现在', '写']],
        ['你可以发给我吗？', 'Nǐ kěyǐ fā gěi wǒ ma?', 'Could you send it to me?', ['可以', '发']],
        ['你收到我的邮件了吗？', 'Nǐ shōudào wǒ de yóujiàn le ma?', 'Did you get my email?', ['收到']],
        ['下午我们有一个会议。', 'Xiàwǔ wǒmen yǒu yí ge huìyì.', 'We have a meeting this afternoon.', ['下午', '会议']],
        ['我们下午两点开会。', 'Wǒmen xiàwǔ liǎng diǎn kāihuì.', 'We have a meeting at 2 p.m.', ['下午', '开会']],
        ['请把文件放在我的桌上。', 'Qǐng bǎ wénjiàn fàng zài wǒ de zhuō shàng.', 'Please put the file on my desk.', ['请', '文件']],
        ['我现在在办公室。', 'Wǒ xiànzài zài bàngōngshì.', 'I’m in the office now.', ['现在', '办公室']],
        ['我们明天早上再谈，可以吗？', 'Wǒmen míngtiān zǎoshang zài tán, kěyǐ ma?', 'Can we talk again tomorrow morning?', ['明天', '可以']],
        ['今天的工作已经完成了。', 'Jīntiān de gōngzuò yǐjīng wánchéng le.', 'Today’s work is finished.', ['今天', '工作', '完成']]
      ]
    },
    {
      columnId: 'business_hsk12_meetings',
      title: '开会与表达意见 · Meetings & Sharing Opinions',
      cover: '会', coverClass: 'c5',
      intro: 'Speak up, ask simple questions, and share your ideas politely in meetings.',
      introZh: '学习在会议中礼貌提问、表达想法和回应同事。',
      cards: [
        ['大家都到了吗？会议开始了。', 'Dàjiā dōu dào le ma? Huìyì kāishǐ le.', 'Is everyone here? The meeting has started.', ['会议', '开始']],
        ['今天我们要讨论新项目。', 'Jīn tiān wǒ men yào tǎo lùn xīn xiàng mù.', 'Today we’re going to discuss a new project.', ['今天', '项目']],
        ['请问，大家有什么问题？', 'Qǐngwèn, dàjiā yǒu shénme wèntí?', 'May I ask, does anyone have any questions?', ['请问', '问题']],
        ['我觉得这个想法很好。', 'Wǒ juéde zhège xiǎngfǎ hěn hǎo.', 'I think this is a very good idea.', ['觉得', '好']],
        ['我同意你的意见。', 'Wǒ tóngyì nǐ de yìjiàn.', 'I agree with your opinion.', ['同意']],
        ['我有一点不同的想法。', 'Wǒ yǒu yìdiǎn bùtóng de xiǎngfǎ.', 'I have a slightly different idea.', ['一点']],
        ['请说慢一点，谢谢。', 'Qǐng shuō màn yìdiǎn, xièxie.', 'Please speak a little more slowly. Thank you.', ['请', '说', '谢谢']],
        ['我没有听懂，请再说一次。', 'Wǒ méiyǒu tīng dǒng, qǐng zài shuō yí cì.', 'I didn’t understand. Could you say that again?', ['听', '请', '再', '一次']],
        ['你觉得这个办法怎么样？', 'Nǐ juéde zhège bànfǎ zěnmeyàng?', 'What do you think of this approach?', ['觉得', '办法']],
        ['我们看一下下一页。', 'Wǒmen kàn yíxià xià yí yè.', 'Let’s look at the next page.', ['看', '一下']],
        ['我们就在这里开会。', 'Wǒmen jiù zài zhèlǐ kāihuì.', 'Let’s have the meeting right here.', ['这里', '开会']],
        ['今天的会议到这里。', 'Jīntiān de huìyì dào zhèlǐ.', 'That’s all for today’s meeting.', ['今天', '会议']]
      ]
    },
    {
      columnId: 'business_hsk12_phone',
      title: '电话与发消息沟通 · Phone Calls & Messaging',
      cover: '电', coverClass: 'c6',
      intro: 'Make and answer calls, leave a message, and keep your tone polite.',
      introZh: '练习接打电话、留言和礼貌地保持联系。',
      cards: [
        ['喂，你好！请问李经理在吗？', 'Wéi, nǐ hǎo! Qǐngwèn Lǐ jīnglǐ zài ma?', 'Hello! May I speak with Manager Li?', ['你好', '请问', '经理']],
        ['我现在说话方便吗？', 'Wǒ xiànzài shuōhuà fāngbiàn ma?', 'Is this a good time to talk?', ['现在', '说话']],
        ['我在办公室，现在可以接电话。', 'Wǒ zài bàngōngshì, xiànzài kěyǐ jiē diànhuà.', 'I’m in the office and can take your call now.', ['现在', '可以', '电话']],
        ['你可以等一下吗？', 'Nǐ kěyǐ děng yíxià ma?', 'Could you wait a moment?', ['可以', '等一下']],
        ['我可以给他留言吗？', 'Wǒ kěyǐ gěi tā liú yán ma?', 'Can I leave him a message?', ['可以']],
        ['请让他给我回电话。', 'Qǐng ràng tā gěi wǒ huí diànhuà.', 'Please ask him to call me back.', ['请', '回', '电话']],
        ['请把您的电话号码给我。', 'Qǐng bǎ nín de diànhuà hàomǎ gěi wǒ.', 'Could you give me your phone number?', ['请', '电话', '号码']],
        ['信号不太好，我听不清楚。', 'Xìnhào bú tài hǎo, wǒ tīng bu qīngchu.', 'The signal isn’t very good. I can’t hear clearly.', ['好', '听']],
        ['我可以加您的微信吗？', 'Wǒ kěyǐ jiā nín de Wēixìn ma?', 'May I add you on WeChat?', ['可以']],
        ['我已经把文件发给您了。', 'Wǒ yǐjīng bǎ wénjiàn fā gěi nín le.', 'I’ve already sent you the file.', ['已经', '文件', '发']],
        ['收到，谢谢！', 'Shōudào, xièxie!', 'Received. Thank you!', ['谢谢']],
        ['请保持联系！', 'Qǐng bǎochí liánxì!', 'Please keep in touch!', ['请', '联系']]
      ]
    },
    {
      columnId: 'business_hsk12_dining',
      title: '商务宴请与社交 · Business Dining & Socializing',
      cover: '饭', coverClass: 'c7',
      intro: 'Friendly, simple phrases for welcoming guests and sharing a meal.',
      introZh: '在商务用餐和社交场合自然地招待客人、表达感谢。',
      cards: [
        ['欢迎大家来参加今天的晚餐！', 'Huānyíng dàjiā lái cānjiā jīntiān de wǎncān!', 'Welcome, everyone, to tonight’s dinner!', ['欢迎', '今天']],
        ['张总，请坐这里。', 'Zhāng zǒng, qǐng zuò zhèlǐ.', 'Mr. Zhang, please sit here.', ['请']],
        ['请问，您有什么不吃的吗？', 'Qǐngwèn, nín yǒu shénme bù chī de ma?', 'May I ask if there is anything you don’t eat?', ['请问', '吃']],
        ['我不吃牛肉，谢谢。', 'Wǒ bù chī niúròu, xièxie.', 'I don’t eat beef, thank you.', ['吃', '谢谢']],
        ['这道菜真的很好吃。', 'Zhè dào cài zhēn de hěn hǎochī.', 'This dish is really delicious.', ['菜', '吃']],
        ['我们一起喝一杯吧！', 'Wǒmen yìqǐ hē yì bēi ba!', 'Let’s have a drink together!', ['一起', '喝']],
        ['祝我们的合作越来越好！', 'Zhù wǒmen de hézuò yuèláiyuè hǎo!', 'Here’s to our growing cooperation!', ['好']],
        ['我不能喝酒，可以喝茶吗？', 'Wǒ bù néng hējiǔ, kěyǐ hē chá ma?', 'I can’t drink alcohol. May I have tea?', ['可以', '喝', '茶']],
        ['大家吃好了吗？', 'Dàjiā chī hǎo le ma?', 'Has everyone finished eating?', ['吃']],
        ['今天和大家吃饭，我很高兴。', 'Jīntiān hé dàjiā chīfàn, wǒ hěn gāoxìng.', 'I’m very happy to have dinner with you today.', ['今天', '吃饭', '高兴']],
        ['谢谢您的招待。', 'Xièxie nín de zhāodài.', 'Thank you for having me.', ['谢谢']],
        ['我们下次再见！', 'Wǒmen xià cì zàijiàn!', 'See you again next time!', ['再']]
      ]
    },
    {
      columnId: 'business_hsk12_travel',
      title: '出差与接待客户 · Business Trips & Receiving Clients',
      cover: '行', coverClass: 'c8',
      intro: 'Help a visitor feel welcome and make simple arrangements during a work trip.',
      introZh: '出差和接待来访客人时，清楚表达行程、地点和需要。',
      cards: [
        ['我下周要去北京出差。', 'Wǒ xià zhōu yào qù Běijīng chūchāi.', 'I’m going to Beijing on a business trip next week.', ['出差']],
        ['欢迎来到我们的公司！', 'Huānyíng láidào wǒmen de gōngsī!', 'Welcome to our company!', ['欢迎', '公司']],
        ['您一路辛苦了，请喝水。', 'Nín yílù xīnkǔ le, qǐng hē shuǐ.', 'You must be tired from your trip. Please have some water.', ['请', '喝', '水']],
        ['我带您看一下我们的办公室。', 'Wǒ dài nín kàn yíxià wǒmen de bàngōngshì.', 'Let me show you around our office.', ['看', '一下', '办公室']],
        ['请问，您的飞机几点到？', 'Qǐngwèn, nín de fēijī jǐ diǎn dào?', 'May I ask what time your flight arrives?', ['请问', '飞机', '到']],
        ['我可以去机场接您。', 'Wǒ kěyǐ qù jīchǎng jiē nín.', 'I can meet you at the airport.', ['可以', '机场', '接']],
        ['您需要我帮您叫车吗？', 'Nín xūyào wǒ bāng nín jiào chē ma?', 'Would you like me to call a car for you?', ['需要', '帮', '车']],
        ['这是我们的产品。', 'Zhè shì wǒmen de chǎnpǐn.', 'This is our product.', ['产品']],
        ['这个产品很简单，也很好用。', 'Zhège chǎnpǐn hěn jiǎndān, yě hěn hǎo yòng.', 'This product is simple and easy to use.', ['这个', '产品', '好']],
        ['您觉得这个产品好吗？', 'Nín juéde zhège chǎnpǐn hǎo ma?', 'What do you think of this product?', ['觉得', '这个', '产品']],
        ['希望我们以后有更多合作。', 'Xīwàng wǒmen yǐhòu yǒu gèng duō hézuò.', 'I hope we can work together more in the future.', ['希望', '合作']],
        ['祝您一路愉快！', 'Zhù nín yílù yúkuài!', 'Have a pleasant trip!', ['祝', '愉快']]
      ]
    },
    {
      columnId: 'business_hsk12_progress',
      title: '项目进度与汇报 · Project Progress & Reporting',
      cover: '进', coverClass: 'c9',
      intro: 'Give a short update, talk about what is done, and agree on the next step.',
      introZh: '用简单句子汇报进度、说明问题并安排下一步。',
      cards: [
        ['我简单说一下今天的工作。', 'Wǒ jiǎndān shuō yíxià jīntiān de gōngzuò.', 'Let me briefly talk about today’s work.', ['说', '一下', '今天', '工作']],
        ['第一部分工作已经完成了。', 'Dì-yī bùfen gōngzuò yǐjīng wánchéng le.', 'The first part of the work is finished.', ['第一', '工作', '已经', '完成']],
        ['现在一切都很顺利。', 'Xiànzài yíqiè dōu hěn shùnlì.', 'Everything is going well so far.', ['现在', '一切', '顺利']],
        ['我们遇到了一个小问题。', 'Wǒmen yùdào le yí ge xiǎo wèntí.', 'We have run into a small problem.', ['问题']],
        ['这个项目需要多少时间？', 'Zhège xiàngmù xūyào duōshao shíjiān?', 'How much time does this project need?', ['这个', '项目', '需要', '时间']],
        ['我们还需要更多时间。', 'Wǒmen hái xūyào gèng duō shíjiān.', 'We need a little more time.', ['需要', '时间']],
        ['请问，这个项目什么时候可以完成？', 'Qǐngwèn, zhège xiàngmù shénme shíhou kěyǐ wánchéng?', 'When can this project be finished?', ['请问', '项目', '可以', '完成']],
        ['我们可以在星期五完成。', 'Wǒmen kěyǐ zài Xīngqīwǔ wánchéng.', 'We can finish it by Friday.', ['可以', '完成']],
        ['请看一下这张表。', 'Qǐng kàn yíxià zhè zhāng biǎo.', 'Please take a look at this chart.', ['请', '看', '一下']],
        ['这个月比上个月好。', 'Zhège yuè bǐ shàng ge yuè hǎo.', 'This month is better than last month.', ['这个', '月', '好']],
        ['这个结果比我们想的好。', 'Zhège jiéguǒ bǐ wǒmen xiǎng de hǎo.', 'This result is better than we expected.', ['这个', '好']],
        ['下一步，我们一起做这个工作。', 'Xià yí bù, wǒmen yìqǐ zuò zhège gōngzuò.', 'Next, let’s work on this together.', ['一起', '做', '工作']]
      ]
    },
    {
      columnId: 'business_hsk12_help',
      title: '求助、请假与离开办公室 · Asking Help, Time-Off & Leaving Office',
      cover: '请', coverClass: 'c10',
      intro: 'Ask for help, explain a delay, or request time off in a clear and considerate way.',
      introZh: '有需要时礼貌求助、请假、说明迟到或提前离开。',
      cards: [
        ['请问，你可以帮我一个忙吗？', 'Qǐngwèn, nǐ kěyǐ bāng wǒ yí ge máng ma?', 'Excuse me, could you do me a favor?', ['请问', '可以', '帮']],
        ['我不太懂这个软件。', 'Wǒ bú tài dǒng zhège ruǎnjiàn.', 'I don’t quite understand this software.', ['这个']],
        ['谢谢你，真的帮了我很多！', 'Xièxie nǐ, zhēn de bāng le wǒ hěn duō!', 'Thank you. You’ve helped me a lot!', ['谢谢', '帮']],
        ['经理，我明天想请假一天。', 'Jīnglǐ, wǒ míngtiān xiǎng qǐngjià yì tiān.', 'Manager, I’d like to take tomorrow off.', ['经理', '明天', '请假']],
        ['我身体有点不舒服，想休息一下。', 'Wǒ shēntǐ yǒudiǎn bù shūfu, xiǎng xiūxi yíxià.', 'I feel a little unwell and would like to rest.', ['身体', '休息', '一下']],
        ['这是我的请假条。', 'Zhè shì wǒ de qǐngjià tiáo.', 'This is my leave request.', ['请假']],
        ['收到，谢谢你告诉我。', 'Shōudào, xièxie nǐ gàosu wǒ.', 'Got it. Thank you for letting me know.', ['谢谢']],
        ['我明天早上晚一点到。', 'Wǒ míngtiān zǎoshang wǎn yìdiǎn dào.', 'I’ll arrive a little later tomorrow morning.', ['明天', '早', '一点', '到']],
        ['不好意思，我今天要早点走。', 'Bù hǎoyìsi, wǒ jīntiān yào zǎo diǎn zǒu.', 'Sorry, I need to leave early today.', ['不好意思', '今天']],
        ['我想早点回家，可以吗？', 'Wǒ xiǎng zǎo diǎn huí jiā, kěyǐ ma?', 'May I go home a little early?', ['想', '回家', '可以']],
        ['没关系，你先回家休息吧。', 'Méi guānxi, nǐ xiān huí jiā xiūxi ba.', 'That’s okay. Go home and rest first.', ['没关系', '回家', '休息']],
        ['谢谢大家，明天见！', 'Xièxie dàjiā, míngtiān jiàn!', 'Thank you, everyone. See you tomorrow!', ['谢谢', '明天']]
      ]
    }
  ];

  const businessStories = decks.map((deck, deckIndex) => ({
    ...deck,
    category: 'business',
    hskRange: 'HSK 1-2',
    totalCards: deck.cards.length,
    freeCards: 4,
    intro: deck.intro,
    introZh: deck.introZh,
    cards: deck.cards.map(([sentence, pinyin, translation, vocabulary], cardIndex) => ({
      id: `biz12_${String(deckIndex * 12 + cardIndex + 1).padStart(2, '0')}`,
      title: `${String(cardIndex + 1).padStart(2, '0')}. ${translation}`,
      isFree: cardIndex < 4,
      sentence,
      pinyin,
      translation,
      vocabList: [...new Set(vocabulary)].filter((word) => words[word]).map((word) => ({
        word,
        pinyin: words[word][0],
        translation: words[word][1],
        hskLevel: words[word][2]
      }))
    }))
  }));

  window.STORIES_DATA = {
    ...(base && typeof base === 'object' ? base : {}),
    collection: (base && base.collection) ? base.collection + ' + Business HSK 1-2' : 'HanLingo Business HSK 1-2',
    stories: [
      ...((base && Array.isArray(base.stories)) ? base.stories : []),
      ...businessStories
    ]
  };
})();
