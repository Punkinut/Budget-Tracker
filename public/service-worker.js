const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "service-worker.js",
    "/dist/manifest.json",
    "/dist/bundle.js",
    "/css/style.css",
    "/images/close.png",
    "/icons/icon-32x32.png",
    "/icons/icon-64x64.png",
    "/icons/icon-128x128.png",
    "/icons/icon-256x256.png",
    "/icons/icon-512x512.png",
    "/js/db.js",
    "/js/clicks.js",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
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