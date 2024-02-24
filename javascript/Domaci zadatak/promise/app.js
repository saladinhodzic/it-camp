// Exercise 1: Basic Promise
// Create a simple promise that resolves after a certain time and logs a message.

let promise = new Promise((reject, resolve) => {
  const a = 1 + 2;

  setTimeout(() => {
    if (a === 2) {
      reject("bravo");
    } else {
      resolve("nista");
    }
  }, 1000);
});

promise
  .then((poruka) => {
    console.log("rezultat je uspesan " + poruka);
  })
  .catch((error) => {
    console.log("rezultat nije uspesan " + error);
  });

//   chaining promises

function prviPromise() {
  return new Promise((resolve) => {
    resolve("Prvi promise");
  });
}
function drugiPromise(prosliPromise) {
  return new Promise((resolve) => {
    resolve(prosliPromise + " Drugi promise");
  });
}
function treciPromise(prosliPromise) {
  return new Promise((resolve) => {
    resolve(prosliPromise + " Treci promise");
  });
}

prviPromise()
  .then((ovajProsli) => {
    return drugiPromise(ovajProsli);
  })
  .then((ovajProsli) => {
    return treciPromise(ovajProsli);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });
