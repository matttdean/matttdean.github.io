function simpleParallax(intensity, element) {
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imgPos = scrollTop / intensity + 'px';
            element.css('transform', 'translateY(' + imgPos + ')');
        });
    }

    simpleParallax(4, ".m-1");
