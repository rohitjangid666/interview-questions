# JavaScript Complete Interview Handbook

# Part 6 — Event Loop, Promises, Async/Await, Fetch API & Error Handling

---

# Chapter 24: Event Loop

---

# Definition

The Event Loop is the mechanism that allows JavaScript to perform asynchronous operations even though JavaScript is single-threaded.

---

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

# Components of the Event Loop

```text
Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop
```

---

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

# Step-by-Step Explanation

### Step 1

```js
console.log("Start");
```

Output:

```text
Start
```

---

### Step 2

```js
setTimeout(...)
```

Moves to:

```text
Web APIs
```

---

### Step 3

```js
console.log("End");
```

Output:

```text
End
```

---

### Step 4

Call Stack becomes empty.

Event Loop checks queue.

Timer callback executes.

Output:

```text
Timer
```

---

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

# Important Rule

```text
Microtask Queue
      ↓
Callback Queue
```

Microtasks always execute first.

---

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

# Best Practices

✅ Understand queue priorities

✅ Practice output-based questions

---

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

# Chapter 25: Promises

---

# Definition

A Promise represents the eventual completion or failure of an asynchronous operation.

---

# Why It Matters

Before Promises:

```text
Callback Hell
```

was common.

Promises make async code manageable.

---

# Promise States

```text
Pending
Resolved (Fulfilled)
Rejected
```

---

# Visual Diagram

```text
Pending
  │
  ├──► Fulfilled
  │
  └──► Rejected
```

---

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

# finally()

Runs regardless of success or failure.

```js
promise
 .finally(() => {
   console.log("Done");
 });
```

---

# Promise Static Methods

---

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

## Promise.race()

Returns first completed promise.

```js
Promise.race([
 promise1,
 promise2
]);
```

---

## Promise.any()

Returns first successful promise.

Ignores failures.

---

# Comparison Table

| Method     | Fails Fast    | Waits All |
| ---------- | ------------- | --------- |
| all        | ✅             | ❌         |
| allSettled | ❌             | ✅         |
| race       | First Result  | ❌         |
| any        | First Success | ❌         |

---

# Interview Question

### Difference between Promise.all and Promise.allSettled?

Answer:

```text
all:
Fails immediately if one fails

allSettled:
Waits for all results
```

---

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

# Best Practices

✅ Return promises

✅ Use catch()

✅ Prefer async/await

---

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

# Chapter 26: Async / Await

---

# Definition

Async/Await is syntactic sugar over Promises.

Makes asynchronous code look synchronous.

---

# Why It Matters

Cleaner than:

```js
.then()
.catch()
```

chains.

---

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

# Without Async/Await

```js
fetchData()
.then(data => {
  console.log(data);
});
```

---

# With Async/Await

```js
const data =
await fetchData();
```

Much cleaner.

---

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

# Sequential Execution

```js
const user =
await fetchUser();

const posts =
await fetchPosts();
```

Runs one after another.

---

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

# Common Mistakes

❌ Forgetting await.

```js
const data =
fetchData();
```

Returns Promise.

Not actual data.

---

# Best Practices

✅ Use try/catch

✅ Use Promise.all for parallel tasks

---

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

# Chapter 27: Fetch API

---

# Definition

Fetch API is the modern way to make HTTP requests.

---

# Why It Matters

Used for:

```text
REST APIs
Backend Communication
Authentication
Data Fetching
```

---

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

# PUT Request

```js
await fetch("/users/1", {
 method: "PUT",
 body: JSON.stringify(data)
});
```

---

# DELETE Request

```js
await fetch("/users/1", {
 method: "DELETE"
});
```

---

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

# Interview Question

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

# Best Practices

✅ Check response.ok

✅ Use async/await

✅ Handle errors properly

---

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

# Chapter 28: Error Handling

---

# Definition

Error handling prevents application crashes and improves user experience.

---

# Why It Matters

Every production application must handle failures gracefully.

---

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

# throw Keyword

Create custom errors.

```js
throw new Error(
 "Invalid User"
);
```

---

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

# Error Types

---

## SyntaxError

```js
const =
```

---

## ReferenceError

```js
console.log(user);
```

---

## TypeError

```js
null.toString();
```

---

## RangeError

```js
new Array(-1);
```

---

# Interview Question

### Difference between throw and catch?

| Keyword | Purpose       |
| ------- | ------------- |
| throw   | Creates error |
| catch   | Handles error |

---

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

# Best Practices

✅ Use custom errors

✅ Log meaningful messages

✅ Fail gracefully

---

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

# Part 6 Complete

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
