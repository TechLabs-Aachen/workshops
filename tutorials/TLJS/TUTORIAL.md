---
title: TLJS - Your own reactive front-end framework from scratch
author: TechLabs Aachen
---

Let's build a front-end framework!
---

But... What does that even mean? As you already know, a browser will display 
html elements such as `div, a, h1, etc.` with additional styles. You may also 
already know that we can even manipulate these elements with JavaScript. 

When we just write HTML, CSS and JavaScript like people did in the 90s, we 
typically don't speak of a framework! And it works perfectly fine! In fact, 
there is **NO TECHNICAL NEED** to use a framework! 

Now, in our age of the web however, we face new challenges. That is we want 
to display more dynamic content.

<!-- end_slide -->

A Case for front-end frameworks
---

Consider a simple case with two counters and a button. When the button is 
clicked we want to increment both counter. You can implement an eventlistener, 
grab the divs by id and change there content. 

```html
<div id="counter1">0</div>
<div id="counter2">0</div>
<button id="button1">Increment Counter 1</button>
```

But what if we have 100 counters? Then you have to grab 100 divs by id... (very
error prone e.g. if we change ids we break the program). Also what if we have more 
complex data structures and display? Like e.g. a list of objects `[{name:
"name", age: 10}, ...]` that we want to display in a `<table>`. This makes our
code even more complex. Each time we hit the button, we want the age to
increase. Now we have to grab the correct row and perform even more work to
find places where we have insert names and age. 

Many developers have faced these problems and have come up with solutions. 
Thus are born the modern front-end frameworks like ReactJs by Facebook!

<!-- end_slide -->

Developer Experience
---

In turns out that developer experience is very important. We want to be able 
to reuse code and not repeat ourselves. With HTML we would have to copy and 
paste many things that we built to have it appear multiple times. 

A better developer experience is provided by Javascript since we can write functions 
and call them many times (abstractly speaking). Plus web developers are already 
family with JavaScript. 

Consequently, front-end frameworks are typically written for JavaScript. You write
javascript code that will eventually generate HTML code!

From the Introduction to Programming, you may think that this is simple. We can do 

```javascript
function CoolBanner() {
    return "<h1>My Cool Banner</h1>";
}

// let's assume App is always the entry point for our program
function App() { 
  return CoolBanner();
}
```

> Note that we can now create multiple banners by calling the function multiple times
> instead of copy and pasting the HTML code.

Yep, that is technically correct. But at Facebook, they came up with a even more elegant
solutions:

```javascript
function CoolBanner() {
    // notice the missing quotes
    return <h1>My Cool Banner</h1>;
}

// let's assume App is always the entry point for our program
function App() { 
  return <CoolBanner />;
}
```

This is called JSX and is a syntax extension to JavaScript. 

<!-- end_slide -->

Your first JSX Transpiler
---

As promises, we want to write JS to generate HTML. We follow the Facebooky approach
with JSX and thus we need to transpile our JSX to HTML. We do that by parsing the 
JSX back to javascript and then use `document` to create HTML elements.

So following will happen:

```javascript
function CoolBanner() {
    return <h1>My Cool Banner</h1>;
}

function App() { 
  return <CoolBanner />;
}
```

will become 

```javascript
function CoolBanner() {
  return _jsx("h1", {
    children: "My Cool Banner"
  });
}

function App() {
  return _jsx(CoolBanner, {});
}
```

Now it is up to you to write the `_jsx` function! 

<!-- end_slide -->


> Implement the `_jsx` and related functions in `jsx-runtime.js` file.

Hints: 
- `_jsx` alwys gets 2 arguments (`tag` and `props`)
- Think about what happens when we enter App (`tag` is not a string, we need recursion)
- when we encounter a `tag` which is a string such as `h1`, we can always create an element!
- elements can be created with `document.createElement(name_of_element)`
- you can put text into elements with `element.createTextNode("what_ever_text")`
- the `_jsx` function should return an element (the one you created)

For now you can assume that we always have `props = {children: ...}` and 
`children` it is one a string (e.g. `My Cool Banner`) 

> You can test your solution with `npm run hello_world`. This will generate 
> the HTML from the JSX in `examples/helloworld/App.jsx` and store it in the
> `examples/helloworld/build` directory. You can open this file in your browser. Go
> check it out and see if everything works!

> Have a look at the files generated in `dist/hello_world`! Can you guess what they are?

<!-- end_slide -->

More complex JSX
---

Imagine the case, when we want to build more complex HTML. For example, we want to 
create a more elements in our banner and add styling.

```javascript
function CoolBanner() {
  return (
    <div class="some-cool-css-class">
      <h1>My Cool Banner</h1>
      <div class="another-cool-css-class">
        <p>Hello!</p>
        <img src="https://picsum.photos/200/300" />
        <div>
          <p>THis is a cool picture</p>
          <p>And more text</p>
        </div>
      </div>
    </div>
  );
}
```
This looks like a lot of work to do (as you can image we have very deep recursion..)

But we can tackle this problem by using the same approach as before.

> Implement code that can run the `npm run nested` example. You will find the output
> in the `examples/nested/build` directory.

Hints:
- check the hints in the file

