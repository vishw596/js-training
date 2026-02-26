const nameInput = document.getElementById("name")
const saveBtn = document.getElementById("save")
const loadBtn = document.getElementById("load")
const result = document.getElementById("output")

saveBtn.addEventListener("click",()=>{
    localStorage.setItem("username",nameInput.value)
    sessionStorage.setItem("username",nameInput.value)
})

loadBtn.addEventListener("click",()=>{
    const sessionVal = sessionStorage.getItem("username")
    const localVal = localStorage.getItem("username")
    result.textContent = `Session value: ${sessionVal}  localVal: ${localVal}`
})