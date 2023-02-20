//* initialize and set up game variables

var oddOne = ""; //* holds the odd one out array entry
var currPuzz = 0; //*counter to check which puzzle from the puzzles array is currently active
var scorePoint = 0;
var puzzle = "";
var userName = "";
var currentId = ""; //* id of the currently selected button
var gameRound = 0; //* set initial value for round
var nxtLvlFlag = 0; //* flag for round change
var winSound = "";
var timerLength = 10000;
let timerIsLive = true;
let gameTimeout = null;
let quizPlay = document.querySelector(".username-input");
const gameButtons = document.querySelectorAll(".game-button");
const resultContainer = document.querySelector("#result");

//* array to hold arrays of icons for of all ten puzzles
const puzzles = [
	(alpha = ["fas fa-a", "fas fa-i", "fas fa-u", "fas fa-z"]),
	(animals = ["fas fa-cat", "fas fa-dog", "fas fa-horse", "fas fa-fish"]),
	(clouds = ["fas fa-cloud", "fas fa-cloud-showers-heavy", "fas fa-cloud-rain", "fas fa-sun"]),
	(danger = ["fas fa-radiation", "fas fa-biohazard", "fas fa-hurricane", "fas fa-person-walking-arrow-right"]),
	(devices = ["fas fa-desktop", "fas fa-mobile-screen", "fas fa-laptop", "fas fa-microchip"]),
	(faces = ["far fa-face-smile", "far fa-face-laugh", "far fa-face-grin", "far fa-face-frown"]),
	(foods = ["fas fa-egg", "fas fa-apple-whole", "fas fa-lemon", "fas fa-wine-glass"]),
	(homes = ["fas fa-house-circle-xmark", "fas fa-house-circle-exclamation", "fas fa-house-circle-check", "fas fa-house"]),
	(motor = ["fas fa-car-side", "fas fa-truck", "fas fa-truck-pickup", "fas fa-motorcycle"]),
	(tools = ["fas fa-hammer", "fas fa-wrench", "fas fa-trowel", "fas fa-pencil"])
];
const altpuzzles = []; //* temporary puzzles array
const altpuzzle = []; //* temporary puzzle

//* Get username
document
	.querySelector("#uname-in")
	.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			getUser();
		}
	});

//* hide game play area section while username input is in progress
let playArea = document.querySelector(".game-area");
playArea.style.display = "none";
let scoreArea = document.querySelector(".score-area");
scoreArea.style.display = "none";
document.getElementsByTagName("h3")[0].innerText =
	"Type your username below then press enter.";

function getUser() {
	userName = document.getElementById("uname-in").value;

	if (userName.trim() == "") {
		response.textContent = `You have to type in a username to play !`;
		response.style.color = "#F6A38E";
		setTimeout(clearName, 3000);
	} else {
		document.getElementsByTagName(
			"h3"
		)[0].innerText = `Hi ${userName}, click the lightbulb to play`;
		quizPlay.addEventListener("click", clearUserInp);
	}
	function clearName() {
		response.style.color = "white";
	}
}

//* Main game section

function clearUserInp() {
	let playArea = document.querySelector(".username-input");
	playArea.style.display = "none";
	playTheGame();
}

function playTheGame() {
	let playArea = document.querySelector(".game-area");
	playArea.style.display = "grid";
	let scoreArea = document.querySelector(".score-area");
	scoreArea.style.display = "flex";

}

gameButtons.forEach((button) =>
	button.addEventListener("click", buttonClickHandler)

);

document.getElementById("roundbox").innerText = 0;
setPuzzOne();

function setPuzzOne() {
	//* randomize the order of the puzzles and load the first puzzle array

	altpuzzles.push(...puzzles); //* clone the puzzles array to preserve original
	altpuzzles.sort(() => Math.random() - 0.5); //* randomize puzzles
	puzzle = altpuzzles[currPuzz];
	altpuzzle.push(...puzzle); //* set the first puzzle while preserving original
	oddOne = altpuzzle[3]; //* copy the last entry of the puzzle array which is the odd one out
	altpuzzle.sort(() => Math.random() - 0.5); //* randomize the order of the buttons before rendering
	currPuzz++; //* increment in order to load new puzzle after intial load
	newPuzz(); //* function to render puzzle icons
}

