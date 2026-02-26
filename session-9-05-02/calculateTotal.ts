// Create a variable prices as an pricesay of numbers
// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum
// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100


function calculateTotal(prices:number[]):number{
    const sum:number = prices.reduce((acc , el)=>acc+el,0)
    return sum
}

const prices:number[] = [1,2,3,4,5,6]
console.log(calculateTotal(prices));
