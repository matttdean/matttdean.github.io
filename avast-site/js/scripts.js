
$(function(){
  $(".blueButton").click(function() {
  $(".blue-page").toggleClass("translated");
  $(".blue-clip").toggleClass("clip-translate");
  // $(".space").toggleClass("fade");
  });
});

$(function(){
  $(".redButton").click(function() {
  $(".red-page").toggleClass("translated");
  });
});

$(function(){
  $(".orangeButton").click(function() {
  $(".orange-page").toggleClass("translated");
  });
});

$(function(){
  $(".purpleButton").click(function() {
  $(".purple-page").toggleClass("opacity");
  });
});


//
// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();
//   $('.stars').css({
//     'transform' : 'translate(0px, '+ wScroll /300 +'%)'
//   })
//     // $('header').css({
//     //   'transform' : 'translate(0px, -'+ wScroll /32 +'%)'
//     // })
// 		// $('section').css({
// 		// 	'transform' : 'translate(0px, -'+ wScroll /82 +'%)'
// 		// })
//     // $('.p-box').css({
// 		// 	'transform' : 'translate(0px, -'+ wScroll /94 +'%)'
// 		// })
// });

var stars = $('#stars');

function simpleParallax(intensity, element) {
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imgPos = scrollTop / intensity + 'px';
            element.css('transform', 'translateY(' + imgPos + ')');
        });
    }

    simpleParallax(4, stars);

$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#blue").offset().top + 140
    }, 1000);
});

$("#scroll-top").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.arrow-top-container').addClass('arrow-top-visible');
    // $('.arrow-top-glow').addClass('arrow-top-visible');
  } else {
    $('.arrow-top-container').removeClass('arrow-top-visible');
    // $('.arrow-top-glow').removeClass('arrow-top-visible');
  }
});
