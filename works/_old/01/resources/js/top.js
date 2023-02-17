$(function () {
  $('.js-slider').slick({
    autoplay:true,
    autoplaySpeed:1500,
    speed: 2000,
    dots:false,
    fade: true,
    pauseOnHover: false
  });
});


$(window).on('load', function() {
  $(function () {
    $('.js-slide-container').addClass('-load');
  })
});


/*
 * 要素が画面内に入ったらclass付与
 */
$(window).scroll(function (){
  $(function() {
      var w = $(window).width();
      var x = 767;
      if (w > x) {
        // pc
        $(".js-dp").each(function(){
          const hit = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const wHeight = $(window).height();
          let dataOffset = $(this).data('offset');

          if ( scroll > hit - wHeight + wHeight / dataOffset ){
            $(this).addClass("-display");
          }
        });
      } else {
        // sp
        $(".js-dp-sp").each(function(){
          const hit = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const wHeight = $(window).height();
          let dataOffset = $(this).data('offset-sp');

          if ( scroll > hit - wHeight + wHeight / dataOffset ){
            $(this).addClass("-display");
          }
        });
      }
  });
});


