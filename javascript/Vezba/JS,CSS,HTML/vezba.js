const dugme = document
  .querySelector(".js-button")
  .classList.contains("js-button");
console.log(dugme);
// classList.contains() nam provera imamo li takvu klasu u html elementu
// document.querySelector(".is-toggled").classList.remove("is-toggled");
turnEverythingOff();
function turnButtonOn(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    turnOffButton();

    button.classList.add("is-toggled");
  } else if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  }
}

function turnOffButton() {
  const isTherePrevious = document.querySelector(".is-toggled");
  if (isTherePrevious) {
    isTherePrevious.classList.remove("is-toggled");
  }
}

function turnEverythingOff() {
  document.querySelector(".gaming").classList.remove("is-toggled");
  document.querySelector(".music").classList.remove("is-toggled");
  document.querySelector(".tech").classList.remove("is-toggled");
}
