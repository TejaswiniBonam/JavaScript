# JavaScript Modules (ES6)

## What is a Module?
A **module** is a file containing JavaScript code. Modules help organize code by splitting it into reusable pieces.

## Exporting
You can export variables, functions, or classes from a module:

```js
// math.js
export const PI = 3.14;
export function add(a, b) {
    return a + b;
}
```

## Importing
You can import exported members into another file:

```js
// app.js
import { PI, add } from './math.js';

console.log(add(2, 3)); // 5
```

## Default Export
A module can have a single default export:

```js
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

```js
// app.js
import greet from './greet.js';

console.log(greet('Alice')); // Hello, Alice!
```

## Benefits
- Code organization
- Reusability
- Encapsulation

## Notes
- Use the `.js` extension when importing modules in browsers.
- Modules are in strict mode by default.
- `import` and `export` only work at the top level.
