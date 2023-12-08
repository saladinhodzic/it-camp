// Switch naredbu koristimo kada zelimo kroz slucajeve tacne moguce vrednosti

switch (5 - 3) {
  case 1:
    // kod se izvrsava ako je izraz === 1
    break;
  case 5:
    // kod se izvrsava ako je izraz === 5
    break;
  case 2:
    // kod se izvrsava ako je izraz === 2
    break;
  default:
  //  kod se izvrsava ako nijedan prethodni slcuaj nije zadovoljen kao else
}

// break keyword stavljamo na kraju slcuaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen
// break zavrsava naredbu

broj = +prompt("Unesite broj");

switch (broj) {
  case 12:
  case 13:
  case 14:
  case 15:
    console.log(`Uneli ste ${broj}`);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

const dan = +prompt("Unesite broj 1-7");

switch (dan) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Niste uneli zeljenu vrednost");
}
