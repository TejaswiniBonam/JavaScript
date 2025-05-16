# JavaScript Classes

JavaScript classes are templates for creating objects. They use the `class` keyword and can include constructors, methods, and inheritance.

## Basic Syntax

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const john = new Person('John', 30);
john.greet(); // Output: Hello, my name is John.
```

## Inheritance

```js
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const alice = new Student('Alice', 20, 'A');
alice.greet(); // Output: Hello, my name is Alice.
alice.study(); // Output: Alice is studying.
```
## How Inheritance Works

Inheritance in JavaScript allows one class to extend another, enabling code reuse and the creation of hierarchical class structures. The `extends` keyword is used to create a subclass, and the `super` keyword is used to call the parent class's constructor and methods.

### Example: Method Overriding

A subclass can override methods from its parent class:

```js
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    greet() {
        console.log(`Hello, I am ${this.name}, and I teach ${this.subject}.`);
    }
}

const mrSmith = new Teacher('Mr. Smith', 40, 'Math');
mrSmith.greet(); // Output: Hello, I am Mr. Smith, and I teach Math.
```

In this example, the `Teacher` class overrides the `greet` method from the `Person` class.


## The `super` Keyword

The `super` keyword in JavaScript is used within subclasses to access and call functions on an object's parent class.

- In the constructor, `super()` calls the parent class's constructor and must be called before using `this`.
- In methods, `super.methodName()` can be used to call a method from the parent class.

### Example

```js
class Animal {
    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // Calls Animal's speak()
        console.log('Dog barks');
    }
}

const dog = new Dog();
dog.speak();
// Output:
// Animal speaks
// Dog barks
```

In this example, `super.speak()` calls the `speak` method from the `Animal` class before executing the subclass's own logic.



## Getters and Setters

Getters and setters in JavaScript classes allow you to define special methods for reading and writing property values. They provide a way to control access to properties and add custom logic when getting or setting a value.

### Example

```js
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log('Width must be positive.');
        }
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50

rect.width = 20;
console.log(rect.area); // Output: 100

rect.width = -3; // Output: Width must be positive.
```

In this example, `area` is a getter that calculates the area, and `width` is a setter that validates the value before updating it.