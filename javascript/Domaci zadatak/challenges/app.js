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
