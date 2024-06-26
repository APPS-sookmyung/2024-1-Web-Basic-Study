const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  painGreetings(username);
}

function painGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painGreetings(savedUsername);
}