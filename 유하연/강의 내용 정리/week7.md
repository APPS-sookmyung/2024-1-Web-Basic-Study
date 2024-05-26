# #5.0~7.8

# #5.0 Intervals

폴더를 여러 개 만들고 세분화하여 파일을 구성하여 구조를 단순화 시킬 수 있다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled.png)

Interval : “매번” 일어나야 하는 무언가.

ex)매 2초마다 무언가 계속 일어나게 하고 싶을 때 사용

**setInterval  → 두개의 argument를 받는다.**

setInterval(함수, 초ms)

1. 내가 실행하고자 하는 function
2. 호출되는 function 간격을 몇 ms로 할지(5000ms=5s)

```jsx
const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello")
}

setInterval(sayHello, 5000)
```

- 맨 처음에 위와 같이 작성해도 hello가 콘솔창에 뜨지 않는 오류가 발생하였다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%201.png)

위와 같은 오류가 나는 이유가 type이 서로 맞지 않아서 였다. 다른 폴더에 있을 때는 절대 경로를 통해 import를 하여 타입이 맞지않아 오류가 나는 경우를 피할 수 있다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%202.png)

해결하여 콘솔창에 hello가 27번 반복하여 뜨는 모습

→5x27=135초가 지났다는 것을 알 수 있다.

**setInterval**을 통해 **clock**을 만들 예정 

→다음시간에는 **timeout**에 대한 개념을 알아볼 예정

# #5.1 Timeouts and Dates

이전 영상에서는 몇 초안에 한번 실행하는 것을 배웠다면 이번 영상에서는 몇 초 후에 function을 딱 한번만 호출하는 것을 배울것이다. → 미리 추측하자면 그게 settimeout이지 않을까 ? 싶다.

setTimeout(호출하려는 함수, 얼마나 기다릴지ms);

```jsx
const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello")
}

setTimeout(sayHello, 5000);
```

Javascript가 가지고 있는 **Date object**라는 tool

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%203.png)

매 초마다 get Hours,Minutes,Seconds를 호출하면 clock을 실현 가능할 것이다. 

→ 매 초마다 function을 구현하기 위해선 Interval을 사용

```jsx
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

setInterval(getClock, 1000);
```

매 초마다 새로운 Date object를 만들고 있는 것.

→ new Date object는 매 초마다 그 시간을 담고 있음.

0초를 00초로 보이게 하고 싶다 → text formatting

새로고침했을때 시계가 바로 보이지 않고 1초 뒤에 보인다. → getClock()을 호출→ website가 loat되자마자 getClock()을 실행, 또 매초마다 다시 실행  

이제는 콘솔창에 뜨는 이 시계를 웹사이트에 뜨게 해주면 된다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%204.png)

여기서 마지막으로 숫자들이 표현되는 방식을 숫자 최소 두자리로 고정해보려고 한다. → text formatting

# #5.2 PadStart

이번 강의에서 해볼건 string을 최소 문자 두개로 채우는 것!

→ 초가 한자리로 나오는 것을 해결하기 위함

ex) 1→ 01

→**padStart()**라는 string에 쓸 수 있는 function이 이미 만들어져 있다. →padStart(문자열 총길이,”채울 문자”)

*padEnd()라면 뒤에 0추

![2자리가 아니라면 나머지 한자리를 (start)앞에 0으로 채워주는 것.](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%205.png)

2자리가 아니라면 나머지 한자리를 (start)앞에 0으로 채워주는 것.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%206.png)

```jsx
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
```

# #5.3 Recap

지난 수업들에 대한 복습으로 시작.

다음 시간에는 내가 좋아하는 명언 10개정도를 가져와라! → 다음 수업을 위해.

# #6.0 Quotes

랜덤 배경화면과 랜덤 명언을 띄우도록 momentum web site를 구성해 볼 것이다.

```jsx
const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    }
];

```

quotes.js를 새롭게 만들고 10개의 명언을 Array로 묶은 후 이 javascript를 html에서 import한다.

명언과 저자를 위 아래로 놓이게 하기 위해서 id가 quote인 div태그 아래 span태그 2개를 놓는다.

```html
<div id="quote">
            <span></span>
            <span></span>
        </div>
```

```jsx
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

```

randomness(무작위성)

