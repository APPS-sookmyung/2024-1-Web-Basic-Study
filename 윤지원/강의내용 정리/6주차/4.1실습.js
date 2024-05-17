function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("write");
  } else if (username.length > 15) {
    alert("too long");
  }
}
