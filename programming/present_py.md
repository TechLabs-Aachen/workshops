---
Title: Introduction to Python
author: TechLabs Aachen e.V.
---

Welcome To the Introduction to Python Workshop!
---

What will touch today? (Pretty much the basics)
- Variables and stuff like that
- Conditional Execution, Iteration
- Functions
- String, List, Dictionary
- Playing with some Libraries 

<!-- end_slide -->
## Most important IO

```python
a = "TechLabs"
print("Hello World")
print("Value of a:", a)
```

`print` will eat almost anything you throw at it and output it to the
console for you to read.


<!-- end_slide -->

## Variables and stuff like that

> Python is duck-typed! If it walks like a duck and it quacks like a duck, then
> it must be a duck. (Don't worry about it for now. You will see)

A Variable is a name that refers to a value. Don't go to insane with names.
There are rules on naming but not that interesting really... (just don't start
with a number).

We can make Variables like this.

```python
a = 1
a = 3 + 2
b = a + 2
5x = 3 # this is not allowed
truth = True
lie = False
```

You can also do various arithmetic operations on variables (`+,-,*,/,%,**,//`)
Should be self explanatory for people who have done math.


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

Python is imperative language. This means that we must tell the computer what to
do. It turns out that we can do that in a formal way using conditionals 
and loops.

> WATCH OUT FOR INDENTATION! Use TAB key (and a decent text editor) to indent. 

### Conditional: if-elif-else

This is the basic syntax for a conditional statement. It requires a boolean
statement! The `elif` and `else` are optional.

```python
some_boolean_statement = True
another_boolean_statement = True
if some_boolean_statement:
  print("I am true")
elif another_boolean_statement:
  print("I am also true")
else:
  print("I am false")
```

> What is the console output of this code?

```python
some_boolean_statement = False
if some_boolean_statement:
  print("I am true")
else:
  if not some_boolean_statement:
    print("I am also true")
```

> And this one?

<!-- end_slide -->

### Task 1: Conditionals 

Let say a number is cool if it is divisible by 3 or 5 but not both. 
Write a program that checks if a number is cool or not.

```python
am_i_cool = 15
...
>> "I am not cool"
```

```python
am_i_cool = 9
...
>> "I am cool"
```

Hint: You may have to use logical operators (`and`, `or`, `not`) 
and comperators (`==`, `<=`, `>=`, `!=`) to do this.
Can you guess how to apply them? 

(It is very intuitive. These operators behave like their english
counterparts and syntactically similar to arithmetic operators).


<!-- end_slide -->

### Iteration: For

The for loop lets you do something for a some number of times. It requires an
**iterable** object to loop over.

How do I get iterable objects or what are they? 
- longer technical answer: https://docs.python.org/3/glossary.html#term-iterable
- most common: 
  - for numbers 0..n (exclusive) you can do `range(n)`
  - you can start from any number `range(start, stop)`
  - you can also specify step size `range(start, stop, step)`
  - and you can also go backwards `range(start, stop, -1)`
  - you can also loop over a list, dictionary, string, tuple, etc. (later)

```python
for i in range(5):
  print(i) # numbers 0,1,2,3,4
```

<!-- end_slide -->

### Task 2: Fizzbuzz

For numbers 1 to 25 (inclusive) do the following:
- print out "Fizz" if the number is divisible by 3
- print out "Buzz" if the number is divisible by 5
- print out "FizzBuzz" if the number is divisible by 3 and 5

<!-- end_slide -->

### Iteration: While

While works like a for but it will keep executing the code until soem condition
is not true anymore. 


```python
i = 20
while i < 25:
  print("while loop...") 
  i += 2
```

> How many times will we output "while loop..."?

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
- we say "call" a function when we want to use it execute its body with some
arguments. Often we store the value of the return in a variable using `=`
operator.

You already know the built-in functions `print` and `range`. 

```python
def adding(argument1, argument2):
  some_value = argument1 + argument2 
  return some_value

a = adding(2, 3) # call the function
b = adding("a", "b") # call the function
```

Note that now we just duck-typed. If we can `+`, then we can add!

<!-- end_slide -->

### Task 3: Estimate Pi using the Leibniz Series

Some smart people have found a way to estimate Pi using an infinite series. 
- Pi is `3.14159265359`

Approximate Pi using `pi = 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + ...)`.
We will refer to each `1/n` as one term. 


Write a function that takes a number `n` and returns the approximation of Pi
with `n` terms. 

```python
def estimate_pi(n):
  ...
  return pi

esitmated_pi = estimate_pi(0) # 4
print(esitmated_pi)
```

> What `n` do you need to get 3.1415? 

<!-- end_slide -->

## Strings, List, Dictionaries

These are the bread-butter data types in python. Technically, 
tuple is also one but we will not cover it here because not important.

### Strings, List

You already used strings e.g. `print("Hello World")`. A good 
mental model for strings is that they are just a sequence of characters. 
One could say that they are a **list of characters**.  But lists look 
more like so `[1,2,3,4]`. This list has 4 elements starting from index 0. 

- you can concatenate two list with `+` e.g. `"Hello " + "World" == "Hello World"`
- you can get the length of a list with `len("Hello World") == 11`
- you can get a element at a specific index with `"Hello World"[0] == "H"`
- a list is iterable, you can do `for character in "Hello World"`
- list do not have to be homogenous e.g. `[1, "Hello", True]` (strings obviously are)

Most common list operations:
- appending element to the end: `my_list.append(5)` 
- access element at index `n`: `my_list[n]`
- check if a value is in the list: `5 in my_list` (gives a boolean)
- get the index of a value: `my_list.index(5)` (gives an integer or and exception)
- split a string into a list: `"Hello World".split(" ")` (gives a list)

<!-- end_slide -->


### Quick String formating

Sometimes you want to create a string from other values e.g. when you
want to print out a complex text. The easiest way to do this is

```python
name = "TechLabs"
hello = f"Hello {name}"
print(hello) # Hello TechLabs
```

<!-- end_slide -->

### Task 4: Compute the Average 

In this task you will write a function that takes a list of numbers and returns the average of a list that you generated yourself.

```python
def fill_my_list(n):
  my_list = 0
  # fill the list with the first n numbers starting from 1
  return my_list

def average(my_list):
  avg = 0
  ...
  return avg

my_list = fill_my_list(10)
my_avg = average(my_list)
```

<!-- end_slide -->

## List Slicing and Comprehension

Python has a lot of syntactic sugar. Slicing and comprehension are two of them,arguably the most useful ones.

### Slice

A slice is a copy of some section of a list. Look some examples

```python
A = [1,2,3,4,5,6,7]
a = A[:] # same as A
b = A[1:] # [2,3,4,5,6,7]
c = A[1:3] # [2,3]
d = A[1:6:2] # [2,4,6]  
e = A[::-1] # [7,6,5,4,3,2,1]
f = A[1:-1] # [2,3,4,5,6]
```

### Comprehension

Comprehension is a way to generate a list from some other list. Very convenient

```python
numbers = [1,2,3,4,5]
squared = [x**2 for x in numbers] # [1,4,9,16,25]
even = [x for x in numbers if x % 2 == 0] # [2,4]
is_two = [True if x == 2 else False for x in numbers] 
# [False, True, False, False, False]
```

<!-- end_slide -->

### Task 5: Some made up tasks

You have a lists of numbers. Find return two lists.
- the first list should be all elements that are before the separator
- the second list should be all elements that come after the separator
- BUT for the second list you should only include elements that are even 
```python
def separate_and_filter(ages,separator_index)
  list1 = []
  list2 = []
  ...
  return list1, list2

numbers = [15, 12, 17, 18, 35, 25, 20, 30, ]
separator_index = 3

list1, list2 = separate_and_filter(numbers, separator_index)

# list1 = [15, 12, 17]
# list2 = [18, 20, 30]

```

<!-- end_slide -->

## Dictionaries

A dictionary is a data structure allows you to access values using a key.
(Similar to a real dictionary).

You can create a dictionary like so (remember duck-typing!):
```python
my_dict = {} # empty dictionary
my_dict2 = {"key1": "value1", "key2": 2}
print(my_dict2["key1"]) # "value1"
```

Most common dictionary operations:
- iterate over keys: `for key in my_dict`
- iterate over values: `for value in my_dict.values()`
- iterate over key-value pairs: `for key, value in my_dict.items()`
- check if a key is in the dictionary: `"key1" in my_dict` (gives a boolean)
- get the value of a key: `my_dict["key1"]` (gives the value)
- add a key-value pair: `my_dict["key3"] = 3` 
- remove a key-value pair: `del my_dict["key3"]`

<!-- end_slide -->

### Task 6: Merge two List into a Dictionary, and revert

You are given two lists of equal length. Write a function `merge_dict` that takes 
merge the two lists into a dictionary. The first list contains keys and the 
second list contains values. Write a function `revert_dict` that takes a 
a dict and returns two lists: a list of keys and a list of values.

```python
def merge_dict(keys, values):
  my_dict = {}
  ...
  return my_dict

def revert_dict(my_dict):
  keys = []
  values = []
  ...
  return keys, values


list1 = ["key2", "key1", "key3"]
list2 = [2, 1, 3]

merged_dict = merge_dict(list1, list2)
split_keys, split_values = revert_dict(merged_dict)
```

> Does merging then reverting result in the same lists as `list1` and `list2` (original)?

<!-- end_slide -->

That's it for the basics for now!
---

Now let's play with some libraries!
- numpy, scipy, pandas `pip install numpy scipy`
- matplotlib `pip install matplotlib` (we will use jupyter for this one)

<!-- end_slide -->

## Doing stuff with tabular data

TODO
