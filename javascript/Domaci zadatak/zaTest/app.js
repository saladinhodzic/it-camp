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

const pushTownsville = [];

// mockData.forEach((value) => {
//   if (value["address"].includes("Townsville")) {
//     pushTownsville.push(value);
//   } else {
//     return;
//   }
// });

// console.log(pushTownsville);

// const nesto = mockData.reduce((accumulator, value) => {
//   if (value["address"].includes("Townsville")) {
//     accumulator.push(value);
//   }
//   return accumulator;
// }, []);
// console.log(nesto);

// const nekiNiz = [1, 2, 3, 4, 5];

// const provera = nekiNiz.reduce((acc, value) => {
//   if (value === 2) {
//     acc.push(value);
//   }
//   return acc;
// }, []);

// console.log(provera);

// Fetching

const url = "https://api.quotable.io/quotes";
// fetch(url)
//   .then((s) => s.json())
//   .then((data) => console.log(data));

const quotes = async () => {
  try {
    const get = await fetch(url);
    const data = await get.json();
    // console.log(data["results"]);
    // console.log(najduziCitat(data["results"]));
    return najduziCitat(data["results"]);
  } catch (error) {
    console.log(error);
  }
};
quotes().then((data) => console.log(data));
// console.log(quotes());
// quotes().then((data) => console.log(data));

// console.log(quotes().then((data) => data));
// console.log(podaci);
// najduziCitat(podaci);
// netacno

// const najduziCitat = quotes()
//   .then((data) => {
//     data.forEach((value) => {
//       const quote = value["content"];
//       let najduziCitat;
//       if (!najduziCitat) {
//         najduziCitat = quote;
//       } else if (najduziCitat.length < quote.length) {
//         najduziCitat = quote;
//       }
//       return najduziCitat;
//     });
//   })
//   .then((result) => {
//     return result;
//   });

// console.log(najduziCitat);

function najduziCitat(data) {
  let najduziCitat;
  data.forEach((value) => {
    const quote = value["content"];
    if (!najduziCitat) {
      najduziCitat = quote;
    } else if (najduziCitat.length < quote.length) {
      najduziCitat = quote;
    }
  });
  return najduziCitat;
}
