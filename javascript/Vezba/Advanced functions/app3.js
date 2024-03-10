const multiply = (a, b) => a * b;

function countPositive(nums) {
  let length = 0;
  nums.forEach((value) => {
    if (value > 0) {
      length++;
    }
  });
  return length;
}
console.log(countPositive([1, -3, -5, 6, 32]));

function addNum(niz, broj) {
  return niz.map((value) => value + broj);
}
console.log(addNum([1, 2, 3], 3));

function removeEgg(foods) {
  let count = 0;
  return foods.filter((value) => {
    if (value == "egg" && count < 2) {
      count++;
      return false;
    } else {
      return true;
    }
  });
}
console.log(removeEgg(["egg", "potato", "tomato", "egg", "biscuit", "egg"]));
