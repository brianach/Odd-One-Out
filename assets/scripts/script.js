// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var oddOne = "" ;                                               //* holds the odd one out array entry
var currPuzz = 0 ;                                              //*counter to check which puzzle from the puzzles array is currently active
var scorePoint = 0 ;
var puzzle = "" ;
var currentId = "" ;                                            //* id of the currently selected button 
var gameLevel = 0 ;                                             //* set initial value for level
var nxtLvlFlag = 0 ;                                            //* flag for level change

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
const altpuzzles = [] ;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {
            button.addEventListener("click", function(e) {
                console.log(e.currentTarget.id);                //* get the id of the object
                currentId =  e.currentTarget.id ;
                    playLevel();
            });
        }    
});

document.getElementById("levelbox").innerText = 0 ;
setPuzzOne();                                                 

function setPuzzOne(){                                          //* randomize the order of the puzzles and load the first puzzle array
  
    altpuzzles.push(...puzzles);                                //* clone the puzzles array to preserve original
    altpuzzles.sort(() => Math.random() - 0.5) ;                //* randomize puzzles
    puzzle = altpuzzles[currPuzz] ;                             //* set the first puzzle 
    oddOne = puzzle[3] ;                                        //* copy the last entry of the puzzle array which is the odd one out
    puzzle.sort(() => Math.random() - 0.5) ;                    //* randomize the order of the buttons before rendering
    newPuzz() ;                                                 //* function to render puzzle icons
}

function newPuzz() {                                            //* render the icons for the current puzzle
    for (let btn = 0 ; btn < 4 ; ++ btn ) {                     //* load an icon into each button from the puzzle array
        currentId = "b-".concat(btn + 1);                       //* load variable with the current button id
        myIcon = document.getElementById(currentId);            //* get the button information of the current id
        myIcon.setAttribute('class', `${puzzle[btn]} fa-5x`);   //* assign the icon from the current puzzle array location to the button
        if ( oddOne === puzzle[btn] ) {                         //* check if the currently selected button matches the odd one out
            myIcon.setAttribute('odd-flag', 1)                  //* set the odd-flag attribute to 1 if the odd one out matches
        } else {
            myIcon.setAttribute('odd-flag', 0)                  //* if the wrong button is clicked then set the odd-flag to 0
        }
        currentId = "" ;                                        //* reinitialize current button id for the next puzzle
    }    
}

function playLevel() {                                          //* play the current level
    document.getElementById("scorebox").innerText = 0 ;         
    playPuzz() ;
}

function playPuzz (){                                           //*play the currently presented puzzle

    //*var buttonTimer = setTimeout("alert('Oh noes! you didnt click the button :(');", 5000);
    scoreFlag = parseInt(document.getElementById(currentId).getAttribute('odd-flag'));          //* get the flag value of the clicked button (0 or 1) 
    scoreCalc(scoreFlag);                                       //* send the result to the score calculation function

    ++ currPuzz ;                                               //* increment the puzzle count so that the next puzzle loads after score calculation

    if ( currPuzz >= 9 && scorePoint >= 10 ) {
        scoreCalc(); 
    } else { 
    puzzle = altpuzzles[currPuzz] ;                             //* set the puzzle to the current puzzle array value
    oddOne = puzzle[3] ;                                        //* copy the last entry of the current puzzle array which is the odd one out into a variable
    puzzle.sort(() => Math.random() - 0.5) ;                    //* randomize the order of the buttons so that the odd one isn't always in the same location
    newPuzz() ;                                                 //* call the function that renders the puzzle array buttons
    }
}

function scoreCalc(){

    if ( scoreFlag === 1 ) {
        document.getElementById("scorebox").innerText = ++scorePoint ;
    } else {                                                    //* if the odd one out is not seletect decrement the score
        document.getElementById("scorebox").innerText = --scorePoint ;
    } 

    if ( currPuzz >= 10 && scorePoint < 10 ) {
        sayMessage = "Hard luck. Restart to try again !";
        nextLevel(sayMessage);
    } else if ( currPuzz >= 9 && scorePoint >= 10 ) {
        gameLevel++ ;
        sayMessage = `Well Done. You've made it to round ${gameLevel} !`;
        nextLevel(sayMessage);
        currPuzz = scorePoint = 0 ;                              //* reset the puzzles array and score
        setPuzzOne();
    }
}

function nextLevel(sayMessage) {
    document.getElementById("levelbox").innerText = gameLevel ;
    altpuzzles.length = 0 ;                                     //* clear the array for each new level
    alert(sayMessage);
}     