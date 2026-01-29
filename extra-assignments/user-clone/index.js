const users = [];
let clonedUsers = [];
const userNameInput = document.getElementById("name");
const userAgeInput = document.getElementById("age");
const cloneUsersListContainer = document.createElement("ul");
cloneUsersListContainer.setAttribute("id", "cloneList");
document.querySelector("body").appendChild(cloneUsersListContainer);

function User(name, age) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.age = age;
}
User.prototype.greet = function () {
    alert(`Hello ${this.name}`);
};

function addUsers() {
    const userName = userNameInput.value;
    const userAge = parseInt(userAgeInput.value);
    if (userAge < 0 || isNaN(userAge)) {
        return;
    }

    const newUser = new User(userName, userAge);
    users.push(newUser);

    const usersListContainer = document.getElementById("userList");
    renderUsers(usersListContainer, users);
}
function cloneUsers() {
    clonedUsers = masterClone(users);
    for (const user of clonedUsers) {
        user.age += 5;
        user.id = crypto.randomUUID();
        Object.setPrototypeOf(user, User.prototype);
    }
    console.log(users);
    console.log(clonedUsers);
    const listContainer = document.getElementById("cloneList");
    renderUsers(listContainer, clonedUsers);
}

const addBtn = document.getElementById("addUser");
addBtn.addEventListener("click",addUsers);

const cloneBtn = document.getElementById("cloneUsers");
cloneBtn.addEventListener("click", cloneUsers);

function renderUsers(listContainer, users) {
    listContainer.innerHTML = "";
    const userList = users.map((user) => {
        const list = document.createElement("li");
        list.setAttribute("id", `user-${user.id}`);
        list.innerHTML = `<div>Name-${user.name} Age-${user.age}</div>`;
        list.addEventListener("click", user.greet.bind(user));
        return list;
    });
    userList.forEach((list) => {
        listContainer.appendChild(list);
    });
}
function masterClone(obj) {
    if (typeof obj !== "object") return obj;
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object") {
                newObj[key] = masterClone(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
