## 2.9 Recap

- `var` 쓰지 말것 `let`이랑 비슷하긴 함.
- `true` `false`는 `text`가 아님
- `null` stands for nothing.
- `undefined` 존재는 하지만 안에 값이 없다는 뜻.
- `array push` 끝에 더해짐

## 2.10 Recap 2

property

- `console`도 object였음
- **Javascipt**는 이미 너를 위한, 네가 사용할 수 있는 **object**를 가지고 있음.
- object에서도 array에서처럼 **element** 하나 갖고 올 수 있음.
- 변수는 **function의 body**에서만 사용가능한 점 주의

## 2.11 Returns

- `console.log`는 `console`에 무언가를 log하는 것(기록하여 보여줌)
  **function 내부**에서 `console.log`하는 것과 외부에서 하는 것과 큰 차이가 있음,
  **fuction 밖**에서 결과값을 얻기를 바라면 `console.log` 그만 사용해야함.
- 무언가를 `return` 하면 계산을 담당하는 **function**의 코드는 그 **function**이 `return`하는 값과 같아질 것임.

## 2.12 Recap

- **Javascript** 코드에서는 value(값)을 바로 얻을 수 없음.
  **variable**에 **function**을 할당하면 이 **variable**은 **function**의 **return value**를 가지게 되는 것.
- `return` 작성하면 거기서 **function**이 종료됨.
  function은 계속 남아있는 게 아니라 (실행되고 나면) 사라지고, 마지막엔 결과를 남김.

## 2.13 Conditionals

- `conditional`(조건문)은 **true**인지 **false**인지 알려주기 때문에 사용자가 무언가에 반응하는 것을 만들 때 아주 중요함. 우리가 check할 수 있게 도와줌.
  키워드: **if**
- `parseInt`: 함수 중 하나 converts string into a number
  **function**은 내부에서 외부로 실행됨.
- `NaN`=Not a Number

## 2.14 Conditionals part Two

`isNaN`를 사용하면 숫자인지 아닌지 알려줌 `boolean`을 반환함.

## 2.15 Conditionals part Three

원하는 한 많은 **conditional**을 연결 가능.

## 2.16 Recap

적는 순서에 대해 잘생각해야함!
**Javascript**는 **위에서 아래로** 읽기 때문에 **먼저 두어야 실행되는 경우**도 생길 수 있음(**condition**이 중첩되면).

## 3.0 The Document Object

- **HTML**은 접착제 같은 것: **CSS**와 **JavaScript**를 가져옴.
- **Javascript**에서 **HTML**을 읽어올 뿐만 아니라, **변경도 가능함.**
- **Javascript**는 이미 **HTML**과 연결되어 있음
- **Javascript**로 **HTML**을 바꾸는 것이 **HTML**을 직접 바꾸는 것보다 우선 적용됨.
- **document**가 website를 뜻해서 모든 것의 시작이 됨

## 3.1 HTML in Javascript

- **Javascript**로 **정보를 가지고 올 수 있는 방법**은 **document 객체와 element**를 가져오는 수많은 함수들을 이용하는 것.
- `console.dir()`이라고 작성하면 **element**를 더 자세하게 보여줌.
  > Javascript에서 HTML element를 가지고 올 수 있게 됨, 어떤 HTML element이든지 간에 가져올 수 있고 변경할 수 있음.

## 3.2 Searching For Elements

- **HTML**코드와 **HTML element**를 **Javascript**로 접근하는 방법
- `queryselector`는 element를 **CSS** 방식으로 검색 가능하게 함, **하나의 element만 반환함** = 여러 개이면 array가 아니라 **첫번째만** 가져옴.
- `querySelectorAll`이 **array다** 가져옴.
- `queryselector`는 CSS selector를 사용하여 검색할 수 있음
  > Javascript에서 HTML element를 가져오고 검색하는 것을 배움.
  > 거의 항상 querySelector를 사용할 것이고 가끔 getElementById 혹은 querySelectorAll
