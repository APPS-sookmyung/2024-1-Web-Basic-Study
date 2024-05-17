//onLoginSubmit의 첫번째 argument로 submit 감지
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

//JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보
loginForm.addEventListener("submit", onLoginSubmit);

//클릭감지
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

//alert 가 페이지로부터 다른 동작을 하지 못하도록 막음
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(logInput.value); //버튼을 눌러도 새로고침이 안됨
}
function handleTitleClick() {
  alert("clicked!");
}
