// DOM & BOM
// accessing, creating, deleting html elements
// BOM, events, listeners

// Document Object Model
console.log(document);
console.log(document.body);
console.log(document.head);

// acessing html elements
// svaki html element postoji kao objekat u js
const paragraf = document.getElementById("test");
const inputs = document.getElementsByClassName("test2");
// console.log(p);
// console.log(input[0]);

const testInput = inputs[0];

paragraf.textContent = "This was changed";
testInput.value = "This was inputed in JS";
// testInput.type = "number";

// querySelector uzima prvi element koji zadovaljava
const p = document.querySelector("p");

const p2 = document.querySelector("p[id=testId2]");

const allP = document.querySelectorAll("p");
console.log(allP);

allP.forEach((value) => {
  console.log(value.innerText);
});

// creating html elements

// document.body.innerHTML =
//   document.body.innerHTML + "<p>I was created in jS</p>";

//   paragraf.innerHTML=paragraf.innerHTML + '<span></span>'

const element = document.createElement("a");
element.href = "https://www.google.com";
element.textContent = "This is link";
// element.innerText = "This is link";
document.body.appendChild(element);

//delete elements

document.body.removeChild(element);
// document.body.innerHTML = "";

// paragraf.parentElement.removeChild(paragraf);

// Browser Object Model

console.log(window);

console.log(window.history);

console.log(window.location);

// var elementu moze da pristupi korisnik i izmeni

// events

p.addEventListener("mouseenter", (e) => {
  e.currentTarget.style.color = "blue";
});
p.addEventListener("mouseleave", (e) => {
  e.currentTarget.style.color = "black";
});
