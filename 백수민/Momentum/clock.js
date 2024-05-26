const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock(); // 바로 실행시키기
setInterval(getClock, 1000);