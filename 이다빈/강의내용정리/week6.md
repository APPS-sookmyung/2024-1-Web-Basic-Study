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