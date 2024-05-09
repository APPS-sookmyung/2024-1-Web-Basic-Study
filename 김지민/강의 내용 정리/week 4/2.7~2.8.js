function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("A",10);
sayHello("B",11);
sayHello("C",12);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(a,b){
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);

const player2 = {
    name: "p",
    sayHello: function (otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    }
};

console.log(player2.name);
player2.sayHello("q")
player2.sayHello("r")