const h2 = document.querySelector("div.hello:first-child h2");

function handleTitleClick2() {
    const currentColor =  h2.style.color;
    let newColor;
    if (currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h2.style.color = newColor;
}

h2.addEventListener("click", handleTitleClick2);