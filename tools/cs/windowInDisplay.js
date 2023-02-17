/*
 * 要素が画面内に入ったらclass付与
 * htmlですること↓
 * 指定の要素に .js-toggle を追加
 * data-offset="80" data-offset-sp="90"が各要素に必要（数値は自由、無い場合はデフォルト値が適用）
 * つまり
 <div class="section js-toggle" data-offset="80" data-offset-sp="90">
 のような感じになる
 * 「数値」には、画面の〇%の高さまで来たら発火、の値が入る（例：50と入力したら、画面の中央で発火、20だと上部、80だと下部。）
 */
 $(function() {
  let w = $(window).width();
  let x = 768;
  let dataOffset = 50; // デフォルトのclass付与位置

  $(window).scroll(function (){
      if (w >= x) {
        // pc
        $('.js-toggle:not(.display)').each(function(){
          const hit = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const wHeight = $(window).height();

          if ($(this).attr('data-offset')){
            dataOffset = $(this).data('offset');
          }

          if ( scroll > hit - wHeight * dataOffset * 0.01 ){
            $(this).addClass('display');
          }
        });

      } else {
        // sp
        $('.js-toggle:not(.display)').each(function(){
          const hit = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const wHeight = $(window).height();

          if ($(this).attr('data-offset-sp')){
            dataOffset = $(this).data('offset-sp');
          }

          if ( scroll > hit - wHeight * dataOffset * 0.01 ){
            $(this).addClass('display');
          }
        });
      }
  });
});