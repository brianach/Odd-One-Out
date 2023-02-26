
# <h1>Odd One Out/h1>

![Mockup Screen Image](doc/screens.png)

<br>
<hr>
<br>

## <h1>Table of Contents</h1>

<br>


- [Odd One Out](#Odd One Out)
- [Introduction](#introduction)
  + 
- [Goals](#goals)
  + [Personal Goals](#personal-goals)
  + [Visitor Goals](#visitor-goals)
- [Design and Planning](#design-and-planning)
  + [Color](#color)
  + [Fonts](#fonts)
  + [Structure](#structure)
  + [Features](#features)
  + [Wireframes](#wireframes)
  + [Languages and Technologies](#languages-and-technologies)
- [Testing](#testing)
  + [Accessibility](#accessibility)
  + [Performance](#performance)
  + [Validation](#validation)
  + [Reponsiveness](#responsiveness)
- [User Story Testing](#user-story-testing)
- [Acknowledgements](#acknowledgements)
- [Credits](#credits)

<br><hr><br>

## <h1>Introduction</h1><br>

This is a neat little game based on old fasioned quiz book type puzzles.

<br><hr><br>

## <h1>Goals</h1><br>

### <h2>Personal Goals</h2>

<br>

Create a game that challenges and entertains the player.
I added a progress par to add an element of excitement.

<br>

### <h2>Visitor Goals</h2>

<br>

Test logic and hand eye coordination skills in a fun way.

<br><hr><br>

## <h1>Design and Planning</h1><br>

I drew a rough sketch on paper first with some notes to explain how the game works. It was my intention to design all the icons by hand but I decided to utilize font awesome icons instead as they were simple and clear, suited the game itself, and saved an enormous amout of time which would have benn spent designing an creating the icons from scratch. Having said that, a future enhancement would utilize hand made icons and also various quizzes testing user knowledge on everything from art to sport using the same odd one out format. So one example might be to choose which is the odd one from a choice of modern, surrealist, abstract-expressionst and renaissance paintings. Or three Warhol's and onother similiar artwork etc.
<br>

### <h2>Color</h2><br>

I chose a basic black and white scheme to fit in with the quiz book idea and a Boogaloo Google Font for its playful and 

![Color sampling](doc/design/cover-text-transparency.png)


Initially I wanted to incorporate the idea of an historical timeline using skewed and staggered pictures with basic information below and above each year. However I wasn't able to impletent this in testing to allow for different screen sizes so I abandoned the idea in favour of a simpler layout based on and incorporating some of the code from the Love Running project. I may revisit this idea after I gain more experience and skills in web development. <a href="https://codepen.io/brianach/pen/eYjZgYm" target="blank">Code Snippet</a>

![Previous Idea](doc/scrapped.png)

<br>

### <h2>Fonts</h2><br>

I chose IM Fell for the Title and Menu and Lora for the body. I chose IM Fell as I wanted something with an antique flavour to it and I chose Lora as it was a good comlimentary font. IM Fell was also a good match for the Plassy prefix.

<br>

### <h2>Structure</h2><br>

I stayed with a basic clean look and feel, again taking design cues from the Love Running project. The interface is clear and simple but in addition the sub pages which can only be accessed via the history page is highly intuitive. In fact the first person I asked to have a look immediately went to that timeline link bar without my having to point out that it was a navigation bar. 

![Menubar](doc/menubar.png)

I chose not to turn the timeline at the bottom of the home page into a navigation bar because it would prevent the visitor from going to the history page first. This page is the starting off point for the history journey and the visitor might miss out on this central point of the journey if the timeline were used to link to other pages.

<br>

### <h2>Features</h2><br>

 * Navigation Bar
 * Timeline
 * Social Media Footer
 * Timeline Navigation Bar
 * Feedback form

<br>

### <h2>Wireframes</h2><br>

<details><summary>Home</summary><img src="doc/design/home_page.png"></details>
<details><summary>History</summary><img src="doc/design/hist_page.png"></details>
<details><summary>Feedback</summary><img src="doc/design/fback_page.png"></details>

<br>

### <h2>Languages and Technologies</h2><br>


[Balsamiq](https://balsamiq.com/) was used to create the wireframes

[Google Fonts](https://fonts.google.com) was used for the fonts IM Fell and Lora.

[Fontawesome](https://fontawesome.com) was used for the social media icons

[Navionocs](https://www.navionics.com/gbr/charts/) was used to create a coastal chart

[Photoshop](https://sdobe.com) was used to manipulate images

[HTML](https://en.wikipedia.org/wiki/HTML) HTML for the text content and some media

[CSS](https://en.wikipedia.org/wiki/CSS) CSS for the design and some media

[WAVE](https://wave.webaim.org/) WAVE Web Accessibility Evaluation



<br><hr><br>

## <h1>Testing</h1><br>

<br>

### <h2>Accessibility</h2>

No errors were found running the website through the WAVE Accessibility Checker website. 

Redundant (self reffering menu) links were removed from the three main pages where the relative page is the active page. This doesn't stop the warning being generated on some WAVE reports.

<details><summary>Home</summary><img src="doc/access/home-accessibility.png"></details>
<details><summary>History</summary><img src="doc/access/history-accessibility.png"></details>
<details><summary>History-1940</summary><img src="doc/access/history-1940-accessibility.png"></details>
<details><summary>History-1947</summary><img src="doc/access/history-1947-accessibility.png"></details>
<details><summary>History-1951</summary><img src="doc/access/history-1951-accessibility.png"></details>
<details><summary>History-1960</summary><img src="doc/access/history-1960-accessibility.png"></details>
<details><summary>Feedback</summary><img src="doc/access/feedback-accessibility.png"></details>

<br>

### <h2>Performance</h2><br>

I used developer tools in Chrome and Firefox during development in order to continuouly gauge performance and responsiveness. The following hardware was used to test real life performance.

#### Devices Used

* Desktop PC  
* Macbook Pro
* Macbook Air
* Lenovo Yoga
* Huawei P20 
* iPhone

I tested the site using various browsers on the differnet devices.

#### Browsers Used

* Microsoft Edge
* Safari
* Google Chrome
* Mozilla Firefox
* Opera
<br>

### <h2>Validation</h2><br>

*  [HTML Validator](https://validator.w3.org/) was used throughout the project to test for errors. 

    History-1960.html generated an iframe error where I put some youtube content at the bottom of the page. This will be addressed in CSS in a future enhancement.

    A number of pages generated warning where sections do not have any heading. Presentation or performance is not impacted on any device and will be addressed in a future enhancement.

* [CSS Validator](https://validator.w3.org/) used to check for and correct errors. There are currently no errors in the code as currently submitted.


<br>

### <h2>Responsiveness</h2><br>

* [Lighthouse](https://developer.chrome.com/en/docs/lighthouse/) in Chrome Developer Tools was used to check performance. 

  <details><summary>Home</summary><img src="doc/perform/homepage.png"></details>
  <details><summary>History</summary><img src="doc/perform/history-1.png"></details>

      Performance was improved here by reducing the size of the main graphic and setting explit width and size on image elements. See performance improvement from above to below.

  <details><summary>History performance after tweak</summary><img src="doc/perform/history-2.png"></details>

    <details><summary>History-1940</summary><img src="doc/perform/history-1940.png"></details>
    <details><summary>History-1947</summary><img src="doc/perform/history-1947.png"></details>
    <details><summary>History-1951</summary><img src="doc/perform/history-1951.png"></details>
    <details><summary>History-1960</summary><img src="doc/perform/history-1960-1.png"></details>

      This page has a large amount of images to support the information on the page. Performance was greatly improved here by reducing the size of the images and setting explit width and size on all image elements. See before image above and result below.
    <details><summary>History-1960 performance after tweak</summary><img src="doc/perform/history-1960-2.png"></details>   

  <details><summary>Feedback</summary><img src="doc/perform/feedback.png"></details>

<br><hr><br>

## <h1>User Story Testing</h1><br>

I tested the user story as follows.

### <h2>As a visitor I want to get information about the Plassy</h2>

The homepage provides a quick overview with intuite and easy to acces links to further information.

![Homepage](doc/design/home-layout.png)

<br>

### <h2>As a visitor I want to learn about the Plassy origins, history and current information</h2>

The history page starts with the origins of the Plassy and presents a clickable timeline to bring the visitor deeper into the story. Each link on the timeline menubar presents a page of information related to the year selected and follows the same page style but substituting the main (hero) image with one which is relevant to the historical information presented.

![Timeline Menubar](doc/design/timeline-menubar.png)

<br>

### <h2>As a visitor I would like to be abel to respond or request more information</h2>

The final feedback page provides the user with an opportunity to react to the site giving them the ability to submit some basic feedback, commentary or request for further information if they so wish.

![Feedback Story](doc/design/feedback-story.png)

<br>


### <h2>Test chart to ensure website works as expected</h2>

All pages were tested with the visitor in mind in terms of accessiblity, presentation, responsiveness and performance. All links were tested to ensure functionality. Below is a simpe chart of the results.

![Test Chart](doc/perform/test-chart.png)


<br>
<br><hr><br>


## <h1>Acknowledgements</h1>

Thanks to the following people who have supported me:

  + My mentor Gaff (Naoise Gaffney)
  + Cohort team lead Jonny Davison
  + My wife Tricia
  + All the slackers on Code Institue
  + LWETB and Code Institute for the opportunity to do this
  + Major kudos to my friend Rónán McCall (https://www.futures-photography.com/artists/ronan-mccall) for his help with restoring the rescue photography and scanning them from the originals for inclusion.

<br>

## <h1>Credits</h1>

### <h2>Origins References (History)</h2>

  + <h3><a href="https://www.wrecksite.eu/ownerBuilderView.aspx?533" target="_blank">[Photograph of Cook, Welton & Gemmel shipyard]()</a></h3>
  + <h3><a href="https://en.wikipedia.org/wiki/Cook,_Welton_%26_Gemmell" target="_blank">Wikipedia entry for Cook, Welton & Gemmel</a></h3>
  + <h3><a href="https://www.shipsnostalgia.com/media/hms-juliet.38115/" target="_blank">Ship specifications for HMT Juliet</a></h3>
  + <h3><a href="https://www.gracesguide.co.uk/Cook,_Welton_and_Gemmell" target="_blank">Cook, Welton & Gemmel entry on Grace's Guide</a></h3>

<br>    

### <h2>Juliet References (1940) </h2>

  + <h3><a href="https://uboat.net/allies/warships/ship/6599.html" target="_blank">HMT Juliet Commanders</a></h3>
  + <h3><a href="https://en.wikipedia.org/wiki/Operation_Torch" target="_blank">Wikipedia entry for Operation Torch</a></h3>
  + <h3><a href="https://www.shipsnostalgia.com/media/hms-juliet.38115/" target="_blank">Photograph of HMS Juliet</a></h3>

<br> 

### <h2>Peterjon References (1947)</h2>

  + <h3><a href="https://www.shipsnostalgia.com/media/peterjon.32520/" target="_blank">Photograph of Peterjon ready to sail</a></h3>
  + <h3><a href="https://www.shipsnostalgia.com/media/h-m-s-juliet.24578/" target="_blank">Waiting conversion photograph</a></h3>
  + <h3><a href="https://www.shipsnostalgia.com/media/plassy.230865/" target="_blank">Almost complete photograph</a></h3>
  + <h3><a href="https://www.shipsnostalgia.com/media/j-s-doigs-no-1-fitting-shop.105137/" target="_blank">JS Doig's Shipyards</a></h3>
  + <h3><a href="https://www.gracesguide.co.uk/Crossley_Brothers" target="_blank">Crossley Brothers entry on Graces Guide</a></h3>
  + <h3><a href="https://en.wikipedia.org/wiki/Crossley" target="_blank">Wikipedia entry for Crossley</a></h3>
  + <h3><a href="https://lifeboatmagazinearchive.rnli.org/volume/32/349/services-of-the-life-boats-of-the-institution-during-1948?searchterm=Yacht+Gan&page=194" target="_blank">RNLI Archive page</a></h3>
  + <h3><a href="https://rnliarchive.blob.core.windows.net/media/1350/0349.pdf#page=34" target="_blank">Pages 12 & 40 RNLI Archive featuring SS Peterjon</a></h3>

<br>

### <h2>Plassy References (1951)</h2>

  + <h3><a href="https://www.flickr.com/photos/scottishmaritimemuseum/15651974933" target="_blank">The Plassy at sea from Scottish Maritime Museum on Flickr</a></h3>
  + <h3><a href="https://www.navionics.com/gbr/charts/" target="_blank"> Navionics online nautical charts</a></h3>
  
<br>

### <h2>Rescue References</h2>

+ <h3><a href="https://www.facebook.com/211241455563057/photos/pb.100064625141906.-2207520000./881297881890741/?type=3" target="_blank">Main photograph</a></h3>
+ <h3> Photograph of Onshore Rescue Unit logo on the doors of 'Teachín an Rocket', Inisheer. Ronán McCall 2003.

+ <h3>List of photographs of the Plassy from private collection</h3>

      Plassy on Finnis rock after rescue

      Onshore Rescue Unit arrives

      Rescue unit assembling 'Rocket'

      Final attempt at rcoket firing

      Unit preparing to pull

      Final crew member ashore

      Plassy lifeboat on rocks

+  <h3><a href="https://www.geograph.org.uk/gridref/L9901?user=15801" target="_blank">From Harold Strong photography on Geograph</a></h3>

        Onshore Rescue Unit on exercise 1962

        Plassy on the rocks port side

        Plassy on the rocks starboard side

        Anchors in the foreground

        Plassy bridge looking astern

+ <h3><a href="https://youtu.be/ca9_nFfjYgs" target="_blank">Video by Nuno Charneca from the Portuguese National Civil Engineering Laboratory for the drone footage. This video was made as part of a drone demo during Citizen Science + GIS Training School @ NUI Galway organized by Seán Lynch, NUIG Geography Society and funded by COST (cost.eu). 22 Aug 2015.</a></h3>
