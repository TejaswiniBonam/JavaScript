# JavaScript

https://www.youtube.com/watch?v=lfmg-EJ8gm4


https://www.youtube.com/watch?v=EerdGm-ehJQ

## Synchronous Code in JavaScript

Synchronous code is executed sequentially, meaning each operation waits for the previous one to complete before executing. Here is an example:

```javascript
console.log('First');
console.log('Second');
console.log('Third');
```

**Output:**
```
First
Second
Third
```

Each line runs in order, blocking the next until it finishes.

## Asynchronous Code in JavaScript

Asynchronous code allows operations to run independently of the main program flow, enabling non-blocking behavior. Here is an example using `setTimeout`:

```javascript
console.log('First');
setTimeout(() => {
    console.log('Second');
}, 1000);
console.log('Third');
```

**Output:**
```
First
Third
Second
```

The `setTimeout` function schedules the callback to run after 1 second, so "Third" is logged before "Second".


## Error Handling in JavaScript

JavaScript uses `try...catch` blocks to handle errors gracefully. This allows you to catch exceptions and respond to them without stopping the entire program.

```javascript
try {
    // Code that may throw an error
    throw new Error('Something went wrong!');
} catch (error) {
    console.log('Caught an error:', error.message);
} finally {
    console.log('This always runs.');
}
```

**Output:**
```
Caught an error: Something went wrong!
This always runs.
```

- The `try` block contains code that might throw an error.
- The `catch` block handles the error if one occurs.
- The `finally` block runs regardless of whether an error was thrown.



## Promises in JavaScript

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Promises help manage asynchronous code more cleanly than callbacks.

**Creating and using a Promise:**

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise fulfilled!');
    }, 1000);
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
```

**Output:**
```
Promise fulfilled!
```

- `resolve` is called when the operation succeeds.
- `reject` is called when the operation fails.
- `.then()` handles the resolved value.
- `.catch()` handles errors.


## Async/Await in JavaScript

`async` and `await` are modern JavaScript features that simplify working with Promises, making asynchronous code look and behave more like synchronous code.

**Example using async/await:**

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAsync() {
    console.log('Start');
    await delay(1000);
    console.log('After 1 second');
}

runAsync();
```

**Output:**
```
Start
After 1 second
```

- The `async` keyword declares an asynchronous function.
- The `await` keyword pauses the function execution until the Promise resolves.
- This approach improves readability and error handling in asynchronous code.