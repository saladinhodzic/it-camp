const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
let minuti = 0;
let sekunde = 0;
let intervalId;
let isPlaying = false;
document.querySelector(".timer").innerHTML = `${minuti}:${sekunde}`;

function startTimer() {
  if (!isPlaying) {
    isPlaying = true;
    start.textContent = "Stop";
    intervalId = setInterval(() => {
      document.querySelector(".timer").innerHTML = `${minuti}:${sekunde}`;
      if (sekunde === 59) {
        minuti++;
        sekunde = 0;
      } else {
        sekunde++;
      }
    }, 1000);
  } else {
    start.textContent = "Start";

    clearInterval(intervalId);
    isPlaying = false;
  }
}

start.addEventListener("click", startTimer);

function resetTimer() {
  minuti = 0;
  sekunde = 0;
  document.querySelector(".timer").innerHTML = `${minuti}:${sekunde}`;
}

reset.addEventListener("click", resetTimer);
