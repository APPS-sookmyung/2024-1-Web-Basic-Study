// const title = document.querySelector(".hello:first-child h1");

// console.log(title);

// title.innerText = "Hello";

// title.style.color = "blue" //h1 -> style -> color

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // console.log("title was clicked!");
  title.style.color = "blue"
}

title.addEventListener("click", handleTitleClick);
//두번째 인수로 함수를 전달: "click"할 경우에 함수가 실행되게 함.
//JavaScript에 함수이름을 넘겨 JavaScript가 대신 실행버튼을 누르게 함.