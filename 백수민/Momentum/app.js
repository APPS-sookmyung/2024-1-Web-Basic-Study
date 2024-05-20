const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침 막아줌
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
