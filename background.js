console.log("Hola");
chrome.history.addUrl({url: 'http://www.a.com/'},()=>{
    console.log("Yolo");
})
