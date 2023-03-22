// Global vriables
const openMobileMenuBtn = document.querySelector('.menu__btn-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const closeMobileMenuBtn = document.querySelector('.mobile-menu__btn');
const mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

const advantagesLinks = document.getElementsByClassName('menu__link-advantages');
const deliveriesLinks = document.getElementsByClassName('menu__link-deliveries');
const partnersLinks = document.getElementsByClassName('menu__link-partners');
const ordersLink = document.querySelector('.landing__link-orders');
const advantages = document.querySelector('.advantages');
const deliveries = document.querySelector('.deliveries');
const partners = document.querySelector('.partners');
const orders = document.querySelector('.orders');

// Open mobile menu
openMobileMenuBtn.onclick = (event) => {
   mobileMenu.classList.remove('mobile-menu--close');
   event.stopPropagation();
};

// Close mobile menu
function closeMobileMenu() {
   mobileMenu.classList.add('mobile-menu--close');
};

body.onclick = closeMobileMenu;
closeMobileMenuBtn.onclick = closeMobileMenu;

for (mobileMenuLink of mobileMenuLinks) {
   mobileMenuLink.onclick = closeMobileMenu;
};

// Jump to sections navigation
for (advantagesLink of advantagesLinks) {
   advantagesLink.onclick = () => advantages.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

for (deliveriesLink of deliveriesLinks) {
   deliveriesLink.onclick = () => deliveries.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

for (partnersLink of partnersLinks) {
   partnersLink.onclick = () => partners.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

ordersLink.onclick = () => orders.scrollIntoView({ behavior: 'smooth' });