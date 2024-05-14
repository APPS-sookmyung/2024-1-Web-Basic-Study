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