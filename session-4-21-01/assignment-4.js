function masterClone(obj) {
    const newObj = {};
    for (key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = masterClone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return Array.isArray(obj) ? Array.from(Object.values(newObj)) : newObj;
}
const obj = {
    name: "John",
    address: {
        city: {
            name: "Ahmedabad",
            locality: "Naranpura",
        },
    },
};

const deepObj = masterClone(obj);
deepObj.address.city.locality = "Mumbai";
console.log(obj);
console.log(deepObj);

// const arr = [1, 3, 4, 5, [2, 1, 3, [4,5,6,7]]];
// const newArr = masterClone(arr);
// newArr[4][3][0] = 35
// newArr[4][0] = 24
// console.log(arr);
// console.log(newArr);

const arr = [1, 3, 4, [5, 6, 7, 7]];
const newArr = masterClone(arr);
newArr[3][0] = 50;
console.log(arr);
console.log(newArr);

