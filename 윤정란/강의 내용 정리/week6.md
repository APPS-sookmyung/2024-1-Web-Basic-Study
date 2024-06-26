# 3.3 ~ 3.5 Event

.addEventListener("이벤트", 함수)

사용한 이벤트 : click, mouseenter, mouseleave, copy...

.on이벤트 = 함수의 방식으로 똑같은 효과를 낼 수 있음

# 3.6 ~ 3.8 css in js

js에서 css 스타일 변경해보기(.style 사용)->별로 권장x. css에서 해결하자

css에서 새 클래스를 만들어 스타일 요소 지정(새 클래스 이름으로 대체 됨)
js에서 if문 사용하여 똑같은 결과 만들 수 있음

classList 함수 사용 : contains, remove, add, toggle(remove와 add, if문 사용하지 않을 수 있음)

# 4.0

.value로 value값 가져오기

# 4.1 form submission

form을 사용하여 사용자 입력 유효성 검사

# 4.2 ~ 4.3 events

.prerventDefault();: 브라우저가 적용하는 기본 동작을 방지하는 역할

# 4.4 getting username

.hidden {
display: none;
}을 사용하여 입력을 받고 폼 요소를 감출 수 있음

반대로 hidden 클래스를 없애고 화면에 나타나게 할 수 있음

문자열 합치기의 두 방법: '+ username' = ${username}

# 4.5 saving username

localStorage.setItem('a'(key),'b'(value)) : 값 저장
.getItem('a') => b
.removeItem('a')

# 4.6 loading username

.getItem을 이용하여 로딩

# 4.7 recap

배운 내용 복습
