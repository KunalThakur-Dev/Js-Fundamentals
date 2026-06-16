//Count frequency of a number
let arr = [1,2,2,3,2,4];
let frequency = 0;

for (let val of arr){
    if(val === 2){
        frequency++;
    }
}

console.log(`Frequency of 2 in the array is ${frequency}`);
