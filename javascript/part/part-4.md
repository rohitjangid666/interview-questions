# JavaScript Complete Interview Handbook

# Part 4 — Objects, Arrays, Strings, Destructuring, Spread/Rest, Template Literals

---

# Chapter 13: Objects

---

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

# Creating Objects

## Object Literal

```js
const user = {
  name: "Rohit",
  age: 25
};
```

---

## Object Constructor

```js
const user = new Object();

user.name = "Rohit";
```

---

## Object.create()

```js
const user = Object.create(null);
```

---

# Accessing Properties

## Dot Notation

```js
user.name
```

Output:

```js
"Rohit"
```

---

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

# Adding Properties

```js
user.city = "Jodhpur";
```

---

# Updating Properties

```js
user.age = 26;
```

---

# Deleting Properties

```js
delete user.age;
```

---

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

# Object.values()

```js
Object.values(user);
```

Output:

```js
["Rohit", 25]
```

---

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

# enumerable

Controls visibility in loops.

---

# configurable

Controls deletion and reconfiguration.

---

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

# freeze vs seal

| Feature | freeze | seal |
| ------- | ------ | ---- |
| Add     | ❌      | ❌    |
| Delete  | ❌      | ❌    |
| Modify  | ❌      | ✅    |

---

# Interview Question

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

# Best Practices

✅ Prefer object literals

✅ Use freeze for constants

✅ Understand descriptors

---

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

# Chapter 14: Arrays

---

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

# Real World Analogy

Shopping cart:

```text
Cart
 ├─ Apple
 ├─ Milk
 └─ Bread
```

---

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

# Accessing Elements

```js
arr[0]
```

---

# Length

```js
arr.length
```

---

# push()

Adds at end.

```js
arr.push(4);
```

---

# pop()

Removes last element.

```js
arr.pop();
```

---

# shift()

Removes first element.

```js
arr.shift();
```

---

# unshift()

Adds at beginning.

```js
arr.unshift(0);
```

---

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

# Step-by-Step

```text
1 → 2
2 → 4
3 → 6
```

---

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

# find()

Returns first match.

```js
const user =
users.find(
 u => u.id === 1
);
```

---

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

# map vs filter vs reduce

| Method | Purpose    |
| ------ | ---------- |
| map    | Transform  |
| filter | Select     |
| reduce | Accumulate |

---

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

# Best Practices

✅ Use map for transformation

✅ Use filter for selection

✅ Use reduce carefully

---

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

# Chapter 15: Strings

---

# Definition

Strings represent textual data.

```js
const name = "Rohit";
```

---

# Why It Matters

Usernames, emails, API data, URLs, search queries.

Everything involves strings.

---

# Common Methods

---

## length

```js
"Hello".length
```

Output:

```js
5
```

---

## toUpperCase()

```js
"hello".toUpperCase()
```

Output:

```js
HELLO
```

---

## toLowerCase()

```js
"HELLO".toLowerCase()
```

Output:

```js
hello
```

---

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

## split()

```js
"a,b,c".split(",");
```

Output:

```js
["a","b","c"]
```

---

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

# Best Practices

✅ Use template literals

✅ Use trim for user input

---

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

# Chapter 16: Destructuring

---

# Definition

Destructuring extracts values from arrays or objects.

---

# Why It Matters

Common in:

```text
React Props
API Responses
Modern JavaScript
```

---

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

# Default Values

```js
const [a = 10] = [];
```

Output:

```js
10
```

---

# Object Destructuring

```js
const user = {
 name: "Rohit",
 age: 25
};

const {name, age} = user;
```

---

# Renaming Variables

```js
const {
 name: fullName
} = user;
```

---

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

# Interview Question

Swap Variables

```js
let a = 1;
let b = 2;

[a,b] = [b,a];
```

---

# Quick Revision Notes

```text
Array Destructuring

[a,b]

Object Destructuring

{name,age}
```

---

# Chapter 17: Spread and Rest Operators

---

# Spread Operator (...)

Expands values.

---

# Array Copy

```js
const arr1 =
[1,2,3];

const arr2 =
[...arr1];
```

---

# Merge Arrays

```js
const merged =
[...a, ...b];
```

---

# Object Copy

```js
const user2 = {
 ...user1
};
```

---

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

# Quick Revision Notes

```text
Spread:
Expand

Rest:
Collect
```

---

# Chapter 18: Template Literals

---

# Definition

Template literals allow string interpolation.

Introduced in ES6.

---

# Syntax

Uses backticks.

```js
``
```

---

# Traditional Way

```js
const name = "Rohit";

"Hello " + name
```

---

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

# Multi-Line Strings

```js
const text = `
Hello
World
`;
```

---

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

# Real World Example

```js
const user = {
 name: "Rohit"
};

const message =
`Welcome ${user.name}`;
```

---

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

# Best Practices

✅ Prefer template literals

✅ Use for dynamic UI

---

# Interview Questions

### Beginner

Q: Difference between template literals and string concatenation?

Answer:

Template literals are more readable and support expressions.

---

### Intermediate

Q: Difference between spread and rest?

Answer:

Spread expands values.

Rest collects values.

---

### Advanced

Q: What is the difference between Object.freeze() and Object.seal()?

Answer:

Freeze prevents all modifications.

Seal allows modification of existing properties but prevents add/delete.

---

# Part 4 Complete

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
