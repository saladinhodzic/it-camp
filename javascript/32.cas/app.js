// function initilaztion, arrow function, callbacks, hoisting

// hoisting and function
// var b;
const funkcija = () => {};

var b = 20;
// b = 20;

// callbacks - funkcija koja se poziva unutar druge funkcije

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const array = [1, 2, 3, 4, 5, 6];

const executeFunctionInArray = (niz, funkcija, pocetnaVrednost) => {
  let result = pocetnaVrednost;
  for (i = 0; i < niz.length; i++) {
    const element = niz[i];
    result = funkcija(result, element);
  }
  return result;
};

console.log(executeFunctionInArray(array, sum, 0));
console.log(executeFunctionInArray(array, sub, 0));
console.log(executeFunctionInArray(array, mult, 1));
console.log(executeFunctionInArray(array, div, 1));

const printThanks = (tekst) => {
  console.log(tekst);
  console.log("Thanks you for using my services. Saladin");
};

const toUpperCase = (tekst, funkcija) => {
  const result = tekst.toUpperCase();
  funkcija(result);
};
toUpperCase("Ovo je bas lep dan", printThanks);

// setTimeout() za pozivanje funkcije posle nekog vremena
setTimeout(() => {
  console.log("This executed after 2s");
}, 2000);

const velikaSlova = (tekst) => tekst.toUpperCase();
const malaSlova = (tekst) => tekst.toLowerCase();
const replaceAllSpaces = (tekst) => tekst.replaceAll(" ", "-");
const addYtoEveryWord = (tekst) => `${tekst.replaceAll(" ", "y ")}y`;
const addYtoEveryWord2 = (tekst) => {
 let result= tekst.split(" ");
 const newResult = []
 for(i=0;i<tekst.length;i++)
};
// const svakaRecVelikoSlovo = (tekst) => {
//   for (i = 0; i < tekst.length; i++) {
//     let recenica=''
//     if (tekst[i - 1] === " ") {
//      recenica+= tekst[i].toUpperCase;
//     } else {
//      recenica+= tekst[i];
//     }
//   }
//   return recenica

// };

const command = (tekst, komanda) => {
  const result = komanda(tekst);
  console.log(result);
};
command("tekst", velikaSlova);
command("tekst", malaSlova);
command("tekst je jako kratak", replaceAllSpaces);
command("tekst je jako kratak", addYtoEveryWord);
command("tekst je jako kratak", addYtoEveryWord2);
// command("tekst je lep", svakaRecVelikoSlovo);
