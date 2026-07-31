
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

const pageMap = {

    // English → Kiswahili
    "index.html":"Mwanzo.html",
    "About.html":"Kuhusu-Sisi.html",
    "Ministry.html":"Huduma-Yetu.html",
    "Events.html":"Matukio.html",
    "Service-Requests.html":"Maombi-ya-Huduma.html",
    "Downloads.html":"Pakua-Vitabu-Bila-Malipo.html",
    "Join.html":"Jiunge-Nasi.html",
    "Donate.html":"Changia-Huduma.html",
    "Contact.html":"Wasiliana-Nasi.html",
    "MemberLogin.html":"Ingia-Kwenye-Account.html",


    // Kiswahili → English
    "Mwanzo.html":"index.html",
    "Kuhusu-Sisi.html":"About.html",
    "Huduma-Yetu.html":"Ministry.html",
    "Matukio.html":"Events.html",
    "Maombi-ya-Huduma.html":"Service-Requests.html",
    "Pakua-Vitabu-Bila-Malipo.html":"Downloads.html",
    "Jiunge-Nasi.html":"Join.html",
    "Changia-Huduma.html":"Donate.html",
    "Wasiliana-Nasi.html":"Contact.html",
    "Ingia-Kwenye-Account.html":"MemberLogin.html"

};

const swahiliPages=[
    "Mwanzo.html",
    "Kuhusu-Sisi.html",
    "Huduma-Yetu.html",
    "Matukio.html",
    "Maombi-ya-Huduma.html",
    "Pakua-Vitabu-Bila-Malipo.html",
    "Jiunge-Nasi.html",
    "Changia-Huduma.html",
    "Wasiliana-Nasi.html",
    "Ingia-Kwenye-Account.html"
];


function setupLanguageSwitcher(id){

    const selector=document.getElementById(id);

    if(!selector)return;


    const currentPage=
    decodeURIComponent(
        window.location.pathname.split("/").pop()
    );


    selector.value=
    swahiliPages.includes(currentPage)
    ?"sw"
    :"en";


    selector.onchange=function(){

        const target=pageMap[currentPage];

        if(target){
            window.location.href=target;
        }

    };

}

console.log(document.getElementById("languageSelect"));
console.log(document.getElementById("mobileLanguageSelect"));

setupLanguageSwitcher("languageSelect");
setupLanguageSwitcher("mobileLanguageSelect");

