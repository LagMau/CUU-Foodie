const navbarToggle = mini_navbar.querySelector('#mini-navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#mini-navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.mini-navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);