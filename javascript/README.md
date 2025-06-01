# JavaScript Interview Questions

## Table of Contents

1. [What is JavaScript](#what-is-javascript)
2. [Difference between synchronous and asynchronous](#difference-between-synchronous-and-asynchronous)
3. [Interpreter vs Compiler](#interpreter-vs-compiler)
4. [Methods vs Functions](#methods-vs-functions)
5. [this Keyword](#this-keyword)
6. [Call, Apply & Bind](#call-apply--bind)
7. [Prototypes](#prototypes)
8. [Event Loop](#event-loop)
9. [Execution Context](#execution-context)
10. [Polyfills](#polyfills)
11. [First-Class Function](#first-class-function)
12. [First-Order Function](#first-order-function)
13. [Higher-Order Function](#higher-order-function)
14. [Function Currying](#function-currying)
15. [Map vs ForEach](#map-vs-foreach)
16. [Argument Keyword](#argument-keyword)
17. [Debouncing](#debouncing)
18. [Async & Defer in Script Tag](#async--defer-in-script-tag)
19. [Event Delegation](#event-delegation)
20. [Pure Function](#pure-function)
21. [Impure Function](#impure-function)
22. [Temporal Dead Zone](#temporal-dead-zone)
23. [Hoisting](#hoisting)
24. [Unary Function](#unary-function)
25. [Memoization](#memoization)
26. [Closures](#closures)
27. [localStorage, sessionStorage, Cookie, IndexedDB, web storage](#localstorage-sessionstorage-cookie-indexeddb-web-storage)
28. [Callbacks](#callbacks)
29. [Promises](#promises)
30. [Async/Await](#asyncawait)

## What is JavaScript

- JavaScript is loosely types/weekly typed language
- Everything in JavaScript happens inside an "[Execution Context](#execution-context)"
- JavaScript is `single-threaded` by design, this means it can only do one thing at a time on the main thread
- By default, JavaScript is [`synchronous`](#difference-between-synchronous-and-asynchronous): it runs line by line. \
  Synchronous Example:

  ```js
  console.log('1');
  console.log('2');
  console.log('3');
  // Output: 1, 2, 3
  ```

- But JavaScript can handle [`asynchronous`](#difference-between-synchronous-and-asynchronous) code using

  - [Callbacks](#callbacks)
  - [Promises](#promises)
  - [async/await](#async/await)

  Asynchronous Example:

  ```js
  console.log('1');
  setTimeout(() => console.log('2'), 1000);
  console.log('3');
  // Output: 1, 3, 2
  ```

- JavaScript is [`interpreted`](#interpreter-vs-compiler) but modern engines like `V8` (in Chrome and Node.js) compile it `Just-In-Time (JIT)` for better performance.

  So it is:

  - Interpreted language(executed line by line)
  - With JIT compilation for speed optimization

- JavaScript is `Object-Oriented programming`, but it is `not a class-based language`. It `uses `[`prototypes`](#prototypes)` for inheritance`.

**[⬆ Back to Top](#table-of-contents)**

## Difference between synchronous and asynchronous

- **Synchronous**: Code is executed line by line, and each line must complete before the next one starts. This can lead to blocking behavior, where the program waits for a long-running operation to finish before moving on.
- **Asynchronous**: Code can be executed out of order, allowing the program to continue running while waiting for a long-running operation to complete. This is achieved through callbacks, promises, and async/await.

**[⬆ Back to Top](#table-of-contents)**

## Interpreter vs Compiler

- **Interpreter**: Translates high-level code into machine code line by line at runtime. It executes the code directly, which can be slower but allows for immediate execution and debugging.
- **Compiler**: Translates the entire high-level code into machine code before execution. It generates an executable file, which can be run multiple times without recompilation, leading to faster execution.

**[⬆ Back to Top](#table-of-contents)**

## Methods vs Functions

- **Methods**: functions that are stored in object properties are called methods.

```js
const person = {
  name: 'John',
  greet: function () {
    console.log('Hello, ' + this.name);
  },
};
```

- **Functions**: standalone blocks of code that can be called independently.

```js
function sayHello(name) {
  console.log('Hello, ' + name);
}
sayHello('John'); // Output: Hello, John
```

**[⬆ Back to Top](#table-of-contents)**

## this Keyword

## Call, Apply & Bind

These methods help you change the context of the invoking function, allowing you to replace the value of `this` inside a function.

### `call`

The `call` method changes the value of `this` and immediately executes the function with the provided arguments.

Example:

```js
let userDetails = function (arg1, arg2) {
  console.log(this.firstName + ' ' + this.lastName + ' from ' + arg1 + ', ' + arg2);
};
userDetails.call({ firstName: 'Rohit', lastName: 'Jangid' }, 'Jodhpur', 'Rajasthan');
```

### `apply`

`apply` is similar to `call`, but arguments are passed as an array.

Example:

```js
let userDetails = function (arg1, arg2) {
  console.log(this.firstName + ' ' + this.lastName + ' from ' + arg1 + ', ' + arg2);
};
userDetails.apply({ firstName: 'Rohit', lastName: 'Jangid' }, ['Jodhpur', 'Rajasthan']);
```

### `bind`

`bind` creates a copy of the function with the `this` value set to the specified object, which can be invoked later.

Example:

```js
let newFunc = userDetails.bind({ firstName: 'Rohit', lastName: 'Jangid' }, 'Jodhpur', 'Rajasthan');
newFunc();
```

**[⬆ Back to Top](#table-of-contents)**

## Prototypes

JavaScript uses prototypes for inheritance. Every object in JavaScript has a prototype, which is another object from which it can inherit properties and methods.

Example:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log('Hello, my name is ' + this.name);
};
const john = new Person('John');
john.sayHello(); // Output: Hello, my name is John
```

**[⬆ Back to Top](#table-of-contents)**

## Event Loop

- It is concept that explains how JavaScript handles asynchronous code execution - like [`setTimeout`](#setTimeout), [`fetch`](#fetch), or [`Promises`](#promises), etc.
- Core concept of the Event loop
  1. **Call Stack**:\
     Where JavaScript keeps track of what functions are being called and executed.
  2. **Web APIs (Browser)**:\
     Where things like [`setTimeout`](#setTimeout), [`DOM events`](#dom-events), and [`fetch`](#fetch) are handled outside of the main thread.
  3. **Callback Queue (Task Queue)**:\
     Where [`setTimeout`](#setTimeout), [`DOM events`](#dom-events), etc., wait to be pushed to the call stack.
  4. **Micro-task Queue**:\
     Where [`Promises.then`](#promises) and [`async/await`](#async/await) callbacks wait(executed before the callback queue).
  5. **Event Loop**:\
     A loop that checks `if the call stack is empty` and then pushes the next task or micro-task into the call stack to run
- How Event Loop Works:

  ```js
  console.log('1');

  setTimeout(() => {
    console.log('2');
  }, 0);

  Promise.resolve().then(() => {
    console.log('3');
  });

  console.log('4');

  // Output:
  1;
  4;
  3;
  2;
  ```

  | Code                          | Goes where               | When it runs          |
  | ----------------------------- | ------------------------ | --------------------- |
  | `console.log("1")`            | Call stack               | Immediately           |
  | `setTimeout(..., 0)`          | Web API → Callback queue | After 0ms             |
  | `Promise.resolve().then(...)` | Microtask queue          | After main code done  |
  | `console.log("4")`            | Call stack               | Immediately           |
  | Microtask queue runs          |                          | Before callback queue |
  | Callback queue runs           |                          | After microtasks      |

  ```sql
  [ Call Stack ]          [ Web APIs ]         [ Queues ]

  console.log("1")  --->  setTimeout         ---> Callback Queue
  console.log("4")  --->  Promise.then       ---> Microtask Queue

              EVENT LOOP CYCLE:
  -> Is Call Stack empty?
  -> Yes ➜ Check Microtask Queue
  -> Run all microtasks
  -> Then check Callback Queue
  -> Run one task from callback queue
  -> Repeat...
  ```

## Execution Context

## Polyfills

Polyfills are basically our own implementation of an inbuilt function in JavaScript.

Example: A polyfill for `Array.prototype.map`:

```js
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return result;
  };
}
```

**[⬆ Back to Top](#table-of-contents)**

## First-Class Function

First-class functions are treated as first-class objects, which means they can be:

- Stored in variables
- Passed as arguments in functions
- Returned from other functions
- Have their own properties

They are treated like any other variable.

Example:

```js
const handler = () => console.log('This is a click handler function');
document.addEventListener('click', handler);
```

**[⬆ Back to Top](#table-of-contents)**

## First-Order Function

A function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

Example:

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

**[⬆ Back to Top](#table-of-contents)**

## Higher-Order Function

A function that either:

- Returns a function, or
- Takes a function as an argument.

Example:

```js
function higherOrderFunction(callback) {
  console.log('Before executing the callback');
  callback();
  console.log('After executing the callback');
}

function sayHello() {
  console.log('Hello!');
}

higherOrderFunction(sayHello);

// Output:
// Before executing the callback
// Hello!
// After executing the callback
```

**[⬆ Back to Top](#table-of-contents)**

## Function Currying

Function currying is a higher-order function where a function returns another function with specific parameters.

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage:
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6
```

**[⬆ Back to Top](#table-of-contents)**

## Map vs ForEach

- **Map**:
  - Creates a new copy of the original array.
  - Returns a new array.
  - Supports method chaining.
- **ForEach**:
  - Does not return a new array; returns `undefined`.
  - Does not support method chaining.

Both `map` and `forEach` do not mutate (change) the original array.

**[⬆ Back to Top](#table-of-contents)**

## Argument Keyword

The `arguments` keyword is an array-like object accessible in functions. It contains values passed to that function.

Example:

```js
function HelloWorld() {
  console.log(arguments); // { 0: 'Rohit', 1: 'Max', 2: 'Nell' }
}
HelloWorld('Rohit', 'Max', 'Nell');
```

**[⬆ Back to Top](#table-of-contents)**

## Debouncing

Debouncing is used to prevent unnecessary function calls when triggered multiple times in quick succession.

**[⬆ Back to Top](#table-of-contents)**

## Async & Defer in Script Tag

### `<script src='.........' />`

HTML parsing begins immediately when the script tag is encountered. Scripts are fetched from the network, executed, and then HTML parsing continues.

### `<script async src='.........' />`

HTML parsing continues while the script is fetched in parallel. Once the script is fetched, it is executed, and then parsing continues.

### `<script defer src='.........' />`

HTML parsing continues while the script is fetched in parallel. Once the HTML is fully parsed, the script is executed.

**[⬆ Back to Top](#table-of-contents)**

## Event Delegation

Event delegation is a pattern based on the concept of event bubbling. It allows you to handle events at a higher level in the DOM tree.

Example:

```html
<ul id="categories">
  <li id="laptops">Computer and Laptops</li>
  <li id="shoes">Shoes</li>
  <li id="phones">Mobile Phones</li>
</ul>

<script>
  document.querySelector('#categories').addEventListener('click', e => {
    window.location.href = e.target.id + '.html';
  });
</script>
```

**[⬆ Back to Top](#table-of-contents)**

## Pure Function

Pure functions are those that:

- Accept an input and return a value.
- Do not modify any data outside of their scope (no side effects).

Example:

```js
var x = 10;
function add(x, y) {
  return x + y;
}
```

We are only returning a new output, not changing any external state.

**[⬆ Back to Top](#table-of-contents)**

## Impure Function

Impure functions may cause side effects, such as changing variables outside the function.

Example:

```js
var x = 10;
function increment(x, y) {
  console.log(x);
  x++;
}
```

**[⬆ Back to Top](#table-of-contents)**

## Temporal Dead Zone

The Temporal Dead Zone (TDZ) refers to the period in a block where a variable is inaccessible until it has been initialized with a value. This happens with `let` and `const`, but not with `var`.

**[⬆ Back to Top](#table-of-contents)**

## Hoisting

Hoisting is the mechanism by which variable declarations, function declarations, and class declarations are moved to the top of their scope before code execution.

### Example of Hoisting

### Variable Hoisting

Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.

Example:

```js
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5
```

Variables declared with `let` and `const` are hoisted but not initialized, leading to a `ReferenceError` if accessed before declaration.

Example:

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

### Function Hoisting

Function declarations are hoisted to the top of their scope, allowing them to be called before they are defined.

Example:

```js
greet(); // Output: Hello, World!

function greet() {
  console.log('Hello, World!');
}
```

Function expressions are not hoisted.

Example:

```js
sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
  console.log('Hello!');
};
```

**[⬆ Back to Top](#table-of-contents)**

## Unary Function

A unary function is a function that accepts exactly one argument.

Example:

```js
const square = x => x * x;

console.log(square(5)); // Output: 25
```

Unary functions are often used in functional programming and can simplify operations by focusing on single-argument transformations.

**[⬆ Back to Top](#table-of-contents)**

## Memoization

Memoization is an optimization technique used to speed up function execution by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

### Example:

```js
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
function slowFunction(num) {
  console.log('Computing...');
  return num * num;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Output: Computing... 25
console.log(memoizedFunction(5)); // Output: 25 (cached result)
console.log(memoizedFunction(6)); // Output: Computing... 36
```

Memoization is particularly useful in scenarios where the same computations are repeated multiple times, such as recursive algorithms or data-intensive operations.

**[⬆ Back to Top](#table-of-contents)**

## Closures

Closures are functions that retain access to their outer scope, even after the outer function has executed. This allows the inner function to "remember" variables from its enclosing scope.

### Example:

```js
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');

// Output:
// Outer Variable: outside
// Inner Variable: inside
```

Closures are commonly used in scenarios such as data hiding, function factories, and maintaining state in asynchronous operations.

## localStorage, sessionStorage, Cookie, IndexDB, web storage

### localStorage, sessionStorage, Cookie, IndexedDB, and Web Storage

These are different ways to store data on the client side in a web application.

#### 1. **localStorage**

- Stores data with no expiration time.
- Data persists even after the browser is closed and reopened.
- Accessible only within the same origin.
- Storage limit: ~5MB.

Example:

```js
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key')); // Output: value
localStorage.removeItem('key');
localStorage.clear();
```

#### 2. **sessionStorage**

- Stores data for the duration of the page session.
- Data is cleared when the page session ends (e.g., when the tab is closed).
- Accessible only within the same origin.
- Storage limit: ~5MB.

Example:

```js
sessionStorage.setItem('key', 'value');
console.log(sessionStorage.getItem('key')); // Output: value
sessionStorage.removeItem('key');
sessionStorage.clear();
```

#### 3. **Cookies**

- Stores small amounts of data (up to 4KB).
- Data can have an expiration time.
- Automatically sent to the server with every HTTP request.
- Can be accessed by both client and server.

Example:

```js
document.cookie = 'username=John; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';
console.log(document.cookie);
```

#### 4. **IndexedDB**

- A low-level API for storing large amounts of structured data.
- Supports transactions and advanced querying.
- Data persists even after the browser is closed.

Example:

```js
const request = indexedDB.open('myDatabase', 1);

request.onupgradeneeded = event => {
  const db = event.target.result;
  db.createObjectStore('store', { keyPath: 'id' });
};

request.onsuccess = event => {
  const db = event.target.result;
  const transaction = db.transaction('store', 'readwrite');
  const store = transaction.objectStore('store');
  store.add({ id: 1, name: 'John' });
};
```

#### 5. **Web Storage (localStorage and sessionStorage)**

- Provides a simple key-value storage mechanism.
- Does not send data to the server with HTTP requests.
- Suitable for storing less sensitive data.

| Feature       | localStorage | sessionStorage | Cookies         | IndexedDB     |
| ------------- | ------------ | -------------- | --------------- | ------------- |
| Storage Limit | ~5MB         | ~5MB           | ~4KB            | Large amounts |
| Expiration    | None         | On tab close   | Configurable    | None          |
| Accessibility | Client only  | Client only    | Client & Server | Client only   |
| Complexity    | Simple       | Simple         | Moderate        | Complex       |

Each storage mechanism has its own use case, and the choice depends on the requirements of the application.
