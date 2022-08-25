function popular() {
  new Swiper(".popular-slider", {
    //loop: true,
    preloadImages: false,
    speed: 700,
    mousewheel: true,

    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
    },

    navigation: {
      nextEl: ".popular-slider-button-next",
      prevEl: ".popular-slider-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    pagination: {
      el: ".popular-slider-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      600: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  });
}

module.exports = popular;
