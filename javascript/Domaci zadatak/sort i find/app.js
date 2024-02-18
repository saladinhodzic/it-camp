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

// napraviti funkciju koja uzima niz brojeva zatim filtrira neparne brojeve onda daje njihov kvadrat i zatim ih sortira uzlazno

const nums = [1, 13, 15, 12, 16, 14, 3, 4, 8, 32];

function fullSortiranje(niz) {
  const numsSortiran = niz
    .filter((value) => {
      if (value % 2 === 0) {
        return true;
      }
      return false;
    })
    .map((value) => {
      return value ** 2;
    })
    .sort((a, b) => {
      return a - b;
    });
  return numsSortiran;
}
console.log(fullSortiranje(nums));

// uraditi koristeci reduce naci brojeve koji su deljivi sa 2 i 4 i vratiti njihov zbir

function reduceSortiranje(niz) {
  const noviNiz = niz.reduce((result, value) => {
    if (value % 2 === 0 && value % 4 == 0) {
      result += value;
    }
    return result;
  });
  return noviNiz;
}

console.log(reduceSortiranje(nums));

//funkcija koja stringove razmake zameniti _

const string = "Razmake u datom stringu zameniti.";

function stringSpace(string) {
  const niz = string.split(" ");
  return niz.join("_");
}
console.log(stringSpace(string));
