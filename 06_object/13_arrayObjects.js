//From users: (1) get all users above 18, (2) get only names, (3) find the first dev, (4) sort by age ascending WITHOUT mutating the original.

const users = [
  { name: "Kunal", age: 19, role: "student" },
  { name: "Raj",   age: 25, role: "dev"     },
  { name: "Priya", age: 17, role: "student" },
  { name: "Ankit", age: 22, role: "dev"     }
]

//(1) getting all the users above 18

for (let index = 0; index < users.length; index++) {
  const element = users[index];
  if (element.age>18) {
    console.log(element);
  }
}

//only names
console.log("Names:");

for (let index = 0; index < users.length; index++) {
  console.log(users[index].name);
}

//find first dev
for (let i = 0; i < users.length; i++) {
  const element = users[i];
  if (element.role === "dev") {
    console.log(`First dev is ${element.name}`);
    break;
  }
}

//sort by age ascending
for (let i = 0; i < users.length; i++) {
  const element = users[i];
  
  
}