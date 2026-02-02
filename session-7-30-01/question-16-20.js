// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// Output: C A D B

// Explanation: first console.log(C) will be added to call stack and logged then async function foo() will be invoked inside that first A will be logged then foo will wait for the promise to resolve while it is waiting
// console.log("D") will be added to call stack and logs D and when the promise resolves the console.log(B)
// go to microtask queue and when call stack becomes empty after logging D it will be pushed to the call stack
// and gets logged




// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then((res) => console.log(res));

// Output: Cleanup Done
// Explanation : promise resolves with value Done and finally callback executes and logs cleanup and will return a promise with value modified but in .then callback after finally Done will be logged because if the finally callback throws an error or returns rejected promise then only promise returned by finally() will reject promise with that value otherwise promise returned by finally() will settle with same state as current promise so here the promise returned by finally() will be resolved with the value "Done" not "Modified?"




// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;
Promise.resolve().then(() => {
    console.log(a);
});
a = 10;

// Output: undefined 10

// Explanation : var variables are hoisted with undefined value assigned so first log will be undefined after that a becomes 5 and a promise is resolved and .then callback is added to the microtask queue after that a is reassigned to 10 and call stack becomes empty now event loop will push .then callback to the call stack and logs a which have value 10.



// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// Output: End P1 P2 T1 T2


// Explanation: setTimeout callback function will be added to macrotask queue after first Promise is resolved so it's .then callback will be added to the microtask queue after that second promise is resolve and it's .then callback will be added to the microtask queue and then end will be logged and call stack becomes empty now .then callback of first promise will be executed which logs P1 and add another callback function to macrotask queue after that .then callback of second promise will be executed and logs p2 and then last two callback from macrotask queue will be executed and T1 and T2 will be logged


// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }

    printName(){
        console.log("demo")
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

// Output: Sarah

// Explanation: it will log sarah as arrow function inside the class are stored in object itself not in the prototype object and the arrow function will take this from its surrounding scope which will be constructor function at the end and inside constructor function this will point to the object create using new keyword so it logs Sarah


