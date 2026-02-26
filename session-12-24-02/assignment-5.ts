// Create a constructor type for UserRepository .
// Create a callable type that formats User name.

type Constructor<T> = new (...args: any[]) => T;

type User = {
    id: string;
    username: string;
    email: string;
    age: number;
};

abstract class BaseRepository<T> {
    abstract getById(id: string): T;
}
class UserRepository extends BaseRepository<User> {
    getById(id: string): User {
        return {
            id,
            username: "Alex",
            email: "alex@test.com",
            age: 25,
        };
    }
}

function getInstance<T>(ctor: Constructor<T>): T {
    return new ctor();
}
const userRepo = getInstance(UserRepository);
const user = userRepo.getById("2");
console.log(user);

type Format = {
    (name: string): string;
};

const userNameFormat: Format = (name: string) => name.toUpperCase();
console.log(userNameFormat(user.username));
