const title = document.querySelector("div.hello: first-child:h1");
console.dir(title);
title.style.color = "blue";
//h1의 스타일을 js에서 변경할 수 있음 .
function handleTitleClick() {
  console.log("클릭하면 발동 ");
}

title.addEventListener("click", handleTitleClick);
//유저가 클릭하면 함수가 실행되는 코드
function handleTitleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);
