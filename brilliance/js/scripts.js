$(function() {
    $( "#button" ).click(function() {
        $( "#hidden-container" ).toggle(1000);
    });
});

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