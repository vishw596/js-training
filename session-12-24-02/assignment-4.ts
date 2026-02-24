// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .


abstract class Service<T> {
    abstract execute(): T;
    
}
type User = {
    name: string;
    email: string;
};
class UserService extends Service<User> {
    execute(): User {
        console.log("Executing User service");
        return {
            name: "john",
            email: "john123@gmail.com",
        };
    }
}
const userService:UserService = new UserService();
console.log(userService.execute());

