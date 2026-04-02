const btn = document.getElementById("btn");
const input = document.getElementById("role");
btn.addEventListener("click", () => {
    const role = input.value.toUpperCase();    
    switch (role) {
        case "ADMIN":
            alert("Full Access");
            break;
        case "MANAGER":
            alert("Moderate Access");
            break;
        case "USER":
            alert("Limited Access");
            break;
        default:
            alert("Invalid Role");
    }
});

// method - 2
// let roles = {
//     ADMIN: "Full Access",
//     USER: "Limited Access",
//     MANAGER: "Moderate Access",
//     DEFAULT: "Invalid Role",
// };

// const result = function checkStatus(x) {
//     return roles[x] || roles["DEFAULT"];
// };
// console.log(result("DEMO"));