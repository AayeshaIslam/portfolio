const menu = document.querySelector('#mobile-menu'); //hamburger menu
const menuLinks = document.querySelector('.navbar__menu');

// Add this function to your existing app.js file
//this is for research section
const toggleResearchDetails = (researchId) => {
  const researchDetails = document.getElementById(researchId);
  researchDetails.style.display = (researchDetails.style.display === 'table-row') ? 'none' : 'table-row';
};
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const experiencesMenu = document.querySelector('#experiences-page');
    const researchMenu = document.querySelector('#research-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      experiencesMenu.classList.remove('highlight');
      researchMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      projectsMenu.classList.remove('highlight');
      experiencesMenu.classList.remove('highlight');
      researchMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      projectsMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      experiencesMenu.classList.remove('highlight');
      researchMenu.classList.remove('highlight');
      return;
    }
    else if (window.innerWidth > 960 && scrollPos<8000) {
      experiencesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      projectsMenu.classList.remove('highlight');
      researchMenu.classList.remove('highlight');
      return;
  }
   // if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
     // elem.classList.remove('highlight');
    //}//new code
    else if (window.innerWidth > 960 ) {
      researchMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      projectsMenu.classList.remove('highlight');
      experiencesMenu.classList.remove('highlight');
      return;
  }//new code
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);

  // Add this to your existing JS file

  


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);



