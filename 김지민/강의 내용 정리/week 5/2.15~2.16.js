const age3 = parseInt(prompt("How old are you?"));
if (isNaN(age3) || age < 0) {
    console.log("Please write a real positive number.");
} else if(age3 < 18) {
    console.log("You are too young.");
} else if (age3 >= 18 && age3 <= 50){
    console.log("You can drink.");
} else if (age3 >= 50 && age3 <= 80){
   console.log("You should exercise.");
} else if(age3===100){
    console.log("Wow you are wise.");
} else if (age3 > 80){
  console.log("You can do whatever you want.");
}

// true || true == true
// false || true == true
// true || false == true
// false || false == false
// true && true === true
// false && true === false
// true && false === false
// false && false === false
//if((a&&b)||false||false){}