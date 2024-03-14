// const plusFive = plusFunction(5);

// function plusFunction(param) {
//   return function (broj) {
//     return param + broj;
//   };
// }

// vratiti niz pareva koji izmedju sebe imaju samo jedan broj

function differenceTwo(niz) {
  const noviNiz = [];
  for (i = 0; i < niz.length; i++) {
    const element = niz[i];
    const tajBroj = element + 2;
    const drugiBroj = element - 2;
    if (niz.includes(tajBroj)) {
      noviNiz.push([element, tajBroj]);
    } else if (niz.includes(drugiBroj)) {
      noviNiz.push([element, drugiBroj]);
    } else {
      continue;
    }
  }
  return noviNiz;
}
console.log(differenceTwo([1, 3, 5, 7, 9]));
