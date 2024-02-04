// Create a function that, based on a parameter, examines the appearance of the word "who wins".
// If the given string appears more than once, return the position of the first and last occurrence, if it appears once, return the occurrence position, while if the given string does not appear, return the message:
// "We did not find the given string."

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli dati string."

function ispitivanje(string) {
  const recenica = "ko osvaja";
  recenicaGlobal = /ko osvaja/g;

  const pojavljivanja = string.match(recenicaGlobal);

  if (!string.includes(recenica)) {
    return "Nismo pronasli dati string";
  } else if (pojavljivanja.length > 1) {
    return string.lastIndexOf(recenica);
  } else {
    return string.indexOf(recenica);
  }
}
console.log(ispitivanje("ligu sampiona"));
console.log(ispitivanje("ligu ko osvaja"));
console.log(ispitivanje("ko osvaja ligu ko osvaja"));

function index(recenica) {
  const dveReci = "ko osvaja";

  const brojPonavljanja = recenica.includes(dveReci)
    ? recenica.match(/ko osvaja/g).length
    : 0;
  if (!recenica.includes(dveReci)) {
    return "Nismo pronasli dati string";
  } else if (brojPonavljanja > 1) {
    return `Prvo pojavljivanje ${recenica.indexOf(dveReci)}
        Zadnje pojavljivanje ${recenica.lastIndexOf(dveReci)}`;
  } else {
    return recenica.indexOf(dveReci);
  }
}

console.log(index("ligu sampiona"));
console.log(index("ligu ko osvaja"));
console.log(index("ko osvaja ligu ko osvaja"));

// Write a JavaScript function to convert a string into abbreviated form.

function skraceno(string) {
  let skracenString = "";
  for (i = 0; i < string.length; i++) {
    if (string[i - 1] === " ") {
      skracenString += string[i] + ".";
      break;
    } else {
      skracenString += string[i];
    }
  }
  return skracenString;
}
console.log(skraceno("Saladin Hodzic"));
console.log(skraceno("Ajsa Maljevac"));

// Write a JavaScript function to parameterize a string.

function izmenjena(string) {
  let recenica = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      recenica += "-";
    } else {
      recenica += string[i].toLowerCase();
    }
  }
  return recenica;
}

console.log(izmenjena("Ajsa voli prsutu"));

const repeat = (string, n) => {};

console.log(repeat("Ajsica mala", 3));

// Write a JavaScript function to uncommelize a string

function nesto(string, znak) {
  let novaRecenica = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      novaRecenica += znak;
    } else {
      novaRecenica += string[i];
    }
  }
  return novaRecenica;
}
console.log(nesto("Ajsa jede prsutu", "-"));
console.log(nesto("Ajsa jede prsutu", "_"));

// Write a JavaScript function to truncate a string to a certain number of words.

function truncate(string, n) {
  let recenica = "";
  let brojac = 0;
  for (i = 0; brojac < n; i++) {
    if (string[i] === " ") {
      brojac++;
      recenica += string[i];
    } else {
      recenica += string[i];
    }
  }
  return recenica;
}

console.log(truncate("Ajsa voli prsutu i voli da gleda koreanske filmove", 4));
