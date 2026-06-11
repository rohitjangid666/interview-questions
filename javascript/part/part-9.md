# JavaScript Complete Interview Handbook

# Part 9 — 100+ JavaScript Interview Questions, Coding Challenges & Ultimate Cheat Sheet

---

# Section 1: Beginner Interview Questions (1–30)

---

## 1. What is JavaScript?

### Answer

JavaScript is a high-level, interpreted, single-threaded programming language used to create dynamic and interactive web applications.

---

## 2. Difference between Java and JavaScript?

### Answer

| Java        | JavaScript           |
| ----------- | -------------------- |
| Compiled    | Interpreted/JIT      |
| OOP-Based   | Prototype-Based      |
| Runs on JVM | Runs in Browser/Node |

---

## 3. What are variables?

### Answer

Containers used to store data.

```js
let name = "Rohit";
```

---

## 4. Difference between var, let, const?

### Answer

| Feature   | var      | let   | const |
| --------- | -------- | ----- | ----- |
| Scope     | Function | Block | Block |
| Redeclare | Yes      | No    | No    |
| Reassign  | Yes      | Yes   | No    |

---

## 5. What are primitive data types?

### Answer

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

## 6. What is undefined?

### Answer

Variable declared but not assigned.

```js
let a;
console.log(a);
```

Output:

```text
undefined
```

---

## 7. What is null?

### Answer

Intentional absence of value.

```js
let user = null;
```

---

## 8. Difference between null and undefined?

### Answer

| null        | undefined  |
| ----------- | ---------- |
| Intentional | Default    |
| Assigned    | Unassigned |

---

## 9. What is typeof null?

### Answer

```js
typeof null
```

Output:

```text
object
```

Historical JavaScript bug.

---

## 10. What are operators?

### Answer

Symbols performing operations.

```js
+
-
*
/
%
```

---

## 11. Difference between == and ===?

### Answer

```js
==  → Loose Equality
=== → Strict Equality
```

Example:

```js
5 == "5"
```

true

```js
5 === "5"
```

false

---

## 12. What are truthy values?

### Answer

Values treated as true.

Examples:

```text
{}
[]
"hello"
1
```

---

## 13. What are falsy values?

### Answer

Exactly 8 values:

```text
false
0
-0
0n
""
null
undefined
NaN
```

---

## 14. What is a function?

### Answer

Reusable block of code.

```js
function greet() {
 return "Hello";
}
```

---

## 15. Function Declaration vs Expression?

### Answer

Declaration:

```js
function test(){}
```

Expression:

```js
const test =
function(){};
```

---

## 16. What is an Arrow Function?

### Answer

Shorter function syntax.

```js
const add =
(a,b) => a+b;
```

---

## 17. What is Scope?

### Answer

Accessibility of variables.

Types:

```text
Global
Function
Block
```

---

## 18. What is Block Scope?

### Answer

Scope within `{}`.

```js
{
 let x = 10;
}
```

Outside unavailable.

---

## 19. What is Hoisting?

### Answer

JavaScript moves declarations to top during execution phase.

---

## 20. What is TDZ?

### Answer

Temporal Dead Zone.

Period between hoisting and initialization.

---

## 21. What is an Object?

### Answer

Collection of key-value pairs.

```js
const user = {
 name: "Rohit"
};
```

---

## 22. What is an Array?

### Answer

Ordered collection.

```js
const nums =
[1,2,3];
```

---

## 23. Difference between Object and Array?

### Answer

| Object    | Array   |
| --------- | ------- |
| Key-Value | Indexed |
| Unordered | Ordered |

---

## 24. What is Destructuring?

### Answer

Extract values easily.

```js
const {name} = user;
```

---

## 25. What is Spread Operator?

### Answer

Expands values.

```js
[...arr]
```

---

## 26. What is Rest Operator?

### Answer

Collects values.

```js
(...args)
```

---

## 27. What are Template Literals?

### Answer

Strings using backticks.

```js
`Hello ${name}`
```

---

## 28. What is Optional Chaining?

### Answer

Safe property access.

```js
user?.address?.city
```

---

## 29. What is Nullish Coalescing?

### Answer

```js
value ?? defaultValue
```

Only checks:

```text
null
undefined
```

---

## 30. Difference between map and forEach?

### Answer

| map           | forEach           |
| ------------- | ----------------- |
| Returns Array | Returns Undefined |
| Chainable     | Not Chainable     |

---

# Section 2: Intermediate Questions (31–60)

---

## 31. What is Closure?

### Answer

Function remembers variables from outer scope even after outer function finishes.

```js
function outer() {
 let count = 0;

 return function() {
   count++;
 };
}
```

---

## 32. Real-world use of Closures?

### Answer

```text
Data Privacy
React Hooks
Memoization
Event Handlers
```

---

## 33. What is Lexical Scope?

### Answer

Scope determined by code location.

---

## 34. What is Execution Context?

### Answer

Environment where code executes.

Contains:

```text
Variables
this
Scope Chain
```

---

## 35. What is Call Stack?

### Answer

Tracks function execution order.

---

## 36. What is this?

### Answer

Reference to current execution context.

Depends on invocation.

