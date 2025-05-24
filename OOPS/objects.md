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
* document
* window
```js
console.log(typeof console.log);
// try more
```
## window object
* document object is in DOM.md
* while document object refers to the web page
* window refers entire browser window
```js
window.alert()
window.console.log()
window.
// we dont need to specify window everytime
```


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


# null value vs undefined
## null vs undefined

In JavaScript, `null` and `undefined` are two distinct types that represent the absence of a value, but they are used in different contexts.

### `null`
- Represents an intentional absence of any object value.
- It is explicitly assigned to a variable to indicate "no value" or "empty."
- Type of `null` is `object` (this is considered a bug in JavaScript but remains for backward compatibility).

```js
let value = null;
console.log(value); // Output: null
console.log(typeof value); // Output: object
```

### `undefined`
- Represents a variable that has been declared but not assigned a value.
- It is the default value of uninitialized variables.
- It is also returned when accessing a non-existent property of an object or a missing function argument.

```js
let value;
console.log(value); // Output: undefined
console.log(typeof value); // Output: undefined

const obj = {};
console.log(obj.property); // Output: undefined
```

### Key Differences
| Feature            | `null`                     | `undefined`               |
|--------------------|----------------------------|---------------------------|
| **Meaning**        | Intentional absence of value | Uninitialized or missing value |
| **Type**           | `object`                   | `undefined`               |
| **Assigned By**    | Explicitly by the programmer | Automatically by JavaScript |
| **Use Case**       | Represents "empty" or "nothing" | Represents "not assigned" or "missing" |

### Equality Comparison
- `null` and `undefined` are loosely equal (`==`), but not strictly equal (`===`).

```js
console.log(null == undefined);  // Output: true
console.log(null === undefined); // Output: false
```

### When to Use
- Use `null` when you want to explicitly indicate "no value."
- Avoid assigning `undefined` manually; let JavaScript handle it for uninitialized variables or missing properties.
- Always prefer strict equality (`===`) to avoid unexpected results.


# Auto-Boxing

## Auto-Boxing in JavaScript

Auto-boxing in JavaScript refers to the automatic conversion of primitive data types (like strings, numbers, and booleans) into their corresponding object wrappers when accessing properties or methods. This allows primitive values to behave like objects temporarily.

### How It Works:
When you try to access a property or method on a primitive value, JavaScript automatically wraps the value in its corresponding object type (e.g., `String`, `Number`, `Boolean`) to provide access to the object's methods and properties.

### Example:

```js
// Primitive string
const str = "hello";

// Accessing a method on the string
console.log(str.toUpperCase()); // Output: HELLO

// What happens behind the scenes:
// 1. JavaScript creates a temporary String object: new String("hello")
// 2. Calls the `toUpperCase` method on the object
// 3. Discards the temporary object after the method call
```

### Key Points:
1. **Temporary Object Creation**: The object wrapper is created temporarily and discarded immediately after the operation.
2. **Immutable Primitives**: The original primitive value remains unchanged.
3. **Corresponding Object Types**:
  - `String` for string primitives
  - `Number` for number primitives
  - `Boolean` for boolean primitives

### Example with Numbers:

```js
const num = 42;

// Accessing a method on the number
console.log(num.toFixed(2)); // Output: 42.00

// Behind the scenes:
// 1. JavaScript creates a temporary Number object: new Number(42)
// 2. Calls the `toFixed` method on the object
// 3. Discards the temporary object
```

### Limitations:
- Auto-boxing only works for accessing properties or methods. You cannot add new properties to primitive values.

```js
const str = "hello";
str.newProp = "world"; // This won't work
console.log(str.newProp); // Output: undefined
```

### Why It Matters:
Auto-boxing provides a seamless way to use object-like behavior with primitive values, making JavaScript more flexible and user-friendly.

### Note:
While auto-boxing is convenient, it is generally recommended to use primitives directly and avoid explicitly creating wrapper objects (e.g., `new String("hello")`), as they can lead to unexpected behavior and performance issues.


## Objects Are References

In JavaScript, objects are stored and manipulated as references. This means that when you assign an object to a variable or pass it to a function, you are working with a reference to the object, not the object itself.

### Key Points:
1. **Shared Reference**: Multiple variables can reference the same object. Changes made through one reference are visible to all other references.
2. **Memory Efficiency**: Instead of duplicating the object, JavaScript uses a single memory location for the object and shares its reference.
3. **Comparison**: Two variables are considered equal only if they reference the same object.

