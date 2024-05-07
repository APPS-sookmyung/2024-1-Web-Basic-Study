const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];

const nonsense = [1, 2, "hello", false, null, true, undefined, "bini"];

//get item from array
console.log(daysOfWeek[4]);
console.log(daysOfWeek);

//add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);
