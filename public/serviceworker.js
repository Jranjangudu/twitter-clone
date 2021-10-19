const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"]; // to add your file in btw array , that file store in cache

const self = this;

// Install Serviceworker
self.addEventListener("install", (event) => {
  event.waitUntil(
    // it return a promise
    caches.open(CACHE_NAME).then((cache) => {
      console.log("cache open");
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request) // return a promise
      .then(() => {
        return fetch(event.request) // <--- if no error , it simple fetch the request
          .catch(() => caches.match("offline.html")); // if any network error occurs , then it return offline.html file , that store in catch;
      })
  );
});

// activate the serviceworker

self.addEventListener("activate", (event) => {
  const cacheWhitelist = []; // it on contain [ CACHE_NAME (version-1) ]
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // if any other cache created it simple delete the cache ,
          }
        })
      )
    )
  );
});
