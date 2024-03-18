const cells = document.querySelectorAll(".cell");
const texts = document.querySelectorAll(".cell p");
cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick() {
  texts.forEach((text) => {});
}
