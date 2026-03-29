// Create three <div> elements with the class box.
// Select all boxes using querySelectorAll and change the background color of each box to lightblue using forEach.
const divList = document.querySelectorAll(".box")
divList.forEach((div)=>{
    div.style.backgroundColor = "lightblue"
    div.style.margin = "10px"
})