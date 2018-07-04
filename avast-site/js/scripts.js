  var portCount = 1;

$(function(){
  $(".blueButton").click(function() {
  $(".blue-page").toggleClass("translated");
  $(".blue-clip").toggleClass("clip-translate");
  $(".blue-grid").toggleClass("slideIn");
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

$(function(){
  $(".mobile-nav-button").click(function() {
  $(".mobile-nav").toggleClass("translated");
  $(".line-top").toggleClass("rotate-top");
  $(".line-middle").toggleClass("fade-middle");
  $(".line-bottom").toggleClass("rotate-bottom");
  });
});

$(function(){
  $("#port1").click(function() {
    portCount = 1;
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-1").toggleClass("isVisible");
  });
  $("#port2").click(function() {
    portCount = 2;
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-2").toggleClass("isVisible");
  });
  $("#port3").click(function() {
    portCount = 3;
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-3").toggleClass("isVisible");
  });
  $("#port4").click(function() {
    portCount = 4;
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-4").toggleClass("isVisible");
  });
  $("#port5").click(function() {
    portCount = 5;
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-5").toggleClass("isVisible");
  });
  $("#port6").click(function() {
    portCount = 6;
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-6").toggleClass("isVisible");
  });

});


// $(function(){
//   for (i=1; i<7; i++) {
//   $("#port" + i + "").click(function() {
//     portCount = i;
//   // $(".modal-box").slideDown( "slow" );
//   $(".modal-box").removeClass("isVisible");
//   $("#m-" + i + "").toggleClass("isVisible");
//   });
// }
// });


$(function(){
  $(".close").click(function() {
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  });
});

$(function(){
  $(".next").click(function() {
    if (portCount < 5 ) {
    portCount++;}
    else {
      portCount = 1;
    }
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-" + portCount + "").addClass("isVisible");
  });
});

$(function(){
  $(".prev").click(function() {
    if (portCount > 1 ) {
    portCount--;}
    else {
      portCount = 6;
    }
  // $(".modal-box").slideDown( "slow" );
  $(".modal-box").removeClass("isVisible");
  $("#m-" + portCount + "").addClass("isVisible");
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

$(".port-item").click(function() {
    $('.blue-page').animate({
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
