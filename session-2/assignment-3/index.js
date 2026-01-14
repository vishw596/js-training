const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const input = document.getElementById("role");
    const role = (input.value).toUpperCase()
    console.log(role)
    
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
