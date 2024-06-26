const images = ["apps 배경사진1.jpg","apps 배경사진2.jpg","apps 배경사진3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);