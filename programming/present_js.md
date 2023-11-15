---
Title: Introduction to JavaScript
author: TechLabs Aachen e.V.
---

Welcome To the Introduction to JavaScript Workshop!
---

What will touch today? (Pretty much the basics)
- Variables and stuff like that
- Conditional Execution, Iteration
- Functions
- String, Arrays, Objects
- Arrow functions everywhere
- Playing around with the DOM
- Playing around with fetch

<!-- end_slide -->

## Most important IO

```js
let name = "TechLabs";
console.log("Hello World");
console.log("Hello ", name);
```
`console.log` will eat almost anything you throw at it and output it to the
console for you to read.

<!-- end_slide -->

## Variables and stuff like that

> JavaScript is a dynamically typed language. (Don't worry about that for now) 

A variable is a name for a value. Don't go to insane with naming e.g. you
cannot use spaces in variable names or start with a number.

In JS, you have 3 keywords for declaring variables:
- `var` (ignore that, look it up if you want)
- `let` (use this if you want to change the variable)
- `const` (use this if you don't want to change the variable)

```js
let a = 1;
a = 2 + 3; // we mutate/ change the value of a
const b = a + 2;
let 2b = 3; // this will error
let truth = true; 
let lie = false;
```

Ofc there are also various arithmetic operators like `+`, `-`, `*`, `/`,
`%` and `**` (exponentiation). For integer division, use `Math.floor(a /
b)`.

<!-- end_slide -->

### Task 0: Quick Math

> Task: Calculate the remainder and the integer part of 5 divided by 2. Use variables to store the result. 

Recreate this output:
```python
5 divided by 2
integer = 2
remainder = 1

```

<!-- end_slide -->

## Conditional Execution, Iteration

JS is imperative language. This means that we must tell the computer what
to do. It turns out that we can do that in a formal way using
conditionals and loops.

> WATCH OUT FOR parentheses `()` and curly braces `{}` ! 

### Conditional: if-elseif-else

This is the basic syntax for a conditional statement. It requires a boolean
statement! The `else if` and `else` are optional.

```js
const something = true;
const something_else = true;
if (something) {
  console.log("I am true");
} else if (something_else) {
  console.log("I am also true");
} else {
  console.log("I am false");
}
```

> What is the console output of this code?

```js
const something = false;
if (something) {
  console.log("I am true");
} else {
  if (!something) {
    console.log("I am also true");
  }
}
```

> And this one?

<!-- end_slide -->

### Task 1: Conditionals 

Let say a number is cool if it is divisible by 3 or 5 but not both. 
Write a program that checks if a number is cool or not.

```js
const am_i_cool = 15
...
>> "I am not cool"
```

```js
const am_i_cool = 9
...
>> "I am cool"
```

Hint: You may have to use logical operators (`&&`, `||`, `!`) 
and comperators (`===`, `==`, `<=`, `>=`, `!=`) to do this.
Can you guess how to apply them? 

(It is very intuitive. These operators behave like their english
counterparts and syntactically similar to arithmetic operators).

<!-- end_slide -->

### Iteration: For

The for loop lets you do something for a some number of times. You can
iterate over an **iterable** object or using the basic for syntax.

The `for` sytax is as follows:
- `for(initialization; condition; increment)`
- initialization: initialize a variable or leave it empty
- condition: a boolean statement
- increment: change the variable

You can loop over an iterable objects too (later)

These are do the same!

```js
for(let i = 0; i < 5; i+=1 {
  console.log(i); // 0, 1, 2, 3, 4
}
```
```js
let i = 0
for(; i < 5; i+=1) {
  console.log(i); // 0, 1, 2, 3, 4
}
```
```js
let i = 0
for(; i < 5;) {
  console.log(i); // 0, 1, 2, 3, 4
  i+=1
}
```
<!-- end_slide -->

### Task 2: Fizzbuzz

For numbers 1 to 25 (inclusive) do the following:
- print out "Fizz" if the number is divisible by 3
- print out "Buzz" if the number is divisible by 5
- print out "FizzBuzz" if the number is divisible by 3 and 5

<!-- end_slide -->


### Iteration: While

While works like a for but it will keep executing the code until soem
condition is not true anymore. 


```js
let i = 20
while (i < 25) {
  console.log("while loop")
  i += 2
}
```
> How many times will we output "while loop"?

<!-- end_slide -->


### Task 3: Fizzbuzz v2

For numbers 1 to 25 (inclusive) do the following:
- print out "Fizz" if the number is divisible by 3
- print out "Buzz" if the number is divisible by 5
- print out "FizzBuzz" if the number is divisible by 3 and 5

BUT you must use a while loop/no for loop!

<!-- end_slide -->


## Functions

Functions allow us to reuse code. Some general guidelines:
- a function signature is what name it has and what arguments it takes
- a function body is what it does
- a function returns values (or nothing) using the `return` keyword
- we say "call" a function when we want to use it execute its body with
some arguments. Often we store the value of the return in a variable
using `=` operator.

```js
function adding(argument1, argument2) {
  let some_value = argument1 + argument2 
  return some_value
}

const a = adding(2, 3) // call the function
const b = adding("a", "b") // call the function
```

Note that now we just dynamically typed. If we can `+`, then we can add!

<!-- end_slide -->

### Task 3: Estimate Pi using the Leibniz Series

Some smart people have found a way to estimate Pi using an infinite series. 
- Pi is `3.14159265359`

Approximate Pi using `pi = 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + ...)`.

We will refer to each `1/n` as one term. 

Write a function that takes a number `n` and returns the approximation of Pi
with `n` terms. 

```js
function estimate_pi(n) {
  let pi = 0
  ... // calculate pi
  return pi
}

const esitmated_pi = estimate_pi(0) // will be 4
console.log(esitmated_pi)
```

> What `n` do you need to get 3.1415? 

<!-- end_slide -->

## Strings, Arrays, Objects

These are the bread-butter data types in js. 

### Strings, List

You already used strings e.g. `console.log("Hello World")`. A good mental
model for strings is that they are just a sequence of characters. One
could say that they are a **array of characters**.  But lists look more
like so `[1,2,3,4]`. This list has 4 elements starting from index 0. 

- you can concatenate two arrays with `.concat` see `"Hello ".concat("World") == "Hello World"`
- you can get the length of an array with `"Hello World".length == 11`+
- you can get a element at a specific index with `"Hello World"[0] == "H"`
- a you can loop through an array using indices
- array do not have to be homogenous e.g. `[1, "Hello", True]` (strings obviously are)

Most common list operations:
- appending element to the end: `my_list.push(5)` 
- access element at index `n`: `my_list[n]`
- check if a value is in the list: `my_list.includes(5)` (gives boolean)
- get the index of a value: `my_list.indexOf(5)` (gives an integer)
- split a string into a list: `"Hello World".split(" ")` (gives a list)

<!-- end_slide -->

### Quick String formating

Sometimes you want to create a string from other values e.g. when you
want to print out a complex text. The easiest way to do this is

```js
const name = "TechLabs"
const hello = `Hello ${name}`
console.log(hello) // "Hello TechLabs"
```


<!-- end_slide -->

### Task 4: Compute the Average 

In this task you will write a function that takes a list of numbers and
returns the average of a list that you generated yourself.

```js
function fill_my_list(n) {
  let my_list = []
  // fill the list with the first n numbers starting from 1
  return my_list
}

function average(my_list) {
  let avg = 0
  // calculate the average of the list
  return avg
}

const my_list = fill_my_list(10)
const my_avg = average(my_list)
```
<!-- end_slide -->


## Destructuring and Spreads

Js has a lot of syntactic sugar. Destructuring and spreads are one of the
things that you will run into often. 

## Destructing

It is used to extract values from things. 

```js
const my_list = [1, 2, 3]
const [a, b, c] = my_list
// a = 1, b = 2, c = 3
```

You can also destruct objects (later)

## Spreads

Spreads are mainly used to expand things. 

```js
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b] // c = [1, 2, 3, 4, 5, 6]
const d = [...a, 4] // d = [1, 2, 3, 4]
```

<!-- end_slide -->

### Task 5: Sort a two element array

You will write a function that takes a two element array and returns a sorted array.

```js
function sort_two_element_array(arr) {
  // sort the array
  return sorted_arr
}

const arr = [2, 1]
console.log(sort_two_element_array(arr)) // [1, 2]
```

Use destructuring to extract the two values.

<!-- end_slide -->

## Objects

An object is a data structure allows you store things using a key.
(Similar to a real dictionary).

You can create an object like so:
```python
my_obj = {} # empty object
my_obj2 = {key1: "value1", key2: 2}
print(my_dict2["key1"]) # "value1"
print(my_dict2.key1) # "value1"
```

Most common dictionary operations:
- iterate over keys: `for(const k of Object.keys(my_dict))`
- iterate over values: `for(const v of Object.values(my_obj))`
- iterate over key-value pairs: `for(const [k, v] of Object.entries(my_dict))` 
- check if a key is in the object: `"key1" in my_obj` (gives a boolean)
- get the value of a key: `my_obj["key1"], my_obj.key1` (gives the value)
- add a key-value pair: `my_obj["key3"] = 3, my_obj.key3 = 3`
- remove a key-value pair: `delete my_dict["key3"]`

<!-- end_slide -->

### Task 6: Merge two Arrays into a Object, and revert

You are given two Arrays of equal length. Write a function `merge_obj`
that takes merge the two arrays into an object. The first array contains
keys and the second array contains values. Write a function `revert_obj`
that takes an object and returns two arrays: an array of keys and an array
of values.

```js
function merge_obj(keys, values) {
  my_obj = {}
  ...
  return my_obj
}

function revert_obj(my_dict) {
  keys = []
  values = []
  ...
  return [keys, values]
}

const list1 = ["key2", "key1", "key3"]
const list2 = [2, 1, 3]

const merged_dict = merge_dict(list1, list2)
const [split_keys, split_values] = revert_dict(merged_dict)
```

> Does merging then reverting result in the same arrrays as `list1` and `list2` (original)?

<!-- end_slide -->

That's it for the basics for now!
---

Now let's get deeper into the JS ecosystem!
- learn about arrow functions
- do some DOM manipulation (find out where to find this stuff)
- do some fetch stuff (find out where to find this stuff)

<!-- end_slide -->

