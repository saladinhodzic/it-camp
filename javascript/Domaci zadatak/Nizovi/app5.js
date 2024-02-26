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
const prviNiz = [1, 4, 6, 7, 9];
const drugiNiz = [2, 5, 6, 7, 9];

function arrayIntersection(niz1, niz2) {
  const noviNiz = [];
  for (i = 0; i < niz1.length; i++) {
    if (niz1[i] == niz2[i]) {
      noviNiz.push(niz1[i]);
    } else {
      continue;
    }
  }
  return noviNiz;
}

console.log(arrayIntersection(prviNiz, drugiNiz));
