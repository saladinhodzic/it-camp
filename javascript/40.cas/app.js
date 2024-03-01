// fetching data & query params

// 1. fetch api data koristeci GET metodu

fetch("https://api.quotable.io/quotes/random")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // console.log(data);
    console.log(data[0].author);
    console.log(data[0].content);
  })
  .catch((error) => {
    console.log(error);
  });

//   console.log autora i content iz jsona koga dobijete sa apija

// uradite sve sto u prethodnom zadatku ali koristeci async await, try catch

const nesto = async () => {
  try {
    const rezultat = await fetch("https://api.quotable.io/quotes/random");
    const data = await rezultat.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
nesto();

// asinhrona funkcija koja fetch podatke sa apija, nakon toga console.log

const funkcija = async () => {
  try {
    const result = await fetch("https://api.quotable.io/quotes");
    const data = await result.json();
    console.log(podaci(data));
  } catch (error) {
    console.log(error);
  }
};

funkcija();

// funkcija prima podatke sa podacima vraca objekat gde je quote najduzi

function podaci(data) {
  let quote;
  data.results.forEach((element) => {
    if (!quote) {
      quote = element;
    }
    if (quote) {
      if (quote.content.length < element.content.length) {
        quote = element;
      }
    }
  });
  return quote;
}
