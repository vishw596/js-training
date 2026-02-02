// Q1. Simple Object Context
// const laptop = {
//     brand: "Dell",
//     getBrand: function() {
//         return this.brand;
//     }
// };
// const myBrand = laptop.getBrand();
// console.log(myBrand);

// Output:Dell
// Explanation - normal function getBrand is called on the laptop object so inside the function
// this will point to the laptop object returning Dell 

// Q2. Basic Promise Flow

// console.log(1);
// Promise.resolve().then(() => {
//     console.log(2);
// });
// console.log(3);

// Output: 1 3 2 
// Explanation: first 1 will be logged as it is a synchronous task after that then callback is registered and added into the microtask queue and after that 3 will be logged now the call stack will be empty and event loop will push the callback function to call stack and 2 will be logged



// Q3. The Broken Chain

// Promise.reject("Error Occurred")
//     .then(() => console.log("Success"))
//     .catch((err) => console.log(err));

// Output: Error Occurred

// Explanation: here the promise is rejected so the catch callback function will be pushed inside microtask queue and event loop will push the callback to call stack and Error Occured will be logged


// Q4. Global vs. Local Scope

// var status = "Offline";

// const server = {
//     status: "Online",
//     getStatus: function() {
//         return this.status;
//     }
// };

// console.log(server.getStatus());

// Output: Online

// Explanation: here getStatus method is called on server object so inside getStatus this will point to
// server object and return Online.


// Q5. Math in Promises

// Promise.resolve(10)
//     .then((num) => num * 2)
//     .then((result) => console.log(result));

// Output: 20

// Explanation:here a promise is resolved with value 10 and inside first then callback  
// returns a promise with value 20 which logged in the second then callback

