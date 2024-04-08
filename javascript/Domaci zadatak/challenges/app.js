// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

function something(a, b) {
  const obj = {};
  obj[a] = b;
  return obj;
}

console.log(something("key", "a"));
console.log(something("nesto", "d"));
