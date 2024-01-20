// Create a function that, based on a parameter, examines the appearance of the word "who wins".
// If the given string appears more than once, return the position of the first and last occurrence, if it appears once, return the occurrence position, while if the given string does not appear, return the message:
// "We did not find the given string."

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli dati string."

function ispitivanje(string){
const recenica = 'ko osvaja'



for(i  = 0;i<string.length;i++){
    if(!string.includes(recenica)){
        return "Nismo pronasli dati string"
    }else if (string.includes(recenica)){
        return string.match(/ko osvaja/g).length
    }else if(string.includes(recenica)){}
}
}
console.log(ispitivanje("ligu sampiona"))
console.log(ispitivanje("ligu ko osvaja"))
console.log(ispitivanje("ko osvaja ligu ko osvaja"))