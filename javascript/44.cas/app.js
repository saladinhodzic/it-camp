// modules and npm
import fetch from "node-fetch";
console.log("i was here");

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

fetchQuote().then((data) => {
  console.log(data);
});
