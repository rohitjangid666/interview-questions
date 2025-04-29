# JavaScript Interview Questions

## Table of Contents

1. [Polyfills](#polyfills)
2. [First-Class Function](#first-class-function)
3. [First-Order Function](#first-order-function)
4. [Higher-Order Function](#higher-order-function)
5. [Function Currying](#function-currying)
6. [Map vs ForEach](#map-vs-foreach)
7. [Call, Apply & Bind](#call-apply--bind)
8. [Argument Keyword](#argument-keyword)
9. [Debouncing](#debouncing)
10. [Async & Defer in Script Tag](#async--defer-in-script-tag)
11. [Event Delegation](#event-delegation)
12. [Pure Function](#pure-function)
13. [Impure Function](#impure-function)
14. [Temporal Dead Zone](#temporal-dead-zone)
15. [Hoisting](#hoisting)

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

## First-Order Function

A function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

Example:

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

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

## Map vs ForEach

- **Map**:
  - Creates a new copy of the original array.
  - Returns a new array.
  - Supports method chaining.
- **ForEach**:
  - Does not return a new array; returns `undefined`.
  - Does not support method chaining.

Both `map` and `forEach` do not mutate (change) the original array.

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

## Argument Keyword

The `arguments` keyword is an array-like object accessible in functions. It contains values passed to that function.

Example:

```js
function HelloWorld() {
  console.log(arguments); // { 0: 'Rohit', 1: 'Max', 2: 'Nell' }
}
HelloWorld('Rohit', 'Max', 'Nell');
```

## Debouncing

Debouncing is used to prevent unnecessary function calls when triggered multiple times in quick succession.

## Async & Defer in Script Tag

### `<script src='.........' />`

HTML parsing begins immediately when the script tag is encountered. Scripts are fetched from the network, executed, and then HTML parsing continues.

### `<script async src='.........' />`

HTML parsing continues while the script is fetched in parallel. Once the script is fetched, it is executed, and then parsing continues.

### `<script defer src='.........' />`

HTML parsing continues while the script is fetched in parallel. Once the HTML is fully parsed, the script is executed.

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

## Temporal Dead Zone

The Temporal Dead Zone (TDZ) refers to the period in a block where a variable is inaccessible until it has been initialized with a value. This happens with `let` and `const`, but not with `var`.

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
