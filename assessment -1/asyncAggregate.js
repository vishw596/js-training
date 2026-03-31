// 4. JS: Async Data Aggregation Using Promises

// Problem Statement

// You are required to fetch related data from multiple APIs and create a summary.

// Steps

// Fetch a user

// Fetch posts for that user

// Fetch comments for one of the posts

// Combine the results into a single summary object

// Example Output

// {
//   user: "Leanne Graham",
//   postCount: 10,
//   commentCount: 5
// }


// Constraints

// Use Promise.all

// Use async/await

// Handle errors properly

// Return or log a summary object


async function fetchUser(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP STATUS CODE:${response.status}`);
    }
    return response.json();
}

async function fetchPosts(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP STATUS CODE:${response.status}`);
    }
    return response.json();
}

async function fetchComments(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP STATUS CODE:${response.status}`);
    }
    return response.json();
}

async function getSummary() {
    try {
        const summary = {};
        const user = await fetchUser(`https://dummyjson.com/user/5`);
        summary.user = user.firstName;
        const { posts } = await fetchPosts(`https://dummyjson.com/posts/user/${user.id}`);
        summary.postCount = posts.length;
        const {comments} = await fetchComments(`https://dummyjson.com/comments/post/${posts[1].id}`)
        summary.commentCount = comments.length
        return summary;
    } catch (error) {
        throw error;
    }
}

const summary = await getSummary();
console.log(summary);
