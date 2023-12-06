//  Za interakciju sa korisnikom koristimo prompt metodu.

const fullName = prompt("Unesite vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite vas broj godina");
console.log(age);
// Vrednost dobijena preko prompt metode je uvek tipa string
// Taj string mozemo pretvoriti u tip number na nekoliko nacin

// 1. Number(age)

const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina);

// mozemo i odmah da pretvorimo u broj
const visina = Number(prompt("Unesite vasu visinu"));
console.log(visina);

// isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN)

console.log(isNaN("55")); // false
console.log(isNaN("5a5a")); // true
