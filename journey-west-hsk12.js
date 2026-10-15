(function () {
  const base = window.STORIES_DATA || { stories: [] };

  const themes = [
    {
      title: '美猴王出世与变身 · The Monkey King and His Transformations',
      cover: '猴',
      coverClass: 'c3',
      cards: [
        ['大山上有一块很大的石头。', 'Dà shān shang yǒu yí kuài hěn dà de shí tou.', 'There is a huge stone on the mountain.'],
        ['太阳照在石头上，石头开了。', 'Tài yáng zhào zài shí tou shang, shí tou kāi le.', 'The sun shone on the stone, and it split open.'],
        ['从石头里跳出来一只小猴子！', 'Cóng shí tou li tiào chū lái yì zhī xiǎo hóu zi!', 'A little monkey jumped out of the stone!'],
        ['小猴子很聪明，也很勇敢。', 'Xiǎo hóu zi hěn cōng ming, yě hěn yǒng gǎn.', 'The little monkey was smart and brave.'],
        ['他找到了一个漂亮的水帘洞。', 'Tā zhǎo dào le yí ge piào liang de Shuǐ Lián Dòng.', 'He found a beautiful Water Curtain Cave.'],
        ['猴子们很高兴，叫他美猴王。', 'Hóu zi men hěn gāo xìng, jiào tā Měi Hóu Wáng.', 'The monkeys were happy and called him the Monkey King.'],
        ['猴王想学神奇的法术。', 'Hóu Wáng xiǎng xué shén qí de fǎ shù.', 'The Monkey King wanted to learn magic.'],
        ['他坐船去了很远的地方。', 'Tā zuò chuán qù le hěn yuǎn de dì fang.', 'He took a boat to a faraway place.'],
        ['老师教了他七十二种变化。', 'Lǎo shī jiāo le tā qī shí èr zhǒng biàn huà.', 'The master taught him seventy-two transformations.'],
        ['他可以变成一只小鸟。', 'Tā kě yǐ biàn chéng yì zhī xiǎo niǎo.', 'He could turn into a little bird.'],
        ['他也可以变成一座小房子。', 'Tā yě kě yǐ biàn chéng yí zuò xiǎo fáng zi.', 'He could also turn into a little house.'],
        ['孙悟空真是太厉害了！', 'Sūn Wù Kōng zhēn shì tài lì hai le!', 'Sun Wukong was amazing!']
      ]
    },
    {
      title: '大闹天宫与仙桃 · Chaos in Heaven and Magic Peaches',
      cover: '桃',
      coverClass: 'c4',
      cards: [
        ['天上有一个很大的花园。', 'Tiān shang yǒu yí ge hěn dà de huā yuán.', 'There was a very big garden in Heaven.'],
        ['花园里有很多仙桃树。', 'Huā yuán li yǒu hěn duō xiān táo shù.', 'There were many magic peach trees in the garden.'],
        ['这些桃子又大又红，非常甜。', 'Zhè xiē táo zi yòu dà yòu hóng, fēi cháng tián.', 'The peaches were big, red, and very sweet.'],
        ['吃一个桃子，可以活很久。', 'Chī yí ge táo zi, kě yǐ huó hěn jiǔ.', 'Eating one peach could help you live for a long time.'],
        ['孙悟空来到了仙桃园。', 'Sūn Wù Kōng lái dào le Xiān Táo Yuán.', 'Sun Wukong arrived at the Magic Peach Garden.'],
        ['他看到大桃子，流口水了。', 'Tā kàn dào dà táo zi, liú kǒu shuǐ le.', 'He saw the big peaches and began to drool.'],
        ['他跳上树，摘了一个大桃子。', 'Tā tiào shàng shù, zhāi le yí ge dà táo zi.', 'He jumped into a tree and picked a big peach.'],
        ['桃子真好吃，他一口就吃完了。', 'Táo zi zhēn hǎo chī, tā yì kǒu jiù chī wán le.', 'The peach was so tasty that he ate it in one bite.'],
        ['仙女们来摘桃子，准备开蟠桃会。', 'Xiān nǚ men lái zhāi táo zi, zhǔn bèi kāi Pán Táo Huì.', 'The fairies came to pick peaches for the Peach Banquet.'],
        ['仙女问：“桃子为什么少了？”', 'Xiān nǚ wèn: “Táo zi wèi shén me shǎo le?”', 'A fairy asked, “Why are some peaches missing?”'],
        ['孙悟空笑了笑，变成了一棵大树。', 'Sūn Wù Kōng xiào le xiào, biàn chéng le yì kē dà shù.', 'Sun Wukong smiled and turned into a big tree.'],
        ['谁也找不到聪明的孙悟空。', 'Shéi yě zhǎo bu dào cōng ming de Sūn Wù Kōng.', 'Nobody could find the clever Sun Wukong.']
      ]
    },
    {
      title: '神奇的法宝 · Magical Treasures',
      cover: '棒',
      coverClass: 'c5',
      cards: [
        ['孙悟空没有一件好武器。', 'Sūn Wù Kōng méi yǒu yí jiàn hǎo wǔ qì.', 'Sun Wukong did not have a good weapon.'],
        ['他去大海里的龙宫找宝贝。', 'Tā qù dà hǎi li de Lóng Gōng zhǎo bǎo bèi.', 'He went to the Dragon Palace under the sea to look for treasure.'],
        ['大海深处有一根大铁柱。', 'Dà hǎi shēn chù yǒu yì gēn dà tiě zhù.', 'Deep in the sea, there was a huge iron pillar.'],
        ['这根铁柱很重，孙悟空也拿不动。', 'Zhè gēn tiě zhù hěn zhòng, Sūn Wù Kōng yě ná bu dòng.', 'The iron pillar was so heavy that even Sun Wukong could not lift it.'],
        ['孙悟空对它说：“小一点！小一点！”', 'Sūn Wù Kōng duì tā shuō: “Xiǎo yì diǎn! Xiǎo yì diǎn!”', 'Sun Wukong said to it, “Get smaller! Get smaller!”'],
        ['铁柱真的变小了，像针一样。', 'Tiě zhù zhēn de biàn xiǎo le, xiàng zhēn yí yàng.', 'The pillar really became as small as a needle.'],
        ['这就是神奇的金箍棒。', 'Zhè jiù shì shén qí de Jīn Gū Bàng.', 'This was the magical Golden Cudgel.'],
        ['它平时可以放在耳朵里。', 'Tā píng shí kě yǐ fàng zài ěr duo li.', 'He could usually keep it inside his ear.'],
        ['打架的时候，它会变长变大。', 'Dǎ jià de shí hou, tā huì biàn cháng biàn dà.', 'When he fought, it grew longer and bigger.'],
        ['孙悟空还穿上了金色的衣服。', 'Sūn Wù Kōng hái chuān shàng le jīn sè de yī fu.', 'Sun Wukong also put on golden clothes.'],
        ['现在的他看起来非常酷！', 'Xiàn zài de tā kàn qǐ lái fēi cháng kù!', 'He looked really cool!'],
        ['没有人是他的对手。', 'Méi yǒu rén shì tā de duì shǒu.', 'Nobody was a match for him.']
      ]
    },
    {
      title: '偷吃人参果 · The Ginseng Fruit',
      cover: '果',
      coverClass: 'c6',
      cards: [
        ['师徒四人来到了一个道观。', 'Shī tú sì rén lái dào le yí ge dào guàn.', 'The four travelers arrived at a Taoist temple.'],
        ['道观里有一棵神奇的果树。', 'Dào guàn li yǒu yì kē shén qí de guǒ shù.', 'There was a magical fruit tree in the temple.'],
        ['树上的果子叫人参果。', 'Shù shàng de guǒ zi jiào Rén Shēn Guǒ.', 'The fruit on the tree was called Ginseng Fruit.'],
        ['果子长得很像可爱的小宝宝。', 'Guǒ zi zhǎng de hěn xiàng kě ài de xiǎo bǎo bao.', 'The fruit looked like a cute little baby.'],
        ['闻一闻，就能多活很多年。', 'Wén yi wén, jiù néng duō huó hěn duō nián.', 'Smell it once, and you could live for many more years.'],
        ['猪八戒看了，非常想吃。', 'Zhū Bā Jiè kàn le, fēi cháng xiǎng chī.', 'Zhu Bajie saw it and really wanted to eat it.'],
        ['孙悟空偷偷去树上摘果子。', 'Sūn Wù Kōng tōu tōu qù shù shàng zhāi guǒ zi.', 'Sun Wukong secretly went to pick fruit from the tree.'],
        ['一个果子掉进土里，不见了。', 'Yí ge guǒ zi diào jìn tǔ li, bú jiàn le.', 'One fruit fell into the soil and disappeared.'],
        ['孙悟空摘了三个果子回来。', 'Sūn Wù Kōng zhāi le sān ge guǒ zi huí lái.', 'Sun Wukong picked three fruits and came back.'],
        ['猪八戒一口就把果子吞了。', 'Zhū Bā Jiè yì kǒu jiù bǎ guǒ zi tūn le.', 'Zhu Bajie swallowed the fruit in one bite.'],
        ['他问：“果子是什么味道？”', 'Tā wèn: “Guǒ zi shì shén me wèi dao?”', 'He asked, “What does the fruit taste like?”'],
        ['大家听了，都笑了起来。', 'Dà jiā tīng le, dōu xiào le qǐ lái.', 'Everyone heard him and burst out laughing.']
      ]
    },
    {
      title: '三打白骨精 · Three Battles with the Bone Demon',
      cover: '妖',
      coverClass: 'c7',
      cards: [
        ['山里住着一个坏妖怪。', 'Shān li zhù zhe yí ge huài yāo guài.', 'A bad monster lived in the mountains.'],
        ['妖怪想吃唐僧的肉。', 'Yāo guài xiǎng chī Táng Sēng de ròu.', 'The monster wanted to eat Tang Seng.'],
        ['她变成了一个好看的姑娘。', 'Tā biàn chéng le yí ge hǎo kàn de gū niang.', 'She turned into a pretty young woman.'],
        ['姑娘手里拿着香香的饭。', 'Gū niang shǒu li ná zhe xiāng xiāng de fàn.', 'The woman was holding some fragrant food.'],
        ['唐僧饿了，准备过去吃饭。', 'Táng Sēng è le, zhǔn bèi guò qù chī fàn.', 'Tang Seng was hungry and got ready to go eat.'],
        ['孙悟空用火眼金睛看了看。', 'Sūn Wù Kōng yòng Huǒ Yǎn Jīn Jīng kàn le kàn.', 'Sun Wukong took a careful look with his magic eyes.'],
        ['他大喊：“她不是人，是妖怪！”', 'Tā dà hǎn: “Tā bú shì rén, shì yāo guài!”', 'He shouted, “She is not a person; she is a monster!”'],
        ['悟空打死了假姑娘。', 'Wù Kōng dǎ sǐ le jiǎ gū niang.', 'Wukong struck down the fake young woman.'],
        ['妖怪又变成老奶奶跑出来。', 'Yāo guài yòu biàn chéng lǎo nǎi nai pǎo chū lái.', 'The monster turned into an old woman and ran out again.'],
        ['悟空又打倒了老奶奶。', 'Wù Kōng yòu dǎ dǎo le lǎo nǎi nai.', 'Wukong defeated the old woman again.'],
        ['第三次，妖怪变成了一个老爷爷。', 'Dì sān cì, yāo guài biàn chéng le yí ge lǎo yé ye.', 'The third time, the monster turned into an old man.'],
        ['孙悟空终于打败了白骨精！', 'Sūn Wù Kōng zhōng yú dǎ bài le Bái Gǔ Jīng!', 'Sun Wukong finally defeated the Bone Demon!']
      ]
    },
    {
      title: '借芭蕉扇灭火 · The Plantain Fan and the Fire',
      cover: '扇',
      coverClass: 'c8',
      cards: [
        ['前面有一座很热的山。', 'Qián miàn yǒu yí zuò hěn rè de shān.', 'There was a very hot mountain up ahead.'],
        ['山上都是大火，过不去。', 'Shān shàng dōu shì dà huǒ, guò bu qù.', 'The mountain was covered in fire, and they could not get past it.'],
        ['只有芭蕉扇可以把火灭掉。', 'Zhǐ yǒu Bā Jiāo Shàn kě yǐ bǎ huǒ miè diào.', 'Only the Plantain Fan could put out the fire.'],
        ['铁扇公主有一把小芭蕉扇。', 'Tiě Shàn Gōng Zhǔ yǒu yì bǎ xiǎo bā jiāo shàn.', 'Princess Iron Fan had a small Plantain Fan.'],
        ['扇子很小，可以放在嘴里。', 'Shàn zi hěn xiǎo, kě yǐ fàng zài zuǐ li.', 'The fan was small enough to keep in her mouth.'],
        ['孙悟空去向她借扇子。', 'Sūn Wù Kōng qù xiàng tā jiè shàn zi.', 'Sun Wukong went to borrow the fan from her.'],
        ['公主生气了，拿起扇子一扇！', 'Gōng zhǔ shēng qì le, ná qǐ shàn zi yì shān!', 'The princess got angry, picked up the fan, and waved it!'],
        ['大风把孙悟空吹到了天边。', 'Dà fēng bǎ Sūn Wù Kōng chuī dào le tiān biān.', 'A strong wind blew Sun Wukong far away.'],
        ['悟空变小，钻进了公主的肚子里。', 'Wù Kōng biàn xiǎo, zuān jìn le gōng zhǔ de dù zi li.', 'Wukong shrank and went inside the princess’s stomach.'],
        ['公主肚子疼，只好把扇子借给他。', 'Gōng zhǔ dù zi téng, zhǐ hǎo bǎ shàn zi jiè gěi tā.', 'The princess’s stomach hurt, so she had to lend him the fan.'],
        ['悟空用大扇子扇了三下。', 'Wù Kōng yòng dà shàn zi shān le sān xià.', 'Wukong waved the big fan three times.'],
        ['大风吹来，火终于灭了！', 'Dà fēng chuī lái, huǒ zhōng yú miè le!', 'A strong wind blew, and at last the fire went out!']
      ]
    },
    {
      title: '盘丝洞与蜘蛛精 · The Spider Demons of Pansi Cave',
      cover: '蛛',
      coverClass: 'c9',
      cards: [
        ['唐僧一个人走进了森林。', 'Táng Sēng yí ge rén zǒu jìn le sēn lín.', 'Tang Seng walked into the forest alone.'],
        ['前面有一座漂亮的房子。', 'Qián miàn yǒu yí zuò piào liang de fáng zi.', 'There was a pretty house up ahead.'],
        ['里面住着七个女孩子。', 'Lǐ miàn zhù zhe qī ge nǚ hái zi.', 'Seven girls lived inside.'],
        ['她们一边做衣服，一边笑。', 'Tā men yì biān zuò yī fu, yì biān xiào.', 'They sewed clothes while laughing.'],
        ['其实，她们是七个蜘蛛精。', 'Qí shí, tā men shì qī ge zhī zhū jīng.', 'Actually, they were seven spider demons.'],
        ['她们吐出白色的丝，抓住唐僧。', 'Tā men tǔ chū bái sè de sī, zhuā zhù Táng Sēng.', 'They spun white silk and caught Tang Seng.'],
        ['猪八戒跑到河边看水里有什么。', 'Zhū Bā Jiè pǎo dào hé biān kàn shuǐ li yǒu shén me.', 'Zhu Bajie ran to the river to see what was in the water.'],
        ['八戒变成了小鱼，在水里游。', 'Bā Jiè biàn chéng le xiǎo yú, zài shuǐ li yóu.', 'Bajie turned into a little fish and swam in the water.'],
        ['蜘蛛精变出大网，抓住了八戒。', 'Zhī Zhū Jīng biàn chū dà wǎng, zhuā zhù le Bā Jiè.', 'The spider demon made a big net and caught Bajie.'],
        ['孙悟空变出很多小猴子。', 'Sūn Wù Kōng biàn chū hěn duō xiǎo hóu zi.', 'Sun Wukong made many little monkeys appear.'],
        ['小猴子用火烧掉了白丝。', 'Xiǎo hóu zi yòng huǒ shāo diào le bái sī.', 'The little monkeys used fire to burn the white silk.'],
        ['悟空救出了唐僧和猪八戒。', 'Wù Kōng jiù chū le Táng Sēng hé Zhū Bā Jiè.', 'Wukong rescued Tang Seng and Zhu Bajie.']
      ]
    },
    {
      title: '取得真经归来 · The Sacred Books and the Return',
      cover: '经',
      coverClass: 'c10',
      cards: [
        ['师徒四人走了十四年。', 'Shī tú sì rén zǒu le shí sì nián.', 'The four travelers journeyed for fourteen years.'],
        ['他们经过了八十一个困难。', 'Tā men jīng guò le bā shí yí ge kùn nan.', 'They went through eighty-one hardships.'],
        ['今天，他们终于来到了西天。', 'Jīn tiān, tā men zhōng yú lái dào le Xī Tiān.', 'At last, they arrived in the Western Heaven.'],
        ['这里的山上到处都是金光。', 'Zhè li de shān shàng dào chù dōu shì jīn guāng.', 'Golden light shone all over the mountains here.'],
        ['佛祖给他们很多厚厚的经书。', 'Fó Zǔ gěi tā men hěn duō hòu hòu de jīng shū.', 'The Buddha gave them many thick books of scripture.'],
        ['这些书可以教人们做好人。', 'Zhè xiē shū kě yǐ jiāo rén men zuò hǎo rén.', 'These books could teach people to be good.'],
        ['一只大白龟送他们过大河。', 'Yì zhī dà bái guī sòng tā men guò dà hé.', 'A giant white turtle carried them across a big river.'],
        ['他们坐着云飞回了家。', 'Tā men zuò zhe yún fēi huí le jiā.', 'They rode a cloud and flew home.'],
        ['皇帝亲自出来欢迎他们。', 'Huáng dì qīn zì chū lái huān yíng tā men.', 'The emperor came out in person to welcome them.'],
        ['所有人都很高兴，一起跳舞。', 'Suǒ yǒu rén dōu hěn gāo xìng, yì qǐ tiào wǔ.', 'Everyone was happy and danced together.'],
        ['孙悟空成了伟大的神仙。', 'Sūn Wù Kōng chéng le wěi dà de shén xiān.', 'Sun Wukong became a great immortal.'],
        ['这是一个非常好的结局！', 'Zhè shì yí ge fēi cháng hǎo de jié jú!', 'It was a wonderful ending!']
      ]
    }
  ];

  const journeyWestStories = themes.map((theme, themeIndex) => ({
    columnId: `journey_west_hsk12_${String(themeIndex + 1).padStart(2, '0')}`,
    title: theme.title,
    category: 'strange',
    hskRange: 'HSK 1-2',
    totalCards: theme.cards.length,
    freeCards: 4,
    cover: theme.cover,
    coverClass: theme.coverClass,
    intro: 'A vivid, beginner-friendly sentence stream retelling a classic Journey to the West adventure.',
    introZh: '用简短句子讲述《西游记》的经典奇幻故事。',
    cards: theme.cards.map(([sentence, pinyin, translation], cardIndex) => ({
      id: `journey_west_hsk12_${String(themeIndex * 12 + cardIndex + 1).padStart(2, '0')}`,
      title: `${String(cardIndex + 1).padStart(2, '0')}. ${translation}`,
      isFree: cardIndex < 4,
      displayFormat: 'sentence-stream',
      pinyin,
      sentence,
      translation,
      vocabList: []
    }))
  }));

  window.STORIES_DATA = {
    ...(base && typeof base === 'object' ? base : {}),
    collection: (base && base.collection) ? base.collection + ' + Journey to the West HSK 1-2' : 'HanLingo Journey to the West HSK 1-2',
    stories: [
      ...((base && Array.isArray(base.stories)) ? base.stories : []),
      ...journeyWestStories
    ]
  };
})();
