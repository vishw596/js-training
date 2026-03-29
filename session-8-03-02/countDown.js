// TODO: Implement countdown function

// function countdown(start) {

//  // Your code here

//  // Should log numbers from start to 0, with 1 second between each

//  // Should stop at 0

// }

// countdown(10);

// Expected output:

// 10 (immediately)

// 9  (after 1 second)

// 8  (after 2 seconds)

// ...

// 0  (after 10 seconds)

function countDown(start) {
    console.log(start);
    // const interval = setInterval(() => {
    //     console.log(start);
    //     if (start === 0) {
    //         clearInterval(interval);
    //     }
    //     start--;
    // }, 1000);

    for (let i = start - 1; i >= 0; i--) {
        setTimeout(
            () => {
                console.log(i);
            },
            (start - i) * 1000,
        );
    }
}

countDown(10);
