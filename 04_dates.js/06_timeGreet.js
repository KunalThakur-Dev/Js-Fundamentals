//Greets according to the time
let today = new Date();

let hours = today.getHours();

if( hours >=4 && hours < 12){
    console.log(`Good Morning! It's ${hours}a.m.`);
}
else if(hours >=12 && hours < 17){
    console.log(`Good Afternoon! It's ${hours-12}p.m.`);
}
else if(hours >=17 && hours < 24){
    console.log(`Good Evening! It's ${hours-12}p.m.`);
}else if(hours >=0 && hours <4){
    console.log(`It's been late night! you should get some sleep now.`);
    
}