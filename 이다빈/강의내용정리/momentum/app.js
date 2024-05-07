function sayHello(nameOfPerson, age) {
  console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
}
sayHello("nico", 10); //함수 sayHello에게 "nico" 와 10을 보냄.
sayHello("dal", 23);
sayHello("lynn", 21);

//변수명은 아무거나. 함수 정의 안에서만 존재
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const plyaer = {
  name: "nico",
  sayHello: function (otherPersonName){ //함수가 데이터를 받음
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};

console.log(palyer.name);
player.sayHello("lynn") //함수에 데이터를 보냄
player.sayHello("nico")