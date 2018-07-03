const idb=window.indexedDB;

    if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./sw.js')
           .then((reg) =>{ console.log("Service Worker Registered at " ,reg.scope); }).catch((err)=>{
             console.log("registration failed",err);
           });
}
  
function openDatabase(key,value){
  if (!navigator.serviceWorker) {
    return Promise.resolve();
  }
  if (!idb){
    return;
  }
  const request= idb.open('converts',3);
  request.onupgradeneeded=(event)=>{
    const db=event.target.result;
    const tx=db.transaction('converts',"readwrite");
    tx.oncomplete=(e)=>{
       
    }
    const store=transaction.objectStore('converts');
    store.add({key:value})

    /*
    const db=event.target.result;
      const store=db.createObjectStore("converts",{keyPath:key})
    store.transaction.oncomplete=(event)=>{
      const convertObjectStore = db.transaction("converts", "readwrite").objectStore("converts");
        convertObjectStore.add([{value}]);
    }
    */
  }

}
openDatabase("XCD_ALL",39.918897);
