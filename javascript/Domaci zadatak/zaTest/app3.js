// Niz objekata

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

// niz imena koji su stariji od 24

// const nizImena = mockData
//   .filter((value) => value.age > 24)
//   .map((value) => value.name);

// console.log(nizImena);

// Adrese korisnika iz townsvila

// const adreseKorisnika = mockData
//   .filter((value) => value.address.includes("Townsville"))
//   .map((value) => value.name);

// const addressReduce = mockData.reduce((accumulator, value) => {
//   if (value.address.includes("Townsville")) {
//     accumulator.push(value);
//   }
//   return accumulator;
// }, []);

// console.log(addressReduce);

// Promise

// 1. Basic Promise Creation: Create a Promise that resolves after a specified duration.

// const promise = new Promise((resolve, reject) => {
//   const a = 1 + 1;
//   setTimeout(() => {
//     if (a === 3) {
//       resolve("tacno");
//     } else {
//       reject("netacno");
//     }
//   }, 1000);
// });

// // console.log(promise);

// promise
//   .then((tacno) => {
//     console.log(tacno);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async/await

const async1 = async () => {
  const a = 1 + 3;
  setTimeout(() => {
    if (a == 3) {
      console.log("tacno");
    } else {
      console.log("netacno");
    }
  }, 1000);
};

async1();

// Fetch()

// fetch("https://api.quotable.io/quotes")
//   .then((data) => {
//     return data.json();
//     // console.log(data);
//   })
//   .then((jos) => {
//     // console.log(jos);
//     return jos.results;
//   })
//   .then((results) => {
//     console.log(results);
//   });

// 2. Fetch najduzi quote

const quotes = async () => {
  try {
    const getQuotes = await fetch("https://api.quotable.io/quotes");
    const getJson = await getQuotes.json();
    // console.log(getJson);
    // return getJson.results;
    return najduziQuote(getJson.results);
  } catch (error) {
    console.log(error);
  }
};

// quotes().then((result) => {
//   console.log(result);
// });

// function najduziQuote(data) {
//   let najduziQuote;
//   data.forEach((value) => {
//     if (!najduziQuote) {
//       najduziQuote = value.content;
//     } else if (value.content.length > najduziQuote.length) {
//       najduziQuote = value.content;
//     }
//   });
//   return najduziQuote;
// }

// 3. Fetch Data(Quotes) from API and display then on a page

//

const contentDiv = document.querySelector(".content");

const quotes1 = async () => {
  try {
    const getQuotes = await fetch("https://api.quotable.io/quotes?}");
    const getJson = await getQuotes.json();
    return getJson.results;
  } catch (error) {
    console.log(error);
  }
};

quotes1().then((data) => {
  generateCard(data);
});

function generateCard(data) {
  let string = "";
  data.forEach((element) => {
    string += `<div class="card">
    <p class="quote">${element.content}</p>
    <p class="author">${element.author}</p>
  </div> `;
  });
  contentDiv.innerHTML = string;
}
