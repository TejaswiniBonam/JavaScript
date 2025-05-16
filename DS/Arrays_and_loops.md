# Arrays in JavaScript

## What is an Array?
An array is a data structure used to store multiple values in a single variable.

## Creating Arrays

```js
// Using array literal
let fruits = ['apple', 'banana', 'cherry'];

// Using Array constructor
let numbers = new Array(1, 2, 3, 4);
```

## Accessing Elements

```js
console.log(fruits[0]); // 'apple'
console.log(numbers[2]); // 3
```

## Common Array Methods

- `push()` – Add to end
- `pop()` – Remove from end
- `shift()` – Remove from start
- `unshift()` – Add to start
- `length` – Number of elements

```js
fruits.push('date');
console.log(fruits.length); // 4
```

## Looping Through Arrays

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// or using for...of
for (const fruit of fruits) {
    console.log(fruit);
}
```

## Array Iteration Methods

JavaScript provides several built-in methods to iterate over arrays:

- `forEach()` – Executes a function for each array element.
- `map()` – Creates a new array with the results of calling a function on every element.
- `filter()` – Creates a new array with elements that pass a test.
- `reduce()` – Reduces the array to a single value.

```js
// forEach example
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// map example
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['APPLE', 'BANANA', 'CHERRY', 'DATE']

// filter example
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ['banana', 'cherry']

// reduce example
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength);
```

## Multidimensional Arrays

Arrays can contain other arrays, creating multidimensional arrays.

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // 6
```

## Array Destructuring

You can extract values from arrays using destructuring assignment.

```js
let [first, second] = fruits;
console.log(first); // 'apple'
console.log(second); // 'banana'
```

## Checking if a Value is an Array

Use `Array.isArray()` to check if a variable is an array.

```js
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false
```



## Loops in JavaScript

Loops are used to execute a block of code repeatedly.

### Types of Loops

- **for** – Loops a block of code a specific number of times.
- **while** – Loops as long as a condition is true.
- **do...while** – Like `while`, but runs the block at least once.
- **for...of** – Iterates over iterable objects like arrays.
- **for...in** – Iterates over enumerable properties of an object (not recommended for arrays).

```js
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// for...of loop (arrays)
for (const fruit of fruits) {
    console.log(fruit);
}
```