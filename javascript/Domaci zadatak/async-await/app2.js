// const getData = async () => {
//   try {
//     const catching = await fetch("https://api.quotable.io/quotes/random");
//     const data = await catching.json();
//     console.log(data);
//     return data[0];
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData().then((data) => {
//   const content = document.getElementById("content");
//   content.innerHTML = ` <div class="card">
//       <p class="tekst">
//       ${data.content}
//       </p>
//       <p class="author"> ${data.author}</p>
//     </div> `;
// });

// const showAllQuotes = async () => {
//   try {
//     const get = await fetch("https://api.quotable.io/quotes?page=1");
//     const data = await get.json();
//     return data.results;
//   } catch (greska) {
//     console.log("asd");
//   }
// };

// showAllQuotes().then((list) => {
//   const content2 = document.getElementById("content2");
//   let allQuotes = "";
//   list.forEach((value) => {
//     allQuotes += ` <div class="card">
//     <p class="tekst">
//     ${value.content}
//     </p>
//     <p class="author"> ${value.author}</p>
//   </div>`;
//   });
//   content2.innerHTML = allQuotes;
// });

const searchQuotes = async () => {
  try {
    const input = document.querySelector(".input");
    const get = await fetch(
      `https://api.quotable.io/search/quotes?query=${input.value}`
    );
    const data = await get.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const content = document.getElementById("content");
  let allQuotes = "";
  data.forEach((value) => {
    allQuotes += `<div class="card">
        <p class="tekst">${value.content}</p>
        <p class="autori">${value.authors}</p>
        </div>`;
  });
  content.innerHTML = allQuotes;
};

const button = document.querySelector(".search");
button.addEventListener("click", () => searchQuotes().then(showQuotes));
