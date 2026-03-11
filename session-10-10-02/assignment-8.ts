// Assignment 8: Typed Functions
// Write a function with required and optional parameters
// Define return types explicitly
// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter
// Call it with and without the optional argument
// How does TypeScript enforce correctness here?

type User = {
    name: string;
    email: string;
    avatarUrl?: string;
};

const userArr: User[] = [];

function addUser(name: string, email: string, avatarUrl?: string): User {
    if (avatarUrl) {
        const user: User = {
            name,
            email,
            avatarUrl,
        };
        return user;
    }
    const user: User = {
        name,
        email,
    };
    return user;
}
console.log(addUser("user1","user1@gmail.com","user-image.com"));

// here typescript enforces correctness by making sure that optional parameter is not undefined using type guards if type guard is not used and we include avatarUrl in user object of type User then ts gives error that type string | undefined is assignable to type string
