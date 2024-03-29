// Domaci:
// 1.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 2.	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 3.	Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function prebrojati(string){
    let brojac = 0
    for(i=0;i<string.length;i++){
        // if(string[i] !== string[i].toUpperCase() && string[i] !== ' ')
        if(string[i]>="a"&& string[i]<="z")
        {
            brojac++
        }
    }
    return brojac
}

console.log(prebrojati('Danas je lep dan'))

const ispitati = (string)=>{
let brojacM=0
let brojacV = 0
for(i=0;i<string.length;i++){
    if(string[i]===string[i].toUpperCase()){
        brojacV++
    }else{
        brojacM++
    }
}
if(brojacM>brojacV){
    return 'Ima vise malih slova u unetom stringu'
}else{
    return 'Ima vise velikih slova u unetom stringu'
}

}

console.log(ispitati("Danas je lep dan"))
console.log(ispitati("DANAS JE LEP dan"))


function palindrom(string){
    let reversedRecenica = ''
    for(let i = string.length-1;i>=0;i--){
      reversedRecenica+=string[i]
    }
    if(reversedRecenica === string){
        return "Uneti string je palindrom"
    }else{
        return "Uneti string nije palindrom"
    }
}
console.log(palindrom("anavolimilovana"))
console.log(palindrom("samsf"))
