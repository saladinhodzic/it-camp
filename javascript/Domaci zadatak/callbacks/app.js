// Create a function multiply that takes two parameters (numbers) and a callback function. The function should multiply the two numbers and then call the callback with the result.

// function multiply(a, b) {
//   return a * b;
// }
// function substraction(a, b) {
//   return a - b;
// }
// function sum(a, b) {
//   return a + b;
// }
// function divide(a, b) {
//   return a / b;
// }

// function callback(a, b, callback) {
//   return callback(a, b);
// }

// console.log(callback(2, 2, multiply));
// console.log(callback(2, 2, divide));
// console.log(callback(2, 2, substraction));
// console.log(callback(2, 2, sum));

// Create a function delayedGreeting that takes a name and a callback function. The function should wait for 2 seconds (simulating a delayed operation) and then call the callback with a greeting message that includes the provided name.
function greeting(name) {
  console.log(`Thank you ${name}`);
}
function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}
delayedGreeting("Saladin", greeting);
