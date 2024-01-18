// Domaci zadaci:
// 1.	Za uneti string A, treba izdvojiti podstring B, koji počinje od unete pozicije N i ima M znakova. Npr. za string 'Pera ima devojku', N=6 i M=7, dobija se B='ima dev'.

// 2.	Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

function nesto(string,N,M){
    const podstring = string.substr(N,M)

    return podstring
}

console.log(nesto("pera ima devojku",6,7))

const redosled = (string)=>{
    // return string.replace(0,1)
    let novaRecenica = ''
    for(i=0;i<string.length;i+=2){
novaRecenica+= string[i+1]+string[i]
    }
    return novaRecenica
}
console.log(redosled("pera ima devojku"))