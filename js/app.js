// selecting the ul element
const navList = document.getElementById("navbar__list");
// selecting all section elements
const sections = document.querySelectorAll("section");
// creating a fragment
const fragment = document.createDocumentFragment();


// building the navbar dynamically
document.addEventListener("DOMContentLoaded", () => {
    // looping over number of sections
    for (let i = 1; i <= sections.length; i++) {
        // creating new list element
        const listElement = document.createElement("li");
        // creating anchor element inside the list element
        listElement.innerHTML = `<a href="#section${i}" class="menu__link">section ${i}</a>`;
        // adding the functionality to scroll smoothly using a click event listener and scrollIntoView method
        listElement.addEventListener("click", (event) => {
            event.preventDefault();
            sections[i - 1].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
        // adding list element to the fragment
        fragment.appendChild(listElement);
    }
    // appending the fragment that has all the lists to the ul element
    navList.appendChild(fragment);
});


// scroll event to highlight the section in viewport
window.addEventListener("scroll", () => {
    // looping over number of sections
    sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top >= -200 && section.getBoundingClientRect().top <= 300) {
            // adding a class name when section in viewport using classList property
            section.classList.add("your-active-class");
            document.querySelectorAll("ul a")[index].classList.add("active-style");
        } else {
            // removing the class name when the section isn't in viewport 
            section.classList.remove("your-active-class");
            document.querySelectorAll("ul a")[index].classList.remove("active-style");
        }
    });
});


// the code to make the navbar responsive to all devices

// create a new class to the ul element 
navList.classList.add("nav");
// a function to remove "nav" class and add "responsive" class when the menu icon is clicked
function myFunction() {
    navList.classList.toggle("responsive");
    navList.classList.toggle("nav");
}