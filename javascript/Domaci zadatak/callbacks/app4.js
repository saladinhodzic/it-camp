// callbacks

function displaySum(a, b, cb) {
  return cb(a, b);
}

const sum = (a, b) => {
  return a + b;
};
 
console.log(displaySum(3, 4, sum));