### Example:

```js
const obj1 = { name: "Alice" };
const obj2 = obj1; // obj2 references the same object as obj1

obj2.name = "Bob"; // Modifies the object through obj2
console.log(obj1.name); // Output: Bob (obj1 reflects the change)

console.log(obj1 === obj2); // Output: true (both reference the same object)
```

### Passing Objects to Functions:

When you pass an object to a function, the function receives a reference to the object, not a copy. This allows the function to modify the original object.

```js
function updateName(person) {
  person.name = "Charlie";
}

const user = { name: "Alice" };
updateName(user);
console.log(user.name); // Output: Charlie
```

### Important Notes:
- **Primitive Types**: Unlike objects, primitive types (e.g., numbers, strings) are passed by value, meaning a copy of the value is created.
- **Avoid Unintended Modifications**: Be cautious when working with references, as changes in one part of the code can affect other parts unexpectedly.

### ( copy by reference)
```js
const obj1=  {
  name: "Taehyung"
};
const obj2 = obj1;
// since the obj1 is a reference to { name="Taehyung} obj2 is copying the reference
ob1.name = "Kookie";
console.log(obj2.name); //it gives kookie


const obj3{
  name: "Kookie",
}; 
console.log(obj1 === obj2); //true
console.log(obj1===obj3); //false cuz we are comparing references

```


### Cloning Objects: 
To create a copy of an object (instead of sharing a reference), you can use methods like `Object.assign()` or the spread operator (`...`).

```js


const original = { name: "Alice" };
const clone = { ...original }; // Creates a shallow copy

clone.name = "Bob";
console.log(original.name); // Output: Alice (original is unaffected)
```

Understanding that objects are references is crucial for avoiding bugs and writing efficient, predictable code.



# some shortcuts
## destructuring
```js
const obj1=  {
  name = "Taehyung"
};
// if we need to save the name of obj1 in a variable called name
const name = obj1.name;
// or we can also write
const {name} = obj1;


const obj2=  {
  name = "Taehyung",
  hieght = 6
};
const {name, height} = obj2;

```

## shorthand property
```js
const obj1=  {
  name: "Taehyung"
};

const {name} = obj1;

const obj2={
  name,
} // this creates {name: name} which is {name: Taehyung}

```

```js
const obj1=  {
  name: "Taehyung"
  method: function fun1(){
    console.log("Hello");
  }
};

// now now we can doo
const obj2 = {
  name: "kook",
  method() {
    console.log("HELLOO");
  }
}


```

# Date Objects in JavaScript

JavaScript provides the built-in `Date` object to work with dates and times.

## Creating a Date Object

```js
// Current date and time
const now = new Date();
console.log(now);

// Specific date (year, monthIndex, day, hours, minutes, seconds, ms)
const birthday = new Date(2020, 4, 15); // May 15, 2020 (months are 0-based)
console.log(birthday);

// From a date string
const fromString = new Date("2023-12-31T23:59:59");
console.log(fromString);
```

## Common Methods

- `getFullYear()`: Gets the 4-digit year.
- `getMonth()`: Gets the month (0-11).
- `getDate()`: Gets the day of the month (1-31).
- `getDay()`: Gets the day of the week (0-6, Sunday is 0).
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Get time parts.
- `setFullYear()`, `setMonth()`, etc.: Set date/time parts.
- `getTime()`: Gets the timestamp (milliseconds since Jan 1, 1970).
- `toISOString()`: Returns ISO string representation.

```js
const d = new Date();
console.log(d.getFullYear()); // e.g., 2024
console.log(d.getMonth());    // 0-11
console.log(d.getDate());     // 1-31
console.log(d.getDay());      // 0-6
console.log(d.toISOString()); // e.g., "2024-06-01T12:34:56.789Z"
```

## Formatting Dates

For custom formatting, you often need to manually build strings or use libraries like `date-fns` or `moment.js`.

```js
const d = new Date();
const formatted = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
console.log(formatted); // e.g., "1/6/2024"
```

## Notes

- Months are zero-based (January is 0).
- The `Date` object can represent dates from ±100,000,000 days relative to 1970-01-01.
- For time zones and advanced formatting, consider using libraries.














