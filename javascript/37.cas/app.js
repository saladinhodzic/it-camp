// event loop
// execution stack, event queue, web API

// blokira ceo call stack

// alert("Hello");
// prompt("unesite nesto");

console.log("first");

setTimeout(() => {
  console.log("text in set Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Text in promise");
});

// first
// text in Promise
// text in setTimeout

const myPromise = new Promise((resolve, reject) => {
  console.log("before resolve");
  resolve("This text");
  console.log("after resolve");
});

myPromise.then((result) => {
  console.log(result);
});

console.log("MY name is");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("this works");
// before resolve
// after resolve
// My name  is
// this works
// This text
// timeout
