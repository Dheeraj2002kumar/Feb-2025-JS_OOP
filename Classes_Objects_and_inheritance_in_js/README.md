# **📌 Object-Oriented Programming (OOP) in JavaScript – A Complete Guide**  
Object-Oriented Programming (**OOP**) is a programming paradigm that helps structure code efficiently by using objects. JavaScript supports **OOP** principles, enabling modular, reusable, and scalable code.  

---

# **📌 What is Object-Oriented Programming (OOP)?**
OOP is a **programming paradigm** that organizes code into objects, which contain **properties (data)** and **methods (functions)**. The goal is to **structure, reuse, and manage** complex programs efficiently.  

### **✅ Key Benefits of OOP**
✔ **Code Reusability** – Avoid duplication using classes and objects.  
✔ **Encapsulation** – Bundle data and methods into objects.  
✔ **Abstraction** – Hide implementation details and expose only necessary parts.  
✔ **Polymorphism** – Use a single interface for different data types.  
✔ **Inheritance** – Create new classes based on existing ones.  

---

# **📌 Four Pillars of OOP in JavaScript**
JavaScript supports OOP through **four key principles**:  
1. **Encapsulation**  
2. **Abstraction**  
3. **Inheritance**  
4. **Polymorphism**  

---

# **1️⃣ Encapsulation (Data Hiding)**
Encapsulation means **binding data (properties) and methods (functions) inside an object** to restrict direct access to certain components.  

## **🔹 Example Without Encapsulation**  
```js
let user = {
  name: "Dheeraj",
  password: "secret123", // ❌ Bad practice (exposed directly)
  login: function () {
    console.log(`${this.name} logged in`);
  },
};

console.log(user.password); // Exposed (security issue)
user.login(); // Dheeraj logged in
```
---

## **🔹 Example With Encapsulation (Using `private` properties)**
To protect data, we use **closures, `Symbol()`, or ES6 private fields** (`#`).  

### **🔹 Encapsulation using `#private` fields (Modern JavaScript)**
```js
class User {
  #password; // Private property

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  login(pass) {
    if (pass === this.#password) {
      console.log(`${this.name} logged in`);
    } else {
      console.log("Incorrect password");
    }
  }
}

let user1 = new User("Dheeraj", "secret123");
console.log(user1.password); // ❌ Undefined (not accessible)
user1.login("secret123"); // ✅ Dheeraj logged in
```
**✅ Benefits of Encapsulation:**  
✔ Protects sensitive data (`#password`).  
✔ Allows controlled access through methods (`login`).  

---

# **2️⃣ Abstraction (Hiding Complexity)**
Abstraction **hides unnecessary details** and only exposes essential features.  

## **🔹 Example Without Abstraction**  
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
    if (this.engineStatus) {
      console.log("Car is moving...");
    } else {
      console.log("Start the engine first!");
    }
  }
}

const myCar = new Car();
myCar.startEngine();
myCar.drive();
```
🔴 **Problem:** Users must manually call `startEngine()` before driving.  

---

## **🔹 Example With Abstraction**
We abstract engine operations inside `drive()`.  
```js
class Car {
  #startEngine() { // Private method
    console.log("Engine started...");
  }

  drive() {
    this.#startEngine(); // Automatically start engine
    console.log("Car is moving...");
  }
}

const myCar = new Car();
myCar.drive(); // ✅ Engine started... Car is moving
```
**✅ Benefits of Abstraction:**  
✔ Users don't need to worry about internal details.  
✔ Reduces complexity.  

---

# **3️⃣ Inheritance (Reusability & Hierarchy)**
Inheritance allows one class to derive properties and methods from another.  

## **🔹 Example Without Inheritance**  
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Buddy");
dog.bark(); // Buddy barks
```
🔴 **Problem:** **Duplicate code** – Both classes (`Animal`, `Dog`) define `name` separately.  

---

## **🔹 Example With Inheritance (`extends` keyword)**
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

let myDog = new Dog("Buddy");
myDog.makeSound(); // ✅ Buddy makes a sound
myDog.bark(); // ✅ Buddy barks
```
**✅ Benefits of Inheritance:**  
✔ Code reuse – **No need to duplicate** `name` property.  
✔ **Scalability** – Easily add more animal types.  

---

# **4️⃣ Polymorphism (Method Overriding)**
Polymorphism allows the **same method** to have different implementations in different classes.  

## **🔹 Example of Polymorphism (Method Overriding)**
```js
class Animal {
  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound() { // Overriding parent method
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound() { // Overriding parent method
    console.log("Cat meows");
  }
}

let myDog = new Dog();
let myCat = new Cat();

myDog.makeSound(); // ✅ Dog barks
myCat.makeSound(); // ✅ Cat meows
```
**✅ Benefits of Polymorphism:**  
✔ Same method (`makeSound()`) behaves differently based on object type.  
✔ **Flexible and Extensible** design.  

---

# **📌 Implementing OOP in Real-World Projects**
### **🔹 Example: Employee Management System**
```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Call parent constructor
    this.department = department;
  }

  getDetails() {
    return `${super.getDetails()} and manages ${this.department}`;
  }
}

let emp1 = new Employee("Dheeraj", 50000);
let mgr1 = new Manager("Niharika", 70000, "HR");

console.log(emp1.getDetails()); // ✅ Dheeraj earns $50000
console.log(mgr1.getDetails()); // ✅ Niharika earns $70000 and manages HR
```

---

# **📌 Summary of OOP in JavaScript**
| OOP Concept | Description | Example |
|------------|-------------|---------|
| **Encapsulation** | Hides data and restricts direct access | `#privateField` |
| **Abstraction** | Hides implementation details | Private methods (`#method()`) |
| **Inheritance** | Child class inherits from a parent class | `class Child extends Parent` |
| **Polymorphism** | Same method behaves differently in different classes | `method overriding` |

---

## **🚀 Final Thoughts**
✔ OOP makes JavaScript **structured, modular, and scalable**.  
✔ Use **classes and objects** to create **real-world applications**.  
✔ Leverage **Encapsulation, Abstraction, Inheritance, and Polymorphism** for efficient code.  

Would you like help in implementing **OOP in your project**? 🚀