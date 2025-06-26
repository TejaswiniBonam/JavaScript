# Datatypes in JavaScript

JavaScript provides different types of values that can be assigned to variables. These are categorized into two main types: **Primitive** and **Non-Primitive**.

## Primitive Datatypes



1. **String**: Represents textual data.
    ```javascript
    let name = "John";
    ```
2. **Number**: Represents numeric values (both integers and floating-point).
    ```javascript
    let age = 25;
    ```
3. **Boolean**: Represents true or false values.
    ```javascript
    let isStudent = true;
    ```
4. **Undefined**: A variable that has been declared but not assigned a value.
    ```javascript
    let x;
    console.log(x); // undefined
    ```
5. **Null**: Represents an intentional absence of any value.
    ```javascript
    let y = null;
    ```
6. **Symbol**: Represents a unique and immutable value (introduced in ES6).
    ```javascript
    let sym = Symbol('unique');
    ```
7. **BigInt**: Used for integers larger than the `Number` type can safely represent (introduced in ES11).
    ```javascript
    let bigNumber = 123456789012345678901234567890n;
    ```

## Non-Primitive Datatypes
1. **Object**: A collection of key-value pairs.
    ```javascript
    let person = { name: "John", age: 25 };
    ```
2. **Array**: A special type of object used to store ordered collections.
    ```javascript
    let colors = ["red", "green", "blue"];
    ```
3. **Function**: A block of code designed to perform a particular task.
    ```javascript
    function greet() {
         return "Hello!";
    }
    ```

## Type Checking
You can use the `typeof` operator to check the datatype of a variable:
```javascript
console.log(typeof "Hello"); // string
console.log(typeof 42);      // number
console.log(typeof true);    // boolean
console.log(typeof {});      // object
console.log(typeof []);      // object (arrays are a type of object)
console.log(typeof null);    // object (this is a known JavaScript quirk)
console.log(typeof undefined); // undefined
```

## Notes
- JavaScript is dynamically typed, meaning variables can hold values of any datatype and can change types during execution.
- Primitive datatypes are immutable, while non-primitive datatypes are mutable.
