// napraviti funkciju koja uzima niz brojeva i vraca objekat sa najmanjom i najvecom vrednocscu
const numbers = [2, -2, 5, 16, -6];

function minMax(niz) {
  const objekat = { min: null, max: null };
  for (i = 0; i < niz.length; i++) {
    if (niz[i] === null || niz[i] < objekat.min) {
      objekat.min = niz[i];
    }
    if (niz[i] === null || niz[i] > objekat.max) {
      objekat.max = niz[i];
    }
  }
  return objekat;
}
console.log(minMax(numbers));

//
const words = ["apple", "pear", "apple", "strawberry", "grape"];
function countWords(niz) {
  const objekat = {};
  for (i = 0; i < niz.length; i++) {
    if (!objekat[niz[i]]) {
      objekat[niz[i]] = 1;
    } else {
      objekat[niz[i]]++;
    }
  }
  return objekat;
}
console.log(countWords(words));

// sortiraj niz brojeva

const sortiranNiz = numbers.sort((a, b) => {
  return a - b;
});
console.log(sortiranNiz);

// sortiraj niz objekata po godinama uzlaznim
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sortiraniLjudi = people.sort((a, b) => {
  return a.age - b.age;
});
console.log(sortiraniLjudi);

// sortiraj miksiran niz

const mixedData = [10, "apple", 5, "orange", "kiwi", 3, "banana"];

const mixString = mixedData
  .filter((value) => {
    if (typeof value === "string") {
      return true;
    }
    return false;
  })
  .sort();

const mixNumbers = mixedData
  .filter((value) => {
    if (typeof value === "number") {
      return true;
    }
    return false;
  })
  .sort((a, b) => a - b);

const mixSort = mixNumbers.concat(mixString);
console.log(mixSort);

// sortiranje duplikata

const numbersWithDuplicates = [8, 2, 5, 2, 9, 8, 3, 7, 1, 5];

const sortDuplicates = numbersWithDuplicates.sort((a, b) => {
  return a - b;
});
console.log(sortDuplicates);
