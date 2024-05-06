alert("hi");

const a = 5;
const b = "2";
const myName = "geenie";
console.log(a + 2);
console.log(a * 2);
console.log(a / b);
console.log("hello " + myName);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something, amIFat);

lst = [1, 2, 3];
console.log(lst[9999]); //undefined

const player = {
  name: "ginny",
  age: "22",
  fat: true,
};
console.log(player.name);
console.log(player["name"]); //다른 방법
player.points = player.points + 15;
console.log(player.points);

function sayHello(nameOfPerson, age) {
  console.log(nameOfPerson + age);
}
sayHello("nico", 10);

function divide(a, b) {
  console.log(a / b);
}
divide(10, 2);

const player = {
  name: "geenie",
  sayHello: function (otherpersonsname) {
    console.log("hello! " + otherpersonsname + " nice to meet you");
  },
}; // 함수 안에 함수 정의
console.log(player.name);
player.sayHello("lynn");
player.sayHello("지원이");
