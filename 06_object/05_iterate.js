//Iterating all keys, values and then both
const student = { name: "Kunal", age: 19, college: "Tier 3", goal: "10 LPA", city: "Meerut" }

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

for (const[key,value] of Object.entries(student)){
    console.log(`${key} : ${value}`);
    
}