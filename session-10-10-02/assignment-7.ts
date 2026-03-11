// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum PaymentStatus {
    INITIATED = "INITIATED",
    SUCCESS = "SUCCESSFULL",
    FAILED = "FAILED",
}

function paymentStatus(status: PaymentStatus) {
    console.log(`Payment is ${status}`);
}

// it gives error that arguement of type pending is not assignable to parameter of type paymentstatus

paymentStatus("PENDING")

// Why enums are better than magic strings?
// because by using enums we can identify the error arise due to typos or passing invalid values at compile-time
// also it eliminates the manual change of value everywhere in code if there is some change when using magic string while in enum
// we just have to change value at one place where it declared increasing reusability and readability
