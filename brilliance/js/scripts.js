
   // lock scrolling
   $('html, body').css({
    overflow: 'hidden',
    height: '100%'
    });

function zoomMask(){
    //animate mask
    if ($(window).width() < 600) {
        $(".mask").attr('style', 'transform: translateX(-33%) scale(22);');
     }
     else {
        $(".mask").attr('style', 'transform: scale(22);');
     }
    // restore scrolling
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
  }

  function eraseMask() {
    $(".mask").attr('style', 'display: none; ');
  }

  $(function(){
    setTimeout(zoomMask, 1500);
    setTimeout(eraseMask, 2500);
  });
  



//show/hide hidden sites
$(function() {
    $( "#button" ).click(function() {
        $( "#hidden-container" ).toggle(1000);
    });
});

//show/hide hidden sites for mobile
$(function() {
    $( "#button" ).click(function() {
        $( "#hidden-container-mobile" ).toggle(1000);
    });
});


$('.counter').countUp();
    
$(window).scroll(function () {
    var s = $(window).scrollTop(),
          d = $(document).height(),
          c = $(window).height();
          scrollPercent = (s / (d-c)) * 100;
          var position = scrollPercent;
    if (scrollPercent < 3) {
        $(".nav-mobile").attr('style', 'background-color: transparent');
    }
    else {
        $(".nav-mobile").attr('style', 'background-color: #FFF')
    }
    if (scrollPercent > 95) {
        $(".nav-mobile").attr('style', 'display:none');
    }
     $(".progress-bar").attr('style', 'width:' + position + '%');
     
  
  });