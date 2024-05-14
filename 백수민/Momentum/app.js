const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const title1 = document.getElementsByTagName("h1");
const title2 = document.querySelector(".hello h1");
const title3 = document.querySelectorAll(".hello h1");
const title4 = document.querySelector(".hello h1:first-child");
const title5 = document.querySelector("#hello"); // id: hello
const title6 = document.getElementById("hello"); // 위 함수랑 같은 작업

const title = document.querySelector(".hello h1");
title.innerText = "hello";

console.log(title);