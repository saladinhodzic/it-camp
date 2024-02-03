// Create an object representing a person with properties: name, age, and profession
// Access and print each property

const saladin = {
  name: "Saladin",
  age: 18,
  job: false,
};

console.log(saladin.name);
console.log(saladin.age);
console.log(saladin.job);

// Add a new property 'location' with a value to the person object
// Update the age property with a new value
// Print the updated object

saladin.location = "Novi Pazar";
saladin.age = 29;

console.log(saladin);

// Create an object representing a car with properties: make, model, and year
// Add a method 'start' to the car object that prints a message like "The car is starting"
// Call the start method

const car = {
  make: "Audi",
  model: "A6",
  year: 2008,
  start: function () {
    console.log("Car is starting");
  },
};

car.start();
