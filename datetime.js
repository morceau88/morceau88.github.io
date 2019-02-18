function displayTime(elementId) {
	let today = new Date();
	let time = today.toLocaleTimeString();
	document.getElementById(elementId).innerHTML = time;
	setTimeout(function() {displayTime(elementId)}, 500);
}

function displayDate(elementId) {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth();
	let day = today.getDate();
	let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	document.getElementById(elementId).innerHTML = day + "-" + monthName[month] + "-" + year;
}

function displayDateTime(timeElement, dateElement) {
	displayTime(timeElement);
	displayDate(dateElement);
}