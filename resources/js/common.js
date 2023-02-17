/* 横並び要素内の高さを揃える */
$(function(){
  $('.matchHeight .text-block .service_sentence').matchHeight();
  $('.matchHeight .text-block .example-block').matchHeight();
});


/* 共通navの項目をcloneする */
$(function() {
  $('.jsClone-original').clone().appendTo('.jsClone-clone');
});

/* headerアクション */
$(function(){
  const $fv = $('.section_first-view');
  fvH = $fv.outerHeight();
  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= fvH - 160) {
      $('.js-scroll').addClass('-scroll');
    } else {
      $('.js-scroll').removeClass('-scroll');
    }
  });
});

/* footerにクローンしたnavにも、ヘッダーナビのトグル機能が付いてしまうので、不要classを除去 */
$(function () {
  const target =$('.jsRemoveClass .item .link');
  target.removeClass('jsSpNav-button');
})

/* 問い合わせバナー表示アクション */
$(function(){
  const $trigger = $('.jsc-trigger');
  const $target = $('.jsc-target');
  const triggerTop = $trigger.offset().top;
  const windowH = $(window).outerHeight();

  $(window).on('scroll', function() {
    if( $(window).scrollTop() >= 600 && $(window).scrollTop() <= triggerTop - windowH) {
      $target.addClass('-display');
    } else {
      $target.removeClass('-display');
    }
  })
});

/* 問い合わせバナー、クッキーを使用した表示切替 */
$(function() {
  let cookie = $.cookie('cache');
  if (cookie) {
    $('.jsc-target').addClass('-hidden');
  }
  $('.jsc-close').on('click', function() {
    $('.jsc-target').addClass('-hidden');
    $.cookie('cache', 'close')
  });
});



/* SPナビゲーション操作 */
$(function(){
  const $navButton = $('.jsSpNav-button');
  const $navBar = $('.nav-bar.-num01');
  const $spNavContent = $('.jsSpNav-toggle');
  let state = true;

  $navButton.on('click', function() {
    
    if(state == true) {
      $navButton.addClass('-open');
      $spNavContent.addClass('-open');
      setTimeout(function() {
        $navBar.addClass('-slash');
      },300);
      $spNavContent.removeClass('-hidden');

      state = !state;

    } else if(state == false) {
      $navButton.removeClass('-open');
      $navBar.removeClass('-slash');
      $spNavContent.removeClass('-open');
      setTimeout(function() {
        $spNavContent.addClass('-hidden');
      },300);
      state = true;
    }
  });
});


/* スムーススクロール */
$(function(){
  $('a[href^="#"]').click(function(){
    if($(window).width() >= 768 ) {
      // PC版のheader高さ
      headerH = 0;
    } else {
      // SP版のheader高さ
      headerH = 0;
    }

    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerH;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});