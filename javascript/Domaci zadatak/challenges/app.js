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
