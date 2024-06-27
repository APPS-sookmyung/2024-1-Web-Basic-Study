# 7주차

setInterval(sayHello, 1000);

sayHello() 라는 펑션을 1초마다 반복한다는 의미.

단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.

setTimeout(sayHello, 1000);

1초 기다렸다가 한번만 실행.

number를 string으로 바꾸는 방법은 String() 안에 감싸는 방법이 있다.

0> 00 로 바꾸고 싶을 때는 padStart(x, 'y') 를 사용하면 된다.

padStart는 내가 갖고 있는 string 을 길게 만들어 주고 싶을 때 사용.

뒤에서 추가하고 싶을 때는 padEnd를 사용하면 된다.

x는 원하는 length를, y는 앞에 채워줄 내용을 입력하면 된다.

String(new Date().getHours()).padStart(2,'0')

1. setInterval(sayHello, 5000); 는 매초, 매분마다 반복되는 일을 해야할때

실행하는 함수임. 첫번째 인수에는 함수이름을 적도 두번째인수는 시간을 적어야함.

1초는 1000임

2. setTimeout(sayHello,1000);는 함수를 바로 실행하고 싶지않을때

사용하는 함수임 예시와같은 setTimeout은 1초 뒤에 sayHello를 실행시킨다는 의미임.

- 1. != 2. 비슷하게 생겼지만 전혀다름.

3. getHourse().padStart(2,"0") 는 getHourse로 시간을 받아오고

1시일 경우 01이 아닌 1로 나타난다 그래서 01로 나오게 하기위해 사용하는 함수임.

padStart(2,"0") 2는 두글자가 되지않으면 0을 앞에 추가한다 라는 의미임.

뒤에 추가하고싶으면 padEnd를 사용하면됨.

1. Math 객체 기능

Math.random() 0부터 1사이 무작위의 값을 반환해줌

Math.floor() 내림

Math.ceil() 올림

Math.round() 반올림

2. JS에서 html 요소를 생성

createElement(" ")

예를 들어,

document.createElement("img")일 경우 html 내에 img 태그를 생성

appendChild()

// 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함

prependChild()

// 반대로 앞에서 기입

1. todo - list의 배열 생성

1) const toDos = [ ]; // toDo에 들어오는 텍스트를 배열로 묶어 보관하기 위해 빈 array를 생성해준다.

2. 저장 기능을 함수를 정의한다.

1) 아직 기능을 하진 않지만 우리는 화면에 나타낸 텍스트를 저장할 것이기 때문에 대충 그러한 기능을 하는 함수가 있다고 치고 빈 함수

function saveToDos( ) {

};

를 생성한다.

2) 앞에서 만들었던 함수 handleToDosubmut( ); 의 맨 마지막에 저장 기능을 실행할 saveToDos(); 넣어두고 다음에서 기능을 구현한다.

3. todo - list를 저장하는 기능을 수행하는 함수 설정

1) function saveToDos( ) { localStorage.setItem("todos",toDos); } 에 "todos"라는 이름의 카테고리로 저장한다.

2) 하지만 이렇게 저장하게 되면 직접 localStorage 에서 확인해봤을 때 값들이 array안에서

string의 형태가 아닌 상태로 저장된다.

예) key: todos value: a,b,c

3) 하지만 우리는 값들을 string의 형태로 toDos라는 array에 집어넣고 싶기 때문에 니꼬가 알려준 JSON.stringify() 라는 객체를 사용한다. 이 도구는 우리가 대입한 값을 알아서 string의 형태로 바꿔줄 것이다.

예) key: todos value: ["a", "b", "c"]

const toDos = []; => application이 시작될 때마다 toDos array는 항상 비어있기 때문에 새로운 것만 저장되는 거다.

그래서 newToDo를 작성하고 form을 submit 할 때마다 newToDo를 toDos array (빈 array)에 그냥 push 하게 된다.

그리고 그 toDo를 저장할 때 나는 새로운 toDo들만 포함하고 있는 array를 저장하는거다. 이 array는 이전의 toDo들은 가지고 있지 않다. 전에 있던 toDo들은 localStorage에 들어있다. 새로운 toDo들은 사용자가 입력하는 것이다.

우리는 단지 newTodo들만 toDos array에 추가해서 단지 newToDo들만 localStorage에 저장하고 있는거다. 즉, 우리가 갖고 있던 toDos의 이전 복사본을 잊어버리고 있다는 말이다.

======해결 방법=======

application이 시작될 때 toDos array를 빈 값으로 시작하는 대신에, const를 let으로 바꿔서 업데이트가 가능하도록 만들고, localStorage에 toDo 들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하면된다.

toDos array와 localStorage는 같지 않다.

toDos array => 데이터베이스

localStorage => toDos array를 복사해두는 곳.

deleteToDo는 어떤 HTML의 element를 지워야 하는지 알고 있다. 하지만 어떤 todo text를 데이터베이스에서 지워야 하는지 모른다.

그래서 toDos를 더 좋은 방법으로 만들자

boolean(참 거짓)을 이용한 함수sexyfilter를 만듦

그 안에 !== (not) 을 활용해서 우리가 삭제하고픈 애를 뺀 나머지만 return 하게 한다.

```

const life = ["희망", "불안", "행복", "비꼬는 마음"]

function goodLife(item){return item !== "비꼬는 마음"}

//life = ["희망", "불안", "행복"]

```