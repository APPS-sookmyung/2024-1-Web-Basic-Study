const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  //화면 새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //form 숨겨준다
  const username = loginInput.value;
  //value를 username이라는 키값으로 저장시켜준다
  localStorage.setItem(USERNAME_KEY, username);
  //로컬 storage에 저장
  paintGreetings(username);
  //onLoginSubmit함수에서는 유저정보가 input으로부터 오고 있다
}
//비어있는 h1 요소안에 `Hello username` 이라는 텍스트 추가
//hidden 클래스 이름을 제거해주는 작동을 반복하지 않도록 함수로 만들어줌
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);
//앱이 시작되면 local storage에서 savedusername을 얻으려고 할텐데 거기서 username이라는 key를 가지고 찾게 된다

//처음에는 key랑 value가 null이므로
if (savedUsername === null) {
  //없으면 널 값을 반환하기 때문
  loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form- form에 hidden을 지움
  loginForm.addEventListener("submit", onLoginSubmit);
  // form이 submit될때만 onLoginSubmit함수를 실행 시키도록 한다
} else {
  paintGreetings(savedUsername);
  //유저정보가 localstoreage에서 나오고 있다
  //paintGreeting은 only localstoarage에서만 값을 불러오니 유의하기!
}
