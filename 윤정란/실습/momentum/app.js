const title = document.querySelector("div.hello:first-child h1");
function click() {
  if (title.style.color === "blue") {
    title.style.color = "tomato";
  } else {
    title.style.color = "blue";
  }
}

title.onclick = click;
