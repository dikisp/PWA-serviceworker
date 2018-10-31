// if (!('serviceWorker' in navigator)) {
//     console.log('Browser tidak mendukung Service worker');
// }
// else {
//     navigator.serviceWorker.register('service-worker.js')
//         .then(function () {
//             console.log('Service Worker terdaftar (registered)');
//         })
//         .catch(function (error) {
//             console.log('Error: Gagal melakukan registrasi service workder:', error);
//         });
// }

// navigator.serviceWorker.register('/service-worker.js', {
//     scope: '/app/'
// });

// self.addEventListener('install', function (event) {
// });

// self.addEventListener('activate', function (event) {
// });

// self.addEventListener('install', function (event) {
//     // Lakukan beberapa pekerjaan
//     event.waitUntil(
//         caches.create('static-v2').then(function (cache) {
//             return cache.add({
//                 'myapp/f1',
//                 'myapp/f2',
//                 ....
//         })
//         )
//         });

// self.addEventListener('fetch', function (event) {
//     console.log('Fetching:', event.request.url);
//     console.log(event.request);
//     console.log(event.request.method);
//     console.log(event.request.headers);
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(response);
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         new Response("hi there")
//     )
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//     )
// })

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//             .catch(function () {
//                 return event.default;
//             })
//     )
// })