// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Slideshow/Slideshow.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("slideshow").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});