// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers


let num1 = 10;
const num2 = 123;
//type string is not assignable to type number
// num1 = "str"
// cannot assign to num2 becuase it is a constant
// num2 = "str1"

// ts infers void as return type of a function

function fn(){
    console.log("this is fn with return type void");
}

fn()
