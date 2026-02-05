// 2. API Call with Retry Logic

// Problem Statement

// Implement logic that:

// Adds a retry count

// Calls the API again if the API call fails

// (Exact implementation details are not shown in the image, but the core requirement is retry-on-failure.)


async function apiRetry(url, retryCount) {
    try {
        if (retryCount === 0) {
            throw new Error("Out of retries");
        }
        console.log(`Try ${retryCount}`);
        const response = await fetch(url);
        if (!response.ok) {
            return apiRetry(url, retryCount - 1);
        }
        return response.json();
    } catch (error) {
        return error.message;
    }
}

const url = "https://jsonplaceholder.typicode.com/todo/1";
const response = await apiRetry(url, 5);
console.log(response);

async function apiRetryIterative(url, retryCount) {
    try {
        while (retryCount > 0) {
            console.log(`Try: ${retryCount}`);
            const response = await fetch(url);
            if (response.ok) {
                return response.json();
            }
            retryCount--;
        }
        throw new Error("Out of retries");
    } catch (error) {
        return error.message;
    }
}

// const url = "https://jsonplaceholder.typicode.com/todo/";
// const response = await apiRetryIterative(url, 5);
// console.log(response);
