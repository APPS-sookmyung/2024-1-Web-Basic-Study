4주차_#1.0 - #2.8
======
# 2.2 - 2.3 변수
변수들 
const 변경 불가
let 업데이트 가능
var 쓰지마 (옛날 버전, 무엇을 원하는지를 정확히 알기 힘듦)
const, let 사용이 더 좋음 

# 2.4 boolean
Booleans - true or false

# 2.5 배열 
Array
const daysOfWeek = ["mon", "tue", "wed"]
0부터 시작
daysOfWeek[0] = mon
daysOfWeek[1] = tue
daysOfWeek[2] = wed

# 2.6 object
const playerName = "유진";
const playerAge = 23;
이렇게 하나하나 작성하기보다는 

const player = {
    name: "유진",
    age: 23
};
object를 만든 후에 안에 속성을 작성 

# 2.7 함수
function sayHello() {
    console.log("hello my name is")
}

sayHello("유진");
sayHello("nico") 
> 유진, nico 출력이 안됨 

# 2.8 
function sayHello(nameOfPerson,age) {
    console.log("hello my name is" + nameOfPerson + age)
}

sayHello("유진", 10);
sayHello("nico", 21);
> [데이터를 주고 받는 방법] nameOfPerson,age 변수를 통해 해결 가능 

# 2.11 
console > alert로 바꿔주면 경고창으로 계속 출력! (신기)
console > return으로 바꿔주면 콘솔창에는 아무 변화 없음 

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10); 
>> 서로 의존적인 코드!

# 2.12
근데 왜 굳이 console 대신에 return을 사용해야하나?
- console은 콘솔에 결과를 보여주기 위한 것
- alert는 브라우저에 결과를 보여주기 위한 것  
- return은 콘솔이 아닌 화면에 출력!

# 2.13
prompt는 아주 오래된 방법 > css로 수정, 꾸미기 불가 
자신이 만든 html, css로 입력값 받기 
[type 변경]
parseInt() : string > number

# 2.14
isNaN : boolean을 반환
예 15 > False : NaN이 아니라는 뜻, 즉 age가 num이다. 

if(condition) { // condition에 boolean
}

# 2.15 
두가지 조건
AND : &&
OR : ||

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false

# 2.16
else if (age > 80) {
    멋져요
} else if (age === 100) {
    대단해요
}
이런 순서면 age=100일 때 '대단해요'가 출력이 안되고, '멋져요'에서 끝나버림
>> 이렇게 순서 수정해주기 
else if (age === 100) {
    대단해요
} else if (age > 80) {
    멋져요
}

= : value 할당
=== : 진짜 같은지, 맞는지 판정

# 3.0 본격적인 html과 js 연결 시작!
document.title="집가고싶다" // js로 html 타이틀 변경 

# 3.1 
querySelector : element를 CSS 방식으로 검색 
예 .hello h1 
hello class 속 h1을 가지고 와라 

# 3.3 events
title.addEventListener("click") : title 클릭 이벤트 발생 시 
event를 listen -> js 에게 무슨 event를 listen하고 싶은지를 알려줘야 함
