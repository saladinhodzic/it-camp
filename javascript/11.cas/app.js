//While petlja se koristi za iteraciju kroz neki objekat
// definise se drugacije u odnosu na for petlju
vreme = "suncano";
while (vreme === "suncano") {
  console.log("lep dan");
  vreme = "kisovito";
}

let i = 1;
while (i < 6) {
  console.log(i);
  // Kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i
  i++;
}

// do while izvrsava prvo kod pa onda proverava uslov
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:

let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// const korisnik = +prompt("Unesite broj");
// let a = 1;
// while (a <= korisnik) {
//   console.log(a ** 2);
//   a++;
// }

// let korisnikovBroj = +prompt("Unesite broj");
// while (korisnikovBroj !== 0) {
//   korisnikovBroj = +prompt("Unesite novi broj");
// }

let korisnikovBroj = +prompt("Unesite broj");
while (korisnikovBroj > 0 || korisnikovBroj < 0) {
  korisnikovBroj = +prompt("Unesite novi broj");
}

let proizvod = 1;

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);
