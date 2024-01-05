// STRINGOVI SU IMMUTABLE VREDNOSTI (nepromenjivi)

// const recenica = 'Danas je "suncan" dan'

// stavljanjem kose crte \ mozemo umetnuti karakter koji nije dozvoljen
const recenica = "Danas je bio \"suncan\" dan";

const recenica2 = "sta ako zelimo da se \\ nadje u tekstu"

const recenica3= "Ako zelimo prekinuti recenicu u neki red \
 zbog preglednosti"
 console.log(recenica3)
const recenica4= "Ako zelimo prekinuti recenicu u neki red \nzbog preglednosti"
 console.log(recenica4)


//  Postoje 3 metode za ekstraktovanje dela stringa:

// 1. slice(start,end)- start se ukljucuje, end se ne ukljucuje

const isecak =recenica2.slice(0,3)
console.log(isecak)

console.log(recenica2.slice(8,recenica2.length)) //do kraja
// Izostavljanjem drugog argumenta kod slice metode slice ide do kraja
console.log(recenica2.slice(8)) //do kraja


// slice metoda prihvata negativne indekse

console.log(recenica2.slice(-6))

// 2. substring(start,end)- start se ukljucuje, end se ne ukljucuje

// razlika izmedju slice i substringa je ta sta substring ne prihvata negativne indekse

console.log(recenica2.substring(0,3))

// 3. substr(start, length) - drugi argument govorimo koliko cemo uzeti karakter od pocetnog agrumenta

console.log(recenica2.substr(4,10))

// METODE ZA SPAJANJE STRINGOVA

// concat() - metoda za spajanje stringova
// ova metoda spaja dva ili vise stringova

const ime = "Demir"
const prezime = "Miraljemovic"

const imeIPrezime = ime.concat(" ",prezime)
console.log(imeIPrezime)


// trim() kosacica - brise razmake na krajevima

console.log(' nesto  '.trim())
