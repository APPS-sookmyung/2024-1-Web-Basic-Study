const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");

function login(tomato) {
  tomato.prerventDefault();
  console.log(tomato);
}

loginForm.addEventListener("submit", login);
