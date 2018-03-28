$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.brain').css({
		'transform' : 'translate(0px,-'+ wScroll /2 +'%)'
	})
});