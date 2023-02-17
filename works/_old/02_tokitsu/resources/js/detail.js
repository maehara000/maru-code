/* slick（ユーザーボイス） */
$(function(){
  $('.js-picture-slider').slick({
    fade: false,
    autoplay: false,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    infinite: false,
    lazyLoad: 'progressive',
    prevArrow: '<img src="resources/images/icon_slide-arrow.png" alt="" class="slide-arrow -prev">',
    nextArrow: '<img src="resources/images/icon_slide-arrow.png" alt="" class="slide-arrow -next">',
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });
});