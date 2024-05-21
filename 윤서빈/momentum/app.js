const loginInput = document.querySelector(".form input");
const loginButton = document.querySelector(".form button");

function onLoginBTnClick() {
  const username = loginInput.value;
  console.log(username);
}
loginButton.addEventListener("click", onLoginBTnClick);
