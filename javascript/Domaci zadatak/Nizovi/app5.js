function sumTwo(nums, target) {
  const niz = [];
  const provera = [];
  for (i = 0; i < nums.length; i++) {
    const broj = target - nums[i];
    if (provera.includes(broj) && broj + nums[i] === target) {
      niz.push(nums.indexOf(broj));
      niz.push(nums.indexOf(nums[i]));
    } else {
      provera.push(nums[i]);
    }
  }
  return niz;
}
console.log(sumTwo([1, 2, 3, 4, 5], 8));

// Object Array Transformation:
// Given an array of objects with 'name' and 'age', transform it into an array of strings in the format "Name is age years old".

const users = [
  { name: "Alice", age: 29 },
  { name: "Ajsica", age: 13 },
  { name: "Saladin", age: 18 },
];

function transformArray(niz) {
  const string = [];
  for (i = 0; i < niz.length; i++) {
    const element = niz[i];
    string.push(`${element.name} is ${element.age} years old.`);
  }
  return string;
}
console.log(transformArray(users));

// Array Intersection:
// Write a function that takes two arrays and returns a new array containing elements that are common to both arrays.
const prviNiz = [1, 2, 6, 7, 9];
const drugiNiz = [2, 5, 6, 7, 9];

function arrayIntersection(niz1, niz2) {
  const noviNiz = [];
  for (i = 0; i < niz1.length; i++) {
    if (niz1.includes(niz2[i])) {
      noviNiz.push(niz2[i]);
    } else {
      continue;
    }
  }
  return noviNiz;
}

console.log(arrayIntersection(prviNiz, drugiNiz));

// age in days

function calcDays(age) {
  return age * 365;
}
console.log(calcDays(65));

// add up the numbers

function addUp(broj) {
  let zbir = 0;
  for (i = 0; i <= broj; i++) {
    zbir += i;
  }
  return zbir;
}
console.log(addUp(4));

// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

class Person {
  constructor(name, surname, gender, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }
}

const person1 = new Person("Saladin", "Hodzic", "M", "1-2-2006");

function fiscalCode(person) {
  let code = "";
  const surname = person.surname;
  const name = person.name;
  for (i = 0; i < name.length; i++) {
    switch (name[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        continue;
      default:
        code += code.length < 3 ? name[i] : "";
    }
  }

  for (i = 0; i < surname.length; i++) {
    switch (surname[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        continue;
      default:
        code += surname[i];
    }
  }
  return code.toUpperCase();
}
console.log(fiscalCode(person1));
