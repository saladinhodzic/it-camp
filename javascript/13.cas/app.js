const a = +prompt("Unesite duzinu");
const b = +prompt("Unesite sirinu");
const r = +prompt("Unesite rastojanje od terena");

if (a < 90 || a > 120) {
  console.log("niste uneli trazenu vrednost");
} else if (b < 45 || b > 90) {
  console.log("niste uneli trazenu vrednost");
} else if (r < 2 || r > 10) {
  console.log("niste uneli trazenu vrednost");
} else {
  const duzinaOgrade = a + r * 2;
  const sirinaOgrade = b + r * 2;
  console.log(2 * (duzinaOgrade + sirinaOgrade));
}
