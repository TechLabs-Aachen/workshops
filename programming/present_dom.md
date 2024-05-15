---
Title: Introduction to DOM Manipulation
author: TechLabs Aachen e.V.
---

Introduction to DOM Manipulation using Javascript
---

This is an extension to the Javascript course, which includes:
- Basics of HTML and CSS
- Including scripts to your HTML 
- Manipulating UI elements using DOM Manipulation
- Playing around with the DOM
- Playing around with fetch

## Your Browser is your Compiler!
Let's first setup your project
```
DomWorkshop
├── pictures
│   └── cat.png
├── index.html
├── styles.css
└── myscript.js
```

and setup your `index.html`
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <script src="myscript.js"></script>
    </head>
    <body>
        
    </body>
</html>
```

## Everything is a div
There are many types of html elements, such as `<h1>`,`<ul>`,`<ol>`,`<p>`, `<div>`
```html
<h1>I'm a Big Header!</h1>
<h2>I'm not so much of a big header!</h2>

<div>
    But at the end of the day, we're all the same!
</div>
```

All these elements have a different predefined styling, but it can always be changed.
```css
h1, h2 {
    font-size: medium;
    font-weight: 100;
}
```

## Classes, IDs and Hierarchy
To change the appearance of an html element, it is done through css
```css
h1 {
    background-color: green;
    color: blue;
    font-size: 32px;
}
```
But there are multiple ways to select an element such as:

### 1. Class Names
```html
<div class="title">Moby Dick</div>
```
```css
.title {
    border: 2px solid yellow;
}
```

### 2. ID
```html
<div id="title">Moby Dick</div>
```
```css
#title {
    text-align: center;
}
```

### 3. Child of another element
```html
<div>
    <h1></h1>
</div>
```
```css
div > h1 {
    color: red;
}
```

### 4. Pseudo class
```html
<div>
    <h1></h1>
    <h1></h1>
</div>
```
```css
h1:last-child {
    background-color: cyan;
}
```

## Manipulation of the UI with Code
```html
<h1 id="title">Moby Dick</h1>
<button onclick="changeTitle()">Change Title</button>
```
And we can select which elements to manipulate using a selectors:
- `getElementById(id)`
- `getElementsByTagName(tagName)`
- `getElementsByClassName(className)`
- `querySelectorAll(query)`
```js
function changeTitle() {
    const titleElement = document.getElementById("title");
    titleElement.innerHTML = "Pride and Prejudice";
}
```

## Exercise: Create a TODO list
```html
<h1>ToDo:</h1>
<ol>

</ol>
<input>
<button>
```
Hint: Use `document.createElement("li")` and `appendChild(child)` to add an item to the list! And `removeChild(child)` to remove them!

## Let's put an image!
```html
<img src="pictures/cat.jpg" alt="this is cat">
```
But that's not fun, right? Let's fetch it from an API:
```js
async  function getDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await response.json();
    const img = document.getElementsByTagName("img")[0];
    img.src = json.message;
}
```
