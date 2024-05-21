const title = document.querySelector("div.hello:first-child h1");
function click() {
  console.log("title was clicked!");
}
title.addEventListener("click", click);
