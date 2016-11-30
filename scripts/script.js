$(document).scroll(function(){

  var scroller = $(this).scrollTop();

  $('.front, .back').css({

    '-webkit-transform': 'rotateX('+ scroller / 6 +'deg) translateX('+ scroller / 100 +'%)'

  });

});
