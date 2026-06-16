//Count vowels in a string
let str = "Javascript";
let count = 0;
newStr = str.toLowerCase();

for (let i=0;i<newStr.length;i++){
    if(newStr[i] === "a"|| newStr[i] ==="e"|| newStr[i] ==="i"|| newStr[i] ==="o"|| newStr[i] ==="u"){
        count++;
    }
};

console.log(`No. of vowels in ${str} is ${count}`);