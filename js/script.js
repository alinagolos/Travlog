var swiper = new Swiper('.services__swiper', {
  loop: true,
  mousewheel: true,
  keyboard: true,
  allowSlideNext: false,
});

var swiper = new Swiper('.destination__swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.destination__button-next',
    prevEl: '.destination__button-prev',
  },
});

var swiper = new Swiper('.reviews__swiper', {
  cssMode: true,
  loop: true,
  navigation: {
    prevEl: '.reviews__button-prev',
    nextEl: '.reviews__button-next',
  },
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
