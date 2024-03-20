// Objects

const object = {
  nesto: "yes",
  neko: "biloSta",
};

const neko = "neko";

console.log(object.nesto);
console.log(object[neko]);
console.log(object["nesto"]);
console.log(object["neko"]);

// niz objekata

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

// check if any of the people can access only after 25

// const check = mockData.some((value) => {
//   if (value["age"] > 25) {
//     return true;
//   } else {
//     return false;
//   }
// });
const check = mockData.some((value) => {
  return value["age"] > 25;
});

console.log(check);

// return object person from Townsville

const checkTownsville = mockData.filter((value) => {
  if (value["address"].includes("Townsville")) {
    return true;
  }
});

console.log(checkTownsville);
