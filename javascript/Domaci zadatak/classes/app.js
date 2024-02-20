// Exercise 1: Book Class
// Create a Book class with properties title, author, and year. Include a method displayInfo that prints out the book's information.

class book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
  }
}

const prvaKnjiga = new book("Zlocin i kazna", "Dostojevski", 1890);
const drugaKnjiga = new book("U vrtu moje maste", "Ajsica", 2016);

prvaKnjiga.displayInfo();
drugaKnjiga.displayInfo();

// Exercise 2: Animal Hierarchy
// Create a hierarchy of animal classes (e.g., Animal, Bird, Mammal). Each class should have a constructor and at least one method. Subclasses should extend the functionality of the base class.

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

class Bird extends Animal {
  fly() {
    console.log("I believe i can fly");
  }
}

class Mammal extends Animal {
  walk() {
    console.log("This thing can walk");
  }
}

const prvaZivotinja = new Mammal("Macka");

console.log(prvaZivotinja.name);
prvaZivotinja.walk();
prvaZivotinja.makeSound();

// Exercise 3: Calculator Class
// Create a Calculator class with basic arithmetic operations (addition, subtraction, multiplication, division) as methods.

class Calculator {
  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
}

const broj = new Calculator();

console.log(broj.addition(5, 4));
console.log(broj.subtraction(5, 4));
console.log(broj.multiplication(5, 4));

// Exercise 4: Rectangle and Square Classes
// Create a Rectangle class with properties width and height and a method calculateArea that calculates the area of the rectangle. Then, create a Square class that extends Rectangle and overrides the calculateArea method to suit a square

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

const pravougaonik = new Rectangle(5, 6);

console.log(pravougaonik.calculateArea());

// Exercise 5: Person Class
// Create a Person class with properties name and age. Implement a method sayHello that prints a greeting including the person's name.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`${this.name} said hello`);
  }
}

const prvaOsoba = new Person("Ajsa", 13);

prvaOsoba.sayHello();
