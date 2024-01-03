// let ime = prompt("Unesite vase ime");

// while (ime.length < 6) {
//   ime = prompt("Unesite vase ime");
// }

const isSunny = false;

if (isSunny) {
  console.log("Suncano je");
} else if (!isSunny) {
  console.log("Nije suncano");
}

// Truthy i Falsy vrednosti nam olaksavaju pisanje uslova
// Ako je vrednost TRUTHY, to znaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi
// Ako je vrednost FALSY, to znaci da je uslov nije zadovoljen i da nece se izvrsiti kod koji sledi

// Postoji 8 falsy vrednost:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5.  0n
// 6. NaN
// 7. undefined
// 8. null

// let unesiteBiloSta = prompt("Unesite bilo sta");

// while (!unesiteBiloSta) {
//   unesiteBiloSta = prompt("Unesite bilo sta");
// }

function unosKorisnika() {
  const unesite = prompt("Unesite vrednost");

  if (!unesite) {
    return "Uneli ste falsy vrednost";
  } else {
    return "Uneli ste truthy vrednost";
  }
}
console.log(unosKorisnika());
