let computer = {
    CPU: 12,
    RAM: 16,
    SSD: 512,
    getSpecs: function() {
        return `CPU: ${this.CPU}, RAM: ${this.RAM}GB, SSD: ${this.SSD}GB`;
    }
};

let laptop = {
    ScreenSize: 15,
    Weight: 2
};

laptop.__proto__ = computer;
console.log(laptop.getSpecs()); // "CPU: 12, RAM: 16GB, SSD: 512GB"







// --------------------------- prototype example ---------------------------

// In JavaScript, a prototype is an object from which other objects inherit properties. It's a key feature of JavaScript's object-oriented programming model.

// When you create a function in JavaScript, the engine automatically attaches a `prototype` property to it. This property is an object that contains properties and methods that should be inherited by instances of the function.

// Here's an example to illustrate this:


// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating an instance of Person
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


// In this example, the `greet` method is added to the `Person` prototype. This means all instances of `Person` (such as `person1`) will inherit the `greet` method and can use it.

// Prototypes are fundamental to how inheritance works in JavaScript. If you're looking to dive deeper, I can provide more examples or details about specific aspects of prototypes.








// ------------------ prototype about full explanation ----------------

