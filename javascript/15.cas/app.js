const recenica = prompt("Uneti recenicu");
let brojac = 0;
for (let i = 0; i < recenica.length; i++) {
  if (isNaN(recenica[i])) {
    continue;
  } else {
    brojac++;
  }
}
console.log(brojac);

const recenica2 = "napisati ovo ali bez razmaka";
let recenica3 = "";

// for (let i = 0; i < recenica2.length; i++) {
//   if (recenica2[i] === " ") {
//     continue;
//   } else {
//     recenica3 += recenica2[i];
//   }
// }
// console.log(recenica3);
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] !== " ") {
    recenica3 += recenica2[i];
  }
}
console.log(recenica3);

const recenica4 = "Danas je lep dan";
let recenica5 = "";

for (let i = 0; i < recenica4.length; i++) {
  if (recenica4[i] === "a" && recenica4[i + 1] === "n") {
    recenica5 += "d";
  } else if (recenica4[i] === "a") {
    recenica5 += "t";
  } else {
    recenica5 += recenica4[i];
  }
}
console.log(recenica5);
