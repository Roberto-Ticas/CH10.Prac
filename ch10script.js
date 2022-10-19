"use strict";
let todaysDate = new Date();
let currMonth = todaysDate.getMonth();
todaysDate = todaysDate.toLocaleDateString();
document.getElementById("today").textContent = todaysDate;
if(currMonth === 9) {
	document.getElementById("special").textContent = "Happy Halloween!";
} else if(currMonth === 6) {
	document.getElementById("special").textContent = "It's 4th of July!";
} else if(currMonth === 11) {
	document.getElementById("special").textContent = "Merry Christmas!";
} else {
	document.getElementById("special").textContent = "It's an ordinary month...";
}
let roster = new Array("Tammy", "Hector", "Amanda", "Brian", "Greg", "Jody", "Jake", "Samantha");
roster.sort();
let rosterHTML = "";
for(let x = 0; x < roster.length; x++) {
	rosterHTML += roster[x] + "<br>";}
document.getElementById("attendance").innerHTML = rosterHTML
let rando = Math.floor(Math.random() * roster.length);
document.getElementById("coffee").textContent = roster[rando];