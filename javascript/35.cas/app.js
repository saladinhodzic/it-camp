// Array methods
// sort
// some, concate, find, findIndex, join, every

// sort- uporedjuje na osnovu asci vrednosti
// napravljena za sortiranje stringova

const array = ["1", "2", "5", "6", "9", "22", "31", "7"];
const brojevi = [1, 2, 3, 6, 12, 4];

// brojevi.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
//   return 0;
// });

brojevi.sort((a, b) => a - b);

console.log(brojevi);

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
  {
    name: "Enver",
    surname: "Kostic",
    age: 45,
    address: "456 Oak St, Townsville",
  },
];

// mockData.sort((a, b) => a.age - b.age);
// console.log(mockData);

mockData.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
console.log(mockData);

const array3 = [1, 29, 3, 53, "a", "b", 67, 7, "1a"];

const array3Brojevi = array3
  .filter((value) => {
    if (typeof value === "number") {
      return true;
    }
    return false;
  })
  .sort((a, b) => a - b);

const array3Stringovi = array3
  .filter((value) => {
    if (typeof value === "string") {
      return true;
    }
    return false;
  })
  .sort();
console.log(array3Brojevi);
console.log(array3Stringovi);

const array3Sortiran = array3Brojevi.concat(array3Stringovi);
console.log(array3Sortiran);

// array.join, string.split

const string = "Ovo je neki string";

const array4 = string.split(" ");

const stringOpet = array4.join(" ");
console.log(stringOpet);

// napravite funkciju koja uzima neku recenicu i pretvara je u kebab case

function kebabCase(recenica) {
  const array = recenica.split(" ");
  const stringOpet = array.join("-");
  return stringOpet;
}
console.log(kebabCase(string));

// find, findIndex

const array5 = [1, 2, 3, 4, 5, 6];

const found = array5.find((value) => {
  if (value === 3) {
    return value;
  }
});

console.log(found);

const foundIndex = array5.findIndex((value) => {
  if (value === 3) {
    return true;
  }
});
console.log(foundIndex);

// nadjite objekat u kome je ime Enver

const enver = mockData.find((value) => {
  if (value.name === "Enver") {
    return true;
  }
});
console.log(enver);

// naci index objekta ciji je prezime smith

const naciSmith = mockData.findIndex((value) => {
  if (value.surname === "Smith") return true;
});
console.log(naciSmith);

// every, some

const array6 = [1, 3, 5, 7, 9, 2];

const check = array6.every((value) => {
  if (value % 2 === 0) {
    return false;
  }
  return true;
});

console.log(check);

const check2 = array6.some((value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});

console.log(check2);

//proverite da li niz ima bar jedan element koji je string
const array7 = [1, 2, "3", 3, "5"];

const checkString = array7.some((value) => {
  if (typeof value === "string") {
    return true;
  }
  return false;
});
console.log(checkString);

// proverite da li niz ima samo brojeve

const checkNumbers = array7.every((value) => {
  if (typeof value === "number") {
    return true;
  }
  return false;
});
console.log(checkNumbers);

// proveriti da li bar jedan korinsnik je stariji od 40godina

const stariji = mockData.some((value) => {
  if (value.age > 40) {
    return true;
  }
  return false;
});
console.log(stariji);
