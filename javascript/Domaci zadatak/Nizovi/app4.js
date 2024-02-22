const inputText = document.querySelector(".text");
const inputDate = document.querySelector(".date");
const addButton = document.querySelector(".add");
const lista = document.querySelector(".lista");

const niz = [];

function reloadHTML() {
  let listaHTML = "";

  for (i = 0; i < niz.length; i++) {
    const taskDate = niz[i].date;
    const taskName = niz[i].name;
    const html = `<p>${taskName}${taskDate}</p>`;
    listaHTML += html;
  }

  lista.innerHTML = listaHTML;
}

function addTask() {
  const taskName = inputText.value;
  const taskDate = inputDate.value;
  niz.push({ name: taskName, date: taskDate });
  reloadHTML();
}
