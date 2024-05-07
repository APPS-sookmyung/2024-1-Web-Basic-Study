const playerName = "nico";
const playerPoints = 121212;
const plyaerHansome = false;
const playerFat = "little bit";

// const player = ["nico", 121212, false, "little bit"];

//데이터를 최선으로 정리하는 방식 -> object
const player = {
  name: "nico", // = 대신 : 사용
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]); //위 코드와 같음

player.fat = false; //수정
player.lastName = "potato"; //추가
player.points = player.points + 15;