// class
//const findGroup = document.getElementsByClassName("find");
//const [btn, span] = findGroup;

//btn.innerHTML = "찾았다!";
//span.innerHTML = "찾았다!";

// id
//const findBtn = document.getElementById("btn");
//findBtn.innerHTML = "find by id";

// query selector
const queryBtn1 = document.querySelector("div .find:first-child");
const queryBtn2 = document.querySelector("#btn");

queryBtn1.style.backgroundColor = "green";
queryBtn2.style.color = "red";


