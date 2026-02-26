// Assignment 1
// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number

function wrapInArray<T>(value: T): T[] {
    return [value];
}

console.log(wrapInArray("String"));
console.log(wrapInArray({ name: "john", email: "johndoe@gmail.com" }));

interface PaginatedResponse<T> {
    item: T[];
    total: number;
}
type User = {
    name: string;
    email: string;
};
const userArray: User[] = [
    { name: "john", email: "john@gmail.com" },
    { name: "bob", email: "bob@gmail.com" },
    { name: "alice", email: "alice@gmail.com" },
];
const response: PaginatedResponse<User> = {
    item: userArray,
    total: 2,
};
console.log(response);
