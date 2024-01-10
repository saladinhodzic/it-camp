// Ekstraktovanje karaktera mozemo odraditi na 3 razlicita nacina:

// charAt(position)
// charCodeAt(position)
// Pristupanje pomocu []

const recenica = 'Jos max 10 dana'
console.log(recenica.charAt(5))
console.log(recenica.charCodeAt(5))
console.log(recenica[5])

// Ako karakter sa odredjenom pozicijom ne postoji charAt vraca "", dok string[*] vraca undefined

// Postoji nekoliko search metoda u javascriptu:

// indexOf() metoda vraca index (poziciju) poslatog argumenta

console.log(recenica.indexOf("max"))
console.log(recenica.indexOf("1"))

// Ako trazena vrednost ne postoji pozicija koju dobijamo iznosi -1

console.log(recenica.indexOf("skola"))

// indexOf() prihvata drugi argument on predstavlja startnu poziciju za trazenje odredjene vrednosti

console.log(recenica.indexOf('max',7))

// lastIndexOf() metoda vraca  poslednji index (poziciju) poslatog argumenta

console.log(recenica.lastIndexOf('a'))

// search() vraca index poslatog argumenta

// search() kulira drugi argument
console.log(recenica.search('max',9))
