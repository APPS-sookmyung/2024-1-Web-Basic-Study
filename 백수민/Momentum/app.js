const player = {
    name: "nico",
    points: 10,
    fat: true,   
};

console.log(player);
console.log(player.name); 

console.log(player.name);
console.log(player["name"]);

console.log(player.fat); // true
player.fat = false;
console.log(player.fat); // false

player.lastName = "potato";
player.points = player.points + 15;
console.log(player.points);