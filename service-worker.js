var cacheName = 'petstore-v1';
var cacheFiles = ['index.html','product.js','petstore.webmanifest','images/cat.png','images/store-icon.png'];
self.addEventListener('install', (e) => 
    {console.log('[Service Worker] Install');  
    e.waitUntil(    
        caches.open(cacheName).then((cache) => 
            {console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);    
        })  
    );}
);