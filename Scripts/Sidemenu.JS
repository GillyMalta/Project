// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Sidemenu/Sidemenu.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("leftMenuPlaceholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});