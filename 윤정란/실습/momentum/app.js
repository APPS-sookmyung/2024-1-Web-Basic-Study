const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
  greeting.innerHTML = "hello!";
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", login);
