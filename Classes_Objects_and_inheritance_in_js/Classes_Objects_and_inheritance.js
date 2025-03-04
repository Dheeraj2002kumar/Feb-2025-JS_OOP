// console.log("Classes_Objects_and_inheritance_in_js");
console.log("Output => \n");
/*

------------- OOP ------------------------

Object Oriented Programming:
    1. Encapsulation,
    2. Inheritance,
    3. Polymorphism, and 
    4. Abstraction.

*/

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2025,
    start: function (){
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start());




// constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

let Dheeraj = new Person("Dheeraj Kumar", 22);
// console.log(`${Dheeraj.name} and age ${Dheeraj.age}`);






//prototype and prototype will chain
function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} make a sound`;
}

Array.prototype.dheeraj = function(){
    return `Custom method ${this}`;
}

let myArr = [1, 2, 3];
let myNewArr = [1, 2, 3, 4, 5];

// console.log(myArr.dheeraj())
// console.log(myNewArr.dheeraj())




// Class and object ----------------------
class Vehicle{
    // constructor or constructor method
    constructor(make, model){
        this.make = make;
        this.model = model;
    } 

    // function or method
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

// Inheritance
class Car extends Vehicle {
    drive(){
        return `${this.make} : This is a inheritance example`;
    }
}

// myCar is Object
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

// vehOne is Object
let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);
