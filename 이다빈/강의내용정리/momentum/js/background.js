const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //어디에도 존재하지 않음

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);