→명언에 어떻게 접근하는가? 현재 명언에는 0-9까지의 인덱스가 존재

- 10 - 1 로 마지막 element에 접근 가능

Math는 흥미로운 function들을 많이 가지고 있음

→ 그 중 하나는 random() :  0부터 1 사이의 랜덤한 숫자 제공 , but 우리는 0에서 10 사이의 숫자가 필요

→곱하기를 함으로써 우리가 원하는 범주에 접근가능.

→

```jsx
Math.random() * 10 
// 0부터 10 사이의 숫자들을 얻을 수 있다.
```

하지만 뒤에 많은 소수점을 가지는 숫자이다.

float이기 때문인데 이것들을 위해서는 우리가 세가지 함수를 사용할 수 있다.

1. round() : 0.5 기준으로 반내림, 반올림. *0.5는 반올림에 해당.
2. ceil() : 숫자를 천장까지 올려주는 것으로 그냥 소수점에 숫자가 있으면 그 위의 정수로 올림. 
3. floor() : 숫자를 바닥까지 내려주는 것으로 그냥 소수점이 있으면 버린다.

```jsx
Math.floor(Math.rondom() * 10)
//우리가 원하는 0부터 9까지의 수에 무작위로 접근 가능
```

```jsx
const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * 10)]);
```

Array길이를 통해 Array에 명언들을 추가하거나 삭제했을 때도 여전히 랜덤 정수를 범위 내에서 잘 작동하게 하고싶다면???

→ Array.length를 사용!!!

```jsx
console.log(quotes[Math.floor(Math.random() * quotes.length)]);
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%207.png)

다음 시간에는 랜덤한 배경을 실행시켜볼 것이다.

# #6.1 Background

랜덤 배경화면을 만들기 위해서 background.js파일을 js폴더 안에 추가하고 시작 ! → import까지.

img폴더를 새로 만들고 배경화면으로 할 사진들을 미리 3개 저장해놓고 시작 ! - 폴더 안의 이미지 이름과 자바스크립트에서의 이미지 이름을 동일하게 사용.

- background.js와 quotes.js는 형식이 거의 같다.

우리가 지금까지 해오던 것은 자바스크립트를 통해 html에서 무엇인가를 가져와서 반영해옴

→javascript에서 무언가를 만들어서 html에 반영한 적은 없다. → 이번 시간에 해볼 것이다.

: **createElement()**

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%208.png)

```jsx
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);
```

마지막으로 우리가 해야할 일은 이 bglmage를 body 내부에 추가하는 것!! → 그래야 웹사이트에 반영이 된다.

:document에 존재하게 만드는것. : **body.appendChild()**

```jsx
document.body.appendChild(bgImage);
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%209.png)

html의 document에 추가되어 사진이 삽입된 것을 확인할 수 있다.

# #6.2 Recap

이제 무작위성이 있는 명언과 이미지 부분은 끝!!!

이제부터는 to do list로 넘어갈 것이고 그 다음은 날씨를 볼 것이다. 

나중에 css로 꾸미는 시간도 갖을 것이다.

지난번 수업들에 대한 복습 시간.

가장 중요한 것들은 랜덤한 요소들을 고르는 Math.Random()과 그것을 통해 우리에게 맞는 범주를 설정하는 방법. 그리고 Math.floor()

그리고 Array에 접근하여 그 배열 안 요소의 수에 접근하여 편리함을 늘릴 수 있다. 

javascipt에서 html을 생성하고 추가한 것도 중요한 작업 중 하나.

*새로운 개념 

→append는 가장 뒤에 추가 / prepend는 가장 앞에 추가

# #7.0 Setup

todolist를 자바스크립트를 통해 구현할 것이기 때문에 

todo.js파일을 만들어주고 html에서 import하고 시작

앞으로 우리에겐 form이 필요

→  사용자가 todo를 입력해야만 하고, list도 필요하기 때

→ todo를 나열할 수 있어야함.

```jsx
<form id = "todo-form">
            <input type="text" placeholder = "Write a To Do and Press Enter" required>
</form>
```

<ul id="todo-list"></ul>

여기에 li는 자바스크립트로 추가할 것이다.

form과 ul을 HTML에서 javascript로 가져갈 것이다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2010.png)

