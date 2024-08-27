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



const carousel = document.querySelector('.carousel-cards');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;
const totalImages = carousel.children.length;

function getVisibleImages() {
    const screenWidth = window.innerWidth;
    return screenWidth < 950 ? 3 : 5;
}

let visibleImages = getVisibleImages();

// Clone the first few images and append them to the end
for (let i = 0; i < visibleImages; i++) {
    const clone = carousel.children[i].cloneNode(true);
    carousel.appendChild(clone);
}

nextButton.addEventListener('click', () => {
    index++;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${index * (100 / visibleImages)}%)`;

    if (index === totalImages) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            index = 0;
            carousel.style.transform = `translateX(0)`;
        }, 500);
    }
});

prevButton.addEventListener('click', () => {
    if (index === 0) {
        index = totalImages;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${index * (100 / visibleImages)}%)`;
    }

    setTimeout(() => {
        index--;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${index * (100 / visibleImages)}%)`;
    }, 0);
});

function updateCarousel() {
    visibleImages = getVisibleImages();
    index = 0;
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(0)`;
}


window.addEventListener('resize',updateCarousel);
