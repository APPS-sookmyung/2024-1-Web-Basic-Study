# #3.3~4.7

[https://www.notion.so](https://www.notion.so)

# #3.3 Events

자바스크립트를 통해 HTML의 내용을 가져올 수 있다는 것!! 중요. →저번 시간에 배웠던 것.

querySelector 가 최고!

→ 그 이유는 css 형식으로 요소들을 가져올 수 있기 때문

on으로 시작하는 자바스크립트 object들이 엄청 많다. 이것들은 모두 event이다.

우리는 자바스크립트의 property를 바꿄 수 있다.

→ 이걸 도대체 왜 바꿀까?

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled.png)

```jsx
const title = document.querySelector("div.hello:first-child h1")

console.dir(title);

title.style.color = "blue";
```

css에서 할 수 있는 style을 자바스크립트에서도 바꿀 수 있는것이다. 표현방법이 다름

→ 자바스크립트는 브라우저에서 굉장히 강력함을 알 수 있다.

**자바스크립트는 우리의 모든 event들을 listen 할 수 있다.**

그렇다면 event를 listen하는 법은?

→ eventListener를 추가해준다.

*이벤트를 명확히 정하고 이벤트가 발생했을때 나타날 function을 넘겨준다. 여기서 괄호를 넣지 않는 것이 매우 중요!

웹사이트에서 클릭을 감지하는 법을 배웠다.

```jsx
const title = document.querySelector("div.hello:first-child h1")
//title을 가지고 요소를 가져옴
function handTitleClick(){
    console.log("title was clicked!")
}

title.addEventListener("click", handTitleClick)
//클릭이벤트를 듣고 발생하면 function을 실행 - handTitleClick()이 아닌 이유 : 바로 실행이 아니라 조건이 맞을 때 실행시키려고.
```

# #3.4 Events part two

내가 listen 하고 싶은 event를 찾는 가장 좋은 방법은?

구글에 찾고 싶은 element의 이름 mdn을 검색해보는 것.

Web APIs라는 문장이 포함된 페이지를 찾는다.(자바스크립트 관점)

event에관한 설명이 많이 나와있음.

그것 말고도 자바스크립트에 console.dir(”요소”)를 치면

property 이름 앞에 on 이 붙어있는 것들 이 있다.

그게 바로 event listener다.

→on을 빼고 addeventlistener에 적용

자바스크립트에서는 여러 개의 이벤트를 동시에 listening 할 수 있다.

```jsx
const title = document.querySelector("div.hello:first-child h1")
//title을 가지고 요소를 가져옴
function handTitleClick(){
   title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
//클릭이벤트를 듣고 발생하면 function을 실행 - handTitleClick()이 아닌 이유 : 바로 실행이 아니라 조건이 맞을 때 실행시키려고.
```

이후 영상에서는 지금까지 배웠던 것들을 모두 사용해볼 예정

# #3.5 More Events

event내부를 살펴보고, event를 listening하는 또 다른 방법에 대해서 배워볼 것이다.

→ 또 다른 방법 : oneventname 을 사용 (onclick,onmouse…)

title.addEventListener(”click”, handleTitleClick) →

title.onclick = handleTitleClick;

하지만  addEventListener을 선호나는데 왜??

→ removeEventListener를 사용할 수 있어

**window와 관련된 event**

window element의 resize event를 listen 하는 실습

![document.body 를 통해서 정보를 가져올 수 있음. document.div 불가→중요한 정보들 head body title 이런것만 가능  ](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%201.png)

document.body 를 통해서 정보를 가져올 수 있음. document.div 불가→중요한 정보들 head body title 이런것만 가능  

```jsx
const h1 = document.querySelector("div.hello:first-child h1")
//h1을 가지고 요소를 가져옴
function handTitleClick(){
   h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
h1.addEventListener("click", handTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//h1클릭이벤트를 듣고 발생하면 function을 실행 - handTitleClick()이 아닌 이유 : 바로 실행이 아니라 조건이 맞을 때 실행시키려고.

window.addEventListener("resize", handleWindowResize);

```

