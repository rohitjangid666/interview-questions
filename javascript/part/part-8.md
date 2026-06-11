# JavaScript Complete Interview Handbook

# Part 8 — Design Patterns, ES6+ Features, Browser Storage, Security Concepts & Performance Optimization

---

# Chapter 38: JavaScript Design Patterns

---

# What is a Design Pattern?

A Design Pattern is a reusable solution to a commonly occurring software design problem.

Think of it as:

```text
Coding Best Practices
+
Proven Architecture
+
Reusable Solution
```

---

# Why It Matters

In large applications:

```text
React
Next.js
Node.js
Microservices
Enterprise Applications
```

Design patterns help write:

```text
Scalable Code
Maintainable Code
Reusable Code
```

---

# Types of Design Patterns

```text
Creational
Structural
Behavioral
```

For interviews, focus on:

```text
Module Pattern
Singleton Pattern
Factory Pattern
Observer Pattern
```

---

# Module Pattern

---

# Definition

Encapsulates private data and exposes only public methods.

---

# Problem

Without modules:

```js
let count = 0;

function increment() {
  count++;
}
```

Anyone can modify:

```js
count = 1000;
```

---

# Solution

```js
const Counter = (function() {

  let count = 0;

  return {

    increment() {
      count++;
    },

    getCount() {
      return count;
    }

  };

})();
```

---

Usage

```js
Counter.increment();

console.log(
 Counter.getCount()
);
```

Output:

```text
1
```

---

Private Variable:

```js
Counter.count
```

Output:

```text
undefined
```

---

# Why It Works

Because of:

```text
Closures
```

---

# Singleton Pattern

---

# Definition

Ensures only one instance exists.

---

# Real World Example

```text
Database Connection

Only One Needed
```

---

Example

```js
class Singleton {

  constructor() {

    if (
      Singleton.instance
    ) {
      return Singleton.instance;
    }

    Singleton.instance =
      this;
  }

}
```

---

Usage

```js
const a =
new Singleton();

const b =
new Singleton();

console.log(a === b);
```

Output:

```text
true
```

---

# Use Cases

```text
Database Connection
Logger
Configuration Manager
```

---

# Factory Pattern

---

# Definition

Creates objects without exposing creation logic.

---

Example

```js
function createUser(
 name
) {

 return {
   name,
   greet() {
     console.log(
       `Hello ${name}`
     );
   }
 };

}
```

---

Usage

```js
const user =
createUser("Rohit");
```

---

Benefits:

```text
Flexible
Reusable
Simple
```

---

# Observer Pattern

---

# Definition

One object notifies multiple subscribers.

---

Real World Example

```text
YouTube Channel

Creator Uploads Video

Subscribers Receive Notification
```

---

Basic Example

```js
class Subject {

 constructor() {
   this.observers = [];
 }

 subscribe(fn) {
   this.observers.push(fn);
 }

 notify(data) {

   this.observers.forEach(
    observer =>
      observer(data)
   );

 }

}
```

---

Usage

```js
const news =
new Subject();

news.subscribe(
 data => {
   console.log(
     "User1:",
     data
   );
 }
);

news.notify(
 "Breaking News"
);
```

Output:

```text
User1:
Breaking News
```

---

# Observer Pattern in React

Examples:

```text
Redux Store
Context API
Event Emitters
```

---

# Interview Questions

### Difference between Factory and Constructor?

Answer:

Factory returns objects directly.

Constructor requires `new`.

---

### Which pattern uses closures heavily?

Answer:

Module Pattern.

---

# Quick Revision Notes

```text
Module
→ Encapsulation

Singleton
→ Single Instance

Factory
→ Object Creation

Observer
→ Publish Subscribe
```

---

# Chapter 39: ES6+ Features Deep Dive

---

# Why ES6 Matters

ES6 transformed JavaScript.

Modern React and Next.js heavily rely on ES6+.

---

# let and const

---

## let

Block-scoped.

```js
let age = 25;
```

Can reassign.

```js
age = 30;
```

---

## const

Cannot reassign.

