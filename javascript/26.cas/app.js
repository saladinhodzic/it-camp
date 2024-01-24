// NUMBERS

const x  = 0.1
const y = 0.2
console.log(x+y)

// Racunanje realnih brojeva nije uvek tacno u Javascriptu

console.log(5+5)
console.log(5+"5")
console.log(5/"5")
console.log(5-"5a")

console.log(5/0)//infinityt

// Hexadecimalni brojevi u js-u se interpretiraju sa prefiksom 0x

// const white = 0x#fff

// Brojevi takodje mogu biti definisani preko new keyword i oni su tipa objekt

let z = new Number(0.3)
let w = 0.3
console.log(z)
console.log(z===w)

function nesto(email){
    const index_= email.indexOf('_')
    const indexDot= email.indexOf('.')
    const hashtag= email.indexOf('@')
    const cutStart = index_ === -1 ? indexDot : index_
    const cut = email.slice(cutStart,hashtag)

return email.replace(cut,'...')
}
console.log(nesto("saladin_hodzic@gmail.com"))

// w3.resors