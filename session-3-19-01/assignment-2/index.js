// Exercise 3
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const prices = document.getElementById("prices").value.split(",");
    const modifiedPrices = prices.map((el) => `$${el}`);
    console.log(modifiedPrices);
    const result = document.getElementById("result");
    result.innerHTML = `<h3>Formatted Prices: ${modifiedPrices}</h3>`;
});

// Exercise 4
const button2 = document.getElementById("btn1");
button2.addEventListener("click", () => {
    const ages = document.getElementById("ages").value.split(",");
    const validAges = ages.filter((age) => age > 0);
    const result = document.getElementById("result1");
    result.innerHTML = `<h3>Valid Ages: ${validAges}</h3>`;
});
// Exercise 5
const button3 = document.getElementById("btn2");
button3.addEventListener("click", () => {
    const ages = document.getElementById("numbers").value.split(",");
    const positiveNums = ages.filter((el)=> el > 0)
    const multiplyByTwo = positiveNums.map(el => el*2)
    const result = document.getElementById("result2");
    result.innerHTML = `<h3>Output : ${multiplyByTwo}</h3>`;
});
