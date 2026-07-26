// HanLingo · Service Worker
// PWA offline support

const CACHE_NAME = 'hanlingo-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/learn.html',
  '/quest.html',
  '/review.html',
  '/progress.html',
  '/profile.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/data/sentences.js',
  '/js/workbook-export.js',
  '/js/notification.js',
  '/js/user-system.js'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 HanLingo: Caching assets');
        return cache.addAll(ASSETS);
      })
      .catch(err => console.warn('⚠️ Cache error:', err))
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // 跳过非 GET 请求
  if (event.request.method !== 'GET') {
    return;
  }

  // 跳过音频文件（太大，不缓存）
  if (event.request.url.match(/\.(mp3|ogg|wav)$/)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          return cached;
        }
        return fetch(event.request).then(response => {
          // 只缓存成功的响应
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(() => {
          // Offline fallback - 返回一个简单的页面
          return new Response(
            '<html><body><h1>📚 HanLingo</h1><p>You are offline. Please connect to the internet.</p></body></html>',
            {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            }
          );
        });
      })
  );
});

console.log('✅ HanLingo Service Worker loaded');