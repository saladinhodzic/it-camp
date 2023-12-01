// OPERATORI U JS//

// Postoji 6 razlicitih vrsta operatora u JavaScriptu:

// 1. Aritmeticki operatori

// 2. Operatori dodele vrednosti (Assignment operators)

// 3. String operatori

// 4. Operatori poredjenja

// 5. Logicki operatori

// 6. Tipovni operatori (Type operators)

// 1.1. Addition (+)

console.log(5 + 5);

// 1.2. Subtraction (-)

console.log(10 - 5);

// 1.3 Multiplication (*)

console.log(3 * 4);

// 1.4. Division (/)

console.log(8 / 2);

// 1.5. Exponentation(**) - na kvadrat
console.log(2 ** 3);

// 1.6. Modul (Ostatak pri deljenju)

console.log(12 % 5);

// Da bi broj bio paran mora ostatak pri deljenju sa 2 biti nula
// broj %2 mora biti 0

// Da bi broj bio neparan mora ostatak pri deljenju sa 2 biti razlicit od nule
// broj %2 mora biti razlicit od 0

// 1.7. Increment(++) - povecava vrednost za 1

let a = 13;
a++;
console.log(a);

// 1.7. Decrement(--) - smanjuje vrednost za 1

let b = 13;
b--;
console.log(b);

// 2. Operatori dodele vrednosti (Assignment operators)

// 2.1. =

x = 34;
console.log(x);

// 2.2. +=

x += 6; // x = x + 6
console.log(x);

// 2.3. -=

x -= 5;
console.log(x);

// 2.4. *=

x *= 2;
console.log(x);

// 2.5. /=

x /= 7;
console.log(x);

// 2.6. %=

x %= 4;
console.log(x);

// 2.7. **

x **= 4;
console.log(x);

// 3. string operatori

// 3.1. + operator moze biti koriscen za spajanje stringova

ime = "Demir";
prezime = "Miraljemovic";
imeIPrezime = ime + " " + prezime;
console.log(imeIPrezime);

brojGodina = 18;
console.log(ime + brojGodina);
console.log(brojGodina + ime);

// Pomocu + operatora mozemo dodavati broj stringu i obratno, rezultat je string

console.log("55" - 44); // Ako string moze da se pretvori u broj javascript ce izvrsiti to pretvaranje, pa tek onda oduzimanje ili bilo koju drugu aritemticku opericaju osim sabiranja

console.log("55a" - 44); //NaN- Not a Number predstavlja nekorektan broj i njegov tip je number

console.log("5" * 3);
console.log("5a" / 3);

// 4. Operatori poredjenja

// 4.1. == (poredjenje vrednosti)

console.log(4 == 7); //false
console.log(5 == 5); // true
console.log(5 == "5"); // true

// 4.2. === Poredjenje tipa i vrednosti

console.log(5 === "5"); // false
console.log(5 === 5); // true

// 4.3. != Razlicita vrednost

console.log(5 != 5); // false
console.log(5 !== "5"); // false

// 4.4. !== Razlicita i tip i vrednost

console.log(5 !== 5); //false
console.log(5 !== 9); //true
console.log(5 !== "5"); //true

// 4.5. > vece od

console.log(5 > 3);

// 4.6. < manje od

console.log(5 < 3);

// 4.7. >= vece ili jednako

console.log(5 >= 3);

// 4.8. <= manje ili jednako

console.log(5 <= 3);

// 4.9. ? Ternary operator

trenutnoVreme = 21;
pozdrav = trenutnoVreme < 4 ? "Dobar dan" : "Dobro vece";
console.log(pozdrav);

// Logicki operatori

// 5.1. && logicko and (i)

prviBroj = 2;
drugiBroj = 3;
// Ispitujemo da li su i prvi i drugi broj pozitivni
console.log(prviBroj > 0 && drugiBroj > 0);

// 5.2. || logicko ili (or)
// Ispitati da li je bar jedaan od  ponudjenih brojeva paran broj
console.log(prviBroj % 2 === 0 || drugiBroj % 2 === 0);

// 5.3. ! logicko not
console.log(!(prviBroj % 2 === 0)); // menja boolean vrednost

// Tipovni operatori

// 6.1.typeof
console.log(typeof 14.17);

// 6.2. instanceof
console.log([1, 2, 3] instanceof Array);
