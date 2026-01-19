// -----------------------------------Exercise 7-------------------------------
// the reason the below code logs undefined because arrow function in js takes the value of this from their parent which in this case is global scope i.e. window object so this will point to window object in browser and in window object there is no variable called name is defined so it logs undefined

// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();

// the solution is to use function declarations who takes the value of this based on how they are called for example if a function is called like this: obj.func() then inside function this will point the to obj
const user = {
    name: "Alex",
    greet: function () {
        console.log("Hello, " + this.name);
    },
};
user.greet();

// --------------------------------------- Exercise 8 -------------------------------
const settings = { theme: "light", notifications: true };
const updatedSettings = {...settings,theme:"dark"}
console.log(settings.theme);
console.log(updatedSettings.theme);

// ---------------------------------------- Exercise 9 ------------------------------ 
const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const nonZeroStock = inventory.filter(product => product.stock > 0)

const totalValuePerItem = nonZeroStock.map(product => product.price*product.stock)

const finalValue = totalValuePerItem.reduce((acc,el)=> acc+= el,0)
console.log(`Total Inventory Value:${finalValue}`);
