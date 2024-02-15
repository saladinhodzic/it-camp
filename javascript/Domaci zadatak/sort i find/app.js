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
