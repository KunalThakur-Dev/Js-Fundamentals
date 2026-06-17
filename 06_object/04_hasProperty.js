//Checks if a value exists using 3 different methods
const config = { timeout: 0, retries: null, debug: false }

//Method 1
if(config.timeout){
    console.log("Timeout exits");
    
}else{
    console.log("Timeout doesn't exists");
}

//Method 2
console.log('timeout' in config);

//Method 3
console.log(config.hasOwnProperty('timeout'));
