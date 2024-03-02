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
