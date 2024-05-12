// const age = prompt("How old are you?");

// console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age)) {
  ///condition ==true
  console.log("Please write a number");
} else {
  ///condition ==false
  console.log("Thank you for writing your age.");
}
