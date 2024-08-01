'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "0e0f7b41bb12ccb17e6e2054ec4c6fb8",
"flutter_bootstrap.js": "9bc502de9f39a1ba50cfe69890dcd018",
"index.html": "3d6728ead4ced153b42f759e4a639f5a",
"/": "3d6728ead4ced153b42f759e4a639f5a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "f0e098731d7c2571a1704563d85ba27c",
"assets/images/Skills/web.png": "0445c67ba319f1e6885194e05173efff",
"assets/images/Skills/c.png": "11396a41fce307b10316e942e62d2d39",
"assets/images/Skills/desktop.png": "756673f9c602013a7c5bfcf7ef10c9c5",
"assets/images/Skills/html.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/images/Skills/desktop1.png": "72da7f72e3772150c8fdcd11b60be968",
"assets/images/Skills/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/images/Skills/ioa.png": "79c34593c8ec11f71b1e4f89fc8f973b",
"assets/images/Skills/ui_ux.png": "71fe849f4b1b388fd90919d2ce1e1c9e",
"assets/images/Skills/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/images/Skills/android.png": "4f917f91ac87a78d2f1643b996db3d4b",
"assets/images/Skills/java.png": "8d8ff1fd3a8fab1c72a6d061572fe445",
"assets/images/Skills/sam.jpg": "c926fc275c33f26be57cfe8cdc2c5aa5",
"assets/images/Skills/ios2.png": "7d624f4151cde5fc01e7e3dd402eaf1b",
"assets/images/Skills/linux.png": "e1e82f42a889005f38806051f50b58c9",
"assets/images/Skills/mysql.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/images/Skills/desktop3.png": "6e58ea226b2e7ad08ad421a30ab28276",
"assets/images/Skills/css.png": "c2a916c90ee4da814438eed181e70fdb",
"assets/images/Skills/web1.png": "acf8b1510ee2b701f5d73b883f433053",
"assets/images/Skills/android1.png": "44ed53e97ee38f8f008a8e8cad6f8fb8",
"assets/images/projects/instagram-6739333_640.webp": "01b980a44bb5191a6e140e1ad599a801",
"assets/images/projects/insta_clone.jpeg": "23f2aa9830672094c7865c8c4f7e49fd",
"assets/images/projects/quiz2.avif": "7ed7c4086ccad2b2fde98ac074ea7d41",
"assets/images/projects/quiz.jpeg": "7a1d62e9d166edcaf656bb38fde134f3",
"assets/images/projects/insta.webp": "c33fe2ccd5185bc8ce7fe3458baa5193",
"assets/images/projects/instagram.jpeg": "648209e06be36500e3032b163d8da91f",
"assets/images/social_icons/linkedin.png": "f33b3032dcc4df0e1c28e472742419d4",
"assets/images/social_icons/instagram.png": "b3c9ce60dd1d75ed3f597202c82c05e7",
"assets/images/social_icons/github3.png": "bdd48a4ce3865b304e7a91b2a51c584e",
"assets/images/social_icons/github.gif": "173d14df073478b4dfa4c58233ed1236",
"assets/images/social_icons/facebook.png": "ac65533df079a192ce511d1c1e5889d6",
"assets/images/social_icons/github2.png": "acd05c64cea194f6599dcb88ba022b23",
"assets/AssetManifest.bin": "43ec6a067e4b60a3726bfd5ea04255df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "04f9ef0ba06aef5838a0442c1bd1fe4b",
"assets/fonts/MaterialIcons-Regular.otf": "d7a5fe3bf4513cd224e65d6878ac3b19",
"assets/AssetManifest.json": "9ce2392113fb68512aa8c9e99218bbcb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
