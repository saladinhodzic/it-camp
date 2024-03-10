// Anonimna funkcija- funkcija bez imena
const funkcija = function () {
  console.log("Hello");
};
console.log(typeof funkcija); //tip- funkcija

//   pozivanje varijable
funkcija();

const objekat = {
  num: 1,
  fun: function () {
    console.log("Hello2");
  },
};

objekat.fun();

function call(param) {
  param();
}
call(function () {
  console.log("cao");
});

setTimeout(function () {
  console.log("timeout");
}, 1000);

// setInterval ce pozivati funkciju svaki put posle 1 sekunde

// setInterval(function () {
//   console.log("timeout");
// }, 1000);

["watch tv", "wash dishes", "draw something"].forEach((value) => {
  if (value === "wash dishes") {
    return;
  }
  console.log(value);
});

const arrowFunction = (parametar) => parametar + 1;

const nesto = () => {
  console.log("hello");
};
const dugme = document.querySelector(".dugme");
dugme.addEventListener("click", nesto);

dugme.removeEventListener("click", nesto);
dugme.addEventListener("click", () => {
  console.log("hello2");
});

console.log(
  [5, -3, 2].filter((value, index) => {
    return value >= 0;
  })
);

console.log(
  [1, 2, 6].map((value, index) => {
    return value * 2;
  })
);
console.log([1, 2, 6].map((value) => value * 2));
