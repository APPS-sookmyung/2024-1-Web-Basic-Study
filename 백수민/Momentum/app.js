const player = {
    name: "nico",
    age: 98,
};

console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player, console);

function plus(a, b) {
    console.log(a + b);
}

plus(5, 10);
plus(1.33453, 9898);
plus(9898, 1.33453);

const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },

    minus: function(a, b) {
        console.log(a - b);
    },

    divide: function(a, b) {
        console.log(a / b);
    }, 

    powerof: function(a, b) {
        console.log(a ** b)
    }
}

calculator.add(30, 5);
calculator.minus(30, 5);
calculator.divide(30, 5);
calculator.powerof(2, 5);