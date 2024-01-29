// Write a JavaScript function to round a number to decimal place.

function roundNumber(broj) {
  return Math.round(broj);
}
console.log(roundNumber(2.356));

// Pitagorina teorema
function pitagorinaTeorema(a, b) {
  let c = a * a + b * b;
  return Math.sqrt(c);
}

console.log(pitagorinaTeorema(3, 4));

// Write a JavaScript function to generate a random integer.

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(randomNumber(3, 10));
console.log(randomNumber(50, 100));
