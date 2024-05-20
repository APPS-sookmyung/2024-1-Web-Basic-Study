const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침 막아줌
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("submit", handleLinkClick);
