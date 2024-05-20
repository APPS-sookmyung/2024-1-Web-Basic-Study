const h1 = document.querySelector("div.hello:first-child h1")
//h1을 가지고 요소를 가져옴
function handTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor
}

h1.addEventListener("click", handTitleClick);
