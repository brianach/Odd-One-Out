// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var oddOne = "" ; //* holds the odd one out array entry
var currPuzz = 0 ; //*counter to check which puzzle from the puzzles array is currently active
var scorePoint = 0 ;
var puzzle = "" ;
var currentId = "" ; //* id of the currently selected button 

//* array to hold arrays of icons for of all ten puzzles
const puzzles = [alpha = ['fas fa-a', 'fas fa-i', 'fas fa-u', 'fas fa-z'],
    animals = ['fas fa-cat', 'fas fa-dog', 'fas fa-horse', 'fas fa-fish'], 
    clouds = ['fas fa-cloud', 'fas fa-cloud-showers-heavy', 'fas fa-cloud-rain', 'fas fa-sun'],
    danger = ['fas fa-radiation', 'fas fa-biohazard', 'fas fa-hurricane', 'fas fa-person-walking-arrow-right'],
    devices = ['fas fa-desktop', 'fas fa-mobile-screen', 'fas fa-laptop', 'fas fa-microchip'],
    faces = ['far fa-face-smile', 'far fa-face-laugh', 'far fa-face-grin', 'far fa-face-frown'],
    foods = ['fas fa-egg', 'fas fa-apple-whole', 'fas fa-lemon', 'fas fa-wine-glass'],
    homes = ['fas fa-house-circle-xmark', 'fas fa-house-circle-exclamation', 'fas fa-house-circle-check', 'fas fa-house'],
    motor = ['fas fa-car-side', 'fas fa-truck', 'fas fa-truck-pickup', 'fas fa-motorcycle'], 
    tools = ['fas fa-hammer', 'fas fa-wrench', 'fas fa-trowel', 'fas fa-pencil']]; 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(e) {
            console.log(e.currentTarget.id); //* get the id of the object
            currentId =  e.currentTarget.id ;
            if (this.getAttribute("data-type") === "play-button") {
                playPuzz();
            } else {
                alert(`Something went wrong!`);
            }
        });
    }
});

setPuzzOne(); //* load the first of the 10 puzzles

function setPuzzOne(){
    //* intitialize the first puzzle
    puzzles.sort(() => Math.random() - 0.5) ; //* randomize puzzle array so that the same ones dont load in the same order on a new gamne
    puzzle = puzzles[currPuzz] ; //* set the first puzzle variable
    oddOne = puzzle[3] ; //* copy the last entry of the individual puzzle array which is the odd one out into a control variable
    puzzle.sort(() => Math.random() - 0.5) ; //* randomize the order of the buttons before rendering
    newPuzz() ; //* function to render puzzle icons
}

function playPuzz (){
    myIcon = document.getElementById(currentId); 
    scoreFlag = parseInt(myIcon.getAttribute('odd-flag')); //* if the odd one out is selected increment the score
    scoreCalc(scoreFlag);
    currPuzz ++ ; //* increment the current puzzle flag so that the next puzzle loads afterwards
    if (currPuzz >= 10) {
        setTimeout(scoreCalc, 1000);
    } else {   
    puzzle = puzzles[currPuzz] ; //* set the first puzzle variable
    oddOne = puzzle[3] ;  //* copy the last entry of the individual puzzle array which is the odd one out into a control variable
    puzzle.sort(() => Math.random() - 0.5) ; //* randomize the order of the buttons 
    newPuzz() ;
    }
}

function newPuzz() {
    for (let btn = 0 ; btn < 4 ; btn ++ ) { //* load an icon into each button from the puzzle array
        currentId = "b-".concat(btn + 1); //* create a variabble to check for the current button id
        myIcon = document.getElementById(currentId); //* get the button information of the current id
        myIcon.setAttribute('class', `${puzzle[btn]} fa-5x`); //* assign the individual icon to the button
        if ( oddOne === puzzle[btn] ) { //* check if the currently selected button matches the odd one out
            myIcon.setAttribute('odd-flag', 1) //* set the odd-flag attribute to 1 if the odd one out matches
        } else {
            myIcon.setAttribute('odd-flag', 0) //* if the wrong button is clicked then set the odd-flag to 0
        }
        currentId = "" ; //* reinitialize current button id
    }    
}

function scoreCalc(){
    if ( scoreFlag === 1 ) {
        document.getElementById("scorebox").innerText = ++scorePoint ;
    } else { //* if the odd one out is not seletect decrement the score
        document.getElementById("scorebox").innerText = --scorePoint ;
    }
    if (scorePoint >= 10) {
        sayMessage = "Well Done. You've made it to round 2 !";
        nextLevel(sayMessage);
    } else if (currPuzz >= 10) {
        sayMessage = "Hard luck. Restart to try again !";
        nextLevel(sayMessage);
    }
}

function nextLevel(sayMessage) {
       alert(sayMessage);
}     