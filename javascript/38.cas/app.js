// Promises
// promise chaining, reject, resolve, then, catch, finally

// creating

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve("resolve");
    } else {
      reject("reject");
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log("begging of first then");
    console.log(result);
    return Promise.resolve("second promise");
  })
  .then((result) => {
    console.log("beggining of second then");
    console.log(result);
    return Promise.reject("third reject");
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("this happen every time");
  });

//   fetch API

// fetch();
