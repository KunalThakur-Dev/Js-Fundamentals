// Swapping two variables without using third variable

let a = 5;
let b = 7;

console.log("Before swapping");
console.log(`Value of a = ${a} and value of b = ${b}`);

[a, b] = [b, a];

console.log("After swapping");
console.log(`Value of a = ${a} and value of b = ${b}`);