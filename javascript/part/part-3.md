# JavaScript Complete Interview Handbook

# Part 3 — Execution Context, Call Stack, Closures, `this`, call(), apply(), bind()

---

# Chapter 8: Execution Context

---

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

# Why It Matters

Execution Context is the foundation of:

* Hoisting
* Scope
* Closures
* `this`
* Call Stack

Many advanced interview questions are impossible to answer without understanding it.

---

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

# Types of Execution Context

There are 3 main types:

### 1. Global Execution Context (GEC)

Created when JavaScript starts.

```js
console.log("Hello");
```

Even this creates a Global Execution Context.

---

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

### 3. Eval Execution Context

Created by:

```js
eval("console.log('Hello')");
```

Rarely used and generally avoided.

---

# Lifecycle of Execution Context

Execution Context has two phases:

```text
Creation Phase
      ↓
Execution Phase
```

---

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

# Execution Phase

Now code executes line by line.

```js
a = 10
```

Value is assigned.

---

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

# Interview Question

### What happens when JavaScript runs code?

Answer:

1. Global Execution Context created
2. Memory Allocation Phase
3. Execution Phase
4. Functions create their own execution contexts
5. Contexts are managed using Call Stack

---

# Common Mistakes

❌ Thinking functions execute immediately

Functions are stored first during creation phase.

---

❌ Confusing hoisting with execution

Hoisting happens during creation phase.

---

# Best Practices

✅ Understand memory creation

✅ Visualize execution contexts

✅ Learn call stack together with execution context

---

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

# Chapter 9: Call Stack

---

# Definition

Call Stack is a data structure used by JavaScript to track function execution.

JavaScript uses:

```text
LIFO
Last In
First Out
```

---

# Why It Matters

Understanding the Call Stack explains:

* Function execution
* Recursion
* Stack Overflow
* Event Loop

---

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

# Why?

Function never stops calling itself.

---

# Interview Question

### What is Stack Overflow?

Answer:

When too many execution contexts accumulate in the call stack and exceed memory limits.

---

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

# Chapter 10: Closures

---

# Definition

A Closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.

---

# Why It Matters

Closures are one of the most important JavaScript interview topics.

Used heavily in:

* React
* Event Handlers
* Timers
* Data Privacy
* Memoization

---

# Real World Analogy

Imagine a backpack.

A child leaves home carrying a backpack.

Even after leaving home, the backpack still contains items from home.

Closure behaves similarly.

Function carries variables from its parent scope.

---

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

# Real World Applications

### Data Privacy

```js
balance
```

hidden from outside.

---

### Event Handlers

```js
button.addEventListener(...)
```

often use closures.

---

### React Hooks

```js
useState()
```

internally relies on closures.

---

### Memoization

Closures store cached values.

---

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

# Common Mistakes

❌ Thinking closure copies values.

Closures store references.

---

❌ Memory leaks due to unused closures.

---

# Best Practices

✅ Use closures for private state

✅ Remove unnecessary references

✅ Understand lexical environment

---

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

# Chapter 11: The `this` Keyword

---

# Definition

`this` refers to the object that is executing the current function.

The value of `this` depends on HOW a function is called.

---

# Golden Rule

```text
Don't ask:

Where was function defined?

Ask:

How was function called?
```

---

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

# Comparison

| Feature      | Regular Function | Arrow Function |
| ------------ | ---------------- | -------------- |
| Own this     | Yes              | No             |
| Lexical this | No               | Yes            |
| Constructor  | Yes              | No             |
| arguments    | Yes              | No             |

---

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

# Chapter 12: call(), apply(), bind()

---

# Definition

These methods allow explicit control of `this`.

---

# Why It Matters

Frequently asked in frontend interviews.

Used in:

* Framework internals
* Libraries
* Custom implementations

---

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

# Comparison Table

| Feature              | call            | apply | bind            |
| -------------------- | --------------- | ----- | --------------- |
| Executes Immediately | Yes             | Yes   | No              |
| Returns Function     | No              | No    | Yes             |
| Arguments            | Comma Separated | Array | Comma Separated |

---

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

# Interview Question

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

# Common Mistakes

❌ Forgetting bind returns a function.

```js
const fn =
greet.bind(user);
```

Function not executed yet.

---

# Best Practices

✅ Use bind for event handlers

✅ Use call/apply for function borrowing

---

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

# Part 3 Complete

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
