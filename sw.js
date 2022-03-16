self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                'index.html',
                'home.html',
                'game.html',
                'game-over.html',
                'success.html',
                'css/bootstrap_style.css',
                'css/style.css',
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/animate.css/animate.min.css',
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
                'js/game.js',
                'js/ttwords.json',
                'img/noose.svg',
                'img/hjicon512.png',
                'img/hjicon192.png',
                'manifest.webmanifest',
                'https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap',

            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});