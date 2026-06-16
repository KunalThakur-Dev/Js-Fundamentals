//Calculates average of the elements of aan array
let arr = [10,20,30,40,50,90];
let sum = 0;

for (let value of arr){
    sum += value;
}
let average = sum / arr.length;
console.log(average);