const myNav = document.getElementById("top-header");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 700 ||
    document.documentElement.scrollTop >= 700
  ) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
