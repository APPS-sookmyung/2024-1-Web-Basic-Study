const age = parseInt(prompt("how old are you?"));
console.log(typeof age); //숫자가 출력될 것이다
const agenew = 15;
console.log(isNaN(agenew));
const age = 7;
if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("you are correct");
}
