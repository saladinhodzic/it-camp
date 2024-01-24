// 1.toString
// .toString() metoda se koristi da neki broj pretvori u string

const a = 10
console.log(typeof a,a)
const b = a.toString()
console.log(typeof b , b)

// Number()

console.log('10'+ 2)
const c = "10"

const d = Number(c)
console.log(d)

// parseInt()

const e = '10'

const f=parseInt(e)
console.log(typeof f)

// parseInt() zaokruzuje decimalni broj najmanji celi broj

const n = 3.9
console.log(parseInt(n))

// parseFloat() - transformise string u broj a pritom ne zaokruzuje decimalni broj na celi broj

const p = '3.14'
console.log(parseFloat(p))

// toFixed() - metoda gleda koliko ce da ima cifara iza zareza
const PI = 3.14159265359
console.log(PI.toFixed(2))

// toPrecision() - metoda gleda koliko uopste ima cifara u nekom broju

console.log(PI.toPrecision(3))


