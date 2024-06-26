const clock = document.querySelector("h2#clock");
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes).padStart(2, "0");
    const seconds = String(date.getSeconds).padStart(2, "0");
   //clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
setTimeout(getClock, 5000);

const date = new Date();
date.getDate()
date.getDay()
date.getFullYear()
date.getHours()
date.getMinutes()
date.getSeconds()

new Date().getHours()
new Date().getMinutes()
new Date().getSeconds()

