// Stringovi

const recenica = "Danas pocinjemo rad sa stringovima";
const rec = "Demir";
// Pomocu indeksa pristupamo odredjenom karakteru i pocinje od 0
console.log(recenica[0]);

// Koristimo length metodu za izracunavanje duzine stringa:
const duzinaRecenice = recenica.length;
console.log(recenica[duzinaRecenice - 1]);

for (let i = 0; i <= rec.length - 1; i++) {
  console.log(rec[i]);
}

const korisnik = prompt("unesite recenicu");

for (let i = 0; i <= korisnik.length - 1; i++) {
  if (korisnik[i] === "s") {
    continue;
  } else if (korisnik[i] === "a") {
    console.log(5);
  } else {
    console.log(korisnik[i]);
  }
}

// Metoda toLowerCase() pretvara ceo string u mala slova

console.log(recenica.toLowerCase());
// Metoda toUpperCase() pretvara ceo string u velike slova

console.log(recenica.toUpperCase());

const recenica2 = "e ko ovo uradi";
let recenica3 = "";

for (let i = 0; i < recenica2.length; i++) {
  if (i === 0) {
    recenica3 += recenica2[i].toUpperCase();
  } else if (recenica2[i - 1] === " ") {
    recenica3 += recenica2[i].toUpperCase();
  } else {
    recenica3 += recenica2[i];
  }
}
console.log(recenica3);
