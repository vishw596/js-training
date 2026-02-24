// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string


function format(value:number):string;
function format(value:Date):string;
function format(value:number|Date):string{
    return value.toString()
}
console.log(format(23));
console.log(format(new Date()));

