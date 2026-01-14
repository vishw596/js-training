function calculateTotalPrice(price, quantity) {
    return price * quantity;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const priceInput = document.getElementById("price")
    const price = parseInt(priceInput.value)
    const quantityInput = document.getElementById("quantity");
    const quantity = parseInt(quantityInput.value);
    const result = document.getElementById("result");
    const totalPrice = calculateTotalPrice(price,quantity)
    result.innerHTML = `<h3>Total:${totalPrice}</h3>`
});
