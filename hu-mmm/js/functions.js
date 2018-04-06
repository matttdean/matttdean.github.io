$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.brain').css({
		'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
	})
	$('.blue-bottom').css({
		'transform' : 'translate(0px,-'+ wScroll /32 +'%)'
	})
	$('.test').css({
		'transform' : 'translate(0px,-'+ wScroll /64 +'%)'
	})
	$('.moon').css({
		'transform' : 'translate(0px, -'+ wScroll /26 +'%)'
	})
	$('.brain-clouds').css({
		'transform' : 'translate(0px, '+ wScroll /64 +'%)'
	})
	// $('.dark-blue-bottom').css({
	// 	'transform' : 'translate(0px, -'+ wScroll /64 +'%)'
	// })
	$('.darkest-blue-bottom').css({
		'transform' : 'translate(0px, -'+ wScroll /53 +'%)'
	})
	$('.white-bottom').css({
		'transform' : 'translate(0px, -'+ wScroll /42 +'%)'
	})
	if (wScroll > $('.blue-blurb').offset().top) {
		$('.blue-blurb').slideDown();
	} else {
      $('.vlue-blurb').slideUp();
   }
});


$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
});

	