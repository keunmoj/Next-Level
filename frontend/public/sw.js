// self.addEventListener("install", function (e) {
//   e.waitUntil(
//     caches.open("danbi").then(function (cache) {
//       return cache.addAll(["/", "/index.html", "/src/"]);
//     })
//   );
// });

// self.addEventListener("fetch", function (e) {
//   e.respondWith(
//     caches.match(e.request).then(function (r) {
//       return (r || fetch(e.request).then(function (response) {
//           return caches.open("danbi").then(function (cache) {
//             cache.put(e.request, response.clone());
//             return response;
//           });
//         })
//       );
//     })
//   );
// });