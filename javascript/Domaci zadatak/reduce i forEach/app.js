// Exercise 1: Product of Even Numbers
// Calculate the product of all even numbers in an array.

const brojevi = [1, 2, 3, 4, 5, 6];

const zbirParnih = brojevi.reduce((result, value) => {
  if (value % 2 === 0) {
    result += value;
  }
  return result;
}, 0);
console.log(zbirParnih);

// Exercise 2: Concatenate Strings
// Concatenate all strings in an array into a single string.

const stringovi = ["Mama", " ", "je", " ", "lepa"];

const spojenaRecenica = stringovi.reduce((result, value) => {
  result += value;
  return result;
}, "");
console.log(spojenaRecenica);

// Exercise 3: Find Average
// Calculate the average of an array of numbers.

const numbers = [10, 5, 8, 20, 3];

// const aritmetickaVrednost = numbers.reduce((result, value, index, array) => {
//   result += value;
//   return index === array.length - 1 ? result / array.length : result;
// }, 0);
const aritmetickaVrednost =
  numbers.reduce((result, value) => {
    result += value;
    return result;
  }, 0) / numbers.length;
console.log(aritmetickaVrednost);

// Exercise 4: Count Unique Values
// Count the number of unique values in an array.

const vrednosti = [1, 2, 3, 2, 4, 5, 4, 6];

const unikatneVrednosti = vrednosti.reduce((result, value) => {
  if (!result.includes(value)) {
    result.push(value);
  }
  return result;
}, []).length;
console.log(unikatneVrednosti);

const nekiNiz = [1, 2, 3, 4, 5, 6];
const drugiNiz = nekiNiz.reduce((result, value) => {
  if (value % 2 === 0) {
    result.push(value);
  }
  return result;
}, []);
console.log(drugiNiz);

const naKvadrat = nekiNiz.reduce((result, value) => {
  result.push(value ** 2);
  return result;
}, []);
console.log(naKvadrat);

// napraviti funkciju koja vraca zadnju vrednost iz niza

const nums = [10, 20, 30];

function getLastValue(niz) {
  return niz[niz.length - 1];
}
console.log(getLastValue(nums));

// napraviti funkciju koja vraca niz gde su zadnja i prva vrednost mesta zamenjena
function arraySwap(niz) {
  const getLastValue = niz.length - 1;
  const firstIndex = niz[0];
  const lastIndex = niz[getLastValue];

  niz[0] = lastIndex;
  niz[getLastValue] = firstIndex;
  return niz;
}
console.log(arraySwap(nums));

// napraviti petlju koja uzima neki niz brojeva i vraca novi niz sa brojevima povecanim za 1

const plusJedan = [];
for (i = 0; i < nums.length; i++) {
  plusJedan.push(nums[i] + 1);
}
console.log(plusJedan);

// napraviti funkciju koja uzima neki niz brojeva i vraca novi niz sa brojevima povecanim za 1

function addOne(niz) {
  for (i = 0; i < niz.length; i++) {
    niz[i]++;
  }
  return niz;
}
console.log(addOne(plusJedan));

// napraviti funkciju koju kao parametre uzima neki niz i n broj i vraca niz sa brojevima povecanim za n broj

function addNesto(niz, broj) {
  const result = niz.map((value) => {
    return value + broj;
  });
  return result;
}
console.log(addNesto(nums, 5));

// napraviti funkciju koja uzima dva niza kao parametre i vraca njihov zbir

const nums2 = [1, 2, 3];

function addArrays(niz1, niz2) {
  let result = [];
  for (i = 0; i < niz1.length; i++) {
    result.push(niz1[i] + niz2[i]);
  }
  return result;
}
console.log(addArrays(nums, nums2));

// napraviti funkciju koja broji pozitivne brojeve u nekom nizu

// function countPositive(niz) {
//   let brojac = 0;
//   for (i = 0; i < niz.length; i++) {
//     if (niz[i] > 0) {
//       brojac++;
//     }
//   }
//   return brojac;
// }
function countPositive(niz) {
  const result = niz.filter((value) => {
    if (value > 0) {
      return result;
    }
  });
}
console.log(countPositive([2, -2, 5, 16, -6]));
