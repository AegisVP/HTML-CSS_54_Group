const swiper = new Swiper('.swiper', {
   loop: true,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },

   effect: 'fade',
   fadeEffect: {
      crossFade: true,
   },

   autoplay: {
      delay: 3000,
   },
});
