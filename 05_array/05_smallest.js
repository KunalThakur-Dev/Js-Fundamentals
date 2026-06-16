//Gives the smallest element of an array
let arr = [10,20,30,40,5];
let smallest = arr[0];

for (let value of arr){
    if(value < smallest){
        smallest  = value;
    }
}
console.log(`Smallest element in the array [${arr}] is ${smallest}`);