// Assignment 7
// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.

type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
    isActive: boolean;
}
// const userEmailReadOnly: {
//     id: string;
//     name: string;
//     isActive: boolean;
// } & {
//     readonly email: string;
//     readonly role: "ADMIN" | "CUSTOMER";
// }
const userEmailReadOnly: ReadonlyByKeys<User, "email" | "role"> = {
    id: "user@123",
    name: "john doe",
    email: "john@gmail.com",
    role: "ADMIN",
    isActive: true,
};
// gives error that Cannot assign to 'email' because it is a read-only property.
// userEmailReadOnly.email = "demo@gmail.com"
console.log(userEmailReadOnly);

type NonNullableFields<T> = {
    [K in keyof T]: Exclude<T[K], null | undefined>;
};
type UserNullable = {
    id: string;
    name: string | null;
    email: string | null | undefined;
    role: "ADMIN" | "CUSTOMER";
    isActive: boolean | undefined;
};
// const nonNullUser: {
//     id: string;
//     name: string;
//     email: string;
//     role: "ADMIN" | "CUSTOMER";
//     isActive: boolean;
// }
const nonNullUser: NonNullableFields<UserNullable> = {
    id: "user@345",
    name: "vishw",
    email: "vishw@gmail.com",
    role: "CUSTOMER",
    isActive: false,
};

console.log(nonNullUser);
