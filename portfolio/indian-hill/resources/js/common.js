
/* 共通navの項目をcloneする */
$(function() {
  $('.js-clone-original').clone().appendTo('.js-clone-nav');
});


/* 読み込み完了後クラス付与 */
$(window).on('load', function() {
  $('.js-body').addClass('-load');
});



/* SVGの色替えプラグイン */
$(function(){
  deSVG('.svg-color-change',true);
});



/* スムーススクロール */
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


/* SP版headerメニュ－ */
$(function() {
 $('.js-toggle-menu').on('click', function () {
  $('.js-toggle').toggleClass('-open');
 });
});