# Landing page

## Mohammed Waleed

## project description

making a static multi-section landing page dynamic by:

- building a navbar that contains all the sections dynamically using javascript
- when adding new sections to the html file it appears in the navbar
- when clicking any section in the navbar it scrolls smoothly to its corresponding section in the page
- adding "your-active-class" class name to the section that is in viewport
- making the landing page responsive to all devices

## methods used in the project

I used:

- getElementById() and querySeclectorAll() methods to select elements
- for loop and forEach() method to loop over number of sections
- createElement() method to create list elements
- innerHTML and appendChild to append elements
- preventDefault() to prevent the default scroll behavior from happening
- scrollIntoView() to set scroll behavior to smooth
- getBoundingClientRect() to detect the section when in viewport
- classList property to add or remove "your-active-class" class name
- I added some code to the HTML and CSS files to make the navbar responsive
- I added CSS code to make the section in the navbar highlighted when in viewport

## resources that helped me to finish the project

some of my code may be similar to the code in these links:

- scrollIntoView() [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- getBoundingClientRect() [video](https://www.youtube.com/watch?v=MKpZadkuT-0)
- how to make [responsive top navigation](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) (I wrote some HTML and CSS similar to the code in this tutorial)