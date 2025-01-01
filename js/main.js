const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () =>{
    menuMobile.classList.toggle('menu--open');
});