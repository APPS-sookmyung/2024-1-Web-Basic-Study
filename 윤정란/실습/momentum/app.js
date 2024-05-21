const title = document.querySelector("div.hello:first-child h1");
function click() {
  title.classList.toggle("active");

  // const activeClass = "active";
  // if (title.classList.contains(activeClass)) {
  // title.classList.remove(activeClass);
  // } else {
  // title.classList.add(activeClass);
  // }
}

title.onclick = click;
