window.onload = function() 
{

initializeTimer(); 

}
 

function initializeTimer() {

var endDate = new Date(2020,9,31,9,30,31); 

var currentDate = new Date(2020,9,31,8,45,59); 

var seconds = (endDate-currentDate) / 1000; 

if (seconds > 0) { 

var minutes = seconds/60; 

var hours = minutes/60; 

minutes = (hours - Math.floor(hours)) * 60; 

hours = Math.floor(hours); 

seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 

minutes = Math.floor(minutes); 

 

setTimePage(hours,minutes,seconds); 

 

function secOut() {

if (seconds == 0) { 

if (minutes == 0) { 

if (hours == 0) { 

showMessage(timerId); 

}

else {

hours--; 

minutes = 59; 

seconds = 59; 

}

}

else {

minutes--; 

seconds = 59; 

}

}

else {

seconds--; 

}

setTimePage(hours,minutes,seconds);

}

timerId = setInterval(secOut, 1000) 

}

else {

alert("Установленная дата уже прошла");

}

}

 

function setTimePage(h,m,s) { 

var element = document.getElementById("timer-hours"); 
var elementToo = document.getElementById("timer-minute");
var elementThre = document.getElementById("timer-second");
var elementFooter = document.getElementById("footer-timer-hours"); 
var elementTooFooter = document.getElementById("footer-timer-minute");
var elementThreFooter = document.getElementById("footer-timer-second");
element.innerHTML = h; 
elementToo.innerHTML = m; 
elementThre.innerHTML = s; 
elementFooter.innerHTML = h; 
elementTooFooter.innerHTML = m; 
elementThreFooter.innerHTML = s; 
}

 

function showMessage(timerId) {

alert("Время истекло!");

clearInterval(timerId); 

}