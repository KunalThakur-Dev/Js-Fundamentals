//Digital Clock

function showTime() {
    let date = new Date();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();
 console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(showTime, 1000);
