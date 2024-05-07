const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false; // 변경
console.log(player);

player.lastName = "potato"; // 추가
console.log(player);

player.points += 15;
console.log(player.points);