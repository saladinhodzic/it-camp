function increment() {
  let increment = 0;
  return function () {
    return increment++;
  };
}

let step = increment();
console.log(step());
console.log(step());

function memory() {
  const cache = {};
  return function (a) {
    if (cache[a]) {
      console.log("it already exists");
    } else {
      cache[a] = true;
      console.log("thanks for new samples");
    }
  };
}

let provera = memory();
provera(20);
provera(20);
provera("0");
