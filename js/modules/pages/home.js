function home() {
  // promo-slider Slider

  new Swiper(".promo-slider");

  const promoSlider = new Swiper(".promo-slider", {
    loop: true,
    preloadImages: false,
    speed: 1200,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
    },

    navigation: {
      nextEl: ".promo-slider-button-next",
      prevEl: ".promo-slider-button-prev",
    },

    autoplay: {
      delay: 8000,
    },
  });

  //popular-slider Slider

  const popularProduct = new Swiper(".popular-slider", {
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

module.exports = home;
