console.log("Output => \n");

// Encapsulation_Polymorphism_Abstraction_and_getters_setters_in_js



// -------------------- Encapsulation ----------------------
class BankAccount{
    #balance = 0; // # symbol for hidding the data like balance

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

// create object
let account = new BankAccount();

// we can not access the balance data because balance is encapsulated
// console.log(account.#balance);
// console.log(account.getBalance());




// --------------- Abstraction ------------------------
class CoffeMachine{
    start(){
        // call DB
        // filter val
        return `Stating the machine...`
    }

    brewCoffe(){
        //complext calculation
        return `Brewing coffee`;
    }

    // wrap in one method called Abstraction
    pressStartButton(){
        let messageOne = this.start();
        let messageTwo = this.brewCoffe();
        return `${messageOne} \n ${messageTwo}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.pressStartButton());

// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
