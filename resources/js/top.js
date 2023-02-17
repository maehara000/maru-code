/* 読み込み完了後の処理 */
$(function() {
  $('.js-load').addClass('-display');

  setTimeout( function() {
    $('.js-load-delay01').addClass('-display');
  }, 1200);

  setTimeout( function() {
    $('.js-load-delay02').addClass('-display');
  }, 1500);
});


/* チャートjsの挙動（PC） */
$(function() {
  const $chart = $('#skillChartPc');
  const chartTop = $chart.offset().top;
  const windowH = $(window).height();

  $(window).on('scroll', function chartScroll() {
    if($(window).scrollTop() + windowH > chartTop + 200) {
      var doughnutData = [
      {
        value: 50,
        color:"#00bbdd44"
      },
      {
        value: 20,
        color: "#dd00d044"
      },
      {
        value: 20,
        color: "#00dd2144"
      },
      {
        value: 10,
        color: "#ddb30044"
      }
      ];

      var myDoughnut = new Chart(document.getElementById("skillChartPc").getContext("2d")).Doughnut(doughnutData);
      $(this).off('scroll',chartScroll);

      $('.js-chart-scroll').addClass('-scroll')
    }
  });
});


/* チャートjsの挙動（SP） */
$(function() {
  const $chart = $('#skillChartSp');
  const chartTop = $chart.offset().top;

  $(window).on('scroll', function chartScroll() {
    if($(window).scrollTop() > chartTop - 500) {
      var doughnutData = [
      {
        value: 50,
        color:"#00bbdd44"
      },
      {
        value: 20,
        color: "#dd00d044"
      },
      {
        value: 20,
        color: "#00dd2144"
      },
      {
        value: 10,
        color: "#ddb30044"
      }
      ];

      var myDoughnut = new Chart(document.getElementById("skillChartSp").getContext("2d")).Doughnut(doughnutData);
      $(this).off('scroll',chartScroll);
    }
  });
});



/* FAQ */
$(function () {
  const $faqTitle = $('.jsFaq-title');
  const $faqContents = $('.jsFaq-contents');
  const $faqParent = $('.jsFaq-items');
  const $allButton = $('.jsFaq-all-controll');

  $faqTitle.on('click', function() {
    $(this).next().slideToggle(300);
    $(this).toggleClass('-open');
  });

  let state = true;

  $allButton.on('click', function() {
    if(state == true) {
      $faqContents.slideDown(300);
      $faqTitle.addClass('-open');
      $(this).addClass('-open');
      $allButton.html('全て閉じる');
      state = !state;

    } else if(state == false) {
      $faqContents.slideUp(300);
      $faqTitle.removeClass('-open');
      $(this).removeClass('-open');
      $allButton.html('全て開く');
      state = true;
    }
  });
});




/*
 * 要素が画面内に入ったらclass付与
 * data-offset="80" data-offset-sp="90"が各要素に必要（数値は自由）
 */
$(window).scroll(function (){
  $(function() {
      let w = $(window).width();
      let x = 767;
      if (w >= x) {
        // pc
        $(".js-dp").each(function(){
          const hit = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const wHeight = $(window).height();
          let dataOffset = $(this).data('offset');

          if ( scroll > hit - wHeight * dataOffset * 0.01 ){
            $(this).addClass("-display");
          }
        });
      } else {
        // sp
        $(".js-dp").each(function(){
          const hit = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const wHeight = $(window).height();
          let dataOffset = $(this).data('offset-sp');

          if ( scroll > hit - wHeight * dataOffset * 0.01 ){
            $(this).addClass("-display");
          }
        });
      }
  });
});


/* 要素の数だけdelayを足す */
// $(function() {
//   const $target = $('.js-loop-block .js-loop-child');
//   $(function() {
//     if($(window).width() >= 768 ) {
//       // PC版
//       $target.each(function(i) {
//         const num = Math.floor(1 * i);

//         $target.eq(i).css({
//           transitionDelay: '0.1' * num + 's'
//         })
//       });
//     } else {
//       // SP版（何もしない）
//     }
//   });
// });

