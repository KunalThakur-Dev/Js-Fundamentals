//Generates current time
let today = new Date();

let hours = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();

console.log(`Current time is ${hours}:${minute}:${seconds}`);
