const demir = "demir";

for (i = 1; i <= 10; i++) {
  console.log(demir);
}

for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}
// continue keyword koristimo kada zelimo da preskocimo radnju za tu iteraciju i nastavimo sa petljom
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5) {
    continue;
  }
  console.log(i);
}
// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestane izvrsavanje onda koristimo break
for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}
