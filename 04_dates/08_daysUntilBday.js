//Calculates days until next birthday
 let birthDate = new Date("2026-09-16");

 let currentDate = new Date();

 let timeDiff = birthDate.getTime() - currentDate.getTime();

 let days = Math.floor(timeDiff / (1000*3600*24));

 console.log(`Days left till your next birthday are ${days}`);
 