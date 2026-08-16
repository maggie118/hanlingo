// HanLingo - 1. Survival Kit Offline Database (75 Phrases)
const survivalDataset = {
    transport: {
        title: "🚖 Transport & Directions",
        phrases: [
            { eng: "Hello, go to this place.", chn: "你好，去这里。", pin: "Nǐ hǎo, qù zhè lǐ." },
            { eng: "Driver, please open the trunk.", chn: "师傅，开一下后备箱。", pin: "Shī fu, kāi yí xià hòu bèi xiāng." },
            { eng: "I will get off right here.", chn: "我就在这里下车。", pin: "Wǒ jiù zài zhè lǐ xià chē." },
            { eng: "Please pull over here.", chn: "请在路边停一下。", pin: "Qǐng zài lù biān tíng yí xià." },
            { eng: "Where is the restroom?", chn: "洗手间在哪里？", pin: "Xǐ shǒu jiān zài nǎ lǐ?" },
            // ---- Paywall Line (First 5 Free) ----
            { eng: "Where is the metro station?", chn: "地铁站在哪里？", pin: "Dì tiě zhàn zài nǎ lǐ?" },
            { eng: "How do I get to [Place]?", chn: "[地点]怎么走？", pin: "[Place] zěn me zǒu?" },
            { eng: "I want to go to this hotel.", chn: "我想去这个酒店。", pin: "Wǒ xiǎng qù zhè gè jiǔ diàn." },
            { eng: "Can I walk there?", chn: "走着能到吗？", pin: "Zǒu zhe néng dào ma?" },
            { eng: "Turn left. / Turn right.", chn: "往左拐。/ 往右拐。", pin: "Wǎng zuǒ guǎi. / Wǎng yòu guǎi." },
            { eng: "Go straight ahead.", chn: "一直走。", pin: "Yì zhí zǒu." },
            { eng: "Can I catch a taxi here?", chn: "这里可以打车吗？", pin: "Zhè lǐ kě yǐ dǎ chē ma?" },
            { eng: "How long do we need to wait?", chn: "我们要等多久？", pin: "Wǒ men yào děng duō jiǔ?" },
            { eng: "I have luggage.", chn: "我有行李。", pin: "Wǒ yǒu xíng li." },
            { eng: "Thank you, driver.", chn: "谢谢师傅。", pin: "Xiè xie shī fu." }
        ]
    },
    dining: {
        title: "🥢 Dining & Ordering",
        phrases: [
            { eng: "Hello, how many people? - Two.", chn: "你好，几位？- 两位。", pin: "Nǐ hǎo, jǐ wèi? - Liǎng wèi." },
            { eng: "Menu, please.", chn: "请给我菜单。", pin: "Qǐng gěi wǒ cài dān." },
            { eng: "This one, and this one.", chn: "这个，还有这个。", pin: "Zhè gè, hái yǒu zhè gè." },
            { eng: "Waiter, ready to order.", chn: "服务员，点菜。", pin: "Fú wù yuán, diǎn cài." },
            { eng: "English menu, please.", chn: "有英文菜单吗？", pin: "Yǒu Yīng wén cài dān ma?" },
            // ---- Paywall Line ----
            { eng: "I'm a vegetarian.", chn: "我是素食主义者。", pin: "Wǒ :shì sù shí zhǔ yì zhě." },
            { eng: "No cilantro, please.", chn: "不要放香菜。", pin: "Bú yào fàng xiāng cài." },
            { eng: "Not spicy, please.", chn: "不要放辣椒 / 不要辣。", pin: "Bú yào fàng là jiāo. / Bú yào là." },
            { eng: "Ice water, please.", chn: "请给我一杯冰水。", pin: "Qǐng gěi wǒ yì bēi bīng shuǐ." },
            { eng: "Chopsticks / A fork, please.", chn: "筷子 / 叉子。", pin: "Kuài zi / Chā zi." },
            { eng: "Any recommendations?", chn: "有推荐的菜吗？", pin: "Yǒu tuī jiàn de cài ma?" },
            { eng: "Can I have this to go?", chn: "可以打包吗？", pin: "Kě yǐ dǎ bāo ma?" },
            { eng: "Check, please!", chn: "服务员，买单！", pin: "Fú wù yuán, mǎi dān!" },
            { eng: "Can I pay by card?", chn: "可以用刷卡吗？", pin: "Kě yǐ yòng shuā kǎ ma?" },
            { eng: "Thank you, delicious.", chn: "谢谢，很好吃。", pin: "Xiè xie, hěn hǎo chī." }
        ]
    },
    shopping: {
        title: "🛍️ Shopping & Mobile Pay",
        phrases: [
            { eng: "How much is this?", chn: "这个多少钱？", pin: "Zhè gè duō shǎo qián?" },
            { eng: "I'm just looking, thanks.", chn: "我看一下，谢谢。", pin: "Wǒ kàn yí xià, xiè xie." },
            { eng: "Too expensive!", chn: "太贵了！", pin: "Tài guì le!" },
            { eng: "Cheaper, please?", chn: "便宜点吧？", pin: "Pián yi diǎn ba?" },
            { eng: "WeChat / Alipay?", chn: "可以扫微信 / 支付宝吗？", pin: "Kě yǐ sǎo Wēi xìn / Zhī fù bǎo ma?" },
            // ---- Paywall Line ----
            { eng: "Do I scan you, or you scan me?", chn: "我扫你，还是你扫我？", pin: "Wǒ sǎo nǐ, hái shi nǐ sǎo wǒ?" },
            { eng: "Can I use cash?", chn: "可以用现金吗？", pin: "Kě yǐ yòng xiàn jīn ma?" },
            { eng: "Try this on.", chn: "我想试穿一下。", pin: "Wǒ xiǎng shì chuān yí xià." },
            { eng: "Larger / smaller size?", chn: "有大号 / 小号吗？", pin: "Yǒu dà hào / xiǎo hào ma?" },
            { eng: "Plastic bag, please.", chn: "要一个塑料袋。", pin: "Yào yí gè sù liào dài." },
            { eng: "Other colors?", chn: "有别的颜色吗？", pin: "Yǒu bié de yán sè ma?" },
            { eng: "Buy 2 get 1 free?", chn: "买二送一吗？", pin: "Mǎi èr sòng yī ma?" },
            { eng: "No, thank you.", chn: "不要了，谢谢。", pin: "Bú yào le, xiè xie." },
            { eng: "Receipt, please.", chn: "请给我发票 / 收据。", pin: "Qǐng gěi wǒ fā piào / shōu jù." },
            { eng: "I want this.", chn: "我要这个。", pin: "Wǒ yào zhè gè." }
        ]
    },
    hotel: {
        title: "🛎️ Hotel & Accommodation",
        phrases: [
            { eng: "I have a reservation.", chn: "你好，我预订了房间。", pin: "Nǐ hǎo, wǒ yù dìng le fáng jiān." },
            { eng: "Here is my passport.", chn: "这是我的护照。", pin: "Zhè shì wǒ de hù zhào." },
            { eng: "Wi-Fi password?", chn: "Wi-Fi 密码是多少？", pin: "Wi-Fi mì mǎ` shì duō shǎo?" },
            { eng: "My room number?", chn: "我的房间号是多少？", pin: "Wǒ de fáng jiān hào shì duō shǎo?" },
            { eng: "Check-out time?", chn: "几点退房？", pin: "Jǐ diǎn tuì fáng?" },
            // ---- Paywall Line ----
            { eng: "Breakfast included?", chn: "包含早餐吗？", pin: "Bān hán zǎo cān ma?" },
            { eng: "No hot water.", chn: "房间里没有热水。", pin: "Fáng jiān lǐ méi yǒu rè shuǐ." },
            { eng: "AC is broken.", chn: "空调坏了。", pin: "Kōng tiáo huài le." },
            { eng: "Change bedsheets.", chn: "请换一下床单。", pin: "Qǐng huàn yí xià chuáng dān." },
            { eng: "Bottled water, please.", chn: "需要两瓶水。", pin: "Xū yào liǎng píng shuǐ." },
            { eng: "Store my luggage?", chn: "可以帮我寄存行李吗？", pin: "Kě yǐ bāng wǒ jì cún xíng li ma?" },
            { eng: "Lost room card.", chn: "房卡找不到了。", pin: "Fáng kǎ zhǎo bú dào le." },
            { eng: "Housekeeping, please.", chn: "请叫一下清洁工。", pin: "Qǐng jiào yí xià qīng jié gōng." },
            { eng: "Call a taxi for me?", chn: "可以帮我叫辆出租车吗？", pin: "Kě yǐ bāng wǒ jiào liàng chū zū chē ma?" },
            { eng: "Check out.", chn: "我要退房。", pin: "Wǒ yào tuì fáng." }
        ]
    },
    emergency: {
        title: "🚨 Emergencies & Help",
        phrases: [
            { eng: "Excuse me...", chn: "不好意思，请问……", pin: "Bù hǎo yì si, qǐng wèn..." },
            { eng: "I don't understand Chinese.", chn: "我不懂中文。", pin: "Wǒ bù dǒng Zhōng wén." },
            { eng: "Do you speak English?", chn: "你会说英语吗？", pin: "Nǐ huì shuō Yīng wén ma?" },
            { eng: "Say it again, please.", chn: "请再说一遍。", pin: "Qǐng zài shuō yí biàn." },
            { eng: "My Chinese is bad.", chn: "哪里哪里，我的中文不好。", pin: "Nǎ lǐ nǎ lǐ, wǒ de Zhōng wén bù hǎo." },
            // ---- Paywall Line ----
            { eng: "No problem. / It's OK.", chn: "没关系 / 没事。", pin: "Méi guān xi. / Méi :shì." },
            { eng: "Please help me.", chn: "请帮帮我。", pin: "Qǐng bāng bang wǒ." },
            { eng: "I am lost.", chn: "我迷路了。", pin: "Wǒ mí lù le." },
            { eng: "Lost my wallet / phone.", chn: "我钱包/手机丢了。", pin: "Wǒ qián bāo / shǒu jī diū le." },
            { eng: "I don't feel well.", chn: "我不舒服。", pin: "Wǒ bù shū fu." },
            { eng: "Nearest hospital?", chn: "最近的医院在哪里？", pin: "Zuì jìn de yī yuàn zài nǎ lǐ?" },
            { eng: "Pharmacy nearby?", chn: "这里有药店吗？", pin: "Zhè lǐ yǒu yào diàn ma?" },
            { eng: "Call ambulance / police.", chn: "请帮我叫救护车 / 报警。", pin: "Qǐng bāng wǒ jiào jiù hù chē / bào jǐng." },
            { eng: "Thank you so much!", chn: "太谢谢你了！", pin: "Tài xiè xie nǐ le!" },
            { eng: "Goodbye!", chn: "再见！", pin: "Zài jiàn!" }
        ]
    }
};
