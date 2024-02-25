class Korisnik {
  constructor(name, age) {
    this.ime = name;
    this.godine = age;
  }
}

const prviKorisnik = new Korisnik("Saladin", 18);
const drugiKorisnik = new Korisnik("Sony", 21);
const treciKorisnik = new Korisnik("Neko", 13);

console.log(prviKorisnik);

function promise(korisnik) {
  return new Promise((resolve, reject) => {
    if (korisnik.godine < 18) {
      reject("pristup odbijen");
    } else if (korisnik.godine === 18) {
      setTimeout(() => {
        resolve("jedva si prosao");
      }, 1000);
    } else if (korisnik.godine > 18) {
      setTimeout(() => {
        resolve("pristup odobren");
      }, 2000);
    }
  });
}

promise(treciKorisnik)
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  });

// console.log(promise(prviKorisnik));
