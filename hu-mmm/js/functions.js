$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.brain').css({
		'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
	})
	$('.blue-bottom').css({
		'transform' : 'translate(0px,-'+ wScroll /32 +'%)'
	})
	$('.moon').css({
		'transform' : 'translate(0px, -'+ wScroll /26 +'%)'
	})
	$('.brain-clouds').css({
		'transform' : 'translate(0px, '+ wScroll /64 +'%)'
	})
	$('.dark-blue-bottom').css({
		'transform' : 'translate(0px, -'+ wScroll /64 +'%)'
	})
	$('.darkest-blue-bottom').css({
		'transform' : 'translate(0px, -'+ wScroll /53 +'%)'
	})
	$('.white-bottom').css({
		'transform' : 'translate(0px, -'+ wScroll /42 +'%)'
	})

});

	