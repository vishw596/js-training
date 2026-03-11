// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

function convertStringToUpperCase(str: any) {
    return str.toUpperCase();
}

function convertStringToUpperCaseUnknown(str: unknown) {
    if (typeof str === "string") {
        return str.toUpperCase();
    }
    return `Please give string as an argument`;
}

let anyVariable: any = "str";
console.log(convertStringToUpperCase(anyVariable));
anyVariable = 34;
// here it will give error that .toUpperCase is not a function on runtime typescript will not give any error here
// console.log(convertStringToUpperCase(anyVariable));

const unknownVariable: unknown = "str";
// here type of the variable passed to the function will checked by type guard if it is string then only we can use toUpperCase() otherwise ts will give an error that variable is type of unknown if we call toUpperCase method on it.
console.log(convertStringToUpperCaseUnknown(unknownVariable));
// unknown forces to write more safer code
