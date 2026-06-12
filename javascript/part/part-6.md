# JavaScript Complete Interview Handbook

# Part 6 — Event Loop, Promises, Async/Await, Fetch API & Error Handling

---

## Table of Contents

- [Chapter 24: Event Loop](#chapter-24-event-loop)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Components of the Event Loop](#components-of-the-event-loop)
  - [Visual Diagram](#visual-diagram)
  - [Example](#example)
  - [Step-by-Step Explanation](#step-by-step-explanation)
      - [Step 1](#step-1)
      - [Step 2](#step-2)
      - [Step 3](#step-3)
      - [Step 4](#step-4)
  - [Callback Queue](#callback-queue)
  - [Microtask Queue](#microtask-queue)
  - [Important Rule](#important-rule)
  - [Interview Favorite](#interview-favorite)
  - [Visualization](#visualization)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 25: Promises](#chapter-25-promises)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Promise States](#promise-states)
  - [Visual Diagram](#visual-diagram)
  - [Creating a Promise](#creating-a-promise)
  - [Consuming a Promise](#consuming-a-promise)
  - [Promise Chaining](#promise-chaining)
  - [Error Handling](#error-handling)
  - [finally()](#finally)
  - [Promise Static Methods](#promise-static-methods)
    - [Promise.all()](#promiseall)
    - [Promise.allSettled()](#promiseallsettled)
    - [Promise.race()](#promiserace)
    - [Promise.any()](#promiseany)
  - [Comparison Table](#comparison-table)
  - [Interview Question](#interview-question)
      - [Difference between Promise.all and Promise.allSettled?](#difference-between-promiseall-and-promiseallsettled)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 26: Async / Await](#chapter-26-async-await)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [async Function](#async-function)
  - [await Keyword](#await-keyword)
  - [Without Async/Await](#without-asyncawait)
  - [With Async/Await](#with-asyncawait)
  - [Error Handling](#error-handling)
  - [Sequential Execution](#sequential-execution)
  - [Parallel Execution](#parallel-execution)
  - [Interview Favorite](#interview-favorite)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 27: Fetch API](#chapter-27-fetch-api)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [GET Request](#get-request)
  - [Flow](#flow)
  - [POST Request](#post-request)
  - [PUT Request](#put-request)
  - [DELETE Request](#delete-request)
  - [Handling Errors](#handling-errors)
  - [Interview Question](#interview-question)
      - [Does fetch reject on 404?](#does-fetch-reject-on-404)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 28: Error Handling](#chapter-28-error-handling)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [try/catch](#trycatch)
  - [Flow](#flow)
  - [finally](#finally)
  - [throw Keyword](#throw-keyword)
  - [Custom Error Class](#custom-error-class)
  - [Error Types](#error-types)
    - [SyntaxError](#syntaxerror)
    - [ReferenceError](#referenceerror)
    - [TypeError](#typeerror)
    - [RangeError](#rangeerror)
  - [Interview Question](#interview-question)
      - [Difference between throw and catch?](#difference-between-throw-and-catch)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
  - [Part 6 Complete](#part-6-complete)
      - [Covered](#covered)

---

# Chapter 24: Event Loop

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

The Event Loop is the mechanism that allows JavaScript to perform asynchronous operations even though JavaScript is single-threaded.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Without the Event Loop:

```text
JavaScript could only do one thing at a time.
```

No:

* API Calls
* Timers
* User Interactions
* File Operations

would work efficiently.

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Imagine:

```text
One Chef
+
Many Waiters
```

The chef (JavaScript Engine) only cooks.

Waiters (Web APIs) handle external tasks.

When work is ready, waiters notify the chef.

This notification system is the Event Loop.

---

**[⬆ Back to Top](#table-of-contents)**

# Components of the Event Loop

```text
Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop
```

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
 ┌───────────────┐
 │   Call Stack  │
 └───────┬───────┘
         ↑
         │
    Event Loop
         │
         ↓

 ┌───────────────┐
 │ Microtask Q   │
 └───────────────┘

 ┌───────────────┐
 │ Callback Q    │
 └───────────────┘

 ┌───────────────┐
 │   Web APIs    │
 └───────────────┘
```

---

**[⬆ Back to Top](#table-of-contents)**

# Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Timer
```

---

**[⬆ Back to Top](#table-of-contents)**

# Step-by-Step Explanation

**[⬆ Back to Top](#table-of-contents)**

### Step 1

```js
console.log("Start");
```

Output:

```text
Start
```

---

**[⬆ Back to Top](#table-of-contents)**

### Step 2

```js
setTimeout(...)
```

Moves to:

```text
Web APIs
```

---

**[⬆ Back to Top](#table-of-contents)**

### Step 3

```js
console.log("End");
```

Output:

```text
End
```

---

**[⬆ Back to Top](#table-of-contents)**

### Step 4

Call Stack becomes empty.

Event Loop checks queue.

Timer callback executes.

Output:

```text
Timer
```

---

**[⬆ Back to Top](#table-of-contents)**

# Callback Queue

Stores callbacks from:

```text
setTimeout
setInterval
DOM Events
```

---

Example

```js
setTimeout(() => {
  console.log("A");
}, 1000);
```

After 1 second:

```text
Callback Queue
```

receives callback.

---

**[⬆ Back to Top](#table-of-contents)**

# Microtask Queue

Higher priority queue.

Contains:

```text
Promise.then()
Promise.catch()
queueMicrotask()
MutationObserver
```

---

Example

```js
Promise.resolve()
  .then(() => console.log("Promise"));
```

Goes to:

```text
Microtask Queue
```

---

**[⬆ Back to Top](#table-of-contents)**

# Important Rule

```text
Microtask Queue
      ↓
Callback Queue
```

Microtasks always execute first.

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Favorite

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3");
  });

console.log("4");
```

Output:

```text
1
4
3
2
```

---

**[⬆ Back to Top](#table-of-contents)**

# Visualization

```text
Call Stack

1
4

Microtask Queue
3

Callback Queue
2
```

Execution:

```text
1
4
3
2
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Thinking:

```js
setTimeout(fn, 0)
```

runs immediately.

It still waits until:

```text
Call Stack Empty
```

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Understand queue priorities

✅ Practice output-based questions

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Call Stack

↓

Microtask Queue

↓

Callback Queue

Promises:
Microtask Queue

setTimeout:
Callback Queue
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 25: Promises

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

A Promise represents the eventual completion or failure of an asynchronous operation.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Before Promises:

```text
Callback Hell
```

was common.

Promises make async code manageable.

---

**[⬆ Back to Top](#table-of-contents)**

# Promise States

```text
Pending
Resolved (Fulfilled)
Rejected
```

---

**[⬆ Back to Top](#table-of-contents)**

# Visual Diagram

```text
Pending
  │
  ├──► Fulfilled
  │
  └──► Rejected
```

---

**[⬆ Back to Top](#table-of-contents)**

# Creating a Promise

```js
const promise =
new Promise(
 (resolve, reject) => {

   const success = true;

   if (success) {
     resolve("Success");
   } else {
     reject("Failure");
   }

 });
```

---

**[⬆ Back to Top](#table-of-contents)**

# Consuming a Promise

```js
promise
 .then(result => {
   console.log(result);
 })
 .catch(error => {
   console.log(error);
 });
```

---

Output

```text
Success
```

---

**[⬆ Back to Top](#table-of-contents)**

# Promise Chaining

```js
Promise.resolve(2)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(console.log);
```

Output:

```text
12
```

---

**[⬆ Back to Top](#table-of-contents)**

# Error Handling

```js
Promise.reject("Error")
 .catch(error => {
   console.log(error);
 });
```

Output:

```text
Error
```

---

**[⬆ Back to Top](#table-of-contents)**

# finally()

Runs regardless of success or failure.

```js
promise
 .finally(() => {
   console.log("Done");
 });
```

---

**[⬆ Back to Top](#table-of-contents)**

# Promise Static Methods

---

**[⬆ Back to Top](#table-of-contents)**

## Promise.all()

Runs all promises.

Fails if one fails.

```js
Promise.all([
 fetchUsers(),
 fetchPosts()
]);
```

---

Output:

```text
[
 users,
 posts
]
```

---

**[⬆ Back to Top](#table-of-contents)**

## Promise.allSettled()

Waits for all.

Never fails.

```js
Promise.allSettled([
 promise1,
 promise2
]);
```

---

Output:

```js
[
 {
   status: "fulfilled"
 },
 {
   status: "rejected"
 }
]
```

---

**[⬆ Back to Top](#table-of-contents)**

## Promise.race()

Returns first completed promise.

```js
Promise.race([
 promise1,
 promise2
]);
```

---

**[⬆ Back to Top](#table-of-contents)**

## Promise.any()

Returns first successful promise.

Ignores failures.

---

**[⬆ Back to Top](#table-of-contents)**

# Comparison Table

| Method     | Fails Fast    | Waits All |
| ---------- | ------------- | --------- |
| all        | ✅             | ❌         |
| allSettled | ❌             | ✅         |
| race       | First Result  | ❌         |
| any        | First Success | ❌         |

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### Difference between Promise.all and Promise.allSettled?

Answer:

```text
all:
Fails immediately if one fails

allSettled:
Waits for all results
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Nested then chains.

Bad:

```js
promise
.then(() => {
  promise2
  .then(...)
});
```

Use chaining instead.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Return promises

✅ Use catch()

✅ Prefer async/await

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Promise States

Pending
Fulfilled
Rejected

Methods

then()
catch()
finally()

all()
allSettled()
race()
any()
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 26: Async / Await

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Async/Await is syntactic sugar over Promises.

Makes asynchronous code look synchronous.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Cleaner than:

```js
.then()
.catch()
```

chains.

---

**[⬆ Back to Top](#table-of-contents)**

# async Function

```js
async function greet() {
  return "Hello";
}
```

Returns:

```js
Promise.resolve("Hello")
```

---

**[⬆ Back to Top](#table-of-contents)**

# await Keyword

Pauses execution until promise resolves.

---

Example

```js
async function getData() {

  const result =
  await Promise.resolve(
    "Data"
  );

  console.log(result);

}
```

Output:

```text
Data
```

---

**[⬆ Back to Top](#table-of-contents)**

# Without Async/Await

```js
fetchData()
.then(data => {
  console.log(data);
});
```

---

**[⬆ Back to Top](#table-of-contents)**

# With Async/Await

```js
const data =
await fetchData();
```

Much cleaner.

---

**[⬆ Back to Top](#table-of-contents)**

# Error Handling

```js
async function getData() {

 try {

   const result =
   await fetchData();

 } catch(error) {

   console.log(error);

 }

}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Sequential Execution

```js
const user =
await fetchUser();

const posts =
await fetchPosts();
```

Runs one after another.

---

**[⬆ Back to Top](#table-of-contents)**

# Parallel Execution

Better:

```js
const [user, posts] =
await Promise.all([
 fetchUser(),
 fetchPosts()
]);
```

Runs simultaneously.

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Favorite

Question:

```js
async function test() {
  return 100;
}
```

Return type?

Answer:

```js
Promise<100>
```

Actually:

```js
Promise.resolve(100)
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Forgetting await.

```js
const data =
fetchData();
```

Returns Promise.

Not actual data.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use try/catch

✅ Use Promise.all for parallel tasks

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
async:
Returns Promise

await:
Waits for Promise

try/catch:
Handle Errors
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 27: Fetch API

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Fetch API is the modern way to make HTTP requests.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Used for:

```text
REST APIs
Backend Communication
Authentication
Data Fetching
```

---

**[⬆ Back to Top](#table-of-contents)**

# GET Request

```js
async function getUsers() {

 const response =
 await fetch(
  "https://api.example.com/users"
 );

 const data =
 await response.json();

 console.log(data);

}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Flow

```text
Request
   ↓
Server
   ↓
Response
   ↓
JSON
```

---

**[⬆ Back to Top](#table-of-contents)**

# POST Request

```js
await fetch(
 "/users",
 {
   method: "POST",

   headers: {
     "Content-Type":
     "application/json"
   },

   body: JSON.stringify({
     name: "Rohit"
   })
 }
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# PUT Request

```js
await fetch("/users/1", {
 method: "PUT",
 body: JSON.stringify(data)
});
```

---

**[⬆ Back to Top](#table-of-contents)**

# DELETE Request

```js
await fetch("/users/1", {
 method: "DELETE"
});
```

---

**[⬆ Back to Top](#table-of-contents)**

# Handling Errors

Important:

Fetch only rejects on:

```text
Network Errors
```

Not:

```text
404
500
```

---

Wrong

```js
await fetch(url);
```

---

Correct

```js
const response =
await fetch(url);

if (!response.ok) {
 throw new Error(
   "Request Failed"
 );
}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### Does fetch reject on 404?

Answer:

No.

Fetch resolves successfully.

Need:

```js
response.ok
```

check.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Check response.ok

✅ Use async/await

✅ Handle errors properly

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
fetch()

GET
POST
PUT
DELETE

Check:
response.ok
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 28: Error Handling

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Error handling prevents application crashes and improves user experience.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Every production application must handle failures gracefully.

---

**[⬆ Back to Top](#table-of-contents)**

# try/catch

```js
try {

  const result =
  riskyOperation();

} catch(error) {

  console.log(error);

}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Flow

```text
try
 ↓
Success
 ↓
Continue

OR

try
 ↓
Error
 ↓
catch
```

---

**[⬆ Back to Top](#table-of-contents)**

# finally

Always executes.

```js
try {

 console.log("Run");

} catch {

 console.log("Error");

} finally {

 console.log("Cleanup");

}
```

---

Output:

```text
Run
Cleanup
```

---

**[⬆ Back to Top](#table-of-contents)**

# throw Keyword

Create custom errors.

```js
throw new Error(
 "Invalid User"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Custom Error Class

```js
class ValidationError
extends Error {

 constructor(message) {
   super(message);
   this.name =
   "ValidationError";
 }

}
```

---

Usage

```js
throw new ValidationError(
 "Email Required"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Error Types

---

**[⬆ Back to Top](#table-of-contents)**

## SyntaxError

```js
const =
```

---

**[⬆ Back to Top](#table-of-contents)**

## ReferenceError

```js
console.log(user);
```

---

**[⬆ Back to Top](#table-of-contents)**

## TypeError

```js
null.toString();
```

---

**[⬆ Back to Top](#table-of-contents)**

## RangeError

```js
new Array(-1);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### Difference between throw and catch?

| Keyword | Purpose       |
| ------- | ------------- |
| throw   | Creates error |
| catch   | Handles error |

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Empty catch blocks.

```js
catch(error) {}
```

Never do this.

---

❌ Swallowing errors.

Always log or rethrow.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use custom errors

✅ Log meaningful messages

✅ Fail gracefully

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
try
catch
finally

throw

Error Types

SyntaxError
ReferenceError
TypeError
RangeError
```

---

**[⬆ Back to Top](#table-of-contents)**

# Part 6 Complete

**[⬆ Back to Top](#table-of-contents)**

### Covered

✅ Event Loop
✅ Call Stack
✅ Web APIs
✅ Callback Queue
✅ Microtask Queue
✅ Promises
✅ Promise Chaining
✅ Promise.all()
✅ Promise.allSettled()
✅ Promise.race()
✅ Promise.any()
✅ Async/Await
✅ Fetch API
✅ GET Requests
✅ POST Requests
✅ Error Handling
✅ try/catch/finally
✅ Custom Errors

---


**[⬆ Back to Top](#table-of-contents)**
