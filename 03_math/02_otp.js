//Generates a 6-digit otp genrator

function otpGenerator(){
    return Math.floor(100000 + Math.random()*900000);
}

console.log(otpGenerator());
