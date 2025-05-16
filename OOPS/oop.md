# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate that data.

## Key Concepts

- **Object**: A collection of properties and methods.
- **Class**: A blueprint for creating objects (introduced in ES6).
- **Instance**: An object created from a class.
- **Inheritance**: Mechanism to create new classes from existing ones.
- **Encapsulation**: Bundling data and methods that operate on that data.
- **Polymorphism**: Ability to use a unified interface for different data types.

## Example: ES6 Classes

```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

## Prototypes (Pre-ES6)

```js
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
};

const animal = new Animal('Leo');
animal.speak(); // Leo makes a sound.
```

## Summary

JavaScript supports OOP through prototypes and ES6 classes, enabling code reuse, modularity, and maintainability.