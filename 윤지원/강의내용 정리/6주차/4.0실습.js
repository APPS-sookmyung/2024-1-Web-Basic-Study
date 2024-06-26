const loginForm = document.querySelector("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//const loginINput=document.querySelector("#login-form input")

function loginBtn() {
  console.log(loginInput.value);
  console.log("click");
}
loginButton.addEventListener("click", onLoginBtnClick);
