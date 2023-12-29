// funkcije

function zbir(br1, br2) {
  const zbir = br1 + br2;
  return zbir;
}
console.log(zbir(3, 5));

function kvadrat(a, b) {
  return a * a + b * b;
}

console.log(kvadrat(5, 5));

// const zbirKvadrata = (a, b) => {
//   return a * a + b * b;
// };
// console.log(zbirKvadrata(5, 5));

// Ako je funkcija jednostavna,ima jedan return mozemo izostaviti viticaste zagrade i return keyword

// const zbirKvadrata = (a, b) => a * a + b * b;
// console.log(zbirKvadrata(5, 5));

// 1. nacin
// const naKvadrat = (a, b) => {
//   if (b === undefined) {
//     return a ** 2;
//   } else {
//     return a ** 2 + b ** 2;
//   }
// };
// console.log(naKvadrat(2));

// 2.nacin
const naKvadrat = (a, b = 0) => {
  return a ** 2 + b ** 2;
};
console.log(naKvadrat(2));

const aritmetickaSredina = (a = 1, b = 1, c = 1) => {
  return (a + b + c) / 3;
};

console.log(aritmetickaSredina(1, 3, 5));

const povrsina = (a, b) => {
  if (a === b) {
    return "Povrsina kvadrata:" + a * b;
  } else {
    return "Povrsina pravogaunika:" + a * b;
  }
};
console.log(povrsina(2, 2));
