# 4주차

### #2.0 - #2.8

- 콘솔은 자바스크립트와 상호작용은 하지만 여러줄을 작성하기에는 불편함
- html - 접착제와 같은 역활
- 브라우저가 html을 열고 html 은 css와 자바스크립트를 가져오는 것임
- html에 css파일을 불러오는 코드 : <link rel="stylesheet" href="style.css"> - body 바깥쪽에 작성
    - rel (relationship)
- html에 html파일을 불러오는 코드 : <script src="app.js"></script> - body 안에 작성
- css, html 엔진 각각 작동이 된다.
- 데이터 타입
    - 숫자 integer / float
        - 자바스크립트에는 type이라는게 있고 그걸 알아서 이해함
        - 여러가지 타입의 숫자도 섞어서 쓸 수 있음
    - 문자 (string)
        - “hello” 라고 적어야함
        - 문자열끼리 덧셈연산 가능
        - 
- 변수
    - console.log() - 콘솔에게 메세지를 보내는 것
        
        숫자, string 모두 가능
        
        log : 이 값을 출력하고 있다는 것 
        
    - 변수 선언 : const 변수이름 = 값;
        
        변수이름의 뛰어쓰기는 불가하고 뛰어쓰기를 표시하기 위해 대문자로 표현한다. 
        
    - const 는 값 변경이 불가
    - let은 새로운 겻을 생성할 때 사용하는 것
    - const와 let 을 사용하면 어떤것을 업데이트시키고 어떤것을 고정시킬지 알 수 있음
        - const를 기본적으로 쓰고 undate시키고 싶으면 let을 사용함
    - 이전에 var는 우리가 업데이틀를 해도 언어가 말해주지 않았음
    - boolean
        - true / false
        - null : 아무것도 없음 ↔ false : 값이 존재함
        - 만약 let something; 이라고 선언을 한다면 출력했을 때 undefined 라고 나오며, 컴퓨터 메모리 안에는 존재하지만 값이 들어가지 않은 것임
- array
    - 데이터 구조
        - [ ]괄호로 배열 선언, 요소끼리는 , 로 분리
        - 원소의 index는 0부터
    - const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
        - 이렇게 선언을 해주면 string 이 아닌 array이다.
    - 원소를 새로 배열에 넣는 코드
        
        ```
        
        daysOfWeek.push("sun");
        ```
        
- object
    - 게임안의 캐릭터, 플레이어네임 만든다고 가정
        
        플레이어라는 객체에 여러 특성을 넣어줄 수 있음
        
    - object는 {}를 통해서 선언을 하며 {} 안에 속성을 적어준다. 이때 속성은 =을 쓰지 않고 대신 : 을 쓴다. 그리고 ; 을 쓰자 않고 ,을 쓴다.
    - console 은 object 라는 뜻이고, 그 안에 어딘가에 log 라는 것이 있다는 것
    - object 내의 속성은 변경, 추가 가능 // 객체.속성 = 바꿀 내용
- function
    - 계속 반복해서 사용할 수 있는 코드 조각이라고 생각
    - function은 어떤 코드를 캡슐화해서 실행을 여러번 할 수 있게 해주는 것
    - function에서 바깥에 무언가를 받아오는 방법
    
    ```
    function sayHello(nameOfPerson) {
      console.log(nameOfPerson);
    }
    
    sayHello("nico");
    sayHello("dal");
    sayHello("lynn");
    ```
    
    - nameOfPerson : argument 이고 이것은 여러개도 받을 수 있다.