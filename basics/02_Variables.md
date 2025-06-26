# Variables
* THREE WAYS
  * `var` (function scoped, and OUTDATED)
      * Can be re-declared and updated
      * Hoisted (moved to top of function scope) 
  * `let` (block scoped - modern)
      * Can be updated, but not re-declared in the same scope
      * Not hoisted in the same way as var 
  * `const` (block scoped, modern)
      * Cannot be reassigned
      * Must be initialized when declared
   
## Naming rules
* Must start with a letter, underscore (_), or dollar sign ($)
* Cannot start with a number
* Case-sensitive
* Avoid reserved keywords (class, return, var, etc.)

```js
let $value = 100;
let _temp = 50;
let firstName = "John";
```

# Hoisting
* Hoisting is JavaScript's default behavior of moving declarations to the top.
* Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
* 


# declaration
* int x; , String s, let x, var x, const x

# Initialization
* x = 2, y = 3

# can do both at same time
* int x = 1;
* let x = 1;