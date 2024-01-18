function trocifren(broj){
const nasBroj =broj.toString()

let zbir = 0

for(i=0;i<nasBroj.length;i++){
    zbir+= Number(nasBroj[i])
}
return zbir
}
console.log(trocifren(234))

const nesto = (string , slovo)=>{
    let novaRecenica = ""

    for(let i = 0;i<string.length;i++){
        if(string[i] === slovo){
            continue
        }else{
            novaRecenica+=string[i]
        }
    }
    return novaRecenica
}
console.log(nesto("madagskar","a"))