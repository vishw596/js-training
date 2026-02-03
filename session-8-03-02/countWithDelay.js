// // TODO: Implement countWithDelay function

// function countWithDelay() {

//  Your code here

// Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)

// }
// countWithDelay();



function countWithDelay() {
    // for (let i = 1; i <= 5; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, i * 1000);
    // }

    let counter = 1;
    const interval = setInterval(() => {
        console.log(counter);
        if (counter === 5) {
            clearInterval(interval);
        }
        counter++;
    }, 1000);
}

countWithDelay();
