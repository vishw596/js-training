// 5) Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.


function downloadFile(url,callback,...args){    
    setTimeout(()=>{
        console.log(`Download Complete ${url}`);
        callback(...args);
    },3000)
}

function callbackFn(message){
    console.log(message);
}

downloadFile("https://downloadpdf.com/pdf",callbackFn,"Download Size:5MB")

