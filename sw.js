/* HanLingo Service Worker
 * 策略：
 *   - 预缓存 App Shell（必需文件失败则安装失败；可选文件失败仅告警）
 *   - 页面导航 / JSON 句库：Network First，离线回退缓存
 *   - 其余同源静态资源：Stale-While-Revalidate
 *   - 保留 Push 通知与通知点击唤醒逻辑
 */

const CACHE_VERSION = 'v2.0.0';
const PRECACHE_CACHE = `hanlingo-precache-${CACHE_VERSION}`;
const RUNTIME_CACHE = `hanlingo-runtime-${CACHE_VERSION}`;

const SCOPE = self.registration.scope;
const toURL = (path) => new URL(path, SCOPE).href;

const INDEX_URL = toURL('./index.html');

const NAV_TIMEOUT = 3500;
const DATA_TIMEOUT = 5000;

/* 必需：缺失会导致安装失败 */
const REQUIRED_PRECACHE = [
  './index.html',
  './manifest.json'
].map(toURL);

/* 可选：不存在时只告警，不阻断安装
 * 覆盖单文件版（index.html 内联资源）与拆分版（styles.css / app.js 等）两种形态。
 * data/sentences.json 是当前句库；daily-10.json 等为旧版本遗留，存在则一并缓存。
 */
const OPTIONAL_PRECACHE = [
  './',
  './data/sentences.json',
  './daily-10.json',
  './styles.css',
  './app.js',
  './stories-data.js',
  './daily-life.js',
  './business-workplace.js',
  './elite-hsk79.js',
  './advanced-daily-hsk56.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
].map(toURL);

/* ================= Install ================= */
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(PRECACHE_CACHE);

    await Promise.all(REQUIRED_PRECACHE.map(async (url) => {
      await cache.add(new Request(url, { cache: 'reload' }));
    }));

    const optionalResults = await Promise.allSettled(
      OPTIONAL_PRECACHE.map(async (url) => {
        await cache.add(new Request(url, { cache: 'reload' }));
      })
    );

    optionalResults.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.warn('[HanLingo SW] Optional precache skipped:', OPTIONAL_PRECACHE[index]);
      }
    });

    await self.skipWaiting();
  })());
});

/* ================= Activate ================= */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter((key) => {
          return key.startsWith('hanlingo-') &&
            key !== PRECACHE_CACHE &&
            key !== RUNTIME_CACHE;
        })
        .map((key) => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

/* 允许页面主动触发新 SW 立即接管（配合页面上的“有新版本”提示使用） */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* ================= Fetch ================= */
self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;

  let url;
  try { url = new URL(request.url); } catch (e) { return; }

  // 只处理同源 HTTP(S) 请求，避免缓存扩展、支付外链等。
  if (!/^https?:$/.test(url.protocol)) return;
  if (url.origin !== self.location.origin) return;

  // Range 请求不缓存，避免音频/视频断点续传问题。
  if (request.headers.has('range')) return;

  // 页面导航：Network First，失败后回退缓存 index.html。
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // 句库 JSON：Network First，保证更新及时可见，离线回退旧数据。
  if (url.pathname.endsWith('.json')) {
    event.respondWith(networkFirstJSON(request));
    return;
  }

  // 其余同源静态资源：Stale-While-Revalidate。
  event.respondWith(staleWhileRevalidate(event, request));
});

/* ================= Strategies ================= */
async function networkFirstNavigation(request) {
  try {
    const response = await fetchWithTimeout(request, NAV_TIMEOUT);

    if (!response || !response.ok) {
      throw new Error('Navigation response not ok');
    }

    // 只缓存干净 URL，避免 ?pro=success 等查询参数污染导航缓存。
    if (!new URL(request.url).search) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone()).catch(() => {});
    }

    return response;
  } catch (error) {
    const exact = await caches.match(request, { ignoreSearch: true });
    if (exact) return exact;

    const shell = await caches.match(INDEX_URL);
    if (shell) return shell;

    return offlineFallback();
  }
}

async function networkFirstJSON(request) {
  try {
    const response = await fetchWithTimeout(request, DATA_TIMEOUT);

    if (!response || !response.ok) {
      throw new Error('JSON response not ok');
    }

    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone()).catch(() => {});

    return response;
  } catch (error) {
    const hit = await caches.match(request);
    if (hit) return hit;

    return new Response(JSON.stringify({ error: 'offline', items: [] }), {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }
}

async function staleWhileRevalidate(event, request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok && response.type === 'basic') {
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    event.waitUntil(networkPromise);
    return cached;
  }

  const networkResponse = await networkPromise;
  if (networkResponse) return networkResponse;

  return new Response('Offline resource unavailable.', {
    status: 503,
    statusText: 'Offline',
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}

/* ================= Helpers ================= */
function fetchWithTimeout(request, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Network timeout')), timeoutMs);

    fetch(request).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

function offlineFallback() {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>HanLingo | Offline</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F4F3EF;color:#2C302E;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-align:center;padding:24px}
  h1{font-size:22px;margin:0 0 10px}
  p{color:#7B7F7A;line-height:1.6;margin:0}
</style>
</head>
<body>
  <main>
    <h1>HanLingo is offline</h1>
    <p>Please reopen the app after your connection returns.<br>已缓存内容会继续可用。</p>
  </main>
</body>
</html>`,
    {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    }
  );
}

/* ================= Push ================= */
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}

  const title = data.title || 'HanLingo · Daily Phrase';
  const options = {
    body: data.body || "Good morning! Today's phrase is ready.",
    icon: 'icons/icon-192.png',
    badge: 'icons/favicon-32.png',
    data: { url: data.url || './index.html#learn' },
    tag: 'hanlingo-daily',
    renotify: false
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

/* ================= Notification click ================= */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const rawUrl = (event.notification.data && event.notification.data.url) || './index.html#learn';
  const target = new URL(rawUrl, SCOPE).href;

  event.waitUntil((async () => {
    const clientList = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    const existing = clientList.find((client) => client.url.startsWith(SCOPE));

    if (existing) {
      try { await existing.navigate(target); } catch (e) { /* 跨文档导航失败时忽略 */ }
      return existing.focus();
    }

    return self.clients.openWindow(target);
  })());
});