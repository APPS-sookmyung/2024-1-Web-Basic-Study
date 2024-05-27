const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const uUSERNAME_KEY = loginInput.value;
    localStorage.set("username", USERNAME_KEY);
    paintGreetings();
    //greeting.innerText = "Hello " + USERNAME_KEY;
    //greeting.innerText = `Hello ${USERNAME_KEY}`;
    //greeting.classList.remove(HIDDEN_CLASSNAME)
    // const USERNAME_KEY = loginInput.value;
    // console.log(username);
}

function paintGreetings(username) {
        const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(loginInput.value);
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem("USERNAME_KEY");
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings();
}
