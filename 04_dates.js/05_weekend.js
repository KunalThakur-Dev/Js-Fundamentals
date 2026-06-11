//Checks if it is weekend or not 

let today = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = today.getDay();

if(day == 0 || day == 6){
    console.log(`It's a weekend today!`);
}
else{
    console.log(`It's not a weekend today , it's ${days[day]}.`);
    
}