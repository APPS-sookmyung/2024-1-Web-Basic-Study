const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innterText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(getClock, 1000);