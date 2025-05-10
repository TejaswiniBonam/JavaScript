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