**wifi와 관련된 event - animation을 위한 것**

copy event와 관련된 실습 추가 

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%202.png)

```jsx
const h1 = document.querySelector("div.hello:first-child h1")
//h1을 가지고 요소를 가져옴
function handTitleClick(){
   h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOD");
}
h1.addEventListener("click", handTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//h1클릭이벤트를 듣고 발생하면 function을 실행 - handTitleClick()이 아닌 이유 : 바로 실행이 아니라 조건이 맞을 때 실행시키려고.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline)
```

다음 영상에서는 if-else 문장을 추가할 것이다.

# #3.6 CSS in Javascipt

지금까지 작성해왔던 event listener들을 모두 지우고 시작.

→ handleTitleClick function에 초점을 맞출 예정

한번 클릭하면 블루 또 한번 클릭하면 토마토 그것을 반복하는 것이 목표

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%203.png)

```jsx
const h1 = document.querySelector("div.hello:first-child h1")

function handTitleClick(){
    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);
}

h1.addEventListener("click", handTitleClick);

```

콘솔창에 뜨는 blue 이것이 뜨기 때문에 만약 blue가 아니라면 tomato로 변경해주세요 라는 시스템을 활용!

→if문 활용

```jsx
const h1 = document.querySelector("div.hello:first-child h1")
//h1을 가지고 요소를 가져옴
function handTitleClick(){
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";
    }else{
        h1.style.color = "blue";
    }
}

h1.addEventListener("click", handTitleClick);

```

h1.style.color를 많이 쓰는 것보다 현재 상태를 저장하는 것을 해볼것

→ 

```jsx
const currentColor = h1.style.color;
```

```jsx
const h1 = document.querySelector("div.hello:first-child h1")
//h1을 가지고 요소를 가져옴
function handTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor
}

h1.addEventListener("click", handTitleClick);

```

강사님은 element의 style을 자바스크립트에서 변경하는 것을 별로 좋아하지 않으신다.(언어섞는 것을 방지하기 위함)

# #3.7 CSS in Javascript part Two

style작업에 적합한 것 : CSS

animation작업에 적합한 것 :  Javascript

각자의 용도에 맞게 사용하는 것이 중요

오늘 해볼 실습은 javascript에서 h1에 active class를 전달해주는 것.

```jsx
function handTitleClick(){
     h1.className = "active"
}

h1.addEventListener("click", handTitleClick);

```

위에서 h1.className은 getter 이면서 setter이다.

string을 변수에 저장하는 것은 아주 유용하다.

→ 우리가 스펠링 실수를 했을 때 에러가 나면서 뭐가 잘못되었는지 알려줄 수 있기 때문이다.

우리는 보통 프로그래밍을 할때 원래의 html 클래스를 건들지 않으면서 유지하면서 자바스크립트를 작성해야한다.

# #3.8 CSS in Javascript part Three

classList는 class들의 목록으로 작업할 수 있게끔 허용해준다.

→그와 달리 className은 이전의 class를 고려하지 않고 모든걸 바꿔버린다.

```jsx
const h1 = document.querySelector("div.hello:first-child h1");

function handTitleClick(){
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handTitleClick);

```

![classList를 사용하여 class가 완전히 바뀌는게 아니라 sexy-font class를 유지하면서 clicked class를 추가 혹은 제거하는 실습 모습](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%204.png)

classList를 사용하여 class가 완전히 바뀌는게 아니라 sexy-font class를 유지하면서 clicked class를 추가 혹은 제거하는 실습 모습

**toggle function**

class name이 존재하는지 확인.

class name이 포함되었다면 제거 존재하지않는다면 추가.

```jsx
const h1 = document.querySelector("div.hello:first-child h1");

function handTitleClick(){
    
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handTitleClick);

```

