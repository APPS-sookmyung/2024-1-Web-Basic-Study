const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// 계속해서 variable을 만들 수 없음
const nosense = [1, 2, "hello", false, null, true, undefined, "nico"];
// 숫자 문자 boolean 등 다 가능
console.log(nosense);

console.log(daysOfWeek);
// Get Item from Array
console.log(daysOfWeek[4]); //0부터 시작하므로 다섯번째 항목을 받기 위해선 4

//Add one more day to the array
daysOfWeek.push("sun");

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");