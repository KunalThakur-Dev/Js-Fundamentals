//Current date
// Current Date Formatter

let today = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let day = today.getDate();
let month = months[today.getMonth()];
let year = today.getFullYear();

console.log(`${day} ${month} ${year}`);