// //object
// const player = {
//   name: "Nico",
//   age: 98,
// };
// player.name = "nicolas";
// console.log(player);
// player.sexy = "soon";
// console.log(player, console);

// //function
// function plus(potatato, salad) {
//   console.log(potato + salad);
// }

// plus(5, 10);
// plus(1.3435, 9898);

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiple: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
};

calculator.add(1, 1);
calculator.minus(5, 1);
calculator.multiple(2, 3);
calculator.divide(4, 2);
