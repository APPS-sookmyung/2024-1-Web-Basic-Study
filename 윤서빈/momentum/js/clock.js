const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = string(date.getHours()).padstart(2, "0");
  const minutes = string(date.getMinutes()).padstart(2, "0");
  const seconds = string(date.getSeconds()).padstart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
