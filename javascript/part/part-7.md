# JavaScript Complete Interview Handbook

# Part 7 — Modules, Memory Management, Garbage Collection, Debouncing, Throttling, Currying, Memoization, Function Composition & Recursion

---

## Table of Contents

- [Chapter 29: JavaScript Modules](#chapter-29-javascript-modules)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Problems Before Modules](#problems-before-modules)
  - [ES Modules (ESM)](#es-modules-esm)
  - [Export](#export)
      - [Named Export](#named-export)
      - [Import](#import)
  - [Default Export](#default-export)
  - [Named vs Default Export](#named-vs-default-export)
  - [Import Everything](#import-everything)
  - [CommonJS](#commonjs)
  - [ESM vs CommonJS](#esm-vs-commonjs)
  - [Dynamic Import](#dynamic-import)
  - [Interview Questions](#interview-questions)
      - [Difference between ESM and CommonJS?](#difference-between-esm-and-commonjs)
      - [What is Tree Shaking?](#what-is-tree-shaking)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 30: Memory Management](#chapter-30-memory-management)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Memory Lifecycle](#memory-lifecycle)
  - [Example](#example)
  - [Types of Memory](#types-of-memory)
  - [Stack Memory](#stack-memory)
  - [Characteristics](#characteristics)
  - [Heap Memory](#heap-memory)
  - [Visual Diagram](#visual-diagram)
  - [Why Objects Behave Differently](#why-objects-behave-differently)
  - [Interview Question](#interview-question)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 31: Garbage Collection](#chapter-31-garbage-collection)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Mark and Sweep](#mark-and-sweep)
  - [Example](#example)
  - [Memory Leak Example](#memory-leak-example)
  - [Common Memory Leaks](#common-memory-leaks)
    - [Global Variables](#global-variables)
    - [Detached DOM Elements](#detached-dom-elements)
    - [Closures](#closures)
  - [Best Practices](#best-practices)
  - [Interview Questions](#interview-questions)
      - [Does JavaScript have manual memory management?](#does-javascript-have-manual-memory-management)
      - [What algorithm is used?](#what-algorithm-is-used)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 32: Debouncing](#chapter-32-debouncing)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Problem](#problem)
  - [Debounced Solution](#debounced-solution)
  - [Interview Questions](#interview-questions)
      - [Use case of Debouncing?](#use-case-of-debouncing)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 33: Throttling](#chapter-33-throttling)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Example](#example)
  - [Difference](#difference)
  - [Visual Comparison](#visual-comparison)
  - [Interview Questions](#interview-questions)
      - [Difference between Debouncing and Throttling?](#difference-between-debouncing-and-throttling)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 34: Currying](#chapter-34-currying)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Example](#example)
  - [Practical Example](#practical-example)
  - [Interview Questions](#interview-questions)
      - [Why use currying?](#why-use-currying)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 35: Memoization](#chapter-35-memoization)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Example](#example)
  - [Visualization](#visualization)
  - [Real World Usage](#real-world-usage)
  - [Interview Questions](#interview-questions)
      - [Difference between Memoization and Caching?](#difference-between-memoization-and-caching)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 36: Function Composition](#chapter-36-function-composition)
  - [Definition](#definition)
  - [Formula](#formula)
  - [Example](#example)
  - [Compose Utility](#compose-utility)
  - [Benefits](#benefits)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 37: Recursion](#chapter-37-recursion)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Basic Example](#basic-example)
  - [Base Condition](#base-condition)
  - [Factorial Example](#factorial-example)
  - [Recursion vs Loop](#recursion-vs-loop)
  - [Interview Questions](#interview-questions)
      - [What are the two requirements of recursion?](#what-are-the-two-requirements-of-recursion)
      - [Why does recursion cause stack overflow?](#why-does-recursion-cause-stack-overflow)
  - [Quick Revision Notes](#quick-revision-notes)
  - [Part 7 Complete](#part-7-complete)
      - [Covered](#covered)

---

# Chapter 29: JavaScript Modules

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Modules allow code to be split into multiple files and reused across an application.

Without modules:

```text
Huge File
10,000+ Lines
Hard to Maintain
```

With modules:

```text
auth.js
api.js
utils.js
constants.js
```

Cleaner and maintainable.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Modern React, Next.js, Node.js, and large-scale applications rely heavily on modules.

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Imagine a house:

```text
Kitchen
Bedroom
Bathroom
Living Room
```

Each room has a specific purpose.

Modules work the same way.

---

**[⬆ Back to Top](#table-of-contents)**

# Problems Before Modules

Developers relied on:

```html
<script src="a.js"></script>
<script src="b.js"></script>
```

Issues:

* Global namespace pollution
* Dependency management problems
* Load order issues

---

**[⬆ Back to Top](#table-of-contents)**

# ES Modules (ESM)

Modern JavaScript standard.

---

**[⬆ Back to Top](#table-of-contents)**

# Export

**[⬆ Back to Top](#table-of-contents)**

### Named Export

```js
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}
```

---

**[⬆ Back to Top](#table-of-contents)**

### Import

```js
import { PI, add }
from "./math.js";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Default Export

```js
export default function greet() {
  console.log("Hello");
}
```

---

Import:

```js
import greet
from "./greet.js";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Named vs Default Export

| Feature           | Named | Default |
| ----------------- | ----- | ------- |
| Multiple Allowed  | ✅     | ❌       |
| Import Name Fixed | ✅     | ❌       |
| Curly Braces      | ✅     | ❌       |

---

**[⬆ Back to Top](#table-of-contents)**

# Import Everything

```js
import * as MathUtils
from "./math.js";
```

Usage:

```js
MathUtils.add(1, 2);
```

---

**[⬆ Back to Top](#table-of-contents)**

# CommonJS

Used mainly in Node.js.

---

Export

```js
module.exports = {
  add
};
```

---

Import

```js
const math =
require("./math");
```

---

**[⬆ Back to Top](#table-of-contents)**

# ESM vs CommonJS

| Feature         | ESM           | CommonJS               |
| --------------- | ------------- | ---------------------- |
| Syntax          | import/export | require/module.exports |
| Static Analysis | Yes           | No                     |
| Tree Shaking    | Yes           | No                     |
| Browser Support | Native        | No                     |

---

**[⬆ Back to Top](#table-of-contents)**

# Dynamic Import

Loads modules on demand.

```js
const module =
await import("./utils.js");
```

---

Useful for:

```text
Lazy Loading
Code Splitting
Performance Optimization
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Difference between ESM and CommonJS?

Answer:

ESM uses `import/export`, supports tree shaking and static analysis.

CommonJS uses `require()` and `module.exports`.

---

**[⬆ Back to Top](#table-of-contents)**

### What is Tree Shaking?

Answer:

Removing unused code during build time.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
ESM:
import/export

CommonJS:
require/module.exports

Named Export:
{}

Default Export:
No {}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 30: Memory Management

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Memory Management refers to how JavaScript allocates, uses, and releases memory.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Understanding memory helps prevent:

```text
Memory Leaks
Performance Issues
Browser Crashes
```

---

**[⬆ Back to Top](#table-of-contents)**

# Memory Lifecycle

```text
Allocate Memory
       ↓
Use Memory
       ↓
Release Memory
```

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
let name = "Rohit";
```

Memory allocated.

Later:

```js
name = null;
```

Memory becomes eligible for cleanup.

---

**[⬆ Back to Top](#table-of-contents)**

# Types of Memory

```text
Stack Memory
Heap Memory
```

---

**[⬆ Back to Top](#table-of-contents)**

# Stack Memory

Stores:

```text
Primitive Values
Function Calls
References
```

---

Example

```js
let age = 25;
let name = "Rohit";
```

Stored in Stack.

---

**[⬆ Back to Top](#table-of-contents)**

# Characteristics

```text
Fast
Fixed Size
Ordered
```

---

**[⬆ Back to Top](#table-of-contents)**

# Heap Memory

Stores:

```text
Objects
Arrays
Functions
Maps
Sets
```

---

Example

```js
const user = {
  name: "Rohit"
};
```

Stored in Heap.

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
STACK

age → 25
name → Rohit

user → 0x123

      ↓

HEAP

0x123
{
 name: "Rohit"
}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why Objects Behave Differently

```js
const a = {
  name: "Rohit"
};

const b = a;
```

Both references point to same memory location.

---

Visualization

```text
a ──┐
    │
    ▼
   Heap Object

b ──┘
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

Why does changing `b.name` affect `a.name`?

Answer:

Both variables reference the same heap object.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Stack:
Primitive Values

Heap:
Objects
Arrays
Functions
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 31: Garbage Collection

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Garbage Collection automatically removes unused memory.

JavaScript uses:

```text
Mark and Sweep Algorithm
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Prevents developers from manually freeing memory.

Unlike:

```text
C
C++
```

---

**[⬆ Back to Top](#table-of-contents)**

# Mark and Sweep

Step 1:

Identify reachable objects.

```text
Window
 ↓
Variables
 ↓
Objects
```

---

Step 2:

Mark reachable objects.

---

Step 3:

Remove unreachable objects.

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
let user = {
  name: "Rohit"
};

user = null;
```

Original object becomes unreachable.

Garbage collector removes it.

---

**[⬆ Back to Top](#table-of-contents)**

# Memory Leak Example

```js
let users = [];

function addUser() {
  users.push(
    new Array(1000000)
  );
}
```

Repeated calls increase memory.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Memory Leaks

---

**[⬆ Back to Top](#table-of-contents)**

## Global Variables

```js
user = {};
```

Forgot:

```js
let
const
```

---

**[⬆ Back to Top](#table-of-contents)**

## Detached DOM Elements

```js
const button =
document.querySelector("#btn");

button.remove();
```

Reference still exists.

Memory remains allocated.

---

**[⬆ Back to Top](#table-of-contents)**

## Closures

```js
function test() {
  const hugeData =
    new Array(100000);

  return function() {
    console.log("Hello");
  };
}
```

Closure keeps data alive.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Remove unused references

✅ Avoid accidental globals

✅ Clean event listeners

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Does JavaScript have manual memory management?

Answer:

No.

Garbage Collector handles memory automatically.

---

**[⬆ Back to Top](#table-of-contents)**

### What algorithm is used?

Answer:

Mark and Sweep.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Garbage Collection

Algorithm:
Mark & Sweep

Memory Leaks:
Globals
Closures
DOM References
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 32: Debouncing

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Debouncing delays execution until a period of inactivity.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Improves performance.

Useful for:

```text
Search Inputs
Resize Events
Auto Save
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Elevator doors.

People keep entering.

Door waits.

Only closes after inactivity.

---

**[⬆ Back to Top](#table-of-contents)**

# Problem

```js
input.addEventListener(
 "input",
 search
);
```

Every keystroke triggers API request.

---

Typing:

```text
R
Ro
Roh
Rohi
Rohit
```

5 API calls.

---

**[⬆ Back to Top](#table-of-contents)**

# Debounced Solution

```js
function debounce(
 fn,
 delay
) {

 let timer;

 return function(...args) {

   clearTimeout(timer);

   timer = setTimeout(() => {
     fn(...args);
   }, delay);

 };

}
```

---

Usage

```js
const debouncedSearch =
debounce(search, 500);
```

---

Result

```text
User Stops Typing
       ↓
One API Call
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Use case of Debouncing?

Answer:

Search boxes, form validation, resize events.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Debounce

Wait
Until Inactivity

Search Inputs
Auto Save
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 33: Throttling

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Throttling limits execution to once per specified interval.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Prevents excessive executions.

Useful for:

```text
Scroll Events
Mouse Move
Window Resize
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Water tap.

Maximum flow rate.

No matter how much pressure applied.

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
function throttle(
 fn,
 delay
) {

 let allowed = true;

 return function(...args) {

   if (!allowed) return;

   fn(...args);

   allowed = false;

   setTimeout(() => {
     allowed = true;
   }, delay);

 };

}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Difference

| Debounce            | Throttle              |
| ------------------- | --------------------- |
| Waits               | Limits Rate           |
| Executes After Stop | Executes Periodically |

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Comparison

Typing:

```text
a b c d e f
```

Debounce:

```text
------f
```

Throttle:

```text
a---c---e
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Difference between Debouncing and Throttling?

Answer:

Debouncing waits for inactivity.

Throttling limits execution frequency.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Debounce:
After Stop

Throttle:
At Fixed Interval
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 34: Currying

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Currying transforms:

```js
f(a,b,c)
```

into:

```js
f(a)(b)(c)
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Creates reusable and configurable functions.

---

**[⬆ Back to Top](#table-of-contents)**

# Example

Normal:

```js
function add(a,b) {
  return a+b;
}
```

---

Curried:

```js
function add(a) {

  return function(b) {
    return a+b;
  };

}
```

---

Usage

```js
add(5)(10);
```

Output:

```text
15
```

---

**[⬆ Back to Top](#table-of-contents)**

# Practical Example

```js
const multiply =
a =>
b =>
a*b;
```

---

Create Specialized Function

```js
const double =
multiply(2);
```

Usage:

```js
double(10);
```

Output:

```text
20
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Why use currying?

Answer:

Reusability, partial application, functional programming.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
f(a,b)
 ↓
f(a)(b)

Benefits:
Reusable Functions
Partial Application
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 35: Memoization

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Memoization caches expensive computations.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Improves performance dramatically.

---

**[⬆ Back to Top](#table-of-contents)**

# Example

Without Memoization

```js
function square(n) {
  return n*n;
}
```

Repeated calls recompute.

---

Memoized Version

```js
function memoizedSquare() {

 const cache = {};

 return function(n) {

   if (cache[n]) {
     return cache[n];
   }

   cache[n] = n*n;

   return cache[n];
 };

}
```

---

Usage

```js
const square =
memoizedSquare();

square(5);
square(5);
```

Second call uses cache.

---

**[⬆ Back to Top](#table-of-contents)**

# Visualization

```text
square(5)

Cache Miss
 ↓
Compute
 ↓
Store

square(5)

Cache Hit
 ↓
Return Cached
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Usage

```text
React Memoization
Caching API Results
Expensive Calculations
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Difference between Memoization and Caching?

Answer:

Memoization is a specialized form of caching for function results.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Input
 ↓
Cache?
 ↓
Yes → Return

No → Compute
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 36: Function Composition

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Function Composition combines multiple functions into one.

---

**[⬆ Back to Top](#table-of-contents)**

# Formula

```text
f(g(x))
```

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
const double =
x => x * 2;

const square =
x => x * x;

const result =
square(double(5));
```

Output:

```text
100
```

---

Visualization

```text
5
 ↓
double
 ↓
10
 ↓
square
 ↓
100
```

---

**[⬆ Back to Top](#table-of-contents)**

# Compose Utility

```js
const compose =
(...fns) =>
value =>
fns.reduceRight(
 (acc, fn) => fn(acc),
 value
);
```

---

Usage

```js
const transform =
compose(
 square,
 double
);

transform(5);
```

Output:

```text
100
```

---

**[⬆ Back to Top](#table-of-contents)**

# Benefits

```text
Readable
Reusable
Functional Programming
```

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
compose(
 f,
 g
)

f(g(x))
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 37: Recursion

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Recursion is when a function calls itself.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Used in:

```text
Tree Traversal
DOM Traversal
Algorithms
File Systems
```

---

**[⬆ Back to Top](#table-of-contents)**

# Basic Example

```js
function countDown(n) {

 if (n === 0) {
   return;
 }

 console.log(n);

 countDown(n - 1);

}
```

---

Output

```text
5
4
3
2
1
```

---

**[⬆ Back to Top](#table-of-contents)**

# Base Condition

Most important part.

```js
if (n === 0)
```

Stops recursion.

---

Without Base Condition

```js
function test() {
  test();
}
```

Output:

```text
Maximum call stack size exceeded
```

---

**[⬆ Back to Top](#table-of-contents)**

# Factorial Example

Mathematical:

```text
5!
=
5×4×3×2×1
```

---

Recursive Solution

```js
function factorial(n) {

 if (n === 1)
   return 1;

 return n *
 factorial(n-1);

}
```

---

Visualization

```text
factorial(5)

5 × factorial(4)

4 × factorial(3)

3 × factorial(2)

2 × factorial(1)

1
```

---

Result

```text
120
```

---

**[⬆ Back to Top](#table-of-contents)**

# Recursion vs Loop

| Feature     | Recursion        | Loop                        |
| ----------- | ---------------- | --------------------------- |
| Readability | Better for trees | Better for simple iteration |
| Memory      | More             | Less                        |
| Performance | Slower           | Faster                      |

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### What are the two requirements of recursion?

Answer:

1. Base Condition
2. Recursive Call

---

**[⬆ Back to Top](#table-of-contents)**

### Why does recursion cause stack overflow?

Answer:

Every recursive call creates a new execution context in the Call Stack.

Too many calls exhaust stack memory.

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Recursion

Needs:
1. Base Condition
2. Recursive Call

Danger:
Stack Overflow
```

---

**[⬆ Back to Top](#table-of-contents)**

# Part 7 Complete

**[⬆ Back to Top](#table-of-contents)**

### Covered

✅ Modules (ESM & CommonJS)
✅ Named & Default Exports
✅ Dynamic Imports
✅ Memory Management
✅ Stack Memory
✅ Heap Memory
✅ Garbage Collection
✅ Memory Leaks
✅ Debouncing
✅ Throttling
✅ Currying
✅ Memoization
✅ Function Composition
✅ Recursion

---


**[⬆ Back to Top](#table-of-contents)**
