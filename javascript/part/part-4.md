# JavaScript Complete Interview Handbook

# Part 4 — Objects, Arrays, Strings, Destructuring, Spread/Rest, Template Literals

---

## Table of Contents

- [Chapter 13: Objects](#chapter-13-objects)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Creating Objects](#creating-objects)
    - [Object Literal](#object-literal)
    - [Object Constructor](#object-constructor)
    - [Object.create()](#objectcreate)
  - [Accessing Properties](#accessing-properties)
    - [Dot Notation](#dot-notation)
    - [Bracket Notation](#bracket-notation)
  - [Adding Properties](#adding-properties)
  - [Updating Properties](#updating-properties)
  - [Deleting Properties](#deleting-properties)
  - [Object Methods](#object-methods)
  - [Object.keys()](#objectkeys)
  - [Object.values()](#objectvalues)
  - [Object.entries()](#objectentries)
  - [Property Descriptors](#property-descriptors)
  - [writable](#writable)
  - [enumerable](#enumerable)
  - [configurable](#configurable)
  - [Object.freeze()](#objectfreeze)
  - [Object.seal()](#objectseal)
  - [freeze vs seal](#freeze-vs-seal)
  - [Interview Question](#interview-question)
      - [Difference between freeze and seal?](#difference-between-freeze-and-seal)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 14: Arrays](#chapter-14-arrays)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Real World Analogy](#real-world-analogy)
  - [Creating Arrays](#creating-arrays)
  - [Accessing Elements](#accessing-elements)
  - [Length](#length)
  - [push()](#push)
  - [pop()](#pop)
  - [shift()](#shift)
  - [unshift()](#unshift)
  - [map()](#map)
  - [Step-by-Step](#step-by-step)
  - [filter()](#filter)
  - [find()](#find)
  - [some()](#some)
  - [every()](#every)
  - [reduce()](#reduce)
  - [map vs filter vs reduce](#map-vs-filter-vs-reduce)
  - [Interview Favorite](#interview-favorite)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 15: Strings](#chapter-15-strings)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Common Methods](#common-methods)
    - [length](#length)
    - [toUpperCase()](#touppercase)
    - [toLowerCase()](#tolowercase)
    - [trim()](#trim)
    - [includes()](#includes)
    - [startsWith()](#startswith)
    - [endsWith()](#endswith)
    - [split()](#split)
    - [replace()](#replace)
  - [Interview Question](#interview-question)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 16: Destructuring](#chapter-16-destructuring)
  - [Definition](#definition)
  - [Why It Matters](#why-it-matters)
  - [Array Destructuring](#array-destructuring)
  - [Skip Values](#skip-values)
  - [Default Values](#default-values)
  - [Object Destructuring](#object-destructuring)
  - [Renaming Variables](#renaming-variables)
  - [Nested Destructuring](#nested-destructuring)
  - [Interview Question](#interview-question)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 17: Spread and Rest Operators](#chapter-17-spread-and-rest-operators)
  - [Spread Operator (...)](#spread-operator)
  - [Array Copy](#array-copy)
  - [Merge Arrays](#merge-arrays)
  - [Object Copy](#object-copy)
  - [Rest Operator (...)](#rest-operator)
  - [Difference](#difference)
  - [Quick Revision Notes](#quick-revision-notes)
- [Chapter 18: Template Literals](#chapter-18-template-literals)
  - [Definition](#definition)
  - [Syntax](#syntax)
  - [Traditional Way](#traditional-way)
  - [Template Literal](#template-literal)
  - [Multi-Line Strings](#multi-line-strings)
  - [Expressions](#expressions)
  - [Real World Example](#real-world-example)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Interview Questions](#interview-questions)
      - [Beginner](#beginner)
      - [Intermediate](#intermediate)
      - [Advanced](#advanced)
  - [Part 4 Complete](#part-4-complete)
      - [Covered](#covered)

---

# Chapter 13: Objects

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

An Object is a collection of key-value pairs used to store related data and functionality.

```js
const user = {
  name: "Rohit",
  age: 25,
  isDeveloper: true
};
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Almost everything in JavaScript is built around objects.

Examples:

```text
Arrays
Functions
Dates
Maps
Sets
DOM Elements
```

All are objects.

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Think of a user profile:

```text
User
 ├─ Name
 ├─ Age
 ├─ Email
 └─ Address
```

Each property belongs to the user.

---

**[⬆ Back to Top](#table-of-contents)**

# Creating Objects

**[⬆ Back to Top](#table-of-contents)**

## Object Literal

```js
const user = {
  name: "Rohit",
  age: 25
};
```

---

**[⬆ Back to Top](#table-of-contents)**

## Object Constructor

```js
const user = new Object();

user.name = "Rohit";
```

---

**[⬆ Back to Top](#table-of-contents)**

## Object.create()

```js
const user = Object.create(null);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Accessing Properties

**[⬆ Back to Top](#table-of-contents)**

## Dot Notation

```js
user.name
```

Output:

```js
"Rohit"
```

---

**[⬆ Back to Top](#table-of-contents)**

## Bracket Notation

```js
user["name"]
```

---

Useful when key is dynamic.

```js
const key = "name";

console.log(user[key]);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Adding Properties

```js
user.city = "Jodhpur";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Updating Properties

```js
user.age = 26;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Deleting Properties

```js
delete user.age;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object Methods

Functions inside objects.

```js
const user = {
  name: "Rohit",

  greet() {
    return `Hello ${this.name}`;
  }
};
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object.keys()

Returns all keys.

```js
Object.keys(user);
```

Output:

```js
["name", "age"]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object.values()

```js
Object.values(user);
```

Output:

```js
["Rohit", 25]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object.entries()

```js
Object.entries(user);
```

Output:

```js
[
 ["name","Rohit"],
 ["age",25]
]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Property Descriptors

Every property has hidden metadata.

Example:

```js
const user = {
  name: "Rohit"
};
```

---

Inspect Descriptor

```js
Object.getOwnPropertyDescriptor(
 user,
 "name"
);
```

Output:

```js
{
 value: "Rohit",
 writable: true,
 enumerable: true,
 configurable: true
}
```

---

**[⬆ Back to Top](#table-of-contents)**

# writable

Controls modification.

```js
Object.defineProperty(
 user,
 "name",
 {
   writable: false
 }
);
```

Now:

```js
user.name = "John";
```

Fails.

---

**[⬆ Back to Top](#table-of-contents)**

# enumerable

Controls visibility in loops.

---

**[⬆ Back to Top](#table-of-contents)**

# configurable

Controls deletion and reconfiguration.

---

**[⬆ Back to Top](#table-of-contents)**

# Object.freeze()

Makes object completely immutable.

```js
const user = {
 name: "Rohit"
};

Object.freeze(user);
```

---

Now:

```js
user.name = "John";
```

Will not work.

---

Cannot:

```text
Add Properties
Update Properties
Delete Properties
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object.seal()

Allows modification but prevents add/delete.

```js
Object.seal(user);
```

Allowed:

```js
user.name = "John";
```

Not allowed:

```js
user.city = "Delhi";
```

---

**[⬆ Back to Top](#table-of-contents)**

# freeze vs seal

| Feature | freeze | seal |
| ------- | ------ | ---- |
| Add     | ❌      | ❌    |
| Delete  | ❌      | ❌    |
| Modify  | ❌      | ✅    |

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

**[⬆ Back to Top](#table-of-contents)**

### Difference between freeze and seal?

Answer:

```text
freeze:
Fully immutable

seal:
Can modify existing properties
Cannot add/delete
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Assuming freeze affects nested objects.

```js
const user = {
 profile: {
   age: 25
 }
};

Object.freeze(user);

user.profile.age = 30;
```

Still works.

Need Deep Freeze.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Prefer object literals

✅ Use freeze for constants

✅ Understand descriptors

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Object = Key Value Pair

Methods:
Object.keys()
Object.values()
Object.entries()

freeze():
No changes

seal():
Modify only
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 14: Arrays

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

An Array is an ordered collection of values.

```js
const fruits = [
 "Apple",
 "Banana",
 "Orange"
];
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Arrays are everywhere:

```text
API Responses
Database Results
React State
Lists
Tables
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Analogy

Shopping cart:

```text
Cart
 ├─ Apple
 ├─ Milk
 └─ Bread
```

---

**[⬆ Back to Top](#table-of-contents)**

# Creating Arrays

```js
const arr = [1,2,3];
```

---

```js
const arr =
new Array(1,2,3);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Accessing Elements

```js
arr[0]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Length

```js
arr.length
```

---

**[⬆ Back to Top](#table-of-contents)**

# push()

Adds at end.

```js
arr.push(4);
```

---

**[⬆ Back to Top](#table-of-contents)**

# pop()

Removes last element.

```js
arr.pop();
```

---

**[⬆ Back to Top](#table-of-contents)**

# shift()

Removes first element.

```js
arr.shift();
```

---

**[⬆ Back to Top](#table-of-contents)**

# unshift()

Adds at beginning.

```js
arr.unshift(0);
```

---

**[⬆ Back to Top](#table-of-contents)**

# map()

Creates new array.

```js
const nums = [1,2,3];

const doubled =
nums.map(
 num => num * 2
);
```

Output:

```js
[2,4,6]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Step-by-Step

```text
1 → 2
2 → 4
3 → 6
```

---

**[⬆ Back to Top](#table-of-contents)**

# filter()

Returns matching items.

```js
const nums =
[1,2,3,4];

const even =
nums.filter(
 num => num % 2 === 0
);
```

Output:

```js
[2,4]
```

---

**[⬆ Back to Top](#table-of-contents)**

# find()

Returns first match.

```js
const user =
users.find(
 u => u.id === 1
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# some()

Checks if at least one matches.

```js
nums.some(
 n => n > 3
);
```

Output:

```js
true
```

---

**[⬆ Back to Top](#table-of-contents)**

# every()

Checks all items.

```js
nums.every(
 n => n > 0
);
```

Output:

```js
true
```

---

**[⬆ Back to Top](#table-of-contents)**

# reduce()

Most important array method.

---

Syntax

```js
array.reduce(
 (acc, curr) => {},
 initialValue
);
```

---

Example

```js
const nums =
[1,2,3,4];

const total =
nums.reduce(
 (acc,curr) =>
   acc + curr,
 0
);
```

Output:

```js
10
```

---

Visualization

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

---

**[⬆ Back to Top](#table-of-contents)**

# map vs filter vs reduce

| Method | Purpose    |
| ------ | ---------- |
| map    | Transform  |
| filter | Select     |
| reduce | Accumulate |

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Favorite

Convert:

```js
[1,2,3]
```

to

```js
[2,4,6]
```

Answer:

```js
arr.map(
 n => n * 2
);
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Using map without returning.

```js
arr.map(x => {
 x * 2;
});
```

Returns:

```js
undefined
```

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use map for transformation

✅ Use filter for selection

✅ Use reduce carefully

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
push()
pop()
shift()
unshift()

map()
filter()
find()
some()
every()
reduce()
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 15: Strings

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Strings represent textual data.

```js
const name = "Rohit";
```

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Usernames, emails, API data, URLs, search queries.

Everything involves strings.

---

**[⬆ Back to Top](#table-of-contents)**

# Common Methods

---

**[⬆ Back to Top](#table-of-contents)**

## length

```js
"Hello".length
```

Output:

```js
5
```

---

**[⬆ Back to Top](#table-of-contents)**

## toUpperCase()

```js
"hello".toUpperCase()
```

Output:

```js
HELLO
```

---

**[⬆ Back to Top](#table-of-contents)**

## toLowerCase()

```js
"HELLO".toLowerCase()
```

Output:

```js
hello
```

---

**[⬆ Back to Top](#table-of-contents)**

## trim()

Removes spaces.

```js
" hello ".trim()
```

Output:

```js
hello
```

---

**[⬆ Back to Top](#table-of-contents)**

## includes()

```js
"JavaScript"
.includes("Script")
```

Output:

```js
true
```

---

**[⬆ Back to Top](#table-of-contents)**

## startsWith()

```js
"Hello"
.startsWith("He")
```

Output:

```js
true
```

---

**[⬆ Back to Top](#table-of-contents)**

## endsWith()

```js
"Hello"
.endsWith("lo")
```

Output:

```js
true
```

---

**[⬆ Back to Top](#table-of-contents)**

## split()

```js
"a,b,c".split(",");
```

Output:

```js
["a","b","c"]
```

---

**[⬆ Back to Top](#table-of-contents)**

## replace()

```js
"Hello".replace(
 "Hello",
 "Hi"
);
```

Output:

```js
Hi
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

Reverse String

```js
const str = "hello";

const reversed =
str
.split("")
.reverse()
.join("");
```

Output:

```js
olleh
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Strings are mutable.

Wrong.

Strings are immutable.

---

Example:

```js
let str = "Hello";

str[0] = "X";
```

No effect.

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Use template literals

✅ Use trim for user input

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
length
trim
split
join
replace
includes
startsWith
endsWith
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 16: Destructuring

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Destructuring extracts values from arrays or objects.

---

**[⬆ Back to Top](#table-of-contents)**

# Why It Matters

Common in:

```text
React Props
API Responses
Modern JavaScript
```

---

**[⬆ Back to Top](#table-of-contents)**

# Array Destructuring

```js
const colors =
["red","blue"];

const [first, second] =
colors;
```

Output:

```js
first = red
second = blue
```

---

**[⬆ Back to Top](#table-of-contents)**

# Skip Values

```js
const [a,,c] =
[1,2,3];
```

Output:

```js
a = 1
c = 3
```

---

**[⬆ Back to Top](#table-of-contents)**

# Default Values

```js
const [a = 10] = [];
```

Output:

```js
10
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object Destructuring

```js
const user = {
 name: "Rohit",
 age: 25
};

const {name, age} = user;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Renaming Variables

```js
const {
 name: fullName
} = user;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Nested Destructuring

```js
const user = {
 address: {
   city: "Jodhpur"
 }
};

const {
 address: { city }
} = user;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Question

Swap Variables

```js
let a = 1;
let b = 2;

[a,b] = [b,a];
```

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Array Destructuring

[a,b]

Object Destructuring

{name,age}
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 17: Spread and Rest Operators

---

**[⬆ Back to Top](#table-of-contents)**

# Spread Operator (...)

Expands values.

---

**[⬆ Back to Top](#table-of-contents)**

# Array Copy

```js
const arr1 =
[1,2,3];

const arr2 =
[...arr1];
```

---

**[⬆ Back to Top](#table-of-contents)**

# Merge Arrays

```js
const merged =
[...a, ...b];
```

---

**[⬆ Back to Top](#table-of-contents)**

# Object Copy

```js
const user2 = {
 ...user1
};
```

---

**[⬆ Back to Top](#table-of-contents)**

# Rest Operator (...)

Collects values.

---

Example

```js
function sum(...nums) {
 return nums;
}
```

Output:

```js
[1,2,3]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Difference

| Spread  | Rest     |
| ------- | -------- |
| Expands | Collects |

---

Example

```js
const arr =
[1,2,3];

console.log(...arr);
```

Output:

```js
1 2 3
```

---

```js
function test(...arr) {
 console.log(arr);
}
```

Output:

```js
[1,2,3]
```

---

**[⬆ Back to Top](#table-of-contents)**

# Quick Revision Notes

```text
Spread:
Expand

Rest:
Collect
```

---

**[⬆ Back to Top](#table-of-contents)**

# Chapter 18: Template Literals

---

**[⬆ Back to Top](#table-of-contents)**

# Definition

Template literals allow string interpolation.

Introduced in ES6.

---

**[⬆ Back to Top](#table-of-contents)**

# Syntax

Uses backticks.

```js
``
```

---

**[⬆ Back to Top](#table-of-contents)**

# Traditional Way

```js
const name = "Rohit";

"Hello " + name
```

---

**[⬆ Back to Top](#table-of-contents)**

# Template Literal

```js
const name = "Rohit";

`Hello ${name}`
```

Output:

```js
Hello Rohit
```

---

**[⬆ Back to Top](#table-of-contents)**

# Multi-Line Strings

```js
const text = `
Hello
World
`;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Expressions

```js
const a = 10;
const b = 20;

`${a + b}`
```

Output:

```js
30
```

---

**[⬆ Back to Top](#table-of-contents)**

# Real World Example

```js
const user = {
 name: "Rohit"
};

const message =
`Welcome ${user.name}`;
```

---

**[⬆ Back to Top](#table-of-contents)**

# Common Mistakes

❌ Using single quotes.

```js
'Hello ${name}'
```

Output:

```js
Hello ${name}
```

---

Need:

```js
`Hello ${name}`
```

---

**[⬆ Back to Top](#table-of-contents)**

# Best Practices

✅ Prefer template literals

✅ Use for dynamic UI

---

**[⬆ Back to Top](#table-of-contents)**

# Interview Questions

**[⬆ Back to Top](#table-of-contents)**

### Beginner

Q: Difference between template literals and string concatenation?

Answer:

Template literals are more readable and support expressions.

---

**[⬆ Back to Top](#table-of-contents)**

### Intermediate

Q: Difference between spread and rest?

Answer:

Spread expands values.

Rest collects values.

---

**[⬆ Back to Top](#table-of-contents)**

### Advanced

Q: What is the difference between Object.freeze() and Object.seal()?

Answer:

Freeze prevents all modifications.

Seal allows modification of existing properties but prevents add/delete.

---

**[⬆ Back to Top](#table-of-contents)**

# Part 4 Complete

**[⬆ Back to Top](#table-of-contents)**

### Covered

✅ Objects
✅ Property Descriptors
✅ Object.freeze()
✅ Object.seal()
✅ Arrays
✅ map()
✅ filter()
✅ reduce()
✅ find()
✅ some()
✅ every()
✅ Strings
✅ String Methods
✅ Destructuring
✅ Spread Operator
✅ Rest Operator
✅ Template Literals

---


**[⬆ Back to Top](#table-of-contents)**
