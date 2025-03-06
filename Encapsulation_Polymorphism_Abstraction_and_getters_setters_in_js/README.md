# **📌 Complete Guide to OOP Concepts in JavaScript**
In this guide, we will cover **Encapsulation, Polymorphism, Abstraction, and Getter-Setter Methods** in JavaScript, along with real-world examples to help you implement them in your projects.

---

# **📌 1️⃣ Encapsulation (Data Hiding)**
Encapsulation is the concept of **binding data (properties) and methods (functions) inside an object** while restricting direct access to some of its components.  

🔹 It helps **protect data** from being directly modified.  
🔹 We achieve encapsulation using **private fields (`#`), closures, or getters & setters**.

## **🔹 Example Without Encapsulation (Bad Practice)**
```js
class User {
  constructor(name, password) {
    this.name = name;
    this.password = password; // ❌ Password is publicly accessible
  }
}

let user1 = new User("Dheeraj", "12345");
console.log(user1.password); // ❌ Exposed (security issue)
```
🔴 **Problem:** Anyone can access or change `password`.

---

## **🔹 Example With Encapsulation (Using Private Fields)**
Using the **`#` symbol**, we can create private fields that **cannot be accessed outside the class**.

```js
class User {
  #password; // Private property

  constructor(name, password) {
    this.name = name;
    this.#password = password; // Now private
  }

  login(pass) {
    if (pass === this.#password) {
      console.log(`${this.name} logged in`);
    } else {
      console.log("Incorrect password");
    }
  }
}

let user1 = new User("Dheeraj", "12345");

console.log(user1.password); // ❌ Undefined (private field)
user1.login("12345"); // ✅ Dheeraj logged in
user1.login("wrongPass"); // ❌ Incorrect password
```
✅ **Benefits of Encapsulation:**  
✔ Prevents unauthorized access.  
✔ Keeps data secure.  
✔ Controls data modification.  

---

# **📌 2️⃣ Polymorphism (Method Overriding & Overloading)**
Polymorphism allows **one method or function to have multiple behaviors** depending on the object calling it.  

✅ **Types of Polymorphism in JavaScript**:  
1. **Method Overriding (Dynamic Polymorphism)** – A child class provides a different implementation of a parent method.  
2. **Method Overloading (Not natively supported in JS, but can be simulated).**  

---

## **🔹 Example of Method Overriding (Polymorphism)**
When a child class **overrides** a method from the parent class.

```js
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark! Bark!"); // Overriding parent method
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

let myDog = new Dog();
let myCat = new Cat();

myDog.makeSound(); // ✅ Bark! Bark!
myCat.makeSound(); // ✅ Meow! Meow!
```
✅ **Benefits of Polymorphism:**  
✔ A **single interface** (`makeSound()`) works differently for each subclass.  
✔ **Reduces code duplication** and increases flexibility.  

---

## **🔹 Example of Method Overloading (Simulated in JS)**
JavaScript does **not support method overloading directly** (like Java or C++), but we can **simulate it** using default parameters or checking arguments.

```js
class MathOperations {
  add(a, b, c = 0) {
    return a + b + c;
  }
}

let calc = new MathOperations();
console.log(calc.add(2, 3)); // ✅ 5
console.log(calc.add(2, 3, 4)); // ✅ 9
```
✅ **Method Overloading Simulation:**  
✔ Uses default parameters to support different cases.  
✔ Allows flexible function calls.  

---

# **📌 3️⃣ Abstraction (Hiding Implementation Details)**
Abstraction means **hiding complex logic** and exposing only the necessary parts of an object.

🔹 It allows users to interact with an object **without needing to understand its internal details**.  
🔹 We use **private methods (`#method`) or abstract classes** to achieve abstraction.

---

## **🔹 Example Without Abstraction (Bad Practice)**
```js
class Car {
  constructor() {
    this.engineStatus = false;
  }

  startEngine() {
    console.log("Starting engine...");
    this.engineStatus = true;
  }

  drive() {
    if (!this.engineStatus) {
      console.log("Start the engine first!");
      return;
    }
    console.log("Car is moving...");
  }
}

const myCar = new Car();
myCar.startEngine();
myCar.drive();
```
🔴 **Problem:** Users must manually start the engine before driving.

---

## **🔹 Example With Abstraction (Using Private Method)**
We **hide** the `startEngine()` logic inside the `drive()` method.

```js
class Car {
  #startEngine() { // Private method (not accessible outside)
    console.log("Engine started...");
  }

  drive() {
    this.#startEngine(); // Automatically start engine
    console.log("Car is moving...");
  }
}

const myCar = new Car();
myCar.drive(); // ✅ Engine started... Car is moving...
```
✅ **Benefits of Abstraction:**  
✔ Users don’t need to know how the engine starts.  
✔ Simplifies the interface.  
✔ Prevents accidental misuse.  

---

# **📌 4️⃣ Getter & Setter Methods in JavaScript**
Getters (`get`) and Setters (`set`) allow controlled access to private properties.

🔹 **Getter (`get`)** – Used to access a property securely.  
🔹 **Setter (`set`)** – Used to modify a property while **validating the input**.  

---

## **🔹 Example Without Getter & Setter (Bad Practice)**
```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let user1 = new User("Dheeraj", 25);
user1.age = -5; // ❌ Invalid age (no validation)
console.log(user1.age); // ❌ -5
```
🔴 **Problem:** No validation – age can be **negative**.

---

## **🔹 Example With Getter & Setter (Best Practice)**
We **control access** to `age` and **validate the input**.

```js
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Use _ to store private-like variables
  }

  get age() {
    return this._age; // Securely return the value
  }

  set age(value) {
    if (value < 0) {
      console.log("❌ Age cannot be negative!");
    } else {
      this._age = value;
    }
  }
}

let user1 = new User("Dheeraj", 25);
console.log(user1.age); // ✅ 25

user1.age = -5; // ❌ Age cannot be negative!
user1.age = 30; // ✅ Age updated
console.log(user1.age); // ✅ 30
```
✅ **Benefits of Getters & Setters:**  
✔ **Encapsulation** – Protects direct modification.  
✔ **Validation** – Prevents invalid values.  

---

# **📌 Final Summary**
| **OOP Concept** | **Description** | **Example** |
|--------------|-------------|---------|
| **Encapsulation** | Hides data and methods inside an object | Private fields (`#field`) |
| **Polymorphism** | Same method behaves differently in different classes | `makeSound()` overridden in `Dog` and `Cat` |
| **Abstraction** | Hides unnecessary details and exposes only what’s needed | Private methods (`#startEngine()`) |
| **Getter & Setter** | Controls access to object properties | `get age()`, `set age(value)` |

---

# **🚀 Next Steps**
✔ **Implement these concepts in your JavaScript projects** for clean and modular code.  
✔ **Practice by building real-world applications**, like **user authentication systems** using encapsulation.  

Would you like help implementing these concepts in a project? 🚀