# **JavaScript Prototype: A Complete Guide**
The **prototype** in JavaScript is a fundamental concept in its object-oriented programming model. It allows objects to inherit properties and methods from other objects. If you're serious about JavaScript, understanding **prototypes** will help you write efficient, memory-friendly, and reusable code.

---

## **📌 What is Prototype in JavaScript?**
In JavaScript, every function and object has a **prototype** property, which is an object itself. This prototype object contains properties and methods that other objects can inherit.

🔹 **Think of Prototype as a blueprint** for objects. Instead of defining methods inside each object, we attach them to the prototype, so all objects share them.

---

## **📌 Why Use Prototype?**
1. **Memory Optimization:**  
   - If you define methods inside a constructor function, every object created will have its own copy.  
   - With a prototype, all instances share the same method, saving memory.

2. **Code Reusability:**  
   - Instead of writing duplicate methods inside each object, prototype allows **method sharing**.

3. **Inheritance in JavaScript:**  
   - JavaScript doesn’t have traditional class-based inheritance like Java or C++, but prototypes allow **object inheritance**.

---

## **📌 How Prototype Works?**
Let's break it down with an example.

### 🔹 **1. Constructor Function Without Prototype**
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Dheeraj", 22);
const person2 = new Person("Niharika", 21);

person1.sayHello(); // Hello, my name is Dheeraj
person2.sayHello(); // Hello, my name is Niharika

console.log(person1.sayHello === person2.sayHello); // false (Different functions in memory)
```
**🔴 Problem:** Every new object gets its own copy of `sayHello()`, leading to high memory usage.

---

### 🔹 **2. Constructor Function With Prototype**
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Dheeraj", 22);
const person2 = new Person("Niharika", 21);

person1.sayHello(); // Hello, my name is Dheeraj
person2.sayHello(); // Hello, my name is Niharika

console.log(person1.sayHello === person2.sayHello); // true (Same function in memory)
```
**✅ Solution:** Now, `sayHello()` is shared among all `Person` objects, reducing memory consumption.

---

## **📌 Understanding the Prototype Chain**
### 🔹 **What is Prototype Chain?**
JavaScript objects are linked in a chain where each object inherits properties and methods from its prototype.  
If an object doesn’t have a requested property/method, JavaScript looks up the chain until it finds it.

```js
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (End of chain)
```
### **🔹 Prototype Lookup Example**
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

const dog = new Animal("Buddy");
dog.eat(); // Buddy is eating

console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
```
Here, when `dog.eat()` is called:
1. JS first looks inside `dog` object → **not found**  
2. Then, it checks `Animal.prototype` → **found**  
3. It stops searching and executes `eat()`

---

## **📌 Overriding Prototype Methods**
You can override prototype methods if needed.

```js
Person.prototype.sayHello = function () {
  console.log(`Hey, I am ${this.name}`);
};

const person3 = new Person("Rahul", 24);
person3.sayHello(); // Hey, I am Rahul
```

---

## **📌 Adding Properties to the Prototype**
You can also add properties to a prototype, but note that they will be shared among all instances.

```js
Person.prototype.country = "India";

console.log(person1.country); // India
console.log(person2.country); // India

person1.country = "USA"; // Overrides only for person1
console.log(person1.country); // USA
console.log(person2.country); // India
```

---

## **📌 Prototype Inheritance (Extending Prototypes)**
### **🔹 Inheriting from Another Prototype**
You can make one object inherit from another using prototypes.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const myDog = new Dog("Bruno", "Labrador");

myDog.makeSound(); // Bruno makes a sound
myDog.bark(); // Bruno barks
```

---

## **📌 Checking Object’s Prototype**
1. **Using `__proto__` (Not Recommended but Useful for Debugging)**
```js
console.log(person1.__proto__); // Logs Person prototype
console.log(person1.__proto__ === Person.prototype); // true
```

2. **Using `Object.getPrototypeOf()` (Preferred)**
```js
console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
```

---

## **📌 Modern JavaScript and Prototypes**
While `class` syntax in ES6+ makes OOP more readable, it's still based on prototypes.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p1 = new Person("Dheeraj", 22);
p1.sayHello(); // Hello, I am Dheeraj
```
Under the hood, `class` is just **syntactic sugar** over prototypes.

```js
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true
```

---

## **📌 When to Use Prototype?**
✅ If you want multiple objects to **share methods** → **Use Prototype**  
✅ When creating **constructors** → Define **methods in the prototype**  
✅ For **inheritance** → Use **prototype chaining**

---

## **📌 Summary**
| Concept                | Explanation |
|------------------------|-------------|
| Prototype Object       | A shared object that contains methods/properties |
| Prototype Chain        | A chain of objects used for inheritance |
| `Object.create(proto)` | Creates a new object with the specified prototype |
| `Object.getPrototypeOf(obj)` | Returns the prototype of an object |
| `class` in JavaScript  | Uses prototype under the hood |

---

## **🚀 Final Thoughts**
Prototypes in JavaScript provide a **powerful** and **memory-efficient** way to share properties and methods among objects. Understanding prototypes will help you write **better**, **optimized**, and **scalable** JavaScript applications.

Would you like me to help you apply this knowledge in a project? 🚀