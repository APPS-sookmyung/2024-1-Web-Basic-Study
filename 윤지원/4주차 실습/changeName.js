const div = document.querySelector("#root");
const form = document.createElement("form");

const inputName = document.createElement("input");
inputName.placeholder = "이름을 적어주세요";

const inputBtn = document.createElement("button");
inputBtn.innerText = "제출";

div.appendChild(form);
form.appendChild(inputName);
form.appendChild(inputBtn);

const titleName = document.querySelector("#name");
const submitNameEvent = (event) => {
  event.preventDefault();
  const inputValue = inputName.value;
  titleName.innerText = inputValue; //가져온 value값으로 변환
  //console.log(event);
};
form.addEventListener("submit", submitNameEvent);
