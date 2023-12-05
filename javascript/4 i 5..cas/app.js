// Promenljive definisane preko var keyword mozemo ponovo deklarisati (redaklaracija) kao i reinicijalizaciju (ponovno dodeljivanje vrednosti)

var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 20;
console.log(x);

// let i const keywords nam obezbedjuju Block Scope

// Promenljive definisane preko let keyword mozemo ponovo deklarisati (redaklaracija) samo u drugom prostoru, kao i reinicijalizaciju (ponovno dodeljivanje vrednosti) mozemo u isto

let y = 3;
console.log(y);

y = 6;
console.log(y);

// let y = 2; nije dozvoljeno redeklarisanje u istom prostoru

{
  //    console.log(y);  y se prepoznaje iz global scope
  let y = 20;
  console.log(y);
}

console.log(y);

// Promenljive definisane preko let keyword mozemo ponovo deklarisati (redaklaracija) samo u drugom prostoru

const z = 30;

// const z = 45; nije dozvoljeno redeklarisanje u istom prostoru

// z = 60; nije dozvoljeno reinicijalizacija u istom prostoru

{
  //    console.log(z);  z se prepoznaje iz global scope
  const z = 20;
  console.log(z);
}

console.log(z);
