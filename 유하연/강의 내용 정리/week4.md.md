# #1.0~#2.8

# #1.0 Welcome

더 나은 강의를 위해 업데이트를 하였다.(피드백과 코맨트 반영)

# #1.1 What Are We Building

**모멘텀**을 사용하여 중요한 기능들을 클론하여 배경화면, Geolacation, to do list, 시계, 이름 등을 구현할 것이다.(기본 자바스크립만을 사용하여)

# #1.2 Requirements

웹사이트를 만들기 위해서는 **HTML**과 **CSS**를 알아야한다.

자바스크립트는 인터렉티브한 앱을 만들어준다.

body, head 가 무엇인지, id와 class 가 무엇인지 알고 있기만 하면 된다.

# #1.3 Software Requirements

**컴퓨터에 대한 요구사항에 대해서..**

브라우저랑 문서편집기만있으면 된다.

VS code를 다운받아라!

크로미움 기반의 웹 브라우저를 사용하는 것을 권장

→ 크로미움은 구글 크롬이 베이스로 삼는 프로젝트이며, 각종 광고들을 차단해준다.

# #1.4 Why JS

**왜 자바스크립트가 인기폭발일까?**(모든곳에서)

→ 짱짱한 미래가 보장. 자바스크립트로 할 수 있는게 방대하다. But! 몇몇에겐 불행할 수 있다. 자바스크립트는 프론트엔드에서 쓸 수 있는 유일한 언어다.

자바스크립트는 모든 컴퓨터에 내장되어있다.(브라우저가 있으면 자바스크립이 내장되어있는것이다.)

프론트엔드에서는 선택지없이 자바스크립트만 있다 !!

그것이 불행이자 행복일 수 있다.

자바스크립트를 만드는데 10일밖에 걸리지 않았다.

넷스케이프(브라우저) :  그 당시 훌륭한 네비게이터

클릭하면 동적으로 동작했으면 해서 자바스크립트가 만들어졌다.

# #1.5 Why JS 2

**자바스크립트를 제대로 잘 배웠을 때에 가능한 것들에 대해서..**

HTML, CSS, javascript

three.js : 자바스크립트로 3D를 구현하게 해주는 라이브러리(3D로 무엇을 만들고 싶다면 자바스크립트를 사용하는 것이 좋다.)

ml5.js : 머신러닝 모델을 생성하는 웹사이트를 구축해서 그 모델을 훈련시킬 수 있다.

만약 자바스크립트 기술을 좀 더 가다듬어서 더 깊게 배우고 싶다면? →  프레임워크로 넘어가자.

프레임 워크 : 내가 하려는 일을 도와주는 도우미 

ex) 리액트 네이티브 - 안드로이드나 ios 앱을 만들 수 있다.

그 다음 단계는 일렉트론

일렉트론 : 자바스크립트, HTML, CSS로 데스크탑 앱을 만들 수 있게 해준다.(다운로드하고 설치해서 쓰는 앱)

!!자바스크립트로 백엔드도 돌릴 수 있다!!

프론트엔드 그리고 백엔드 모두 자바스크립트로 작성할 수 있다.

→ wetube코딩 강의에서 백엔드도 가진 웹사이트를 자바스크립트만으로 만드는 법을 가르쳐 줄것이다.

# #1.6 Online IDE

컴퓨터에 VS code를 설치할 수 없는 사람들을 위한 영상

# #2.0 Your First JS Project

처음으로 자바스크립트 프로그래밍 언어를 다뤄보는 시간 → 프로젝트를 만들것이다.

