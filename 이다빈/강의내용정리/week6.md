# 3.3
.id:first-child 하위tag이름
event를 listen 하는 법
HTMLelement.addEventListener("event", function);

# 3.4
HTMLElement 찾기
->MDN(Mozilla Developer Network)검색
->Web APIs 찾기
(https://developer.mozilla.org/en-US/docs/Web/API/Window)
or
console.dir()

# 3.5
더 많은 event
title.addEventListenter("click", handleTitleClick)
title.onclick = handleTitleClick
동일하나
addEventListenter을 이용하면 removeEventListener을 통해 event listener을 제거할 수 있음
event를 listen해서 이벤트를 처리한다

# 3.6
조건문을 활용해 클릭시 현재 색에 따라 색 변경하기

# 3.7
className은 getter이면서 setter
class를 얻어올 수도 있고 변경할 수도 있음
css에서 생성한 class를 이용해 색 변경하기
transition을 추가해 변화 속도 설정하기
개발자가 설정한 raw string(raw value)을 직접 사용하면 오타등의 오류 발생
->변수에 저장
모든 class name을 변경하지 않게 해야함.

# 3.8
.contain 명시한 class가 HTML element의 class에 포함되어 있는지 말해줌
.toggle 클래스가 존재하는지 확인하고, 존재한다면 클래스를 삭제함.

# 4.0
사용자 정보 받기, 화면에 표시하기
HTML 먼저
수많은 input과 button을 구별하기 위해 이름 설정하기
사용자 이름을 입력받음을 확인하는 과정 필요.

# 4.1
로그인 관련 이미 있는 기능 활용하기
required 필수입력
maxlength 최대길이
form이 submit될 때마다 페이지가 새로고침 됨

# 4.2
새로고침 막기
form이 submit하면 함수가 argument를 받게하고 JS에게 넘겨줌
-> 어떤 정보를 담은 채로 function을 호출함
.preventDefault() 브라우저의 기본동작(ex.새로고침)을 막음.

# 4.3
alert는 모든 동작을 막음
함수를 실행하는 건 JS의 몫. 알아서 event의 정보를 담음

# 4.4
css로 버튼 숨기기
문자와 변수를 합치는 방법
`문자 ${변수명}` 백틱 기호로 시작

# 4.5
value를 저장하는 법 localStorage 브라우저에 무언가를 저장하게 해줌
localStorage.setItem("username", "dabin")
localStorage.getItem("username")
>'dabin'
localStorage.removeItem("username")
사용자이름을 기억하나 새로고침하면 form이 남아있음

# 4.6
유저정보 유무 확인 -> 있으면 form 삭제
반복되는 문자는 대문자 변수로 저장하기. 오타가 나면 오류가 뜸.
유저정보를 저장했으나 같은 동작(인사하기)을 반복함 -> 함수로 만듬

# 4.7
복습