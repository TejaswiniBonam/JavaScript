# Functions in JavaScript

Functions are reusable blocks of code designed to perform a specific task. They help in organizing code, improving readability, and reducing redundancy.

## Declaring Functions

### Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### Function Expression
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### Arrow Function
```javascript
const greet = (name) => `Hello, ${name}!`;
```

## Invoking Functions
```javascript
console.log(greet("Alice")); // Output: Hello, Alice!
```

## Parameters and Arguments
Functions can accept parameters and use them as arguments when invoked.
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
```

## Default Parameters
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
```

## Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

## Anonymous Functions
Functions without a name, often used as arguments.
```javascript
setTimeout(function() {
    console.log("This runs after 1 second");
}, 1000);
```

## Immediately Invoked Function Expression (IIFE)
```javascript
(function() {
    console.log("IIFE executed!");
})();
```

## Higher-Order Functions
Functions that take other functions as arguments or return them.
```javascript
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(5, 3, (x, y) => x * y)); // Output: 15
```

## Conclusion
Functions are a fundamental part of JavaScript, enabling modular, reusable, and maintainable code.

## JavaScript Function Naming Rules:
 * 
 * 1. Function names can contain letters, digits, underscores (_), and dollar signs ($).
 * 2. Function names must begin with a letter, an underscore (_), or a dollar sign ($).
 * 3. Function names cannot begin with a digit.
 * 4. Function names are case-sensitive (e.g., `myFunction` and `MyFunction` are different).
 * 5. Function names cannot be JavaScript reserved keywords (e.g., `class`, `return`, `function`, etc.).
 * 6. It is recommended to use camelCase for naming functions (e.g., `myFunctionName`).
 * 7. Function names should be descriptive and indicate the purpose or action of the function.



# CALLBACKS


## Closures in JavaScript

A **closure** is a function that remembers its outer variables and can access them even after the outer function has finished executing. Closures are created every time a function is created in JavaScript.

### Example of a Closure
```javascript
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

In this example, the inner function retains access to the `count` variable even after `makeCounter` has finished executing.

### Why Use Closures?
- To create private variables.
- To maintain state between function calls.
- Useful in event handlers, callbacks, and functional programming patterns.

# Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means you can use functions and variables before they are declared in the code (with some caveats).

## Function Hoisting

Function declarations are fully hoisted, so you can call them before their actual declaration in the code.

```javascript
sayHello(); // Output: Hello!

function sayHello() {
    console.log("Hello!");
}
```

However, function expressions (including arrow functions) are **not** hoisted in the same way. Only the variable declaration is hoisted, not the assignment.

```javascript
greet(); // TypeError: greet is not a function

var greet = function() {
    console.log("Hi!");
};
```

## Variable Hoisting

Variables declared with `var` are hoisted to the top of their scope, but only the declaration, not the initialization.

```javascript
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5
```

Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before declaration results in a `ReferenceError` due to the "temporal dead zone."

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```
**HOISTING DOES NOT WORK FOR ARROW FUNCTIONS**
## Summary

- Function declarations are hoisted and can be called before they appear in the code.
- Function expressions and arrow functions are **not** hoisted in the same way.
- `var` declarations are hoisted and initialized with `undefined`.
- `let` and `const` declarations are hoisted but not initialized, leading to a temporal dead zone.




