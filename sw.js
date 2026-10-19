/* ============================================================
   HanLingo · Service Worker
   ------------------------------------------------------------
   版本：v3（2026-10）
   本次更新：
     1. 预缓存新增 data/trends.js（Trends & Slang 数据源）
     2. 缓存版本号 v2 → v3，激活时自动清理旧缓存
     3. 同源 JS/CSS 改为 stale-while-revalidate，
        保证 data/*.js 内容更新后用户下次访问即可生效
     4. 导航请求 network-first，离线回退 index.html
     5. 跨域 CDN（html2canvas）stale-while-revalidate
   ============================================================ */

const CACHE_VERSION = 'hanlingo-v3';

/* 首次安装时预缓存的核心资源（同源） */
const PRECACHE_URLS = [
  './',
  './index.html',
  './data/daily.js',
  './data/business.js',
  './data/classics.js',
  './data/trends.js',            // ← 本次新增
  './stories-data.js',
  './journey-west-hsk12.js',
  './art-of-war-hsk56.js'
];

/* 跨域 CDN 资源（运行时缓存，不阻塞 install） */
const CDN_URLS = [
  'https://html2canvas.hertzen.com/dist/html2canvas.min.js'
];

/* ============================================================
   install：预缓存核心资源 + 立即接管
   ============================================================ */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);

      // 核心资源必须全部成功，否则 install 失败（保证离线可用）
      await cache.addAll(PRECACHE_URLS);

      // CDN 资源尽力而为，失败不影响 SW 安装
      await Promise.allSettled(
        CDN_URLS.map((url) =>
          fetch(url, { mode: 'cors' })
            .then((res) => {
              if (res && res.ok) return cache.put(url, res);
            })
            .catch(() => { /* 忽略 CDN 失败 */ })
        )
      );

      // 新 SW 立即进入 waiting → activating，配合下方 clients.claim
      await self.skipWaiting();
    })()
  );
});

/* ============================================================
   activate：清理旧版本缓存 + 立即接管所有页面
   ============================================================ */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      );

      // 让新 SW 立即控制已打开的页面，无需刷新两次
      await self.clients.claim();
    })()
  );
});

/* ============================================================
   fetch：按请求类型分流
   ============================================================ */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 只处理 GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 只处理 http / https
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // 1) 页面导航：network-first，离线回退缓存的 index.html
  if (req.mode === 'navigate') {
    event.respondWith(networkFirstForNavigation(req));
    return;
  }

  // 2) 跨域资源（CDN）：stale-while-revalidate
  if (url.origin !== self.location.origin) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // 3) 同源静态资源：stale-while-revalidate
  //    保证 data/*.js 更新后，用户下次访问即可拿到新内容
  event.respondWith(staleWhileRevalidate(req));
});

/* ============================================================
   策略实现
   ============================================================ */

/* 导航请求：network-first，失败回退缓存的 index.html */
async function networkFirstForNavigation(req) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      // 更新导航缓存，保持离线可用
      cache.put('./index.html', res.clone());
    }
    return res;
  } catch (err) {
    const cached =
      (await cache.match(req)) ||
      (await cache.match('./index.html')) ||
      (await cache.match('./'));
    if (cached) return cached;
    throw err;
  }
}

/* stale-while-revalidate：先给缓存，后台静默更新 */
async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(req);

  const networkPromise = fetch(req)
    .then((res) => {
      // 只缓存成功的同源 / CORS 响应
      if (res && res.ok) {
        cache.put(req, res.clone());
      }
      return res;
    })
    .catch(() => null);

  // 有缓存立即返回，同时后台更新
  if (cached) {
    // 不 await，让后台更新继续
    networkPromise;
    return cached;
  }

  // 没缓存则等网络
  const res = await networkPromise;
  if (res) return res;

  // 网络和缓存都没有，返回一个最小离线响应
  return new Response('Offline', {
    status: 503,
    statusText: 'Offline',
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}