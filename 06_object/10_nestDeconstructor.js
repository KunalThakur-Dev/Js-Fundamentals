const order = {
  id: 101,
  customer: {
    name: "Raj",
    address: { city: "Delhi", pin: 110001 }
  }
}
//Extract name and city from this deeply nested object in a single destructuring statement — no intermediate variables allowed.
const {customer:{name,address:{city,pin}}} = order;
console.log(name,city);
