//imports core modules
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

(function () {
  "use strict";
  const membershipSwiperContainerEl = document.querySelector(
    ".membership-cards__swiper"
  );
  const membershipCardsEl = document.querySelector("#membership-cards");

  membershipSwiper = new Swiper(membershipSwiperContainerEl, {
    modules: [Navigation, Pagination],
    spaceBetween: 12,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})();
