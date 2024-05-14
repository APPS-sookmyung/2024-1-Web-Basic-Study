const calculator = {
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    divide : function(a,b){
        return a/b;
    },
    times : function(a,b){
        return a*b;
    },
    power : function(a,b){
        return a**b
    }

};

const plusResult = calculator.plus(2,3);//5
const minusResult = calculator.minus(plusResult, 10);//-5
const timesResult = calculator.times(10,minusResult);//-50
const divideResult = calculator.divide(timesResult, plusResult);//-10
const powerofResult = calculator.power(divideResult, minusResult)
//이 코드들은 서로 의존 중이다.
