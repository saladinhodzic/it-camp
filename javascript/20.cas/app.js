console.log("pokretanje preko node.js")

// Javascript template literals
// template literals koristi back tics sintaksu za ispisaivanje stringa

// Back ticks sintaksa

console.log(`String u drugacijoj sintaksi`)

// 1. mozemo ispisivati navodnike unutar stringa

console.log(`String u "drugacijoj" sintaksi`)

// 2. omogucava multi-line stringove tj. pisanje stringa u vise redova

const recenica = `pisanje u vise
redova`;

// 3. Interpolacija - template literals nam omogucavaju lagan nacin za prikazivanje promenljivih unutar stringa

const ime = 'Amir'
const godine = 16

const poruka = `Nas kolega ${ime} ima ${godine} godine`
console.log(poruka)

// replace() - metoda se koristi za menjanje specificnog karaktera ili niza karaktera odredjenog stringa

// Po defaultu, replace() metoda menja samo prvi match (prvo poklapanje)

const recenica2 = "Danas je padao Sneg. Mada veceras takodje pada sneg"
console.log(recenica2)
const recenica3 = recenica2.replace("sneg","kisa")
console.log(recenica3)

// Za menjanje reci mozemo koristiti regular expression sa /i

const recenica4 = recenica2.replace(/sneg/i,"kisa")
console.log(recenica4)

// Regular expression /g nam omogucava menjanje svih matcheva (poklapanja) koliko god da ih ima

const recenica5 = recenica2.replace(/sneg/gi,"kisa")
console.log(recenica5)
