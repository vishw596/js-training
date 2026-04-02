// Implement a debounce function and use it to delay an API call by 500ms when typing in an input field.


const input = document.getElementById("search");

function fetchSearchResults(val) {
    if(val === "")return
    console.log(`final value goes to api call : ${val}`);
}
// let timer = null
// input.addEventListener("input", (e) => {
//     console.log("event trigger");
    
//     clearTimeout(timer);
//     timer = setTimeout(fetchSearchResults, 3000, e.target.value);
// });

function debounce(fn,delay){
    let timer = null;
    return function(val){
        clearTimeout(timer)
        timer = setTimeout(fn,delay,val)
    }
}

const debounceFetch = debounce(fetchSearchResults,1000)
input.addEventListener("input",(e)=>{
    console.log("event triggered");
    debounceFetch(e.target.value)
})

