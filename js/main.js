$(function () {

   $('.menu__btn-mobile').on('click', function () {
       $('.mobile-menu').removeClass('mobile-menu--close');
   });
   $('.mobile-menu__btn, .mobile-menu__sections-link, section').on('click', function () {
       $('.mobile-menu').addClass('mobile-menu--close');
   });

})