jQuery(document).ready(function($){
	var contentSections = $('.section'),
		navigationItems = $('#vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .nav-trigger').on('click', function(){
    	$('.touch #vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #vertical-nav a').on('click', function(){
    	$('.touch #vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}

	// chart slider

		$('.chart-nav').slick({
	  centerMode: true,
	  centerPadding: '30px',
	  slidesToShow: 9,
	  asNavFor: '.site-name',
	  focusOnSelect: true,
	  useTransform: true,
	  cssEase: 'ease-out',
	  arrows: false,
	  draggable:false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '30px',
	        slidesToShow: 9
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 5
	      }
	    }
	  ]
	});
		$('.site-name').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.chart-nav',
		  arrows: false,
		  
		});

		window._wq = window._wq || [];

		_wq.push({ id: "_all", onReady: function(wistiaEmbed) {			

		  	console.log("This will run for every video on the page. Right now I'm on this one:", wistiaEmbed);		  	

		  	var wistiaHash = $(".wistia_embed").attr("id", "wistiaGenID_" + wistiaEmbed.hashedId());

			var allVideos = Wistia.api.all();

			var wistiaHashId = wistiaEmbed.hashedId();

			
			// grab Wista API
			wistiaEmbed = Wistia.api("wistiaGenID_");

			// when the video is stopped
			wistiaEmbed.bind("end", function() {					 
			  $('.video-plants').fadeIn("slow");
			});

			//when the video is paused
			wistiaEmbed.bind("pause", function() {
			  $('.video-plants').fadeIn("slow");
			});

			//when the video time changes
			wistiaEmbed.bind("secondchange", function() {
			  $('.video-plants').fadeOut("slow");
			});  

			// when you click the custom play button
			$('.video-plants').click(function() {
				wistiaEmbed.play();
				$('.video-plants').fadeOut("slow");
			});		

		}
	});

});

