// 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
const greeting = (name) => {
  console.log(`Hi ${name}`);
};

function delayed(callback, name) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}
delayed(greeting, "Saladin");
