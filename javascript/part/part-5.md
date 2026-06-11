# JavaScript Complete Interview Handbook

# Part 5 — Prototypes, OOP, Classes, DOM, Events & Event Delegation

---

# Chapter 19: Prototype and Prototype Chain

---

# Definition

JavaScript uses **Prototype-Based Inheritance**.

Every object in JavaScript has access to another object called its **prototype**.

The prototype contains shared properties and methods.

---

# Why It Matters

Understanding prototypes explains:

* Inheritance
* Classes
* Method lookup
* Memory optimization

This is one of the most common intermediate-to-advanced interview topics.

---

# Real World Analogy

Imagine a company:

```text
Employee
   ↑
Manager
   ↑
Director
```

If an employee doesn't have information, they ask the manager.

If the manager doesn't know, they ask the director.

JavaScript works similarly.

---

# Example

```js
const user = {
  name: "Rohit"
};

console.log(user.toString());
```

Output:

```js
"[object Object]"
```

Question:

Where did `toString()` come from?

Answer:

From `Object.prototype`.

---

# Visual Diagram

```text
user
  ↓
Object.prototype
  ↓
null
```

---

# Understanding Prototype

```js
const user = {
  name: "Rohit"
};

console.log(
  Object.getPrototypeOf(user)
);
```

Output:

```js
Object.prototype
```

---

# Prototype Lookup

When JavaScript needs a property:

```text
Current Object
      ↓
Prototype
      ↓
Parent Prototype
      ↓
null
```

---

Example

```js
const user = {
  name: "Rohit"
};

console.log(user.hasOwnProperty("name"));
```

JavaScript searches:

```text
user
 ↓
Object.prototype
```

Finds:

```js
hasOwnProperty()
```

---

# Creating Prototype Relationships

```js
const person = {
  greet() {
    console.log("Hello");
  }
};

const user =
Object.create(person);

user.greet();
```

Output:

```js
Hello
```

---

# Prototype Chain

```text
user
 ↓
person
 ↓
Object.prototype
 ↓
null
```

---

# Constructor Functions

Before ES6 classes, inheritance used constructor functions.

---

Example

```js
function User(name) {
  this.name = name;
}

User.prototype.greet =
function() {
  console.log(
    `Hello ${this.name}`
  );
};

const user1 =
new User("Rohit");

user1.greet();
```

Output:

```js
Hello Rohit
```

---

# Why Prototype Methods?

Bad:

```js
function User(name) {
  this.name = name;

  this.greet = function() {};
}
```

Every object gets a new copy.

---

Good:

```js
User.prototype.greet =
function() {};
```

Shared among all instances.

---

# Interview Question

### Difference between **proto** and prototype?

| Feature   | prototype            | **proto**              |
| --------- | -------------------- | ---------------------- |
| Exists On | Functions            | Objects                |
| Purpose   | Used for inheritance | Reference to prototype |

---

Example

```js
function User() {}

User.prototype
```

Function prototype.

---

```js
const user = {};

user.__proto__
```

Object prototype reference.

---

# Common Mistakes

❌ Thinking classes remove prototypes.

Classes are syntax sugar over prototypes.

---

# Best Practices

✅ Use class syntax

✅ Understand underlying prototype system

---

# Quick Revision Notes

```text
Every object has a prototype.

Lookup:
Object
 ↓
Prototype
 ↓
Parent Prototype
 ↓
null

Classes use prototypes internally.
```

---

# Chapter 20: Classes and OOP

---

# What is OOP?

Object-Oriented Programming organizes code around objects.

---

# Why It Matters

Used heavily in:

* Large applications
* Design patterns
* Framework internals

---

# Four Pillars of OOP

```text
Encapsulation
Inheritance
Polymorphism
Abstraction
```

---

# Class Syntax

ES6 introduced classes.

---

Example

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(
      `Hello ${this.name}`
    );
  }
}
```

---

Create Instance

```js
const user =
new User("Rohit");

user.greet();
```

Output:

```js
Hello Rohit
```

---

# Constructor

Special method executed automatically.

```js
constructor(name) {
  this.name = name;
}
```

---

# Inheritance

Allows one class to inherit another.

---

Example

```js
class Animal {
  speak() {
    console.log("Animal");
  }
}

class Dog extends Animal {}

const dog = new Dog();

dog.speak();
```

Output:

```js
Animal
```

---

# super()

Calls parent constructor.

---

Example

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```

---

# Encapsulation

Hiding internal details.

---

Modern JavaScript supports private fields.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

Accessing:

```js
account.#balance
```

Error.

---

# Polymorphism

Same method behaves differently.

---

Example

```js
class Animal {
  speak() {
    console.log("Animal");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

---

Output

```js
Bark
```

Method overridden.

---

# Abstraction

Hide implementation details.

---

Example

```js
car.start();
```

You don't need to know:

```text
Fuel Injection
Spark Timing
Engine Logic
```

---

# Class vs Constructor Function

| Feature        | Class  | Constructor |
| -------------- | ------ | ----------- |
| Syntax         | Modern | Old         |
| Readability    | Better | Less        |
| Hoisted        | No     | Yes         |
| Uses Prototype | Yes    | Yes         |

---

# Interview Questions

### Are classes a new inheritance model?

Answer:

No.

Classes are syntax sugar over prototypes.

---

### What does `extends` do?

Answer:

Creates prototype inheritance between classes.

---

# Quick Revision Notes

```text
Class
Constructor
extends
super

