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


## Cookies in JavaScript

Cookies are small pieces of data stored in the browser, often used to remember information about the user between page loads or visits.

**Setting a cookie:**

```javascript
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 UTC; path=/";
```

**Reading cookies:**

```javascript
console.log(document.cookie);
```

**Key points:**
- Cookies are stored as key-value pairs.
- You can set attributes like `expires` and `path`.
- Cookies are sent to the server with every HTTP request.
- They have size and number limitations per domain.
- For sensitive data, consider using more secure storage mechanisms.


## Web Storage in JavaScript

JavaScript provides two main mechanisms for storing data on the client side: **localStorage** and **sessionStorage**. Both are part of the Web Storage API and allow you to store key-value pairs in the browser.

### localStorage

- Data persists even after the browser is closed and reopened.
- Data is shared across all tabs and windows from the same origin.

**Example:**

```javascript
// Store data
localStorage.setItem('name', 'Alice');

// Retrieve data
const name = localStorage.getItem('name');
console.log(name); // "Alice"

// Remove data
localStorage.removeItem('name');

// Clear all data
localStorage.clear();
```

### sessionStorage

- Data persists only for the duration of the page session (as long as the tab or window is open).
- Data is not shared across tabs or windows.

**Example:**

```javascript
// Store data
sessionStorage.setItem('sessionId', '12345');

// Retrieve data
const sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId); // "12345"

// Remove data
sessionStorage.removeItem('sessionId');

// Clear all data
sessionStorage.clear();
```

### Key Points

- Both `localStorage` and `sessionStorage` store data as strings.
- They have size limits (typically around 5MB per origin).
- Data is not sent to the server with each request (unlike cookies).
- Useful for storing user preferences, temporary data, or caching.


## BOM (Browser Object Model) in JavaScript

The Browser Object Model (BOM) allows JavaScript to interact with the browser outside of the web page's content. It provides objects that represent the browser window and enables control over browser features.

### Key BOM Objects

- **window**: The global object representing the browser window. All global JavaScript objects, functions, and variables automatically become members of the window object.
- **navigator**: Provides information about the browser (e.g., name, version, platform).
- **screen**: Contains information about the user's screen (e.g., width, height).
- **location**: Allows you to get or set the current URL, reload the page, or redirect to another URL.
- **history**: Enables navigation through the browser's session history (back, forward).

### Example: Using BOM Objects

```javascript
// Get the current URL
console.log(window.location.href);

// Redirect to another page
window.location.href = 'https://www.example.com';

// Get browser information
console.log(navigator.userAgent);

// Go back to the previous page
window.history.back();
```

**Key Points:**
- The BOM is not standardized, so implementations may vary between browsers.
- It enables interaction with the browser itself, not just the document content.
- The `window` object is the root of the BOM hierarchy.
- BOM features are essential for tasks like navigation, browser detection, and manipulating browser windows.



# Hoisting
* JS's ability
* def : leveling up all declaration and definitions



