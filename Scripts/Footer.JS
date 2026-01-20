// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("./Pages/Footer/Footer.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});