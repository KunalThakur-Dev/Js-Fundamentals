//Calculates second largest element
let arr = [1,2,3,4,12,5,6,7,8,9,11,13];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let value of arr){

    if(value > largest){

        secondLargest = largest;
        largest = value;

    }

    else if(value > secondLargest){

        secondLargest = value;

    }

}

console.log(`Largest element of array is ${largest}`);
console.log(`Second largest element of array is ${secondLargest}`);
