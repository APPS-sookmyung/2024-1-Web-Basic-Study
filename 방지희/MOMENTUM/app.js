// const player = {
//     name: "Nico",
//     age: 98,
// };
// console.log(player);
// player.name = "nicolas";
// console.log(player);
// player.sexy = "soon";
// console.log(player, console);

// function plus(potato, salad) {
//     console.log(potato + salad);
// }


// plus(5, 10):
// plus(1.33453, 9898);
// plus(9898, 1.33453);

// function minusFive(potato) {
//     console.log(potato + salad);
// }

// minusFive(5, 10, 12, 34, 4, 5, 6, 7);

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    min: function (a, b) {
        console.log(a - b);
    },
    div: function (a, b) {
        console.log(a / b);
    },
    mul: function (a, b) {
        console.log(a * b);
    },
    powerof: function (a, b) {
        console.log(a ** b);
    }
}

calculator.add(1, 2);
calculator.min(2, 1);
calculator.div(1, 2);
calculator.mul(5, 3);
calculator.powerof(2, 3);