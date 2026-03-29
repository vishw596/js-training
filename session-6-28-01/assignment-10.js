// 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, delay);
    });
}

const startTime = Date.now();
// const task1 = await simulateTask("task1",1000)
// console.log(task1);
// const task2 = await simulateTask("task2",1000)
// console.log(task2);
// const task3 = await simulateTask("task3",1000)
// console.log(task3);
// console.log(`Time taken ${Date.now() - startTime}ms`);
// ~3000ms

Promise.all([simulateTask("task1", 1000), simulateTask("task2", 1000), simulateTask("task3", 1000)]).then((res) => {
    console.log(res);
    console.log(`Time Taken : ${Date.now() - startTime}ms`);
});
// ~1000ms