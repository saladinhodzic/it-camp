// fetching DOM manipulation

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
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `
  <div class="card">
  <p class="author" style="font-size: 2em">${data.author}</p>
  <p class="content">
   ${data.content}
  </p>
</div>`;
});

// const allQuotes = async () => {
//   try {
//     const quotes = await fetch("https://api.quotable.io/quotes?page=1");
//     const data = await quotes.json();
//     // console.log(data);
//     return data.results;
//   } catch (error) {
//     console.log(error);
//   }
// };
// allQuotes();
// allQuotes().then((data) => {
//   const citati = document.getElementById("content2");
//   let noviCitati = "";
//   for (i = 0; i < data.length; i++) {
//     noviCitati += `<div class="card">
//     <p class="author" style="font-size: 2em">${data[i].author}</p>
//     <p class="content">
// ${data[i].content}
//     </p>
//   </div>`;
//   }

//   citati.innerHTML = noviCitati;
// });

// 3. content div 3 gde ce se prikaate sve quotove sa apija

const url = "https://api.quotable.io/search/quotes?query=";

const allQuotes = async () => {
  try {
    const input = document.getElementById("search");
    const quotes = await fetch(
      `https://api.quotable.io/search/quotes?query=${input.value}`
    );
    const data = await quotes.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const searchFn = (data) => {
  console.log(data);
  const citati = document.getElementById("content3");
  let noviCitati = "";
  for (i = 0; i < data.length; i++) {
    noviCitati += `<div class="card">
    <p class="content">
${data[i].content}
    </p>
  </div>`;
  }

  citati.innerHTML = noviCitati;
};

const searchButton = document.getElementById("searchClick");

searchButton.addEventListener("click", () => {
  allQuotes().then(searchFn);
});

// napravite da se search pokrece na klik enter dugmeta