function newPuzz() {
	//* render the icons for the current puzzle
	for (let btn = 0; btn < 4; ++btn) {
		//* load an icon into each button from the puzzle array
		currentId = "b-".concat(btn + 1); //* load variable with the current button id
		myIcon = document.getElementById(currentId); //* get the button information of the current id
		myIcon.setAttribute("class", `${altpuzzle[btn]} fa-5x`); //* assign the icon from the current puzzle array location to the button
		if (oddOne === altpuzzle[btn]) {
			//* check if the currently selected button matches the odd one out
			myIcon.setAttribute("odd-flag", 1); //* set the odd-flag attribute to 1 if the odd one out matches
		} else {
			myIcon.setAttribute("odd-flag", 0); //* if the wrong button is clicked then set the odd-flag to 0
		}
	}
	currentId = ""; //* reinitialize current button id for the next puzzle
	altpuzzle.length = 0; //* reinitialize current array for the next puzzle
}

function playRound(currentId) {
	//* play the current round
	playPuzz(currentId);
}

function playPuzz(currentId) {
	//*play the currently presented puzzle

	scoreFlag = parseInt(
		document.getElementById(currentId).getAttribute("odd-flag")
	); //* get the flag value of the clicked button (0 or 1)
	scoreCalc(scoreFlag); //* send the result to the score calculation function

	if (currPuzz === 10) {
		return false;
	}
	puzzle = altpuzzles[currPuzz]; //* set the puzzle to the current puzzle array value while preserving original
	altpuzzle.push(...puzzle);
	oddOne = altpuzzle[3]; //* copy the last entry of the current puzzle array which is the odd one out into a variable
	altpuzzle.sort(() => Math.random() - 0.5); //* randomize the order of the buttons so that the odd one isn't always in the same location
	newPuzz(); //* call the function that renders the puzzle array buttons

	++currPuzz; //* increment the puzzle count so that the next puzzle loads after score calculation
}

function scoreCalc() {
	if (scoreFlag === 1) {
		document.getElementById("scorebox").innerText = ++scorePoint;
	} else {
		//* if the odd one out is not seletect decrement the score
		document.getElementById("scorebox").innerText = --scorePoint;
	}

	if (currPuzz >= 10 && scorePoint < 10) {
		resultContainer.innerText = "Hard luck. Try again !";

		winSound = new playSound("assets/snd/foghorn.mp3"); //* party trumpet sound
		winSound.play();

		setTimeout(reStart, 2000);
	} else if (currPuzz >= 10 && scorePoint >= 10) {
		gameRound++;

	  winSound = new playSound("assets/snd/partypop.mp3"); //* party trumpet sound
		winSound.play();

		setTimeout(nextRound, 2000); //* wait 5 seconds to enjoy win before next round
	}
}

function nextRound() {

	currPuzz = scorePoint = 0; //* reset the puzzle count to 0
	document.getElementById("roundbox").innerText = gameRound; //* increment the round
	document.getElementById("scorebox").innerText = scorePoint; //* reset score to 0 for next round
	altpuzzles.length = 0; //* reset nested array for new round
	setPuzzOne(); //* call the first puzzle function
}

function playSound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function () {
		this.sound.play();
	};
	this.stop = function () {
		this.sound.pause();
	};
}

function reStart() {
	location.reload();
}

function refreshTimer(buttonText) {
	playPuzz(buttonText);
	//  clear the current timeout to prevent multiples
	clearTimeout(gameTimeout);
	//  refresh the timeout
	timerIsLive = true;
	gameTimeout = setTimeout(stopGame, timerLength);
}

function stopGame() {

	resultContainer.innerText = "Hard Luck. You're out of time. Try again !";
	timerIsLive = false;
	clearTimeout(gameTimeout);
}

function buttonClickHandler(event) {
	if (timerIsLive) {
		const clickedButtonText = event.currentTarget.id; //event.currentTarget.textContent;
		refreshTimer(clickedButtonText);
	}
}
