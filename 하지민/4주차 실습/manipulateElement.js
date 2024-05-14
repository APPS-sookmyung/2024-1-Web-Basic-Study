const button = document.querySelector("#btn");
console.log(button.classList); //"find"

/**
 * contains(): 포함 확인
 * toggle(): 있으면 삭제, | 없으면 추가
 */
if (button.classList.contains("add")) {
  button.classList.remove("add");
} else {
  button.classList.remove("add");
}

console.log(button.classList); //"find", "add"
