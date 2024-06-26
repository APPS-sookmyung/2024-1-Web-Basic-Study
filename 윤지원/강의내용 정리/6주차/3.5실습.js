//window resize (event)
function handleWindowResize() {
  document.body.style.backgroundcolor = "tomato";
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("click", handleMouseEnter);
h1.addEventListener("click", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copier");
}
window.addEventListener("copy", handleWindowCopy);
//사용자가 카피를 시도했을 때 발동. listen copy event => activate this event
function handleWindowOffline() {
  alert("SOS No WIFI");
  console.log("NO WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
  console.log("GOOD WIFI");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
