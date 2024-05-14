const age2 = prompt("How old are you?");

console.log(age2)
console.log(typeof "15", typeof parseInt("15"));

// const age2 = parseInt(prompt("How old are you?"));
// const age2 = parseInt("abc");

console.log(isNaN(age2));

if (isNaN(age2)) {
    console.log("Please write a number.");
} else{
    console.log("Thank you for writing your age.");
}

// const age2 = NaN;
// if (true){
//     console.log("Please write a number.")
// }