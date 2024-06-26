function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
//마우스 올려놓으면 발생하는 이벤트

//oneventname 도 위와 같은 기능(listen)
title.onclick = handleMouseEnter;
title.addEventListener("mouseenter2", handleMouseEnter);
