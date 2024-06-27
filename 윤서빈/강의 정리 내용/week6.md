# 6주차

#3.3-4.7

- 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir()

기본적으로 object로 표시한 element를 보여줌(전부 js object임)

그 element 중 앞에 on이 붙은 것들은 event임

- event: 어떤 행위를 하는 것

모든 event는 js가 listen할 수 있음

- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함
- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임
- listen하고 싶은 event 찾는 방법!
    
    1. 구글에 찾고 싶은 element의 이름 검색하기 ex) h1 html element mdn(mozilla developer network)
    
    2. 그 중에서 web APIs 이 포함된 페이지 찾기 (JS 관점의 HTML heading element란 의미)
    
    console.dir을 통해서 element를 console에 출력시키기 console.dir(title);=> 여기서도 사용가능한 event 찾을 수 있다. property 이름 앞에 on 이 있다면 그게 바로 event listener!!!! 사용할때는 on 빼고 쓰기
    
    style은 CSS를 통해서 변경되어야 한다.
    
- event를 사용하는 두 가지 방법

1. title.addEventListener("click", handleTItleClick);

2. title.onClick = handleTitleClick;

첫 번째 방법 더 선호.

- window object이용하기

1. resize event

코드 : window.addEventListener("resize", handleWindowResize);

2. copy event

3. wifi event

- body는 특별해서 document.body 이런 식으로 호출할 수 있음. 하지만

document.div 이런식으로 가지고 올 수 없음.

- 변수 2가지에 대해 헷갈려하시는 것에 대한 제 의견을 말씀드려보도록 하겠습니다.
    
    1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
    
    2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
    
    3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
    
    4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.
    
- 이를 토대로 코드를 순차적으로 이해하면,
    
    1) click event 발생 및 함수 실행
    
    2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
    
    3) newColor 변수 선언
    
    4) currentColor 현재 값 확인
    
    5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
    
    6) 마지막으로 h1.style.color에 newColor값 대입 (setter)
    

1) HTML파일은 CSS문서와 JS문서를 임포트 하고있음.

2) CSS에 .active라는 class를 생성해주고

3) addEventListener로 h1을 클릭하면 handleTitleClick 함수가 작동

4) handleTitleClick 함수는 h1의 class name을 "active" 로 바꿈

5) .active의 color는 토마토색이기 때문에 토마토 색이 됨

classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.

className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

classList를 이용하는건

js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.

= element의 class내용물을 조작하는 것을 허용한다는 뜻

contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

toggle은 토큰이 존재하면 토큰제거

토큰존재 하지않으면 토큰 추가

ex)

toggle은 h1의 classList에 clicked class가 이미있는지 확인하여

만약있다면 toggle 이 clicked를 제거해준다

만약 class name이 존재하지 않는다면 toggle은 classname 추가

모든 것은 HTML에서 시작되어야 함. 

HTML에서 작성하고 자바스크립트로 기능을 구현.

먼저, HTML 코드 작성하기

1. 사용자가 이름을 작성할 수 있도록 input 태그를 작성한다.안에 텍스트를 넣을 거니까, type="text"해주고, 안에 미리 작성할 말은 placeholder 안에 써주기

2. 그리고 옆에 버튼을 만든다.Log In

3. div태그로 위의 것들 묶어주고, id="login-form"을 해준다.왜 div태그로 묶는지 확실히는 모르겠지만, 내 생각에는 둘을 묶은 다음, 저 id를 통해서자바스크립트에서 내가 원하는 태그들을 쉽게 찾기 위해서 묶어주는 것 같음.

input 안에 뭔가를 작성하고 로그인 버튼을 누르면 저장해야 되니까자바스크립트로 그 기능 구현하기

그냥 html 태그를 가져올 수 없으니까 변수 안에 넣고 거기서 텍스트 받기

1. const loginInput = document.querySelector("#login-form input");const loginButton = document.querySelector("#login-form button");document 안에서 찾기. id="login-form"인 곳에서 input요소를 loginInput 안에 넣어주기

2. 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능loginButton.addEventListener("click, onLoginBtnClick);

3. 함수 만들기function onLoginBtnClick(){console.log(loginInput.value);}input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.

addEventListener 안에 있는 함수는 직접 실행하지 않는다

브라우저가 실행시켜주고

브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.

addEventListener의 함수에서 object에 대한 자리만 할당해주면

해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!

이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다

- username 기억하기: LocalStorage
- 브라우저에 무언가를 저장할수있게 해준다, 나중에 가져다 쓸수 있다

1) localStorage.setItem(): localstorage에 정보 저장

2) localStorage.getItem(): localstorage에 저장한 값 불러온다

3) localStorage.removeItem()