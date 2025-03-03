// console.log("functional_constructor_and_error");

// constructor function 
function Person(name, age){
    this.name = name;
    this.age = age;
}

// constructor function 
function Car(make, model){
    this.make = make;
    this.model = model;
}

// Object creation
let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);


// constructor function and function name should be capital (first character)
function Tea(type){
    this.type = type;
    this.describe = function (){
        return `this is a cup of ${this.type}`;
    };
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());



// constructor funciton and prototype --------------------

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} make a sound`;
}

let dog = new Animal("Dog");
// console.log(dog.sound());

let Cat = new Animal("Cat");
// console.log(Cat.sound());



// error check when Drink function called without new keyword 
function Drink(name){
    if (!new.target){
        throw new Error("Drink mus be called with new keyword");        
    }

    this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");  // without new keyword

console.log(tea)
console.log(coffee);