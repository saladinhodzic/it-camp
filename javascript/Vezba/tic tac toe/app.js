const cells = document.querySelectorAll(".cell");
const resultScreen = "result";
const resultScreenJS = document.querySelector(".resultJs");
const classX = "x";
const classCircle = "circle";
const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;
cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? classCircle : classX;
  markCell(cell, currentClass);

  if (checkWin(currentClass)) {
    showScreen();
  } else {
    swapTurn();
  }

  //   checkWin(currentClass);
}

function markCell(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurn() {
  circleTurn = !circleTurn;
}

function checkWin(currentClass) {
  return possibleWins.some((combination) => {
    return combination.every((indeks) => {
      return cells[indeks].classList.contains(currentClass);
    });
  });
}

function showScreen() {
  resultScreenJS.classList.add(resultScreen);
  const wrapper = document.querySelector(".wrapper");
  wrapper.style = "display:none;";
}
