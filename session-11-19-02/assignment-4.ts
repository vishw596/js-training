// Assignment 4
// Create a constant adminUser .

// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.

const adminUser = {
    name: "john doe",
    email: "john@gmail.com",
    age: 23,
    permission: ["read", "write", "delete"],
};

type Admin = typeof adminUser;

