function showCase() {
  new Swiper(".showcase-slider", {
    loop: true,
    preloadImages: false,
    speed: 700,
    mousewheel: true,

    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
    },

    navigation: {
      nextEl: ".showcase-slider-button-next ",
      prevEl: ".showcase-slider-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    pagination: {
      el: ".showcase-slider-pagination ",
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      600: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  });
}

module.exports = showCase;
