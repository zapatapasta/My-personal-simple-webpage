const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h < 10 ? "0" + h : h;
    hourElement.innerText = h;
    minutesElement.innerText = m;
    secondElement.innerText = s;
}
setInterval(updateClock, 1000)
updateClock()