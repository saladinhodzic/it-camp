// Array functions, es6
// foreach, reduce

const array = [1, 2, 3, 4, 5, 6];
const array2 = [];
array.forEach((value, index) => {
  array2.push({ element: value, indeks: index });
});
console.log(array2);

// koristeci forEach console logujete sve elemente niza

array.forEach((value) => {
  console.log(value);
});

// koristeci forEach obrisite sve elemente niza

// array.forEach(() => {
//   array.splice(0);
// });
// console.log(array);

// reduce

const result = array.reduce((result, value, index, array) => {
  console.log(result, value);
  return result + value;
}, 0);

const toObject = array.reduce((result, value, index) => {
  result[index] = value;
  return result;
}, {});

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
  {
    name: "Enver",
    surname: "Kostic",
    age: 45,
    address: "456 Oak St, Townsville",
  },
];

const userArray = mockData
  .filter((item) => item.age > 24)
  .map((item) => item.name);

const userArray2 = mockData.reduce((result, value) => {
  if (value.age > 24) {
    result.push(value.name);
  }
  return result;
}, []);

const adresa = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result = value.address;
  }
  return result;
}, "");
console.log(adresa);

const arrayAdresa = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);
console.log(arrayAdresa);
