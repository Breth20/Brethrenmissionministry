
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

const animatedItems = document.querySelectorAll(
".fade-in, .slide-up, .stagger"
);
const observer = new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:0.2
});
animatedItems.forEach(function(item){
observer.observe(item);
});


let backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        backToTop.style.display = "flex";
    }
    else{
        backToTop.style.display = "none";
    }
});
backToTop.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};