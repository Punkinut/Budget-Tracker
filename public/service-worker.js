console.log("Working!")

const FILES_TO_CACHE = [
    "/",
    "/manifest.json",
    "/css/style.css",
    "/js/db.js",
    "/dist/bundle.js",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  ];


const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

// self.addEventListener("install", event => {
//     event.waitUntil(
//       caches
//         .open(STATIC_CACHE)
//         .then(cache => cache.addAll(FILES_TO_CACHE))
//         .then(() => self.skipWaiting())
//     );
//   });