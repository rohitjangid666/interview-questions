# JavaScript Complete Interview Handbook

# Part 8 — Design Patterns, ES6+ Features, Browser Storage, Security Concepts & Performance Optimization

---

## Table of Contents

- [Chapter 38: JavaScript Design Patterns](#chapter-38-javascript-design-patterns)
  - [What is a Design Pattern?](#what-is-a-design-pattern)
  - [Why It Matters](#why-it-matters)
  - [Types of Design Patterns](#types-of-design-patterns)
  - [Module Pattern](#module-pattern)
  - [Definition](#definition)
  - [Problem](#problem)
  - [Solution](#solution)
  - [Why It Works](#why-it-works)
  - [Singleton Pattern](#singleton-pattern)
  - [Definition](#definition)
  - [Real World Example](#real-world-example)
  - [Use Cases](#use-cases)
  - [Factory Pattern](#factory-pattern)
  - [Definition](#definition)
  - [Observer Pattern](#observer-pattern)
  - [Definition](#definition)
  - [Observer Pattern in React](#observer-pattern-in-react)
  - [Interview Questions](#interview-questions)
      - [Difference between Factory and Constructor?](#difference-between-factory-and-constructor)
      - [Which pattern uses closures heavily?](#which-pattern-uses-closures-heavily)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 39: ES6+ Features Deep Dive](#chapter-39-es6-features-deep-dive)
  - [Why ES6 Matters](#why-es6-matters)
  - [let and const](#let-and-const)
    - [let](#let)
    - [const](#const)
  - [Arrow Functions](#arrow-functions)
  - [Default Parameters](#default-parameters)
  - [Destructuring](#destructuring)
  - [Spread Operator](#spread-operator)
  - [Rest Operator](#rest-operator)
  - [Template Literals](#template-literals)
  - [Optional Chaining](#optional-chaining)
  - [Nullish Coalescing](#nullish-coalescing)
  - [Promise APIs](#promise-apis)
  - [Interview Favorite](#interview-favorite)
      - [Difference between || and ??](#difference-between-and)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 40: Browser Storage](#chapter-40-browser-storage)
  - [Why Storage Matters](#why-storage-matters)
  - [Types](#types)
  - [localStorage](#localstorage)
  - [Characteristics](#characteristics)
  - [sessionStorage](#sessionstorage)
  - [Cookies](#cookies)
  - [Comparison Table](#comparison-table)
  - [Interview Questions](#interview-questions)
      - [Where should JWT be stored?](#where-should-jwt-be-stored)
      - [Difference between localStorage and sessionStorage?](#difference-between-localstorage-and-sessionstorage)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 41: Security Concepts](#chapter-41-security-concepts)
  - [Why Security Matters](#why-security-matters)
  - [XSS (Cross Site Scripting)](#xss-cross-site-scripting)
  - [Definition](#definition)
  - [Prevention](#prevention)
  - [CSRF (Cross Site Request Forgery)](#csrf-cross-site-request-forgery)
  - [Definition](#definition)
  - [Prevention](#prevention)
  - [CORS (Cross-Origin Resource Sharing)](#cors-cross-origin-resource-sharing)
  - [Definition](#definition)
  - [Common Misconception](#common-misconception)
  - [Interview Questions](#interview-questions)
      - [Difference between XSS and CSRF?](#difference-between-xss-and-csrf)
      - [What causes CORS errors?](#what-causes-cors-errors)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 42: Performance Optimization](#chapter-42-performance-optimization)
  - [Why Performance Matters](#why-performance-matters)
  - [Lazy Loading](#lazy-loading)
  - [Definition](#definition)
  - [Code Splitting](#code-splitting)
  - [Definition](#definition)
  - [Dynamic Imports](#dynamic-imports)
  - [Tree Shaking](#tree-shaking)
  - [Definition](#definition)
  - [Debouncing](#debouncing)
  - [Throttling](#throttling)
  - [Memoization](#memoization)
  - [Virtualization](#virtualization)
  - [Image Optimization](#image-optimization)
  - [Network Optimization](#network-optimization)
  - [Interview Questions](#interview-questions)
      - [What is Tree Shaking?](#what-is-tree-shaking)
      - [Difference between Lazy Loading and Code Splitting?](#difference-between-lazy-loading-and-code-splitting)
      - [How can you improve React performance?](#how-can-you-improve-react-performance)
  - [Performance Optimization Checklist](#performance-optimization-checklist)
  - [Quick Revision Notes](#quick-revision-notes)
  - [Part 8 Complete](#part-8-complete)
      - [Covered](#covered)

---

# Chapter 38: JavaScript Design Patterns

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Module Pattern

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Encapsulates private data and exposes only public methods.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Why It Works

Because of:

```text
Closures
```

---

**[⬆ Back to Top](#table-of-contents)**

# Singleton Pattern

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Ensures only one instance exists.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Use Cases

```text
Database Connection
Logger
Configuration Manager
```

---

**[⬆ Back to Top](#table-of-contents)**

# Factory Pattern

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Observer Pattern

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Observer Pattern in React

Examples:

```text
Redux Store
Context API
Event Emitters
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Difference between Factory and Constructor?

Answer:

Factory returns objects directly.

Constructor requires `new`.

---

**[⬆ Back to Top](#table-of-contents)**

### Which pattern uses closures heavily?

Answer:

Module Pattern.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 39: ES6+ Features Deep Dive

---

**[⬆ Back to Top](#table-of-contents)**

# Why ES6 Matters

ES6 transformed JavaScript.

Modern React and Next.js heavily rely on ES6+.

---

**[⬆ Back to Top](#table-of-contents)**

# let and const

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

## const

Cannot reassign.

```js
const PI = 3.14;
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Default Parameters

```js
function greet(
 name = "Guest"
) {
 return name;
}
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Spread Operator

```js
const arr2 =
[...arr1];
```

---

**[⬆ Back to Top](#table-of-contents)**

# Rest Operator

```js
function test(
 ...args
) {}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Template Literals

```js
`Hello ${name}`
```

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Promise APIs

```js
Promise.all()
Promise.any()
Promise.race()
Promise.allSettled()
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Favorite

**[⬆ Back to Top](#table-of-contents)**

### Difference between || and ??

| Operator | Checks         |   |       |
| -------- | -------------- | - | ----- |
|          |                |   | Falsy |
| ??       | null/undefined |   |       |

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 40: Browser Storage

---

**[⬆ Back to Top](#table-of-contents)**

# Why Storage Matters

Web applications need persistent data.

Examples:

```text
Login State
Theme Preference
Shopping Cart
```

---

**[⬆ Back to Top](#table-of-contents)**

# Types

```text
localStorage
sessionStorage
Cookies
```

---

**[⬆ Back to Top](#table-of-contents)**

# localStorage

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Comparison Table

| Feature        | localStorage | sessionStorage | Cookies      |
| -------------- | ------------ | -------------- | ------------ |
| Capacity       | 5-10MB       | 5MB            | 4KB          |
| Expiry         | Never        | Tab Close      | Configurable |
| Sent to Server | ❌            | ❌              | ✅            |
| API            | Easy         | Easy           | Complex      |

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Where should JWT be stored?

Answer:

Depends on security requirements.

Generally:

```text
HttpOnly Cookies
```

are safer than localStorage.

---

**[⬆ Back to Top](#table-of-contents)**

### Difference between localStorage and sessionStorage?

Answer:

localStorage persists.

sessionStorage disappears when tab closes.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 41: Security Concepts

---

**[⬆ Back to Top](#table-of-contents)**

# Why Security Matters

Frontend developers must prevent:

```text
XSS
CSRF
Data Theft
```

---

**[⬆ Back to Top](#table-of-contents)**

# XSS (Cross Site Scripting)

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# CSRF (Cross Site Request Forgery)

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Prevention

```text
CSRF Tokens
SameSite Cookies
Origin Validation
```

---

**[⬆ Back to Top](#table-of-contents)**

# CORS (Cross-Origin Resource Sharing)

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Common Misconception

CORS is:

```text
Browser Security Feature
```

Not server security.

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Difference between XSS and CSRF?

| XSS                   | CSRF                          |
| --------------------- | ----------------------------- |
| Executes malicious JS | Performs unwanted actions     |
| Targets User          | Targets Authenticated Session |

---

**[⬆ Back to Top](#table-of-contents)**

### What causes CORS errors?

Answer:

Server missing proper CORS headers.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Chapter 42: Performance Optimization

---

**[⬆ Back to Top](#table-of-contents)**

# Why Performance Matters

Users expect:

```text
Fast Loading
Smooth UI
Responsive Apps
```

---

**[⬆ Back to Top](#table-of-contents)**

# Lazy Loading

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Code Splitting

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Dynamic Imports

```js
const module =
await import(
 "./analytics.js"
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Tree Shaking

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Debouncing

Already covered.

Useful for:

```text
Search
Validation
```

---

**[⬆ Back to Top](#table-of-contents)**

# Throttling

Useful for:

```text
Scroll
Mouse Move
Resize
```

---

**[⬆ Back to Top](#table-of-contents)**

# Memoization

Cache expensive computations.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Image Optimization

Use:

```text
WebP
AVIF
Lazy Loading
Responsive Images
```

---

**[⬆ Back to Top](#table-of-contents)**

# Network Optimization

```text
Compression
Caching
CDN
HTTP/2
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### What is Tree Shaking?

Answer:

Removing unused code during build.

---

**[⬆ Back to Top](#table-of-contents)**

### Difference between Lazy Loading and Code Splitting?

Answer:

Code Splitting creates chunks.

Lazy Loading loads chunks when needed.

---

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

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

**[⬆ Back to Top](#table-of-contents)**

# Part 8 Complete

**[⬆ Back to Top](#table-of-contents)**

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


**[⬆ Back to Top](#table-of-contents)**
