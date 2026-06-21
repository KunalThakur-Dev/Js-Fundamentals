const user = { name: "Kunal", age: 19, city: "Meerut" }

//Destructuring name and age
const {name} = user;
const {age} = user;

console.log(name);
console.log(age);

//Rename city to location
const {city:location} = user;
console.log(location);

//Giving country a default value of 'India' (it doesn't exist in the object). 
const {country = 'India'} = user;
console.log(country);


