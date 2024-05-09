function sayHello(nameOfPerson, age) {
  console.log("Hello my name is" + nameOfPerson + "and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}
plus(60, 8);
divide(98, 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("hello" + otherPersonName + "nice to meet you");
  },
};

player.sayHello("lynn");
player.sayHello("nico");

function plus(a, b) {
  console.log(a + b);
}

plus(5, 5);
