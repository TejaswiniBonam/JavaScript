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

# localeStorage (Built-In Object)
## localStorage (Built-In Object)

The `localStorage` object in JavaScript allows you to store key-value pairs in a web browser with no expiration time. The data persists even after the browser is closed and reopened.

### Features:
- **Persistent Storage**: Data remains until explicitly deleted.
- **Key-Value Storage**: Stores data as strings.
- **Synchronous API**: Operations are blocking.

### Common Methods:
1. `setItem(key, value)` - Stores a value by key.
2. `getItem(key)` - Retrieves the value by key.
3. `removeItem(key)` - Removes the key-value pair by key.
4. `clear()` - Clears all stored data.
5. `key(index)` - Returns the key at the specified index.

### Example Usage:

```js
// Storing data
localStorage.setItem("name", "Alice");
localStorage.setItem("age", "25");

// Retrieving data
console.log(localStorage.getItem("name")); // Output: Alice
console.log(localStorage.getItem("age"));  // Output: 25

// Removing a specific item
localStorage.removeItem("age");
console.log(localStorage.getItem("age"));  // Output: null

// Clearing all data
localStorage.clear();
console.log(localStorage.getItem("name")); // Output: null
```

### Notes:
- Only strings can be stored. Use `JSON.stringify()` and `JSON.parse()` to store and retrieve objects or arrays.
- Data is stored per origin (protocol + domain + port).

### Example with Objects:

```js
const user = { name: "Alice", age: 25 };

// Storing an object
localStorage.setItem("user", JSON.stringify(user));

// Retrieving the object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: Alice
console.log(storedUser.age);  // Output: 25
```

### Limitations:
- Storage size is typically limited to 5MB per origin.
- Synchronous nature may impact performance for large data.

### When to Use:
- Use `localStorage` for small, non-sensitive data that needs to persist across sessions.
- Avoid storing sensitive information like passwords or tokens.








