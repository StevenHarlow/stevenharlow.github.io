;(function($, window, document, undefined) {
  'use strict';

  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    var navbar = $('#nav-bar');
    if (scroll > 50){
      navbar.addClass('nav-scroll').removeClass('nav-start');
    }else{
      navbar.addClass('nav-start').removeClass('nav-scroll');
    }
  });

  $('.scrollto').on('click', function(event) {
    // only use scrollto on larger screens, otherwise use anchor tags
    if ( $(window).width() > 440){
      event.preventDefault();

      var button = $(this);
      var target = $(button.attr('href'));

      $('body, html').animate({
        scrollTop: target.offset().top - 55
      }, 700);
    }else{
      //TODO: this will close the side menu bar
    }
  });

  $('.contact-trigger').on('click', function(event){
    var elem = $('#sidebar');
    var contactClose = $('.contact-close');
    if (elem.hasClass('sidebar-inactive')){
      elem.removeClass('sidebar-inactive').addClass('sidebar-active');
    }else{
      elem.removeClass('sidebar-active').addClass('sidebar-inactive');
    }
  })

})(jQuery, window, document);