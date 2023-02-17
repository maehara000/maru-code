/* =======
 * 一定量スクロールでclass付与
 * ======= */
$(function(){
  var $scrollDisplayArea = $('.js-scroll');
  var switchHeight = 300;
  $(window).on('scroll', function(){
    if($(window).scrollTop() > switchHeight){
      $scrollDisplayArea.addClass('-scroll');
    } else {
      $scrollDisplayArea.removeClass('-scroll');
    }
  });
});


/* =======
 * headerに関連するメニュー
 * ======= */
/* headerのナビ項目をクローン */
$(function () {
  $('.js-clone-original').clone().appendTo('.js-clone-header');
});

/* toggleアクション */
$(function() {
 $('.js-sp-menu-button').on('click', function () {
  $(this).toggleClass('-open');
  $('.js-sp-btn').toggleClass('-open');
  $('.js-normal-header-block').toggleClass('-open');
 });
});