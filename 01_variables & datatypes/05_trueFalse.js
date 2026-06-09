//Truthy Falsy Explorer

let arr = [
 false,
 0,
 "",
 [],
 {},
 null,
 undefined
];

for(let value of arr){
    console.log(`${value} => ${Boolean(value)}`);
}