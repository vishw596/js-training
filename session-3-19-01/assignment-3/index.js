const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const prices = document.getElementById("prices").value.split(",");
    const total = prices.reduce((acc,el)=>{
        acc += parseInt(el)
        return acc
    },0)
    const result = document.getElementById("result");
    result.innerHTML = `<h3>Cart Total: ${total}</h3>`;
});
