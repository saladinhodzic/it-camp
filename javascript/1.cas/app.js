naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko javescripta";
naslov.style = "color:red; font-size:42px";

//TIPOVI PODATAKA //

//Da bismo znali tip promenljive u javiscriptu koristimo typeof operator

//Tipovi podataka u javiscriptu delimo na primitivne i neprimitivne

//1. Primitivni tipovi podataka (vrednosni)
//2. Neprimitvni tipovi podataka(referentni)

//Primitivni tipovi podataka:

//1.1. Stringovi-Niz karaktera koji je zapisan pod navodnicima

console.log("Ovo je nas prvi string");
console.log(typeof "Ovo je nas prvi string");

//1.2. number - Predstavlja broj i on moze biti zapisan sa ili decimalnog zareza

console.log(25);
console.log(typeof 25);

//1.3. BigInt - Brojevi koji su bas veliki

console.log(BigInt(12784819046821642198));