---

## 37. Difference between regular and arrow function this?

### Answer

Regular:

Own this

Arrow:

Lexically inherits this

---

## 38. What is bind()?

### Answer

Creates new function with fixed this.

```js
fn.bind(obj);
```

---

## 39. Difference between call and apply?

### Answer

```js
call(obj,a,b)

apply(obj,[a,b])
```

---

## 40. What is Event Bubbling?

### Answer

Event propagates upward.

```text
Child
 ↑
Parent
```

---

## 41. What is Event Capturing?

### Answer

Event propagates downward.

```text
Parent
 ↓
Child
```

---

## 42. What is Event Delegation?

### Answer

Single listener on parent handling child events.

---

## 43. What is Prototype?

### Answer

Object used for inheritance.

---

## 44. What is Prototype Chain?

### Answer

Lookup chain for properties.

---

## 45. Difference between **proto** and prototype?

### Answer

```text
prototype → Functions

__proto__ → Objects
```

---

## 46. What is Inheritance?

### Answer

Child acquiring parent behavior.

---

## 47. What is Encapsulation?

### Answer

Hiding internal implementation.

---

## 48. What is Polymorphism?

### Answer

Same interface, different behavior.

---

## 49. What is Abstraction?

### Answer

Hide complexity.

---

## 50. What is Promise?

### Answer

Represents future value.

---

## 51. Promise States?

### Answer

```text
Pending
Fulfilled
Rejected
```

---

## 52. What is Promise Chaining?

### Answer

Connecting multiple then() calls.

---

## 53. What is Promise.all()?

### Answer

Waits all promises.

Fails if one fails.

---

## 54. Promise.allSettled()?

### Answer

Waits all promises regardless of failures.

---

## 55. Promise.race()?

### Answer

Returns first completed promise.

---

## 56. Promise.any()?

### Answer

Returns first successful promise.

---

## 57. What is async?

### Answer

Function returning Promise.

---

## 58. What is await?

### Answer

Waits for Promise resolution.

---

## 59. Difference between async/await and then()?

### Answer

async/await is cleaner syntax built on Promises.

---

## 60. What is Fetch API?

### Answer

Modern API for HTTP requests.

---

# Section 3: Advanced Questions (61–85)

---

## 61. Explain Event Loop.

### Answer

Coordinates:

```text
Call Stack
Web APIs
Microtask Queue
Callback Queue
```

---

## 62. Why is JavaScript single-threaded?

### Answer

To avoid DOM manipulation race conditions and simplify execution.

---

## 63. Microtask Queue vs Callback Queue?

### Answer

Microtasks have higher priority.

---

## 64. Output?

```js
console.log(1);

setTimeout(() =>
console.log(2),0);

Promise.resolve()
.then(() =>
console.log(3));

console.log(4);
```

Output:

```text
1
4
3
2
```

---

## 65. What is Garbage Collection?

### Answer

Automatic memory cleanup.

---

## 66. Which algorithm is used?

### Answer

Mark-and-Sweep.

---

## 67. What is Memory Leak?

### Answer

Unused memory not released.

---

## 68. Common memory leaks?

### Answer

```text
Global Variables
Closures
DOM References
Timers
```

---

## 69. What is Currying?

### Answer

```js
f(a,b)
```

becomes

```js
f(a)(b)
```

---

## 70. What is Memoization?

### Answer

Caching function results.

---

## 71. Difference between Debounce and Throttle?

### Answer

Debounce waits.

Throttle limits frequency.

---

## 72. What is Function Composition?

### Answer

Combining functions.

```js
f(g(x))
```

---

## 73. What is Tree Shaking?

### Answer

Removing unused code.

---

## 74. What is Code Splitting?

### Answer

Breaking bundle into chunks.

---

## 75. What is Lazy Loading?

### Answer

Load resources when needed.

---

## 76. What is CORS?

### Answer

Cross-Origin Resource Sharing.

---

## 77. What is XSS?

### Answer

Cross-Site Scripting attack.

---

## 78. What is CSRF?

### Answer

Cross-Site Request Forgery.

---

## 79. What is localStorage?

### Answer

Persistent browser storage.

---

## 80. What is sessionStorage?

### Answer

Storage valid until tab closes.

---

## 81. Difference between localStorage and cookies?

### Answer

Cookies sent to server.

localStorage is not.

---

## 82. What is Module Pattern?

### Answer

Encapsulation using closures.

---

## 83. What is Singleton Pattern?

### Answer

Single object instance.

---

## 84. What is Factory Pattern?

### Answer

Creates objects without exposing creation logic.

---

## 85. What is Observer Pattern?

### Answer

Publish-subscribe mechanism.

---

# Section 4: Scenario-Based Questions (86–95)

---

## 86. Search API fires too often. Solution?

### Answer

Use Debouncing.

---

## 87. Infinite scrolling performance issue?

### Answer

Use Throttling.

---

## 88. Large list rendering slowly?

### Answer

Use Virtualization.

---

## 89. Multiple API calls independent?

### Answer

Use:

```js
Promise.all()
```

---

## 90. User data should persist after browser restart?

### Answer

Use localStorage.

