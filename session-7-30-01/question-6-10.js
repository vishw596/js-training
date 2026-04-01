// Q6. The "Lost" Context

// const user = {
//     name: "Alex",
//     printName() {
//         console.log(this.name);
//     }
// };

// const print = user.printName;
// print();

// Output : undefined 
// Explanation: here  printName function's reference is assigned to the print and the print function is invoked as standalone function so inside the function this refers to global object and name property will not
// available in the global object logging undefined


// Q7. Event Loop Basic Race

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// Output: Start End Promise Timeout

// Explanation:first start will be logged then settimeout callback function will be pushed into macrotask queue then then callback is pushed into microtask queue then end will be logged and call stack becomes empty
// microtask queue has higher priority then macrotask queue so then callback will be executed first and after that settimeout callback will be executed


// Q8. Arrow Function Pitfall

// const group = {
//     title: "Developers",
//     getTitle: () => {
//         console.log(this.title);
//     }
// };

// group.getTitle();

// Answer: undefined

// Explanation: arrow function takes this from their surrounding scope and they ignore the 
// object context for this value so inside the getTitle arrow function will refer to the global object
// and global object will not have title property

// Q9. Chaining Returns

// Promise.resolve(5)
//     .then((val) => {
//         console.log(val);
//         return val + 5;
//     })
//     .then((val) => console.log(val));

// Output: 5 10

// Explanation: promise is resolved with value 5 so inside first then 5 will logged and first then returns
// promise resolved with value 10 and 10 will be logged in the second then


// Q10. Catch and Continue

// Promise.reject("Fail")
//     .catch((err) => {
//         console.log(err);
//         return "Recovered";
//     })
//     .then((res) => console.log(res));

// Output: Fail Recovered

// here the rejected promise is handled by the catch callback and the catch callback also returns
// a resolved promise with value Recovered which is handled by the then callback by logging it



