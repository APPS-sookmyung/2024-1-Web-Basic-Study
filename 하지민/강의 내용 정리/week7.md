## 5.0 Intervals
- `interval`은 '매번'일어나야 하는 무언가
- `setinterval`은 두 개의 **argument**를 받음
  - 첫번째 **argument**: 실행하고자 하는 function
  - 두번째 **argument**: 호출되는 function 간격을 몇ms로 할 지
## 5.1 Timeouts and Dates
- `setTimeout`: 호출하고자 하는 function 넣어주고 + 얼마나 기다릴지 ms 단위로 넣어줄 것
- `getClock` 한번 호출하면 바로 시간을 볼 수 있음, 호출 안할 시 1초 동안은 00:00:00을 표시하고 그 뒤에 시간이 갱신됨.
## 5.2 PadStart
- `padStart()`는 가지고 있는 **string**을 보다 길게 만들어야 할 때 사용하는 것. 원하는 만큼의 길이가 아니라면 **string** 앞쪽에 문자를 끼워넣음.
- `padEnd()`는 뒤쪽에 문자를 추가하는 것.
- `String()`로 감싸서 **string**으로 변환 가능
## 5.3 Recap
- `Date object`는 호출 하는 당시의 현재 날짜랑 시간을 알려줌
## 6.0 Quotes
- 컴퓨터는 0부터 일기에 **Array**의 길이에서 1 빼야 함.
- `random()`: 0부터 1 사이의 랜덤한 숫자를 제공함.
- **Array**가 있을 때 `Array.length`를 사용하면 **Array**의 길이를 반환해줌.
## 6.1 Background
- `Math.floor()`로 숫자를 내림해줌
-`Math.random()`으로 나온 숫자에 **images Array**의 길이 값을 곱한 숫자를 내림
## 6.2 Recap
- `append`는 가장 뒤에, `prepend`는 가장 위에 오게 하는 것.
## 7.0 Setup
- `form`은 `submit` 이벤트를 가짐.
- `submit`의 기본동작은 페이지를 새로고침하는 것.
## 7.1 Adding ToDos
- **greetings** 섹션에서 한 것과 같이, `submit event`를 받고 기본 동작을 막고, input에서 value를 얻어냄.
## 7.2 Deleting To Dos
- `button`의 많은 것들 중에 `parentNode` 혹은 `parentElement`를 통해 무엇이 `button`의 `parent`인지 알 수 있음 ->어떤 게 클릭되었는지를 알 수 있음
- `event.target`을 살펴봐야 하는 상황, target은 클릭된 HTML element
- 모든 **HTML element**에는 하나 이상의 **property**를 가짐.
## 7.3 Saving to Dos
- 브라우저에 무엇을 저장하려면 `localStorage` 이용할 것
- `localStorage`에는 텍스트만 저장 가능함
- `JSON.stringfy`는 Javascript **object**나 **array** 또는 어떤 Javascript 코드도 다 **string**으로 만들어줌.
## 7.4 Loading To Dos part One
- `localStorage` 있는 것들을 불러오는지 배우는
- `JSON.parse`: **string**을 JavaScript **object**로 만들어줌
- 어떨 때는 `savedToDos`가 **null**이 될 때가 있다는 것을 앎
## 7.5 Loading To Dos part Two
- `toDos`가 빈 **array**로 업데이트 되기 때문에 이전 것과 새로운 것 모두 유지할 것. 
- `toDos`를 `let`으로 선언
## 7.6 Deleting To Dos part One
- `localStorage`는 이 `toDos array`를 복사해두는 곳.
- 삭제 시 `localStorage` 업데이트할 것.
## 7.7 Deleting To Dos part Two
- `forEach`는 `painToDo`를 기본적으로 실행.
- `forEach`는 각각의 item을 줌, item이 **object**가 되는 것.
- **filter함수** 사용해서 지우고 싶은 것을 제외하고 함수를 만듦.
## 7.8 Deleting To Dos part Three
- **filter function**이 새 **array**를 주는 걸 기억할 것.
- 예전 **array**에는 실제로 작업하지 않음, **filter function**은 새 **array**를 줌.