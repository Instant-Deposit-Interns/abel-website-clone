(function ($) {
  'use strict';

  // pre loader

  $(window).on('load', function () {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function () {
      $(this).remove();
    });
  });

  // sticky top menu

  var windows = $(window);
  var sticky = $('#sticker');

  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });

  // jQuery meanmanu

  var mean_menu = $('nav#dropdown');
  mean_menu.meanmenu();

  // Nice Select JS
  $('select').niceSelect();

  // wowjs
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true,
    }).init();
  }
  wowAnimation();

  // scroll up

  $.scrollUp({
    scrollText: '<i class="ti-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
  });

  // parallax
  var parallaxeffect = $(window);
  parallaxeffect.stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false,
  });
})(jQuery);
