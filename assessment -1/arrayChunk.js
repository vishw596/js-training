// 1. Chunk an Array

// Problem Statement

// Write a function chunkArray(arr, size) that:

// Splits an array into smaller arrays (chunks) of a given size

// Returns a new array containing these chunks

// Uses reduce OR index-based logic

// Do not use loops (for, while)

// Example

// chunkArray([1, 2, 3, 4, 5], 2)
// // Output: [[1, 2], [3, 4], [5]]


// Constraints

// size will always be greater than 0



function arrayChunkSlice(arr, size) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
function arrayChunkReduce(arr, size) {
    return arr.reduce((acc, el) => {
        if (acc.length === 0 || acc[acc.length - 1].length >= size) {
            acc.push([el]);
        } else {
            acc[acc.length - 1].push(el);
        }
        return acc;
    }, []);
}

const arr = [1, 2, 3, 4, 5];
console.log(arrayChunkSlice(arr, 13));