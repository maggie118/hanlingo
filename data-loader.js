// js/data-loader.js
// HanLingo · 动态数据加载器

const DATA_SOURCES = {
  hsk: {
    label: 'HSK',
    levels: 9,
    levelLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    colors: ['#FF6B35', '#f7934b', '#FFB347', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6', '#E74C3C', '#1ABC9C'],
    filePattern: 'data/hsk/level{level}.js',
    dailyGoal: 5
  },
  yct: {
    label: 'YCT',
    levels: 4,
    levelLabels: ['1', '2', '3', '4'],
    colors: ['#2ECC71', '#27AE60', '#1ABC9C', '#16A085'],
    filePattern: 'data/yct/level{level}.js',
    dailyGoal: 5
  },
  bct: {
    label: 'BCT',
    levels: 2,
    levelLabels: ['A', 'B'],
    colors: ['#3498DB', '#2980B9'],
    filePattern: 'data/bct/level-{level}.js',
    dailyGoal: 5
  },
  mct: {
    label: 'MCT',
    levels: 3,
    levelLabels: ['1', '2', '3'],
    colors: ['#8E44AD', '#9B59B6', '#AF7AC5'],
    filePattern: 'data/mct/level{level}.js',
    dailyGoal: 5
  }
};

// 路径配置
const PATH_CONFIG = {
  hsk: {
    id: 'hsk',
    label: 'HSK',
    icon: '🌐',
    description: '汉语水平考试 (HSK 1-9)',
    levels: 9,
    levelPrefix: 'HSK'
  },
  yct: {
    id: 'yct',
    label: 'YCT',
    icon: '🧒',
    description: '中小学生汉语考试 (YCT 1-4)',
    levels: 4,
    levelPrefix: 'YCT'
  },
  bct: {
    id: 'bct',
    label: 'BCT',
    icon: '💼',
    description: '商务汉语考试 (BCT A-B)',
    levels: 2,
    levelPrefix: 'BCT'
  },
  mct: {
    id: 'mct',
    label: 'MCT',
    icon: '🩺',
    description: '医学汉语考试 (MCT 1-3)',
    levels: 3,
    levelPrefix: 'MCT'
  }
};

// 主题包配置
const PACK_CONFIG = {
  popular: {
    id: 'popular',
    label: 'Popular',
    icon: '🔥',
    description: '最常用句子包',
    file: 'data/packs/popular.js',
    price: '$9.99'
  },
  business: {
    id: 'business',
    label: 'Business',
    icon: '💼',
    description: '商务场景句子包',
    file: 'data/packs/business.js',
    price: '$9.99'
  },
  travel: {
    id: 'travel',
    label: 'Travel',
    icon: '✈️',
    description: '旅行场景句子包',
    file: 'data/packs/travel.js',
    price: '$9.99'
  },
  daily: {
    id: 'daily',
    label: 'Daily',
    icon: '☀️',
    description: '日常生活句子包',
    file: 'data/packs/daily.js',
    price: '$9.99'
  },
  restaurant: {
    id: 'restaurant',
    label: 'Restaurant',
    icon: '🍜',
    description: '餐厅场景句子包',
    file: 'data/packs/restaurant.js',
    price: '$9.99'
  },
  hotel: {
    id: 'hotel',
    label: 'Hotel',
    icon: '🏨',
    description: '酒店场景句子包',
    file: 'data/packs/hotel.js',
    price: '$9.99'
  },
  shopping: {
    id: 'shopping',
    label: 'Shopping',
    icon: '🛍️',
    description: '购物场景句子包',
    file: 'data/packs/shopping.js',
    price: '$9.99'
  },
  taxi: {
    id: 'taxi',
    label: 'Taxi',
    icon: '🚖',
    description: '出行场景句子包',
    file: 'data/packs/taxi.js',
    price: '$9.99'
  }
};

// ============================================================
// 数据加载函数
// ============================================================

function loadSentences(path, level) {
  // 从 localStorage 获取缓存
  var cacheKey = 'hanlingo_data_' + path + '_' + level;
  var cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {}
  }
  return null;
}

function cacheSentences(path, level, data) {
  var cacheKey = 'hanlingo_data_' + path + '_' + level;
  localStorage.setItem(cacheKey, JSON.stringify(data));
}

function getPathConfig(pathId) {
  return PATH_CONFIG[pathId] || null;
}

function getPackConfig(packId) {
  return PACK_CONFIG[packId] || null;
}

function getAllPaths() {
  return Object.values(PATH_CONFIG);
}

function getAllPacks() {
  return Object.values(PACK_CONFIG);
}

// ============================================================
// 获取用户进度（支持多路径）
// ============================================================

function getUserProgress(pathId) {
  var key = 'hanlingo_progress_' + pathId;
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch (e) {
    return {};
  }
}

function saveUserProgress(pathId, progress) {
  var key = 'hanlingo_progress_' + pathId;
  localStorage.setItem(key, JSON.stringify(progress));
}

function getLevelProgress(pathId, level) {
  var progress = getUserProgress(pathId);
  return progress[level] || { learned: [], saved: [], wrong: [] };
}

function saveLevelProgress(pathId, level, data) {
  var progress = getUserProgress(pathId);
  progress[level] = data;
  saveUserProgress(pathId, progress);
}

// ============================================================
// 获取当前学习状态（兼容旧版）
// ============================================================

function getCurrentPath() {
  return localStorage.getItem('hanlingo_current_path') || 'hsk';
}

function getCurrentLevel() {
  return parseInt(localStorage.getItem('hanlingo_current_level')) || 1;
}

function getDailyGoal() {
  return parseInt(localStorage.getItem('hanlingo_daily_goal')) || 5;
}

// ============================================================
// 导出
// ============================================================

window.HanLingoData = {
  DATA_SOURCES: DATA_SOURCES,
  PATH_CONFIG: PATH_CONFIG,
  PACK_CONFIG: PACK_CONFIG,
  loadSentences: loadSentences,
  cacheSentences: cacheSentences,
  getPathConfig: getPathConfig,
  getPackConfig: getPackConfig,
  getAllPaths: getAllPaths,
  getAllPacks: getAllPacks,
  getUserProgress: getUserProgress,
  saveUserProgress: saveUserProgress,
  getLevelProgress: getLevelProgress,
  saveLevelProgress: saveLevelProgress,
  getCurrentPath: getCurrentPath,
  getCurrentLevel: getCurrentLevel,
  getDailyGoal: getDailyGoal
};

console.log('✅ HanLingo Data Loader ready');