function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);//logs Generic because when we use new keyword following things happens
//  An object is created
//  Constructor function's prototype is linked to the object 
//  this points to the object and constructor function gets called and initialize the values
//  if constructor function does not return anything then this which is pointing to the object created is returned 
//  if constructor function return any other object then that object will be returned so here myPhone will be  { brand: "Generic",os: "Android"} and logs brand generic

console.log(myPhone.getBrand); //logs undefined because the object the consturctor function is returning is not linked with the prototype of the constructor function so the prototype chain of myPhone will be myPhone->Object.prototype->null and it will not find the getBrand in this chain and logs undefined
