//Gives the largest element of the array
let arr = [10,20,30,40,50];
let largest = arr[0];

for (let value of arr){
    if(value > largest){
        largest  = value;
    }
}
console.log(`Largest element in the array [${arr}] is ${largest}`);
