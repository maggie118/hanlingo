// ============================================================
// HanLingo Service Worker — v2.2
// 策略: Cache First (with network fallback) + 自动版本管理
// ============================================================

const CACHE_VERSION = 'v2.2';
const CACHE_NAME = `hanlingo-${CACHE_VERSION}`;

// 需要缓存的静态资源 (仅核心文件, CSS/JS 通过版本号控制更新)
const STATIC_ASSETS = [
  './',
  './index.html',
  './survival-topics.html',
  './success.html',
  './manifest.json',
  './favicon.ico'
];

// 需要缓存的 CSS/JS (带版本号, 确保更新时强制刷新)
// 注意: 每次部署更新时, 修改版本号即可
const VERSIONED_ASSETS = [
  './style.css?v=2.2',
  './script.js?v=2.2'
];

// 合并所有需要预缓存的资源
const PRECACHE_ASSETS = [...STATIC_ASSETS, ...VERSIONED_ASSETS];

// ============================================================
// 1. INSTALL — 预缓存核心资源
// ============================================================
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing ${CACHE_NAME}...`);

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Pre-caching assets...');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[SW] Pre-cache complete.');
        // 强制新 SW 立即激活
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Pre-cache failed:', error);
      })
  );
});

// ============================================================
// 2. ACTIVATE — 清理旧缓存
// ============================================================
self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating ${CACHE_NAME}...`);

  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log(`[SW] Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }
            return null;
          })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete. Taking control...');
        // 立即控制所有打开的页面
        return self.clients.claim();
      })
  );
});

// ============================================================
// 3. FETCH — 缓存优先策略 (带网络回退)
// ============================================================
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // 跳过非 GET 请求 (如 POST 等)
  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  // 跳过浏览器扩展或非 HTTP 请求
  if (!request.url.startsWith('http')) {
    event.respondWith(fetch(request));
    return;
  }

  // 对于 HTML 页面, 优先使用网络 (确保最新内容)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 克隆响应以存入缓存
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // 网络失败时回退到缓存
          return caches.match(request);
        })
    );
    return;
  }

  // 对于 CSS/JS 等静态资源: 先查缓存, 若没有则网络请求
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // 缓存命中 — 返回缓存内容
          return cachedResponse;
        }

        // 缓存未命中 — 请求网络
        return fetch(request)
          .then((response) => {
            // 只缓存成功的响应
            if (!response || response.status !== 200) {
              return response;
            }

            // 克隆响应以存入缓存
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });

            return response;
          })
          .catch((error) => {
            console.warn('[SW] Fetch failed:', request.url, error);
            // 返回一个简单的离线回退页面 (可选)
            // 对于图片, 可以返回一个占位图
            if (request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="#999" text-anchor="middle" dy=".3em">?? Offline</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            return new Response('Offline — please check your connection.', { status: 503 });
          });
      })
  );
});

// ============================================================
// 4. MESSAGE — 监听客户端消息 (可选, 用于触发更新)
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// ============================================================
// 5. 日志 (仅开发环境)
// ============================================================
console.log(`[SW] HanLingo Service Worker ${CACHE_VERSION} initialized.`);