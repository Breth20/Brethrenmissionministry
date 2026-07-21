let welcomeButton = document.getElementById("welcomeButton");
welcomeButton.onclick = function() {

    document.getElementById("message").textContent =
    "Thank you for visiting Brethren Mission Ministry.";
};

let contactButton = document.getElementById("contactButton");
contactButton.onclick = function () {

    if (contactButton.textContent === "Our Contacts") {
        contactButton.textContent = "+255 719 745 738";
    } else {
        contactButton.textContent = "Our Contacts";
    }
};
let menuButton = document.getElementById("menuButton");

let topMenu = document.getElementById("topMenu");

menuButton.onclick = function(){

topMenu.classList.toggle("show");

}