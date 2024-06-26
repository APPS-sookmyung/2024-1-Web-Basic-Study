## < #2.9 - #3.2 >

### #2.11 Returns
- 함수: 결과 값을 반환할 수 있고 반환하지 않을 수도 있다
- return을 사용해 결과 값을 반환할 수 있다
- 함수는 결과 값을 return하면 종료된다
- 함수 안에서 return 이후에 작성된 코드는 실행되지 않는다

```JavaScript
const krAge = calculateKrAge(96) // 한국 나이 계산해주는 함수
```
=> 함수의 리턴 값이 krAge 변수에 들어간다

---
### #2.13 ~ #2.15 Conditionals (조건문)
**prompt():** 
- 사용자에게 창을 띄워 값을 입력하게 한다
- 창에 message를 나타내 사용자에게 어떤 값을 입력하는지 말해줄 수 있다
- 사용자로부터 값을 받기전까지 자바스크립트 실행을 멈춘다 (입력을 기다림)
- 최근에는 많이 사용되지 않음

**typeof:** 변수의 type을 알려준다 <br>
**parseInt():** string을 int으로 바꿔주는 함수 <br> 
**NaN:** Not a Number (숫자가 아님) 의미 <br> 
**isNaN():** 괄호 안의 값이 number인지 아닌지 알려주는 함수 (num인 경우 false 반환);


```JavaScript
const age = parseInt( "98" );
console.log(age); // 98
```
```JavaScript
const age = parseInt( "lalalalala" );
console.log(age); // NaN
```

**if-else 조건문:**
```JavaScript
// condition은 boolean이어야 함
if (condition) {
    /// condition === true
} else { 
    /// condition === false
}
```
- if문 안에는 condition이 true일 때 실행되는 코드 입력
- else문 안에는 condition이 false일 때 실행되는 코드 입력

```JavaScript
// condition은 boolean이어야 함
if (condition) {

} else if (condition2) { 
    // condition === false && condition2 === true
}
```
**else if문:** else + if

**AND(&&)와 OR(||) 차이점:** <br>
a && b => a, b 모두 true면 true (&& == AND)
a || b => a, b 둘 중 적어도 하나가 true면 true (|| == OR)

---
### #3.0 The Document Object ~ #3.2 HTML in Javascript
**Document:** JavaScript의 관점으로 HTML을 보여준다 (like an object)
- JavaScript에서 HTML을 읽어올 뿐만 아니라, HTML을 변경할 수도 있고, HTML에 항목을 추가할 수도 있다
- document == website 라고 생가하면 된다

**getElementById():** HTML에서 해당 id를 갖는 element를 찾아주는 함수 <br> 
**getElementsByClassName():** element를 class 이름으로 가져오는 함수 <br> 
**getElementsByTagName():** element를 tag로 가져오는 함수 <br> 
**querySelector():** element를 CSS 방식으로 검색해 가져오는 함수 (element 여러개 존재할 경우: 첫번째 element만 가져옴) <br> 
**querySelectorAll():** selector 안의 조건에 부합하는 모든 element를 가져오는 함수 
