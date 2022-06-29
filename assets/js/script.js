const swiper = new Swiper(".hero-swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

const swiperExper = new Swiper(".swiper-exper", {
  // Optional parameters
  loop: true,
  slidesToScroll: 1,
  slidesPerView: 1,
  // centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

const swiperIncub = new Swiper(".swiper-incubator", {
  // Optional parameters
  loop: true,
  slidesToScroll: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  breakpoints: {
    "@1.00": {
      slidesPerView: 1,
    },
    "@1.50": {
      slidesPerView: 1.5,
    },
  },

  // And if we need scrollbar
});

// Start Nav Bar
function openNav() {
  document.getElementById("navlist").style.right = "0";
}

function closeNav() {
  document.getElementById("navlist").style.right = "-100%";
}

// rtl nav
function openNavRtl() {
  document.getElementById("navlistRtl").style.left = "0";
}

function closeNavRtl() {
  document.getElementById("navlistRtl").style.left = "-100%";
}

// End Nav Bar

const swiperEd = new Swiper(".swiper.test", {
  // Optional parameters
  loop: true,
  slidesToScroll: 1,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    "@1.00": {
      slidesPerView: 1,
    },
    "@1.50": {
      slidesPerView: 1.5,
    },
  },

  // And if we need scrollbar
});

var swiperbrak = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
AOS.init();
