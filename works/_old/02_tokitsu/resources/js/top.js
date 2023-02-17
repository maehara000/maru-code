// 読み込み完了後の処理
window.onload = function () {
  setTimeout( function() {
    $('.js-load').addClass('-loaded');
  }, 1000);
};

// TOPのスリック
$(function () {
  var $slider = $('.js-top-slider');
  $slider.slick({
    infinite: true,
    fade: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 1000, // 一枚目の切り替わり速度
  });

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var playSpeed = 1000; // ２枚目移行の切り替わり速度
    if (nextSlide > 0) {
      $slider.slick('slickSetOption', 'autoplaySpeed', playSpeed, true);
      console.log('test');
    }
  });
});

// スクロールしたらclass付与
$(function() {
  $(window).on('scroll', function() {
    $target = $('.js-scroll');
    windowSize = 0;

    // レスポンシブの条件分岐
    if(window.matchMedia("(min-width: 768px)").matches){
      // PC
      windowSize = 250;
      
    } else { 
      // SP
      windowSize = 150;
    }

    if($(window).scrollTop() > windowSize) {
      $target.addClass('-scroll');
    } else {
      $target.removeClass('-scroll');
    }
  });
});