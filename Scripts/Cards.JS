// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Cards/Cards.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("cards").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});