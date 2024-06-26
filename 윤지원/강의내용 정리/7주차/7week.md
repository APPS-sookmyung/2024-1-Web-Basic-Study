# 5.0 파일 분리

파일을 분리할 때는 파일 경로도 변경해줘야 한다.
interval: 매번 일어나야 하는 작업을 실행. 내장 함수 setInterval(실행함수, 간격(ms)) 사용. 1초 = 1000ms.

# 5.1 시계 표시

timeout: 일정 시간이 지난 후에 함수를 실행. setTimeout(실행함수, 기다릴시간(ms)) 사용.
JavaScript의 Date 객체 활용:

const date = new Date();
date.getDate();
date.getDay();
date.getFullYear();
date.getHours();
date.getMinutes();
date.getSeconds();

# 5.2 한 자릿수 문제

한 자릿수 숫자를 두 자릿수로 만들기 위해 padStart 사용:
"1".padStart(2, "0"); // 결과: "01"
.padEnd(문자 길이, 아닐 시 뒤에 추가할 문자)도 유사하게 사용 가능.

# 6.0 랜덤 명언

랜덤 숫자 생성:
Math.random(); // 0과 1 사이의 난수 생성
Math.round(); // 반올림
Math.ceil(); // 올림
Math.floor(); // 내림
Math.floor(Math.random() \* 10); // 0~9 사이의 랜덤 숫자 생성

# 6.1 랜덤 배경화면

HTML 요소 생성 및 추가:
const bgImage = document.createElement("img");
document.body.appendChild(bgImage);

# 7.1 요소 추가

ul 안에 li와 span 요소 추가:
'''const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);'''

# 7.2 투두 제거

클릭된 버튼을 확인하고 부모 요소를 찾기:
'''function deleteToDo(event) {
const li = event.target.parentElement;
li.remove();
}'''

# 7.3 투두 저장 및 불러오기

localStorage에는 텍스트만 저장 가능. 화면에 불러오기와 중복 처리.
JSON.stringify()로 배열을 문자열로 변환하여 저장:
'''function saveToDos() {
localStorage.setItem("todos", JSON.stringify(toDos));
}'''

# 7.4 투두 불러오기

JSON.parse()로 localStorage에 저장된 문자열을 배열로 변환:

'''const savedToDos = localStorage.getItem("todos");
if (savedToDos) {
const parsedToDos = JSON.parse(savedToDos);
parsedToDos.forEach(paintToDo);
}'''

# 7.5

toDos를 빈 배열로 업데이트하는 문제 해결: let toDos = [];

# 7.6 삭제 시 업데이트

투두 항목에 id를 저장하여 삭제 시 업데이트:
'''
const newTodoObj = {
text: newTodo,
id: Date.now(),
};
'''

# 7.7 필터링하여 새 배열 만들기

조건에 맞지 않는 항목을 제외한 새 배열 생성:

'''
function deleteToDo(event) {
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
saveToDos();
}
'''

# 7.8 타입 변환 문제 해결

parseInt()를 사용하여 타입 변환:
javascript
코드 복사
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
