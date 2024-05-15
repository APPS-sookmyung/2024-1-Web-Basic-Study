#2.9, #2.10 Recap
저번 강의 내용의 요약

#2.11 Return
return 사용으로 반환값 지정 가능

#2.12 Recap
return 사용 예제

#2.13, #2.14, #2.15 #2.16(Recap) Conditionals(조건문)
prompt로 입력 받은 값을 무조건 number로(paraseInt) 바꾸는 예제
if (isNaN(age)) {console.log("숫자로 입력");} else {console.log("작성 완료");}

조건을 여러 개 달기(else if)
if (isNaN(age)) {console.log("숫자로 입력");} else if (age < 18>) {console.log("나이가 어립니다.");}
else {console.log("작성 완료");}

비교 연산자 : ||(or), &&(and), <, >

else if는 순서대로 실행(이미 앞 조건에 부합했다면 그 후에 나온 조건문에 대해서는 실행되지 않음)

#3.0 The Document Object
document.title: HTML의 title을 읽어옴(js에서 수정 가능)
document.xx: html의 내용을 읽어옴

#3.1 HTML in Javascript
document.getElementById("아이디 이름")
title.innerHTML = "kkk";
(title.id)
(title.className)

#3.2 Searching For Elements
document.getElementsByClassName("클래스 이름")
document.getElementsByTagName("태그 이름")
document.querySelector(".hello h1")->css처럼 사용 가능(hello 클래스 안의 h1을 찾는다)
document.querySelectorAll(".hello h1:first-child")->array로 반환
