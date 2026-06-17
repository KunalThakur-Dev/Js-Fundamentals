//Merge two objects

const defaults = { theme: "dark", lang: "en", fontSize: 14 }
const prefs    = { theme: "light", fontSize: 16 }

//obj2 wins over keys
mergeObj = {...defaults,...prefs};
console.log(mergeObj);


//obj1 wins over keys
mergeObj = {...prefs,...defaults};
console.log(mergeObj);
