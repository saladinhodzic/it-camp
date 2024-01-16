// Domaci zadaci:
// 1.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

// 2.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

const funkcija = (string , N)=>{
const recenica = string.substr(0,N)
if(N > string.length){
    return recenica
}else{
    return recenica
}
}

console.log(funkcija("Pera ima devojku", 4))

function funkcija2 (string,N){
    const recenica = string.slice(-N)
    return recenica
}

console.log(funkcija2("Pera ima devojku",7))