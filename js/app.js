/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Define Global Variables
let sectionElement = document.querySelectorAll('Section');

// Scroll to section on link click
function scrolltoview(section_name) {
    sectionElement.forEach((Element) => {
        if (Element.getAttribute('id') === section_name ){
            Element.scrollIntoView({ behavior: "smooth",block: "end"});
        }
    }
)};

//MakeActive function
function mackeActive(){
    let sectionPoisition = [];
    sectionElement.forEach((Element) => {
        sectionPoisition.push(Element.getBoundingClientRect().top+45);
    });
    let activeIndex = sectionPoisition.findIndex((value)=>value>0);
    for (let index = 0; index < sectionPoisition.length; index++) {
        if (activeIndex == index) {
            linkList[index].classList.add("active");
            sectionElement[index].className = "current-active-class";
        }
        else {
            linkList[index].removeAttribute("class");
            sectionElement[index].removeAttribute("class");
        }
    }
};

// build the nav
const ulElement = document.querySelector('#navbar__list');
sectionElement.forEach((Element) => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.textContent = Element.dataset.nav;
    aElement.className = "menu__link";
    aElement.addEventListener("click", (event)=> {
        event.preventDefault();
        scrolltoview(Element.getAttribute('id'));
    });
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
});

// Add class 'active' to section when near top of viewport
let linkList = document.querySelectorAll('li');
document.addEventListener("scroll",(event)=>{
    event.preventDefault();
    mackeActive();
});


