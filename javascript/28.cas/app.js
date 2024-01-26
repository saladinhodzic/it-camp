// Math object ima mnogo metoda za rad sa brojevima

// Pored metoda postoje matematicke konstante:

console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)

// Metode:
// Postoje 4 metode za zaokruzivanje brojeva u JS

// Math.round(x)

const x = 2.51

console.log(Math.round(x))

// Math.ceil(x)

const a = 2.3

console.log(Math.ceil(a))

// Math.floor(x)

const b = 2.86

console.log(Math.floor(b))

// Math.trunc(x)

const c = 2.31

console.log(Math.trunc(c))

// Math.sign() metoda vraca -1 ili 0 ili 1

console.log(Math.sign(-112))

// Math.pow(x,y) vraca vrednost x**y

console.log(Math.pow(2,3))

// Math.sqrt(x) metoda vraca kvadratni koren broja x

console.log(Math.sqrt(16))

// Math.abs(x) vraca apsolutnu vrednost broja x

console.log(Math.abs(-5))

// Math.min(x) i Math.max(x) vraca najmanju i najvecu vrednost iz poslate liste

console.log(Math.min(2,-90,100,35))
console.log(Math.max(2,-90,100,35))

// Math.random() vraca random broj izmedju 0 i 1

console.log(Math.ceil(Math.random() * 5))

console.log(Math.ceil(Math.random() * 50 + 50))

// split() metoda pretvara string u niz

console.log("Kanita je kasnila,sto je inace njeno drugo ime".split())
console.log("Kanita je kasnila,sto je inace njeno drugo ime".split(","))


function decimals(broj,decimala){
    return broj.toFixed(decimala)
}

console.log(decimals(2.124135324, 2))

function sekunde(sekunde){
    let h = Math.floor(sekunde/3600)
    let min = Math.floor((sekunde - (h*3600))/60)
    let s = Math.floor(sekunde - (h*3600 + min*60))
    
    return  `${h}h , ${min}min , ${s}s `
}


console.log(sekunde(3770))


