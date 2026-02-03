## Task 1: Predict Output of Async Code

### Objective

Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.

### Requirements

1. Predict the output order for each code block

2. Run the code and compare with your prediction

3. Explain the execution order based on the event loop

### Code Block 1: Basic Async

```javascript
console.log("1");

setTimeout(function () {
    console.log("2");
}, 0);

Promise.resolve().then(function () {
    console.log("3");
});

console.log("4");
```

**Your Prediction (order):**

```

// Write the order you expect: 1,4,3,2

```

**Actual Output:**

```

// Run and write the actual order
1,4,3,2

```

**Explanation:**

- first all the synchronous task will be executed so 1,4 will be logged
- callstack becomes empty now event loop will take callback function from the microtask queue which is added by the promise and push it into callstack and 3 will be logged
- event loop will push the callback function added into macrotask queue by settimeout web api to callstack and 2 will be logged

### Code Block 2: Nested Async

```javascript
console.log("Start");

setTimeout(function () {
    console.log("Timeout 1");

    Promise.resolve().then(function () {
        console.log("Promise 1");
    });
}, 0);

Promise.resolve().then(function () {
    console.log("Promise 2");

    setTimeout(function () {
        console.log("Timeout 2");
    }, 0);
});

console.log("End");
```

**Your Prediction (order):**

```

// Write the order you expect
Start End Promise 2 Timeout 1 Promise 1 Timeout 2

```

**Actual Output:**

```

// Run and write the actual order
Start End Promise 2 Timeout 1 Promise 1 Timeout 2

```

**Explanation:**

- first start will be logged then settimout callback will be pushed into macrotask queue
- after that a promise is resolved so it's .then callback will be added to the microtask queue
- End will be logged now call stack becomes empty
- event loop will push the callback function from the microtask queue to call stack and it will log Promise 2 and add another settimeout callback to the macrotask queue
- event loop will push the first settimeout callback to call stack and it will log timeout 1 and pushes a new .then callback to the microtask queue
- event loop will push newly added .then callback into call stack and logs Promise1 and at the end event loop will push last settimeout callback to callstack and it logs Timeout2

### Code Block 3: Multiple Microtasks

```javascript
console.log("A");

Promise.resolve().then(function () {
    console.log("B");

    Promise.resolve().then(function () {
        console.log("C");
    });

    console.log("D");
});

Promise.resolve().then(function () {
    console.log("E");
});

setTimeout(function () {
    console.log("F");
}, 0);

console.log("G");
```

**Your Prediction (order):**

```

// Write the order you expect
A G B D E C F

```

**Actual Output:**

```

// Run and write the actual order
A G B D E C F
```

**Explanation:**



// Explain the execution order
- first A will be logged 
- two promise's .then callback will be added to the microtask queue 
- settimeout callback will be added to the macrotask queue 
- G will be logged and callstack becomes empty 
- event loop will push the first promise's .then callback which will log B,D and add another .then callback into microtask queue - second .then callback will be pushed to call stack and logs E after that .then callback of inside promise will be executed and logs C and in last the settimeout callback executed which logs F


### Code Block 4: Complex Async Chain

```javascript
console.log("1");

setTimeout(function () {
    console.log("2");
}, 0);

queueMicrotask(function () {
    console.log("3");
});

Promise.resolve().then(function () {
    console.log("4");

    queueMicrotask(function () {
        console.log("5");
    });
});

setTimeout(function () {
    console.log("6");
}, 0);

console.log("7");
```

**Your Prediction (order):**

```

// Write the order you expect
  1 7 3 4 5 2 6
```

**Actual Output:**

```

// Run and write the actual order
 1 7 3 4 5 2 6
```

**Explanation:**

// Explain the execution order

- first 1 will be logged 
- settimeout callback function will be pushed into macrotask queue 
- queuemicrotask function callback and resolved promise's callback function will be pushed into microtask queue 
- setimeout callback function will be pushed into macrotask queue 
- 7 will be logged and call stack becomes empty 
- event loop will push queuemicrotask function callback into callstack which logs 3 
- event loop will push resolved promise's callback into callstack which logs 4 and one more queuemicrotask function callback will be added into microtask queue 
- event loop will push newly added queuemicrotask function callback and logs 5 and at last event loop pushed two settimeout callback one after another which logs 2 6

### Code Block 5: Async/Await

```javascript
console.log("Start");
async function asyncFunction() {
    console.log("Async 1");

    await Promise.resolve();

    console.log("Async 2");
}
asyncFunction();
Promise.resolve().then(function () {
    console.log("Promise 1");
});

setTimeout(function () {
    console.log("Timeout");
}, 0);
console.log("End");
```

**Your Prediction (order):**

```

// Write the order you expect
Start Async 1 End Async 2 Promise 1 Timeout
```

**Actual Output:**

```

// Run and write the actual order
Start Async 1 End Async 2 Promise 1 Timeout
```

**Explanation:**


- Start will be logged 
- asyncFunction is invoked and inside that Async 1 will be logged and after that callback for promise inside asyncFunction will be added to the microtask queue and asyncFunction is returned.
- .then callback of resolved promise will be added to microtask queue 
- setimeout callback will be added to macrotask queue 
- End is logged and call stack becomes empty 
- event loop will push the asyncFunction promise's callback to the call stack and logs Async 2
- event loop adds outer promise callback to the callstack which logs Promise 1 and at last settimeout callback exectued and logs Timeout
