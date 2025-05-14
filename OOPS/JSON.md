## JSON
* JSON is one of the js built in object
* **In JavaScript, you must use a colon (:) to assign a value to a property inside an object, not an equals sign (=).**
* JSON doesnt support ' (single qoute) only "
* JSON doesn;t support methods.
* It is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is widely used for transmitting data between a server and a client in web applications.

* **lightweight** - something that uses minimal resources
* similar to js objects but has less features

## JSON syntax
* Objects: Represented as key-value pairs enclosed in curly braces {}.
* Arrays: Represented as a list of values enclosed in square brackets [].
* Keys: Must be strings enclosed in double quotes.
* Values: Can be strings, numbers, booleans, arrays, objects, or null.

```json
{
  "name": "Alice",
  "age": 25,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "traveling", "coding"],
  "isStudent": false
}
```

## diff between JS objects vs JSON
| JS Object | JSON |
|------|-----------|
| A data structure used in JavaScript to store key-value pairs. | A lightweight data-interchange format derived from JavaScript object syntax.|
| Keys can be unquoted if they are valid identifiers. | Keys must always be enclosed in double quotes ("). |
| Values can include functions, symbols, undefined, or other complex types. | Values must be strings, numbers, booleans, arrays, objects, or null. |
| Can include methods (functions as values). | Does not support methods or functions. |
| Used directly in JavaScript code. | Used as a text format for data exchange between systems (e.g., APIs). |


## conversions
* Use `JSON.stringify()` to convert a JavaScript object to JSON.
* Use `JSON.parse()` to convert JSON to a JavaScript object.