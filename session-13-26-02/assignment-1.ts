// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.

type PaymentState =
    | { status: "pending" }
    | { status: "failed"; failMessage: string }
    | { status: "success"; paymentReceiptNumber: number };

function handlePayments(payment: PaymentState) {
    switch (payment.status) {
        case "failed":
            return `Payment failed with reason :${payment.failMessage}`;
        case "pending":
            return "Processing Payment...";
        case "success":
            return `Payment Successfull receipt no.${payment.paymentReceiptNumber}`;
        default:
            const _exhaustiveCheck: never = payment;
            return _exhaustiveCheck;
    }
}

console.log(handlePayments({ status: "success", paymentReceiptNumber: 2003 }));

type ApiResponse<T> =
    | { status: "success"; data: T }
    | { status: "pending" }
    | { status: "error"; error: string };

function isSuccess<T>(response: ApiResponse<T>): response is { status: "success"; data: T } {
    return response.status === "success";
}
function isError<T>(response: ApiResponse<T>): response is { status: "error"; error: string } {
    return response.status === "error";
}
type Product = {
    name: string;
    category: string;
    price: number;
};
function fetchProduct(): Promise<ApiResponse<Product>> {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve({
                status: "success",
                data: {
                    name: "Laptop",
                    category: "Electronics",
                    price: 60000,
                },
            });
        } else {
            reject("Unable to fetch product");
        }
    });
}

async function handleProduct() {
    const response = await fetchProduct();
    if (isSuccess(response)) {
        return response.data;
    }
    if (isError(response)) {
        return response.error;
    }
}

handleProduct()
    .then((product) => console.log(product))
    .catch((err) => console.log(err));
