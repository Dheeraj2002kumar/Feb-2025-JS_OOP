# **JavaScript Function Constructor & Error Handling: A Complete Guide**  
Understanding **Function Constructors** and **Error Handling** in JavaScript is crucial for writing clean, reusable, and error-free code. Let's dive deep into both concepts.  

---

# **📌 Function Constructor in JavaScript**  
A **Function Constructor** is a way to create multiple objects with the same structure using a function. It acts like a blueprint for creating objects.  

## **🔹 What is a Function Constructor?**  
A **constructor function** is a regular function that is used to create multiple objects of the same type. The main differences between a normal function and a constructor function are:  
1. It is called using the **`new`** keyword.  
2. It initializes a new object.  
3. It assigns properties and methods to that object.  

---

## **🔹 Creating Objects Without a Constructor Function**  
Before understanding constructor functions, let’s create an object **without** using a constructor:  

```js
const person1 = {
  name: "Dheeraj",
  age: 22,
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

const person2 = {
  name: "Niharika",
  age: 21,
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person1.greet(); // Hello, I am Dheeraj
person2.greet(); // Hello, I am Niharika
```

### **🔴 Problem:**
1. **Code Duplication:** We manually create each object.  
2. **Hard to Maintain:** If we add a new method, we must update every object.  

---

## **🔹 Creating Objects Using a Function Constructor**
To **avoid redundancy**, we can use a **constructor function**:  

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, I am ${this.name}`);
  };
}

// Creating multiple objects
const person1 = new Person("Dheeraj", 22);
const person2 = new Person("Niharika", 21);

person1.greet(); // Hello, I am Dheeraj
person2.greet(); // Hello, I am Niharika
```

### **✅ Benefits of Function Constructors**  
✔ **No Code Duplication** – Just create objects using `new Person()`.  
✔ **Easy to Maintain** – Define the properties once inside the function.  
✔ **Creates Multiple Objects Dynamically**.  

---

## **🔹 The `new` Keyword & How It Works**  
When we use `new`, JavaScript does the following:  
1. **Creates a new object (`{}`) internally.**  
2. **Sets `this` inside the constructor to refer to the new object.**  
3. **Assigns properties/methods to the new object.**  
4. **Returns the object automatically.**  

```js
const obj = new Person("Dheeraj", 22);
// Equivalent to:
const obj = {};
obj.name = "Dheeraj";
obj.age = 22;
obj.greet = function () {
  console.log(`Hello, I am ${this.name}`);
};
```

---

## **🔹 Function Constructors & Prototype**
The above constructor function **creates separate copies** of `greet()` for each object. To optimize memory, we can use **prototype**:  

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define method on prototype (shared among all objects)
Person.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}`);
};

const person1 = new Person("Dheeraj", 22);
const person2 = new Person("Niharika", 21);

person1.greet(); // Hello, I am Dheeraj
person2.greet(); // Hello, I am Niharika
```

**✅ Benefit:** Now, `greet()` is shared, reducing memory usage.  

---

## **📌 Built-in Constructor Functions in JavaScript**
JavaScript has several built-in constructor functions:  

| Constructor | Example |
|------------|---------|
| `new Object()` | `let obj = new Object();` |
| `new Array()` | `let arr = new Array(1, 2, 3);` |
| `new Function()` | `let func = new Function("x", "return x*x;");` |
| `new Date()` | `let date = new Date();` |
| `new RegExp()` | `let regex = new RegExp("\\d+");` |

💡 **But** it's recommended to use **literals** (`{}`, `[]`, etc.) instead of constructors (`new Object()`, `new Array()`).  

---

# **📌 Error Handling in JavaScript**
Errors in JavaScript can crash a program if not handled properly. **Error handling** helps identify and recover from errors smoothly.  

---

## **🔹 Types of Errors**
### **1. Syntax Error**  
Occurs when the code has a syntax mistake.  
```js
console.log("Hello"); // ✅ Correct
console.log("Hello // ❌ SyntaxError: missing closing quote
```

### **2. Reference Error**  
Occurs when using an undeclared variable.  
```js
console.log(x); // ❌ ReferenceError: x is not defined
```

### **3. Type Error**  
Occurs when a value is not of the expected type.  
```js
let num = 10;
num.toUpperCase(); // ❌ TypeError: num.toUpperCase is not a function
```

### **4. Range Error**  
Occurs when a value is out of the expected range.  
```js
let arr = new Array(-1); // ❌ RangeError: Invalid array length
```

### **5. URI Error**  
Occurs when an incorrect URL function is used.  
```js
decodeURIComponent("%"); // ❌ URIError: URI malformed
```

---

## **📌 Handling Errors Using `try...catch`**
The `try...catch` block allows you to catch and handle errors gracefully.

```js
try {
  let x = y; // y is not defined
} catch (error) {
  console.log("An error occurred:", error.message);
}
```
✅ **No program crash!** It logs:  
```
An error occurred: y is not defined
```

---

## **📌 Using `finally`**
The `finally` block **always runs**, whether an error occurs or not.  
```js
try {
  console.log("Trying...");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("This will always run.");
}
```
**Output:**
```
Trying...
Caught error: Something went wrong!
This will always run.
```

---

## **📌 Throwing Custom Errors**
You can create your own errors using `throw`.  
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}
```
**Output:**
```
Error: Cannot divide by zero!
```

---

# **🚀 Final Thoughts**
✔ **Function Constructors** allow creating multiple objects dynamically.  
✔ **Using Prototypes** improves memory efficiency.  
✔ **Error Handling** (`try...catch`, `finally`, `throw`) prevents program crashes.  

Would you like me to help you apply this knowledge in a **real project**? 🚀