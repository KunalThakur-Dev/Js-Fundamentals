//Merge two objects

const defaults = { theme: "dark", lang: "en", fontSize: 14 }
const prefs    = { theme: "light", fontSize: 16 }

function mergeObj(obj1,obj2){
 return{...obj1,...obj2};
}

//prefs wins over keys
console.log(mergeObj(defaults,prefs));



//defaults wins over keys
console.log(mergeObj(prefs,defaults));
