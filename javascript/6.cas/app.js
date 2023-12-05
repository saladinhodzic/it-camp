// KONDICIONALI //

// (5>4 ) je uslov koji kada je true izvrsice se kod izmedju viticastih zagrada
if (5 > 4) {
  console.log("vece je");
}

trenutnoVreme = 20;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("Dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 18) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

const brojGodina = 17;
if (brojGodina >= 18) {
  console.log("Punoletni ste");
} else {
  console.log("Maloletni ste");
}

const x = 12;
const y = 6;

if (y === 0) {
  console.log("Deljenje nije moguce");
} else {
  console.log(x / y);
}
