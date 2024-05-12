const div = document.querySelector("#root");
const form = document.createElement("form");

const inputName = document.createElement("input");
inputName.placeholder = "이름을 작성해주세요";

const inputBtn = document.createElement("button");
inputBtn.innerText = "제출";

div.appendChild(form);
form.appendChild(inputName);
form.appendChild(inputBtn);

//event
const titleName = document.querySelector("#name");
const submitNameEvent = (event) => {
  event.preventDefault();
  const inputValue = inputName.value;
  titleName.innerText = inputValue;
  //console.log(event);
};
form.addEventListener("submit", submitNameEvent);
