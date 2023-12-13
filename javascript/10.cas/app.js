const prviBroj = +prompt("Unesite prvi broj");
const drugiBroj = +prompt("Unesite drugi broj");

if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Nije uneta dobra vrednost");
} else if (prviBroj === drugiBroj) {
  console.log("Brojevi su isti");
} else if (prviBroj > drugiBroj) {
  for (let i = drugiBroj; i <= prviBroj; i++) {
    console.log(i);
  }
} else {
  for (let i = prviBroj; i <= drugiBroj; i++) console.log(i);
}

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Danas je radni dan");
    break;
  default:
    console.log("Ugodno provedite vikend");
}
let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir = zbir + i;
}
console.log(zbir);

const n = +prompt("Unesite broj");
let saberi = 0;
let brBr = 0;
for (let i = 1; i <= n; i++) {
  if (i % 5 === 0) {
    saberi += i;
    brBr += 1;
  }
}
console.log(brBr);
console.log(saberi);
