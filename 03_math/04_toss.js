//Tosses a coin

function toss(){
    let x = Math.round(Math.random());
    console.log(x);
    
    if(x === 0){
        return "Heads";
    }
    else{
        return "Tails";
    }
}

console.log(toss());
