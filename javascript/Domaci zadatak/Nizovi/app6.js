function findIndex(niz) {
  const noviNiz = [];
  for (i = 0; i < niz.length; i++) {
    if (!noviNiz.includes(niz[i])) {
      noviNiz.push(niz[i]);
    }
    continue;
  }
  return noviNiz;
}
console.log(findIndex(["apple", "banana", "grape", "grape"]));

// dva niza spojiti i dati njihov zbir u obrnutom redosledu

const prviNiz = [1, 2, 3];
const drugiNiz = [5, 8, 3];
let rezultat = [];
let carry = [];
for (i = prviNiz.length - 1; i >= 0; i--) {
  let nesto = prviNiz[i] + drugiNiz[i];

  if (carry[i + 1] == 1) {
    rezultat.push(nesto + 1);
    carry.push(0);
  } else if (nesto >= 10) {
    carry.push(1);
    rezultat.push(0);
  } else {
    carry.push(0);
    rezultat.push(nesto);
  }
  console.log(carry);
}

console.log(rezultat.reverse());
