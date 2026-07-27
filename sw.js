// HanLingo · Service Worker
// PWA offline support

const CACHE_NAME = 'hanlingo-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/learn.html',
  '/quest.html',
  '/review.html',
  '/progress.html', 
  '/profile.html',
  '/checkout.html',    // ? 添加 checkout.html
  '/manifest.json',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/data/sentences.js',
  '/js/workbook-export.js',
  '/js/notification.js',
  '/js/user-system.js',
  // ? 缓存外部 CSS（Font Awesome）
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// 需要跳过的文件类型（不缓存）
const SKIP_TYPES = /\.(mp3|ogg|wav|mp4|webm|m4a)$/;

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async cache => {
        console.log('?? HanLingo: Caching assets');
        try {
          // 尝试缓存所有资源
          await cache.addAll(ASSETS);
          console.log('? All assets cached successfully');
        } catch (err) {
          console.warn('?? Some assets failed to cache:', err);
          // 继续安装，即使部分资源失败
        }
        return cache;
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('??? Removing old cache:', key);
            return caches.delete(key);
          })
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

  const url = new URL(event.request.url);
  
  // 跳过音频文件（太大，不缓存）
  if (SKIP_TYPES.test(url.pathname)) {
    return;
  }

  // 跳过外部 API 请求（如果有）
  if (url.hostname.includes('api.') || url.hostname.includes('analytics')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          // 返回缓存的资源
          return cached;
        }

        // 从网络获取
        return fetch(event.request)
          .then(response => {
            // 只缓存成功的响应
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                try {
                  cache.put(event.request, responseClone);
                } catch (err) {
                  // 某些资源可能无法缓存（如跨域资源）
                  console.debug('Cannot cache:', event.request.url);
                }
              });
            }
            return response;
          })
          .catch(() => {
            // 离线降级方案
            return new Response(
              `<!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>HanLingo · Offline</title>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                  <style>
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                      background: #f7f5f2;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 100vh;
                      margin: 0;
                      padding: 20px;
                    }
                    .offline-card {
                      background: white;
                      border-radius: 20px;
                      padding: 40px 30px;
                      text-align: center;
                      max-width: 400px;
                      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    }
                    .offline-icon {
                      font-size: 48px;
                      color: #FF6B35;
                      margin-bottom: 16px;
                    }
                    h1 {
                      font-size: 24px;
                      color: #1e1e2a;
                      margin: 0 0 8px 0;
                    }
                    p {
                      font-size: 14px;
                      color: #6a6a7a;
                      line-height: 1.6;
                      margin: 0 0 20px 0;
                    }
                    .retry-btn {
                      background: #FF6B35;
                      color: white;
                      border: none;
                      padding: 12px 32px;
                      border-radius: 60px;
                      font-size: 16px;
                      font-weight: 600;
                      cursor: pointer;
                      transition: 0.2s;
                    }
                    .retry-btn:hover {
                      background: #e85a2a;
                      transform: translateY(-1px);
                    }
                  </style>
                </head>
                <body>
                  <div class="offline-card">
                    <div class="offline-icon">??</div>
                    <h1>Offline Mode</h1>
                    <p>
                      <i class="fas fa-wifi" style="color:#FF6B35;"></i>
                      You're offline. Please check your internet connection.
                    </p>
                    <button class="retry-btn" onclick="location.reload()">
                      <i class="fas fa-sync-alt"></i> Retry
                    </button>
                  </div>
                </body>
              </html>`,
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

console.log('? HanLingo Service Worker loaded');