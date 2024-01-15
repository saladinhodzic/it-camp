const funkcija = (string)=> string.toLowerCase()
console.log(funkcija("DAJSBfasf"))

const razmak=(string)=>{
    let lastIndex=string.lastIndexOf(' ')
    if(lastIndex === -1){
        return "Nema razmaka"
    }else{
        return lastIndex
    }
} 
console.log(razmak("pera ima devojku"))

function duzinaReci (string){
return string.indexOf(' ')

}
console.log(duzinaReci("Pera ima devojku"))

function nesto(string){
    let prvaRec = string.slice(0,string.indexOf(' '))
    let zadnjaRec = string.slice(string.lastIndexOf(' '))

    return prvaRec + zadnjaRec
    
}

console.log(nesto("Pera ima devojku"))
