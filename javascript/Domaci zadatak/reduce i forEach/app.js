// Exercise 1: Product of Even Numbers
// Calculate the product of all even numbers in an array.

const brojevi = [1, 2, 3, 4, 5, 6];

const zbirParnih = brojevi.reduce((result, value) => {
  if (value % 2 === 0) {
    result += value;
  }
  return result;
}, 0);
console.log(zbirParnih);

// Exercise 2: Concatenate Strings
// Concatenate all strings in an array into a single string.

const stringovi = ["Mama", " ", "je", " ", "lepa"];

const spojenaRecenica = stringovi.reduce((result, value) => {
  result += value;
  return result;
}, "");
console.log(spojenaRecenica);

// Exercise 3: Find Average
// Calculate the average of an array of numbers.

const numbers = [10, 5, 8, 20, 3];

// const aritmetickaVrednost = numbers.reduce((result, value, index, array) => {
//   result += value;
//   return index === array.length - 1 ? result / array.length : result;
// }, 0);
const aritmetickaVrednost =
  numbers.reduce((result, value) => {
    result += value;
    return result;
  }, 0) / numbers.length;
console.log(aritmetickaVrednost);

// Exercise 4: Count Unique Values
// Count the number of unique values in an array.

const vrednosti = [1, 2, 3, 2, 4, 5, 4, 6];

const unikatneVrednosti = vrednosti.reduce((result, value) => {
  if (!result.includes(value)) {
    result.push(value);
  }
  return result;
}, []).length;
console.log(unikatneVrednosti);
