const applyCoupon = function (amount, couponCode) {
    if (couponCode == "SAVE10") {
        return amount - amount * 0.1;
    } else if (couponCode == "SAVE20") {
        return amount - amount * 0.2;
    } else if (couponCode == "NONE") {
        return amount;
    }
    return amount;
};

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const amountInput = document.getElementById("amount");
    const amount = parseInt(amountInput.value);
    const couponInput = document.getElementById("coupon");
    const couponCode = couponInput.value;
    const result = document.getElementById("result");
    const discountedAmt = applyCoupon(amount, couponCode);
    result.innerHTML = `<h3>Amount after discount:${discountedAmt}</h3>`;
});
