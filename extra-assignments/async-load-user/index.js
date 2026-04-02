// Search a GitHub user by username and display:
// Profile info
// List of public repositories

const input = document.getElementById("github");
const btn = document.getElementById("btn");
const result = document.getElementById("user-profile");
const repoContainer = document.getElementById("repo-container");
const cacheMap = new Map();

async function fetchUserData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("Username not found");
        } else {
            throw new Error(`HTTP Error status code ${response.status}`);
        }
    }
    const { name, login } = await response.json();
    return { name, login };
}

async function fetchUserRepo(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("Username not found");
        } else {
            throw new Error(`HTTP Error status code ${response.status}`);
        }
    }
    const data = await response.json();
    return data.map((el) => {
        return { name: el.name, url: el.html_url };
    });
}


btn.addEventListener("click", async () => {
    const username = input.value.trim();
    result.textContent = "";
    repoContainer.textContent = "";
    if (username === "") {
        alert("Please enter a username");
        return;
    }
    btn.setAttribute("disabled", "true");
    result.textContent = "Loading.....";

    try {
        let data = null;
        if (cacheMap.has(username)) {
            data = cacheMap.get(username);
            console.log(`data from the map`);
        } else {
            data = await Promise.all([fetchUserData(username), fetchUserRepo(username)]);
            cacheMap.set(username, data);
        }
        const [userProfile, repos] = data;
        result.textContent = `username:${userProfile.login} name:${userProfile.name}`;
        for (const repo of repos) {
            const repodiv = document.createElement("div");
            const repoLink = document.createElement("a");
            repoLink.textContent = "url";
            repoLink.setAttribute("href", repo.url);
            repoLink.setAttribute("target", "_blank");
            repodiv.textContent += `Name: ${repo.name} `;
            repodiv.appendChild(repoLink);
            repoContainer.appendChild(repodiv);
        }
    } catch (error) {
        console.log(error);
        result.textContent = `Username not found!`;
    } finally {
        btn.removeAttribute("disabled");
    }
});
