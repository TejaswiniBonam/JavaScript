# object
* In JavaScript, an object is a collection of key-value pairs, where the keys are called properties (or methods if the value is a function). Objects are one of the fundamental building blocks of JavaScript and are used to store and organize data.
* An object groups multiple values together

* **Key-Value pairs** - Each property has a name (key) and a value.
* **Dynamic** - You can add, modify, or delete properties at runtime.
* **MEthods** - Functions can be stored as values, making them methods of the object.

```js
// Creating an object
const person = {
  name: "Alice",          // Property
  age: 25,                // Property
  greet: function() {     // Method
    console.log("Hello!");
  }
  // name is property whereas Alice is value
};

// Accessing properties
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25

// Calling a method
person.greet();           // Output: Hello!

// Adding a new property
person.job = "Developer";
console.log(person.job);  // Output: Developer

// Modifying an existing property
person.name = "Bob"; // Changes the name from "Alice" to "Bob"
console.log(person.name); // Output: Bob


// Deleting a property
delete person.age; // Removes the 'age' property
console.log(person.age); // Output: undefined



```

## we have 2 types of notations
### dot notation

```js
// Accessing properties
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25
```

### bracket notation
```js
// Accessing properties
console.log(person['name']); // Output: Alice
console.log(person['age']);  // Output: 25
```
* we use bracket notation for the cases where the property names are like
        * xxx-yyy
        * xxx yyy


## Nested Objects

```js
const person = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  greet: function() {
    console.log("Hello!");
  }
};

// Accessing Nested Properties
console.log(person.address.street); // Output: 123 Main St
console.log(person.address.city);   // Output: New York

// Modifying Nested Properties
person.address.zip = "10002";
console.log(person.address.zip);    // Output: 10002

// Adding a New Nested Property
person.address.country = "USA";
console.log(person.address.country); // Output: USA
```
* You can use dot notation or bracket notation to access properties in nested objects:

* Objects can contain other objects as properties. These are called nested objects.

* **WE ARE USING : for defining nested object value**  In JavaScript, you must use a colon (:) to assign a value to a property inside an object, not an equals sign (=).

```js
const person = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  }
};

// Accessing nested properties
console.log(person.address.street); // Output: 123 Main St
console.log(person.address.city);   // Output: New York

// Modifying nested properties
person.address.zip = "10002";
console.log(person.address.zip);    // Output: 10002

// Adding a new nested property
person.address.country = "USA";
console.log(person.address.country); // Output: USA
```


# IS THIS WHERE JSON CAME FROM????


# Builtin Objects??
* console.log - where console is an object and log is the property
* Math.random - ' ' ' ' ' ' ' ' ' '  random is a method
* JSON - 
```js
console.log(typeof console.log);
// try more
```

## JSON
* **In JavaScript, you must use a colon (:) to assign a value to a property inside an object, not an equals sign (=).**
* JSON doesnt support ' (single qoute)




