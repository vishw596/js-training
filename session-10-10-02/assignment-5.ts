// Assignment 5: Type Aliases
// Create reusable aliases for union and intersection types
// Refactor earlier assignments to use these aliases
// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables
// How does this improve readability?

// union
type Circle = {
    name:"circle";
    radius:number
}
type Square = {
    name:"square";
    sideLength:number
}
type Shape = Square | Circle

const shape1:Shape = {
    name:"circle",
    radius:10
}

// intersection
type User = {
    name: string;
};

type Admin = User & { permissions: string[] };

type Age = string | number;

const adminUser: Admin = { name: "admin1", permissions: ["READ", "WRITE"] };
const ageNum: Age = 20;
const ageStr: Age = "40";


// type aliases improves readability by avoid repeating same types everywhere in the code and using type alias whereever we want to assign a type to variable
