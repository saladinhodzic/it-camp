const stringovi = ["apple", "something", "nesto", "search"];
const stringovi2 = ["apple", "search", "nesto", "search"];
const stringovi3 = ["apple", "something", "nesto", "hi"];
function find(niz) {
  const result = niz.findIndex((value) => {
    if (value === "search") {
      return true;
    }
    return false;
  });
  return result;
}

console.log(find(stringovi));
console.log(find(stringovi2));

function findIndex(niz, word) {
  for (i = 0; i < niz.length; i++) {
    if (niz[i] === word) {
      return niz.indexOf(word);
    } else if (!niz.includes(word)) {
      return -1;
    }
  }
}
console.log(findIndex(stringovi, "search"));
console.log(findIndex(stringovi3, "search"));

function removeEgg(food) {
  const result = [];
  let removedEgg = 0;
  for (i = food.length - 1; i >= 0; i--) {
    if (food[i] === "egg" && removedEgg < 2) {
      removedEgg++;
      continue;
    } else {
      result.push(food[i]);
    }
  }
  return result.reverse();
}
console.log(removeEgg(["egg", "chicken", "hlrb", "brasnou", "egg", "egg"]));
