//Counts even and odd numbers
let arr = [1,2,3,4,5,6,7,8,9,10,12];
let evenCount = 0;
let oddCount = 0;

for (let value of arr){
    if(value % 2 === 0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}

console.log(`Even count in array is ${evenCount}`);
console.log(`Odd count in array is ${oddCount}`);
