
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
const events = {
    "2026-08-30": {
        title: "📖 Matchless Love Literature Distribution",
        location: "Misufini, Namtumbo, Tanzania",
        time: "8:00 AM - 5:00 PM",
        category: "Literature Evangelism",
        button: "Join.html"
    },
    "2026-08-31": {
        title: "📖 Matchless Love Literature Distribution",
        location: "Hamuyebe, Ukerewe, Tanzania",
        time: "8:00 AM - 5:00 PM",
        category: "Literature Evangelism",
        button: "Join.html"
    }
};
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
const weekDay = new Date(year, month, day).getDay();
cell.textContent=day;
const dateKey =
year + "-" +
String(month + 1).padStart(2, "0") + "-" +
String(day).padStart(2, "0");
if(events[dateKey]){
    cell.classList.add("event-day");
    cell.addEventListener("click", function(){
        const event = events[dateKey];
        document.getElementById("eventDetails").innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>📅 Date:</strong> ${day} ${monthNames[month]} ${year}</p>
            <p><strong>📍 Location:</strong> ${event.location}</p>
            <p><strong>🕘 Time:</strong> ${event.time}</p>
            <p><strong>🏷 Category:</strong> ${event.category}</p>
            <p>
                <a href="${event.button}" class="button-link">
                    Join This Mission
                </a>
            </p>
        `;
        document.getElementById("eventDetails").scrollIntoView({
            behavior:"smooth"
        });
    });
}
if(weekDay === 5 && !events[dateKey]){
    cell.classList.add("zoom-day");
    cell.addEventListener("click", function(){
        document.getElementById("eventDetails").innerHTML = `
        <h2>💻 Weekly Online Fellowship & Prayer Meeting</h2>
        <p><strong>📅 Schedule:</strong> Every Friday</p>
        <p><strong>🕘 Time:</strong> 9:00 PM East Africa Time (EAT)</p>
        <p><strong>Meeting ID:</strong> 830 0666 5044</p>
        <p><strong>Passcode:</strong> 8DbRnh</p>
        <p>
        <a href="https://us05web.zoom.us/j/83006665044?pwd=21lFx9Ru7wfHDSYSY1krI022LXFdgK.1"
        target="_blank"
        class="button-link">
        🎥 Join Zoom Meeting
        </a>
        </p>
        <p>
        <a href="https://us05web.zoom.us/meeting/tZctd--uqD4qHtBf5fgVGnx5k3_xFjkt_QhT/ics?icsToken=DINuTiPTFHBk51K9sQAALAAAAITfmMCETmeFI2N63dAuw2Dr8Yb1zdiFaflwS3aSnTzHrp9aWFDuqAz6KGrczJHwYTuOWxLo5dQQAeHRzDAwMDAwMQ&meetingMasterEventId=hakwLq8mTkqTuQayMO2BSg"
        target="_blank"
        class="button-link">
        📅 Add to My Calendar
        </a>
        </p>
        <p>
        Everyone is welcome to join our weekly fellowship for worship, prayer, Bible study, and ministry updates.
        </p>
        `;
        document.getElementById("eventDetails").scrollIntoView({
            behavior:"smooth"
        });
    });
}
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

// =======================================
// LANGUAGE SWITCHER
// =======================================

const pageMap = {
    // English → Swahili
    "index.html": "Mwanzo.html",
    "about.html": "Kuhusu Sisi.html",
    "ministry.html": "Huduma Yetu.html",
    "Events.html": "Matukio.html",
    "service-requests.html": "Maombi ya Huduma.html",
    "downloads.html": "Pakua Vitabu Bila Malipo.html",
    "Join.html": "Jiunge Nasi.html",
    "Donate.html": "Changia Huduma.html",
    "contact.html": "Wasiliana Nasi.html",

    // Swahili → English
    "Mwanzo.html": "index.html",
    "Kuhusu Sisi.html": "about.html",
    "Huduma Yetu.html": "ministry.html",
    "Matukio.html": "Events.html",
    "Maombi ya Huduma.html": "service-requests.html",
    "Pakua Vitabu Bila Malipo.html": "downloads.html",
    "Jiunge Nasi.html": "Join.html",
    "Changia Huduma.html": "Donate.html",
    "Wasiliana Nasi.html": "contact.html"
};
function setupLanguageSwitcher(selectId) {
    const selector = document.getElementById(selectId);
    if (!selector) return;
    const currentPage = window.location.pathname.split("/").pop();
    // Set the correct language automatically
    if ([
        "Mwanzo.html",
        "Kuhusu Sisi.html",
        "Huduma Yetu.html",
        "Matukio.html",
        "Maombi ya Huduma.html",
        "Pakua Vitabu Bila Malipo.html",
        "Jiunge Nasi.html",
        "Changia Huduma.html",
        "Wasiliana Nasi.html"
    ].includes(currentPage)) {
        selector.value = "sw";
    } else {
        selector.value = "en";
    }
    selector.addEventListener("change", function () {
        const target = pageMap[currentPage];
        if (!target) return;
        if (this.value === "en") {
            if (currentPage !== target &&
                target.endsWith(".html") &&
                !currentPage.endsWith(target)) {
                // Swahili → English
                if (currentPage in pageMap) {
                    window.location.href = target;
                }
            }
        }
        if (this.value === "sw") {
            if (currentPage in pageMap) {
                window.location.href = target;
            }
        }
    });
}
setupLanguageSwitcher("languageSelect");
setupLanguageSwitcher("mobileLanguageSelect");