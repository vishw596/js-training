function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.name = name
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};
Dog.prototype = Animal.prototype

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");
genericAnimal.bark(); // Why does this happen? - Ans. this is happening beacuse on line 16 Dog's prototype is also referencing to the Animal's prototype it means both Animal's and Dog's prototype are pointing to same object and later on line 18 we added bark method to that object so now bark() is accessible to objects creates using Dog as well as object created using Animal 


console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'? this is happening because on line 16 we have assigned Dog's prototype to the Animal's prototype now in animals prototype the value of constructor property will be set to the Animal and when myDog looks for the constructor property it will go through following prototype chain myDog->Animal.prototype->Object.prototype->null at Animal.prototype it will get constructor property value as Animal 