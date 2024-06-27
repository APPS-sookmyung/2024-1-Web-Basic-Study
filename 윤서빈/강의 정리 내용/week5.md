# 5주차

#2.9-#3.2

### recap

let은 const와 같은 일을 함

차이점은 업데이트가 가능하다는 것

규칙 : 거의 const 사용 / 가끔 let 사용 / var는 절대 금지

push : array 끝에 item 을 하나 더 추가하는 것

object 를 만든 이후에 object 안에 새로운 item 을 만드는 것도 가능

### returns

data를 얻어서 무언가를 해야함

return을 하게 되면 해당 function부분이 return 한 값으로 바뀜

return 을 하는 순간 function 은 종료됨

### conditionals

- if-else
    - const age = prompt('How old are you?');
    
    → js 를 일시정지시킨다. 이래서 prompt를 사용하지 않음
    
- boolean 값을 받아야만 if-else 문 실행 가능
- elif : 조건이 여러가지일 경우 사용
- t || t === t
- f || t === t
- t || f === t
- f || f === f

### the document object

document는 브라우저에 이미 존재하는 object

js 의 관점에서 보여줌 - javascript 에서 html document 객체로부터 title 을 가지고 올 . 수 있음

### html in js

const title = document.getElementById("title");

title.innerText = "Got you!"; → html 의 제목을 변경할 수 있음

### searching for elelments

class name을 가져오거나 추가할 수 있음

text를 가져오거나 변형할 수도 있음

id를 사용하기 편리하지만, 보통 classname을 사용하거나 둘 다 사용함

getElementsByClassName : 한번에 여러 요소를 가지고 와야할 때

queryselector : element를 CSS 방식으로 검색할 수 있음 / 단 하나의 element를 return 해줌

queryselectorAll : selector 내에 조건에 부합하는 모든 element를 return 해줌