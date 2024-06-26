const title = document.getElementById("something");
title.innerText = "got you!";
console.log(title.className);
const title1 = document.getElementsByTagName("h1");
console.log(title1);
const title2 = document.querySelector(".hello h1");
//select all:
const selectall = document.querySelectorAll(".hello h1");
//returning only the first one
const onlyFirst = document.querySelector("hello h1:first-child");
