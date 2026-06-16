//Correcting and maintaining standards of a username

let fullName = "  Kunal Kumar  ";

let username = fullName.trim().toLowerCase().replaceAll(" ","_");

console.log(`Username is ${username}`);