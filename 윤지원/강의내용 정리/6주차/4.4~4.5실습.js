const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // control it ourselves
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username); //유저 이름 저장하기, 저장될 아이템의 키와 값을 적어주기
  greeting.innerText = `Hello ${username}`; //only `
  greeting.classList.remove(HIDDEN_CLASSNAME); //이제 폼만이 hidden 클래스명을 갖고 있음
}

loginForm.addEventListener("submit", onLoginSubmit);
