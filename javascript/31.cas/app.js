// Arrays
// creating arrays, accessing data in arrays, matrix
// arrays and objects, iterating over arrays

// creating arrays
const a = [];
const b = [1, 2, 3, 4, 5];
const c = [1, false, null, undefined, "", {}];

const niz = ["1", "2", "3", "4", "5"];

// accessing data in array

console.log(b[1]);
console.log(b[b.length - 1]);

b.push(6);

console.log(b);

// brisanje elemenata niza

b.pop();
console.log(b);
// unshift dodaje,shift oduzima
b.unshift("Unshift ubacuje novi elemenat na pocetak niza");
console.log(b);

b.shift(); //sklanja elemenat prvi elemenat iz niza
console.log(b);

b.splice(2, 1); // prva vrednost je indeks elementa koga cemo da maknemo, a druga koliko od njega micemo elemenata
console.log(b);

b.splice(2, b.length - 2); //samo prva dva da nam ostanu
console.log(b);

// iterating arrays
for (i = 0; i < b.length; i++) {
  const element = b[i];
  console.log(element);
}

for (i = 0; i < c.length; i++) {
  const iteracija = c[i];
  console.log(iteracija);
}
// vrati true ili false ako niz ima string
function isStringInArray(niz) {
  for (i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "string") {
      return true;
    }
  }
  return false;
}
console.log(isStringInArray(niz));

function isUndefinedInArray(niz) {
  for (i = 0; i < niz.length; i++) {
    if (niz[i] === undefined) {
      return true;
    }
  }
  return false;
}
console.log(isUndefinedInArray(c));

// matrix - nizovi unutar nizova

const multiNiz = [
  [1, 2, 3],
  [4, "5", 6],
  [7, 8, 9],
];

multiNiz[1][1]; //5
multiNiz[0][0]; //1
multiNiz[2][2]; //9

for (i = 0; i < multiNiz.length; i++) {
  for (j = 0; j < multiNiz[i].length; j++) {
    console.log(multiNiz[i][j]);
  }
}

function isStringInMatrix(matrix) {
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][j] === "string") {
        return true;
      }
    }
  }
  return false;
}

console.log(isStringInMatrix(multiNiz));

// arrays and objects

const users = [
  { name: "Suad", prezime: "Suljovic" },
  { name: "Demir", prezime: "Miraljemovic" },
  { name: "Saladin", prezime: "Hodzic" },
];

console.log(users[0].name);
console.log(users[2].prezime);

function findInArray(niz, property, valueOfProperty) {
  for (i = 0; i < niz.length; i++) {
    const element = niz[i];
    if (
      element[property] === valueOfProperty &&
      niz[i].hasOwnProperty(property)
    ) {
      return element;
    }
  }
  return false;
}
console.log(findInArray(users, "prezime", "Suljovic"));
