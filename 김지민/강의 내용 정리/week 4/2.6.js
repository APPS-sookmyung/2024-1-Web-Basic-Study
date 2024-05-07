const player = {
    name: "A",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;
player.lastName = "B";
player.points = player.points + 15;
console.log(player);