//  initialize and set up game variables
let  oddOne = ""; //  holds the odd one out array entry
let currPuzz = 0; // counter to check which puzzle from the puzzles array is currently active
let scorePoint = 0;
let puzzle = "";
let userName = "";
let currentId = ""; //  id of the currently selected button
let gameRound = 1; //  set initial value for round
let winSound ; //  audio file variable
let myIcon ; //  button id variable
let scoreFlag ;
let pageTitle ;
let quizPlay = document.querySelector(".username-input");
let diffLev = document.querySelector(".diff-lev");
let levelButtons = document.querySelectorAll(".lev-button");
let gameButtons = document.querySelectorAll(".game-button");
let response = document.getElementById("response");
let resultContainer = document.querySelector("#result");
let unameBox = document.querySelector(".uname-entry");

let playArea = document.querySelector(".game-area");
let scoreArea = document.querySelector(".score-area");
let hardNess = document.querySelector(".play-level");

//  main array to hold arrays of icons for of all ten puzzles
let alpha, animals, clouds, danger, devices, faces, foods, homes, motor, tools ;
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

const altpuzzles = []; //  temporary puzzles array
const altpuzzle = []; //  temporary puzzle

//  progress bar and timer variables
let countdown, sec;
let toggle = true;
let progBar = document.getElementById("my-prog-bar");
let width = 0.0;
let progtime = 0.0; //  progress bar increment variable
let roundtime ; //  set initial time to allow for 10 rounds of play

getUname();

/** I used a reworked version of the code from Sanda Bergstrom's TicTacToe project for the user input
 *  displayName function at line 36 https://sandrabergstrom.github.io/PP2/
 */

function getUname() {
  document
    .querySelector("#uname-in")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        respondUser();
      }
    });
  //  hide game play area section while username input is in progress
  playArea.style.display = "none";
  scoreArea.style.display = "none";
  hardNess.style.display = "none";
  diffLev.style.display = "none";

  document.getElementsByTagName("h3")[0].innerText =
    "Type your username below then press enter.";
}

//  username input validation and response section
function respondUser() {
  //  feedback for username input section
  userName = document.getElementById("uname-in").value;
  if (userName.trim() == "") {
    //  warn player that they have not entered a username
    response.textContent = `You have to type in a username to play !`;
    response.style.color = "red";
    setTimeout(clearName, 3000);
  } else if (userName.length > 15) {
    //  warn player that the username doesn't conform to requirements
    response.textContent = `Please use no more than 15 letters and/or numbers.`;
    response.style.color = "red";
    setTimeout(clearName, 3000);
  } else if (!/^[a-zA-Z0-9]+$/.test(userName)) {
    // warn player that the username contains invalid characters
    response.textContent = `Please use only letters and/or numbers.`;
    response.style.color = "red";
    setTimeout(clearName, 3000);
  } else {
    //  respond to the player once they entered their username
    document.getElementsByTagName("h2")[0].style.display = "none";
    unameBox.style.display = "none";
    hardNess.style.display = "block";
    document.getElementsByTagName(
      "h3"
    )[0].innerHTML = `Hi <span style="font-size:30px">${userName}! <br/>`;
    diffLev.style.display = "block" ;
  }
  function clearName() {
    response.style.color = "white";
  }
}

//  Main game section

levelButtons.forEach((button) =>
  button.addEventListener("click", levelButtonHandler)
);

//  game level selection 
function levelButtonHandler(event) {
  if (event.currentTarget.id === "easy") {
    roundtime = 200;
  } else if (event.currentTarget.id === "normal") {
    roundtime = 150;
  } else if (event.currentTarget.id === "hard") {
    roundtime = 100;
  } else {
    alert(`Something went wrong`);
  }
  quizPlay.addEventListener("click", clearUserInp);
}

//  hide the username input section
function clearUserInp() {
  quizPlay.style.display = "none";
  revealGameArea();
}

//  reveal the game area after user input section
function revealGameArea() {
  playArea.style.display = "flex";
  scoreArea.style.display = "flex";
  setPuzzOne();
}

//  handlers for button click events section
gameButtons.forEach((
  button //  listen for mouse clicks in the main game area
) => button.addEventListener("click", buttonClickHandler));

function buttonClickHandler(event) {
  //  button click logic decision code
  const clickedButtonText = event.currentTarget.id; //event.currentTarget.textContent;
  refreshTimer(clickedButtonText); //  set the level timer
}

//  randomize the order of the puzzles and load the first puzzle array
function setPuzzOne() {
  altpuzzles.push(...puzzles); //  clone the puzzles array to preserve original
  altpuzzles.sort(() => Math.random() - 0.5); //  randomize puzzles
  puzzle = altpuzzles[currPuzz];
  altpuzzle.push(...puzzle); //  set the first puzzle while preserving original
  oddOne = altpuzzle[3]; //  copy the last entry of the puzzle array which is the odd one out
  altpuzzle.sort(() => Math.random() - 0.5); //  randomize the order of the buttons before rendering
  currPuzz++; //  increment in order to load new puzzle after intial load
  startTimer(); // set up the first instance of the timer
  newPuzz(); //  function to render puzzle icons
}

