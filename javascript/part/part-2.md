# JavaScript Complete Interview Handbook

# Part 2 — Core JavaScript Fundamentals (Interview Focused)

---

# Chapter 4: Type Conversion & Coercion

---

# Definition

Type Conversion is the process of changing a value from one data type to another.

JavaScript can do this:

1. Automatically (Implicit Conversion / Coercion)
2. Manually (Explicit Conversion)

---

# Why It Matters

Many JavaScript interview questions are based on type coercion.

Example:

```js
"5" + 1
```

Output:

```js
"51"
```

Why?

Because JavaScript converted `1` into a string.

---

# Real World Analogy

Imagine:

```text
Human + Robot Conversation
```

One side adapts automatically.

JavaScript behaves similarly.

---

# Explicit Conversion

You intentionally convert values.

---

## String Conversion

```js
String(123)
```

Output:

```js
"123"
```

---

Example:

```js
const age = 25;

console.log(String(age));
```

Output:

```js
"25"
```

---

## Number Conversion

```js
Number("123")
```

Output:

```js
123
```

---

Example:

```js
Number("10")
```

Output:

```js
10
```

---

Invalid Conversion

```js
Number("Hello")
```

Output:

```js
NaN
```

NaN = Not a Number

---

## Boolean Conversion

```js
Boolean(1)
```

Output:

```js
true
```

---

```js
Boolean(0)
```

Output:

```js
false
```

---

# Implicit Conversion (Coercion)

JavaScript automatically converts values.

---

Example

```js
"5" + 2
```

Output:

```js
"52"
```

---

Explanation

```text
String + Number
↓
Convert Number to String
↓
Concatenate
```

---

Example

```js
"5" - 2
```

Output:

```js
3
```

Why?

Because subtraction only works on numbers.

---

Example

```js
"5" * 2
```

Output:

```js
10
```

---

# Truthy and Falsy Values

Every value in JavaScript is either:

```text
Truthy
Falsy
```

---

## Falsy Values

Only 8 values are falsy:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy.

---

Examples

```js
Boolean("")
```

Output:

```js
false
```

---

```js
Boolean("Hello")
```

Output:

```js
true
```

---

# Equality Operators

---

## Loose Equality (==)

Performs coercion.

```js
5 == "5"
```

Output:

```js
true
```

---

## Strict Equality (===)

No coercion.

```js
5 === "5"
```

Output:

```js
false
```

---

# Common Interview Questions

---

Q:

```js
[] == false
```

Answer:

```js
true
```

Because coercion occurs.

---

Q:

```js
null == undefined
```

Answer:

```js
true
```

---

Q:

```js
null === undefined
```

Answer:

```js
false
```

---

# Common Mistakes

❌ Using:

```js
==
```

instead of

```js
===
```

---

❌ Assuming:

```js
Boolean([])
```

is false.

Actually:

```js
true
```

---

# Best Practices

✅ Prefer `===`

✅ Avoid relying on coercion

✅ Use explicit conversion

---

# Quick Revision Notes

```text
==  → Coercion
=== → No Coercion

Falsy:
false
0
-0
0n
""
null
undefined
NaN

Everything else → Truthy
```

---

# Chapter 5: Scope

---

# Definition

Scope determines where variables can be accessed.

Think of scope as a variable's visibility area.

---

# Why It Matters

Most closure and hoisting interview questions depend on scope.

---

# Types of Scope

1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope

---

# Global Scope

Accessible everywhere.

```js
let name = "Rohit";

function greet() {
  console.log(name);
}
```

Output:

```js
Rohit
```

---

ASCII Diagram

```text
GLOBAL SCOPE
 ├─ name
 ├─ greet()
 └─ age
```

---

# Function Scope

Variables declared inside functions.

```js
function test() {
  let age = 25;
}

console.log(age);
```

Output:

```js
ReferenceError
```

---

# Block Scope

Introduced by:

