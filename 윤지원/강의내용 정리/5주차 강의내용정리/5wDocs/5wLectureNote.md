2.9 Recap
복습
-never use var, always use const,sometimes let
-boolean 값들: null, undefined, None

2.10 Recap

const player = {
name: "jeewon", }; 객체 선언
console.log(player, console); --> console 자체를 console.log 한거임
위의 객체 중의 한 개를 업데이트 할 수 있다. console.log(player.name= "geenie");
계산기 실습 -> 콘솔 로그를 사용하여 function 안의 object를 불러낸다.
<예시>
const calculator = {
add: function (a, b) {
console.log(a + b);
};
함수 사용 코드 :calculator.add(5, 1);

2.11~2.12 Returns

실제 데이터를 받아 function 밖에서 함수를 출력하기를 원함 . 앞서 쓴 function의 계산기 함수를 alert 말고 나에게 제공하는 방법==>return -계산기 수정 version: calculator 함수를 정의하고 각 연산의 결과를 return 하고, 그 결과를 변수에 담는다. console.log를 활용해서 출력은 안되지만, 콘솔창에서 각 연산의 이름 (plus)에 접근해서 결과를 얻을 수 있다.
파이썬에서 함수에 print 문 쓰는거 지양하는거랑 똑같음

function 결과를 변수에 할당하면 그 변수는 함수의 결과 type를 가지게 됨
return 을 하면, 함수는 작동을 멈추고 결과를 리턴하고 끝내버림

2.13 ~2.16 conditionals
윈도우에 창을 띄우는 prompt(message,deafault)
prompt는 사용자로부터 메세지를 입력받도록 함  
prompt를 더 이상 안 쓰는 이유: 메세지가 별로 안 이쁘고, css를 적용시킬 수 없고, 특정 페이지는들은 이 팝업을 차단함  
type 변경하는 방법 :parseInt
parseInt 는 문자 말고 문자열 형태의 숫자를 처리할 수 있다.
isNaN -> boolean 반환함
if(condition){
실행코드=true ---실행
실행코드=false ----다음 else 값 실행
} else{}
여기서 else는 선택사항이다.

두가지의 조건을 동시에 확인하는 방법 : &&( 둘 다 true ) ,|| ( 둘 중 하나만 true)
\*\*좌우가 같다는 연산은 ===또는 ==이다
두 가지 조건이 충족돼도 한 가지만 실행된다

<중첩 condition >
if((a&&b)||(c&&d)) --> c와 d 먼저 계산 , 그 다음에 a와 b계산 .
if (True ||False||False) => True 반환

---

3.0 The Document Object
document 객체 -> 웹사이트를 의미.
콘솔 창으로 javascript 에서 Html을 읽어올 뿐만 아니라,Html을 변경할 수도 있다 document.title = "hello! from js";
document.body, location 등등 ..

3.1 HTML in Javascript
js에서 html의 id를 가져오는 방법:
getElementById => element 의id 를 써야함 (string)
js shows the object in html.

3.2 Searching for elements
getElementsByClassName() :select 많은 element (array를 반환)

- getElementsByTagName() : name을 할당할 수 있음. returns array
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
  getElementByClassName 과 달리 단 하나의 element를 return해줌
  ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- But!!!!!! 첫번째 returns only the first element among the elements
- if!!!you want to select all: querySelectorAll
  ⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello) :
  ID를 가져온다는 것을 명시한다.getElementById("hello"); 는 같은 의미!
  보통 querySelectorAll 보다 querySelector을 더 자주 씀
