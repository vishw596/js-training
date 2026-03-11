// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union

type BaseOrder = {
    orderId: number;
    orderStatus: "UNDELIVERED" | "ON THE WAY" | "DELIVERED";
};

type Product = {
    name: string;
    price: number;
    category: string;
};
type OrderItems = {
    products: Product[];
    orderAmount: number;
};

type Order = BaseOrder & Product;

interface OrderItemsInterface {
    products: Product[];
    orderAmount: number;
}
interface OrderInterface extends OrderItemsInterface {
    orderId: number;
    orderStatus: "UNDELIVERED" | "ON THE WAY" | "DELIVERED";
}

const order: OrderInterface = {
    orderId: 1,
    orderStatus: "UNDELIVERED",
    products: [{ name: "laptop", price: 70000, category: "Electornics" }],
};
// removing one property is giving below error
// Property 'orderAmount' is missing in type '{ orderId: number; orderStatus: "UNDELIVERED"; products: { name: string; price: number; category: string; }[]; }' but required in type 'OrderInterface'




type ResponseBody = {
    responseBody: string;
};
type ResponseStatus = {
    status: "PENDING" | "SUCCESS" | "FAILED";
};

type ApiResponse = ResponseBody & ResponseStatus

// property status is missing in type {responseBody:string} but required in ResponseStatus
const res:ApiResponse = {
    responseBody:"this is the response",
}



// Decide which approach feels clearer and why
// using intersection with types feels clearer as using interface we cannot directly use & for intersection
// in interface we can achieve intersection using extends

// Identify when intersection is better than union
// when we have to derive a new type from exisiting types
// for example we have to derive Order from two types BaseOrder which contains status and id and OrderItems which contains products and order amount for these we can use intersection.
