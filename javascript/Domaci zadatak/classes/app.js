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
