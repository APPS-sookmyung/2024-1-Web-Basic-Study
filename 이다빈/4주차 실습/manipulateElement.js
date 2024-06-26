const button = document.querySelector("#btn");
console.log(button.classList); // "find"

if (button.classList.contains("add")) {
  button.classList.remove("add");
} else {
  button.classList.add("add");
}

console.log(button.classList);