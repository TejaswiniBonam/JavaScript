# Strings
* string = text
```js
console.log('Hello');
alert('hello');
```
## TO create a string
* There are 3 ways
    * "hello"
    * 'hello'
    * `hello` (back tics)
# String methods
```js
let str1 = 'Hello';       // Single quotes
let str2 = "World";       // Double quotes
let str3 = `Hello World`; // Backticks (template literals)
"hello".length; // 5
"hello".charAt(1); // 'e' s1[index] also works
"hello".toUpperCase(); // 'HELLO'
"hello world".includes("world"); // true
"hello".indexOf("l"); // 2
"hello".substring(1, 4); // 'ell'
"hello world".replace("world", "JS"); // 'hello JS'
"  hello  ".trim(); // 'hello'
let name = "Alice"; 
"ha".repeat(3); // "hahaha"
"JavaScript".startsWith("Java"); // true
"JavaScript".endsWith("Script"); // true
"123-456-7890".replaceAll("-", "/"); // 123/456/7890
x.slice(4); //4 to end 
x.slice(0, 3); // 0 to 2

```

# Method chaining
* using various methods in one line.
```js
let x = "bro";
x.charAt(0).toUpperCase().trim(); // B
```

# Template Literals
* when we are using a variable name instead of string somewhere we gotta use back ticks(``)
* Multi line strings are supported by `` backticks
```js
let name = "Alice";
let greeting = `Hello, ${name}!`; // "Hello, Alice!"
```
## Immutability of String
```js
let str = "hello";
str[0] = "H"; // ❌ Does not work
```
* String is IMMUTABLE

## Addition
```js
1 + 2 -> 3 
1 + '2' -> 12 => Type Coersion
'1' + '2' -> 12
1 + a -> ERROR
```
* BUT Here also it follows BODMAS
```js
's' + (1+2) -> s3
```

## concatenation
```js
let a = "Hello";
let b = "World";
let c = a + " " + b; // "Hello World"
```
* **OR USE LITERALS THING**
```js
  let c = `${a} ${b}`;
```

## SPlit and Join
* same as python
```js
"hello world".split(" "); // ["hello", "world"]
["hello", "world"].join(" "); // "hello world"
```

## Escape character
```js
let quote = "He said, \"Hello!\""; // He said, "Hello!"
let newline = "Line1\nLine2"; // Line1
                                  Line2
```

## compare strings
* FOLLOWS LEXICOGRAPHICAL ORDER ( Dictionary)
```js
"apple" < "banana"; // true
```

# What is Locale compare???


## And where u might use ', "
```js
" Hi I'm BRL" -> Hi I'm BRL
'Hi I"m BRL' -> Hi I"m BRL
'Hi I'm BRL' -> ERROR
// use esc character too
'Hi I\'m BRL'
```

## Ignore esc characters using raw string
```js
let quote = "He said, \"Hello!\"";
let newline = "Line1\nLine2";
```

## Access characters
```js
"hello"[1];      // "e"
"hello".charAt(1); // "e"
```


## some useful string patterns
* capitalize first letter
```js
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```
* reverse a string
```js
function reverse(str) {
  return str.split("").reverse().join("");
}
```
* palindrome
```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
```


# UNICODE AND EMOJI
* Unicode is a universal character encoding standard that provides a unique number for every character



# LEARN ABOUT REGEX HERE, (PATTERN MATCHING)




