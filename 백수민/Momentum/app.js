function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10); // "Hello my name is nico and I'm 10
sayHello("dal", 23); // "Hello my name is dal and I'm 23
sayHello("lynn", 21); // "Hello my name is lynn and I'm 21

function plus(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function divide(a, b) {
    console.log(a / b);
}

console.log(firstNum);
plus(8, 60); // 68
divide(98, 20); // 4.9

const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " +  otherPersonsName + " nice to meet you!");
    }
}

console.log(player.name); // nico
player.sayHello("lynn"); // hello lynn nice to meet you!