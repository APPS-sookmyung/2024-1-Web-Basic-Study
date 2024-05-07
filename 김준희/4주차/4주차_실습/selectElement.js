// // 클래스명으로 요소 선택
// const findGroup = document.getElementsByClassName("find");
// const [btn, span] = findGroup;

// btn.innerHTML = "찾았다!";
// span.innerHTML = "찾았다!";

// // id면으로 요소 선택
// const findBtn = document.getElementById("btn");
// findBtn.innerHTML = "Find by id!";

// querySelector
const queryBtn1 = document.querySelector("div .find:first-child");
const queryBtn2 = document.querySelector("#btn");

queryBtn1.style.backgroundColor = "green";
queryBtn2.style.color = "blue";

