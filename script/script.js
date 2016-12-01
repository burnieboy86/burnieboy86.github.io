$(document).ready(function(){
  $('.menu-box').click(function(){
    $(this).toggleClass('box-active');
    $('#top').toggleClass('top-line-active')
    $('#bottom').toggleClass('bottom-line-active')
    $('.middle-line').toggleClass('middle-line-active')
  });
});

$(document).scroll(function(){
  var scroller = $(this).scrollTop();
  $('p').css({
    'transform': 'translateX('+ scroller / 20 +'%)'
  });
});
