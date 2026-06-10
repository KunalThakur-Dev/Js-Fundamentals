//Function to find and another to find circumference of a circle
let radius = 7;

function getArea(radi){
    return (Math.PI*radi*radi).toFixed(2);
}

console.log(`Area of the circle is ${getArea(radius)}`);

//Circumference

function getCircumference(radi){
    return (2*radi*Math.PI).toFixed(2);
}
console.log(`Circumference of the circle is ${getCircumference(radius)}`);
