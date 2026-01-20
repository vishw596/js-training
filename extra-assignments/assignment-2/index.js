// -------------Exercise-1-----------------
function filterMap(arr) {
    return arr.filter((el) => el > 10).map((el) => el * 2);
}

const arr = [1, 2, 4, 30, 20, 34, 21];
console.log(filterMap(arr));

// ---------------Exercise-2------------
function totalPrices(prices) {
    return prices.reduce((acc, price) => (acc += price), 0);
}

const prices = [100, 200, 300];
console.log(totalPrices(prices));

// -----------Exercise-3--------------
const str = `Javascript Is Fun`;
const finalStr = str.toLowerCase().split(" ").join("-");
console.log(finalStr);

// -----------Exercise-4--------------

const students = [
    { name: "student1", marks: 87 },
    { name: "student2", marks: 96 },
    { name: "student3", marks: 78 },
    { name: "student4", marks: 25 },
    { name: "student5", marks: 47 },
    { name: "student6", marks: 53 },
];

const studentsAbove60 = students.filter(student=>student.marks > 60)
console.log(studentsAbove60);


// -----------Exercise-5--------------

const obj = {
    name:"John",
    email:"john@gmail.com"
}
const newObj = {...obj,name:"Bob"}
console.log(newObj);
