const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    // console.log("hello",loginInput.value);
    // console.dir(loginInput);
    // console.log("click!");
    const username = loginInput.value;
    console.log(username);
    // if (username === ""){
    //     alert("Please write your name.");
    // } else if(username.length > 15) {
    //     alert("Your name is too long.")
    // }
}

loginButton.addEventListener("click",onLoginBtnClick);

