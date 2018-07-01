

const staticCacheName = 'currency-converter-v2';
const currencyCache ='currency-caches-v1';



self.addEventListener('install',function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll([
        '/favicon.ico',
        '/static/css/main.c17080f1.css',
        '/static/js/main.09c92ebb.js',
        'index.html'
        
   
      ]);
    })
    
  );
});

self.addEventListener('activate', (event)=> {
  event.waitUntil(
    caches.keys().then((cacheNames)=> {
      return Promise.all(
        cacheNames.filter((cacheName)=> {
          return cacheName.startsWith('curency-');   
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch',(event)=> {
  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/'){
      event.respondWith(caches.match('/index.html').then((response)=>{
        return response;
      }))
    }
    return;
  }
  if (requestUrl.origin ==="https://free.currencyconverterapi.com"){

    if (requestUrl.pathname.includes('/api/v5/currencies')) {
      event.respondWith(serveCurrency(event.request));
      return;
  }
  return;
    if (requestUrl.pathname.includes('/api/v5/convert')) {
      event.respondWith(serveCurrency(event.request));
      
  openDatabase();
      return;
  }
  return;
  }
 
  if (requestUrl.origin.includes("cdnjs.cloudflare.com")){
    if (requestUrl.pathname.includes('ajax/libs/semantic-ui/2.2.12/semantic.min.css')) {
      event.respondWith(serveCurrency(event.request));
      return;
  }
  return;
 
  }

 

  event.respondWith(
    caches.match(event.request).then((response)=> {
      return response || fetch(event.request);
    })
  );

});

function serveCurrency(request){
  const requestUrl=new URL(request.url);
  return caches.open(currencyCache).then((cache)=>{
    return cache.match(requestUrl.pathname).then((response)=>{
      if (response) return response;
      return fetch(request).then((netResponse)=>{
        cache.put(requestUrl.pathname,netResponse.clone())
        return netResponse;
      })
    })
  })
}

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

