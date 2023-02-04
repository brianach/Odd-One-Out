// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var clouds = ['fa-solid fa-cat', 'fa-solid fa-dog', 'fa-solid fa-horse', 'fa-solid fa-fish'] ;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-button") {
                alert("You clicked a play-button!");
            } else {
                alert(`Something went wrong!`);
            }
        });
    }
});

alert("OK");
loadButtons();

function loadButtons (){
    for (let btn = 0 ; btn < 4 ; btn ++ ) {
        currentId = "b-".concat(btn + 1);
        myIcon = document.getElementById(currentId);
        myIcon.setAttribute('class', `${clouds[btn]}`);
    }
};
