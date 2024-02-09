// Array functions, es6
// map, filter

// ES6 or ECMAscript
// let,const, arrow function, array methods(map, filter,reduce..)..

const array = [1, 2, 3, 4, 5, 6];

const array2 = array.map((value, index, niz) => {
  console.log(value, index, niz);
  return `This is number ${value} with index ${index}`;
});

console.log(array2);

const array3 = array.map((value) => {
  return value * 2;
});
console.log(array3);

const array4 = array.map((value) => {
  if (value % 2 === 0) {
    return undefined;
  } else {
    return value;
  }
});

console.log(array4);

const array5 = array.map((value) => {
  if (value % 2 !== 0) {
    return value * value;
  } else {
    return value;
  }
});
console.log(array5);

const niz = "This is array created from string".split(" ");

const niz2 = niz.map((value) => {
  return value.toUpperCase();
});
console.log(niz2);

// Filter - false vrednost sklanja elemente iz niza dok true ostaju elementi

const niz3 = array.filter((value) => {
  if (value % 2 === 0) {
    return false;
  }
  return true;
  // return value % 2 !== 0
});
console.log(niz3);

const niz4 = niz.filter((value) => {
  if (value.includes("a")) {
    return false;
  } else {
    return true;
  }
  //  return !value.includes('a')
});
console.log(niz4);

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
];

const niz5 = mockData.map((value) => {
  return value.name;
});
console.log(niz5);

const niz6 = mockData.map((value) => {
  return `${value.name} ${value.surname}`;
});
console.log(niz6);

const niz7 = mockData.filter((value) => {
  if (value.age > 24) {
    return true;
  }
  return false;
});
console.log(niz7);

const niz8 = mockData.filter((value) => {
  switch (value.name[0].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
  // switch(['a','e','i','o','u']).includes(value.name[0].toLowerCase()){
  //   case true:
  //     return true
  //     default:
  //       return false
  // }
});
console.log(niz8);

const search = "E";

const found = mockData.filter((value) => {
  return value.name.includes("E");
});
console.log(found);
