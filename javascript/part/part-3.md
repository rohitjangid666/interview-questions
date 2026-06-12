# JavaScript Complete Interview Handbook

# Part 3 — Execution Context, Call Stack, Closures, `this`, call(), apply(), bind()

---

## Table of Contents

- [Chapter 8: Execution Context](#chapter-8-execution-context)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Types of Execution Context](#types-of-execution-context)
      - [1. Global Execution Context (GEC)](#1-global-execution-context-gec)
      - [2. Function Execution Context (FEC)](#2-function-execution-context-fec)
      - [3. Eval Execution Context](#3-eval-execution-context)
  - [Lifecycle of Execution Context](#lifecycle-of-execution-context)
  - [Creation Phase](#creation-phase)
  - [Execution Phase](#execution-phase)
  - [Visual Diagram](#visual-diagram)
  - [Example](#example)
  - [Interview Question](#interview-question)
      - [What happens when JavaScript runs code?](#what-happens-when-javascript-runs-code)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 9: Call Stack](#chapter-9-call-stack)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Example](#example)
  - [Stack Visualization](#stack-visualization)
  - [ASCII Diagram](#ascii-diagram)
  - [Stack Overflow](#stack-overflow)
  - [Why?](#why)
  - [Interview Question](#interview-question)
      - [What is Stack Overflow?](#what-is-stack-overflow)
  - [Common Mistakes](#common-mistakes)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 10: Closures](#chapter-10-closures)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Basic Example](#basic-example)
  - [How It Works](#how-it-works)
  - [Visual Diagram](#visual-diagram)
  - [Lexical Environment](#lexical-environment)
  - [Practical Use: Private Variables](#practical-use-private-variables)
  - [Real World Applications](#real-world-applications)
      - [Data Privacy](#data-privacy)
      - [Event Handlers](#event-handlers)
      - [React Hooks](#react-hooks)
      - [Memoization](#memoization)
  - [Interview Favorite](#interview-favorite)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 11: The `this` Keyword](#chapter-11-the-this-keyword)
  - [Definition](#definition)
  - [Golden Rule](#golden-rule)
  - [Global Context](#global-context)
  - [Object Method](#object-method)
  - [Regular Function](#regular-function)
  - [Arrow Functions](#arrow-functions)
  - [Common Interview Question](#common-interview-question)
  - [Comparison](#comparison)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 12: call(), apply(), bind()](#chapter-12-call-apply-bind)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [call()](#call)
  - [apply()](#apply)
  - [bind()](#bind)
  - [Comparison Table](#comparison-table)
  - [Visual Diagram](#visual-diagram)
  - [Real World Example](#real-world-example)
  - [Interview Question](#interview-question)
      - [Difference between call, apply and bind?](#difference-between-call-apply-and-bind)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
  - [Part 3 Complete](#part-3-complete)
      - [Covered](#covered)

---

# Chapter 8: Execution Context

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

An **Execution Context** is the environment in which JavaScript code is evaluated and executed.

Think of it as a special box that contains everything JavaScript needs to run your code.

```text
Variables
Functions
Scope Information
this Value
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Execution Context is the foundation of:

* Hoisting
* Scope
* Closures
* `this`
* Call Stack

Many advanced interview questions are impossible to answer without understanding it.

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Imagine a chef in a kitchen.

Before cooking:

```text
Ingredients Ready
Tools Ready
Recipes Ready
```

Then cooking starts.

JavaScript does something similar.

First it prepares.

Then it executes.

---

**[⬆ Back to Top](#table-of-contents)**

# Types of Execution Context

There are 3 main types:

**[⬆ Back to Top](#table-of-contents)**

### 1. Global Execution Context (GEC)

Created when JavaScript starts.

```js
console.log("Hello");
```

Even this creates a Global Execution Context.

---

**[⬆ Back to Top](#table-of-contents)**

### 2. Function Execution Context (FEC)

Created every time a function is called.

```js
function greet() {
  console.log("Hello");
}

greet();
```

Calling `greet()` creates a new execution context.

---

**[⬆ Back to Top](#table-of-contents)**

### 3. Eval Execution Context

Created by:

```js
eval("console.log('Hello')");
```

Rarely used and generally avoided.

---

**[⬆ Back to Top](#table-of-contents)**

# Lifecycle of Execution Context

Execution Context has two phases:

```text
Creation Phase
      ↓
Execution Phase
```

---

**[⬆ Back to Top](#table-of-contents)**

# Creation Phase

JavaScript scans the code.

It allocates memory.

Example:

```js
var a = 10;

function greet() {}
```

Memory Allocation:

```text
a → undefined

greet → function definition
```

---

**[⬆ Back to Top](#table-of-contents)**

# Execution Phase

Now code executes line by line.

```js
a = 10
```

Value is assigned.

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
Execution Context

 ┌─────────────────────┐
 │ Creation Phase      │
 │                     │
 │ a → undefined       │
 │ greet → function    │
 └─────────────────────┘
            ↓
 ┌─────────────────────┐
 │ Execution Phase     │
 │                     │
 │ a = 10              │
 │ greet() executes    │
 └─────────────────────┘
```

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
var x = 10;

function test() {
  var y = 20;
}

test();
```

---

Creation Phase

```text
Global Memory

x → undefined

test → function
```

---

Execution Phase

```text
x → 10

test() called
```

Function Context Created:

```text
y → undefined
```

Then:

```text
y → 20
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### What happens when JavaScript runs code?

Answer:

1. Global Execution Context created
2. Memory Allocation Phase
3. Execution Phase
4. Functions create their own execution contexts
5. Contexts are managed using Call Stack

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Thinking functions execute immediately

Functions are stored first during creation phase.

---

❌ Confusing hoisting with execution

Hoisting happens during creation phase.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Understand memory creation

✅ Visualize execution contexts

✅ Learn call stack together with execution context

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Execution Context

Types:
1. Global
2. Function
3. Eval

Phases:
1. Creation
2. Execution

Hoisting occurs during creation phase.
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 9: Call Stack

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Call Stack is a data structure used by JavaScript to track function execution.

JavaScript uses:

```text
LIFO
Last In
First Out
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Understanding the Call Stack explains:

* Function execution
* Recursion
* Stack Overflow
* Event Loop

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Imagine a stack of plates.

```text
Plate 3
Plate 2
Plate 1
```

Last plate placed is removed first.

Same idea.

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Hello");
}

first();
```

---

**[⬆ Back to Top](#table-of-contents)**

# Stack Visualization

Initial:

```text
Global
```

---

Call first()

```text
first()
Global
```

---

Call second()

```text
second()
first()
Global
```

---

Call third()

```text
third()
second()
first()
Global
```

---

After execution:

```text
Global
```

---

**[⬆ Back to Top](#table-of-contents)**

# ASCII Diagram

```text
┌──────────┐
│ third()  │
├──────────┤
│ second() │
├──────────┤
│ first()  │
├──────────┤
│ Global   │
└──────────┘
```

---

**[⬆ Back to Top](#table-of-contents)**

# Stack Overflow

Occurs when stack grows too much.

Example:

```js
function test() {
  test();
}

test();
```

Output:

```text
Maximum call stack size exceeded
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why?

Function never stops calling itself.

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### What is Stack Overflow?

Answer:

When too many execution contexts accumulate in the call stack and exceed memory limits.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Forgetting base condition in recursion.

---

Bad:

```js
function recurse() {
  recurse();
}
```

---

Good:

```js
function recurse(n) {
  if (n === 0) return;

  recurse(n - 1);
}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Call Stack:
LIFO

Push:
Function Call

Pop:
Function Complete

Error:
Maximum call stack size exceeded
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 10: Closures

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

A Closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Closures are one of the most important JavaScript interview topics.

Used heavily in:

* React
* Event Handlers
* Timers
* Data Privacy
* Memoization

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Imagine a backpack.

A child leaves home carrying a backpack.

Even after leaving home, the backpack still contains items from home.

Closure behaves similarly.

Function carries variables from its parent scope.

---

**[⬆ Back to Top](#table-of-contents)**

# Basic Example

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

---

**[⬆ Back to Top](#table-of-contents)**

# How It Works

When `outer()` finishes:

Most variables are removed.

But:

```text
count
```

remains because `inner()` still needs it.

This preserved environment is Closure.

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
outer()

count = 0
    ↓
inner()
    ↓
Returned

Closure Created
```

---

**[⬆ Back to Top](#table-of-contents)**

# Lexical Environment

Closure consists of:

```text
Function
+
Lexical Environment
```

---

Example

```js
function greet(name) {
  return function() {
    console.log(name);
  };
}
```

Returned function remembers:

```text
name
```

---

**[⬆ Back to Top](#table-of-contents)**

# Practical Use: Private Variables

```js
function createBankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}
```

---

Usage

```js
const account =
createBankAccount();

account.deposit(500);

console.log(
 account.getBalance()
);
```

Output:

```text
1500
```

---

Cannot access:

```js
account.balance
```

Output:

```text
undefined
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Applications

**[⬆ Back to Top](#table-of-contents)**

### Data Privacy

```js
balance
```

hidden from outside.

---

**[⬆ Back to Top](#table-of-contents)**

### Event Handlers

```js
button.addEventListener(...)
```

often use closures.

---

**[⬆ Back to Top](#table-of-contents)**

### React Hooks

```js
useState()
```

internally relies on closures.

---

**[⬆ Back to Top](#table-of-contents)**

### Memoization

Closures store cached values.

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Favorite

Question:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output?

Answer:

```text
3
3
3
```

---

Why?

`var` creates one shared variable.

All callbacks reference same variable.

---

Fix:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```text
0
1
2
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Thinking closure copies values.

Closures store references.

---

❌ Memory leaks due to unused closures.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use closures for private state

✅ Remove unnecessary references

✅ Understand lexical environment

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Closure

Function
+
Lexical Environment

Uses:
Private Variables
React Hooks
Memoization
Event Handlers
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 11: The `this` Keyword

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

`this` refers to the object that is executing the current function.

The value of `this` depends on HOW a function is called.

---

**[⬆ Back to Top](#table-of-contents)**

# Golden Rule

```text
Don't ask:

Where was function defined?

Ask:

How was function called?
```

---

**[⬆ Back to Top](#table-of-contents)**

# Global Context

Browser:

```js
console.log(this);
```

Output:

```text
window
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object Method

```js
const user = {
  name: "Rohit",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```text
Rohit
```

---

Here:

```text
this = user
```

---

**[⬆ Back to Top](#table-of-contents)**

# Regular Function

```js
function show() {
  console.log(this);
}

show();
```

---

Browser (non-strict mode):

```text
window
```

---

Strict Mode

```js
"use strict";

function show() {
  console.log(this);
}

show();
```

Output:

```text
undefined
```

---

**[⬆ Back to Top](#table-of-contents)**

# Arrow Functions

Arrow functions do NOT create their own `this`.

They inherit from surrounding scope.

---

Example

```js
const user = {
  name: "Rohit",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};

user.greet();
```

Output:

```text
Rohit
```

---

Why?

Arrow inherits:

```text
this = user
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Interview Question

```js
const user = {
  name: "Rohit",

  greet: () => {
    console.log(this.name);
  }
};

user.greet();
```

Output?

Answer:

```text
undefined
```

Arrow function does not bind `user`.

---

**[⬆ Back to Top](#table-of-contents)**

# Comparison

| Feature      | Regular Function | Arrow Function |
| ------------ | ---------------- | -------------- |
| Own this     | Yes              | No             |
| Lexical this | No               | Yes            |
| Constructor  | Yes              | No             |
| arguments    | Yes              | No             |

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
this depends on call site

Object Method:
this = object

Regular Function:
window / undefined

Arrow:
inherits this
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 12: call(), apply(), bind()

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

These methods allow explicit control of `this`.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Frequently asked in frontend interviews.

Used in:

* Framework internals
* Libraries
* Custom implementations

---

**[⬆ Back to Top](#table-of-contents)**

# call()

Invokes function immediately.

Syntax:

```js
fn.call(thisArg, arg1, arg2)
```

---

Example

```js
function greet(city) {
  console.log(
    this.name,
    city
  );
}

const user = {
  name: "Rohit"
};

greet.call(user, "Jodhpur");
```

Output:

```text
Rohit Jodhpur
```

---

**[⬆ Back to Top](#table-of-contents)**

# apply()

Same as call.

Arguments passed as array.

---

Syntax

```js
fn.apply(thisArg, [args])
```

---

Example

```js
greet.apply(user, ["Jodhpur"]);
```

Output:

```text
Rohit Jodhpur
```

---

**[⬆ Back to Top](#table-of-contents)**

# bind()

Does NOT execute immediately.

Returns a new function.

---

Example

```js
const bound =
greet.bind(user);

bound("Jodhpur");
```

Output:

```text
Rohit Jodhpur
```

---

**[⬆ Back to Top](#table-of-contents)**

# Comparison Table

| Feature              | call            | apply | bind            |
| -------------------- | --------------- | ----- | --------------- |
| Executes Immediately | Yes             | Yes   | No              |
| Returns Function     | No              | No    | Yes             |
| Arguments            | Comma Separated | Array | Comma Separated |

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
call()
 ↓
Execute Now

apply()
 ↓
Execute Now

bind()
 ↓
Return New Function
 ↓
Execute Later
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Example

Button Click

```js
const user = {
  name: "Rohit",

  show() {
    console.log(this.name);
  }
};

button.onclick =
user.show.bind(user);
```

Without bind:

```text
this = button
```

With bind:

```text
this = user
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### Difference between call, apply and bind?

Answer:

```text
call:
Immediate execution
Arguments individually

apply:
Immediate execution
Arguments array

bind:
Returns new function
Execute later
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Forgetting bind returns a function.

```js
const fn =
greet.bind(user);
```

Function not executed yet.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use bind for event handlers

✅ Use call/apply for function borrowing

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
call()
Execute Now

apply()
Execute Now
Array Arguments

bind()
Returns Function
Execute Later
```

---

**[⬆ Back to Top](#table-of-contents)**

# Part 3 Complete

**[⬆ Back to Top](#table-of-contents)**

### Covered

✅ Execution Context
✅ Creation Phase
✅ Execution Phase
✅ Call Stack
✅ Stack Overflow
✅ Closures
✅ Lexical Environment
✅ Private Variables
✅ `this` Keyword
✅ Regular vs Arrow Functions
✅ call()
✅ apply()
✅ bind()

---


**[⬆ Back to Top](#table-of-contents)**
