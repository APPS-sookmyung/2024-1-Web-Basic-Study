const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.computedStyleMap.color = "blue";
}

title.addEventListener("click", handleTitleClick);