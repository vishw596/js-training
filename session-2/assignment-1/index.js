function checkNumber(number) {
    console.log(number);

    if (number > 0) return "Positive";
    else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const inputNum = document.getElementById("number");
    const number = (inputNum.value);
    const res = checkNumber(number);
    const result = document.getElementById("result");
    result.innerHTML = `<h3>${res}</h3>`;
});
