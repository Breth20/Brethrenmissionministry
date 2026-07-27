
let menuButton = document.getElementById("menuButton");
let mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.onclick = function () {
        mobileMenu.classList.toggle("show");
    };
}

const languageSelectors = document.querySelectorAll("select");
languageSelectors.forEach(function(selector){
selector.addEventListener("change", function(){
let language = this.value;
alert("Selected language: " + language);
});
});