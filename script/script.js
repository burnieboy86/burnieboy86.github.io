$(document).ready(function(){

  $('.menu-icon-box').click(function(){


    $(this).toggleClass('box-active');

    $('#top').toggleClass('top-line-active menu-icon-active')

    $('#bottom').toggleClass('bottom-line-active menu-icon-active')

    $('.middle-line').toggleClass('middle-line-active')

    $('.menu-icon-text-box').children('p').fadeToggle(200)

    $('.menu-wrapper').fadeToggle(200)

    $('body').toggleClass('body-menu-active')


    //setTimeout(function(){

      //$('#first-item').toggleClass('first-text-active');

    //},300);

    //setTimeout(function(){

      //$('#second-item').toggleClass('second-text-active');

    //},500);

    //setTimeout(function(){

      //$('#third-item').toggleClass('third-text-active');

    //},700);

    //setTimeout(function(){

      //$('#fourth-item').toggleClass('fourth-text-active');

    //},900);

  });
});

$(document).scroll(function(){

  var scroller = $(this).scrollTop();

  $('.container').children().css({

    'transform': 'translateY(-'+ scroller / 20 +'%)'

  });

  $('.main-text-character-container').css({

    'transform': 'rotateX(-'+ scroller / 20 +'deg) rotateY(-'+ scroller / 20 +'deg)'

  })

});
