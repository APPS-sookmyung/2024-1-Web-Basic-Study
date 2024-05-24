const clock = document.querySelector("h2#clock");

function gerClock() {
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setTimeout(gerClock, 1000);