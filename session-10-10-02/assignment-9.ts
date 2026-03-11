// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class
enum TransactionStatus {
    PENDING = "PENDING",
    SUCCUESS = "SUCCESSFULL",
    FAILED = "FAILED",
}
class TransactionService {
    public transactionId: number;
    public transactionStatus: TransactionStatus;
    private paymentGatewayAuthToken: string = "auth-token";

    constructor(transactionId: number, transactionStatus: TransactionStatus) {
        this.transactionId = transactionId;
        this.transactionStatus = transactionStatus;
    }
    public getTransactionReceipt() {
        return this.transactionId;
    }
    protected addTransactionToDB() {
        return { transId: this.transactionId, status: this.transactionStatus };
    }

    public initTransacation(amount: number) {}
}
// getTransactionReceipt and initTransaction method,transactionId and status should be accesible to get the infomation about a transaction
const paymentService = new TransactionService(1,TransactionStatus.PENDING);
console.log(paymentService.getTransactionReceipt());
// gives error that property is private and can be accessed only within class
console.log(paymentService.paymentGatewayAuthToken);

