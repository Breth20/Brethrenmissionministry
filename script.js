
let menuButton = document.getElementById("menuButton");
let mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.onclick = function () {
        mobileMenu.classList.toggle("show");
    };
}