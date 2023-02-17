$(function() {
  $(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
      $('.js-g-header').addClass('-scroll');
    } else {
      $('.js-g-header').removeClass('-scroll');
    }
  });
});


$(window).on('load', function() {
  $('.top-slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    arrows:false,
    fade:true
  });



  $('.js-section_slider').addClass('-load');

  setTimeout(function() {
    $('.js-blink').addClass('blink');
  }, 1800);
});
