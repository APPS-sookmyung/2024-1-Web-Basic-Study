# #2.9~3.2

# #2.9 Recap

우리는 데이터를 변수에 저장할 수 있다

constant : 상수 선언으로 값을 업데이트 할 수 없다

let : 값을 업데이트 할 수 있으며 재선언은 불가

가끔씩은 let을 사용하고 var는 절대 쓰지 말자.

→ var를 우리가 쓰는 이유는 오래전부터 사용했던 것을 버릴 수는 없기때문에

boolean은 true, false 오직 두 값만이 존재.

null은 비어있음을 의미한다.

undefined 존재하지만 값이 없음을 의미한다.

*모든 프로그래밍 언어가 boolean, null, string, 숫자를 가지고 있지만 undefined는 있는 언어가 없다.

Array 만들기

```jsx
const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me]
```

위 함수에서는 변수가 많은 값을 담고 있다.

![Untitled](#2%209~3%202%200f9857515d9c4a0785e7458641148572/Untitled.png)

console.log는 콘솔창에 표시하는 것이고 배열값은 인덱스로 접근하여 수정이 가능하다.(인덱스는 0부터 시작)

push()는 마지막 요소를 배열에 추가하는 함수.

결론 array는 수정가능한 데이터 리스트이며 뒤에서 더 자세한 object와 function을 배울 것이다.

# #2.10 Recap 2

list가 있다면 같은 맥락이라서 나한테 편할 것이다. 하지만 여기서 문제는 의미가 있는 property를 저장할 때이다. → 객체 (object) 

![Untitled](#2%209~3%202%200f9857515d9c4a0785e7458641148572/Untitled%201.png)

배열과 마찬가지로 콘솔창에 객체를 띄워봄.

console도 함께 봤는데 console이라는 object에 있는 것들이다. 

→javascript는 우리가 사용할 수 있는 많은 object를 가지고 있다는 뜻

```jsx
const player = {
    name : "Mico",
    age : 98
};
console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);
```

객체도 수정 가능함을 보여주는 실습 예제

여기서부터는 function에대해 본다.

함수를 실행할때는 ();과 함께 써줘야 실행이 된다.

```jsx
function plus(){
    console.log(2+2);
}
plus();
```

alert(); 

```jsx
function plus(potato, salad){
    console.log(potato + salad);
}

plus(5,19);
```

이런 식으로 매개변수에 직접 인수를 삽입할 수 있다.

```jsx
function minusFive(potato){
    console.log(potato-5);
}

minusFive(10,10,12);
//이럴 경우에는 첫 인수만 매개변수에 받아서 10에만 -5 가 적용된다.
//potato는 이 함수 내에서만 접근가능하다(스코프)
```

```jsx
const calculator= {
    add : function(a, b){
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    divide : function(a, b){
        console.log(a / b);
    },
    powerof : function(a, b){
        console.log(a ** b);
    }
};

calculator.add(2,1);
calculator.minus(2,1);
calculator.divide(2,1);
calculator.powerof(2,1);

```

위에 과제 코드로 이번 강의 마무리!!

times 곱하기 까먹었지만 쉬움.

# #2.11 Returns

console창이 아니라 화면에 출려하려면 어떻게 해야할까? O

계산결과를 받아서 무엇인가를 할 수 있을까? O

function은 나를 위해 무언가를 해주는것이다.

→실행만 시켜줄뿐 결과를 알려줄뿐 결과값이 남지않는다. 그래서 undefined상태

```jsx
const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);
```

이 위에  결과값이 undefined가 나오지 않게 하려면 return 함수를 사용하여 함수값이 나오도록 해줘야한다.

```jsx
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);
```

결과값 : 98

function을 호출했으면 그 함수를 호출한 변수가 그 반환값을 받는것이라고 생각하면 쉽다.

return을 해주면 console.log를 사용할 필요없다.

콘솔창에 변수를 입력해주면 값이 띡띡 나옴.

```jsx
const calculator = {
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    divide : function(a,b){
        return a/b;
    },
    times : function(a,b){
        return a*b;
    },
    power : function(a,b){
        return a**b
    }

};

const plusResult = calculator.plus(2,3);//5
const minusResult = calculator.minus(plusResult, 10);//-5
const timesResult = calculator.times(10,minusResult);//-50
const divideResult = calculator.divide(timesResult, plusResult);//-10
const powerofResult = calculator.power(divideResult, minusResult)
//이 코드들은 서로 의존 중이다.

```

# #2.12 Recap

return을 사용하지 않는 것은 믹서기와 망고주스가 있는데 망고주스를 꺼내지 못하는 상황과 비슷.

return뒤에 오는 함수는 절대 작용하지 않는다

→자바스크립트의 룰

 * 보통 내가 원하는 건 function외부에서 value를 제공받는 것이기 때문에 console.log 보다는 아마 return을 많이 쓰게 될 것이다.

### 여기까지가 javascript의 기본 이론이었다!

# #2.13 Conditionals

이번 강의의 키워드는 if와 else이다.

```jsx
const age = prompt("How old are you?");//이것은 입력할때까지 자바스크립트를 정지시킨다.
//prompt는 확인과 취소가 뜨는 창이다.
console.log(age);
//자바스크립트는 무엇의 value든 뭐든지 다 가져간다.

```

prompt를 사용하지 않는 이유는 message가 별로 안예쁘고, 아무런 스타일을 적용시킬 수 없기 때문이다.

→이것말고 화려하게 값을 받을 수 있는게 존재한다.

창에 뭘 입력하든 숫자로 어떻게 바꿀까?

```jsx
const age = prompt("How old are you?");//이것은 입력할때까지 자바스크립트를 정지시킨다.

console.log(typeof age);//결과값 : string - 숫자를 써도
```

위에는 variable의 type을 확인하는 과정이다.

→type을 변경하는 법을 배울 것이다.

parseInt()는 string을 숫자로 바꾸는 법

```jsx
const age = prompt("How old are you?");//이것은 입력할때까지 자바스크립트를 정지시킨다.

//parseInt를 통해 들어오는 값이 숫자인지 아닌지도 판별가능
//숫자가 아니라면 메시기 -> NaN : Not a Number

console.log(age, parseInt(age));
```

```jsx
const age = parseInt(prompt("How old are you?"));

console.log(age);
```

만약 age가 NaN이라면 다시 입력하라고 하는 함수는 어떻게 만들까?? →다음시간에 이어

# #2.14 Conditionals part Two

무엇이 NaN인지 알아내는 법→**isNaN**함수 사용

```jsx
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//isNaN은 boolean값을 리턴한다.
//숫자면 false, 다른 타입이면 true를 리턴
```

if문 else문 : true면 if안에 함수를 실행 false면 else안에 함수를 실행

```jsx
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)){
    console.log("Please write a number");
}else{
    console.log("Thank you fo writing your age");
}
//숫자가 아니면 콘솔창에 윗문구 출력,
//숫자면 아래 문구 출력
```

# #2.15 Conditionals part Three

프로그래밍을 하다보면 조건이 하나보다 더 많을 때가 있다. →else if 사용

else문은 위에서 하나라도 true면 아래는 쳐다보지도 않고 끝난다.

```jsx
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)){
    console.log("Please write a number");
}else if(age<18){
    console.log("You are too young")
}else{
    console.log("You can drink")
}
//else if문 사용, if문에서 처음에 true, false값을 거르고 그 이후에 세부적인 수치로 거른다.
```

여기서 동시에 조건을 적용해 볼 것이다.

→ 50 아래 조건 추가

&& 논리연산자 and역할 : 두개 다 맞아야 true

|| 논리연산자 or역할 : 하나만 맞아도 true

```jsx
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)){
    console.log("Please write a number");
}else if(age<18){
    console.log("You are too young");
}else if(age>=18 && age<=50){
    console.log("You can drink");
}else if(age>50 && age<=80){
    console.log("You should exercize");
}else if(age>80){
    console.log("You can do whatever you want.");
}
//여기서 거의 다 포함하는데 유일하게 음수만을 제외
//음수가 나왔을때 too young문구가 아니라 양수를 입력하라고 해야한다.
```

```jsx
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age<0){
    console.log("Please write a real positive number");
}else if(age<18){
    console.log("You are too young");
}else if(age>=18 && age<=50){
    console.log("You can drink");
}else if(age>50 && age<=80){
    console.log("You should exercize");
}else if(age>80){
    console.log("You can do whatever you want.");
}
//AND랑 OR모두 사용했다.
```

위에서 음수일 때 추가한 실습

# #2.16 Recap

이번 강의는 우리가 이때까지 배웠던 것들을 복습!!!

- 연산자 2개만 더 배울 것이다.

```jsx
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age<0){
    console.log("Please write a real positive number");
}else if(age<18){
    console.log("You are too young");
}else if(age>=18 && age<=50){
    console.log("You can drink");
}else if(age>50 && age<=80){
    console.log("You should exercize");
}else if(age===100){
    console.log("wow you are wise");
}//이것은 앞 엘리프 문에서 막히니까 앞쪽으로 옮겨준다.
else if(age>80){
    console.log("You can do whatever you want.");
}
```

===값이 같은지를 체

!== 값이 다른지를 체크

내가 원하는 만큼 conditional을 추가할 수 있다.

# #3.0 The Document Object

가장 중요한 핵심 브라우저 object

콘솔에 document입력하면 html을 보여준다.

→ document : html에 접근하게 해주는 객체

![Untitled](#2%209~3%202%200f9857515d9c4a0785e7458641148572/Untitled%202.png)

내가 JavaScript에서 HTML document객체로부터 title을 가지고 올 수 있다.

title이름은 바꾸려면? Hi로 바꾸려면?

→ document.title = “Hi”

![Untitled](#2%209~3%202%200f9857515d9c4a0785e7458641148572/Untitled%203.png)

자바스크립트는 HTML과 연결되어있다!

document는 website를 의미하기 때문에 기본중 기본!!

document object들을 많이 봐보는게 좋다.

# #3.1 HTML in Javascript

![Untitled](#2%209~3%202%200f9857515d9c4a0785e7458641148572/Untitled%204.png)

자바스크립트와 html이 연결되어있다는 것을 알게해주는 강의

요소들을 바꿔가며 console창에서 바뀌어가는 것들을 확인하는 수업이었다.

```jsx
const title = document.getElementById("title");

title.innerText = "Got you!";
//자바스크립트에서 html요소 변
```

document 함수중에 getElementById를 통해 id로 요소에 접근할 수 있다. 없으면 접근 못함.

# #3.2 Searching For Elements

id가 같은 요소가 찾아지지 않으면 null에러가 나온다.

![Untitled](#2%209~3%202%200f9857515d9c4a0785e7458641148572/Untitled%205.png)

실습자료

각 태그와 아이디 클래스 요소들에 자바스크립트로 접근하는 법을 배웠다.

getElementById

getElementsBy

querySelector은 다양한 요소들을 선택가능하다!