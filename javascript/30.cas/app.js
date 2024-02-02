// Objects

// creating objects,accessing values in objects,adding all types as values
// cloning objects, transforming objects into arrays

// creating objects
const obj = { name: 10 };
const obj1 = new Object();

const obj2 = {
  key1: "This is a value 1",
  key2: false,
  key3: 12,
  key4: undefined,
  key5: null,
  key6: function () {},
  key7: {},
};

// accessing values in objects
console.log(obj2);
// preko tacke pristupamo property-ima objekta
// console.log(obj2.key1);
// console.log(obj2.key2);
// console.log(obj2.key3);
// console.log(obj2.key4);
// console.log(obj2.key5);
// console.log(obj2.key6);
// console.log(obj2.key7);

// Mozemo pristupiti i preko []
console.log(obj2[key1]);

// function sum(a, b, o) {
//   a = 20;
//   b = 30;
//   o.name = 20;
//   console.log(a, b, o);
// }

// const x = 2;
// const y = 3;

// sum(x, y, obj);
// console.log(x, y, obj);

obj2.key1 = "This is changed";
console.log(obj2);

// "".includes();
// Pristupanje funkciji u objektu
obj2.key6();

// deleting keys

// delete obj2.key1;
console.log(obj2);

// cloning objects

const obj2Clone = { ...obj2 };
// console.log(obj2Clone);

delete obj2Clone.key1;
console.log(obj2Clone);

// structuredClone() ne moze klonirati funkcije
const obj2Clone2 = structuredClone(obj2);

// transforming objects into arrays

const object2ArrayKeys = Object.keys(obj2);
// Kljucevi su po difoltu stringovi
console.log(object2ArrayKeys);
const object2ArrayValues = Object.values(obj2);
console.log(object2ArrayValues);
