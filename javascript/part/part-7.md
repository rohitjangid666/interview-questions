# JavaScript Complete Interview Handbook

# Part 7 — Modules, Memory Management, Garbage Collection, Debouncing, Throttling, Currying, Memoization, Function Composition & Recursion

---

# Chapter 29: JavaScript Modules

---

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

# Why It Matters

Modern React, Next.js, Node.js, and large-scale applications rely heavily on modules.

---

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

# ES Modules (ESM)

Modern JavaScript standard.

---

# Export

### Named Export

```js
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}
```

---

### Import

```js
import { PI, add }
from "./math.js";
```

---

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

# Named vs Default Export

| Feature           | Named | Default |
| ----------------- | ----- | ------- |
| Multiple Allowed  | ✅     | ❌       |
| Import Name Fixed | ✅     | ❌       |
| Curly Braces      | ✅     | ❌       |

---

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

# ESM vs CommonJS

| Feature         | ESM           | CommonJS               |
| --------------- | ------------- | ---------------------- |
| Syntax          | import/export | require/module.exports |
| Static Analysis | Yes           | No                     |
| Tree Shaking    | Yes           | No                     |
| Browser Support | Native        | No                     |

---

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

# Interview Questions

### Difference between ESM and CommonJS?

Answer:

ESM uses `import/export`, supports tree shaking and static analysis.

CommonJS uses `require()` and `module.exports`.

---

### What is Tree Shaking?

Answer:

Removing unused code during build time.

---

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

# Chapter 30: Memory Management

---

# Definition

Memory Management refers to how JavaScript allocates, uses, and releases memory.

---

# Why It Matters

Understanding memory helps prevent:

```text
Memory Leaks
Performance Issues
Browser Crashes
```

---

# Memory Lifecycle

```text
Allocate Memory
       ↓
Use Memory
       ↓
Release Memory
```

---

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

# Types of Memory

```text
Stack Memory
Heap Memory
```

---

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

# Characteristics

```text
Fast
Fixed Size
Ordered
```

---

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

# Interview Question

Why does changing `b.name` affect `a.name`?

Answer:

Both variables reference the same heap object.

---

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

# Chapter 31: Garbage Collection

---

# Definition

Garbage Collection automatically removes unused memory.

JavaScript uses:

```text
Mark and Sweep Algorithm
```

---

# Why It Matters

Prevents developers from manually freeing memory.

Unlike:

```text
C
C++
```

---

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

# Common Memory Leaks

---

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

## Detached DOM Elements

```js
const button =
document.querySelector("#btn");

button.remove();
```

Reference still exists.

Memory remains allocated.

---

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

# Best Practices

✅ Remove unused references

✅ Avoid accidental globals

✅ Clean event listeners

---

# Interview Questions

### Does JavaScript have manual memory management?

Answer:

No.

Garbage Collector handles memory automatically.

---

### What algorithm is used?

Answer:

Mark and Sweep.

---

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

# Chapter 32: Debouncing

---

# Definition

Debouncing delays execution until a period of inactivity.

---

# Why It Matters

Improves performance.

Useful for:

```text
Search Inputs
Resize Events
Auto Save
```

---

# Real World Analogy

Elevator doors.

People keep entering.

Door waits.

Only closes after inactivity.

---

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

# Interview Questions

### Use case of Debouncing?

Answer:

Search boxes, form validation, resize events.

---

# Quick Revision Notes

```text
Debounce

Wait
Until Inactivity

Search Inputs
Auto Save
```

---

# Chapter 33: Throttling

---

# Definition

Throttling limits execution to once per specified interval.

---

# Why It Matters

Prevents excessive executions.

Useful for:

```text
Scroll Events
Mouse Move
Window Resize
```

---

# Real World Analogy

Water tap.

Maximum flow rate.

No matter how much pressure applied.

---

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

# Difference

| Debounce            | Throttle              |
| ------------------- | --------------------- |
| Waits               | Limits Rate           |
| Executes After Stop | Executes Periodically |

---

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

# Interview Questions

### Difference between Debouncing and Throttling?

Answer:

Debouncing waits for inactivity.

Throttling limits execution frequency.

---

# Quick Revision Notes

```text
Debounce:
After Stop

Throttle:
At Fixed Interval
```

---

# Chapter 34: Currying

---

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

# Why It Matters

Creates reusable and configurable functions.

---

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

# Interview Questions

### Why use currying?

Answer:

Reusability, partial application, functional programming.

---

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

# Chapter 35: Memoization

---

# Definition

Memoization caches expensive computations.

---

# Why It Matters

Improves performance dramatically.

---

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

# Real World Usage

```text
React Memoization
Caching API Results
Expensive Calculations
```

---

# Interview Questions

### Difference between Memoization and Caching?

Answer:

Memoization is a specialized form of caching for function results.

---

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

# Chapter 36: Function Composition

---

# Definition

Function Composition combines multiple functions into one.

---

# Formula

```text
f(g(x))
```

---

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

# Benefits

```text
Readable
Reusable
Functional Programming
```

---

# Quick Revision Notes

```text
compose(
 f,
 g
)

f(g(x))
```

---

# Chapter 37: Recursion

---

# Definition

Recursion is when a function calls itself.

---

# Why It Matters

Used in:

```text
Tree Traversal
DOM Traversal
Algorithms
File Systems
```

---

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

# Recursion vs Loop

| Feature     | Recursion        | Loop                        |
| ----------- | ---------------- | --------------------------- |
| Readability | Better for trees | Better for simple iteration |
| Memory      | More             | Less                        |
| Performance | Slower           | Faster                      |

---

# Interview Questions

### What are the two requirements of recursion?

Answer:

1. Base Condition
2. Recursive Call

---

### Why does recursion cause stack overflow?

Answer:

Every recursive call creates a new execution context in the Call Stack.

Too many calls exhaust stack memory.

---

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

# Part 7 Complete

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
