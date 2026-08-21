// generate-audio.js
// 使用 Edge-TTS 生成所有短语音频
// 音色: zh-CN-XiaoxiaoNeural (最自然的中文女声)
// 语速: -10% (更适合语言学习)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ============================================================
// 🎵 配置
// ============================================================
const CONFIG = {
  voice: 'zh-CN-XiaoxiaoNeural',  // 最佳中文女声
  rate: '-10%',                    // 放慢10%，适合学习
  pitch: '+0%',                    // 音高不变
  outputDir: 'public/audio',
};

// ============================================================
// 📋 所有短语 (共150个)
// ============================================================
const PHRASES = [
  // ===== Taxi & Travel (10) =====
  { id: 'travel-01', chinese: '我要去机场。' },
  { id: 'travel-02', chinese: '请开慢一点。' },
  { id: 'travel-03', chinese: '停在这里，谢谢。' },
  { id: 'travel-04', chinese: '我迷路了。' },
  { id: 'travel-05', chinese: '一张去北京的火车票。' },
  { id: 'travel-06', chinese: '在这里左拐，然后直走。' },
  { id: 'travel-07', chinese: '请打表，谢谢。' },
  { id: 'travel-08', chinese: '地铁站在哪里？' },
  { id: 'travel-09', chinese: '我赶飞机，请快一点。' },
  { id: 'travel-10', chinese: '多少钱？可以扫码吗？' },

  // ===== Ordering Food (10) =====
  { id: 'food-01', chinese: '你好，我要一份这个。' },
  { id: 'food-02', chinese: '不要辣，谢谢。' },
  { id: 'food-03', chinese: '买单。' },
  { id: 'food-04', chinese: '有英文菜单吗？' },
  { id: 'food-05', chinese: '好吃！再来一份。' },
  { id: 'food-06', chinese: '我吃素，没有肉。' },
  { id: 'food-07', chinese: '有筷子吗？给我一双。' },
  { id: 'food-08', chinese: '打包带走，谢谢。' },
  { id: 'food-09', chinese: '有温水吗？我过敏花生。' },
  { id: 'food-10', chinese: '老板，推荐一下招牌菜。' },

  // ===== Asking Directions (10) =====
  { id: 'directions-01', chinese: '请问，洗手间在哪里？' },
  { id: 'directions-02', chinese: '离这里远吗？' },
  { id: 'directions-03', chinese: '直走，然后右拐。' },
  { id: 'directions-04', chinese: '走路要多久？' },
  { id: 'directions-05', chinese: '我听不懂，请写下来。' },
  { id: 'directions-06', chinese: '地铁站是哪个出口？' },
  { id: 'directions-07', chinese: '对面就是吗？过马路走哪个天桥？' },
  { id: 'directions-08', chinese: '坐几号线？在哪站换乘？' },
  { id: 'directions-09', chinese: '附近有超市和药店吗？' },
  { id: 'directions-10', chinese: '可以帮我在地图上指一下吗？' },

  // ===== Hotel & Accommodation (10) =====
  { id: 'hotel-01', chinese: '我预订了一个房间。' },
  { id: 'hotel-02', chinese: '可以帮我叫出租车吗？' },
  { id: 'hotel-03', chinese: '房间有 WiFi 吗？' },
  { id: 'hotel-04', chinese: '早餐几点开始？' },
  { id: 'hotel-05', chinese: '我的房间号是 302。' },
  { id: 'hotel-06', chinese: '空调不工作了。' },
  { id: 'hotel-07', chinese: '我需要多一条毛巾。' },
  { id: 'hotel-08', chinese: '请问退房时间是几点？' },
  { id: 'hotel-09', chinese: '可以延迟退房吗？' },
  { id: 'hotel-10', chinese: '非常感谢你的帮助。' },

  // ===== Shopping (10) =====
  { id: 'shopping-01', chinese: '这个多少钱？' },
  { id: 'shopping-02', chinese: '可以便宜一点吗？' },
  { id: 'shopping-03', chinese: '有别的颜色吗？' },
  { id: 'shopping-04', chinese: '我要这个尺寸。' },
  { id: 'shopping-05', chinese: '可以用信用卡吗？' },
  { id: 'shopping-06', chinese: '可以试穿吗？' },
  { id: 'shopping-07', chinese: '有发票吗？' },
  { id: 'shopping-08', chinese: '太贵了。' },
  { id: 'shopping-09', chinese: '我可以退货吗？' },
  { id: 'shopping-10', chinese: '我就要这个了。' },

  // ===== Emergency & Health (10) =====
  { id: 'emergency-01', chinese: '救命！请帮我打120。' },
  { id: 'emergency-02', chinese: '我需要去医院。' },
  { id: 'emergency-03', chinese: '我肚子痛。' },
  { id: 'emergency-04', chinese: '附近有药店吗？' },
  { id: 'emergency-05', chinese: '我对青霉素过敏。' },
  { id: 'emergency-06', chinese: '请帮帮我，我丢了护照。' },
  { id: 'emergency-07', chinese: '最近的警察局在哪里？' },
  { id: 'emergency-08', chinese: '我钱包被偷了。' },
  { id: 'emergency-09', chinese: '我需要一个翻译。' },
  { id: 'emergency-10', chinese: '太感谢了！' },

  // ===== At the Bank (10) =====
  { id: 'bank-01', chinese: '我想换人民币。' },
  { id: 'bank-02', chinese: '汇率是多少？' },
  { id: 'bank-03', chinese: 'ATM 在哪里？' },
  { id: 'bank-04', chinese: '我的信用卡被吞了。' },
  { id: 'bank-05', chinese: '我想开一个账户。' },
  { id: 'bank-06', chinese: '可以帮我查一下余额吗？' },
  { id: 'bank-07', chinese: '手续费是多少？' },
  { id: 'bank-08', chinese: '我需要零钱。' },
  { id: 'bank-09', chinese: '可以转账吗？' },
  { id: 'bank-10', chinese: '我要存钱。' },

  // ===== Post Office (10) =====
  { id: 'post-01', chinese: '我要寄这个包裹到美国。' },
  { id: 'post-02', chinese: '邮票多少钱？' },
  { id: 'post-03', chinese: '需要多少天能到？' },
  { id: 'post-04', chinese: '我想寄快递。' },
  { id: 'post-05', chinese: '可以挂号吗？' },
  { id: 'post-06', chinese: '邮局几点开门？' },
  { id: 'post-07', chinese: '我需要填这张单子吗？' },
  { id: 'post-08', chinese: '可以邮寄到中国吗？' },
  { id: 'post-09', chinese: '有邮政特快专递吗？' },
  { id: 'post-10', chinese: '请给我两张明信片。' },

  // ===== At the Café (10) =====
  { id: 'cafe-01', chinese: '我要一杯拿铁。' },
  { id: 'cafe-02', chinese: '少糖，谢谢。' },
  { id: 'cafe-03', chinese: '有燕麦奶吗？' },
  { id: 'cafe-04', chinese: '我要一杯热美式。' },
  { id: 'cafe-05', chinese: '加一份浓缩。' },
  { id: 'cafe-06', chinese: '可以带走吗？' },
  { id: 'cafe-07', chinese: '有蛋糕或点心吗？' },
  { id: 'cafe-08', chinese: '这里可以坐吗？' },
  { id: 'cafe-09', chinese: '可以用支付宝吗？' },
  { id: 'cafe-10', chinese: '再见，下次再来！' },

  // ===== Phone & Internet (10) =====
  { id: 'phone-01', chinese: '我想买一张 SIM 卡。' },
  { id: 'phone-02', chinese: 'WiFi 密码是多少？' },
  { id: 'phone-03', chinese: '国际漫游怎么开通？' },
  { id: 'phone-04', chinese: '我的手机没电了。' },
  { id: 'phone-05', chinese: '有充电宝可以借吗？' },
  { id: 'phone-06', chinese: '我想查一下流量余额。' },
  { id: 'phone-07', chinese: '可以充话费吗？' },
  { id: 'phone-08', chinese: '这个卡可以用多少天？' },
  { id: 'phone-09', chinese: '哪里有免费 Wi-Fi？' },
  { id: 'phone-10', chinese: '我的手机型号是 iPhone。' },

  // ===== Work & Business (10) =====
  { id: 'work-01', chinese: '这是我的名片。' },
  { id: 'work-02', chinese: '我们明天开会。' },
  { id: 'work-03', chinese: '这是我的报价。' },
  { id: 'work-04', chinese: '可以发邮件给我吗？' },
  { id: 'work-05', chinese: '我需要一份合同。' },
  { id: 'work-06', chinese: '我们合作愉快！' },
  { id: 'work-07', chinese: '你的职位是什么？' },
  { id: 'work-08', chinese: '请稍等，我打个电话。' },
  { id: 'work-09', chinese: '可以拍照吗？' },
  { id: 'work-10', chinese: '很高兴认识你！' },

  // ===== Socializing (10) =====
  { id: 'social-01', chinese: '你叫什么名字？' },
  { id: 'social-02', chinese: '你是哪里人？' },
  { id: 'social-03', chinese: '你的爱好是什么？' },
  { id: 'social-04', chinese: '我会说一点中文。' },
  { id: 'social-05', chinese: '你学中文多久了？' },
  { id: 'social-06', chinese: '我们加个微信吧！' },
  { id: 'social-07', chinese: '你喜欢吃中国菜吗？' },
  { id: 'social-08', chinese: '祝你生日快乐！' },
  { id: 'social-09', chinese: '有空一起吃饭！' },
  { id: 'social-10', chinese: '我很喜欢中国！' },

  // ===== Weather & Seasons (10) =====
  { id: 'weather-01', chinese: '今天天气怎么样？' },
  { id: 'weather-02', chinese: '明天会下雨吗？' },
  { id: 'weather-03', chinese: '今天很冷。' },
  { id: 'weather-04', chinese: '现在多少度？' },
  { id: 'weather-05', chinese: '春天来了，花开了。' },
  { id: 'weather-06', chinese: '夏天很热，适合游泳。' },
  { id: 'weather-07', chinese: '秋天很凉爽。' },
  { id: 'weather-08', chinese: '冬天会下雪吗？' },
  { id: 'weather-09', chinese: '今天有雾霾。' },
  { id: 'weather-10', chinese: '今天天气真好！' },

  // ===== Time & Schedule (10) =====
  { id: 'time-01', chinese: '现在几点了？' },
  { id: 'time-02', chinese: '我们几点见面？' },
  { id: 'time-03', chinese: '今天几月几号？' },
  { id: 'time-04', chinese: '明天是星期几？' },
  { id: 'time-05', chinese: '商店几点开门？' },
  { id: 'time-06', chinese: '我晚上七点有空。' },
  { id: 'time-07', chinese: '电影几点开始？' },
  { id: 'time-08', chinese: '我迟到了五分钟。' },
  { id: 'time-09', chinese: '这个会开多久？' },
  { id: 'time-10', chinese: '时间不早了，我该走了。' },

  // ===== Culture & Etiquette (10) =====
  { id: 'culture-01', chinese: '新年快乐！恭喜发财！' },
  { id: 'culture-02', chinese: '端午节吃粽子。' },
  { id: 'culture-03', chinese: '中秋节吃月饼。' },
  { id: 'culture-04', chinese: '请问，可以用筷子吗？' },
  { id: 'culture-05', chinese: '中国功夫很厉害！' },
  { id: 'culture-06', chinese: '你喝茶还是咖啡？' },
  { id: 'culture-07', chinese: '中国汉字真美。' },
  { id: 'culture-08', chinese: '我想学书法。' },
  { id: 'culture-09', chinese: '谢谢你的礼物！' },
  { id: 'culture-10', chinese: '欢迎来中国！' },
];

