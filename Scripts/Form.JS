// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Form/Form.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("contactMe").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});