//  set up and display the icons for the current puzzle
function newPuzz() {
  for (let btn = 0; btn < 4; ++btn) {
    //  load an icon into each button from the puzzle array
    currentId = "b-".concat(btn + 1); //  load variable with the current button id
    myIcon = document.getElementById(currentId); //  get the button information of the current id
    myIcon.setAttribute("class", `${altpuzzle[btn]} fa-5x`); //  assign the icon from the current puzzle array location to the button
    myIcon.style.width = "120px"; //  make sure icons are always the same width
    myIcon.style.border = "none";
    myIcon.style.backgroundColor = "white";

    if (oddOne === altpuzzle[btn]) {
      //  check if the currently selected button matches the odd one out
      myIcon.setAttribute("data-odd-flag", 1); //  set the data-odd-flag attribute to 1 if the odd one out matches
    } else {
      myIcon.setAttribute("data-odd-flag", 0); //  if the wrong button is clicked then set the data-odd-flag to 0
    }
  }
  currentId = ""; //  reinitialize current button id for the next puzzle
  altpuzzle.length = 0; //  reinitialize current array for the next puzzle
}

// play the currently presented puzzle section
function playPuzz(currentId) {
  scoreFlag = parseInt(
    document.getElementById(currentId).getAttribute("data-odd-flag")
  ); //  get the flag value of the clicked button (0 or 1)
  scoreCalc(scoreFlag); //  send the result to the score calculation function

  if (currPuzz === 10) {
    return false;
  }
  puzzle = altpuzzles[currPuzz]; //  set the puzzle to the current puzzle array value while preserving original
  altpuzzle.push(...puzzle);
  oddOne = altpuzzle[3]; //  copy the last entry of the current puzzle array which is the odd one out into a variable
  altpuzzle.sort(() => Math.random() - 0.5); //  randomize the order of the buttons so that the odd one isn't always in the same location
  newPuzz(); //  call the function that renders the puzzle array buttons

  ++currPuzz; //  increment the puzzle count so that the next puzzle loads after score calculation
}

//  section to calculate the score and display on screen
function scoreCalc() { 
  if (scoreFlag === 1) {
    document.getElementById("scorebox").innerText = ++scorePoint;
  } else {
    //  if the odd one out is not seletect decrement the score
    document.getElementById("scorebox").innerText = --scorePoint;
  }
  if (currPuzz >= 10 && scorePoint < 10) { //  fail to get 10 out of 10
    clearInterval(countdown);
    document.getElementById("round-score").style.display = "none";
    resultContainer.innerHTML = `Hard luck ${userName}. <br/> Try again !`;
    winSound = new playSound("assets/snd/foghorn.mp3");
    winSound.play();
    setTimeout(reStart, 5000);
  } else if (currPuzz >= 10 && scorePoint >= 10) { //  made it to next round
    gameRound++;
    roundtime = roundtime - 10; //  reduce round timer by 10 seconds
    clearInterval(countdown);
    document.getElementById(
      "round-score"
    ).innerHTML = `Well done ${userName} !! <br/> You made it to round ${gameRound}.`;
    winSound = new playSound("assets/snd/partypop.mp3");
    winSound.play();
    setTimeout(nextRound, 3000); //  wait 5 seconds to enjoy win before next round
  }
  if (gameRound >= 11) { //  completed all 10 rounds successfully
    clearInterval(countdown);
    wonGame();
  }
}

//  play the next round
function nextRound() {
  currPuzz = scorePoint = 0; //  reset the puzzle count to 0
  document.getElementById(
    "round-score"
  ).innerHTML = `Round <span id="roundbox">1</span> Score <span id="scorebox">0</span>`;
  document.getElementById("roundbox").innerText = gameRound; //  increment the round
  document.getElementById("scorebox").innerText = scorePoint; //  reset score to 0 for next round
  altpuzzles.length = 0; //  reset nested array for new round
  setPuzzOne(); //  call the first puzzle function
}

//  sound file playing section
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

/** I used a reworked version of Maria Szubski's countdown timer here
 * https://gist.github.com/MariaSzubski/14e56eaa04da3c7db7f8
*/
//  start the countdown progress bar
function refreshTimer(buttonText) {
  switch (toggle) {
    case true:
      startTimer();
      break;
    case false:
      resetTimer();
      break;
  }
  playPuzz(buttonText);
}

// out of time function
function stopGame() {
  //  game over alert
  resultContainer.innerHTML = `You ran out of time ${userName}.<br/> Try again !`;
  document.getElementById("round-score").innerHTML = "";
  winSound = new playSound("assets/snd/foghorn.mp3");
  winSound.play();
  setTimeout(reStart, 5000);
}

//  progress timer code functions https://gist.github.com/MariaSzubski/14e56eaa04da3c7db7f8
function startTimer(progTime) {
  sec = roundtime;
  progtime = 100 / sec;
  countdown = setInterval(currentTime, roundtime);
  toggle = false; //  set to false once timer starts so will trigger reset if button is clicked
}

function resetTimer() { // https://gist.github.com/MariaSzubski/14e56eaa04da3c7db7f8
  clearInterval(countdown);
  toggle = true; //  reset the toggle after resetting the countdown
  width = 0;
  progBar.style.width = width;
  startTimer();
}

// Progress bar section
function currentTime() { // 
  if (sec === 0) {
    clearInterval(countdown);
    stopGame();
  }
  sec--; //  the sec variable holds the quiz timer value and alerts if less than 0
  width = width + progtime; //  match progress percentage reminaing seconds (100/sec)
  progBar.style.width = width + "%"; //  draws the progress bar on the page
}

//  game over and game restart section
function reStart() {
  //  this loads the entire game from scratch
  location.reload();
}

function wonGame() {
  //  hide game area and set title

  let playArea = document.querySelector(".game-area");
  playArea.style.display = "none";
  let scoreArea = document.querySelector(".score-area");
  scoreArea.style.display = "none";

  winSound = new playSound("assets/snd/wingame.mp3");
  winSound.play();

  pageTitle = document.getElementsByTagName(
    "h1"
  )[0].innerText = `WooHoo!! ${userName} wins the game !!`;
  document.body.style.paddingTop = "20%"; //  allow for all screens

  setTimeout(reStart, 5000);
}
