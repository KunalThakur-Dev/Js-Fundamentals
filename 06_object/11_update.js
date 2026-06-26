//Immutable update
const user = { name: "Kunal", age: 19, city: "Meerut" }
const update = { age: 20, city: "Delhi" }

Object.freeze(user)
function updateUser(user,update){
    return{...user,...update}
}
console.log(updateUser(user,update))
console.log(user);

