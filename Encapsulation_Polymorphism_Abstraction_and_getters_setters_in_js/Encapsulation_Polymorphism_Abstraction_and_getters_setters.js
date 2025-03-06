console.log("Output => \n");

// Encapsulation_Polymorphism_Abstraction_and_getters_setters_in_js

// ( # ) Hash Symbol is used for private

// -------------------- Encapsulation ----------------------
class BankAccount {
    #balance = 0; // # symbol for hidding the data like balance

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

// create object
let account = new BankAccount();

// we can not access the balance data because balance is encapsulated
// console.log(account.#balance);
// console.log(account.getBalance());




// --------------- Abstraction ------------------------
class CoffeMachine {
    start() {
        // call DB
        // filter val
        return `Stating the machine...`
    }

    brewCoffe() {
        //complext calculation
        return `Brewing coffee`;
    }

    // wrap in one method called Abstraction
    pressStartButton() {
        let messageOne = this.start();
        let messageTwo = this.brewCoffe();
        return `${messageOne} \n ${messageTwo}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.pressStartButton());

// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());





//  -------------------- Polymorphism ----------------------

class Bird {
    fly() {
        return `Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly...`;
    }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());





// Static ----------------------------
class Calculator {
    // Static method
    static add(a, b) {
        return a + b;
    }

    // Instance method
    subtract(a, b) {
        return a - b;
    }
}

// Calling the static method directly on the class
// console.log(Calculator.add(5, 3)); // Output: 8

// Creating an instance of the class
const calc = new Calculator();

// Calling the instance method on the instance
// console.log(calc.subtract(5, 3)); // Output: 2




// Getter and setter ---------------

/*
In JavaScript, getter and setter methods allow you to define how to access and modify the properties of an object. They provide a way to encapsulate the internal representation of the data, allowing you to control how the data is accessed and modified.

Getter Method
A getter method is used to access the value of a property. It allows you to execute some code when a property is read. You define a getter method using the get keyword.

Setter Method
A setter method is used to modify the value of a property. It allows you to execute some code when a property is set. You define a setter method using the set keyword.

Example
Let's add getter and setter methods to the Employee class to manage the name property.


*/ 

class Employee {
    constructor(name) {
        this._name = name; // Use an underscore to indicate a private variable
    }

    // Getter method for name
    get name() {
        return this._name;
    }

    // Setter method for name
    set name(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.error('Invalid name');
        }
    }
}

// Example usage
const emp = new Employee('John Doe');
// console.log(emp.name); // Output: John Doe

emp.name = 'Jane Smith';
// console.log(emp.name); // Output: Jane Smith

// emp.name = ''; // Output: Invalid name
// console.log(emp.name); // Output: Jane Smith




class Employee1{
    #salary;
    constructor(name, salary){
        if (salary < 0){
            throw new Error("Salary  cannot be in negative!");            
        }

        this.name = name;
        this._salary = salary;  // underscore is used for private 
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if (value < 0){
            console.error("Invalid Salary");
        } else {
            this._salary = value;
        }
    }
}

let emp1 = new Employee1("Alice", -50000);
console.log(emp1._salary);