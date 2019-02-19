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
	let dayOfWeek = today.getDay();
	
	let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	
	document.getElementById(elementId).innerHTML = day + " " + monthName[month] + " " + year + ", " + dayName[dayOfWeek];
}

function displayDateTime(timeElement, dateElement) {
	displayTime(timeElement);
	displayDate(dateElement);
}