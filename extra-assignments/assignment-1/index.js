// ----------------------- Exercise 1-------------------
for (let i = 1; i <= 50; i++) {
    console.log(`${i} is ${i % 2 === 0 ? "Even" : "Odd"}`);
}
// ----------------------- Exercise 2-------------------

function lowerCaseSplitJoin(str) {
    const arr = str.toLowerCase().split(" ");
    return arr.join("_");
}
console.log(lowerCaseSplitJoin("VS CODE"));

// ----------------------- Exercise 3-------------------


const arr = [1, 3, 4, 5, 6];

const multiplyBy3 = arr.map((el) => el * 3);
console.log(multiplyBy3);



// ----------------------- Exercise 4-------------------

const ages = [40, 21, 32, 12, 23, 11, 10];

const voters = ages.filter((age) => age > 18);

console.log(voters);

// ----------------------- Exercise 5-------------------

const user = {
    name:"abcdes",
    printName:function () {
        return this.name
    }
}

console.log(user.printName());
