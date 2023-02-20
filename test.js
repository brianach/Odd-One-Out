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



//* hide game play area section while username input is in progress
let playArea = document.querySelector(".play-screen");
playArea.style.display = "none";

// Will get the username, place it on the board and show next section.
enterNameBtn.addEventListener("click", showUser);

function showUser() {

  let username = document.getElementById("uname-inp").value;
  document.getElementById("displayUname").innerHTML = `<h2>${username}</h2>`;
  if (username.trim() == "") {
      msgName.textContent = `I just have to know your username so we can play !`;
      msgName.style.color = "#F6A38E";
      setTimeout(eraseName, 3000);
  } else {
      let pickCharacter = document.querySelector("#character-area");
      pickCharacter.style.display = "flex";
  }

  function eraseName() {
      msgName.style.color = "white";
  }
}

/** document.querySelectorAll('button').forEach(occurence => {
  let currentId = occurence.getAttribute('id');
  occurence.addEventListener('click', function() {
    playPuzz(currentId);
  } );
});

Code below replaced
 * 
 * document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function (e) {
      console.log(e.currentTarget.id); //* get the id of the object
      currentId = e.currentTarget.id;
      playRound();
    });
  }
});*/
