// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.

function activateUser<T extends { isActive: boolean }>(user: T): T {
    user.isActive = true;
    return user;
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const user: User = {
    id: 1,
    name: "john",
    email: "john@gmail.com",
    isActive: false,
};
console.log(activateUser(user));
console.log(activateUser({ id:2,name: "bob", email: "bob@gmail.com" })); //gives error Object literal may only specify known properties, and 'name' does not exist in type '{ isActive: boolean; }

type UserDetails = {
    id: number;
    email: string;
};
function getUserDetails<T extends UserDetails>(user: T): UserDetails {
    return {
        id: user.id,
        email: user.email,
    };
}
console.log(getUserDetails(user))