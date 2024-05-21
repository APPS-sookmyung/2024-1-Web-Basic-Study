# WEEK6

## Event

사용자의 움직임.

console.dir애서 on~은 이벤트임. 이 항목들은 모두 자바스크립트

어떤 event를 listen함으로 연결시킨다.

이름.addEventListener(”click”, 함수) > 자바스크립트가 실행되면 뒤의 함수를 대신 눌러주는 개념

event 이름 구글링 팁: “h1 html element mdn” > Web APIs있는 항목 찾기

 또는 console.dir이용 가능

title.onclick = “기능” ==  title.addEventListener(”이거 하면”, 이거 실행)

addEventListener는 .removeEventListener로 지울 수 있음

Event 종류: mouseenter, mouseleave, resize, click, copy, offline, online

getter: 값을 받음/ setter: 값을 설정

## JavaScript, CSS 연결

 JavaScript: h1.className = "active";

CSS: .active {color: beige;}

css연결과정에서 오타날 수 있음 > 1. 변수 생성   2. classList

toggle: class name이 존재하는지 확인, 있으면 삭제, 없으면 추가

<form><form/>: input의 유효성 검사 작동

required maxlength, placeholder, 

## LogIn

preventDefault(): 어떤 event의 기본 행동이든지 발생되지 않도록 막는 함수

form의 기본행동: submit

function의 기본행동: 새로고침

link의 기본행동: 클릭 시 다른 페이지로 이동

alert는 모든 행동을 멈추게 함.

일반적으로, string만 포함된 변수는 all대문자로 표기.

`string ${변수 이름}` → { }부분만 변수값으로 바꿔줌. (백틱(`) 주의!)

local storage에 저장: setItem(key, value)