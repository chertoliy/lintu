// Global vriables
const openMobileMenuBtn = document.querySelector('.menu__btn-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const closeMobileMenuBtn = document.querySelector('.mobile-menu__btn');
const mobileMenuLinks = document.getElementsByClassName('mobile-menu__sections-link');

// Open mobile menu
function openMobileMenu(event) {
   mobileMenu.classList.remove('mobile-menu--close');
   event.stopPropagation();
};

openMobileMenuBtn.onclick = openMobileMenu;


// Close mobile menu
function closeMobileMenu() {
   mobileMenu.classList.add('mobile-menu--close');
};

body.onclick = closeMobileMenu;
closeMobileMenuBtn.onclick = closeMobileMenu;

for (mobileMenuLink of mobileMenuLinks) {
   mobileMenuLink.onclick = closeMobileMenu;
};