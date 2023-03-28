var video;
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var slowerBtn = document.getElementById("slower");
var fasterBtn = document.getElementById("faster");
var skipBtn = document.getElementById("skip");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

window.addEventListener("click", function() {
	console.log("Left click...");
});

if (pauseBtn) {
	pauseBtn.addEventListener("click", function() {
		console.log("Pause button pressed");
	});
};

if (playBtn) {
	playBtn.addEventListener("click", function() {
		console.log("Play button pressed");
	});
};
if (document.querySelector("#play")) {
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
	});
};


