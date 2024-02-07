const korisnici = [
  { name: "Demir", prezime: "Miraljemovic", godine: 18, posao: false },
  { name: "Saladin", prezime: "Hodzic", godine: 18, posao: true },
  { name: "Ajsa", prezime: "Maljevac", godine: 18, posao: false },
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

// korisnici.shift(); //brisanje elemenata sa pocetka niza
// console.log(korisnici);

// Napravi funkciju koja ce proveriti da li u objektu niza korisnik ima posao ili nema.
// Ako nema onda neka funkcija izbrise iz objekta taj property.

function provera(niz) {
  for (i = 0; i < niz.length; i++) {
    if (niz[i].posao === false) {
      delete niz[i].posao;
    }
  }
  return niz;
}
console.log(provera(korisnici));

// const noviKorisnici = {...korisnici}//kloniranje objekta

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

const array = [1, 2, 3, 4, 5];
function something(niz, n) {
  return niz.splice(0, n);
}
console.log(something(array, 2));

//  Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array

function returnLast(niz, n) {
  return niz.slice(Math.max(niz.length - n, 0));
}
console.log(returnLast(array, 2));
