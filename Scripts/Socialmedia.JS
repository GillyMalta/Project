// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Socialmedia/Socialmedia.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("socialmedia").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});