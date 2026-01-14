const button = document.getElementById("btn");
button.addEventListener("click", () => {

    const input = document.getElementById("range");
    const range = parseInt(input.value);
    const result = document.getElementById("result");
    result.innerHTML = "";
    for (let i = 1; i <= range; i++) {
        if (i % 2 == 0) {
            result.innerHTML += `<div>${i} -> Even</div>`;
        } else {
            result.innerHTML += `<div>${i} -> Odd</div>`;
        }
    }
});
