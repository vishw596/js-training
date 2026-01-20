// Exercise 1
const orders = [
    { price: 100, quantity: 2 },
    { price: 250, quantity: 1 },
    { price: 75, quantity: 4 },
    { price: 500, quantity: 3 },
];

const revenue = orders.map((el) => el.price * el.quantity).reduce((acc, total) => (acc += total), 0);
console.log(revenue);
// Excercise 2
const sentence = "This string is used to count the count the number word";
const wordCount = sentence.split(" ").reduce((acc, word) => {
    if (acc[word]) {
        acc[word] += 1;
    } else {
        acc[word] = 1;
    }
    return acc;
}, {});
console.log(wordCount);
// Exercise 3
const activeUsers = [
    { id: 1, name: "Alice", isActive: true },
    { id: 3, name: "Bob", isActive: true },
    { id: 5, name: "John", isActive: false },
];

const filterArr = activeUsers.filter((user) => user.isActive)
console.log(filterArr);
// Exercise 4
const obj = {
    name:"John",
    email:"john@gmail.com",
    marks:{
        maths:30,
        science:60
    }
}

const newObj = {...obj}
newObj.marks.maths = 43;
console.log(obj.marks.maths);

//Exercise 5

const str = "This string is used to count the count the number word";

function stringManipulate(str){
    return str.split(" ").filter((el)=> el.length >= 4).join("-")
}
console.log(stringManipulate(str));
