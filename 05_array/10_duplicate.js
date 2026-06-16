//Detects duplicate elements in an array
let arr = [1, 2, 3, 2, 4, 5, 4];
let unique = new Array();

for (let value of arr){
    if(unique.includes(value)){
    }
    else{
        unique.push(value);
    }
}

console.log(`Original array - ${arr}`);
console.log(`Unique array - ${unique}`);

