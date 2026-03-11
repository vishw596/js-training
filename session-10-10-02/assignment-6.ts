// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function
// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
// Create an interface for a Product
// Create a variable that follows this interface
// Why are interfaces preferred in large projects?

interface User {
    name: string;
    email: string;
}

interface Admin extends User {
    role: "admin";
    permissions: string[];
}

interface Customer extends User {
    role: "customer";
    purchaseHistory: string[];
}

function getName(user: User): string {
    return user.name;
}

const adminUser: Admin = {
    name: "admin1",
    role: "admin",
    email: "admin1@gmail.com",
    permissions: ["READ", "WRITE"],
};

const customer: Customer = {
    name: "Bob",
    role: "customer",
    email: "bob@gmail.com",
    purchaseHistory: [],
};
console.log(getName(adminUser));
console.log(getName(customer));

interface ApiRepsonse {
    status: "PENDING" | "SUCCESS" | "FAILED";
    headers: string;
}
interface JsonResponse extends ApiRepsonse {
    type: "json";
    body: object;
}

function getResponseStatus(res: ApiRepsonse) {
    return res.status;
}
const res: JsonResponse = {
    type: "json",
    body: {
        message: "json response",
    },
    status: "SUCCESS",
    headers: "content-type:application/json",
};

console.log(getResponseStatus(res));

interface Product {
    name:string;
    category:string;
    price:number
}

const laptop:Product = {
    name:"Laptop",
    category:"Electronics",
    price:50000
}