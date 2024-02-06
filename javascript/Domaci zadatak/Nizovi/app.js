const korisnici = [
  { name: "Demir", prezime: "Miraljemovic" },
  { name: "Saladin", prezime: "Hodzic" },
  { name: "Ajsa", prezime: "Maljevac" },
];

function nesto(niz, surname, value) {
  for (i = 0; i < niz.length; i++) {
    const element = niz[i];

    if (element[surname] === value) {
      return element;
    }
  }
  return false;
}
console.log(nesto(korisnici, "prezime", "Miraljemovic"));
