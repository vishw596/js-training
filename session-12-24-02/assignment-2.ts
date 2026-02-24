// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type FirstArgument<T> = T extends (...args: infer P) => infer R ? P[0] : T;

function getUser(id: string, active: boolean,temp:number) {
    return {
        id,
        active,
    };
}

type GetUserFirstArgType = FirstArgument<typeof getUser> //string


