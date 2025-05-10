# Conditional Statements in JavaScript

Conditional statements in JavaScript allow you to execute different blocks of code based on certain conditions. The main types of conditional statements are:

## 1. `if` Statement
The `if` statement executes a block of code if a specified condition evaluates to `true`.

```javascript
if (condition) {
    // Code to execute if condition is true
}
```

## 2. `if...else` Statement
The `if...else` statement provides an alternative block of code to execute if the condition is `false`.

```javascript
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

## 3. `if...else if...else` Statement
This allows you to test multiple conditions.

```javascript
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if none of the conditions are true
}
```

## 4. `switch` Statement
The `switch` statement is used to perform different actions based on different values.

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if no cases match
}
```

## Notes
- Always use `break` in `switch` cases to prevent fall-through.
- Use strict equality (`===`) for accurate comparisons.

### difference between =, == and === in js
* = -> Assignment
* == -> Equality, Compares two values for equality after type conversion ( equality).
* === -> STrict Equality, Compares two values for equality without type conversion (strict equality).

Why Use === Over ==?
Using === is generally recommended because it avoids unexpected results caused by type coercion. For example:
```js
0 == false;  // true, because 0 is coerced to false
0 === false; // false, because the types (number and boolean) are different
```


Conditional statements are essential for controlling the flow of your program based on dynamic conditions.

---

If you'd like to explore more, you can also look into **ternary operators** and **logical operators** for concise conditional expressions. For example:

### Ternary Operator
The ternary operator is a shorthand for `if...else` statements.

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Logical Operators
Logical operators like `&&` (AND), `||` (OR), and `!` (NOT) can be used to combine or invert conditions.

```javascript
if (condition1 && condition2) {
    // Code to execute if both conditions are true
}
```

These additional tools can make your code more concise and expressive.



# Loops in JavaScript

Loops are used in JavaScript to repeatedly execute a block of code as long as a specified condition is true. The main types of loops in JavaScript are:

### 1. `for` Loop
The `for` loop is used when the number of iterations is known beforehand.

```javascript
for (initialization; condition; increment) {
    // Code to execute in each iteration
}
```

Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0, 1, 2, 3, 4
}
```

### 2. `while` Loop
The `while` loop executes a block of code as long as the specified condition is true.

```javascript
while (condition) {
    // Code to execute while condition is true
}
```

Example:
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### 3. `do...while` Loop
The `do...while` loop is similar to the `while` loop, but it guarantees that the code block will execute at least once.

```javascript
do {
    // Code to execute
} while (condition);
```

Example:
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

### 4. `for...in` Loop
The `for...in` loop is used to iterate over the properties of an object.

```javascript
for (let key in object) {
    // Code to execute for each property
}
```

Example:
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}
```

### 5. `for...of` Loop
The `for...of` loop is used to iterate over iterable objects like arrays, strings, or maps.

```javascript
for (let element of iterable) {
    // Code to execute for each element
}
```

Example:
```javascript
const arr = [1, 2, 3];
for (let num of arr) {
    console.log(num);
}
```

### Notes
- Use `break` to exit a loop prematurely.
- Use `continue` to skip the current iteration and move to the next one.

Example with `break` and `continue`:
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // Exit the loop when i is 5
    if (i % 2 === 0) continue; // Skip even numbers
    console.log(i); // Outputs 1, 3
}
```

Loops are powerful tools for automating repetitive tasks and processing data efficiently.


# Logical Operators in JavaScript

Logical operators are used to combine or manipulate boolean values. They are essential for creating complex conditional expressions.

#### 1. `&&` (Logical AND)
The `&&` operator returns `true` if both operands are `true`. Otherwise, it returns `false`.

```javascript
let a = true;
let b = false;

console.log(a && b); // false
```

#### 2. `||` (Logical OR)
The `||` operator returns `true` if at least one of the operands is `true`. If both are `false`, it returns `false`.

```javascript
let a = true;
let b = false;

console.log(a || b); // true
```

#### 3. `!` (Logical NOT)
The `!` operator inverts the boolean value of its operand. If the operand is `true`, it returns `false`, and vice versa.

```javascript
let a = true;

console.log(!a); // false
```

#### 4. Short-Circuit Evaluation
Logical operators in JavaScript use short-circuit evaluation:
- For `&&`, if the first operand is `false`, the second operand is not evaluated.
- For `||`, if the first operand is `true`, the second operand is not evaluated.

Example:
```javascript
let a = false;
let b = true;

console.log(a && b); // false (b is not evaluated)
console.log(a || b); // true (b is evaluated)
```

Logical operators are commonly used in conditional statements to create more complex logic.



# what is enumerable?
# difference between for...of and for...in