//Checking if Palindrome

let str = "madam";
str = str.toLowerCase();
let reversed = "";

for (let i = str.length-1; i>=0; i-- ){
    reversed+= str[i];
};

console.log(`Original string - ${str}`);
console.log(`Reversed string - ${reversed}`);

if(str === reversed){
    console.log(`The string ${str} is a palindrome.`);
}
else{
    console.log(`The string ${str} is not palindrome.`);
}