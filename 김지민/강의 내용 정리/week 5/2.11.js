const age = 10;
function calculateKrAge(ageOfForeigner){
    console.log (ageOfForeigner + 2);
}

const krAge = calculateKrAge(age);
console.log (krAge);

const calculator = {
    add: function(a, b){
    return a+b;
    },
    minus: function(a, b){
    return a-b;
    },
    times: function(a, b){
    return a*b;
    },
    divide: function(a, b){
    return a/b;
    },
    power: function(a, b){
    return a**b;
    },
};

const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
