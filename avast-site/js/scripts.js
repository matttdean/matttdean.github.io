
$(function(){
  $(".blueButton").click(function() {
  $(".blueBlob").toggleClass("scale");
  });
});

$(function(){
  $(".redButton").click(function() {
  $(".red-blob").toggleClass("scale");
  });
});

$(function(){
  $(".orangeButton").click(function() {
  $(".orange-blob").toggleClass("scale");
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

var stars = $('.stars');

function simpleParallax(intensity, element) {
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imgPos = scrollTop / intensity + 'px';
            element.css('transform', 'translateY(' + imgPos + ')');
        });
    }

    simpleParallax(3, stars);

$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#blue").offset().top + 140
    }, 1000);
});
