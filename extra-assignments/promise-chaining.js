// 1. Fetches user data
// 2. Fetches user posts using userId

fetch("https://dummyjson.com/users/1")
    .then((res) => {
        return res.json();
    })
    .then((user) => {
        const { id } = user;
        return fetch(`https://dummyjson.com/users/${id}/posts`);
    })
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        console.log(posts);
    })
    .catch((err) => console.log(err));

async function fetchPosts(userId) {
    try {
        const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
        const { id } = await userResponse.json();
        const postsResponse = await fetch(`https://dummyjson.com/users/${id}/posts`);
        const parsedPosts = await postsResponse.json()
        console.log(parsedPosts);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchPosts(1)
