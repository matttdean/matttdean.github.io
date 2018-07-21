function simpleParallax(intensity, element) {
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imgPos = scrollTop / intensity + 'px';
            element.css('transform', 'translateY(-' + imgPos + ')');
        });
    }
var m1 = $(".m-1");
var m2 = $(".m-2");
var m3 = $(".m-3");
var m4 = $(".m-4");

simpleParallax(5, m1);
simpleParallax(10, m2);
simpleParallax(20, m3);
