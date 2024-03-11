let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

showScore();

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", resetScore);

document.body.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    resetScore();
  }
});

function resetScore() {
  const question = document.getElementById("question");
  question.innerHTML = `<p>Do you want to reset score?</p>
  <button class="dugme1">Yes</button>
  <button class="dugme2">No</button>`;

  const yes = document.querySelector(".dugme1");
  const no = document.querySelector(".dugme2");

  yes.addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem("score");

    showScore();
    question.innerHTML = "";
  });

  no.addEventListener("click", () => {
    question.innerHTML = "";
  });
}

const autoButton = document.querySelector(".auto-play");
autoButton.addEventListener("click", autoPlay);
document.body.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    autoPlay();
  }
});

let IntervalId;
let isPlaying = false;
function autoPlay() {
  const myMove = pickComputerMove();
  if (!isPlaying) {
    autoButton.textContent = "Stop Playing";
    IntervalId = setInterval(() => {
      playGame(myMove);
    }, 3000);
    isPlaying = true;
  } else if (isPlaying) {
    autoButton.textContent = "Auto Play";
    isPlaying = false;
    clearInterval(IntervalId);
  }
}

// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
//   };
// }
function playGame(myMove) {
  const computerMove = pickComputerMove();
  result = "";
  if (myMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (myMove === "paper") {
    result = "";
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    }
  } else if (myMove === "rock") {
    result = "";
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    }
  }

  document.querySelector(".js-moves").innerHTML = `  You
    <img src="./images/${myMove}-emoji.png" alt="" />
    <img src="./images/${computerMove}-emoji.png" alt="" />
    Computer`;

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  document.querySelector(".js-result").innerHTML = result;
  localStorage.setItem("score", JSON.stringify(score));

  showScore();

  //     alert(`You chose ${myMove}.Computer chose ${computerMove}.${result}
  //   Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`);
}

function showScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
}

function pickComputerMove() {
  randomNumber = Math.random();
  computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "scissors";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "paper";
  }

  return computerMove;
}
