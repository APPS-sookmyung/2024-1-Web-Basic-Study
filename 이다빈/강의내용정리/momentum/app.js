const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // console.log(h1.style.color);
  // h1.style.color = "blue";
  // console.log(h1.style.color);

  // if(h1.style.color === "blue"){
  //   h1.style.color = "tomato"
  // } else {
  //   h1.style.color = "blue"
  // }

  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato"
  } else {
    newColor = "blue"
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);