위에 추가된 toggle한줄로 우리가 몇줄로 해왔던 것을 대체할 수 있다.

위에 과정

→h1태그 classList 에 classclicked가 적용이 안되어있으므로 추가 → 이후 한번더 클릭했을때는 적용되어있으므로 삭제.(이후 이 과정 반복)

이번 강의에서는 css에서 정의된 classname 들로 html요소들에서 숨기고 표시하는 법과 toggle을 다루는 법을 배웠다.

이후에는 application을 작동하는 법에 대해 배우게 될것!!!

# #4.0 Input Values

input과 button 삽입(div id=”login-form” 안에)

→ 로그인 형식을 만들기 위함.

querySelector로 검색할때는 아이디, 클래스 임을 . #을 통해 명시해줘야한다. 태그는 그냥 입력.

input태그를 통해 얻어진 값은 value를 통해 자바스크립트에 받아올 수 있다. ex) loginInput.value

# #4.1 Form Submission

이번 강의에서는 username의 유형성을 검사할 것이다

user name이 비어있어도 너무 길어도 안된다.

```jsx
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        alert("Please write your name");
    }else if(username.length>15){
        alert("Your name is too long.");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
```

input을 필수입력 항목으로 만들 수 있다.

여기서 중요한 점 !

→ input안에서 유효성 검사를 하기 위해선 form 형식 안에서의 input이여야 한다.

![required 로 인해 브라우저가 도와주고 있다.](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%205.png)

required 로 인해 브라우저가 도와주고 있다.

```html
 <form id = "login-form">
            <input required maxlength="15" type = "text" placeholder = "what is your name?"/>
            <button>Log In</button>
  </form>
```

form을 제출하기 때문에 나의 웹사이트는 제출할때마다 페이지가 바뀜.

*우리가 form안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit되는 규칙이 존재.

다음강의에서는 form이 submit되는 것을 막는 방법에 대해서 배울것임. 제출되면서 새로고침이 되는 것을 막기위함.

# #4.2 Events

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

위와 같이 했을때 username을 받아오지만 새로고침은 막지 못한다.→ enter또는 버튼을 누를때 기본동작이 발생하지 않도록 하는 법은??

event가 발생할때 브라우저가 function을 실행시키고 있기는 하지만 ()사이를 비어있는 채는 아니다.

```jsx
function onLoginSubmit(tomato){
    tomato.preventDefualt();
    console.log(tomato);
}
```

이 function이 하나의 argument를  받도록 하고 그걸 JS에 넘겨주고 있는 상황

→ preventDefualt function이 하는 일은 어떤 event의 기본행동이든지 막는 것.

![제출되는 것을 막았기 때문에 콘솔창에 출력가능.](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%206.png)

제출되는 것을 막았기 때문에 콘솔창에 출력가능.

# #4.3 Events part two

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%207.png)

이런식으로 alert가 모든 동작을 막기때문에 보통 사용하지 않는다. 하지만 확인을 누르면 실행이 되긴 한다.

우리는 기본동작을 막아야 될때가 있다.

자바스크립트는 함수를 실행 시켜줄 뿐만 아니라 그 함수에 첫번째 인자로 object를 넣어준다.

→ 우리가 할 것은 받는것

click 이 일어났기 때문에 mouseEvent가 발생하고 preventDefualt 함수를 이용하여 기본동작을 막고 정보를 불러올 수 있다.

# #4.4 Getting Username

유저가 이름을 제출하면 form자체가 사라져야하는 것을 원한다.

1. html을 완전히 없애거나
2. css에서 hidden class를 사용하거나

```css
.hidden {
    display:none;
}
```

→ 유저가 사용자 이름을 제출한 후여야함.

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

```

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%208.png)

제출하고 난후 console창에는 value값을 남기고 form은 hidden 된 것을 볼 수 있다.

*관습 : 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다., 중요한 정보를 담고 있지 않을때도.

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = "Hello"+username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

loginForm.addEventListener("submit", onLoginSubmit);

```

