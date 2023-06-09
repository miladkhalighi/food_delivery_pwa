'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "15de732365aca93168912a516609375d",
"index.html": "5247815c364e25529d651f62ec94da29",
"/": "5247815c364e25529d651f62ec94da29",
"main.dart.js": "a5b3ec2bf34e4ac825e1912f266727ee",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cf2f4e343e0385b035f03d665b571f9f",
"assets/AssetManifest.json": "dc4758e1758063d847be24e7d9037ec8",
"assets/NOTICES": "a95ce3e897583840aa14557a258124f4",
"assets/FontManifest.json": "7ac0f30b0e02a09aeb6590e5bfd1d6af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "59cfada5c8576da3063ba7e60adfd718",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "43eb8da5131e470637bfa150aa3dfb17",
"assets/fonts/MaterialIcons-Regular.otf": "ee02e48a930aba094e5ae37354b9f217",
"assets/assets/images/ToyFaces_girl.png": "fd59ffc05bb3630d27ee21fd6d60967c",
"assets/assets/images/desserts/12-chocolate-cake-2.png": "7086e6e6061af9f9332c4e5f45658e96",
"assets/assets/images/desserts/06-white-cream-cake.png": "72a8d761a1e9ab030d0a2ba3bb739ea6",
"assets/assets/images/desserts/10-strawberries.png": "a79464f0bbd083afff41a5e1be71d5df",
"assets/assets/images/desserts/08-cream-cupcakes.png": "1ff6c141271aee101688faf81782b245",
"assets/assets/images/desserts/09-fruit-plate.png": "7d02c401d57e684cca4629ca3f59011b",
"assets/assets/images/desserts/14-fruit-pie.png": "2f7ef095aaaed9bdb84fbe4a43ebfad2",
"assets/assets/images/desserts/07-honey-cake.png": "6696ece812ec169ba1a462b089ae4074",
"assets/assets/images/desserts/05-macaroons.png": "6c1c142c18f700cd54bfe9e6a84a55ed",
"assets/assets/images/desserts/04-fluffy-cake.png": "052b58ceb18ec1f5a93803f08488188f",
"assets/assets/images/desserts/01-lemon-cheesecake.png": "e4a6e999863d592e56ac386d4474bc50",
"assets/assets/images/desserts/02-chocolate-cake-1.png": "9d7262180f2d593b0d86e8926e129888",
"assets/assets/images/desserts/15-apple-pie.png": "2d349519b5ed75ffc09316f990732f90",
"assets/assets/images/desserts/13-strawberry-powdered-cake.png": "eb76ad0808ebfc3b525fb5d831ec4287",
"assets/assets/images/desserts/11-powdered-cake.png": "3ada434b6c99e2e896b3e0e3f67c8680",
"assets/assets/images/desserts/03-chocolate-donuts.png": "9db38d810512b1e73381b0ea7027b72f",
"assets/assets/images/ToyFaces_man.png": "d4a065d7bd3e47248da859e109ff21df",
"assets/assets/images/4.png": "a9dc01d449bd13bf60fcc73f5d2fef5f",
"assets/assets/images/5.png": "3edd687ded62693bd39efb261b5c4716",
"assets/assets/images/2.png": "dea55a29468084b5fd084502f1540a61",
"assets/assets/images/3.png": "439052984e2085b86945bc94aa14d3f8",
"assets/assets/images/1.png": "368d7525202bee85c5107eeaa8d63e67",
"assets/assets/icons/user.svg": "48d46e6c59102f82a5cd59752d357e1c",
"assets/assets/icons/arrow.svg": "b6163f56874a1153f9594c3a8407a14a",
"assets/assets/icons/gg_profile.svg": "921c312e1c6866764b6f73c584e100a4",
"assets/assets/icons/touch_swipe.svg": "9fd5942c13a2ff805fd774211b08afe8",
"assets/assets/icons/chef.svg": "031bf089d4bc8328242994f90a428381",
"assets/assets/icons/ic_outline-sticky-note-2.svg": "674864a052d9bfce8e92c1a0a1371126",
"assets/assets/icons/chef.png": "54f91091f9f7e1336112af67aa3167fe",
"assets/assets/icons/menu_icon.svg": "9560655597c33401eb839c982761597e",
"assets/assets/icons/heroicons-solid_home.svg": "6e777fbcbc06e153c5c7a4cad5646739",
"assets/assets/icons/ic_sharp-history.svg": "6cd301f97a68fc848f3d957856072ba8",
"assets/assets/icons/security.svg": "d1efe3c2ce5d842e28215bffb904311b",
"assets/assets/icons/home_empty.svg": "27ceb0ef5918c542305575e968e06ad5",
"assets/assets/icons/icons8_buy.svg": "630c5049ee5a192f0f7a5d9a7701e4d9",
"assets/assets/icons/ic_outline-local-offer.svg": "88957051ed166780bde3a9d88f723377",
"assets/assets/icons/shopping-cart.svg": "a415eebceb2104d1c6ad99ecc9b3c28c",
"assets/assets/icons/heart.svg": "ee51e5191be0ea8774e8054a7c67c940",
"assets/assets/fonts/SF-Pro-Rounded-Regular.ttf": "400bd9f855cefe6a13b02eb55a31d511",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
