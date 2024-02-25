function sumTwo(nums, target) {
  const niz = [];
  const provera = [];
  for (i = 0; i < nums.length; i++) {
    const broj = target - nums[i];
    if (provera.includes(broj) && broj + nums[i] === target) {
      niz.push(nums.indexOf(broj));
      niz.push(nums.indexOf(nums[i]));
    } else {
      provera.push(nums[i]);
    }
  }
  return niz;
}
console.log(sumTwo([1, 2, 3, 4, 5], 8));
