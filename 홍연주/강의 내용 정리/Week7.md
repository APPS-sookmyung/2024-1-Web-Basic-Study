# Week7

Java Script ([바닐라 JS로 크롬 앱 만들기 – 노마드 코더 Nomad Coders](https://nomadcoders.co/javascript-for-beginners))

## Interval

setInterval(실행할 함수, 간격(ms));

‘매번’ 일어나야 하는 무언가 ex. “2초”마다 function 실행

## setTimeout(함수 한 번만 호출)

setTimeout(실행할 함수, 간격(ms))

“string”.padStart(n 자리, 앞에 붙일 string)

“string”.padEnd(n 자리, 뒤에 붙일 string)

## Math (내장함수)

Math.random( ) → 랜덤 float

Math.round( ) → 반올림

Math.ceil( ) → 올림

Math.floor( ) → 내림

array 이름[Math.floor(Math.random() * array 이름.length)];

```jsx
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
```

#JaveScript → HTML

```jsx
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
```

#li 안에 span 넣기(at JavaScript)

JSON.stringify( ) → 무엇이든 string으로 만들어주는 내장함수

JSON.parse( ) → 무엇이든 object로 만들어주는 내장함수

function 속 console.log → 변수 이름. forEach((매개 변수) ⇒ console.log(내용))

forEach는 모든 배열의 요소마다 실행함. 

Date.now( ) → 초(ms) 

## filter

빼고 싶은 요소 빼고 새로 배열을 만들어줌.

배열.filter( )