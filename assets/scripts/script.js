// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var animals = ['fas fa-cat', 'fas fa-dog', 'fas fa-horse', 'fas fa-fish'] ;
var clouds = ['fas fa-cloud', 'fas fa-cloud-showers-heavy', 'fas fa-cloud-rain', 'fas fa-sun'];
var motor = ['fas fa-car-side', 'fas fa-truck', 'fas fa-truck-pickup', 'fas fa-motorcycle'];
var tools =  ['fas fa-hammer', 'fas fa-wrench', 'fas fa-trowel', 'fas fa-pencil'];
var alpha =  ['fas fa-a', 'fas fa-i', 'fas fa-u', 'fas fa-z'];
var homes =  ['fas fa-house-circle-xmark', 'fas fa-house-circle-exclamation', 'fas fa-house-circle-check', 'fas fa-house'];
var foods =  ['fas fa-egg', 'fas fa-apple-whole', 'fas fa-lemon', 'fas fa-wine-glass'];
var devices =  ['fas fa-desktop', 'fas fa-mobile-screen', 'fas fa-laptop', 'fas fa-microchip'];
var danger =  ['fas fa-radiation', 'fas fa-biohazard', 'fas fa-hurricane', 'fas fa-person-walking-arrow-right'];
var faces =  ['far fa-face-smile', 'far fa-face-laugh', 'far fa-face-grin', 'far fa-face-frown'];

var oddOne = '' ;
var currPuzz = 0 ;
var scorePoint = 0 ;

const puzzles = [animals = ['fas fa-cat', 'fas fa-dog', 'fas fa-horse', 'fas fa-fish'], 
    clouds = ['fas fa-cloud', 'fas fa-cloud-showers-heavy', 'fas fa-cloud-rain', 'fas fa-sun'], 
    motor = ['fas fa-car-side', 'fas fa-truck', 'fas fa-truck-pickup', 'fas fa-motorcycle'], 
    tools =  ['fas fa-hammer', 'fas fa-wrench', 'fas fa-trowel', 'fas fa-pencil'], 
    alpha =  ['fas fa-a', 'fas fa-i', 'fas fa-u', 'fas fa-z']]; //* array to hols arrays of all puzzles

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-button") {
                playPuzz();
            } else {
                alert(`Something went wrong!`);
            }
        });
    }
});

setPuzz();

function setPuzz(){

    puzzles.sort(() => Math.random() - 0.5) ;
    puzzle = puzzles[currPuzz] ;
    oddOne = puzzle[3] ;

    for (let btn = 0 ; btn < 4 ; btn ++ ) {
        currentId = "b-".concat(btn + 1);
        myIcon = document.getElementById(currentId);
        myIcon.setAttribute('class', `${puzzle[btn]} fa-5x`);
        if ( oddOne === puzzle[btn] ) {
            myIcon.setAttribute('odd-flag', 1)
        }
     }
    };

function playPuzz (){

    myIcon = document.getElementById(currentId);
    if ( myIcon.getAttribute('odd-flag') = 1 ) {
        scorePoint ++ ;
    } else {
        scorePoint -- ;
    }

    currPuzz ++ ;

    puzzle.sort(() => Math.random() - 0.5) ;
    puzzle = puzzles[currPuzz] ;
    oddOne = puzzle[3] ;

    for (let btn = 0 ; btn < 4 ; btn ++ ) {
        currentId = "b-".concat(btn + 1);
        myIcon = document.getElementById(currentId);
        myIcon.setAttribute('class', `${puzzle[btn]} fa-5x`);
        if ( oddOne === puzzle[btn] ) {
            myIcon.setAttribute('odd-flag', 1)
        }
    }
};

