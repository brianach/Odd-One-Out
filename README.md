
# <h1>Odd One Out</h1>

![Mockup Screen Image](doc/img/screens.png)
<br><br>

## <h1>Table of Contents</h1>

<br>


- [Introduction](#introduction)
- [Goals](#goals)
  + [Personal Goals](#personal-goals)
  + [Player Goals](#player-goals)
- [Design and Planning](#design-and-planning)
  + [Color](#color)
  + [Fonts](#fonts)
  + [Structure](#structure)
  + [Features](#features)
  + [Wireframes](#wireframes)
  + [Languages and Technologies](#languages-and-technologies)
- [Testing](#testing)
  + [Performance](#performance)
  + [Validation](#validation)
  + [Reponsiveness](#responsiveness)
  + [Game Testing](#game-play-testing)
- [Acknowledgements](#acknowledgements)


<br><hr><br>

## <h1>Introduction</h1><br>

This is a neat little game based on old fasioned quiz book type puzzles. The gameplay is intuitive and uncomplicated. The player simply chooses the odd image from a selection of four and clicks on it. The score increments by 1 on each successful click. The player must get all the correct answers in order to progress to the next level of whcih there are 10 in total. THe player is rewarded with a party popper sound on achieving the next round and with a cheeky sounding foghorn on failing. On getting to the end of the game there is a cartoon fanfare.

<br>

## <h1>Goals</h1><br>

### <h2>Personal Goals</h2>

<br>

Create a game that challenges and entertains the player. I added a progress bar to add an element of excitement to the gameplay.

<br>

### <h2>Player Goals</h2>

<br>

Test logic and hand eye coordination skills in a fun way. Try to get quicker by selecting progressively harder levels.

<br>

## <h1>Design and Planning</h1><br>

I drew a rough sketch on paper first with some notes to explain how the game works. It was my intention to design all the icons by hand but I decided to utilize font awesome icons instead as they were simple and clear, suited the game itself, and saved an enormous amout of time which would have benn spent designing an creating the icons from scratch. Having said that, a future enhancement would utilize hand made icons and also various quizzes testing user knowledge on everything from art to sport using the same odd one out format. So one example might be to choose which is the odd one from a choice of modern, surrealist, abstract-expressionst and renaissance paintings. Or three Warhol's and onother similiar artwork etc.
<br>

### <h2>Color</h2>

I chose a basic black and white scheme to fit in with the quiz book idea. 
<br>

### <h2>Fonts</h2>

I chose a Boogaloo Google Font for its playful and jokey style. 


<br>

### <h2>Structure</h2>

The initial weclome screen is simple but intuitive which invites the play to create a username once entered allows the player to select a difficulty level leading on to the game play area itself.

<img src="doc/img/welcome.png" > <img src="doc/img/levels.png">

I stayed with a basic linear game play area which is simple an intuitive requiring no additional help or information for the player. 
 progress bar is right below the play area but close enough to theplayers field of vision to give an added sense of excitement to the play. 

<img src="doc/img/playing.png">

<br>

### <h2>Features</h2>

 * Player username input
 * Level Selection
 * Progress bar
 * Player feedback
 * Score display
 * Win and lose audio samples

<br>

### <h2>Wireframes</h2><br>

<details><summary>Wireframes</summary><img src="doc/img/wireframes.png"></details>


<br>

### <h2>Languages and Technologies</h2><br>


[Balsamiq](https://balsamiq.com/) was used to create the wireframes.

[Google Fonts](https://fonts.google.com) was used for the Boogaloo font.

[Fontawesome](https://fontawesome.com) was used for the social media icons.

[CSS](https://en.wikipedia.org/wiki/CSS) CSS for the design and some media.

[JS](https://en.wikipedia.org/wiki/JavaScript) Javascript for the game functionality.


<br><br>

## <h1>Testing</h1><br>

### <h2>Performance</h2>

I used developer tools in Chrome and Firefox during development in order to continuouly gauge performance and responsiveness. The following hardware was used to test real life performance.

#### Devices Used were
Desktop PC, Macbook Pro, Macbook Air, Lenovo Yoga, Huawei P20 

I tested the site using various browsers on the different devices.

#### Browsers Used were

Microsoft Edge, Safari, Google Chrome, Mozilla Firefox, Opera

<br>


### <h2>Validation</h2>

*  [HTML Validator](https://validator.w3.org/) was used throughout the project to test for errors. 

Empty heading errors. This is by design as the text will be entered programatically during game play.
Four "Attribute odd-flag not allowed on element button at this point". This is also by design as the game needs to allocate a value to the attribute in order to determine which is the odd one out. 

* [CSS Validator](https://validator.w3.org/) used to check for and correct errors. There are currently no errors in the code as currently submitted.

* [JSHint Validator](https://jshint.com/) used to check for and correct scripting errors. There are no errors in the final draft.

<br>

### <h2>Responsiveness</h2>

* [Lighthouse](https://developer.chrome.com/en/docs/lighthouse/) in Chrome Developer Tools was used to check performance. 

100% on all checks.

![Performance Screenshot](doc/img/performance.png)

<br>

### <h2>Game Play Testing</h2><br>

I tested the game myself and also invited friends and family members to do the same. Cosmetic issues with responses to the player were all resolved during the game testing. There are no outstanding issues or errors with the game.

<br>

### <h2>Test chart to ensure website works as expected</h2>


![Test Chart](doc/img/tests.png)


<br>
<br><hr><br>


## <h1>Acknowledgements</h1>

Thanks to the following people who have supported me:

  + My mentor Gaff (Naoise Gaffney)
  + Ed Bradley and David on the #ask-us-anything channel
  + My wife Tricia
  + LWETB and the Code Institute for the opportunity to do this

