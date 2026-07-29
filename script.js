
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
if (backToTop) {
    window.addEventListener("scroll", function(){
        if(window.scrollY > 300){
            backToTop.style.display = "flex";
        }
        else{
            backToTop.style.display = "none";
        }
    });
    backToTop.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

let bookSearch = document.getElementById("bookSearch");
if(bookSearch){
bookSearch.addEventListener("input", function(){
let searchValue = this.value.toLowerCase();
let books = document.querySelectorAll(".book-card");
books.forEach(function(book){
let title = book.querySelector("h3").innerText.toLowerCase();
if(title.includes(searchValue)){
    book.classList.remove("hidden-book");
}
else{
    book.classList.add("hidden-book");
}
});
});
}

const monthYear = document.getElementById("monthYear");
const calendarBody = document.getElementById("calendarBody");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const todayBtn = document.getElementById("todayBtn");

if(monthYear && calendarBody){
let currentDate = new Date();
function generateCalendar(date){
calendarBody.innerHTML="";
const year = date.getFullYear();
const month = date.getMonth();
const monthNames=[
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];
monthYear.textContent=
monthNames[month]+" "+year;
const firstDay =
new Date(year,month,1).getDay();
const lastDate =
new Date(year,month+1,0).getDate();
let row=document.createElement("tr");
for(let i=0;i<firstDay;i++){
let empty=document.createElement("td");
empty.classList.add("empty-day");
row.appendChild(empty);
}
const today=new Date();
for(let day=1;day<=lastDate;day++){
let cell=document.createElement("td");
cell.textContent=day;
if(
day===today.getDate() &&
month===today.getMonth() &&
year===today.getFullYear()
){
cell.classList.add("today");
}
row.appendChild(cell);
if((firstDay+day)%7===0){
calendarBody.appendChild(row);
row=document.createElement("tr");
}
}
while(row.children.length<7){
let empty=document.createElement("td");
empty.classList.add("empty-day");
row.appendChild(empty);
}
calendarBody.appendChild(row);
}
generateCalendar(currentDate);
prevMonth.addEventListener("click",function(){
currentDate.setMonth(currentDate.getMonth()-1);
generateCalendar(currentDate);
});
nextMonth.addEventListener("click",function(){
currentDate.setMonth(currentDate.getMonth()+1);
generateCalendar(currentDate);
});
todayBtn.addEventListener("click",function(){
currentDate=new Date();
generateCalendar(currentDate);
});
}