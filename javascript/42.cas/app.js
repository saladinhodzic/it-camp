// DOM manipulation

// napraviti dva inputa za brojeve i dugme koje kad se klikne izracuna se njihov zbir i prikaze u p elementu ispod ovih inputa

const zbir = () => {
  const num1 = document.getElementById("prviBroj");
  const num2 = document.getElementById("drugiBroj");
  const p = document.getElementById("result");

  const sum = +num1.value + Number(num2.value);

  p.textContent = sum;
};
const sub = () => {
  const num1 = document.getElementById("prviBroj");
  const num2 = document.getElementById("drugiBroj");
  const p = document.getElementById("result");

  const sum = +num1.value - Number(num2.value);

  p.textContent = sum;
};
const mult = () => {
  const num1 = document.getElementById("prviBroj");
  const num2 = document.getElementById("drugiBroj");
  const p = document.getElementById("result");

  const sum = +num1.value * Number(num2.value);

  p.textContent = sum;
};
const div = () => {
  const num1 = document.getElementById("prviBroj");
  const num2 = document.getElementById("drugiBroj");
  const p = document.getElementById("result");
  let sum;
  if (num1.value == 0 || num2.value == 0) {
    sum = "deljenje nije moguce";
  } else {
    sum = +num1.value / Number(num2.value);
  }

  p.textContent = sum;
};

// dodati jos 3 dugmeta za oduzimanje, deljenje i mnozenje

// const calc = (sign) => {
//   const num1 = document.getElementById("prviBroj");
//   const num2 = document.getElementById("drugiBroj");
//   const p = document.getElementById("result");

//   let sum;
//   switch (sign) {
//     case "+":
//       sum = num1.value + num2.value;
//       break;
//     case "-":
//       sum = num1.value - num2.value;
//       break;
//     case "*":
//       sum = num1.value * num2.value;
//       break;
//     case "/":
//       sum = num1.value / num2.value;
//       break;
//     default:
//       sum = "not possible";
//   }
//   p.textContent = sum;
// };

// umesto da pozivate funkcije direktno u htmlu pravite event listener

const sumButton = document.getElementById("zbir");
const subButton = document.getElementById("oduzimanje");
const multButton = document.getElementById("proizvod");
const divButton = document.getElementById("kolicnik");

sumButton.addEventListener("click", (e) => {
  zbir();
});
subButton.addEventListener("click", (e) => {
  sub();
});
divButton.addEventListener("click", (e) => {
  div();
});
multButton.addEventListener("click", (e) => {
  mult();
});

// input element na njega event listener za 'input' event, u callbacku za event listener prikazati na koznoli vrednost inputa

// const tekstInput = document.getElementById("tekst");
const tekstInput = document.querySelector("#tekst");

tekstInput.addEventListener("input", (e) => {
  //   console.log(tekstInput.value);
  console.log(e.target.value);
});

// napraviti skriptu koja korisnika sa prompt funkcijom da unese svoje godine i onda odgovara na ekranu u nekom p elementu sa tim da li je on u penziji ili tinejdzer ili obicni covek

// const user = prompt("Vase godine:");
// const godine = document.getElementById("godine");
// let result;
// if (user < 18) {
//   result = "tinejdzer";
// } else if (user > 18 || user < 65) {
//   result = "normalan insan";
// } else {
//   result = "penzioner";
// }
// godine.textContent = result;

// ovaj kod u funkciju onclick

const pokreni = document.getElementById("pokreni");
pokreni.addEventListener("click", (e) => {
  const paragraf = document.getElementById("godine");
  const userInput = prompt("Unesite vase godine:");
  if (userInput < 18) {
    paragraf.textContent = "Tinejdzer";
  } else if (userInput > 65) {
    paragraf.textContent = "Starac";
  } else {
    paragraf.textContent = "Osoba";
  }
});
