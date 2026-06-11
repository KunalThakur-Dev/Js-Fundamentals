//Calculates total days lived 
let birthDate = new Date("2006-09-16");

console.log(`You were born on "${birthDate.toDateString()}"`);

let today = new Date();
console.log(`Today is "${today.toDateString()}"`);

let timeDiff = today.getTime() - birthDate.getTime();
console.log(`Time difference in milliseconds: ${timeDiff}`);

let daysLived = Math.floor(timeDiff / (1000 * 3600 * 24));
console.log(`You have lived for approximately ${daysLived} days.`); 