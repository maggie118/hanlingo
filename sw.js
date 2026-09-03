// service-worker.js - 针对单页面与高频音频深度优化
const CACHE_NAME = 'hanlingo-cache-v24'; // 上线更新版本号：每次改代码 +1，例 v17

const PRE_CACHE_ASSETS = [
  './',
  './index.html',
  './js/data.js',
  './js/wordseg.js',
  './manifest.json',
  './images/logo-founder.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRE_CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 完全跳过：所有 /api/* 接口 + stripe 域名，不经 SW 缓存，直连网络
  if (url.pathname.startsWith('/api/') || event.request.url.includes('://stripe.com')) {
    return;
  }

  // POST 请求一律不走缓存，直接放行
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        // 只有 2xx 成功响应才写入缓存，防止缓存 404/500 错误页
        if (networkResponse.ok && (event.request.url.includes('.mp3') || event.request.url.includes('.png'))) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache).catch(err => {
              // 缓存失败静默吞掉，不打断页面
              console.warn('SW cache put skip', err);
            });
          });
        }
        return networkResponse;
      }).catch(() => {
        // 离线：导航类请求返回主壳页 index.html
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
    })
  );
});