OOP:
Encapsulation
Inheritance
Polymorphism
Abstraction
```

---

# Chapter 21: DOM Manipulation

---

# What is DOM?

DOM = Document Object Model

Browser converts HTML into a tree-like structure.

---

# Visual Diagram

HTML:

```html
<body>
  <h1>Hello</h1>
</body>
```

DOM:

```text
Document
  ↓
Body
  ↓
H1
```

---

# Why It Matters

JavaScript interacts with webpages through the DOM.

---

# Selecting Elements

## getElementById()

```js
const title =
document.getElementById(
 "title"
);
```

---

## querySelector()

```js
const title =
document.querySelector(
 "#title"
);
```

---

## querySelectorAll()

```js
const items =
document.querySelectorAll(
 ".item"
);
```

---

# Changing Content

```js
title.textContent =
"New Title";
```

---

# Changing HTML

```js
title.innerHTML =
"<b>Hello</b>";
```

---

# Difference

| Method      | Purpose      |
| ----------- | ------------ |
| textContent | Text only    |
| innerHTML   | HTML content |

---

# Modifying Styles

```js
title.style.color =
"red";
```

---

# Creating Elements

```js
const div =
document.createElement(
 "div"
);
```

---

# Appending Elements

```js
document.body.append(div);
```

---

# Removing Elements

```js
div.remove();
```

---

# Common Mistakes

❌ Using innerHTML for user input.

Security risk (XSS).

---

# Best Practices

✅ Prefer textContent

✅ Cache DOM selections

---

# Quick Revision Notes

```text
querySelector()
querySelectorAll()

textContent
innerHTML

createElement()
append()
remove()
```

---

# Chapter 22: Event Handling

---

# What is an Event?

An event is an action that occurs in the browser.

Examples:

```text
Click
Submit
Scroll
Hover
KeyPress
```

---

# Event Listener

```js
button.addEventListener(
 "click",
 () => {
   console.log("Clicked");
 }
);
```

---

# Event Object

```js
button.addEventListener(
 "click",
 event => {
   console.log(event);
 }
);
```

---

# Common Properties

```js
event.target
event.type
event.currentTarget
```

---

# Example

```js
button.addEventListener(
 "click",
 e => {
   console.log(e.target);
 }
);
```

---

# Removing Event Listeners

```js
button.removeEventListener(
 "click",
 handler
);
```

---

# Common Mistakes

❌ Creating unnecessary listeners.

---

Bad:

```js
1000 items
1000 listeners
```

---

Can hurt performance.

---

# Best Practices

✅ Use Event Delegation

---

# Quick Revision Notes

```text
addEventListener()

event.target
event.type
event.currentTarget
```

---

# Chapter 23: Event Bubbling, Capturing & Delegation

---

# Event Bubbling

Default browser behavior.

Event moves upward.

---

HTML

```html
<div id="parent">
  <button id="child">
    Click
  </button>
</div>
```

---

JavaScript

```js
parent.addEventListener(
 "click",
 () => console.log("Parent")
);

child.addEventListener(
 "click",
 () => console.log("Child")
);
```

---

Output

```text
Child
Parent
```

---

# Visual Diagram

```text
Button
  ↑
Div
  ↑
Body
  ↑
Document
```

---

# Event Capturing

Opposite direction.

```text
Document
  ↓
Body
  ↓
Div
  ↓
Button
```

---

Enable Capturing

```js
parent.addEventListener(
 "click",
 handler,
 true
);
```

---

# stopPropagation()

Stops event flow.

```js
child.addEventListener(
 "click",
 e => {
   e.stopPropagation();
 }
);
```

---

Parent won't execute.

---

# Event Delegation

Attach one listener to parent.

---

Why?

Instead of:

```text
1000 Buttons
1000 Listeners
```

Use:

```text
1 Parent
1 Listener
```

---

Example

```js
document
.querySelector("#list")
.addEventListener(
 "click",
 e => {
   if (
     e.target.tagName ===
     "LI"
   ) {
     console.log(
       e.target.textContent
     );
   }
 }
);
```

---

# Why Delegation Works

Because of:

```text
Event Bubbling
```

---

# Real World Example

React internally uses event delegation extensively.

---

# Interview Favorite

### Difference between event.target and event.currentTarget?

| Property      | Meaning                |
| ------------- | ---------------------- |
| target        | Actual clicked element |
| currentTarget | Element handling event |

---

Example

```html
<div id="parent">
  <button id="child">
    Click
  </button>
</div>
```

Click button:

```js
event.target
```

Output:

```text
button
```

---

```js
event.currentTarget
```

Output:

```text
parent
```

(if parent listener executes)

---

# Common Interview Questions

### What is Event Bubbling?

Answer:

Event travels from child element to parent elements.

---

### What is Event Capturing?

Answer:

Event travels from parent to child before bubbling.

---

### What is Event Delegation?

Answer:

Attaching a single event listener to a parent element and handling child events using bubbling.

---

### Why use Event Delegation?

Answer:

Improves performance and works for dynamically added elements.

---

# Quick Revision Notes

```text
Event Flow

Capturing
 ↓
Target
 ↓
Bubbling

Default:
Bubbling

stopPropagation()

Event Delegation:
Parent Listener
Child Handling
```

---

# Part 5 Complete

### Covered

✅ Prototype
✅ Prototype Chain
✅ Constructor Functions
✅ Prototype Lookup
✅ Classes
✅ OOP Principles
✅ Encapsulation
✅ Inheritance
✅ Polymorphism
✅ Abstraction
✅ DOM Manipulation
✅ Event Handling
✅ Event Object
✅ Event Bubbling
✅ Event Capturing
✅ Event Delegation

---