```js
let
const
```

---

Example

```js
if (true) {
  let city = "Jodhpur";
}

console.log(city);
```

Output:

```js
ReferenceError
```

---

# var is NOT Block Scoped

```js
if (true) {
  var city = "Jodhpur";
}

console.log(city);
```

Output:

```js
Jodhpur
```

---

# Lexical Scope

Functions can access variables from outer scopes.

---

Example

```js
function outer() {
  let name = "Rohit";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
```

Output:

```js
Rohit
```

---

ASCII Diagram

```text
Global
   ↓
Outer
   ↓
Inner
```

Inner can access Outer.

---

# Scope Chain

When JS cannot find a variable:

```text
Current Scope
     ↓
Parent Scope
     ↓
Global Scope
```

---

Example

```js
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(a);
    console.log(b);
  }

  inner();
}
```

---

# Common Interview Questions

---

Q: Difference between block scope and function scope?

| Feature          | Block Scope | Function Scope |
| ---------------- | ----------- | -------------- |
| Created By       | let,const   | var            |
| Exists Inside {} | Yes         | No             |

---

Q: What is Lexical Scope?

Answer:

A function can access variables from its parent scope.

---

# Common Mistakes

❌ Thinking var is block scoped.

❌ Assuming inner scope variables are accessible outside.

---

# Best Practices

✅ Use let and const

✅ Avoid var

✅ Understand scope chain

---

# Quick Revision Notes

```text
Global Scope
Function Scope
Block Scope
Lexical Scope

let → Block Scope
const → Block Scope
var → Function Scope
```

---

# Chapter 6: Hoisting

---

# Definition

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

---

# Why It Matters

One of the most frequently asked interview topics.

---

# Visual Representation

Code:

```js
console.log(a);

var a = 10;
```

JavaScript internally:

```js
var a;

console.log(a);

a = 10;
```

---

Output

```js
undefined
```

---

# Variable Hoisting

---

## var

```js
console.log(a);

var a = 10;
```

Output:

```js
undefined
```

---

## let

```js
console.log(a);

let a = 10;
```

Output:

```js
ReferenceError
```

---

## const

```js
console.log(a);

const a = 10;
```

Output:

```js
ReferenceError
```

---

# Temporal Dead Zone (TDZ)

The time between:

```text
Variable Creation
        ↓
Variable Initialization
```

is called TDZ.

---

Example

```js
console.log(name);

let name = "Rohit";
```

TDZ exists here.

---

ASCII Diagram

```text
Creation
   ↓
 TDZ
   ↓
Initialization
```

---

# Function Hoisting

---

## Function Declaration

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Output:

```js
Hello
```

Works.

---

## Function Expression

```js
sayHello();

const sayHello = function() {
  console.log("Hello");
};
```

Output:

```js
ReferenceError
```

---

# Interview Favorite

---

Question:

```js
var a = 1;

function test() {
  console.log(a);

  var a = 2;
}

test();
```

Output:

```js
undefined
```

Reason:

```js
function test() {
  var a;

  console.log(a);

  a = 2;
}
```

---

# Common Mistakes

❌ Believing variables move physically.

Only declarations are hoisted.

---

❌ Confusing hoisting with initialization.

---

# Best Practices

✅ Declare before use

✅ Prefer let and const

---

# Quick Revision Notes

```text
var:
Hoisted → undefined

let:
Hoisted → TDZ

const:
Hoisted → TDZ

Function Declaration:
Fully hoisted
```

---

# Chapter 7: Functions

---

# Definition

Functions are reusable blocks of code.

---

# Why It Matters

Functions are first-class citizens in JavaScript.

Almost every advanced concept depends on them.

---

# Function Declaration

```js
function greet() {
  console.log("Hello");
}
```

---

Calling Function

```js
greet();
```

Output:

```js
Hello
```

---

# Function Expression

```js
const greet = function() {
  console.log("Hello");
};
```

