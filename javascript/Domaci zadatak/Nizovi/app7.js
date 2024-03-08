// number split

function splitNumber(broj) {
  if (broj % 2 !== 0) {
    return `${Math.floor(broj / 2)},${Math.ceil(broj / 2)}`;
  } else {
    return `${broj / 2},${broj / 2}`;
  }
}
console.log(splitNumber(10));
console.log(splitNumber(11));
console.log(splitNumber(79));

// fetching data
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((result) => {
//     throw new Error("eror brate");
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const asyncFn = async () => {
//   try {
//     const url = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//     const result = await url.json();
//     console.log(result);
//     throw new Error("greska");
//   } catch (error) {
//     console.log(error);
//   }
// };
// asyncFn();

const users = [
  { name: "ajsa", age: 13 },
  { name: "minica", age: 25 },
  { name: "saki", age: 28 },
  { name: "demco", age: 28 },
];

function provera(user) {
  const obecanje = new Promise((resolve, reject) => {
    if (user.age < 18) {
      reject("rejected");
    } else {
      resolve("succed");
    }
  });
  return obecanje;
}

provera(users[1])
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
