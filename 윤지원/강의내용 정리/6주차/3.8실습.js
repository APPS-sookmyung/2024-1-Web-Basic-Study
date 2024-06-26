function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clisckClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
//toggle, 같은 기능
function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleclick);
