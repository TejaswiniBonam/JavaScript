# DOM
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and styles of a webpage dynamically using programming languages like JavaScript.

* For example:
* - Access and modify HTML elements.
* - Change CSS styles dynamically.
* - Respond to user events like clicks or keypresses.

The DOM is an essential part of web development, enabling interactive and dynamic web applications.


* DOM is another built-in Object of Javascript

# More About the DOM in JavaScript

The DOM (Document Object Model) allows JavaScript to interact with and modify web pages in real time. When a web page loads, the browser creates a DOM of the page, which JavaScript can access and manipulate.

## Key Concepts

- **Nodes and Elements:**  
  Every part of the HTML document (elements, attributes, text) is a node in the DOM tree. Elements like `<div>`, `<p>`, and `<button>` are element nodes.

- **Accessing Elements:**  
* `document` is an object here
  JavaScript provides several methods to select elements:
  - `document.getElementById('id')`
  - `document.getElementsByClassName('class')`
  - `document.getElementsByTagName('tag')`
  - `document.querySelector('selector')`
  - `document.querySelectorAll('selector')`

- **Modifying Content and Attributes:**  
  You can change the text, HTML, or attributes of elements:
  - `element.textContent = 'New text'`
  - `element.innerHTML = '<b>Bold</b>'`
  - `element.setAttribute('class', 'new-class')`

- **Changing Styles:**  
  Update CSS styles directly:
  - `element.style.color = 'red'`
  - `element.style.backgroundColor = 'yellow'`

- **Handling Events:**  
  Respond to user actions:
  - `element.addEventListener('click', function() { ... })`

## Example

```javascript
// Select a button and change its text when clicked
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  button.textContent = 'Clicked!';
});
```
# syntax rules for DOM
## Syntax Rules for DOM Manipulation

- Always access the DOM through the `document` object.
- Use appropriate selector methods (`getElementById`, `querySelector`, etc.) to target elements.
- DOM properties and methods are case-sensitive (e.g., `getElementById`, not `getelementbyid`).
- Use dot notation to access or modify properties (e.g., `element.textContent`).
- Use `setAttribute` and `getAttribute` for working with element attributes.
- Event listeners should be attached using `addEventListener`.
- Changes to the DOM are reflected immediately in the page.

**Example:**
```javascript
// Correct way to change an element's class
const div = document.querySelector('div');
div.setAttribute('class', 'highlight');
```



## access html elements in js
```js
console.log(typeof document.body);
document.title;
// now these body and title are converted to Objects
document.body.innerHTML = '<button> changed </button>'; // this innerHTML is property of object body

```


## document.querySelector()

The `document.querySelector()` method returns the **first** element within the document that matches the specified CSS selector OR EVEN A HTML ELEMENT. If no matches are found, it returns `null`.

**Syntax:**
```javascript
const element = document.querySelector('selector');
```

**Examples:**
```javascript
// Select the first element with class 'btn'
const btn = document.querySelector('.btn');

// Select the first <p> element
const paragraph = document.querySelector('p'); //it will print <p> Lorem ipsum.. </p>

// Select the element with id 'header'
const header = document.querySelector('#header');
```

You can use any valid CSS selector with `querySelector()`, making it a powerful and flexible way to access elements.


* EVERY ELEMENT HAS innerHTML PROPERTY
* **IF you wanna get specific element instead of first element add `class`**

# What Does the HTML DOM Look Like?
* Imagine your webpage as a tree

* The document is the root.
* HTML tags like <html>, <head>, and <body> are branches.
* Attributes, text, and other elements are the leaves.