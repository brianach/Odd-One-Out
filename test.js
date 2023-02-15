const gameButtons = document.querySelectorAll(".game-button");
const resultContainer = document.querySelector('#result');
const timerLength = 2000;
let timerIsLive = true;
let gameTimeout = null;

function refreshTimer(buttonText) {
  //  determine message depending on game state
  if (timerIsLive) {
    resultContainer.innerText = `${buttonText}`;
  } else {
    resultContainer.innerText = 'Waiting...';
  }
  //  clear the current timeout to prevent multiples
  clearTimeout(gameTimeout);
  //  refresh the timeout
  timerIsLive = true;
  gameTimeout = setTimeout(stopGame, timerLength);
  //  just to prevent start button refreshing timer
  //startButton.removeEventListener('click', refreshTimer);
}

function stopGame() {
  resultContainer.innerText = 'Game over';
  timerIsLive = false;
  clearTimeout(gameTimeout);
  //  add the start button listener again
  //startButton.addEventListener('click', refreshTimer);
}

function buttonClickHandler(event) {
  if (timerIsLive) {
    const clickedButtonText = event.currentTarget.id ; //event.currentTarget.textContent;
    refreshTimer(clickedButtonText);
  } else {
    resultContainer.innerText = 'Game not started yet...';
  }
}

gameButtons.forEach(button => button.addEventListener("click", buttonClickHandler));