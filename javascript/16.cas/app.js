// funkcija je blok koda koji se pravi, kako bi jedan isti kod mogli da izvrsavamo vise puta, da lakse menjamo i ne moramo da pisemo vise puta isti kod

// deklarisemo na vise nacina:

// 1. function keyword

function printHelloWorld() {
  console.log("Hello World");
}

printHelloWorld();

// Mozemo kreairati varijable unutar funkcije, koje su block-scoped, i da ne budu dostupne unutar global-scope

// 2. Function expression

const printHelloWorld2 = function () {
  console.log("Ovo je function expression");
};

printHelloWorld2();
// 3. Arrow function - najcesce koristimo za kratke kodove i mozemo zanemariti viticaste zagrade

const printHelloWorld3 = () => {
  console.log("Ovo je arrow function");
};
printHelloWorld3();

// Takodje funkcije mogu prihvatati argumente
// Broj argumenata moze biti razlicit,u odnosu na to koliko nam istih treba

// 1. Parametar
// 2. Argument
// 3. Return

// console.log('Cao Mirza')
// console.log('Cao Benjamin')
// console.log('Cao Merjem')
// console.log('Cao Amire')

// Parametre unutar funkcije uvek postavljamo unutar zagrada

function pozdrav(ime) {
  console.log("Cao " + ime);
}

// Kada pozivamo funkciju unutar zagrada stavljamo argumente
// Argumentima zamenjujemo vrednost parametra

pozdrav("Haris");

function sabiranje(prvi, drugi) {
  console.log(prvi + drugi);
}

sabiranje(1, 2);

// Return - vraca vrednost koja smo mi formirali unutar funkcije
// sluzi za vracanje vrednosti unutar funkcije

const nekiReturn = function (a, b) {
  let rezultat = a + b;
  return rezultat;
};
const finalniRezultat = nekiReturn(1, 2);
console.log(finalniRezultat * 2);
