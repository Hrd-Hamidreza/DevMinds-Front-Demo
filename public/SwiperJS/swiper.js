var swiper = (swiper = new Swiper(".mySwiper", {
  speed: 800,
  spaceBetween: 0,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 1200px
    0: {
      slidesPerView: 1.01,
    },
    // when window width is >= 1200px
    768: {
      slidesPerView: 2.01,
    },
    // when window width is >= 1200px
    992: {
      slidesPerView: 3.01,
    },
    // when window width is >= 1200px
    1800: {
      slidesPerView: 4.01,
    },
  },
}));
