const h3 = document.querySelector("div.hello:first-child h3");

function handleTitleClick() {
    const clickedClass = "clicked";
    // if(h3.className=== "clicked"){
    //     h3.className = "";
    // } else {
    //     h3.className = "clicked";
    // }

//     if(h3.classList.contains(clickedClass)) {
//         h3.classList.remove(clickedClass);
//     } else {
//         h3.classList.add(clickedClass);
//     }
// }
    h3.classList.toggle("clicked");
}
h3.addEventListener("click",handleTitleClick);