```js
const PI = 3.14;
```

---

# Arrow Functions

---

Traditional

```js
function add(a,b) {
 return a+b;
}
```

---

Arrow

```js
const add =
(a,b) => a+b;
```

---

Benefits

```text
Shorter Syntax
Lexical this
```

---

# Default Parameters

```js
function greet(
 name = "Guest"
) {
 return name;
}
```

---

# Destructuring

```js
const user = {
 name: "Rohit"
};

const {
 name
} = user;
```

---

# Spread Operator

```js
const arr2 =
[...arr1];
```

---

# Rest Operator

```js
function test(
 ...args
) {}
```

---

# Template Literals

```js
`Hello ${name}`
```

---

# Optional Chaining

---

Before

```js
user &&
user.address &&
user.address.city
```

---

Modern

```js
user?.address?.city
```

---

Output

```text
undefined
```

No error.

---

# Nullish Coalescing

---

Problem

```js
const age =
user.age || 18;
```

---

If:

```js
user.age = 0
```

Output:

```text
18
```

Wrong.

---

Solution

```js
const age =
user.age ?? 18;
```

Output:

```text
0
```

---

# Promise APIs

```js
Promise.all()
Promise.any()
Promise.race()
Promise.allSettled()
```

---

# Interview Favorite

### Difference between || and ??

| Operator | Checks         |   |       |
| -------- | -------------- | - | ----- |
|          |                |   | Falsy |
| ??       | null/undefined |   |       |

---

# Quick Revision Notes

```text
let
const

Arrow Functions

Optional Chaining ?.

Nullish Coalescing ??

Template Literals
```

---

# Chapter 40: Browser Storage

---

# Why Storage Matters

Web applications need persistent data.

Examples:

```text
Login State
Theme Preference
Shopping Cart
```

---

# Types

```text
localStorage
sessionStorage
Cookies
```

---

# localStorage

---

# Characteristics

```text
Persistent
5-10 MB
String Only
```

---

Store Data

```js
localStorage.setItem(
 "theme",
 "dark"
);
```

---

Read Data

```js
localStorage.getItem(
 "theme"
);
```

Output:

```text
dark
```

---

Delete

```js
localStorage.removeItem(
 "theme"
);
```

---

Clear

```js
localStorage.clear();
```

---

# sessionStorage

---

Same API.

```js
sessionStorage.setItem(
 "user",
 "Rohit"
);
```

---

Difference:

```text
Removed When Tab Closes
```

---

# Cookies

---

Store small data.

```js
document.cookie =
"user=Rohit";
```

---

Sent automatically with HTTP requests.

---

# Comparison Table

| Feature        | localStorage | sessionStorage | Cookies      |
| -------------- | ------------ | -------------- | ------------ |
| Capacity       | 5-10MB       | 5MB            | 4KB          |
| Expiry         | Never        | Tab Close      | Configurable |
| Sent to Server | ❌            | ❌              | ✅            |
| API            | Easy         | Easy           | Complex      |

---

# Interview Questions

### Where should JWT be stored?

Answer:

Depends on security requirements.

Generally:

```text
HttpOnly Cookies
```

are safer than localStorage.

---

### Difference between localStorage and sessionStorage?

Answer:

localStorage persists.

sessionStorage disappears when tab closes.

---

# Quick Revision Notes

```text
localStorage
Persistent

sessionStorage
Tab Lifetime

Cookies
Sent To Server
```

---

# Chapter 41: Security Concepts

---

# Why Security Matters

Frontend developers must prevent:

```text
XSS
CSRF
Data Theft
```

---

# XSS (Cross Site Scripting)

---

# Definition

Attacker injects malicious JavaScript.

---

Example

User enters:

```html
<script>
alert("Hacked")
</script>
```

---

Dangerous Code

```js
element.innerHTML =
userInput;
```

---

Result:

Script executes.

---

# Prevention

Use:

```js
textContent
```

instead of:

```js
innerHTML
```

---

Sanitize Input.

---

# CSRF (Cross Site Request Forgery)

