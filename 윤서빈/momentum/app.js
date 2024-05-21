const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  // 브라우저가 기본 동작을 실행하지 못하게 막기
  // event object는 preventDefault함수를 기본적으로 갖고 있음
  console.log(loginInput.value);
}

function handleLinkClick() {
  alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들
link.addEventListener("click", handleLinkClick);
