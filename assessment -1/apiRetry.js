// 2. API Call with Retry Logic

// Problem Statement

// Implement logic that:

// Adds a retry count

// Calls the API again if the API call fails

// (Exact implementation details are not shown in the image, but the core requirement is retry-on-failure.)

async function apiRetry(url, retryCount) {
    try {
        console.log(`Try ${retryCount}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Invalid Response");
        }
        return response.json();
    } catch (error) {
        if (retryCount === 1) {
            throw new Error("Out of Retries");
        }
        return apiRetry(url, retryCount - 1);
    }
}

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// const response = await apiRetry(url, 5);
// console.log(response);

async function apiRetryIterative(url, retryCount) {
    while (retryCount > 0) {
        try {
            console.log(`Try: ${retryCount}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Invalid Response");
            }
            return response.json();
        } catch (error) {
            if(retryCount <= 1)
                throw new Error("Out of Retries")
            retryCount--;
        }
    }
}

const url = "https://jsonplaceholder.typicode.com/todo/";
const response = await apiRetryIterative(url, 5);
console.log(response);
