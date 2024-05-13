const age = 96;

function calculateKrAge(ageOfForeigner) {
    ageOfForeigner + 2;
    return "hello";
}

const krAge = calculateKrAge(age);
console.log(krAge);



const calculator = {
    add: function (a, b) {
        return a + b;
    },
    min: function (a, b) {
        return a - b;
    },
    div: function (a, b) {
        return a / b;
    },
    mul: function (a, b) {
        return a * b;
    },
    powerof: function (a, b) {
        return a ** b;
    },
}

const addResult = calculator.add(2, 3);
const minResult = calculator.min(addResult, 10);
const divResult = calculator.div(10, minResult);
const mulResult = calculator.mul(divResult, addResult);
const powerof = calculator.powerof(divResult, minResult);