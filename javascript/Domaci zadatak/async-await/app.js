// Merge objects

const prviObjekat = { a: 1, b: 2, c: 3, d: 5 };
const drugiObjekat = { a: 3, e: 6, f: 9, d: 7 };

function mergeObjects(prvi, drugi) {
  return { ...prvi, ...drugi };
}
console.log(mergeObjects(prviObjekat, drugiObjekat));

// fetch data

fetch("https://api.quotable.io/quotes")
  .then((result) => {
    // throw new Error("error brate");
    return result.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

const data = async () => {
  try {
    const rezultat = await fetch("https://api.quotable.io/quotes");
    const json = await rezultat.json();

    duzinaCitata(json);
    console.log(najduziCitat(json));
    console.log(najkraciCitat(json));
  } catch (greska) {
    console.log(greska);
  }
};
data();

// ispisi duzine citata iz podataka
function duzinaCitata(data) {
  const rezultati = data.results;
  for (i = 0; i < rezultati.length; i++) {
    const quote = rezultati[i].content;
    console.log(quote.length);
  }
}
// najduzi citat
function najduziCitat(data) {
  let duziCitat;
  const rezultati = data.results;
  for (i = 0; i < data.results.length; i++) {
    if (!duziCitat) {
      duziCitat = rezultati[i];
    }
    if (duziCitat) {
      if (duziCitat.content.length < rezultati[i].content.length) {
        duziCitat = rezultati[i];
      }
    }
    // console.log(rezultati[i].content.length);
  }
  return duziCitat.content.length;
}

// najkraci citat

function najkraciCitat(data) {
  let najkraciCitat;
  data.results.forEach((element) => {
    if (!najkraciCitat) {
      najkraciCitat = element.content;
    } else if (najkraciCitat.length > element.content.length) {
      najkraciCitat = element.content;
    }
  });
  return najkraciCitat.length;
}
