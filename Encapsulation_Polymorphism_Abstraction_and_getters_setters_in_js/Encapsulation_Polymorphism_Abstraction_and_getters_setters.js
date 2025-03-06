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
console.log(Calculator.add(5, 3)); // Output: 8

// Creating an instance of the class
const calc = new Calculator();

// Calling the instance method on the instance
console.log(calc.subtract(5, 3)); // Output: 2