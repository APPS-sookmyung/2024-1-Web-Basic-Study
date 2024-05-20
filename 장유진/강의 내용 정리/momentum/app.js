const loginInput = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    loninForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    "Hello" + username
    'Hello ${username}'
    greeting.innerText = 'Hello ${username}';
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);