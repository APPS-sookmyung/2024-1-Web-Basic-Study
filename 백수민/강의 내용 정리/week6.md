## < #3.3 - #4.7 >

### 1. events ###

이벤트를 listen하는 방법:
- addEventListener 호출
- listen하고 싶은 event 이름을 알려줌
- event가 발생하면 호출할 function 전달 (괄호 X)
  
```JavaScript
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
```
- click event를 listen하고, 이 click event가 발생하면 => handleTitleClick function 동작
- handleTitleClick() 대신 handleTitleClick 이유 => 함수가 곧바로 실행되는 것을 원치 않음 (function을 JS에게 넘겨주고 user가 title을 click할 경우 JS가 실행버튼을 대신 눌러주길 바람)
- *addEventListener 안의 함수는 직접 실행하지 않고 JS가 실행할 수 있게 하여야 함*

**console.dir(element):** property를 출력해줌, 여기서 사용 가능한 event를 찾을 수 있음 (property 앞에 on이 붙어있으면 event listener 의미)

onclick => "click" 이벤트 <br> 
oncopy => "copy" 이벤트 <br> 

**oneventname property에 event listener를 할당해 event를 listen할 수도 있음 (두번째 방법)**
 
**요약:** <br>
**Step 1.** element를 찾아라 <br> 
**Step 2.** event를 listen 해라 <br> 
**Step 3.** 그 event에 반응하라 

--- 
### 2. CSS in JavaScript

**toggle 함수:** class name이 존재하면 class name 제거, class name이 존재하지 않으면 class name 추가

---
### 3. LOGIN

- input을 form안에 위치시키면, 엔터를 누르면 form이 자동적으로 submit 됨 (페이지 또한 새로고침 됨)
  - form의 기본 동작 => submit
  - link의 기본 동작 => 클릭 시 다름 페이지로 이동
- 모든 EventListener function의 첫번째 argument는 방금 실행된 event에 대한 정보를 담고 있음 (JS에서 정보를 담은 채로 함수를 호출함)
  - 정보를 받고 싶으면 공간을 만들어주어야함
  - eg) onLoginSubmit() => onLoginSubmit(event)
  - event에 대한 정보를 담고 있는 object을 넣어줌 (information about the event that just happened)

`${변수명}` => String, 변수 결합 또는 변수를 String 안에 포함시킬 때 사용!