// Assignment 3: Union Types
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely

type Admin = {
    role: "admin";
    permissions: string[];
};
type Customer = {
    role: "customer";
    purchaseHistory: number[];
};
type Guest = {
    role: "guest";
    productsVisited: string[];
};
type User = Admin | Customer | Guest;

function getRoleProperties(user: User): string {
    if (user.role === "admin") {
        return `Permissions of admin is ${user.permissions}`;
    } else if (user.role === "customer") {
        return `Purchase History of customer ${user.purchaseHistory}`;
    } else if (user.role === "guest") {
        // here it will give an error purchaseHistory does not exist on type Guest
        return `Product visited by guest user ${user.purchaseHistory}`;
    }
    return `Invalid Role`;
}
const user: User = {
    role: "admin",
    permissions: ["READ", "WRITE", "DELETE"],
};
console.log(getRoleProperties(user));

interface AdminInterface {
    role: "admin";
    permissions: string[];
}

interface CustomerInterface {
    role: "customer";
    purchaseHistory: number[];
}

type unionType = AdminInterface | CustomerInterface;

function getRolePropertiesInterface(user: unionType): string {
    if (user.role === "admin") {
        return `Permissions of user ${user.permissions}`;
    } else if (user.role === "customer") {
        return `Purchase History of customer ${user.purchaseHistory}`;
    }
    return `Invalid Role`;
}
console.log(getRolePropertiesInterface({ role: "admin", permissions: ["READ", "WRITE"] }));
