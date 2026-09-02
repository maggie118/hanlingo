// service-worker.js - 针对单页面与高频音频深度优化
const CACHE_NAME = 'hanlingo-cache-v15'; // v15：Founder 头像改用 images/logo-founder.png（1300×1300 海豚完整入圆），容器放大到 160px；v14：移除额外 0.78 缩放

// 强制启动预缓存清单
const PRE_CACHE_ASSETS = [
 './',
 './index.html',
 './js/data.js',
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

// 核心：智能单页面请求拦截与音频本地动态固化
self.addEventListener('fetch', event => {
 // 排除 Stripe 支付安全页面的缓存干扰，确保付款流程走实时线上
 if (event.request.url.includes('://stripe.com') || event.request.url.includes('api/webhook')) {
 return;
 }

 event.respondWith(
 caches.match(event.request).then(cachedResponse => {
 if (cachedResponse) {
 return cachedResponse; // 本地存在，直接秒开秒放音频
 }

 return fetch(event.request).then(networkResponse => {
 // 如果是音频资产，或者前端其他图片、JS，一边播放一边自动塞进本地缓存
 if (event.request.url.includes('.mp3') || event.request.url.includes('.png')) {
 const responseToCache = networkResponse.clone();
 caches.open(CACHE_NAME).then(cache => {
 cache.put(event.request, responseToCache);
 });
 }
 return networkResponse;
 });
 }).catch(() => {
 // 离线状态下，所有跳转路由全部强制映射回 index.html 单页面中
 if (event.request.mode === 'navigate') {
 return caches.match('./index.html');
 }
 })
 );
});
