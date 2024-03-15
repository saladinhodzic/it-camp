// closure and practice

// closure je funkcija koja vraca drugu funkciju
function fn1(a) {
  return function fn2(b) {
    return a + b;
  };
}

const a = fn1(20);
const sum = a(20);
const sum1 = a(10);

// Currying

const result = fn1(20)(10);

function fn2(a) {
  return {
    test: a,
  };
}

const value = fn2(10).test;

// examples

function memorize() {
  const memory = {};
  return function (a) {
    if (memory[a]) {
      console.log("it already exists");
    } else {
      console.log("it doesnt");
      memory[a] = true;
    }
  };
}

const memory = memorize();
memory(10);
memory(10);
memory("suad");
memory("next");
memory("suad");

// simple js

// advanced js
