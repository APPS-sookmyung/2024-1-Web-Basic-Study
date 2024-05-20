const h1 = document.querySelector("div.hello:first-child h1")
//h1을 가지고 요소를 가져옴
function handTitleClick(){
   h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOD");
}
h1.addEventListener("click", handTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//h1클릭이벤트를 듣고 발생하면 function을 실행 - handTitleClick()이 아닌 이유 : 바로 실행이 아니라 조건이 맞을 때 실행시키려고.


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline)