$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
    });
});

document.addEventListener('DOMContentLoaded', function () {
      var slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: true,
        interval: 5000,
      });
    });