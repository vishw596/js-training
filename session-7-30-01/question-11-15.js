// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// Output: A E C D B

// Explanation : first A will be logged after that settimeout callback will be added to the macrotask queue then .then callback of the resolved promise will be added to the microtask queue after that E will be logged
// and call stack becomes empty now event loop will push the .then callback function from microtask queue to call stack it logs C and pushes another .then callback to the microtask queue again event loop will push the
// newly added .then callback from microtask queue to the call stack and logs D and at the end settimeout callback from macrotask queue will be pushed into callstack and logs B

// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// Output: 101 undefined

// Explanation : showId.call(agent) will invoke the showId method with this set to agent hence 101 will be logged and showId.apply(null) will invoked the function with this set to global object because when you call
// apply method with null or undefined in non-strict mode it will replace this with global object hence logging undefined.

// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

// Output: Caught

// Explantion: Promise.all() return resolved Promise containing array of results of the promises if all the promises are resolved and if any promise is rejected then it returns rejected promise containing result of rejected promise only

// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

// Output:undefined

// Explanation: here settimeout callback function will be invoked as standalone function so this inside that callback function loses the context of player object and will point to global object hence logs undefined



// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));


// Output: Caught Error 10

// Explanation error thrown in .then callback will return rejected promise which will invoke .catch callback and logs caught error and .catch callback is returning a promise with value 10 which is logged by last .then callback.




