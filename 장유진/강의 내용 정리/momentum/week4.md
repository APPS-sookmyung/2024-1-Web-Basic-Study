4주차_#1.0 - #2.8
======
# 2.7
function sayHello() {
    console.log("hello my name is")
}

sayHello("유진");
sayHello("nico") 
> 유진, nico 출력이 안됨 

# 2.8 
function sayHello(nameOfPerson,age) {
    console.log("hello my name is" + nameOfPerson + age)
}

sayHello("유진", 10);
sayHello("nico", 21);
> [데이터를 주고 받는 방법] nameOfPerson,age 변수를 통해 해결 가능 