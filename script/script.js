$(document).ready(function(){
  $('.menu-box').click(function(){
    $(this).toggleClass('box-active');
    $('#top').toggleClass('top-line-active menu-icon-active')
    $('#bottom').toggleClass('bottom-line-active menu-icon-active')
    $('.middle-line').toggleClass('middle-line-active')
    $('.menu-overlay').toggleClass('menu-overlay-active')
    $('body').toggleClass('body-menu-active')
  });
});

$(document).scroll(function(){
  var scroller = $(this).scrollTop();
  $('.container').children().css({
    'transform': 'translateX('+ scroller / 20 +'%)'
  });
});
