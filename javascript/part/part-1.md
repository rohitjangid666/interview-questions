# JavaScript Complete Interview Handbook

# Part 1 — Fundamentals (Beginner → Intermediate)

---

## Table of Contents

- [Chapter 1: JavaScript Introduction](#chapter-1-javascript-introduction)
  - [What is JavaScript?](#what-is-javascript)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [History of JavaScript](#history-of-javascript)
      - [1995](#1995)
      - [Evolution](#evolution)
  - [ECMAScript](#ecmascript)
  - [How JavaScript Works in Browsers](#how-javascript-works-in-browsers)
  - [JavaScript Engines](#javascript-engines)
    - [V8 Engine](#v8-engine)
  - [Compilation vs Interpretation](#compilation-vs-interpretation)
      - [JIT (Just-In-Time Compilation)](#jit-just-in-time-compilation)
  - [Single Threaded Nature](#single-threaded-nature)
  - [Why JavaScript Is Single Threaded](#why-javascript-is-single-threaded)
  - [Common Interview Question](#common-interview-question)
      - [Why is JavaScript Single Threaded?](#why-is-javascript-single-threaded)
      - [What Makes JavaScript Different?](#what-makes-javascript-different)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
  - [Interview Questions](#interview-questions)
      - [Beginner](#beginner)
      - [Intermediate](#intermediate)
      - [Advanced](#advanced)
- [Chapter 2: Variables and Data Types](#chapter-2-variables-and-data-types)
  - [Variables](#variables)
  - [var](#var)
  - [Problems with var](#problems-with-var)
  - [let](#let)
  - [const](#const)
  - [var vs let vs const](#var-vs-let-vs-const)
  - [Primitive Data Types](#primitive-data-types)
    - [String](#string)
    - [Number](#number)
    - [Boolean](#boolean)
    - [Undefined](#undefined)
    - [Null](#null)
    - [Symbol](#symbol)
    - [BigInt](#bigint)
  - [Reference Types](#reference-types)
  - [Primitive vs Reference](#primitive-vs-reference)
  - [Real World Analogy](#real-world-analogy)
  - [typeof Operator](#typeof-operator)
  - [Common Mistakes](#common-mistakes)
      - [Mistake 1](#mistake-1)
      - [Mistake 2](#mistake-2)
  - [Best Practices](#best-practices)
  - [Interview Questions](#interview-questions)
      - [Beginner](#beginner)
      - [Intermediate](#intermediate)
      - [Advanced](#advanced)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 3: Operators](#chapter-3-operators)
  - [What Are Operators?](#what-are-operators)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Comparison Operators](#comparison-operators)
  - [Logical Operators](#logical-operators)
  - [Assignment Operators](#assignment-operators)
  - [Ternary Operator](#ternary-operator)
  - [Nullish Coalescing Operator](#nullish-coalescing-operator)
  - [Optional Chaining](#optional-chaining)
  - [Common Interview Questions](#common-interview-questions)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
    - [Part 1 Complete](#part-1-complete)

---

# Chapter 1: JavaScript Introduction

---

**[⬆ Back to Top](#table-of-contents)**

# What is JavaScript?

JavaScript (JS) is a **high-level, interpreted, dynamically typed programming language** used to make web pages interactive.

Without JavaScript:

* HTML = Structure
* CSS = Styling
* JavaScript = Behavior

Example:

```html
<button onclick="sayHello()">
  Click Me
</button>

<script>
function sayHello() {
  alert("Hello World");
}
</script>
```

When the user clicks the button, JavaScript executes.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

JavaScript is everywhere:

| Area     | Usage               |
| -------- | ------------------- |
| Frontend | React, Vue, Angular |
| Backend  | Node.js             |
| Mobile   | React Native        |
| Desktop  | Electron            |
| Games    | Phaser              |
| AI Tools | TensorFlow.js       |

Today, JavaScript is one of the most demanded skills in software development.

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Think of a Car:

* HTML = Car body
* CSS = Paint & design
* JavaScript = Engine

Without the engine, the car looks good but doesn't move.

---

**[⬆ Back to Top](#table-of-contents)**

# History of JavaScript

**[⬆ Back to Top](#table-of-contents)**

### 1995

Created by:

Brendan Eich

Built in only **10 days**.

Originally called:

1. Mocha
2. LiveScript
3. JavaScript

---

**[⬆ Back to Top](#table-of-contents)**

### Evolution

| Year    | Feature             |
| ------- | ------------------- |
| 1995    | JavaScript Created  |
| 1997    | ECMAScript Standard |
| 2009    | ES5                 |
| 2015    | ES6 (Major Update)  |
| Present | ES2025+             |

---

**[⬆ Back to Top](#table-of-contents)**

# ECMAScript

ECMAScript (ES) is the standard specification.

JavaScript follows ECMAScript rules.

Example:

```js
let name = "Rohit";
```

The `let` keyword was introduced in ES6.

---

**[⬆ Back to Top](#table-of-contents)**

# How JavaScript Works in Browsers

When browser loads a webpage:

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Browser Renders UI
```

Example:

```js
document.body.style.background = "black";
```

JavaScript can manipulate the webpage after it loads.

---

**[⬆ Back to Top](#table-of-contents)**

# JavaScript Engines

A JavaScript Engine executes JavaScript code.

Popular engines:

| Engine         | Browser     |
| -------------- | ----------- |
| V8             | Chrome      |
| SpiderMonkey   | Firefox     |
| JavaScriptCore | Safari      |
| Chakra         | Legacy Edge |

---

**[⬆ Back to Top](#table-of-contents)**

## V8 Engine

Created by:

Google

Used in:

* Chrome
* Node.js

V8 converts JS into machine code.

---

**[⬆ Back to Top](#table-of-contents)**

# Compilation vs Interpretation

Traditional Languages:

```text
Code
 ↓
Compile
 ↓
Executable
```

Example:

* C
* C++

---

JavaScript:

```text
Code
 ↓
Parse
 ↓
Compile
 ↓
Execute
```

Modern engines use:

**[⬆ Back to Top](#table-of-contents)**

### JIT (Just-In-Time Compilation)

Combines:

* Compilation
* Interpretation

Benefits:

* Faster execution
* Better optimization

---

**[⬆ Back to Top](#table-of-contents)**

# Single Threaded Nature

JavaScript has:

```text
One Call Stack
One Thread
```

Meaning:

Only one task executes at a time.

Example:

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

Sequential execution.

---

**[⬆ Back to Top](#table-of-contents)**

# Why JavaScript Is Single Threaded

Imagine:

```text
One Chef
Many Orders
```

The chef handles one order at a time.

Similarly:

JavaScript processes one task at a time using the Call Stack.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Interview Question

**[⬆ Back to Top](#table-of-contents)**

### Why is JavaScript Single Threaded?

Answer:

JavaScript was designed for browsers where interacting with the DOM simultaneously could create inconsistencies. Therefore JavaScript uses a single call stack and executes one operation at a time.

---

**[⬆ Back to Top](#table-of-contents)**

### What Makes JavaScript Different?

Answer:

1. Prototype-based inheritance
2. Dynamic typing
3. First-class functions
4. Closures
5. Event loop
6. Runs in browsers and servers

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Thinking JavaScript is interpreted only

Modern JS engines use JIT compilation.

❌ Thinking JS is synchronous only

JavaScript is single-threaded but can perform asynchronous operations through Web APIs and Event Loop.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Learn JS before frameworks

✅ Understand Event Loop deeply

✅ Focus on fundamentals

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
JavaScript = Behavior

Created by:
Brendan Eich

Standard:
ECMAScript

Popular Engine:
V8

Single Threaded:
Yes

Compiled?
JIT Compiled
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Beginner

Q: Who created JavaScript?

Answer:
Brendan Eich.

---

Q: What is ECMAScript?

Answer:
Standard specification that JavaScript follows.

---

**[⬆ Back to Top](#table-of-contents)**

### Intermediate

Q: Difference between JavaScript and ECMAScript?

Answer:

JavaScript = Language

ECMAScript = Specification

---

**[⬆ Back to Top](#table-of-contents)**

### Advanced

Q: How does V8 optimize code?

Answer:

Using:

* Ignition Interpreter
* TurboFan Compiler

for JIT optimization.

---

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 2: Variables and Data Types

---

**[⬆ Back to Top](#table-of-contents)**

# Variables

Variables store data.

Example:

```js
let username = "Rohit";
```

`username` stores a value.

---

**[⬆ Back to Top](#table-of-contents)**

# var

Old way to declare variables.

```js
var age = 25;
```

Characteristics:

* Function scoped
* Hoisted
* Can redeclare
* Can reassign

Example:

```js
var x = 10;
var x = 20;
```

Valid.

---

**[⬆ Back to Top](#table-of-contents)**

# Problems with var

```js
if (true) {
  var name = "John";
}

console.log(name);
```

Output:

```text
John
```

Leaks outside block.

---

**[⬆ Back to Top](#table-of-contents)**

# let

Introduced in ES6.

```js
let age = 25;
```

Characteristics:

* Block scoped
* Reassignable
* Cannot redeclare

---

Example:

```js
let x = 10;
x = 20;
```

Valid.

---

```js
let x = 10;
let x = 20;
```

Error.

---

**[⬆ Back to Top](#table-of-contents)**

# const

Constant reference.

```js
const PI = 3.14;
```

Cannot reassign.

```js
const PI = 3.14;
PI = 4;
```

Error.

---

Important:

```js
const user = {
  name: "Rohit"
};

user.name = "John";
```

Valid.

Object contents can change.

---

**[⬆ Back to Top](#table-of-contents)**

# var vs let vs const

| Feature   | var      | let       | const     |
| --------- | -------- | --------- | --------- |
| Scope     | Function | Block     | Block     |
| Hoisted   | Yes      | Yes (TDZ) | Yes (TDZ) |
| Redeclare | Yes      | No        | No        |
| Reassign  | Yes      | Yes       | No        |

---

**[⬆ Back to Top](#table-of-contents)**

# Primitive Data Types

JavaScript has 7 primitive types.

---

**[⬆ Back to Top](#table-of-contents)**

## String

Stores text.

```js
let name = "Rohit";
```

---

**[⬆ Back to Top](#table-of-contents)**

## Number

Stores numeric values.

```js
let age = 25;
```

Both:

```js
10
10.5
```

are Number.

---

**[⬆ Back to Top](#table-of-contents)**

## Boolean

```js
true
false
```

Example:

```js
let isLoggedIn = true;
```

---

**[⬆ Back to Top](#table-of-contents)**

## Undefined

Variable declared but not assigned.

```js
let x;

console.log(x);
```

Output:

```text
undefined
```

---

**[⬆ Back to Top](#table-of-contents)**

## Null

Intentional empty value.

```js
let user = null;
```

---

**[⬆ Back to Top](#table-of-contents)**

## Symbol

Creates unique identifiers.

```js
const id = Symbol();
```

---

**[⬆ Back to Top](#table-of-contents)**

## BigInt

For very large integers.

```js
const big = 12345678901234567890n;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Reference Types

Stored by reference.

Examples:

```js
Object
Array
Function
Date
Map
Set
```

---

Example:

```js
const user = {
  name: "Rohit"
};
```

---

**[⬆ Back to Top](#table-of-contents)**

# Primitive vs Reference

```js
let a = 10;
let b = a;

b = 20;

console.log(a);
```

Output:

```text
10
```

Copied by value.

---

Reference:

```js
let obj1 = {
  name: "Rohit"
};

let obj2 = obj1;

obj2.name = "John";

console.log(obj1.name);
```

Output:

```text
John
```

Copied by reference.

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Primitive:

```text
Photocopy
```

Reference:

```text
Shared Google Doc
```

Both people edit same document.

---

**[⬆ Back to Top](#table-of-contents)**

# typeof Operator

```js
typeof "hello"
```

Output:

```text
string
```

---

Examples:

```js
typeof 10
```

```text
number
```

---

```js
typeof true
```

```text
boolean
```

---

```js
typeof undefined
```

```text
undefined
```

---

Strange Interview Question:

```js
typeof null
```

Output:

```text
object
```

Historical bug in JavaScript.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

**[⬆ Back to Top](#table-of-contents)**

### Mistake 1

```js
const arr = [1,2];

arr.push(3);
```

Many think error occurs.

Actually valid.

---

**[⬆ Back to Top](#table-of-contents)**

### Mistake 2

```js
typeof null
```

Returns:

```text
object
```

Not null.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use `const` by default

✅ Use `let` when reassignment needed

❌ Avoid `var`

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Beginner

Q: Difference between let and const?

Answer:

* let → reassigned
* const → cannot reassign

---

Q: How many primitive data types exist?

Answer:

7

```text
String
Number
Boolean
Undefined
Null
Symbol
BigInt
```

---

**[⬆ Back to Top](#table-of-contents)**

### Intermediate

Q: Difference between null and undefined?

Answer:

| undefined        | null                    |
| ---------------- | ----------------------- |
| Absence of value | Intentional empty value |
| Automatic        | Assigned manually       |

---

**[⬆ Back to Top](#table-of-contents)**

### Advanced

Q: Why does `typeof null` return object?

Answer:

Legacy bug from early JavaScript implementation retained for backward compatibility.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Prefer const

7 Primitive Types:
String
Number
Boolean
Undefined
Null
Symbol
BigInt

Reference Types:
Object
Array
Function

typeof null === "object"
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 3: Operators

---

**[⬆ Back to Top](#table-of-contents)**

# What Are Operators?

Operators perform operations on values.

Example:

```js
10 + 20
```

`+` is an operator.

---

**[⬆ Back to Top](#table-of-contents)**

# Arithmetic Operators

| Operator | Meaning        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| /        | Division       |
| %        | Modulus        |
| **       | Exponent       |

---

Example:

```js
console.log(10 % 3);
```

Output:

```text
1
```

---

**[⬆ Back to Top](#table-of-contents)**

# Comparison Operators

| Operator | Meaning          |
| -------- | ---------------- |
| ==       | Loose Equality   |
| ===      | Strict Equality  |
| !=       | Not Equal        |
| !==      | Strict Not Equal |
| >        | Greater Than     |
| <        | Less Than        |

---

Example:

```js
10 === "10"
```

Output:

```text
false
```

---

```js
10 == "10"
```

Output:

```text
true
```

Type coercion occurs.

---

**[⬆ Back to Top](#table-of-contents)**

# Logical Operators

```js
&&
||
!
```

---

Example:

```js
true && true
```

Output:

```text
true
```

---

**[⬆ Back to Top](#table-of-contents)**

# Assignment Operators

```js
=
+=
-=
*=
/=
```

---

Example:

```js
let x = 5;

x += 10;
```

Result:

```text
15
```

---

**[⬆ Back to Top](#table-of-contents)**

# Ternary Operator

Short if-else.

```js
condition ? value1 : value2
```

Example:

```js
let age = 18;

let result =
age >= 18 ? "Adult" : "Minor";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Nullish Coalescing Operator

```js
??
```

Returns right value only when left is:

```text
null
undefined
```

Example:

```js
let name = null;

console.log(name ?? "Guest");
```

Output:

```text
Guest
```

---

**[⬆ Back to Top](#table-of-contents)**

# Optional Chaining

```js
?.
```

Avoids errors.

Example:

```js
user?.address?.city
```

If address doesn't exist:

Returns:

```text
undefined
```

instead of crashing.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Interview Questions

Q:

```js
0 || "Hello"
```

Output?

Answer:

```text
Hello
```

---

Q:

```js
0 ?? "Hello"
```

Output?

Answer:

```text
0
```

Because 0 isn't null or undefined.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Using `==`

Prefer:

```js
===
```

---

❌ Confusing:

```js
||
```

and

```js
??
```

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Prefer strict equality

```js
===
```

✅ Use optional chaining

✅ Use nullish coalescing

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
=== preferred

&& AND
|| OR
! NOT

?? nullish

?. optional chaining

Ternary:
condition ? A : B
```

---

**[⬆ Back to Top](#table-of-contents)**

## Part 1 Complete

Covered:

✔ JavaScript Introduction
✔ Variables
✔ Data Types
✔ Operators

---


**[⬆ Back to Top](#table-of-contents)**
