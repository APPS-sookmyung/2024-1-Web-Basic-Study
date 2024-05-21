const loginForm = document.getElementById("#login");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function click() {
  const username = loginInput.value;
  if (username === "") {
    alert("이름을 적어 주세요");
  } else if (username.length > 15) {
    alert("이름이 너무 깁니다");
  }
}
loginButton.addEventListener("click", click);
