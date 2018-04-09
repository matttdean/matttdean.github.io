$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if ($(window).width() > 960) {
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
			'transform' : 'translate(0px, -'+ wScroll /44 +'%)'
		})
		$('#head1').css({
			'transform' : 'rotate('+ wScroll +'deg)'
		})
		$('#head2').css({
			'transform' : 'rotate('+ wScroll +'deg)'
		})
		$('#head3').css({
			'transform' : 'rotate('+ wScroll +'deg)'
		})
		$('#head4').css({
			'transform' : 'rotate('+ wScroll +'deg)'
		})
		$('#head5').css({
			'transform' : 'rotate('+ wScroll +'deg)'
		})
		$('#head6').css({
			'transform' : 'rotate('+ wScroll +'deg)'
		})
	}
});


$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
});

jQuery('#head1').hover(function() 
{ 
    jQuery('#speechBubble').css("background-image", "url('img/speech-bubble-1.svg')"); 
}); 
jQuery('#head2').hover(function() 
{ 
    jQuery('#speechBubble').css("background-image", "url('img/speech-bubble-2.svg')"); 
});
jQuery('#head3').hover(function() 
{ 
    jQuery('#speechBubble').css("background-image", "url('img/speech-bubble-3.svg')"); 
});
jQuery('#head4').hover(function() 
{ 
    jQuery('#speechBubble').css("background-image", "url('img/speech-bubble-4.svg')"); 
});   
jQuery('#head5').hover(function() 
{ 
    jQuery('#speechBubble').css("background-image", "url('img/speech-bubble-5.svg')"); 
}); 
jQuery('#head6').hover(function() 
{ 
    jQuery('#speechBubble').css("background-image", "url('img/speech-bubble-6.svg')"); 
}); 
	