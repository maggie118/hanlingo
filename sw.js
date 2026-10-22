/* ============================================================
   HanLingo · Service Worker
  ------------------------------------------------------------
  版本：v6（2026-10） 预缓存新增 Chinese for Work 男声时间轴
  策略：
     1. 核心 UI (HTML/JS/CSS)：Cache-First，保证离线秒开。
     2. 音频资源 (.mp3, .m4a, .wav 等)：Stale-While-Revalidate，
        优先本地播放，后台静默更新。
     3. 其他资源：Stale-While-Revalidate。
  ============================================================ */

const CACHE_VERSION = 'hanlingo-v15';   /* v15：导航改为 Network-First，让手机联网即取最新 index.html，不再被离线缓存卡住 */
const AUDIO_CACHE = 'hanlingo-audio-v6';   /* v6：清除旧音频缓存，让新上传的 classics 音频（liaozhai/journey/suntzu）生效 */

/* 首次安装时预缓存的核心资源 */
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './data/daily.js',
  './data/business.js',
  './data/classics.js',
  './data/trends.js',
  './data/daily_audio.js',
  './data/business_audio.js',
  './data/classics_lz_audio.js',
  './data/classics_jttw_audio.js',
  './data/classics_suntzu_audio.js',
  './stories-data.js',
  './journey-west-hsk12.js',
  './art-of-war-hsk56.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

/* ============================================================
   install：预缓存核心资源
   ============================================================ */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // 强制请求最新资源，避免从 HTTP 缓存中读取旧版本
      return cache.addAll(PRECACHE_URLS.map(url => new Request(url, { cache: 'reload' })));
    }).then(() => self.skipWaiting())
  );
});

/* ============================================================
   activate：清理旧版本缓存
   ============================================================ */
self.addEventListener('activate', (event) => {
  const validCaches = [CACHE_VERSION, AUDIO_CACHE];
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (!validCaches.includes(key)) {
            return caches.delete(key); // 删除旧版本缓存
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

/* ============================================================
   fetch：请求拦截与策略分发
   ============================================================ */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 只处理 http/https 请求
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // 1. 音频资源拦截 (Stale-While-Revalidate)
  // 拦截真实的音频后缀，或者浏览器标识为 audio 的请求
  const isAudio = 
    req.destination === 'audio' || 
    url.pathname.match(/\.(mp3|m4a|wav|ogg|aac)$/i);
  
  if (isAudio) {
    event.respondWith(staleWhileRevalidate(req, AUDIO_CACHE));
    return;
  }

  // 2. 页面导航请求（如加载 index.html）→ Network-First
  // 先联网取最新，失败（离线）才用缓存兜底，保证线上更新后手机能拉到新版
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req, CACHE_VERSION, './index.html'));
    return;
  }

  // 其他静态资源（同源 JS, CSS, 图标等）
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(req, CACHE_VERSION));
    return;
  }

  // 3. 第三方跨域资源（如 html2canvas）(Stale-While-Revalidate)
  event.respondWith(staleWhileRevalidate(req, CACHE_VERSION));
});

/* ============================================================
   策略实现
   ============================================================ */

/**
 * Cache-First (缓存优先)
 * 适用于核心 UI，确保离线秒开。
 */
async function cacheFirst(req, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  
  if (cached) {
    return cached;
  }

  try {
    const networkRes = await fetch(req);
    if (networkRes && networkRes.ok) {
      cache.put(req, networkRes.clone());
    }
    return networkRes;
  } catch (err) {
    // 离线且无缓存时的兜底
    if (fallbackUrl) {
      const fallback = await cache.match(fallbackUrl);
      if (fallback) return fallback;
    }
    return new Response('Offline and no cache available.', { status: 503 });
  }
}

/**
 * Network-First (网络优先)
 * 适用于核心 HTML/导航，在线时始终取服务器最新，离线时用缓存兜底。
 */
async function networkFirst(req, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  try {
    const networkRes = await fetch(req, { cache: 'no-cache' });
    if (networkRes && networkRes.ok) {
      cache.put(req, networkRes.clone());
      return networkRes;
    }
  } catch (e) { /* 离线或网络错误，走缓存兜底 */ }
  const cached = await cache.match(req) || (fallbackUrl ? await cache.match(fallbackUrl) : null);
  if (cached) return cached;
  return new Response('Offline and no cache available.', { status: 503 });
}

/**
 * Stale-While-Revalidate (向服务器请求的同时使用缓存)
 * 适用于音频资源。
 */
async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);

  // 后台更新逻辑
  const fetchPromise = fetch(req).then((networkRes) => {
    if (networkRes && networkRes.ok) {
      cache.put(req, networkRes.clone());
    }
    return networkRes;
  }).catch(() => null);

  // 如果有缓存立即返回 (实现播放 0 延迟)
  if (cached) {
    return cached;
  }

  // 没缓存则等网络
  const networkRes = await fetchPromise;
  if (networkRes) return networkRes;

  return new Response('Offline and no audio cache available.', { status: 503 });
}