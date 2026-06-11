# JavaScript Complete Interview Handbook

# Part 1 — Fundamentals (Beginner → Intermediate)

---

# Chapter 1: JavaScript Introduction

---

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

# Real World Analogy

Think of a Car:

* HTML = Car body
* CSS = Paint & design
* JavaScript = Engine

Without the engine, the car looks good but doesn't move.

---

# History of JavaScript

### 1995

Created by:

Brendan Eich

Built in only **10 days**.

Originally called:

1. Mocha
2. LiveScript
3. JavaScript

---

### Evolution

| Year    | Feature             |
| ------- | ------------------- |
| 1995    | JavaScript Created  |
| 1997    | ECMAScript Standard |
| 2009    | ES5                 |
| 2015    | ES6 (Major Update)  |
| Present | ES2025+             |

---

# ECMAScript

ECMAScript (ES) is the standard specification.

JavaScript follows ECMAScript rules.

Example:

```js
let name = "Rohit";
```

The `let` keyword was introduced in ES6.

---

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

## V8 Engine

Created by:

Google

Used in:

* Chrome
* Node.js

V8 converts JS into machine code.

---

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

### JIT (Just-In-Time Compilation)

Combines:

* Compilation
* Interpretation

Benefits:

* Faster execution
* Better optimization

---

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

# Common Interview Question

### Why is JavaScript Single Threaded?

Answer:

JavaScript was designed for browsers where interacting with the DOM simultaneously could create inconsistencies. Therefore JavaScript uses a single call stack and executes one operation at a time.

---

### What Makes JavaScript Different?

Answer:

1. Prototype-based inheritance
2. Dynamic typing
3. First-class functions
4. Closures
5. Event loop
6. Runs in browsers and servers

---

# Common Mistakes

❌ Thinking JavaScript is interpreted only

Modern JS engines use JIT compilation.

❌ Thinking JS is synchronous only

JavaScript is single-threaded but can perform asynchronous operations through Web APIs and Event Loop.

---

# Best Practices

✅ Learn JS before frameworks

✅ Understand Event Loop deeply

✅ Focus on fundamentals

---

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

# Interview Questions

### Beginner

Q: Who created JavaScript?

Answer:
Brendan Eich.

---

Q: What is ECMAScript?

Answer:
Standard specification that JavaScript follows.

---

### Intermediate

Q: Difference between JavaScript and ECMAScript?

Answer:

JavaScript = Language

ECMAScript = Specification

---

### Advanced

Q: How does V8 optimize code?

Answer:

Using:

* Ignition Interpreter
* TurboFan Compiler

for JIT optimization.

---

---

# Chapter 2: Variables and Data Types

---

# Variables

Variables store data.

Example:

```js
let username = "Rohit";
```

`username` stores a value.

---

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

# var vs let vs const

| Feature   | var      | let       | const     |
| --------- | -------- | --------- | --------- |
| Scope     | Function | Block     | Block     |
| Hoisted   | Yes      | Yes (TDZ) | Yes (TDZ) |
| Redeclare | Yes      | No        | No        |
| Reassign  | Yes      | Yes       | No        |

---

# Primitive Data Types

JavaScript has 7 primitive types.

---

## String

Stores text.

```js
let name = "Rohit";
```

---

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

## Null

Intentional empty value.

```js
let user = null;
```

---

## Symbol

Creates unique identifiers.

```js
const id = Symbol();
```

---

## BigInt

For very large integers.

```js
const big = 12345678901234567890n;
```

---

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

# Common Mistakes

### Mistake 1

```js
const arr = [1,2];

arr.push(3);
```

Many think error occurs.

Actually valid.

---

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

# Best Practices

✅ Use `const` by default

✅ Use `let` when reassignment needed

❌ Avoid `var`

---

# Interview Questions

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

### Intermediate

Q: Difference between null and undefined?

Answer:

| undefined        | null                    |
| ---------------- | ----------------------- |
| Absence of value | Intentional empty value |
| Automatic        | Assigned manually       |

---

### Advanced

Q: Why does `typeof null` return object?

Answer:

Legacy bug from early JavaScript implementation retained for backward compatibility.

---

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

# Chapter 3: Operators

---

# What Are Operators?

Operators perform operations on values.

Example:

```js
10 + 20
```

`+` is an operator.

---

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

# Best Practices

✅ Prefer strict equality

```js
===
```

✅ Use optional chaining

✅ Use nullish coalescing

---

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

## Part 1 Complete

Covered:

✔ JavaScript Introduction
✔ Variables
✔ Data Types
✔ Operators

---
