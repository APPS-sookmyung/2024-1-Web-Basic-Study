const title = document.querySelector("div.hello:first-child h1");
function click() {
  console.log("title was clicked!");
}
function copy() {
  alert("copier!");
}

title.onclick = click;

window.addEventListener("copy", copy);
