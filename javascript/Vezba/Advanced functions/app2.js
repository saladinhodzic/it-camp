const add = function () {
  console.log(2 + 3);
};
// add();
// add();

function runTwice(fn) {
  fn();
  fn();
}
runTwice(add);

const dugme = document.getElementById("dugme");
function clickedButton() {
  dugme.textContent = "Loading...";
  setTimeout(() => {
    dugme.textContent = "Finished!";
  }, 1000);
}

dugme.addEventListener("click", () => {
  clickedButton();
});

const cartButton = document.getElementById("cart");

let timeoutId;
function addedToCart() {
  const paragraf = document.getElementById("tekst");
  paragraf.textContent = "Added";

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    paragraf.textContent = "";
  }, 2000);
}

cartButton.addEventListener("click", () => {
  addedToCart();
});

let messages = 2;
const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");
addButton.addEventListener("click", () => {
  messages++;
});
removeButton.addEventListener("click", () => {
  messages--;
});

setInterval(() => {
  if (document.title === "App") {
    if (messages === 0) {
      document.title = "App";
    } else if (messages > 0) {
      document.title = `(${messages})new messages`;
    }
  } else {
    document.title = "App";
  }
}, 1000);