preventDefault때문에 submit즉 enter를 눌러도 새로고침이 일어나지 않는다.

input의 value를 얻어내야 한다.

→

```jsx
const toDoInput = doDoForm.querySelector("Input");
```

```jsx
const toDoInput = document.querySelector("#todo-form input");
```

위와 아래의 결과는 같다. 둘 다 동일한 기능을 한다.

![toDoInput의 value를 콘솔창에 띄우는 실습.](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2011.png)

toDoInput의 value를 콘솔창에 띄우는 실습.

Enter를 눌러도 새로고침이 되지 않기 때문에 입력값이 계속 남는다. → 어떻게 하면 모든 입력값이 사라지게 할 수 있을까??

toDoInput.value = ""; 을 삽입하면 된다.

근데 input value를 비우기 전에 그 값을 저장해보자 !

```jsx
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}
//여기서 알아야 할 것 : toDoInput의 값이 비워져도
//newTodo의 값은 남아있다.-> 복사해놓은 것이기 때문!
```

# #7.1 Adding ToDos

paintToDo라는 function은 toDo를 그리는 역할을 할 것이다.

→하지만 지금은 그려야할 것이 무엇인지 모르기 때문에 인자를 준다.(newTodo를 인자로 넘겨준다.)

전체적인 과정

→ input에서 value를 얻어서

→ paintToDo라는 새로운 function에 그 값을 보내는 것.

```jsx
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    console.log("i will paint", newTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

background에서 했던 것처럼 html에 요소를 추가해야한다.(li 목록 태그)

 const li = document.createElement("li")

여기서 태그 이름과 변수 이름을 통일할 필요 x

*li 태그 내에 span태그도 만들고 싶다. → button을 만들어서 나중에 각 list요소를 삭제할 수 있게 하려고

```jsx
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    console.log(li);
}
```

![li 태그 안에 span 태그를 넣은 실습.](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2012.png)

li 태그 안에 span 태그를 넣은 실습.

이제 우리가 해야할 것은 새로 추가된 newTodo를 새로운 list에 추가하는 것.

```jsx
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2013.png)

ul태그 안에 li태그 삽입 성공

문제는 새로고침했을 때 만들어놓은 todo-list들이 사라져 버린다.

또한 추가할 수는 있지만 삭제할 수도 없다.

# #7.2 Deleting To Dos

이번 강의에서는 toDo를 삭제하는 button을 추가할 것이다.

*append는 맨 마지막에 써야함.

뭔가가 클릭되었다는 것을 어떻게 확인할 수 있을까?

정답 :  eventListener → click버튼을 통

어디를 클릭한건지 알아야한다. 여러 list요소들이 있기 때문!

우리는 어떠한 버튼 하나가 클릭된지만 알 수 있다.

→클릭된 button이 어떤건지에 대한 단서를 얻는 방법은?

무엇이 parent인지 콘솔창에서 클릭된걸 보고 알 수 있다.button의 parent

![무엇이 클릭되었는지 알 수 있다.](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2014.png)

무엇이 클릭되었는지 알 수 있다.

```jsx
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    console.dir(event.target.parentElement);
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2015.png)

```jsx
function deleteToDo(event){
    console.dir(event.target.parentElement.innerText);
}
```

target은 클릭된 html element이다. - button

그리고 각각의 element는 property중 parentElement를 가지고 있으며, 그것은 element의 부모이다. - li

```jsx
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

```

# #7.3 Saving To Dos

이번 시간에는 toDo를 저장해볼 것이다!

→ 새로고침해도 사라지지 않도록 !

→local Storage에서 불러와서 화면에 그려주고 싶다.

newTodo가 생길때마다 toDos배열에 추가하고싶다.

```jsx
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
}
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2016.png)

그리고 이것들을 localStorage에 저장해야한다!

But, 여기서 문제는 로컬스토리지에는 array를 저장할 수 없다… : 오직 텍스트만 저장이 가능

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2017.png)

이렇게 추가할때마다 저장되지만 ?

새로고침하면 화면에서는 사라지고 로컬스토리지에는 남는다. 하지만 똑같은 문자를 다시 입력하면 다 사라지고 그 문자만 남는다…

먼저 toDos를 그려보자!!

