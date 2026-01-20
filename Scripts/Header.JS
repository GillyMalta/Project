// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Header/Header.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});