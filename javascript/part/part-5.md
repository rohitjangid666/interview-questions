# JavaScript Complete Interview Handbook

# Part 5 — Prototypes, OOP, Classes, DOM, Events & Event Delegation

---

## Table of Contents

- [Chapter 19: Prototype and Prototype Chain](#chapter-19-prototype-and-prototype-chain)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Example](#example)
  - [Visual Diagram](#visual-diagram)
  - [Understanding Prototype](#understanding-prototype)
  - [Prototype Lookup](#prototype-lookup)
  - [Creating Prototype Relationships](#creating-prototype-relationships)
  - [Prototype Chain](#prototype-chain)
  - [Constructor Functions](#constructor-functions)
  - [Why Prototype Methods?](#why-prototype-methods)
  - [Interview Question](#interview-question)
      - [Difference between **proto** and prototype?](#difference-between-proto-and-prototype)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 20: Classes and OOP](#chapter-20-classes-and-oop)
  - [What is OOP?](#what-is-oop)
  - [Why It Matters](#why-it-matters)
  - [Four Pillars of OOP](#four-pillars-of-oop)
  - [Class Syntax](#class-syntax)
  - [Constructor](#constructor)
  - [Inheritance](#inheritance)
  - [super()](#super)
  - [Encapsulation](#encapsulation)
  - [Polymorphism](#polymorphism)
  - [Abstraction](#abstraction)
  - [Class vs Constructor Function](#class-vs-constructor-function)
  - [Interview Questions](#interview-questions)
      - [Are classes a new inheritance model?](#are-classes-a-new-inheritance-model)
      - [What does `extends` do?](#what-does-extends-do)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 21: DOM Manipulation](#chapter-21-dom-manipulation)
  - [What is DOM?](#what-is-dom)
  - [Visual Diagram](#visual-diagram)
  - [Why It Matters](#why-it-matters)
  - [Selecting Elements](#selecting-elements)
    - [getElementById()](#getelementbyid)
    - [querySelector()](#queryselector)
    - [querySelectorAll()](#queryselectorall)
  - [Changing Content](#changing-content)
  - [Changing HTML](#changing-html)
  - [Difference](#difference)
  - [Modifying Styles](#modifying-styles)
  - [Creating Elements](#creating-elements)
  - [Appending Elements](#appending-elements)
  - [Removing Elements](#removing-elements)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 22: Event Handling](#chapter-22-event-handling)
  - [What is an Event?](#what-is-an-event)
  - [Event Listener](#event-listener)
  - [Event Object](#event-object)
  - [Common Properties](#common-properties)
  - [Example](#example)
  - [Removing Event Listeners](#removing-event-listeners)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 23: Event Bubbling, Capturing & Delegation](#chapter-23-event-bubbling-capturing-delegation)
  - [Event Bubbling](#event-bubbling)
  - [Visual Diagram](#visual-diagram)
  - [Event Capturing](#event-capturing)
  - [stopPropagation()](#stoppropagation)
  - [Event Delegation](#event-delegation)
  - [Why Delegation Works](#why-delegation-works)
  - [Real World Example](#real-world-example)
  - [Interview Favorite](#interview-favorite)
      - [Difference between event.target and event.currentTarget?](#difference-between-eventtarget-and-eventcurrenttarget)
  - [Common Interview Questions](#common-interview-questions)
      - [What is Event Bubbling?](#what-is-event-bubbling)
      - [What is Event Capturing?](#what-is-event-capturing)
      - [What is Event Delegation?](#what-is-event-delegation)
      - [Why use Event Delegation?](#why-use-event-delegation)
  - [Quick Revision Notes](#quick-revision-notes)
  - [Part 5 Complete](#part-5-complete)
      - [Covered](#covered)

---

# Chapter 19: Prototype and Prototype Chain

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

JavaScript uses **Prototype-Based Inheritance**.

Every object in JavaScript has access to another object called its **prototype**.

The prototype contains shared properties and methods.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Understanding prototypes explains:

* Inheritance
* Classes
* Method lookup
* Memory optimization

This is one of the most common intermediate-to-advanced interview topics.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
user
  ↓
Object.prototype
  ↓
null
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Thinking classes remove prototypes.

Classes are syntax sugar over prototypes.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use class syntax

✅ Understand underlying prototype system

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 20: Classes and OOP

---

**[⬆ Back to Top](#table-of-contents)**

# What is OOP?

Object-Oriented Programming organizes code around objects.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Used heavily in:

* Large applications
* Design patterns
* Framework internals

---

**[⬆ Back to Top](#table-of-contents)**

# Four Pillars of OOP

```text
Encapsulation
Inheritance
Polymorphism
Abstraction
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Constructor

Special method executed automatically.

```js
constructor(name) {
  this.name = name;
}
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Class vs Constructor Function

| Feature        | Class  | Constructor |
| -------------- | ------ | ----------- |
| Syntax         | Modern | Old         |
| Readability    | Better | Less        |
| Hoisted        | No     | Yes         |
| Uses Prototype | Yes    | Yes         |

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Are classes a new inheritance model?

Answer:

No.

Classes are syntax sugar over prototypes.

---

**[⬆ Back to Top](#table-of-contents)**

### What does `extends` do?

Answer:

Creates prototype inheritance between classes.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 21: DOM Manipulation

---

**[⬆ Back to Top](#table-of-contents)**

# What is DOM?

DOM = Document Object Model

Browser converts HTML into a tree-like structure.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

JavaScript interacts with webpages through the DOM.

---

**[⬆ Back to Top](#table-of-contents)**

# Selecting Elements

**[⬆ Back to Top](#table-of-contents)**

## getElementById()

```js
const title =
document.getElementById(
 "title"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

## querySelector()

```js
const title =
document.querySelector(
 "#title"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

## querySelectorAll()

```js
const items =
document.querySelectorAll(
 ".item"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Changing Content

```js
title.textContent =
"New Title";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Changing HTML

```js
title.innerHTML =
"<b>Hello</b>";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Difference

| Method      | Purpose      |
| ----------- | ------------ |
| textContent | Text only    |
| innerHTML   | HTML content |

---

**[⬆ Back to Top](#table-of-contents)**

# Modifying Styles

```js
title.style.color =
"red";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Creating Elements

```js
const div =
document.createElement(
 "div"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Appending Elements

```js
document.body.append(div);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Removing Elements

```js
div.remove();
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Using innerHTML for user input.

Security risk (XSS).

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Prefer textContent

✅ Cache DOM selections

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 22: Event Handling

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Common Properties

```js
event.target
event.type
event.currentTarget
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Removing Event Listeners

```js
button.removeEventListener(
 "click",
 handler
);
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use Event Delegation

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
addEventListener()

event.target
event.type
event.currentTarget
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 23: Event Bubbling, Capturing & Delegation

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Why Delegation Works

Because of:

```text
Event Bubbling
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Example

React internally uses event delegation extensively.

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Favorite

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Common Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### What is Event Bubbling?

Answer:

Event travels from child element to parent elements.

---

**[⬆ Back to Top](#table-of-contents)**

### What is Event Capturing?

Answer:

Event travels from parent to child before bubbling.

---

**[⬆ Back to Top](#table-of-contents)**

### What is Event Delegation?

Answer:

Attaching a single event listener to a parent element and handling child events using bubbling.

---

**[⬆ Back to Top](#table-of-contents)**

### Why use Event Delegation?

Answer:

Improves performance and works for dynamically added elements.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Part 5 Complete

**[⬆ Back to Top](#table-of-contents)**

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


**[⬆ Back to Top](#table-of-contents)**