---

## 91. Need temporary storage?

### Answer

Use sessionStorage.

---

## 92. Sensitive token storage?

### Answer

Prefer HttpOnly Cookies.

---

## 93. Dynamic elements not receiving click listeners?

### Answer

Use Event Delegation.

---

## 94. API returns 404 but fetch catch doesn't execute. Why?

### Answer

Fetch rejects only on network failures.

Check:

```js
response.ok
```

---

## 95. Need private variables?

### Answer

Use Closures or Private Class Fields.

---

# Section 5: Coding Challenges (96–110)

---

## 96. Reverse String

```js
function reverse(str){
 return str
 .split("")
 .reverse()
 .join("");
}
```

---

## 97. Palindrome

```js
function isPalindrome(str){

 return str ===
 str
 .split("")
 .reverse()
 .join("");

}
```

---

## 98. Remove Duplicates

```js
const unique =
[...new Set(arr)];
```

---

## 99. Flatten Array

```js
arr.flat(Infinity);
```

---

## 100. Find Maximum

```js
Math.max(...arr);
```

---

## 101. Sum Array

```js
arr.reduce(
 (a,b)=>a+b,
 0
);
```

---

## 102. Count Occurrences

```js
const count = {};

arr.forEach(item => {
 count[item] =
 (count[item] || 0) + 1;
});
```

---

## 103. Debounce Function

```js
function debounce(
 fn,
 delay
){
 let timer;

 return (...args)=>{
  clearTimeout(timer);

  timer =
  setTimeout(
   ()=>fn(...args),
   delay
  );
 };
}
```

---

## 104. Throttle Function

```js
function throttle(
 fn,
 delay
){

 let ready = true;

 return (...args)=>{

  if(!ready) return;

  fn(...args);

  ready = false;

  setTimeout(()=>{
   ready=true;
  },delay);

 };

}
```

---

## 105. Deep Clone Object

```js
const clone =
structuredClone(obj);
```

---

## 106. Check Anagram

```js
function sort(str){
 return str
 .split("")
 .sort()
 .join("");
}

sort(a) === sort(b);
```

---

## 107. First Non-Repeated Character

```js
for(const char of str){

 if(
  str.indexOf(char)
  ===
  str.lastIndexOf(char)
 ){
  return char;
 }

}
```

---

## 108. Fibonacci

```js
function fib(n){

 if(n<=1)
  return n;

 return fib(n-1)
 +
 fib(n-2);

}
```

---

## 109. Factorial

```js
function factorial(n){

 if(n===1)
  return 1;

 return n *
 factorial(n-1);

}
```

---

## 110. Custom map()

```js
Array.prototype.myMap =
function(callback){

 const result = [];

 for(
  let i=0;
  i<this.length;
  i++
 ){

  result.push(
   callback(
    this[i],
    i,
    this
   )
  );

 }

 return result;

};
```

---

# Ultimate JavaScript Cheat Sheet

---

# Data Types

```text
String
Number
Boolean
Undefined
Null
Symbol
BigInt
Object
```

---

# Variable Keywords

```js
var
let
const
```

---

# Array Methods

```js
map()
filter()
reduce()
find()
findIndex()
some()
every()
includes()
sort()
flat()
```

---

# Object Methods

```js
Object.keys()
Object.values()
Object.entries()
Object.freeze()
Object.seal()
```

---

# String Methods

```js
split()
trim()
replace()
includes()
startsWith()
endsWith()
toUpperCase()
toLowerCase()
```

---

# Promise Methods

```js
then()
catch()
finally()

Promise.all()
Promise.race()
Promise.any()
Promise.allSettled()
```

---

# Event Loop Priority

```text
Call Stack

↓

Microtask Queue

↓

Callback Queue
```

---

# Storage

```text
localStorage
Persistent

sessionStorage
Tab Lifetime

Cookies
Server Communication
```

---

# Security

```text
XSS
CSRF
CORS
```

---

# Performance

```text
Lazy Loading
Code Splitting
Tree Shaking
Memoization
Debouncing
Throttling
```

---

# OOP

```text
Encapsulation
Inheritance
Polymorphism
Abstraction
```

---

# Most Asked Interview Topics

If you are preparing for:

* Frontend Developer
* React Developer
* Next.js Developer
* MERN Stack Developer
* Full Stack JavaScript Developer

Focus heavily on:

```text
Closures
this Keyword
Call Apply Bind
Execution Context
Hoisting
Scope
Event Loop
Promises
Async Await
Prototype Chain
DOM
Event Delegation
Debouncing
Throttling
Memory Management
ES6+
```

---

# Final 15-Minute Revision Before Interview

```text
1. var vs let vs const

2. == vs ===

3. Scope & Closures

4. Hoisting & TDZ

5. this Keyword

6. call apply bind

7. Prototype Chain

8. Event Bubbling & Delegation

9. Event Loop

10. Promises

11. Async Await

12. Promise.all()

13. Debounce vs Throttle

14. localStorage vs Cookies

15. XSS vs CSRF vs CORS

16. Memory Management

17. OOP Principles

18. ES6+ Features

19. Fetch API

20. Common Coding Questions
```
