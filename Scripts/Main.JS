// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("./Pages/Main/Main.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("main").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});