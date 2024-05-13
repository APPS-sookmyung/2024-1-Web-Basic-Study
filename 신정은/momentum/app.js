const calculator = {
    plus: function(a,b) {
        console.log(a+b);
    },
    minus: function(a,b) {
        console.log(a-b);
    },
    times: function(a,b) {
        console.log(a*b);
    },
    divide: function(a,b) {
        console.log(a/b);
    },
    power: function(a,b) {
        console.log(a**b);
    },
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const powerResult = calculator.power(divideResult, minusResult);