자바스크립트를 사용하기 위해선 Console을 이용한다.(inspection(검사)를 누르고, Console을 누른다.

![같이 실습해본 첫 자바스크립트](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled.png)

같이 실습해본 첫 자바스크립트

콘솔에 작성하는게 살짝 귀찮다.(콘솔은 긴 코드를 작성하기 위해 만들어진게 아니기 때문이다.)

→자바스크립트 파일을 만들어서 이 문제점을 해결

![css파일이나 js파일을 실행하는 것이 아니라 그냥 열어보는것과 같음](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%201.png)

css파일이나 js파일을 실행하는 것이 아니라 그냥 열어보는것과 같음

브라우저는 css와 자바스크립트를 이런식으로 실행하지 않는다 → 중간 접착제(html)이 필요

브라우저가 HTML을 열고 HTML이 CSS와 자바스크립트를 가져온다.

![Untitled](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%202.png)

자바스크립트 파일은 주로 끝에서 가져온다

HTML은 elements 에서 볼 수 있고,

CSS는 style에서 볼 수 있고,

자바스크립는 console 에서 볼 수 있다.

**콘솔을 항상 열어두는것에 익숙해져야한다.**

# #2.1 Basic Data Types

데이터 타입을 이해하기만 하면 된다.(int, float, text → string)

text는 “~”작성해야한다.

# #2.2 Variables

왜 변수가 필요하는가? 변수의 가치에 대해서..

console.log(~) : 괄호 안에 있는 무언가가 콘솔창에 출된다.

작은따옴표와 큰따옴표 모두 구분없이 사용이 가능하다.

![자바스크립트 실습 - 위에서 아래로 파일을 읽는 모습](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%203.png)

자바스크립트 실습 - 위에서 아래로 파일을 읽는 모습

계산하고 싶은 식을 바꾸려면 위의 식은 6번 바꿔야함

→ 어떻게 개선할 수 있을까? → 변수 사용

const : 상수. 바뀌지 않는 수

![첫 변수 사용 실습 - 게으른 개발자가 되기 위한 첫걸음](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%204.png)

첫 변수 사용 실습 - 게으른 개발자가 되기 위한 첫걸음

변수의 이름을 어떻게 정할까?

→ 변수의 이름에는 공백이 있을 수 없다.

공백이 필요하다면 대문자를 쓴다. *파이썬은 _

![Untitled](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%205.png)

# #2.3 const and let

variable 만드는 법 두가지 : const, let → 코드를 만든 사람의 의도를 파악할 수 있다.

생성할 때만 !! 앞에 붙여서 선언

값을 바꾸는 게 필요할 때(variable의 값을 업데이트하고 싶을 때) → let 사용

![Untitled](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%206.png)

위 실습에서 const로 myName을 선언한다면 error가 난다. → const로 선언한다면 값을 변경할 수 없기 때문이다.

**기본적으로는 const를 사용하고, 필요할 때만 let을 사용한다. + var는 쓰지 말것!**

과거에는 자바스크립트에 const, let이 없고 오직 var만 있었다.

var는 매우 이상한 규칙이 있었다 

→ 원한다면 어디서든 업데이트할 수 있다는 점(언어를 통한 보호를 받지 못한다.)

# #2.4 Booleans

Boolean은 True와 False값만 있으며 변수에 저장이 가능하다

컴퓨터에서의 0과 1 : 0은 꺼져있다, 1은 켜져있다.

null : 아무것도 없음. 변수에 아무것도 없다. false랑 의미가 다르다. 절대 자연적으로 발생하지 않는다. variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓴다.

**null, false, true, undifined모두 type 들이다.**

# #2.5 Arrays

우리가 지금 배울 수 있는 가장 기본적인 데이터 구조는 array(배열) : 숫자, 변수 등 다양하게 넣을 수 있다.

array를 만들기 위해 []를 사용한다. 각각의 항목을 볼 수 있으며, 갯수도 알 수 있다.

```jsx
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sund"];

console.log(daysOfWeek[n]);
//인덱스를 활용하여 접근가능하다.0부터!
```

array는 살아있는 것이다.

**인덱스를 통해 접근도 가능하며 추가도 가능하다.**

![추가 실습 6개 → 7개](#1%200~#2%208%20a8fafe262e0d4984a71d3a2a46f39127/Untitled%207.png)

추가 실습 6개 → 7개

# #2.6 Objects

나만의 xx.xx만들기

object를 만들자 → 비디오 게임을 통해 설명

property를 가진 데이터를 저장하도록 해준다. 

데이터를 가능한 최선으로 정리해야하는데 어떻게 해야할까?

object를 만들자 → 중괄호{} 사용

```jsx
const player ={
    name : "nico",
    points : 10,
    fat : true,
}

console.log(player);
console.log(player.name);
//player에 접근하는 한가지 방법
console.log(player["name"])
```

```jsx
const player ={
    name : "nico",
    points : 10,
    fat : true,
}

console.log(player);
player.fat = false;
console.log(player);
```

constant는 여기서 object에 해당한다.

따라서 요소 즉 안에 있는 무언가를 바꾸려 할때는 에러가 나지 않는다.

# #2.7 Functions part One

function은 내가 계속 반복해서 사용할 수 있는 코드조각

가능한 작은 코드를 사용하고 싶은 특성과 용이

→ 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해준다.

() 가 필요하다.

```jsx
function sayHello(){
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();
```

# #2.8 Function part two

우리는 function에 값이나 데이터를 보내는 방법을 안다.

```jsx
function sayHello(){
    console.log("Hello my name is C");
}

sayHello("nico");
sayHello("dal");
sayHello("lynn");
```

C를 바꿔야한다. 어떻게 데이터를 받을까?

→ sayHello()의 괄호 사이를 건들어야한다.(여러인수를 받는 것도 가능)

```jsx
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I am " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
//argument를 받는 법
```

NaN : Not a Number : 숫자가 아님

```jsx
function plus(a, b){
    console.log(a+b);
}

plus(8,60);
//a,b는 차례대로 숫자를 8,60을 받는다.
```

인수 이름a와b같은 경우 우리가 알아서 정한다.

```jsx
function plus(firstNumber, secondNumber){
    console.log(firstNumber+secondNumber);
}

function divide(a,b){
    console.log(a / b);
}

plus(60,8);
divide(98, 20);
//블럭 내에서만 존재하는 변수들(스코프 개념)
```

function에 정보를 보내는 법을 배웠다.

우리가 몰랐던 것은 우리가 정보를 받는 법이었다.