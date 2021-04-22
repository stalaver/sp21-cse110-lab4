function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
function inter() {
    let inter = setInterval(printTime, 1000);
}
inter();