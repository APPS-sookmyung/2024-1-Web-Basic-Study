function plus (a,b) {
    console.log (a + b);
} // a,b는 이 블록 안에서만 존재

function divide (first, second) {
    console.log(first / second);
}

plus(8, 60);
divide(98,20);

const player = {
    name: "nico",
    sayHello: function(otherName) {
        console.log("helo " + otherName + " nice to meet you");
    }
}

console.log(player.name);
player.sayHello("lynn");
