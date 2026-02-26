// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.

type ReadOnlyUser<T> = {
    readonly [K in keyof T]: T[K];
};
type StringifiedUser<T> = {
    [K in keyof T]: string;
};
type OptionalAndNullableUser<T> = {
    [K in keyof T]?: T[K] | null;
};
type User = {
    name: string;
    email: string;
    age: number;
};

const user: ReadOnlyUser<User> = {
    name: "bob",
    email: "bob@gmail.com",
    age: 23,
};

const userStringfied: StringifiedUser<User> = {
    name: "bob",
    email: "bob@gmail.com",
    age: "23",
};

const userOptionalNullable: OptionalAndNullableUser<User> = {
    email: "bob@gmail.com",
    age: null,
};

console.log(user);
console.log(userStringfied);
console.log(userOptionalNullable);

