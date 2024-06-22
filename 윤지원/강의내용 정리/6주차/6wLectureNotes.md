3.3 Events
js파일을 통해 html의 내용을 가져올 수 있다. html이 js파일을 가져온 다음에 브라우저를 통해 document에 접근할 수 있게 해준다.

- console.dir():element의 내부. js 의 object를 표시해준다 .element 중 앞에 on이 붙은 것들은 event임
  js에서는 event를 listen함.
- eventListener : event를 listen → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click")
- title.addEventListener("click",handleTitleClick)
  클릭이벤트 -> js에서 구성
- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것

  3.3~3.5 Event 이어서
  listen하고 싶은 event를 찾는 가장 좋은 방법 3가지:

1. 구글에 찾고 싶은 element의 이름 검색하기: h1 html element mdn(mozilla developer network)
2. web APIs 포함 페이지에서 찾음 =JS 관점의 HTML heading element
3. 복잡하면 element를 console.dir로 출력해서 on~ 이라고 적혀있는것 찾기

통상적으로 style 변경은 css로 함.

how to listen to events: use addEventListener() or by assigning an event listener to the <oneventname> property of this interface

But addeventlistener is more recommended -> can eliminate event listener by remoeveEventListener

window object이용하기
원리는 앞선 event와 같다. 함수정의->event listener 추가 -> event 발생시 반응

1. resize event
   코드 : window.addEventListener("resize", handleWindowResize);
2. copy event
3. wifi event (offline, online)

body는 특별해서 document.body (head,title) 이런 식으로 호출할 수 있지만 나머지 element들은
==> document.div 가지고 올 수 없음.
querySelector, getElementById 등으로 찾아와야 함.

steps

1. find the element
2. listen for the event
3. react for the event( show, hide, change)

3.7 ~3.8 css in javascript
누르면 색 변환 -> if h1.className=='clicked'
html에서 하나 변환하면 css와 js 둘다 변경해줘야함-> 번거러움  
해결방법: 클래스 이름을 바꾸기 위해 classList 를 사용한다.
<js에서 사용할 수 있는 방법>
classList: makes you to work with the classlistclassName: 이전 class 상관 업시 모든걸 교체해 버림
contain:class가 html class에 포함되어 있는지 확인
toggle: 토큰 존재-> 제거

4.0
input과 버튼 만들기 => 구분할수있도록 id부여해줘야 함  
querySelector() :대상이 id인지 명확히 해줘야 함. classname, tagname 전부 검색 가능함.
getElementByID는 only id

document 또는 하나의 element를 통해서 검색 가능함
input 텍스트를 콘솔에 나타내고 싶음 -> console.log(loginInput.value)

4.1~4.2 form submission
form 안의 속성에는 required(필수, 채워져있어야함 ), maxlength , type, placeholder 등이있다.

to trigger input validation-> 반드시 form안에 input을 넣어야함
input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다.

조건문 선호 X -> html에 input 창에 폼속성 활용.
문제: 버튼을 클릭할때 자동으로 form submit(새로고침)된다는 것. 또는 form안에 있는 버튼을 눌렀을 떄, 이 떄도 form 이 자동으로 submit 되는 것

addEventListener 안에 있는 함수는 직접 실행하지 않음. function의 이름만 적어줌->지정한 이벤트가 발생했을 때만 브라우저가 해당 function실행시킴.해당 이벤트에 대한 정보(object)를 가지게 된다.

어떻게 하면 브라우저가 새로고침하지 않고 유저 정보를 저장할 수 있을까
=> preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다
prventDefault(): EventListener 함수의 '첫 번째 argument' 안에 있는 함수

addEventListener의 함수에서 object에 대한 자리만 할당해주면 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다.

mouseevent-> 유저가 화면상 어느 위치를 클릭했는지 그 값을 반환함

4.3~4.5 event/hidden/saving username
.hidden- 요소를 가림 -> html에 class="hidden"
form 숨기기 위해 hidden이라는 class name더해주고 유저의 이름을 변수로 저장, h1에 할당한 뒤 remove hidden해줌으로써 숨겨졌던 문구+ username이 나타난다
visibility:hidden-공간은 그대로 두고 보이지 않음 display:none- 잡아둔 공간도 사라짐

<유저 이름 기억하기 api: local storage >
나중에 갖다 쓸 수 있도록 브라우저에 저장을 하게 해준다. 개발자 도구의 application의 storage에 존재함
localStorage.setItem("username", username);//key &value
저장한 다음 불러오기 :
'''localStorage.getItem("username")'''
저장한거 삭제하기: removeItem

4.6 loading username ~4.7 recap
먼저 계속 반복되는 사용자 이름이 있으니까 변수로 지정해주기 const USERNAME_KEY = "username";-> 오타 나면 자바스크립트가 지적해줌
addEventListener을 하기 전에 local storage에 사용자 이름이 들어있는지 확인하기

1. 유저 정보 유무 확인, 없다면 폼 있다면 greetings
2. paintGreetings 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 됨 : 없으면 localstorage에서 호출, 사용자 이름이 존재해서 form이 sbmit 되면 onLoginSubmit 에서 paintGreetings를 호출함
