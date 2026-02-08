// 3) Create a button with text "Clicks: 0".
// Initialize a variable count = 0.
// On each button click, increment count and update the button text accordingly.
let counter = 0;
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    counter++;
    btn.innerText = `Clicks:${counter}`
})