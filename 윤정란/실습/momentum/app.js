const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
  greeting(username);
}

function greeting(username) {
  greeting.classList.remove("hidden");
  greeting.innerHTML = "hello ${savedUsername}";
}

loginForm.addEventListener("submit", login);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  greeting(savedUsername);
}
