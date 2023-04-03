self.addEventListener("install",() =>{
    console.log("Services worker is registered");
});
self.addEventListener("activate",() =>{
    console.log("Services worker is activated");
});
self.addEventListener("fetch",() =>{
    console.log("Services worker is fetched");
});