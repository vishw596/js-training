class Counter {
    static count = 0;
    count = 10;

    constructor() {
        Counter.count++;
    }

    getCount() {
        return this.count;
    }

    static getStaticCount() {
        return this.count;
    }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount()); // logs 10 as each object has count variable declared on line which is initialized with 10 and getCount is called on c1 object so inside the getCount() function this will point to the c1 object
console.log(Counter.getStaticCount()); // logs 2 as this refers to class itself in static methods and the value of static property count is incremented when the constructor of the class is called here the constructor is called two times so the value of Counter.count will be 2.
console.log(c1.getStaticCount()); // it logs error c1.getStaticCount is not a function as static methods and properties cannot be accessed by the object they can be accessed using class name only
