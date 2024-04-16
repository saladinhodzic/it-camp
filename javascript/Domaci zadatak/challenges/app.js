// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

function something(a, b) {
  const obj = {};
  obj[a] = b;
  return obj;
}

console.log(something("key", "a"));
console.log(something("nesto", "d"));

// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
const niz = [1, 2, 3, 4, 5];
function removeFirstThree(niz) {
  return niz.splice(3);
}
console.log(removeFirstThree(niz));
console.log(niz);

// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
const niz2 = [1, 2, 3, 4, 5];
function lastThree(niz) {
  return niz.splice(-3);
}

// return negative values

const niz3 = [1, -2, 3, -4, 5];
function myFunction(a) {
  return a.filter((value) => {
    return value < 0;
  }).length;
}

console.log(myFunction(niz3));

// Write a function that takes an array of numbers as argument. It should return the average of the numbers.
const niz4 = [1, 2, 3, 6, 7, 8];
function findAverage(niz) {
  return (
    niz.reduce((acc, value) => {
      return acc + value;
    }, 0) / niz.length
  );
}
// function findAverage(niz) {
//   const zbir = niz.reduce((acc, value) => {
//     return acc + value;
//   }, 0);
//   return zbir / niz.length;
// }
console.log(findAverage(niz4));

// Write a function that takes an array of strings as argument. Return the longest string.
const strings = ["help", "goofy", "excuse", "me"];

function longestWord(arr) {
  let long = "";
  arr.forEach((value) => {
    if (!long) {
      long = value;
    } else if (long.length < value.length) {
      long = value;
    }
  });
  return long;
}
console.log(longestWord(strings));

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise
const niz5 = [1, 1, 1, 2];
function checkEvery(arr) {
  return arr.every((value, index, arr) => {
    if (value === arr[0]) {
      return true;
    }
    return false;
  });
}

console.log(checkEvery(niz5));

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
const prviNiz = [1, 1, 4, 5, 6];
const drugiNiz = [2, 3, 5, 6, 7];

function mergeArrays(arr1, arr2) {
  const prviString = arr1.join(" ");
  const drugiString = arr2.join(" ");
  const mergedString = prviString + " " + drugiString;
  const stringToArray = mergedString.split(" ");
  return stringToArray
    .map((value) => {
      return Number(value);
    })
    .filter((value, index, arr) => {
      if (arr.indexOf(value) === index) {
        return true;
      }
    })
    .sort();
}
console.log(mergeArrays(prviNiz, drugiNiz));

// return last three characters of string

function lastThreeLetters(a) {
  return a.slice(-3);
}

console.log(lastThreeLetters("nesto"));

// Write a function that takes an object (a) as argument. Return the sum of all object values.
const obj = {
  a: 2,
  b: 3,
  c: 6,
};
function sumObject(obj) {
  let sum = 0;
  Object.keys(obj).forEach((value) => {
    const vrednost = obj[value];
    sum += vrednost;
  });
  return sum;
}

console.log(sumObject(obj));
