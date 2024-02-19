// classes
// class synthetic sugar syntax
// prototype class syntax
// OOP and OOP 4 pillars: inheritance, encapsulation, abstraction, polymorphism

// class

class Auto {
  type;
  name;
  yearOfManufacture;
  price;
  constructor(type, name, yearOfManufacture, price) {
    this.type = type;
    this.name = name;
    this.yearOfManufacture = yearOfManufacture;
    this.price = price;
  }

  getPrice() {
    return `The price is ${this.price}e`;
  }

  priceInCents() {
    return `The price is ${this.price * 100} in cents`;
  }

  calculatePDV() {
    return `PDV is ${this.price * 0.2}`;
  }
}

const a1 = new Auto("AUDI", "A6", 2012, 35000);
const a2 = new Auto("Mercedes", "C200", 2002, 25000);
const a3 = new Auto("BMW", "M1", 2018, 35000);

// console.log(a1, a2, a3);
console.log(a1.priceInCents());
console.log(a2.calculatePDV());

// prototype class

function Auto2(name, price) {
  this.name = name;
  this.price = price;
}

Auto2.prototype.getPrice = function () {
  return this.price;
};

const b1 = new Auto2("BMW", 12000);

console.log(b1);
console.log(b1.getPrice());

// custom arrat method

Array.prototype.myThing = function (callback) {
  const result = [];
  this.forEach((value, index, array) => {
    result.push(callback(value, index, array));
  });
  return result;
};

const arr = [1, 2, 3, 4].myThing((value) => {
  return value ** 2;
});

// inheritance

class Mamel {
  name;
}

class Human extends Mamel {}

console.log(new Mamel(), new Human());

// implement myFilter on Array prototype

Array.prototype.myFilter = function (callback) {
  const result = [];
  this.forEach((value, index, array) => {
    if (callback(value, index, array)) result.push(value);
  });
  return result;
};

const arr1 = [1, 2, 3, 4].myFilter((value) => value % 2 === 0);

console.log(arr1);

// implement myReduce on Array

Array.prototype.myReduce = function (callback, initValue) {
  let result = initValue ? initValue : this[0];
  this.forEach((value, index, array) => {
    if (!initValue && index === 0) {
      return;
    }
    result = callback(result, value, index, array);
  });
  return result;
};

const sum = [1, 2, 3].myReduce((result, value) => (result += value));
console.log(sum);
