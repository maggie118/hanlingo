(function () {
  const base = window.STORIES_DATA || { stories: [] };

  const dailyStories = [
    {
      "columnId": "daily_greetings",
      "title": "打招呼与日常问候 · Greetings & Daily Check-ins",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "哈",
      "coverClass": "c3",
      "intro": "Start the day with simple greetings, warm check-ins, and easy everyday talk.",
      "introZh": "从早到晚的简单问候，让你开口更自然。",
      "cards": [
        { "id": "daily_01", "title": "01. 你好 | Hello", "isFree": true, "sentence": "你好！", "pinyin": "Nǐ hǎo!", "translation": "Hello!", "vocabList": [{"word":"你好","pinyin":"nǐ hǎo","translation":"hello","hskLevel":1}] },
        { "id": "daily_02", "title": "02. 早上好 | Good morning", "isFree": true, "sentence": "早上好！", "pinyin": "Zǎoshang hǎo!", "translation": "Good morning!", "vocabList": [{"word":"早上","pinyin":"zǎoshang","translation":"morning","hskLevel":1},{"word":"好","pinyin":"hǎo","translation":"good","hskLevel":1}] },
        { "id": "daily_03", "title": "03. 你好吗 | How are you", "isFree": true, "sentence": "你好吗？", "pinyin": "Nǐ hǎo ma?", "translation": "How are you?", "vocabList": [{"word":"好吗","pinyin":"hǎo ma","translation":"how are you","hskLevel":1},{"word":"你","pinyin":"nǐ","translation":"you","hskLevel":1}] },
        { "id": "daily_04", "title": "04. 我很好 | I am fine", "isFree": true, "sentence": "我很好。", "pinyin": "Wǒ hěn hǎo.", "translation": "I’m very well.", "vocabList": [{"word":"很好","pinyin":"hěn hǎo","translation":"very good","hskLevel":1},{"word":"我","pinyin":"wǒ","translation":"I","hskLevel":1}] },
        { "id": "daily_05", "title": "05. 你忙吗 | Are you busy", "isFree": false, "sentence": "你忙吗？", "pinyin": "Nǐ máng ma?", "translation": "Are you busy?", "vocabList": [{"word":"忙","pinyin":"máng","translation":"busy","hskLevel":1},{"word":"吗","pinyin":"ma","translation":"question particle","hskLevel":1}] },
        { "id": "daily_06", "title": "06. 我在家 | I am at home", "isFree": false, "sentence": "我在家。", "pinyin": "Wǒ zài jiā.", "translation": "I’m at home.", "vocabList": [{"word":"在","pinyin":"zài","translation":"at; in","hskLevel":1},{"word":"家","pinyin":"jiā","translation":"home","hskLevel":1}] },
        { "id": "daily_07", "title": "07. 你在哪儿 | Where are you", "isFree": false, "sentence": "你在哪儿？", "pinyin": "Nǐ zài nǎr?", "translation": "Where are you?", "vocabList": [{"word":"在哪儿","pinyin":"zài nǎr","translation":"where","hskLevel":1},{"word":"哪儿","pinyin":"nǎr","translation":"where","hskLevel":1}] },
        { "id": "daily_08", "title": "08. 我去上班 | Going to work", "isFree": false, "sentence": "我去上班。", "pinyin": "Wǒ qù shàngbān.", "translation": "I’m going to work.", "vocabList": [{"word":"上班","pinyin":"shàngbān","translation":"go to work","hskLevel":1},{"word":"去","pinyin":"qù","translation":"to go","hskLevel":1}] },
        { "id": "daily_09", "title": "09. 你吃了吗 | Have you eaten", "isFree": false, "sentence": "你吃了吗？", "pinyin": "Nǐ chī le ma?", "translation": "Have you eaten?", "vocabList": [{"word":"吃","pinyin":"chī","translation":"to eat","hskLevel":1},{"word":"了吗","pinyin":"le ma","translation":"have done?","hskLevel":2}] },
        { "id": "daily_10", "title": "10. 我还没吃 | I haven’t eaten", "isFree": false, "sentence": "我还没吃。", "pinyin": "Wǒ hái méi chī.", "translation": "I haven’t eaten yet.", "vocabList": [{"word":"还没","pinyin":"hái méi","translation":"not yet","hskLevel":1},{"word":"吃","pinyin":"chī","translation":"to eat","hskLevel":1}] },
        { "id": "daily_11", "title": "11. 再见 | Goodbye", "isFree": false, "sentence": "再见！", "pinyin": "Zàijiàn!", "translation": "Goodbye!", "vocabList": [{"word":"再见","pinyin":"zàijiàn","translation":"goodbye","hskLevel":1}] },
        { "id": "daily_12", "title": "12. 明天见 | See you tomorrow", "isFree": false, "sentence": "明天见！", "pinyin": "Míngtiān jiàn!", "translation": "See you tomorrow!", "vocabList": [{"word":"明天","pinyin":"míngtiān","translation":"tomorrow","hskLevel":1},{"word":"见","pinyin":"jiàn","translation":"to see","hskLevel":1}] }
      ]
    },
    {
      "columnId": "daily_coffee",
      "title": "点咖啡与餐厅用餐 · Ordering Coffee & Dining Out",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "咖",
      "coverClass": "c4",
      "intro": "Everyday food and coffee phrases for real-life ordering, sharing, and paying.",
      "introZh": "餐厅和咖啡店里最常用的口语，随时可以开口点单。",
      "cards": [
        { "id": "daily_13", "title": "01. 我想要咖啡 | I want coffee", "isFree": true, "sentence": "我想要咖啡。", "pinyin": "Wǒ xiǎng yào kāfēi.", "translation": "I want coffee.", "vocabList": [{"word":"咖啡","pinyin":"kāfēi","translation":"coffee","hskLevel":1},{"word":"想要","pinyin":"xiǎng yào","translation":"want","hskLevel":1}] },
        { "id": "daily_14", "title": "02. 请给我菜单 | Menu, please", "isFree": true, "sentence": "请给我菜单。", "pinyin": "Qǐng gěi wǒ càidān.", "translation": "Please give me the menu.", "vocabList": [{"word":"菜单","pinyin":"càidān","translation":"menu","hskLevel":2},{"word":"请","pinyin":"qǐng","translation":"please","hskLevel":1}] },
        { "id": "daily_15", "title": "03. 我要拿铁 | I want a latte", "isFree": true, "sentence": "我要拿铁。", "pinyin": "Wǒ yào nátiě.", "translation": "I want a latte.", "vocabList": [{"word":"拿铁","pinyin":"nátiě","translation":"latte","hskLevel":2},{"word":"我要","pinyin":"wǒ yào","translation":"I want","hskLevel":1}] },
        { "id": "daily_16", "title": "04. 不要冰的 | No ice", "isFree": true, "sentence": "不要冰的。", "pinyin": "Bù yào bīng de.", "translation": "No ice, please.", "vocabList": [{"word":"冰","pinyin":"bīng","translation":"ice","hskLevel":1},{"word":"不要","pinyin":"bù yào","translation":"do not want","hskLevel":1}] },
        { "id": "daily_17", "title": "05. 这个多少钱 | How much is this", "isFree": false, "sentence": "这个多少钱？", "pinyin": "Zhège duōshǎo qián?", "translation": "How much is this?", "vocabList": [{"word":"多少钱","pinyin":"duōshǎo qián","translation":"how much","hskLevel":2},{"word":"这个","pinyin":"zhège","translation":"this one","hskLevel":1}] },
        { "id": "daily_18", "title": "06. 一共十块 | Ten yuan total", "isFree": false, "sentence": "一共十块。", "pinyin": "Yígòng shí kuài.", "translation": "Ten yuan in total.", "vocabList": [{"word":"一共","pinyin":"yígòng","translation":"total","hskLevel":2},{"word":"块","pinyin":"kuài","translation":"yuan","hskLevel":1}] },
        { "id": "daily_19", "title": "07. 我想吃面 | I want noodles", "isFree": false, "sentence": "我想吃面。", "pinyin": "Wǒ xiǎng chī miàn.", "translation": "I want noodles.", "vocabList": [{"word":"想吃","pinyin":"xiǎng chī","translation":"want to eat","hskLevel":1},{"word":"面","pinyin":"miàn","translation":"noodles","hskLevel":1}] },
        { "id": "daily_20", "title": "08. 这个很好吃 | Very tasty", "isFree": false, "sentence": "这个很好吃。", "pinyin": "Zhège hěn hǎochī.", "translation": "This is very tasty.", "vocabList": [{"word":"好吃","pinyin":"hǎochī","translation":"delicious","hskLevel":1},{"word":"很好吃","pinyin":"hěn hǎochī","translation":"very tasty","hskLevel":1}] },
        { "id": "daily_21", "title": "09. 请结账 | Check out, please", "isFree": false, "sentence": "请结账。", "pinyin": "Qǐng jiézhàng.", "translation": "Check out, please.", "vocabList": [{"word":"结账","pinyin":"jiézhàng","translation":"check out; pay","hskLevel":2},{"word":"请","pinyin":"qǐng","translation":"please","hskLevel":1}] },
        { "id": "daily_22", "title": "10. 这里有wifi | Wi‑Fi here", "isFree": false, "sentence": "这里有wifi吗？", "pinyin": "Zhèlǐ yǒu wifi ma?", "translation": "Is there Wi‑Fi here?", "vocabList": [{"word":"wifi","pinyin":"wifi","translation":"Wi‑Fi","hskLevel":1},{"word":"这里","pinyin":"zhèlǐ","translation":"here","hskLevel":1}] },
        { "id": "daily_23", "title": "11. 可以加冰吗 | Can I add ice", "isFree": false, "sentence": "可以加冰吗？", "pinyin": "Kěyǐ jiā bīng ma?", "translation": "Can I add ice?", "vocabList": [{"word":"加冰","pinyin":"jiā bīng","translation":"add ice","hskLevel":2},{"word":"可以","pinyin":"kěyǐ","translation":"can","hskLevel":1}] },
        { "id": "daily_24", "title": "12. 谢谢你 | Thank you", "isFree": false, "sentence": "谢谢你。", "pinyin": "Xièxie nǐ.", "translation": "Thank you.", "vocabList": [{"word":"谢谢","pinyin":"xièxie","translation":"thank you","hskLevel":1},{"word":"你","pinyin":"nǐ","translation":"you","hskLevel":1}] }
      ]
    },
    {
      "columnId": "daily_taxi",
      "title": "打车与问路出行 · Taking Taxis & Asking Directions",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "路",
      "coverClass": "c5",
      "intro": "Short, useful travel phrases for taxis, subway stops, and directions.",
      "introZh": "打车、问路、坐地铁都可以靠这些句子开口。",
      "cards": [
        { "id": "daily_25", "title": "01. 我想打车 | I want a taxi", "isFree": true, "sentence": "我想打车。", "pinyin": "Wǒ xiǎng dǎchē.", "translation": "I want to take a taxi.", "vocabList": [{"word":"打车","pinyin":"dǎchē","translation":"take a taxi","hskLevel":2},{"word":"想","pinyin":"xiǎng","translation":"want","hskLevel":1}] },
        { "id": "daily_26", "title": "02. 去火车站 | Go to the station", "isFree": true, "sentence": "去火车站。", "pinyin": "Qù huǒchē zhàn.", "translation": "Go to the train station.", "vocabList": [{"word":"火车站","pinyin":"huǒchē zhàn","translation":"train station","hskLevel":2},{"word":"去","pinyin":"qù","translation":"to go","hskLevel":1}] },
        { "id": "daily_27", "title": "03. 这儿怎么走 | How do I get there", "isFree": true, "sentence": "这儿怎么走？", "pinyin": "Zhèr zěnme zǒu?", "translation": "How do I get there?", "vocabList": [{"word":"怎么走","pinyin":"zěnme zǒu","translation":"how to go","hskLevel":2},{"word":"这儿","pinyin":"zhèr","translation":"here","hskLevel":1}] },
        { "id": "daily_28", "title": "04. 往前走 | Go straight", "isFree": true, "sentence": "往前走。", "pinyin": "Wǎng qián zǒu.", "translation": "Go straight ahead.", "vocabList": [{"word":"往前","pinyin":"wǎng qián","translation":"forward","hskLevel":2},{"word":"走","pinyin":"zǒu","translation":"to walk","hskLevel":1}] },
        { "id": "daily_29", "title": "05. 左边是医院 | Hospital on the left", "isFree": false, "sentence": "左边是医院。", "pinyin": "Zuǒbiān shì yīyuàn.", "translation": "The hospital is on the left.", "vocabList": [{"word":"左边","pinyin":"zuǒbiān","translation":"left side","hskLevel":1},{"word":"医院","pinyin":"yīyuàn","translation":"hospital","hskLevel":2}] },
        { "id": "daily_30", "title": "06. 右边有超市 | Supermarket on the right", "isFree": false, "sentence": "右边有超市。", "pinyin": "Yòubiān yǒu chāoshì.", "translation": "There is a supermarket on the right.", "vocabList": [{"word":"右边","pinyin":"yòubiān","translation":"right side","hskLevel":1},{"word":"超市","pinyin":"chāoshì","translation":"supermarket","hskLevel":2}] },
        { "id": "daily_31", "title": "07. 车费多少 | How much is the fare", "isFree": false, "sentence": "车费多少？", "pinyin": "Chēfèi duōshǎo?", "translation": "How much is the fare?", "vocabList": [{"word":"车费","pinyin":"chēfèi","translation":"taxi fare","hskLevel":2},{"word":"多少","pinyin":"duōshǎo","translation":"how much","hskLevel":1}] },
        { "id": "daily_32", "title": "08. 到了！ | We’ve arrived", "isFree": false, "sentence": "到了！", "pinyin": "Dào le!", "translation": "We’ve arrived!", "vocabList": [{"word":"到了","pinyin":"dào le","translation":"arrived","hskLevel":2},{"word":"到","pinyin":"dào","translation":"to arrive","hskLevel":1}] },
        { "id": "daily_33", "title": "09. 你知道吗 | Do you know", "isFree": false, "sentence": "你知道吗？", "pinyin": "Nǐ zhīdào ma?", "translation": "Do you know?", "vocabList": [{"word":"知道","pinyin":"zhīdào","translation":"to know","hskLevel":1},{"word":"吗","pinyin":"ma","translation":"question particle","hskLevel":1}] },
        { "id": "daily_34", "title": "10. 请问，地铁站 | Subway station?", "isFree": false, "sentence": "请问，地铁站？", "pinyin": "Qǐngwèn, dìtiě zhàn?", "translation": "Excuse me, the subway station?", "vocabList": [{"word":"请问","pinyin":"qǐngwèn","translation":"excuse me","hskLevel":2},{"word":"地铁站","pinyin":"dìtiě zhàn","translation":"subway station","hskLevel":2}] },
        { "id": "daily_35", "title": "11. 我在这儿 | I am here", "isFree": false, "sentence": "我在这儿。", "pinyin": "Wǒ zài zhèr.", "translation": "I’m here.", "vocabList": [{"word":"这儿","pinyin":"zhèr","translation":"here","hskLevel":1},{"word":"在","pinyin":"zài","translation":"at; in","hskLevel":1}] },
        { "id": "daily_36", "title": "12. 谢谢！ | Thanks!", "isFree": false, "sentence": "谢谢！", "pinyin": "Xièxie!", "translation": "Thanks!", "vocabList": [{"word":"谢谢","pinyin":"xièxie","translation":"thank you","hskLevel":1}] }
      ]
    },
    {
      "columnId": "daily_shopping",
      "title": "超市与商场购物 · Supermarket & Shopping",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "购",
      "coverClass": "c6",
      "intro": "For everyday shopping moments: price, choice, payment, and checkout.",
      "introZh": "买东西时最常用的句子，适合真实生活里直接开口。",
      "cards": [
        { "id": "daily_37", "title": "01. 我想买苹果 | I want apples", "isFree": true, "sentence": "我想买苹果。", "pinyin": "Wǒ xiǎng mǎi píngguǒ.", "translation": "I want to buy apples.", "vocabList": [{"word":"苹果","pinyin":"píngguǒ","translation":"apple","hskLevel":1},{"word":"买","pinyin":"mǎi","translation":"to buy","hskLevel":1}] },
        { "id": "daily_38", "title": "02. 这个多少钱 | How much is this", "isFree": true, "sentence": "这个多少钱？", "pinyin": "Zhège duōshǎo qián?", "translation": "How much is this?", "vocabList": [{"word":"多少钱","pinyin":"duōshǎo qián","translation":"how much","hskLevel":2},{"word":"这个","pinyin":"zhège","translation":"this one","hskLevel":1}] },
        { "id": "daily_39", "title": "03. 我要两斤 | Two jin, please", "isFree": true, "sentence": "我要两斤。", "pinyin": "Wǒ yào liǎng jīn.", "translation": "I want two jin.", "vocabList": [{"word":"两斤","pinyin":"liǎng jīn","translation":"two jin","hskLevel":2},{"word":"斤","pinyin":"jīn","translation":"jin (weight)","hskLevel":2}] },
        { "id": "daily_40", "title": "04. 我还要买 | I need one more", "isFree": true, "sentence": "我还要买。", "pinyin": "Wǒ hái yào mǎi.", "translation": "I still need to buy a few things.", "vocabList": [{"word":"还要","pinyin":"hái yào","translation":"still need / want more","hskLevel":1},{"word":"买","pinyin":"mǎi","translation":"to buy","hskLevel":1}] },
        { "id": "daily_41", "title": "05. 有优惠吗 | Any discounts", "isFree": false, "sentence": "有优惠吗？", "pinyin": "Yǒu yōuhuì ma?", "translation": "Any discounts?", "vocabList": [{"word":"优惠","pinyin":"yōuhuì","translation":"discount","hskLevel":2},{"word":"有","pinyin":"yǒu","translation":"to have","hskLevel":1}] },
        { "id": "daily_42", "title": "06. 这个很好看 | This looks good", "isFree": false, "sentence": "这个很好看。", "pinyin": "Zhège hěn hǎokàn.", "translation": "This looks very good.", "vocabList": [{"word":"好看","pinyin":"hǎokàn","translation":"good-looking","hskLevel":1},{"word":"很好看","pinyin":"hěn hǎokàn","translation":"very good-looking","hskLevel":1}] },
        { "id": "daily_43", "title": "07. 我喜欢这个 | I like this", "isFree": false, "sentence": "我喜欢这个。", "pinyin": "Wǒ xǐhuan zhège.", "translation": "I like this one.", "vocabList": [{"word":"喜欢","pinyin":"xǐhuan","translation":"to like","hskLevel":1},{"word":"这个","pinyin":"zhège","translation":"this one","hskLevel":1}] },
        { "id": "daily_44", "title": "08. 请装袋 | Please bag it", "isFree": false, "sentence": "请装袋。", "pinyin": "Qǐng zhuāng dài.", "translation": "Please bag it.", "vocabList": [{"word":"装袋","pinyin":"zhuāng dài","translation":"bag it","hskLevel":2},{"word":"袋","pinyin":"dài","translation":"bag","hskLevel":1}] },
        { "id": "daily_45", "title": "09. 我刷卡 | I pay by card", "isFree": false, "sentence": "我刷卡。", "pinyin": "Wǒ shuākǎ.", "translation": "I’ll pay by card.", "vocabList": [{"word":"刷卡","pinyin":"shuākǎ","translation":"swipe card; pay by card","hskLevel":2},{"word":"卡","pinyin":"kǎ","translation":"card","hskLevel":1}] },
        { "id": "daily_46", "title": "10. 这里怎么走 | Where is it", "isFree": false, "sentence": "这里怎么走？", "pinyin": "Zhèlǐ zěnme zǒu?", "translation": "How do I get there?", "vocabList": [{"word":"怎么走","pinyin":"zěnme zǒu","translation":"how to get there","hskLevel":2},{"word":"这里","pinyin":"zhèlǐ","translation":"here","hskLevel":1}] },
        { "id": "daily_47", "title": "11. 我还没买完 | I’m not done shopping", "isFree": false, "sentence": "我还没买完。", "pinyin": "Wǒ hái méi mǎi wán.", "translation": "I haven’t finished shopping yet.", "vocabList": [{"word":"还没","pinyin":"hái méi","translation":"not yet","hskLevel":1},{"word":"买完","pinyin":"mǎi wán","translation":"finish buying","hskLevel":2}] },
        { "id": "daily_48", "title": "12. 谢谢，再见 | Thanks, bye", "isFree": false, "sentence": "谢谢，再见。", "pinyin": "Xièxie, zàijiàn.", "translation": "Thanks, bye.", "vocabList": [{"word":"再见","pinyin":"zàijiàn","translation":"goodbye","hskLevel":1},{"word":"谢谢","pinyin":"xièxie","translation":"thank you","hskLevel":1}] }
      ]
    },
    {
      "columnId": "daily_home",
      "title": "居家生活与作息 · Home Life & Daily Routine",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "家",
      "coverClass": "c7",
      "intro": "Morning routines, home life, and small daily habits for a realistic everyday flow.",
      "introZh": "从起床到睡觉的日常口语，让生活场景更真实。",
      "cards": [
        { "id": "daily_49", "title": "01. 我起床了 | I got up", "isFree": true, "sentence": "我起床了。", "pinyin": "Wǒ qǐchuáng le.", "translation": "I got up.", "vocabList": [{"word":"起床","pinyin":"qǐchuáng","translation":"get up","hskLevel":1},{"word":"了","pinyin":"le","translation":"past/result particle","hskLevel":1}] },
        { "id": "daily_50", "title": "02. 我刷牙 | I brush my teeth", "isFree": true, "sentence": "我刷牙。", "pinyin": "Wǒ shuā yá.", "translation": "I brush my teeth.", "vocabList": [{"word":"刷牙","pinyin":"shuā yá","translation":"brush teeth","hskLevel":1},{"word":"牙","pinyin":"yá","translation":"tooth","hskLevel":1}] },
        { "id": "daily_51", "title": "03. 我吃早饭 | I eat breakfast", "isFree": true, "sentence": "我吃早饭。", "pinyin": "Wǒ chī zǎofàn.", "translation": "I eat breakfast.", "vocabList": [{"word":"早饭","pinyin":"zǎofàn","translation":"breakfast","hskLevel":1},{"word":"吃","pinyin":"chī","translation":"to eat","hskLevel":1}] },
        { "id": "daily_52", "title": "04. 我去上课 | I go to class", "isFree": true, "sentence": "我去上课。", "pinyin": "Wǒ qù shàngkè.", "translation": "I go to class.", "vocabList": [{"word":"上课","pinyin":"shàngkè","translation":"go to class","hskLevel":1},{"word":"课","pinyin":"kè","translation":"class; lesson","hskLevel":1}] },
        { "id": "daily_53", "title": "05. 我回家了 | I am home", "isFree": false, "sentence": "我回家了。", "pinyin": "Wǒ huí jiā le.", "translation": "I’m home now.", "vocabList": [{"word":"回家","pinyin":"huí jiā","translation":"go home","hskLevel":1},{"word":"了","pinyin":"le","translation":"past/result particle","hskLevel":1}] },
        { "id": "daily_54", "title": "06. 我想休息 | I want to rest", "isFree": false, "sentence": "我想休息。", "pinyin": "Wǒ xiǎng xiūxi.", "translation": "I want to rest.", "vocabList": [{"word":"休息","pinyin":"xiūxi","translation":"rest","hskLevel":2},{"word":"想","pinyin":"xiǎng","translation":"want","hskLevel":1}] },
        { "id": "daily_55", "title": "07. 我晚上睡觉 | I sleep at night", "isFree": false, "sentence": "我晚上睡觉。", "pinyin": "Wǒ wǎnshang shuìjiào.", "translation": "I sleep at night.", "vocabList": [{"word":"晚上","pinyin":"wǎnshang","translation":"evening; at night","hskLevel":1},{"word":"睡觉","pinyin":"shuìjiào","translation":"sleep","hskLevel":1}] },
        { "id": "daily_56", "title": "08. 房间很干净 | The room is clean", "isFree": false, "sentence": "房间很干净。", "pinyin": "Fángjiān hěn gānjìng.", "translation": "The room is very clean.", "vocabList": [{"word":"房间","pinyin":"fángjiān","translation":"room","hskLevel":1},{"word":"干净","pinyin":"gānjìng","translation":"clean","hskLevel":2}] },
        { "id": "daily_57", "title": "09. 我洗澡了 | I took a shower", "isFree": false, "sentence": "我洗澡了。", "pinyin": "Wǒ xǐzǎo le.", "translation": "I took a shower.", "vocabList": [{"word":"洗澡","pinyin":"xǐzǎo","translation":"take a shower","hskLevel":1},{"word":"了","pinyin":"le","translation":"past/result particle","hskLevel":1}] },
        { "id": "daily_58", "title": "10. 我在看电视 | I am watching TV", "isFree": false, "sentence": "我在看电视。", "pinyin": "Wǒ zài kàn diànshì.", "translation": "I’m watching TV.", "vocabList": [{"word":"看电视","pinyin":"kàn diànshì","translation":"watch TV","hskLevel":1},{"word":"在","pinyin":"zài","translation":"be doing","hskLevel":1}] },
        { "id": "daily_59", "title": "11. 我今天很累 | I am very tired", "isFree": false, "sentence": "我今天很累。", "pinyin": "Wǒ jīntiān hěn lèi.", "translation": "I’m very tired today.", "vocabList": [{"word":"累","pinyin":"lèi","translation":"tired","hskLevel":1},{"word":"今天","pinyin":"jīntiān","translation":"today","hskLevel":1}] },
        { "id": "daily_60", "title": "12. 我想睡觉 | I want to sleep", "isFree": false, "sentence": "我想睡觉。", "pinyin": "Wǒ xiǎng shuìjiào.", "translation": "I want to sleep.", "vocabList": [{"word":"睡觉","pinyin":"shuìjiào","translation":"sleep","hskLevel":1},{"word":"想","pinyin":"xiǎng","translation":"want","hskLevel":1}] }
      ]
    },
    {
      "columnId": "daily_friends",
      "title": "约朋友与周末计划 · Hanging Out & Weekend Plans",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "友",
      "coverClass": "c8",
      "intro": "Friendly, simple phrases for meeting friends and deciding what to do together.",
      "introZh": "约朋友、看电影、周末安排时最常用的句子。",
      "cards": [
        { "id": "daily_61", "title": "01. 我们去喝咖啡 | Let’s have coffee", "isFree": true, "sentence": "我们去喝咖啡。", "pinyin": "Wǒmen qù hē kāfēi.", "translation": "Let’s go get coffee.", "vocabList": [{"word":"喝咖啡","pinyin":"hē kāfēi","translation":"drink coffee","hskLevel":1},{"word":"我们","pinyin":"wǒmen","translation":"we","hskLevel":1}] },
        { "id": "daily_62", "title": "02. 周末你有空吗 | Are you free this weekend", "isFree": true, "sentence": "周末你有空吗？", "pinyin": "Zhōumò nǐ yǒu kòng ma?", "translation": "Are you free this weekend?", "vocabList": [{"word":"周末","pinyin":"zhōumò","translation":"weekend","hskLevel":2},{"word":"有空","pinyin":"yǒu kòng","translation":"be free","hskLevel":2}] },
        { "id": "daily_63", "title": "03. 我们几点见 | What time shall we meet", "isFree": true, "sentence": "我们几点见？", "pinyin": "Wǒmen jǐdiǎn jiàn?", "translation": "What time shall we meet?", "vocabList": [{"word":"几点","pinyin":"jǐdiǎn","translation":"what time","hskLevel":2},{"word":"见","pinyin":"jiàn","translation":"meet","hskLevel":1}] },
        { "id": "daily_64", "title": "04. 我在门口等你 | I’ll wait at the door", "isFree": true, "sentence": "我在门口等你。", "pinyin": "Wǒ zài ménkǒu děng nǐ.", "translation": "I’ll wait for you at the door.", "vocabList": [{"word":"门口","pinyin":"ménkǒu","translation":"doorway","hskLevel":1},{"word":"等","pinyin":"děng","translation":"wait","hskLevel":1}] },
        { "id": "daily_65", "title": "05. 我们一起去 | Let’s go together", "isFree": false, "sentence": "我们一起去。", "pinyin": "Wǒmen yìqǐ qù.", "translation": "Let’s go together.", "vocabList": [{"word":"一起","pinyin":"yìqǐ","translation":"together","hskLevel":1},{"word":"去","pinyin":"qù","translation":"go","hskLevel":1}] },
        { "id": "daily_66", "title": "06. 你想看电影吗 | Want to watch a movie", "isFree": false, "sentence": "你想看电影吗？", "pinyin": "Nǐ xiǎng kàn diànyǐng ma?", "translation": "Do you want to watch a movie?", "vocabList": [{"word":"电影","pinyin":"diànyǐng","translation":"movie","hskLevel":2},{"word":"想看","pinyin":"xiǎng kàn","translation":"want to watch","hskLevel":1}] },
        { "id": "daily_67", "title": "07. 我们先吃饭 | Eat first", "isFree": false, "sentence": "我们先吃饭。", "pinyin": "Wǒmen xiān chīfàn.", "translation": "Let’s eat first.", "vocabList": [{"word":"先","pinyin":"xiān","translation":"first","hskLevel":1},{"word":"吃饭","pinyin":"chīfàn","translation":"eat","hskLevel":1}] },
        { "id": "daily_68", "title": "08. 晚上见 | See you tonight", "isFree": false, "sentence": "晚上见。", "pinyin": "Wǎnshang jiàn.", "translation": "See you tonight.", "vocabList": [{"word":"晚上","pinyin":"wǎnshang","translation":"evening","hskLevel":1},{"word":"见","pinyin":"jiàn","translation":"see","hskLevel":1}] },
        { "id": "daily_69", "title": "09. 我们去公园 | We are going to the park", "isFree": false, "sentence": "我们去公园。", "pinyin": "Wǒmen qù gōngyuán.", "translation": "We’re going to the park.", "vocabList": [{"word":"公园","pinyin":"gōngyuán","translation":"park","hskLevel":2},{"word":"去","pinyin":"qù","translation":"go","hskLevel":1}] },
        { "id": "daily_70", "title": "10. 这很好玩 | This is fun", "isFree": false, "sentence": "这很好玩。", "pinyin": "Zhè hěn hǎowán.", "translation": "This is fun.", "vocabList": [{"word":"好玩","pinyin":"hǎowán","translation":"fun","hskLevel":1},{"word":"很好玩","pinyin":"hěn hǎowán","translation":"very fun","hskLevel":1}] },
        { "id": "daily_71", "title": "11. 我们复习一下 | Let’s review", "isFree": false, "sentence": "我们复习一下。", "pinyin": "Wǒmen fùxí yíxià.", "translation": "Let’s review for a bit.", "vocabList": [{"word":"复习","pinyin":"fùxí","translation":"review","hskLevel":2},{"word":"一下","pinyin":"yíxià","translation":"a little","hskLevel":1}] },
        { "id": "daily_72", "title": "12. 周末计划好了吗 | Is the weekend plan set", "isFree": false, "sentence": "周末计划好了吗？", "pinyin": "Zhōumò jìhuà hǎo le ma?", "translation": "Is the weekend plan set?", "vocabList": [{"word":"计划","pinyin":"jìhuà","translation":"plan","hskLevel":2},{"word":"周末","pinyin":"zhōumò","translation":"weekend","hskLevel":2}] }
      ]
    },
    {
      "columnId": "daily_feelings",
      "title": "感觉与身体状况 · Expressing Feelings & Health",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "感",
      "coverClass": "c9",
      "intro": "Daily life phrases for tiredness, happiness, stress, and simple health check-ins.",
      "introZh": "表达情绪和身体状态的最实用短句，日常会话必备。",
      "cards": [
        { "id": "daily_73", "title": "01. 我很好 | I feel good", "isFree": true, "sentence": "我很好。", "pinyin": "Wǒ hěn hǎo.", "translation": "I’m doing well.", "vocabList": [{"word":"很好","pinyin":"hěn hǎo","translation":"very good","hskLevel":1},{"word":"我","pinyin":"wǒ","translation":"I","hskLevel":1}] },
        { "id": "daily_74", "title": "02. 我有点累 | I am a little tired", "isFree": true, "sentence": "我有点累。", "pinyin": "Wǒ yǒudiǎn lèi.", "translation": "I’m a little tired.", "vocabList": [{"word":"有点","pinyin":"yǒudiǎn","translation":"a little","hskLevel":1},{"word":"累","pinyin":"lèi","translation":"tired","hskLevel":1}] },
        { "id": "daily_75", "title": "03. 我不舒服 | I feel unwell", "isFree": true, "sentence": "我不舒服。", "pinyin": "Wǒ bù shūfu.", "translation": "I don’t feel well.", "vocabList": [{"word":"舒服","pinyin":"shūfu","translation":"comfortable; well","hskLevel":1},{"word":"不","pinyin":"bù","translation":"not","hskLevel":1}] },
        { "id": "daily_76", "title": "04. 我头疼 | I have a headache", "isFree": true, "sentence": "我头疼。", "pinyin": "Wǒ tóuténg.", "translation": "I have a headache.", "vocabList": [{"word":"头疼","pinyin":"tóuténg","translation":"headache","hskLevel":2},{"word":"头","pinyin":"tóu","translation":"head","hskLevel":1}] },
        { "id": "daily_77", "title": "05. 我想喝水 | I want water", "isFree": false, "sentence": "我想喝水。", "pinyin": "Wǒ xiǎng hē shuǐ.", "translation": "I want to drink water.", "vocabList": [{"word":"喝水","pinyin":"hē shuǐ","translation":"drink water","hskLevel":1},{"word":"想","pinyin":"xiǎng","translation":"want","hskLevel":1}] },
        { "id": "daily_78", "title": "06. 我有点怕 | I am a little nervous", "isFree": false, "sentence": "我有点怕。", "pinyin": "Wǒ yǒudiǎn pà.", "translation": "I’m a little nervous.", "vocabList": [{"word":"怕","pinyin":"pà","translation":"afraid","hskLevel":1},{"word":"有点","pinyin":"yǒudiǎn","translation":"a little","hskLevel":1}] },
        { "id": "daily_79", "title": "07. 我很开心 | I’m very happy", "isFree": false, "sentence": "我很开心。", "pinyin": "Wǒ hěn kāixīn.", "translation": "I’m very happy.", "vocabList": [{"word":"开心","pinyin":"kāixīn","translation":"happy","hskLevel":1},{"word":"很","pinyin":"hěn","translation":"very","hskLevel":1}] },
        { "id": "daily_80", "title": "08. 我生气了 | I’m angry", "isFree": false, "sentence": "我生气了。", "pinyin": "Wǒ shēngqì le.", "translation": "I’m angry now.", "vocabList": [{"word":"生气","pinyin":"shēngqì","translation":"angry","hskLevel":1},{"word":"了","pinyin":"le","translation":"new state","hskLevel":1}] },
        { "id": "daily_81", "title": "09. 我想休息 | I want a rest", "isFree": false, "sentence": "我想休息。", "pinyin": "Wǒ xiǎng xiūxi.", "translation": "I want to rest.", "vocabList": [{"word":"休息","pinyin":"xiūxi","translation":"rest","hskLevel":2},{"word":"想","pinyin":"xiǎng","translation":"want","hskLevel":1}] },
        { "id": "daily_82", "title": "10. 我想睡觉 | I want to sleep", "isFree": false, "sentence": "我想睡觉。", "pinyin": "Wǒ xiǎng shuìjiào.", "translation": "I want to sleep.", "vocabList": [{"word":"睡觉","pinyin":"shuìjiào","translation":"sleep","hskLevel":1},{"word":"想","pinyin":"xiǎng","translation":"want","hskLevel":1}] },
        { "id": "daily_83", "title": "11. 我今天有点发烧 | I have a fever", "isFree": false, "sentence": "我今天有点发烧。", "pinyin": "Wǒ jīntiān yǒudiǎn fāshāo.", "translation": "I have a little fever today.", "vocabList": [{"word":"发烧","pinyin":"fāshāo","translation":"fever","hskLevel":2},{"word":"有点","pinyin":"yǒudiǎn","translation":"a little","hskLevel":1}] },
        { "id": "daily_84", "title": "12. 你最近身体好吗 | How are you lately", "isFree": false, "sentence": "你最近身体好吗？", "pinyin": "Nǐ zuìjìn shēntǐ hǎo ma?", "translation": "How have you been lately?", "vocabList": [{"word":"最近","pinyin":"zuìjìn","translation":"recently","hskLevel":2},{"word":"身体","pinyin":"shēntǐ","translation":"body; health","hskLevel":2}] }
      ]
    },
    {
      "columnId": "daily_work",
      "title": "工作与学习日常 · Work & Study Routine",
      "hskRange": "HSK 1-2",
      "totalCards": 12,
      "freeCards": 4,
      "category": "daily",
      "cover": "工",
      "coverClass": "c10",
      "intro": "Real-world work and study routines designed for beginners to talk naturally.",
      "introZh": "上班、上学、写作业时最常见的实用句子。",
      "cards": [
        { "id": "daily_85", "title": "01. 我上班去了 | I’ve gone to work", "isFree": true, "sentence": "我上班去了。", "pinyin": "Wǒ shàngbān qù le.", "translation": "I’ve gone to work.", "vocabList": [{"word":"上班","pinyin":"shàngbān","translation":"go to work","hskLevel":1},{"word":"去了","pinyin":"qù le","translation":"went","hskLevel":2}] },
        { "id": "daily_86", "title": "02. 我早上上班 | I work in the morning", "isFree": true, "sentence": "我早上上班。", "pinyin": "Wǒ zǎoshang shàngbān.", "translation": "I work in the morning.", "vocabList": [{"word":"早上","pinyin":"zǎoshang","translation":"morning","hskLevel":1},{"word":"上班","pinyin":"shàngbān","translation":"go to work","hskLevel":1}] },
        { "id": "daily_87", "title": "03. 我今天有事 | I have something to do", "isFree": true, "sentence": "我今天有事。", "pinyin": "Wǒ jīntiān yǒu shì.", "translation": "I have something to do today.", "vocabList": [{"word":"有事","pinyin":"yǒu shì","translation":"have something to do","hskLevel":1},{"word":"今天","pinyin":"jīntiān","translation":"today","hskLevel":1}] },
        { "id": "daily_88", "title": "04. 我现在忙 | I’m busy now", "isFree": true, "sentence": "我现在忙。", "pinyin": "Wǒ xiànzài máng.", "translation": "I’m busy right now.", "vocabList": [{"word":"现在","pinyin":"xiànzài","translation":"now","hskLevel":1},{"word":"忙","pinyin":"máng","translation":"busy","hskLevel":1}] },
        { "id": "daily_89", "title": "05. 我想休息一下 | I need a break", "isFree": false, "sentence": "我想休息一下。", "pinyin": "Wǒ xiǎng xiūxi yíxià.", "translation": "I want to take a break.", "vocabList": [{"word":"休息","pinyin":"xiūxi","translation":"rest","hskLevel":2},{"word":"一下","pinyin":"yíxià","translation":"a little","hskLevel":1}] },
        { "id": "daily_90", "title": "06. 我在写作业 | I am doing homework", "isFree": false, "sentence": "我在写作业。", "pinyin": "Wǒ zài xiě zuòyè.", "translation": "I’m doing my homework.", "vocabList": [{"word":"写作业","pinyin":"xiě zuòyè","translation":"do homework","hskLevel":2},{"word":"在","pinyin":"zài","translation":"be doing","hskLevel":1}] },
        { "id": "daily_91", "title": "07. 我先做作业 | I’ll do homework first", "isFree": false, "sentence": "我先做作业。", "pinyin": "Wǒ xiān zuò zuòyè.", "translation": "I’ll do homework first.", "vocabList": [{"word":"先","pinyin":"xiān","translation":"first","hskLevel":1},{"word":"作业","pinyin":"zuòyè","translation":"homework","hskLevel":2}] },
        { "id": "daily_92", "title": "08. 我今天很忙 | I am very busy today", "isFree": false, "sentence": "我今天很忙。", "pinyin": "Wǒ jīntiān hěn máng.", "translation": "I’m very busy today.", "vocabList": [{"word":"忙","pinyin":"máng","translation":"busy","hskLevel":1},{"word":"很忙","pinyin":"hěn máng","translation":"very busy","hskLevel":1}] },
        { "id": "daily_93", "title": "09. 我下班回家 | I go home after work", "isFree": false, "sentence": "我下班回家。", "pinyin": "Wǒ xiàbān huí jiā.", "translation": "I go home after work.", "vocabList": [{"word":"下班","pinyin":"xiàbān","translation":"get off work","hskLevel":2},{"word":"回家","pinyin":"huí jiā","translation":"go home","hskLevel":1}] },
        { "id": "daily_94", "title": "10. 我想学中文 | I want to learn Chinese", "isFree": false, "sentence": "我想学中文。", "pinyin": "Wǒ xiǎng xué zhōngwén.", "translation": "I want to learn Chinese.", "vocabList": [{"word":"学中文","pinyin":"xué zhōngwén","translation":"learn Chinese","hskLevel":1},{"word":"想学","pinyin":"xiǎng xué","translation":"want to learn","hskLevel":1}] },
        { "id": "daily_95", "title": "11. 我每次都认真 | I am serious every time", "isFree": false, "sentence": "我每次都很认真。", "pinyin": "Wǒ měicì dōu hěn rènzhēn.", "translation": "I’m serious every time.", "vocabList": [{"word":"认真","pinyin":"rènzhēn","translation":"serious / careful","hskLevel":2},{"word":"每次","pinyin":"měicì","translation":"every time","hskLevel":2}] },
        { "id": "daily_96", "title": "12. 我今天工作很累 | I’m tired from work", "isFree": false, "sentence": "我今天工作很累。", "pinyin": "Wǒ jīntiān gōngzuò hěn lèi.", "translation": "I’m very tired from work today.", "vocabList": [{"word":"工作","pinyin":"gōngzuò","translation":"work","hskLevel":2},{"word":"累","pinyin":"lèi","translation":"tired","hskLevel":1}] }
      ]
    }
  ];

  const merged = {
    ...(base && typeof base === 'object' ? base : {}),
    collection: (base && base.collection) ? base.collection + ' + Daily Life HSK 1-2' : 'HanLingo Daily Life HSK 1-2',
    stories: [
      ...((base && Array.isArray(base.stories)) ? base.stories : []),
      ...dailyStories
    ]
  };

  window.STORIES_DATA = merged;
})();
