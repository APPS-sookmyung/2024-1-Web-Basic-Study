// const title = document.getElementsByTagName("h1"); //배열로 가져옴
const title = document.querySelector(".hello h1");
const titles = document.querySelectorAll(".hello h1");

// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");
// 두 개가 같음

title.innerText = "Hello";

console.log(title);
console.log(titles);