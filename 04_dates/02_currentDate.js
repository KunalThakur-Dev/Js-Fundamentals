//Generates current day of the week
let today = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = days[today.getDay()];

console.log(`Today is ${day}`);