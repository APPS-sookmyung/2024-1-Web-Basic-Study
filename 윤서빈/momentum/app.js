const loginInput = document.querySelector(".form input");
const loginButton = document.querySelector(".form button");

function ClickButton() {
  console.log(loginInput.value); // 버튼을 눌렀을때 input(텍스트박스) 통해서 입력한것들이 출력된다
  console.log("click");
}
loginButton.addEventListener("click", ClickButton);
