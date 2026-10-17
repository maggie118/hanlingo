// HanLingo Service Worker
const CACHE_NAME = 'hanlingo-v22';
const APP_SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'stories-data.js',
  'daily-life.js',
  'business-workplace.js',
  'elite-hsk79.js',
  'advanced-daily-hsk56.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

// Install: cache the shell. Each file is added separately so one missing icon doesn't fail the install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(APP_SHELL.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Pages and story data: network first, so updates show up; cache is the offline fallback.
  const fresh = req.mode === 'navigate' || url.pathname.endsWith('.json') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css');
  if (fresh) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match('./')))
    );
    return;
  }

  // Everything else (icons, images): cache first.
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});

// Push: show the daily phrase notification (payload from the push server).
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  const title = data.title || 'HanLingo · Daily Phrase';
  const options = {
    body: data.body || 'Good morning! Today\'s phrase is ready.',
    icon: 'icons/icon-192.png',
    badge: 'icons/favicon-32.png',
    data: { url: data.url || './index.html#learn' },
    tag: 'hanlingo-daily'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Click: open (or focus) the app on the Learn page.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './index.html#learn';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      if (list.length > 0) {
        return list[0].focus() && list[0].navigate(url);
      }
      return self.clients.openWindow(url);
    })
  );
});
