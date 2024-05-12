// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

const calculator = {
  plus: function (a, b) {
    return a + b; //return 작성하면 function 끝남
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
