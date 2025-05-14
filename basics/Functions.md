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




