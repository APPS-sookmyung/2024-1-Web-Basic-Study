# 5.0 Intervals

특정 간격마다 함수가 실행 될 수 있음
setInterval(함수, 초)

# 5.1 Timeouts and Dates

setTimeout(함수, 초); : 특정한 시간이 흐르면 함수를 실행함

시계 만들기
function getClock() {
const date = new Date();
clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
시, 분, 초를 가져올 수 있음
getClock();를 써서 시간 지연 없이 시작 가능
setInterval(getClock, 1000); 초가 흐르게 하는 역할

# 5.2 PadStart

"1".padStart(2, "0") : 길이가 2가 되게 하고 2가 되지 않으면 앞에 0을 추가한다. -> 01로 출력 가능

const hours = String(date.getHours()).padStart(2, "0"); : getHours()로 가져오는 건 정수니까 String()을 사용하여 문자열로 바꿔준 후 적용 가능

# 5.3 Recap

# 6.0 Quotes

Math.random()의 사용. \*10을 사면 0부터 10까지의 수를 얻을 수 있음.(소수점 아래 수가 존재)

Math.round() : 반올림
Math.ceil() : 소수점 아래 수가 있으면 무조건 다음 정수로
Math.floor() : 소수점 아래 수 버림
위 메소드를 사용하여 해결 가능

# 6.1 Background

랜덤 이미지를 삽입하기
const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * quotes.images)];

\*\* const bgImage = document.createElement("img"); -> img 요소 만들어 주고

bgImage.src = `img/${chosenImage}`;

\*\* document.body.appendChild(bgImage); -> body 태그에 붙여줌

# 6.2 Recap

# 7.0 Setup

to do 리스트 만들기
const newTodo=toDoInput.value;
toDoInput.value = "";
입력 받은 값을 저장하고 입력 란을 비워줌

# 7.1 Adding ToDos

const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
span.innerText = newTodo;

  <li>
    <span>"new"</span>
  </li>의 형식을 만들 수 있음

# 7.2, 7.6 ~ 7.8 deleting to dos

function deleteToDo(event) {
const li = event.target.parentElement;
li.remove();
}
목록에서 요소를 삭제할 수 있음. (부모 요소로 부터 삭제)

const newTodoObj = {
text:newTodo,
id: Date.now(),
};
중복된 내용이 들어왔을 때를 생각하여 id로 목록을 구분할 수 있게 함

.filter(함수) 함수의 사용 -> 함수에서 true가 반환되어야 값이 유지될 수 있음

function deleteToDo(event) {
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
saveToDos();
}
목록을 삭제하는 최종 함수. filter함수를 사용하고 다시 saveToDos()를 해줘야 함.

# 7.3 saving to dos

배열을 하나 생성하고 목록을 입력받을 때마다 push한다.
function saveToDos() {
localStorage.setItem("todos", JSON.stringify(toDos));
}
함수를 사용하여 localStorage에 저장 가능. JSON.stringify는 string 형식으로 저장하기 위함.

# 7.4 ~ 7.5 loading to dos

\*\* const savedToDos = localStorage.getItem("todos");

if (savedToDos) {
const parsedToDos = JSON.stringify(saveToDos);
parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
화살표 함수의 사용. 외부에서 함수를 정의하여 사용하는 것도 가능.

if (savedToDos) {
const parsedToDos = JSON.stringify(saveToDos);
toDos = parsedToDos;
parsedToDos.forEach(paintToDo);
}
입력된 todo를 가져올 수 있음
