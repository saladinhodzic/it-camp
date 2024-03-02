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
