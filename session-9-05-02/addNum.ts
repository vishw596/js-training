function addNum(a:number,b:number):number|string{
    return a+b > 100 ? String(a+b):a+b
}

console.log(typeof addNum(400,3));
