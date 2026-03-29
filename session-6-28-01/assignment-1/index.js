// 1) Create an HTML file with a paragraph <p id="secret-message">Initial Text</p> and a button.
// On button click, select the paragraph using getElementById and change its text to "You found the secret
// message!".

const paragraph = document.getElementById("para");
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    paragraph.innerText = "You found the secret message!"
})