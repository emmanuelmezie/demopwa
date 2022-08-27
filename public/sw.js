self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('static').then(
            (cache) => {
                cache.addAll([
                    '/',
                    '/index.js',
                    'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css',
                    'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css',
                    'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js',
                    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                    '/images/events/img1.jpg'
                    ,
                ])
            }
        )
    )
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});

