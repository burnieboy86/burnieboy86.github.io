$(document).ready(function(){
  $('.menu-icon-box').click(function(){

    $(this).toggleClass('box-active');
    $('#top').toggleClass('top-line-active menu-icon-active')
    $('#bottom').toggleClass('bottom-line-active menu-icon-active')
    $('.middle-line').toggleClass('middle-line-active')
    $('.menu-wrapper').fadeToggle(200)
    $('body').toggleClass('body-menu-active')

    setTimeout(function(){

      $('#first-item').toggleClass('first-text-active');

    },200);

    setTimeout(function(){

      $('#second-item').toggleClass('second-text-active');

    },400);

    setTimeout(function(){

      $('#third-item').toggleClass('third-text-active');

    },600);

    setTimeout(function(){

      $('#fourth-item').toggleClass('fourth-text-active');

    },800);

  });
});

$(document).scroll(function(){
  var scroller = $(this).scrollTop();
  $('.container').children().css({
    'transform': 'translateX('+ scroller / 20 +'%)'
  });
});