배열로 저장됐으면 하지만 그게 로컬스토리지에서는 불가능하다. 단순 텍스트로 저장되는 것을 원하지 x

웹브라우저에서 무엇이든 string으로 바꾸는 기능이 있다. → JSON.stringify(key);

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2018.png)

```jsx
function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}
```

여기서는 중복도 가능하다.

# #7.4 Loading To Dos Part One

toDos가 localStorage에만 남아있으며, string으로 남아있다. → 어떻게 웹브라우저에 나오게 할까?

**JSON.parse(string)** : 문자열을 살아있는 array로 만들어준다. ↔ **JSON.stringify(array)**와 반대

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2019.png)

각각의 배열 요소들에 접근하여 화면에 뿌려주고 싶을 수도 있다

→array 아이템에 function을 적용하는 것이다.

자바스크립트는 forEach를 통해 각각의 아이템에 함수를 적용할 수 있다.

```jsx
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
        
    });
}
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2020.png)

지금 내가 어떤 item을 사용하고있는지 모른다면 무용지물

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2021.png)

이런식으로 item을 확인할 수 있다.

```jsx
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the turm of", item));
        
    };

```

# #7.5 Loading To Dos part Two

array와 string을 서로 변환 가능하고 그것을 자바스크립트에서 사용할 수 있음

forEach() : 각각의 배열 요소에 함수 적용

화살표 함수 

지금부터 parsedToDos array내부의 item들을 가지고 그 item들을 나타내줄 것이다.

→paintToDo function활용

```jsx
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2022.png)

하지만 옛날의 것이 사라지고 새로운 것만 남는다

→ 우리는 덮어쓰는 것을 원하지 않는다.

항상 빈 array에 submit하는 것과 같다.

const를 let으로 바꿔서 업데이트가 가능하도록 만들 것이다.

localStorage에 toDo들이 있으면 parsedToDos를 넣어서 복원할 것이다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2023.png)

문제는 삭제해도 다시 생겨난다. localStorage에서 삭제가 안됐기 때문이다.

# #7.6 Deleting To Dos Part One

localStorage를 바꿔서 삭제했을때도 함께 사라져야한다.

→ 어떤 todo text를 데이터베이스에서 지워야 하는지 모른다.(글자를 얻을 수 없다. a가 2개일때 어떤걸 지워야하는지도 알 수 없다.)

toDos를 더 좋은 방법으로 만들어야 한다.

todo들에게 id같은 것을 주면 좋다.

element가 만들어 질때 아이디가 생긴다.

```jsx
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : nnewTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodo);
    saveToDos();
}
```

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2024.png)

id를 html에 넣고싶다.

```jsx
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

```

user가 어떤 아이디를 지우고 싶은지 넘겨줘야한다.

# #7.6 Deleting To Dos part two

forEach함수는 item을 주고 그게 object가 된다.

만약 array에서 삭제한다면 그냥 삭제하는게 아니라 제외하고 **새 array**를 만드는 것이다.

filter()함수 각각의 요소에 filter적용

true가 유지된다면 모든것을 리턴하고 끝.

false가 나온다면 빈 배열이 리턴된다.

![Untitled](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2025.png)

![potato가 1000보다 작거나 같은지 물은 경우](#5%200~7%208%20e279880dbc9643d1906c3f00969410b4/Untitled%2026.png)

potato가 1000보다 작거나 같은지 물은 경우

toDos 의 데이터 베이스를 복붙하여 실습.

이번 강의에서는 filter를 적용하는 방법만을 학습하고 실습코드에는 변화가 없다.

# #7.8 Deletng To Dos Part Three

우리가 지울때마다 다른 id를 갖는다는 것을 알고 있다.

filter()이 새로운 array를 준다.

toDos = toDos.filter(toDo => [toDo.id](http://todo.id/) !== [li.id](http://li.id/));

```jsx
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== li.id);
}
```

화살표 함수를 통해 짧게 적을 수 있음.

위 함수의 의미는 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 의미이다.

변수의 타입때문에 삭제가 이루어지지 않는다.

id는 number이다.

li.id는 string이다.

그래서 아무것도 지워지지 않는다.

우리가 할 일은 **ParseInt**를 통해 문자열을 숫자로 바꾸는 일!!!

```jsx
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(){

}

[1,2,3,4].filter(sexyFilter)
```