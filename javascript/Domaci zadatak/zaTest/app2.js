const url = "https://api.quotable.io/quotes";
const content = document.getElementById("content");
const searchButton = document.getElementById("search");
const input = document.getElementById("input");

const fetchQuotes = async () => {
  try {
    const getJson = await fetch(
      `https://api.quotable.io/search/quotes?query=${input.value}`
    );
    const data = await getJson.json();
    console.log(data);
    // generateCard(data["results"]);
    return data["results"];
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes();

function generateCard(data) {
  let string = "";
  data.forEach((value) => {
    string += `
    <div class="card"
    <p class="quote">${value.content}</p>
    <p class="author">${value["author"]}</p>
    </div>`;
  });
  content.innerHTML = string;
}

searchButton.addEventListener("click", () => fetchQuotes().then(generateCard));
