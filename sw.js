// HanLingo Service Worker
const CACHE_NAME = 'hanlingo-v1';

// 需要缓存的资源（不包含音频）
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/checkout.html',
  '/learn.html',
  '/quest.html',
  '/profile.html',
  '/progress.html',
  '/review.html',
  '/saved.html',
  '/data/sentences.js',
  '/js/workbook-export.js',
  '/js/notification.js',
  '/js/user-system.js'
];

// 安装事件
self.addEventListener('install', event => {
  console.log('📦 Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching assets...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Install complete!');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('❌ Cache failed:', err);
      })
  );
});

// 激活事件
self.addEventListener('activate', event => {
  console.log('🚀 Activating...');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => {
      console.log('✅ Activate complete!');
      return self.clients.claim();
    })
  );
});

// 请求拦截 - 跳过音频文件
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // 跳过音频文件（不缓存，直接网络请求）
  if (url.pathname.match(/\.(mp3|wav|ogg|m4a)$/)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

console.log('✅ HanLingo SW loaded');