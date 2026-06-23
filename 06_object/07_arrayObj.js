const user = { name: "Alice", age: 28, city: "Paris" };
const entriesArray = [];

for (const key in user) {
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    entriesArray.push([key, user[key]]);
  }
}

console.log(entriesArray); 
// Output: [ ["name", "Alice"], ["age", 28], ["city", "Paris"] ]
