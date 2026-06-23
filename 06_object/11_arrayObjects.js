//From users: (1) get all users above 18, (2) get only names, (3) find the first dev, (4) sort by age ascending WITHOUT mutating the original.

const users = [
  { name: "Kunal", age: 19, role: "student" },
  { name: "Raj",   age: 25, role: "dev"     },
  { name: "Priya", age: 17, role: "student" },
  { name: "Ankit", age: 22, role: "dev"     }
]

//(1) getting all the users above 18

for (let value of users) {
if (users(value).age>18) {
  console.log(users(value));
}
}