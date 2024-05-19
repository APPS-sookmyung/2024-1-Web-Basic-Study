const loginInput = document.querySelector("#loin-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);