---

# Definition

Tricks authenticated users into making unwanted requests.

---

Example

Victim logged into bank.

Attacker page sends:

```text
Transfer Money Request
```

using victim's session.

---

# Prevention

```text
CSRF Tokens
SameSite Cookies
Origin Validation
```

---

# CORS (Cross-Origin Resource Sharing)

---

# Definition

Browser security mechanism controlling cross-origin requests.

---

Example

Frontend:

```text
https://app.com
```

Backend:

```text
https://api.com
```

Different origins.

---

Browser blocks unless:

```http
Access-Control-Allow-Origin
```

header exists.

---

# Common Misconception

CORS is:

```text
Browser Security Feature
```

Not server security.

---

# Interview Questions

### Difference between XSS and CSRF?

| XSS                   | CSRF                          |
| --------------------- | ----------------------------- |
| Executes malicious JS | Performs unwanted actions     |
| Targets User          | Targets Authenticated Session |

---

### What causes CORS errors?

Answer:

Server missing proper CORS headers.

---

# Quick Revision Notes

```text
XSS
→ Script Injection

CSRF
→ Fake Requests

CORS
→ Cross Origin Rules
```

---

# Chapter 42: Performance Optimization

---

# Why Performance Matters

Users expect:

```text
Fast Loading
Smooth UI
Responsive Apps
```

---

# Lazy Loading

---

# Definition

Load resources only when needed.

---

Example

```js
const Product =
React.lazy(
 () =>
   import("./Product")
);
```

---

Benefits

```text
Smaller Initial Bundle
Faster Loading
```

---

# Code Splitting

---

# Definition

Break large bundles into smaller chunks.

---

Without

```text
main.js
5 MB
```

---

With

```text
home.js
dashboard.js
profile.js
```

Loaded separately.

---

# Dynamic Imports

```js
const module =
await import(
 "./analytics.js"
);
```

---

# Tree Shaking

---

# Definition

Removes unused code during build.

---

Example

```js
import {
 add
}
from "./math";
```

Unused functions removed.

---

# Debouncing

Already covered.

Useful for:

```text
Search
Validation
```

---

# Throttling

Useful for:

```text
Scroll
Mouse Move
Resize
```

---

# Memoization

Cache expensive computations.

---

# Virtualization

Large lists:

```text
10,000 Rows
```

Render only visible rows.

---

Libraries:

```text
react-window
react-virtualized
```

---

# Image Optimization

Use:

```text
WebP
AVIF
Lazy Loading
Responsive Images
```

---

# Network Optimization

```text
Compression
Caching
CDN
HTTP/2
```

---

# Interview Questions

### What is Tree Shaking?

Answer:

Removing unused code during build.

---

### Difference between Lazy Loading and Code Splitting?

Answer:

Code Splitting creates chunks.

Lazy Loading loads chunks when needed.

---

### How can you improve React performance?

Answer:

```text
Memoization
Lazy Loading
Code Splitting
Virtualization
Debouncing
Throttling
```

---

# Performance Optimization Checklist

```text
✅ Lazy Loading

✅ Code Splitting

✅ Tree Shaking

✅ Memoization

✅ Debouncing

✅ Throttling

✅ Virtualization

✅ Image Optimization

✅ Caching
```

---

# Quick Revision Notes

```text
Lazy Loading
→ Load Later

Code Splitting
→ Smaller Bundles

Tree Shaking
→ Remove Dead Code

Memoization
→ Cache Results
```

---

# Part 8 Complete

### Covered

✅ JavaScript Design Patterns
✅ Module Pattern
✅ Singleton Pattern
✅ Factory Pattern
✅ Observer Pattern
✅ ES6+ Features Deep Dive
✅ Optional Chaining
✅ Nullish Coalescing
✅ Browser Storage
✅ localStorage
✅ sessionStorage
✅ Cookies
✅ Security Concepts
✅ XSS
✅ CSRF
✅ CORS
✅ Performance Optimization
✅ Lazy Loading
✅ Code Splitting
✅ Tree Shaking

---
