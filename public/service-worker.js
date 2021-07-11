const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "service-worker.js",
    "/dist/manifest.json",
    "/dist/bundle.js",
    "/css/style.css",
    "/images/close.png",
    "images/icons/icon-32x32.png",
    "images/icons/icon-64x64.png",
    "images/icons/icon-128x128.png",
    "images/icons/icon-256x256.png",
    "images/icons/icon-512x512.png",
    "/js/db.js",
    "/js/clicks.js"
  ];


const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

self.addEventListener("install", event => {
    event.waitUntil(
      caches
        .open(STATIC_CACHE)
        .then(cache => cache.addAll(FILES_TO_CACHE))
        .then(() => self.skipWaiting())
    );
  });

self.addEventListener("activate", event => {
  const currentCaches = [STATIC_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});