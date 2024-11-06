self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('site-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        'https://raw.githubusercontent.com/xdeptu5/xdeptu5.github.io/main/192.png',
        'https://raw.githubusercontent.com/xdeptu5/xdeptu5.github.io/main/192.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
