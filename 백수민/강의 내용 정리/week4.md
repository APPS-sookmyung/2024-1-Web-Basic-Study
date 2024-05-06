## < #1.0 - #2.8 >

### 1. Why JS?

- 자바스크립트(JS)는 10일만에 만들어진 프로그래밍 언어
- 탄생 계기: 인터렉티브(interactive) 웹 사이트 개발 목적
- 프론트엔드에 쓸 수 있는 유일한 언어 (장점이자 단점)
- 백엔드의 경우 루비, 파이썬, 고, 자바 등 다양한 프로그래밍 언어 존재. But, 프론트엔드의 경우 JS 외 선택지가 없음
- 이미 많은 웹사이트가 JS를 기반으로 만들어졌기 때문에 새로운 언어를 개발하기 보다는 JS를 개선하고 업데이트하는 형식
- 브라우저에 내장되어 있으므로 따로 설치가 필요하지 않음 (브라우저가 있으면 JS도 있다)
- 브라우저에 있는 큰솔은 자바스크립트와 상호작용하기 좋지만 긴 자바스크립트 프로그램을 작성하기엔 유용하지 않음 => So, 텍스트 에디터 사용
- HTML은 브라우저와 CSS, JS 파일 사이의 중간접착제 역할을 함; 브라우저에서 HTML 파일을 열고, HTML 파일은 CSS와 JS 파일을 가져온다.

--- 
### 2.1 Basic Data Types

**Data Types(자료형)**:

- integer (정수):
    - eg) 1, 2, 99
- float (소수):
    - eg) 2.3, 0.8, 1.3
- text (문자):
    - eg) "hello", "1234"
- string (문자):
    - eg) "my name is John"

--- 
### 2.2 Variables

**변수(variable)** 에 값을 저장할 수 있음

```JavaScript
const a = 5;
const b = 2;
const myName = "John"

console.log(a + b); // 7
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log("hello " + myName); // hello John
```
- 변수 이름에 공백 있으면 안됨
- camelcase (카멜 표기법) 사용
- console.log(): 괄호 안의 메시지를 콘솔에 출력하는 함수

---
### 2.3 const and let
- **const**
  - constant(상수)
  - 선언 후 값을 변경할 수 없음 (업데이트 불가)
  - 값 변경 시도 시 Uncaught TypeError: Assignment to constant variable 발생
  - 값이 절대 바뀌면 안되는 변수 생성 시 유용

- **let**
  - 변수 값을 변경할 수 있음

```JavaScript
let myName = "John";
console.log("Hello " + myName); // Hello John

myName = "Jonathan";
console.log("your new name is " + myName); // your new name is Jonathan
```
기본적으로 const를 사용하고, 변수의 업데이트가 필요할 때만 let 사용 권장
var는 어디에서든 업데이트가 된다는 단점이 있긴 때문에 사용을 지양함

#### * Always const, sometimes let, never var 기억하기 *

---
### 2.4 Booleans

**Boolean** is..  **true** or **false**

- **null**:
    - "아무것도 없음"을 의미함; 
    - false와 다름; false에는 false라는 값이 존재
    - 자연적으로 발생하지 않음
    - 변수 안에 아무것도 없다는 것을 확실히 하기 위해 씀 (비어있다는 것을 의도적으로 표현)

- **undefined**:
    - 변수를 만들고 값을 주지 않았을 때, 그 변수는 undefined
    - 컴퓨터 메모리 상에 변수는 존재하지만 값이 정의되지 않음

```JavaScript
const amIFat = null;
let something;

console.log(amIFat); // null
console.log(something); // undefined
```

---
### 2.5 Arrays

**배열(Array)**: 
- 가장 기본적인 데이터 구조
- 항목들의 나열
- 시작과 끝을 대괄호로 감싸주고 각각의 항목을 쉼표로 분리해주어야함

```JavaScript
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// 위 변수들을 배열로 Grouping함
const daysOfWeek = [mon, tue, wed, thu, fri, sat]; // array

// array안의 특정 항목을 가져오기
// Get Item from Array
console.log(daysOfWeek[5]); // sat

// array안에 항목 추가하기
// Add one more day to the array
daysOfWeek.push("sun");
```

---
### 2.6 Objects

**객체(Object)**:
- 여러가지 속성을 담을 수 있음
- 콘솔 또한 객체

```JavaScript
const player = {
    name: "nico",
    points: 10,
    fat: true,   
};

console.log(player); // {name: "nico", points: 10, fat: true}
console.log(player.name); // nico

//속성에 접근하는 방식 
console.log(player.name);
console.log(player["name"]);

//속성 update
console.log(player.fat); // true
player.fat = false;
console.log(player.fat); // false

//속성 추가
player.lastName = "potato";
```
---
### 2.7 - 2.8 Functions part One & Two

**함수(function)**:
- 반복해서 사용할 수 있는 코드라고 생각하면 이해하기 쉬움 (재사용)
- 코드를 캡슐화하여 여러 번 실행할 수 있게 해줌

```JavaScript
function sayHello() {
    console.log("Hello!");
}

sayHello(); // "Hello!"
sayHello(); // "Hello!"
sayHello(); // "Hello!"
```
 
```JavaScript
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10); // "Hello my name is nico and I'm 10
sayHello("dal", 23); // "Hello my name is dal and I'm 23
sayHello("lynn", 21); // "Hello my name is lynn and I'm 21
```

```JavaScript
function plus(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function divide(a, b) {
    console.log(a / b);
}

console.log(firstNum); // Uncaught ReferenceError: firstNum is not defined
plus(8, 60); // 68
divide(98, 20); // 4.9
```

```JavaScript
const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " +  otherPersonsName + " nice to meet you!");
    }
}

console.log(player.name); // nico
player.sayHello("lynn"); // hello lynn nice to meet you!
```