위에 “hello” + username은 문자열을 더하는 것으로 간격도 생겨서 좋아하는 방식이 아니다. 

- `hello ${username}` 과 같은 결과를 낸다.

→ 둘 다 변수를 string과 합치게 해준다.

후자가 더 새로운 방법인데

2가지 규칙이 있다.

1. `${변수명}` 이며 2. `(**백틱** 기호)가 감싸고 있어야 한다.

# #4.5 Saving Username

form은 지금 submit을 기다리고 있다.

submit을 하게 되면

1. 브라우저의 기본 동작을 막게 된다.

value를 저장하는 법

→ 매번 user에게 물을 수 없기 때문에

뭔가를 저장하는 것을 아주 자주사용하는 기능

ex) 유튜브에서 영상을 시청할때 볼륨을 기억하는 것.

우리가 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능이 존재! →local starage

API? → local strage : 우리가 브라우저에 뭔가를 저장할 수 있게 해준다. 그래서 나중에 가져다 쓸 수 있다.

*마치 작은 미니 DB, 우리는 key와 value만 있으면 된다.

localstrage에 뭐가 들었는지는 개발자도구 Local Storage를 사용

console에 localStorage입력

![이미 정의되어 있는 localStorage](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%209.png)

이미 정의되어 있는 localStorage

local storage API를 살펴보면 다양하고 멋진 method들을 보게 될 것이다.

- setItem → local storage에 정보 저장
- getItem → 값을 저장한고 난 후 불러오기

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%2010.png)

- removeItem → 삭제도 가능

![Untitled](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%2011.png)

username을 저장 가능하다.

하지만 새로고침하면 여전히 form이 표시.,, 바가지 않는것. → 다음 영상에서는 localstorage에 값이 존재한다면 form을 삭제, 존재하지 않는다면 form이 나타나게 할 것이다.

# #4.6 Loading Username

form을 보여주기 전에 addEventListener를 하기 전에 확인해줘야한다.

이 때 local storage가 비어있으면 form 부터 보여주면서 지금까지 해오던 걸 하면 된다.

 But, local storage에 유저정보가 있으면 form을 보여주면 안된다.→h1요소를 보여줘야 한다.

우리가 할 일은 local storage에 유저정보 유무를 확인하는 것!!

→ 어떻게??

```jsx
const savedUsername = localStorage.getItem("username");

console.log(savedUsername);
```

![local storage에 username을 삭제하고 없을때는 null값을 받는다.](#3%203~4%207%20203c0761131f49ecb64647c502d0d983/Untitled%2012.png)

local storage에 username을 삭제하고 없을때는 null값을 받는다.

위에서도 말했듯이 자주 사용하는 string의 오타를 없애기 위해서 변수에 string을 저장하여 사용!

→ 변수명이 오타가 나면 자바스크립트가 지적해줌.

→간단한 정보를 가진 변수들을 대문자로 저장해놓으면 실수를 만들고 싶지않은 string이라는 것을 상기시켜서 좋다.

form과 greeting모두 숨겨둔 채로 시작

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = "Hello"+username;

    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    greeting.innerText = "Hello"+savedUsername;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

위에서 문제점 : innerText를 똑같이 반복 2번 하고 있다.

→ 함수로 만드는게 나을지도 모른다.

```jsx
function paintGreetings(username){
    greeting.innerText = "Hello"+username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

```

# #4.7 Super Recap

지금까지 해왔던 것들에 대한 복습

유저가 처음 왔을 때 null상태에서 시작

savedUsername 이 null이면 form이 표시 → hidden이 삭제돼서

submit 이 발생하면 onlogin도 발생

→ 기본동작을 막아주고 새로고침

form을 다시 숨겨준다.

loginInput.value를 username에 넘겨준다.

username값을 key와 value로 묶어서 저장.