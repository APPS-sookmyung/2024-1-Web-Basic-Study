//css를 자바스크립트에서 구현하기

//title색 바꾸기 -> if something is true
const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);
function handleTitleClick() {
  console.log(h1.style.color);
  h1.style.color = "blue";
  console.log(h1.style.color);
}

//if h1 is blue, change the color , clean code.ver
function handleClick1() {
  const nowColor = h1.style.color;
  let newColor; //newcolor을 변경해 봤자 h1의 color엔 아무 영향도 미치지않음.
  if (nowColor !== "blue") {
    newColor = "blue";
  } else {
    newColor = "tomato";
  }
  h1.style.color = newColor; //따라서 컬러 업데이트 하는 방법
}

h1.addEventListener("click", handleClick);
