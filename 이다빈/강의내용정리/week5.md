# 2.9 ~ 2.10
배운거 요약정리 변수, 배열, 객체, 함수

# 2.11
함수의 결과값을 얻어서 무언가를 해야한다. -> return 값을 반환함

# 2.12
앞 내용 복습, return하면 함수가 끝남

# 2.13
조건문 if와 else 계산기 만들기
prompt() 사용자에게 창을 띄움. 문자와 default를 받음
  사용자에게 문자를 보여주고 값을 받음. 기본적으로 string
  ->안쓰는 이유: 별로 안예쁘고 css를 적용할 수 없다. 팝업을 제한하기도 함. 가장 직접적인 방법
typeof 자료형 확인
parseInt() 문자열을 숫자로 변환

# 2.14
isNaN() NaN인지 판별하는 방법 boolean 값 반환
조건문(if) 형태
if(condition){
  // condition == true
} else {
  // condition == false
}
condition은 참거짓 판별이 가능해야함
참이면 if문 안의 코드 실행 거짓이면 else문 안의 코드 실행

# 2.15
조건문이 여러개 필요할 때 -> else if
&& AND 둘 다 true여야 함
|| OR 둘 중에 하나만 true면 됨

# 2.16
전 내용 복습
=== 같다
!== 아니다
조건문의 순서 중요
condition에서 먼저 수행할 부분 ()괄호묶기

# 3.0
HTML과 상호작용: HTML의 요소들을 JavaScript를 통해 변경하고 읽을 수 있음
document 접근할 수 있는 HTML을 가리키는 객체 -> JavaScript의 object처럼 properties를 가져올 수 있음
document.title
"Momentum App"
document.title = "Hi" //제목 변경
"Hi"

# 3.1
JavaScript로 정보를 가져오는 방법
  document 객체
  element를 가져오는 함수들
    id를 가져옴 .getElementById()

# 3.2
에러
Uncaught TypeError: Cannot set properties of null (setting 'innerText')
innerText의 프로퍼티를 바꿀수 없음
아무것도 없는 것(null)의 innerText에 접근하려 했기 때문
class를 가져옴 .getElementsByClassName() //class를 지닌 요소를 array로 가져옴
tag를 가져옴 .getElementsByTagName() //array로 가져옴
.querySelector element를 CSS 방식으로 검색할 수 있음
