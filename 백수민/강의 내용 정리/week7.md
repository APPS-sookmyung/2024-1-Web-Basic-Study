## < #5.0 - #7.8 >

### #5 CLOCK
- **interval**: 매번 일어나야 하는 무언가
- **setInterval(function, time))**: 일정 시간 간격을 두고 반복적으로 함수 호출
- **setTimeout(function, time)**: 일정 시간이 지난 후 함수 호출

```JavaScript
function sayHello() {
    console.log("hello");

setInterval(sayHello, 5000) // 5초에 한 번씩 sayHello 함수 호출
setTimeout(sayHello, 5000) // 5초 후 sayHello 함수 호출
}
```
- **padStart(maxLength, fillString**): 문자열의 시작을 특정 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환하는 함수 (padding을 추가해줌)
    - maxLength: 원하는 문자열의 길이
    - fillString: 채우고 싶은 문자열

```JavaScript
second = 5
console.log(second.padStart(2, "0")) // 05
```

### #6 QUOTES AND BACKGROUND
- **Math.random()**: 0-1 사이의 난수 반환
    - Math.random() * 10: 0 - 10 사이의 난수 반환
- **Math.round()**: 소수점 이하 반올림
- **Math.ceil()**: 소수점 이하 올림
- **Math.floor()**: 소수점 이하 버림
- **document.createElement(tagName)**: tagName의 HTML 요소를 만들어주는 함수

```JavaScript

Math.ceil(1.1) // 2
Math.floor(1.9) // 1

const btn = document.createElement("button"); // html에 새로운 버튼 요소 생성
btn.innerText = "Click me";
document.body.appendChild(btn); // body 안에 넣어주기
```

### #7 TO DO LIST
- **JSON.stringify()**: JS object, array 등을 string으로 만들어줌
- **JSON.parse()**: string을 JavaScript object로 변환
- **array.forEach(function)**: function을 array 배열의 요소마다 실행함
- **localStorage**: 데이터베이스를 복사해두는 곳
- **array.filter(함수)**: 제외하고 싶은 item을 빼고 새로운 array를 만들어줌
    - 함수의 리턴 값이 false인 경우 item 제외