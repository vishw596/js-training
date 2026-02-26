// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.


function updateField<T,K extends keyof T>(object:T,key:K,value:T[K]):T{
    object[key] = value
    return object
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const user:User = {
    id:1,
    name:"john doe",
    email:"johndoe@gmail.com",
    isActive:false
}
updateField(user,"email","john123@gmail.com")
console.log(user);
