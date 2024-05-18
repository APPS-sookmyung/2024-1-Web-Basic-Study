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