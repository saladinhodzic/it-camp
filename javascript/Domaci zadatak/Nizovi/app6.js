function findIndex(niz) {
  const noviNiz = [];
  for (i = 0; i < niz.length; i++) {
    if (!noviNiz.includes(niz[i])) {
      noviNiz.push(niz[i]);
    }
    continue;
  }
  return noviNiz;
}
console.log(findIndex(["apple", "banana", "grape", "grape"]));

// dva niza spojiti i dati njihov zbir u obrnutom redosledu

const prviNiz = [1, 2, 3];
const drugiNiz = [5, 8, 3];
let rezultat = [];
let carry = [];
for (i = prviNiz.length - 1; i >= 0; i--) {
  let nesto = prviNiz[i] + drugiNiz[i];

  if (carry[i + 1] == 1) {
    rezultat.push(nesto + 1);
    carry.push(0);
  } else if (nesto >= 10) {
    carry.push(1);
    rezultat.push(0);
  } else {
    carry.push(0);
    rezultat.push(nesto);
  }
  console.log(carry);
}

console.log(rezultat.reverse());

// class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(person) {
    if (this.age > person.age) {
      return `${this.name} is older than ${person.name}`;
    } else if (this.age === person.age) {
      return "They are the same age";
    } else {
      return `${this.name} is younger than ${person.name}`;
    }
  }
}

const Samuel = new Person("Samuel", 34);
const Joel = new Person("Joel", 27);
const Lily = new Person("Lily", 34);

console.log(Samuel.compareAge(Joel));
console.log(Lily.compareAge(Samuel));

// function compareAge(person1, person2) {
//   if (person1.age > person2.age) {
//     return `${person1.name} is older than ${person2.name}`;
//   } else if (person1.age === person2.age) {
//     return "They are the same age";
//   } else {
//     return `${person1.name} is younger than ${person2.name}`;
//   }
// }

// console.log(compareAge(Samuel, Joel));

// What's Hiding Amongst the Crowd?

const string = "HLAFYWDQaBUDjSAsABDUISa";

function hidingWord(string) {
  let skrivenaRec = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      skrivenaRec += string[i];
    } else {
      continue;
    }
  }
  return skrivenaRec;
}
console.log(hidingWord(string));

// Drink Sorting

const drinks = [
  { name: "Cedjena", price: 300 },
  { name: "Sejk", price: 200 },
  { name: "Campi", price: 180 },
  { name: "Sprite", price: 190 },
];

function sortDrinks(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}
console.log(sortDrinks(drinks));
