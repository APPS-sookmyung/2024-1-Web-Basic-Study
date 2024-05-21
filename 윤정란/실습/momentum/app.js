const title = document.querySelector("div.hello:first-child h1");
function click() {
  if (title.className === "active") {
    title.className = "";
  } else {
    title.className = "active";
  }
}

title.onclick = click;
