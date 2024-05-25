# 5.0
파일 분리시키기 -> 이동할 시 파일경로도 바꾸줘야함
interval: 매번 일어나야 하는 무언가.
내장함수
setInterval(실행하는함수, 간격(ms)) 1s = 1000ms

# 5.1
시계 표시하기
timeout: 일정 시간 이후 함수를 실행
setTimeout(실행함수, 기다릴시간(ms))
JavaScript에 있는 Date object 활용
new Date() 현재 날짜와 시간 가져옴
const date = new Date()
date.getDate()
date.getDay()
date.getFullYear()
date.getHours()
date.getMinutes()
date.getSeconds()

# 5.2
한 자릿수로 나오는 문제 1 -> 01
최소한 두 개의 문자를 가져야함
.padStart(문자 길이, 아닐 시 앞에 추가할 문자)
.padEnd(문자 길이, 아닐 시 뒤에 추가할 문자)

# 5.3
복습
명언 10개 알아오기

# 6.0
랜덤으로 명언 띄우기
randomness
Math 모듈
.random()
.round() 반올림
.ceil() 올림
.floor() 내림
0~9까지 랜덤 숫자
Math.floor(Math.random() * 10)

# 6.1
랜덤 배경화면
.createElement() html에 추가하기
document.body.appendChild()

# 6.2
복습

# 7.0
투두리스트 만들기(인사하기와 비슷함.)