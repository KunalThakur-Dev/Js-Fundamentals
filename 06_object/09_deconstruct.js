const user = { name: "Kunal", age: 19, city: "Meerut" }

const { name, age, city: location, country = 'India' } = user;

console.log(name, age, location, country);