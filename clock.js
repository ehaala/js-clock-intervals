//bonus solutions commented out
// var now = new Date();

// var degrees = 6 * now.getSeconds();
var degrees = 6;
var sec = document.getElementById("second");
var secondRotation = function() {
	sec.style.transform = "rotate(" + degrees + "deg)";
	degrees = degrees + 6;
}
setInterval(secondRotation, 1000);

// var degrees2 = 6 * now.getMinutes() + degrees/60;
var degrees2 = .1;
var min = document.getElementById("minute");
var minuteRotation = function() {
	min.style.transform = "rotate(" + degrees2 + "deg)";
	degrees2 = degrees2 + .1;
}
setInterval(minuteRotation, 1000);

// var degrees3 = 30 * now.getHours() + (degrees2)/12;
var degrees3 = 1/120;
var hr = document.getElementById("hour");
var hourRotation = function() {
	hr.style.transform = "rotate(" + degrees3 + "deg)";
	degrees3 = degrees3 + 1/120;
}
setInterval(hourRotation, 1000);

