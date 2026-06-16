//Reverse an array without using reverse function
let arr = [1,2,3,4,5,6,7,8,9,10,12];
let reverse = new Array();

for(let i = 0; i<arr.length;i++){
    reverse[i] = arr[arr.length - (i+1)];
}
console.log(`Original array - ${arr}`);

console.log(`Reversed array - ${reverse}`);

