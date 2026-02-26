// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
    isActive: boolean;
}

type UserPublicProfile = Omit<User, "email" | "isActive">;

const userPublic: UserPublicProfile = {
    id: "user@234",
    name: "john doe",
    role: "CUSTOMER",
};
console.log(userPublic);

type UserMap = Record<User["id"], User>;

const userMap: UserMap = {
    "user@234": {
        id: "user@234",
        name: "john doe",
        email:"john@gmail.com",
        role: "CUSTOMER",
        isActive:false
    },
    "user@123": {
        id: "user@123",
        name: "root",
        email:"admin@gmail.com",
        role: "ADMIN",
        isActive:true
    }
};
console.log(userMap);