// ============================================================
// 🚀 生成音频
// ============================================================
async function generateAllAudio() {
  const audioDir = path.join(__dirname, CONFIG.outputDir);
  
  // 创建目录
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
    console.log(`📁 创建目录: ${audioDir}`);
  }

  console.log('\n' + '='.repeat(60));
  console.log('🎵 HanLingo 音频生成器');
  console.log('='.repeat(60));
  console.log(`📋 短语总数: ${PHRASES.length}`);
  console.log(`🎤 音色: ${CONFIG.voice}`);
  console.log(`🐢 语速: ${CONFIG.rate}`);
  console.log(`📁 输出目录: ${audioDir}`);
  console.log('='.repeat(60) + '\n');

  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;
  const failedPhrases = [];

  for (let i = 0; i < PHRASES.length; i++) {
    const phrase = PHRASES[i];
    const outputPath = path.join(audioDir, `${phrase.id}.mp3`);
    const progress = `[${String(i+1).padStart(3, '0')}/${PHRASES.length}]`;
    
    // 跳过已存在的文件
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      if (stats.size > 1000) {
        console.log(`⏭️ ${progress} 跳过: ${phrase.id}.mp3 (已存在, ${Math.round(stats.size/1024)}KB)`);
        skipCount++;
        continue;
      } else {
        // 文件损坏，重新生成
        console.log(`⚠️ ${progress} 文件损坏: ${phrase.id}.mp3 (${stats.size}bytes)，重新生成...`);
        fs.unlinkSync(outputPath);
      }
    }

    try {
      // 构建命令
      const command = [
        'edge-tts',
        `--text "${phrase.chinese}"`,
        `--voice ${CONFIG.voice}`,
        `--rate ${CONFIG.rate}`,
        `--pitch ${CONFIG.pitch}`,
        `--write-media "${outputPath}"`
      ].join(' ');
      
      // 执行
      console.log(`🎤 ${progress} 生成: ${phrase.id}.mp3 (${phrase.chinese})`);
      execSync(command, { stdio: 'pipe' });
      
      // 验证文件
      if (fs.existsSync(outputPath)) {
        const stats = fs.statSync(outputPath);
        if (stats.size > 1000) {
          successCount++;
          console.log(`✅ ${progress} 完成: ${phrase.id}.mp3 (${Math.round(stats.size/1024)}KB)`);
        } else {
          throw new Error(`文件太小 (${stats.size}bytes)`);
        }
      } else {
        throw new Error('文件未生成');
      }
      
      // 延迟避免请求过频
      await new Promise(resolve => setTimeout(resolve, 80));
      
    } catch (error) {
      console.error(`❌ ${progress} 失败: ${phrase.id}.mp3`);
      console.error(`   错误: ${error.message}`);
      failCount++;
      failedPhrases.push(phrase.id);
      
      // 删除可能残留的损坏文件
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
    }
  }

  // ============================================================
  // 📊 统计报告
  // ============================================================
  console.log('\n' + '='.repeat(60));
  console.log('📊 生成完成!');
  console.log('='.repeat(60));
  console.log(`✅ 成功: ${successCount} 个`);
  console.log(`⏭️ 跳过: ${skipCount} 个 (已存在)`);
  console.log(`❌ 失败: ${failCount} 个`);
  console.log(`📁 输出目录: ${audioDir}`);
  
  if (failedPhrases.length > 0) {
    console.log('\n❌ 失败的短语:');
    failedPhrases.forEach(id => console.log(`   - ${id}`));
    console.log('\n💡 可以重新运行脚本重试失败的短语');
  } else {
    console.log('\n🎉 所有音频生成成功！');
  }
  
  console.log('='.repeat(60) + '\n');
}

// ============================================================
// 🔧 检查依赖
// ============================================================
function checkDependencies() {
  console.log('🔍 检查依赖...');
  
  try {
    execSync('edge-tts --version', { stdio: 'ignore' });
    console.log('✅ edge-tts 已安装\n');
    return true;
  } catch (error) {
    console.error('\n❌ 未找到 edge-tts');
    console.error('\n请先安装:');
    console.error('  npm install -g edge-tts');
    console.error('\n或者使用 pip:');
    console.error('  pip install edge-tts\n');
    return false;
  }
}

// ============================================================
// ▶️ 运行
// ============================================================
if (checkDependencies()) {
  generateAllAudio();
}