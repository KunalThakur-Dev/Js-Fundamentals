//Reference vs value trap
const a = { x: 10 }
const b = a
b.x = 99
console.log(a.x)   // 