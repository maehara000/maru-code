

/* loading animation */
$(window).on('load', function() {
  const $loading = $('.js-loading');
  setTimeout( function() {
    $loading.addClass('-loaded');
  },700);

  setTimeout( function() {
    $loading.remove();
  },3000);
});





