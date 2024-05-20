const loginInput = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginButton.addEventListener("submit", onLoginSubmit);