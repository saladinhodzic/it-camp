// Exercise 1: Squaring Positive Numbers
// Given an array of numbers, create a new array containing the squares of only the positive numbers.

const array = [1, -2, 3, 6, -16];

const array2 = array.map((value) => {
  if (value > 0) {
    return value * value;
  } else {
    return value;
  }
});
console.log(array2);

// Exercise 2: Extracting Even Length Strings
// Given an array of strings, create a new array containing only the strings with an even length.

const niz = ["Jabuka", "Banana", "Kruska", "Limun", "Narandza"];

const niz2 = niz.filter((value) => {
  if (value.length % 2 === 0) {
    return true;
  }
  return false;
});

console.log(niz2);

// Exercise 3: Converting Celsius to Fahrenheit
//Given an array of temperatures in Celsius, create a new array containing the corresponding temperatures in Fahrenheit. Use the conversion formula: F = (C * 9/5) + 32.

const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map((value) => {
  return (value * 9) / 5 + 32;
});

console.log(fahrenheit);

// Exercise 4: Filtering Unique Elements
// Given an array with duplicate elements, create a new array containing only the unique elements.

const duplikati = [1, 1, 2, 2, 3, 4, 5, 5];

const bezDuplikata = duplikati.filter((value, index, niz) => {
  if (niz.indexOf(value) === index) {
    return true;
  }
  return false;
});
console.log(bezDuplikata);
// Exercise 5: Filtering Prime Numbers
// Given an array of numbers, create a new array containing only the prime numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(broj) {
  for (i = 2; i < broj; i++) {
    if (broj % i === 0) {
      return false;
    }
  }
  return broj > 1;
}
const prostiBrojevi2 = numbers.filter((broj) => {
  for (i = 2; i < broj; i++) {
    if (broj % i === 0) {
      return false;
    }
  }
  return broj > 1;
});
const prostiBrojevi = numbers.filter(isPrime);

console.log(prostiBrojevi);
