// closure

function memory() {
  const memorize = {};
  return function (a) {
    if (!memorize[a]) {
      console.log("it doesnt");
      memorize[a] = true;
    } else {
      console.log("it exists");
    }
  };
}

const nesto = memory();

nesto(2);
nesto(3);
nesto(2);
nesto("ja");
nesto("ja");
