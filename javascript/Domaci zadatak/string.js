    // Domaci zadaci:
// 1. Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string.
// Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

// 2. Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore.
// Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.

// 3. Spajanje stringova
// Napiši funkciju koja prima dva stringa kao argumenta i vraća njihovu konkatenaciju.
// Na primer, za ulazne vrednosti "Hello" i "World!", funkcija treba da vrati "HelloWorld!".

function zamenaReci(string,rec){
    return string.replace(rec,"#")
}
console.log(zamenaReci("Danas je lep dan lep", /lep/g))


const brojanjeKaraktera = (string)=>{
const novaRecenica = string.replace(/ /g,'')
return novaRecenica.length
    
}
console.log(brojanjeKaraktera("Danas je lep dan"))


function spajanje (str1 , str2){
    return str1.concat(str2)
}

console.log(spajanje("hello","world"))