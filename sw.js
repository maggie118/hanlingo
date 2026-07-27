// HanLingo · Service Worker
const CACHE_NAME = 'hanlingo-v1';

// 安装事件
self.addEventListener('install', event => {
  console.log('?? Service Worker 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('?? 缓存资源中...');
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon-192.png',
          '/icon-512.png',
          '/apple-touch-icon.png',
          '/favicon.ico',
          '/favicon-16x16.png',
          '/favicon-32x32.png'
        ]);
      })
      .then(() => {
        console.log('? 安装完成！');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('? 缓存失败:', err);
      })
  );
});

// 激活事件
self.addEventListener('activate', event => {
  console.log('?? Service Worker 激活中...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('??? 删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('? 激活完成！');
      return self.clients.claim();
    })
  );
});

// 请求拦截
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          return new Response('离线状态 - 请连接网络', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

console.log('? HanLingo Service Worker 已加载');