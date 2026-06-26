const user = { name: "Alice", age: 28, city: "Paris" };
function objectToArray(obj) {
  const result = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

console.log(objectToArray(user));
