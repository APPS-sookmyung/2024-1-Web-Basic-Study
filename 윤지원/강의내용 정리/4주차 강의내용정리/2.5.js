const player = {
  name: "ginny",
  age: "22",
  fat: true,
};
console.log(player.name);
console.log(player["name"]); //다른 방법
player.points = player.points + 15;
console.log(player.points);
