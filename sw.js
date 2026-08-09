// sw.js — HanLingo PWA 离线缓存
const CACHE_NAME = 'hanlingo-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './logo.png',
  './manifest.json',
  // 如果需要其他页面或资源，可在此添加
  // 例如：'./survival-topics.html', './exam-levels.html' 等
];

// 安装 Service Worker，并缓存资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.warn('缓存失败（某些资源可能不存在）', err))
  );
});

// 拦截请求，优先从缓存返回，若没有则从网络获取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存命中，返回缓存内容
        if (response) {
          return response;
        }
        // 否则从网络请求，并克隆响应存入缓存（可选）
        return fetch(event.request).then(
          networkResponse => {
            // 检查是否有效响应
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            // 克隆响应，存入缓存
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          }
        );
      })
      .catch(() => {
        // 离线且无缓存时可返回 fallback 页面（可选）
        return new Response('离线模式，请连接网络。', { status: 503 });
      })
  );
});

// 激活时清理旧缓存
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});