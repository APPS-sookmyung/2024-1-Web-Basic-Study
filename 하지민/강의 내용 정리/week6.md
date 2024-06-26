## 3.3 Events

- element의 내부를 보고 싶다면 `console.dir` 사용!
- event가 발생하면 호출할 **function**을 전달해주면 됨
- HTML의 title object 내부를 보면, 굉장히 많은 정보를 가지고 올 수도 있고, 변경할 수도 있음
- event를 listen하는 방법= 유저의 행동들을 listen할 수 있음. 이 중 가장 쉬운 것이 `click event`
  - HTML element를 가져와서 `addEventListener` **function**을 실행시켜 주면 됨.
  - 어떤 event를 listen 하고 싶은지 명시해줘야함.
  - 유저가 이 element에 해당 event를 했을때 어떤 함수를 실행할지도 정해야함.

## 3.4 Events part Two

- property 이름 앞에 **on**이 붙어있다면, 그게 바로 `event listener`.
- 함수 실행 버튼 누를 필요가 없음-> JavaScript가 우리 대신에 눌러줄 거임.

## 3.5 More Events

- `addEventListener`는 나중에 `removeEventListener`를 통해 `event listener`를 제거할 수 있다는 장점을 가지고 있음.
- **resize, online, offline**에도 적용 가능함.

## 3.6 CSS in Javascript

- application의 스타일링을 더 잘할 수 있음.

## 3.7 CSS in Javascript part Two

- Javascript는 HTML을 변경할 것이고, CSS는 HTML을 바라보고 있음.

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.className = "active";
}
h1.addEventListener("click", handleTitleClick);
```

> 이 `h1.className`은 getter이면서 setter.
> `console.log`로 `h1.className`을 출력한다면 `className`의 현재값을 얻게됨

- (=)부호가 세개라면, `className`이 `active`와 같은지 확인하는 것.

## 3.8 CSS in Javascript part Three

- `classList`는 className과 classList라는 두 가지 옵션이 있음.
  - `classList`는 class들의 목록으로 작업할 수 있게끔 허용해줌.
    - **contains**라는 function이 있음. > 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해주는 것.
  - `className`은 그냥 모든 것을 교체해버림, 이전의 class들은 상관 안함.
- `toggle`은 `clicked`를 `classList`에 추가해줌.

## 4.0 Input Values

- JS에는 사실 value를 기억하게 하는 아주 쉬운 방법이 있음.
- value는 내 input 안에 있는 텍스트임.
- HTML 안에 value를 미리 입력해 둘 수도 있음.

## 4.1 Form Submission

- 항상 user가 입력하는 값의 유효성을 확인하는 것은 좋은 연습
- 절대 user를 믿지 말 것.
- input을 필수입력 항목으로 만들어 줄 수 있음.
- input 안에 있는 button을 누르거나 type이 submit인 input을 클릭하면 내가 작성한 form이 submit 되고 있음.
  > 우리가 form 안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 **submit**된다는 규칙.
  > form안에 있는 버튼을 눌렀을 때도 form이 자동으로 **submit**된다는 것.
- HTML의 도움을 활용하려면 input을 form 안에 위치시켜야한다는 점.

## 4.2 Events

- submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다는 사실 기억할 것.

```javascript
loginForm.addEventListener("submit", onLoginSubmit()); //x
loginForm.addEventListener("submit", onLoginSubmit); //o
```

- ()를 추가하는 건 function을 '즉시' 실행한다는 뜻인데 우리는 바로 실행되는 것을 원하지 않음.
- 모든 `EventListener` function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 됨. => 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣을 것.
- 기본행동이란 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작임.

## 4.3 Events part Two

- JS는 누군가 링크를 클릭할 때 우릴 위해 함수를 실행시킴.

```javascript
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick());
```

- ()를 추가하면 이 함수는 한 번만 실행되고 그걸로 끝임.
- 우리는 JS한테 함수의 이름만 주고 실행하는 것은 JS의 몫임.
- 그럴 때 함수를 실행시키는 동시에 JS는 그 함 수에 첫번째 인자로 **object**를 넣어줌.
  이 **object**에는 방금 일어난 event에 대한 여러 정보가 담겨 있음.

## 4.4 Getting Username

유저가 이름을 제출하면 form 자체가 사라지도록 하는 법

- **string**이랑 **변수**를 하나로 합쳐주기: **변수**를 **string** 안에서 사용할 수 있도록 해줌.

```javascript
greeting.innerText = "Hello" + username;
greeting.innerText = `Hello ${username}`;
```

- 만약 **변수와 string을 결합하고 싶다면** 또는 **변수를 string 안에 집어 넣고 싶다면** `${변수명}` 이렇게 표현하면 끝임.
- 백틱 기호로 시작하는 것 주의.

## 4.5 Saving Username

- value 저장하는 법
- 콘솔에 `localStorage`라고 입력하면 볼 수 있다시피 이미 정의되어 있음.
- `localStorage`는 우리가 브라우저에 뭔가를 저장할 수 있게 해줌.
- `localStorage` 뒤에 `.removeItem`, `.getItem`, `.setItem` 이거만 알면 됨.
- 저장될 값의 이름= **key**, 값= **username**

## 4.6 Loading Username, 4.7 Super Recap

- **string**을 반복해서 사용하는 경우에 그리고 그것들이 무조건 같아야 할 때 전처럼 변수로 고정시켜 줄 수 있음.
- 본인이 생성한 **string**을 반복해서 사용하게 될 경우에는 대문자 변수로 저장해 놓는 것이 좋은 게 실수를 만들고 싶지 않은 **string**이라는 사실을 기억하고 상기시키기 좋음.
- 만약 유저 정보가 `local storage`에 없다면 `local storage`는 **null** 값을 반환할 것임. 있다면 거기서 유저정보를 받아서 인자로 넣어줌.
