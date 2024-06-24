//console.log("sw is  in public folder")

let cacheData = "appV1"
//this --- window 
this.addEventListener("install",(event)=>{
event.waitUntil(
    caches.open(cacheData).then((cache)=>{
        cache.addAll([
           "/browse",
            "/static/js/bundle.js",
            "/static/js/main.chunk.js",
            "/static/js/0.chunk.js",
            "/index.html",
            "/"
        ])
    })
)
})



/*
this.addEventListener("fetch",(event)=>{
if(!navigator.onLine){

    event.respondWith(
    caches.match(event.request).then((result=>{
    if(result){
        return result
    }
    }))
)
}


})*/

/**/

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open(cacheData).then((cache) => {
            return cache.match(event.request).then((response) => {
                // If resource is found in cache, return it
                if (response) {
                    return response;
                }

                // If resource is not found in cache, fetch it from the network
                return fetch(event.request).then((networkResponse) => {
                    // Cache the fetched resource for future use
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                }).catch((error) => {
                    console.error("Fetch failed:", error);
                    
                    // For example, return a custom offline page
                });
            });
        })
    );
});