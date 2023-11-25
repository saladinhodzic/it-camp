-nali tip promenljive u javiscriptu koristimo typeof operator

//Tipovi podatakaa u javiscriptu delimo na primitivne i neprimitivne

//1. Primitivni tipovi podataka (vrednosni)
//2. Neprimitvni tipovi podataka(referentni)

//Primitivni tipovi podataka:

//1.1. Stringovi-Niz karaktera koji je zapisan pod navodnicima

console.log("Ovo je nas prvi strings");
console.log(typeof "Ovo je nas prvi string");

//1.2. number - Predstavlja broj i on moze biti zapisan sa ili decimalnog zareza

console.log(25);
console.log(typeof 25);

//1.3. BigInt - Brojevi koji su bas veliki

console.log(BigInt(12784819046821642198));

// 1.4. Boolean- logicki entitet koji ima dve vrednosti: true ili false

console.log(true);
console.log(typeof true);

// 1.5. undefined - Promenljiva koja je definisana,
//ali nema vrednost,ima vrednost undefined i tip undefined

var a;
console.log(a);
console.log(typeof a);

// 1.6. null - Predstavlja nekorektnu vrednost ili vrednost koja za sad ne postoji

var a = null;
console.log(a);
console.log(typeof a);

// 1.7. Symbol - Tip podatka za pravljenje anonimnih i unikatnih vrednosti

b = Symbol("demco");
console.log(b);
console.log(typeof b);

// Alt + z za line break

//Primitivni tipovi podataka mogu skladistiti samo jednu vrednost

// 2. Neprimitvni tipovi podataka (referentni)

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se koriste neprimitvni tipovi podataka
// Svaka promenljiva koja nije primitvnog tipa je tipa Object u javascriptu
// Objekti se koriste za skladistenje neke kolekcije podataka

// 2.1. Array (niz) - Predstavlja strukturu podataka za skladistenje vise vrednosti
//Elementi niza ne moraju biti istog tipa

niz = ["Demir", 18, true];
console.log(niz);

//2.2. Object - predstavlja strukturu podataka za skladistenje vise vrednosti. Objekti se zapisuju u key:value parovima.

obj = {
  ime: "Demir",
  brojGodina: 18,
  punoletan: true,
};
console.log(obj);

//2.3. Set - predstavlja strukturu podataka za skladistenje vise vrednosti. Ne dozvoljava duplikate vrednosti

set = new Set(["Kanita", 18, true, "Kanita"]);
console.log(set);

// 2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti.Slicni su objektima

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);

console.log(map);
