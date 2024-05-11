const player = {
  name: "jeewon",
  age: 98,
};

//console.log(player);
player.name = "heenie";
//console.log(player);
player.sexy = "soon";
//console.log(player, console);

//계산기 실습
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const pr = calculator.add(5, 1);
const minr = calculator.minus(3, 2);
const dr = calculator.div(4, 7);
const mulr = calculator.multi(5, 2);
const powr = calculator.power(2, 8);
