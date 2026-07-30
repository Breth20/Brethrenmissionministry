// =======================================
// MOBILE MENU
// =======================================
let menuButton=document.getElementById("menuButton");
let mobileMenu=document.getElementById("mobileMenu");
if(menuButton&&mobileMenu){
menuButton.onclick=function(){
mobileMenu.classList.toggle("show");
};
}

// =======================================
// SCROLL ANIMATIONS
// =======================================
const animatedItems=document.querySelectorAll(".fade-in,.slide-up,.stagger");
const observer=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});
animatedItems.forEach(function(item){
observer.observe(item);
});

// =======================================
// EVENTS CALENDAR
// =======================================

const monthYear=document.getElementById("monthYear");
const calendarBody=document.getElementById("calendarBody");
const prevMonth=document.getElementById("prevMonth");
const nextMonth=document.getElementById("nextMonth");
const todayBtn=document.getElementById("todayBtn");

if(monthYear&&calendarBody){

let currentDate=new Date();

const events={
"2026-08-30":{
title:"📖 Matchless Love Literature Distribution",
location:"Misufini, Namtumbo, Tanzania",
time:"8:00 AM - 5:00 PM",
category:"Literature Evangelism",
button:"Join.html"
},
"2026-08-31":{
title:"📖 Matchless Love Literature Distribution",
location:"Hamuyebe, Ukerewe, Tanzania",
time:"8:00 AM - 5:00 PM",
category:"Literature Evangelism",
button:"Join.html"
}
};

function generateCalendar(date){

calendarBody.innerHTML="";

const year=date.getFullYear();
const month=date.getMonth();

const monthNames=[
"January","February","March","April",
"May","June","July","August",
"September","October","November","December"
];

monthYear.textContent=monthNames[month]+" "+year;

const firstDay=new Date(year,month,1).getDay();
const lastDate=new Date(year,month+1,0).getDate();

let row=document.createElement("tr");

for(let i=0;i<firstDay;i++){
let empty=document.createElement("td");
empty.classList.add("empty-day");
row.appendChild(empty);
}

const today=new Date();

for(let day=1;day<=lastDate;day++){

let cell=document.createElement("td");
let weekDay=new Date(year,month,day).getDay();

cell.textContent=day;

let dateKey=year+"-"+String(month+1).padStart(2,"0")+"-"+String(day).padStart(2,"0");

if(events[dateKey]){

cell.classList.add("event-day");

cell.onclick=function(){

let event=events[dateKey];

document.getElementById("eventDetails").innerHTML=`
<h2>${event.title}</h2>
<p><strong>📅 Date:</strong> ${day} ${monthNames[month]} ${year}</p>
<p><strong>📍 Location:</strong> ${event.location}</p>
<p><strong>🕘 Time:</strong> ${event.time}</p>
<p><strong>🏷 Category:</strong> ${event.category}</p>
<p><a href="${event.button}" class="button-link">Join This Mission</a></p>
`;

document.getElementById("eventDetails").scrollIntoView({
behavior:"smooth"
});

};

}

if(weekDay===5&&!events[dateKey]){

cell.classList.add("zoom-day");

cell.onclick=function(){

document.getElementById("eventDetails").innerHTML=`
<h2>💻 Weekly Online Fellowship & Prayer Meeting</h2>
<p><strong>📅 Schedule:</strong> Every Friday</p>
<p><strong>🕘 Time:</strong> 9:00 PM East Africa Time (EAT)</p>
<p><strong>Meeting ID:</strong> 830 0666 5044</p>
<p><strong>Passcode:</strong> 8DbRnh</p>
<p><a href="https://us05web.zoom.us/j/83006665044?pwd=21lFx9Ru7wfHDSYSY1krI022LXFdgK.1" target="_blank" class="button-link">🎥 Join Zoom Meeting</a></p>
<p><a href="https://us05web.zoom.us/meeting/tZctd--uqD4qHtBf5fgVGnx5k3_xFjkt_QhT/ics" target="_blank" class="button-link">📅 Add to My Calendar</a></p>
<p>Everyone is welcome to join our weekly fellowship for worship, prayer, Bible study, and ministry updates.</p>
`;

document.getElementById("eventDetails").scrollIntoView({
behavior:"smooth"
});

};

}

if(day===today.getDate()&&month===today.getMonth()&&year===today.getFullYear()){
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


// Generate Calendar
generateCalendar(currentDate);


// Previous Month
if(prevMonth){
prevMonth.onclick=function(){
currentDate.setMonth(currentDate.getMonth()-1);
generateCalendar(currentDate);
};
}


// Next Month
if(nextMonth){
nextMonth.onclick=function(){
currentDate.setMonth(currentDate.getMonth()+1);
generateCalendar(currentDate);
};
}


// Today Button
if(todayBtn){
todayBtn.onclick=function(){
currentDate=new Date();
generateCalendar(currentDate);
};
}

}

// =======================================
// LANGUAGE SWITCHER
// =======================================

const pageMap={
    // English → Swahili
    "index.html":"mwanzo.html",
    "about.html":"kuhusu-sisi.html",
    "ministry.html":"huduma-yetu.html",
    "Events.html":"matukio.html",
    "service-requests.html":"maombi-ya-huduma.html",
    "downloads.html":"pakua-vitabu-bila-malipo.html",
    "Join.html":"jiunge-nasi.html",
    "Donate.html":"changia-huduma.html",
    "contact.html":"wasiliana-nasi.html",

    // Swahili → English
    "mwanzo.html":"index.html",
    "kuhusu-sisi.html":"about.html",
    "huduma-yetu.html":"ministry.html",
    "matukio.html":"Events.html",
    "maombi-ya-huduma.html":"service-requests.html",
    "pakua-vitabu-bila-malipo.html":"downloads.html",
    "jiunge-nasi.html":"Join.html",
    "changia-huduma.html":"Donate.html",
    "wasiliana-nasi.html":"contact.html"
};

const swahiliPages=[
    "mwanzo.html",
    "kuhusu-sisi.html",
    "huduma-yetu.html",
    "matukio.html",
    "maombi-ya-huduma.html",
    "pakua-vitabu-bila-malipo.html",
    "jiunge-nasi.html",
    "changia-huduma.html",
    "wasiliana-nasi.html"
];

function setupLanguageSwitcher(selectId){

    const selector=document.getElementById(selectId);
    if(!selector)return;

    const currentPage=decodeURIComponent(
        window.location.pathname.split("/").pop()
    );

    selector.value=swahiliPages.includes(currentPage)?"sw":"en";

    selector.addEventListener("change",function(){

        const selectedLanguage=this.value;
        const isSwahili=swahiliPages.includes(currentPage);

        if(
            (selectedLanguage==="en"&&!isSwahili)||
            (selectedLanguage==="sw"&&isSwahili)
        ){
            return;
        }

        const targetPage=pageMap[currentPage];

        if(targetPage){
            window.location.href=targetPage;
        }

    });

}

setupLanguageSwitcher("languageSelect");
setupLanguageSwitcher("mobileLanguageSelect");