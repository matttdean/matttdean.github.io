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
		$('.notation').css({
			'transform' : 'translate(0px, -'+ wScroll /42 +'%)'
		})
		$('#head1').css({
			'transform' : 'rotate('+ wScroll /3 +'deg)'
		})
		$('#head2').css({
			'transform' : 'rotate('+ wScroll /3 +'deg)'
		})
		$('#head3').css({
			'transform' : 'rotate('+ wScroll /3 +'deg)'
		})
		$('#head4').css({
			'transform' : 'rotate('+ wScroll /3 +'deg)'
		})
		$('#head5').css({
			'transform' : 'rotate('+ wScroll /3 +'deg)'
		})
		$('#head6').css({
			'transform' : 'rotate('+ wScroll /3 +'deg)'
		})
	}
});


$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
});

$('#head1').hover(function() { 
    $('#quote-svg').css({
    transform: "scaleX(1)",
    fill: "#E15471"
    });
    $('.quote-text').html(
    	"It’s really interesting and helpful to read this. I have often wondered if there’s a link between migraines and depression and somehow it helps to know there is a link and that you’re not alone. <em>– Suzie</em>"
    	);
});
$('#head2').hover(function() { 
    $('#quote-svg').css({
    transform: "scaleX(-1)",
    fill: "#27229D"
    });
    $('.quote-text').html(
    	"This post and comments brought tears to my eyes. I now know that I am not alone in feeling this way and although that’s sad in one respect, it’s comforting in another.  <em>– Celeste<em>"
    	);
});
$('#head3').hover(function() { 
    $('#quote-svg').css({
    transform: "scaleX(-1) scaleY(-1) rotate(120deg)",
    fill: "#170A4C"
    });
    $('.quote-text').html(
    	"Nice job, and thank you once again for giving us a voice. Please everyone stay strong… continue to educate others of our struggles… Hang tough, God bless all of us who suffer and as always, much love to all. <em>– Eddie<em> "
    	);
});
$('#head4').hover(function() { 
    $('#quote-svg').css({
    transform: "scaleX(1) rotate(120deg)",
    fill: "#170A4C"
    });
    $('.quote-text').html(
    	"On my first visit to the site, the second post I see is dealing with the mental impact of this hideous disease has on suffers. Thank you for recognizing this most important factor.<em>– Darell</em>"
    	);
});  
$('#head5').hover(function() { 
    $('#quote-svg').css({
    transform: "scaleX(1) scaleY(-1)",
    fill: "#E15471"
    });
    $('.quote-text').html(
    	"Thank you for the site. I find out more about life with daily migraines and a broken spirit... We can try our best to help each other with compassion and Hope. Blessings to you. Xx <em>– Gina</em> "
    	);
});
$('#head6').hover(function() { 
    $('#quote-svg').css({
    transform: "scaleX(-1) scaleY(-1)",
    fill: "#27229D"
    });
    $('.quote-text').html(
    	"Glad to know I’m not the only one who feels this way. I feel guilty for getting depressed because I know it could be much worse. <em>– Paula</em> "
    	);
});
	