---

Difference

| Feature       | Declaration | Expression |
| ------------- | ----------- | ---------- |
| Hoisted       | Yes         | No         |
| Name Optional | No          | Yes        |

---

# Arrow Functions

Introduced in ES6.

```js
const greet = () => {
  console.log("Hello");
};
```

---

Short Syntax

```js
const add = (a,b) => a + b;
```

---

Equivalent

```js
function add(a,b) {
  return a+b;
}
```

---

# IIFE

Immediately Invoked Function Expression

---

Syntax

```js
(function() {
  console.log("Executed");
})();
```

Output:

```js
Executed
```

---

Purpose

Avoid polluting global scope.

---

# Higher Order Functions

Functions that:

1. Accept functions
2. Return functions

---

Example

```js
function greet(fn) {
  fn();
}

greet(function() {
  console.log("Hello");
});
```

---

# Callback Functions

Function passed as argument.

```js
function greet(callback) {
  callback();
}

greet(() => {
  console.log("Hi");
});
```

---

# Pure Functions

Same input → Same output

No side effects.

---

Example

```js
function add(a,b) {
  return a+b;
}
```

Pure.

---

Not Pure

```js
let total = 0;

function add(num) {
  total += num;
}
```

Depends on external state.

---

# Function Parameters vs Arguments

```js
function add(a,b) {
  return a+b;
}
```

Parameters:

```js
a,b
```

---

Arguments:

```js
add(5,10);
```

Arguments:

```js
5,10
```

---

# Default Parameters

```js
function greet(name = "Guest") {
  console.log(name);
}
```

---

Output

```js
greet();
```

```js
Guest
```

---

# Rest Parameters

```js
function sum(...nums) {
  return nums.reduce(
    (acc, cur) => acc + cur,
    0
  );
}
```

---

# Interview Favorite

---

Q:

```js
function test() {
  return;
  {
    name: "Rohit";
  }
}

console.log(test());
```

Output:

```js
undefined
```

Automatic semicolon insertion.

---

# Arrow Functions vs Regular Functions

| Feature     | Regular          | Arrow     |
| ----------- | ---------------- | --------- |
| this        | Own              | Inherited |
| arguments   | Yes              | No        |
| Constructor | Yes              | No        |
| Hoisting    | Declaration Only | No        |

---

# Common Mistakes

❌ Using arrow functions everywhere.

❌ Forgetting return in arrow functions.

---

Example

```js
const add = (a,b) => {
  a+b;
};
```

Returns:

```js
undefined
```

Need:

```js
const add = (a,b) => a+b;
```

or

```js
const add = (a,b) => {
  return a+b;
};
```

---

# Best Practices

✅ Use arrow functions for callbacks

✅ Use regular functions for object methods when `this` matters

✅ Keep functions small

✅ Prefer pure functions

---

# Interview Questions

### Beginner

Q: Difference between parameters and arguments?

Answer:

Parameters = function definition

Arguments = actual values passed

---

### Intermediate

Q: What is a Higher Order Function?

Answer:

Function that accepts or returns another function.

---

### Advanced

Q: Why don't arrow functions have their own `this`?

Answer:

Arrow functions use lexical `this`, meaning they inherit `this` from the surrounding scope.

---

# Quick Revision Notes

```text
Function Declaration
Function Expression
Arrow Function
IIFE
Callback
Higher Order Function
Pure Function

Arrow Function:
No own this
No arguments
No constructor
```

---

# Part 2 Complete

Covered:

✅ Type Conversion & Coercion
✅ Truthy & Falsy Values
✅ Scope
✅ Lexical Scope
✅ Scope Chain
✅ Hoisting
✅ Temporal Dead Zone (TDZ)
✅ Function Declarations
✅ Function Expressions
✅ Arrow Functions
✅ IIFE
✅ Higher Order Functions
✅ Callback Functions
✅ Pure Functions

---
