// mozemo i pretvoriti number u string
String(25);
// cudno ponasanje stringova - ako moze string da se pretvori u broj js ce to i uraditi
console.log("25" - 5);
// window object predstavlja ceo browser
//   ne moramo pisati window ispred jer js automatski dodaje to u pozadini
window;
window.console.log("window");
//   window.alert();
function onEnter(nesto) {
  if (event.key === "Enter") {
    totalCost();
  }
}
function totalCost() {
  const inputNumber = document.querySelector(".js-input");
  // .value da bismo pristupili vrednosti inputa sto korisnik unese
  let cost = Number(inputNumber.value);

  document.querySelector(".js-cost").innerHTML = "";
  document.querySelector(".error").innerHTML = "";

  if (cost < 0) {
    document.querySelector(".error").innerHTML = "Niste uneli vazecu vrenost";
    return;
  }

  if (cost < 40) {
    cost += 10;
  }
  document.querySelector(".js-cost").innerHTML = `$${cost}`;
}
