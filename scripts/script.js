$(document).scroll(function(){

  var scroller = $(this).scrollTop();

  $('.front, .back').css({

    'transform': 'rotateX('+ scroller / 6 +'deg) translateX('+ scroller / 100 +'%)'

  });

});
