// jos  metoda za stringove

// includes() - vraca boolean u zavisnosti od toga da li odredjeni string sadrzi specificnu vrednost
// includes(searchValue, start) start predstvalja poziciju od koje pocinjemo trazenje

const recenica = "Hvala vam"
console.log(recenica.includes('vam'))

// startsWith() = metoda vraca true ako string pocinje argument metodom, a false ne pocinje tim argumentom

// startsWith(searchValue, start) start predstvalja poziciju od koje pocinjemo trazenje
 
console.log(recenica.startsWith('Hvala'))
console.log(recenica.startsWith('Hvala',6))
console.log(recenica.startsWith('v',6))

// endsWith() = metoda vraca true ako string zavrsava argument metodom, a false ne zavrsava tim argumentom


console.log(recenica.endsWith('vam'))
console.log(recenica.endsWith('m'))
console.log(recenica.endsWith('v',6))

// match() - vraca niz objekata sa stringovima koji se podudaraju sa argumentom

const pozdrav = "Dobro jutro Dobar dan Dobro vece"
const match = pozdrav.match(/Dobro/g)
console.log(match)
console.log(match.length)

function brojZnakova(string){
    let brojac = 0
for(i=0;i<string.length;i++){
    if(string[i] === ' '){
        continue
    }
    else if(isNaN(string[i])){
        continue
    }else{
        brojac++
    }
}
return brojac
}
console.log(brojZnakova("Dobili ste 500"))