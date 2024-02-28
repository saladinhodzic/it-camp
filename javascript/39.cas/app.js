// async/await, es6
// try catch, http

const asyncFn = async () => {
  const rand = Math.random();
  if (rand > 0.5) {
    return "reseno";
  } else {
    throw new Error("This is error text");
  }
};

asyncFn()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

const fetchUser = async () => {
  try {
    const result = await fetch("https://randomuser.me/api/", { method: "GET" });
    const data = await result.json();
    console.log(data);
    // throw new Error("error brate");
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchUser().then((result) => {
  console.log(result);
});

// http, osi model, tcp/udp

// http methods
// GET,POST,PUT,DELETE

// GET se koristi za uzimanje podataka, nema body, podatke saljete u url
// POST se koristi za slanje podataka, ima body i podatke saljete u body
// PUT se koristi za apdejtanje postojecih podataka, ima body i podatke saljete u body
// DELETE se koristi za brisanje podataka

// http status code
// 100 informacioni kodovi
// 200 success kodovi
// 300 redirect kodovi
// 400 client error kodovi
// 500 server error
