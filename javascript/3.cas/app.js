// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:
// 1. innerHTML
paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf";

// 2. document.write() - koristi se samo za testiranje

// 3. alert()

// alert("Upozorenje korisniku.");

// 4. console.log()

console.log(paragraf);

// JavaScript name mora pocinjati sa:

// Slovom (velikim ili malim)
// $ (dolar znak)
// _ (donja crta)

// JavaScript je case sensitive!!! (Razlikuje velika i mala slova)

// Postoje 4 nacina da deklarisemo promenljivu u javascriptu:

// 1. koriscenjem var keyword (rezervisane reci) - stariji nacin

// var prijanto = 'Prijatno!'; primer istovremenog deklarisanja i inicijalizovanja varijable

var prijatno; //deklarisanje

console.log(prijatno); //undefined

prijatno = "Prijatno!"; //incijalizacija

// 2. koriscenjem let keyword(rezervisane reci) - kada je vrednost varijable sklona menjanju

let brojGodina;
brojGodina = 27;
console.log(brojGodina);

// 3. koriscenjem const keyword(rezervisane reci) - kada je vrednost stalna i ne moze da se menja, mora odmah da se inicijalizuje

const ime = "Saladin";

// console.log(`Moje ime je ${ime}. Imam ${27} godina.`);

// 4. koriscenjem niceg.

mervan = "Mervan";

// Napomena - promenljive(varijable) su kontejneri za skladistenje vrednosti.
