const loginForm = document.getElementById("#login");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function click() {
  console.log(loginInput.value);
}
loginButton.addEventListener("click", click);
