$(document).ready(function () {
    var slides = $('.main-slide');
    var i = 0;
    $('#main-slider-prev').hide();
    $('#main-slider-next').click(function () {
        if (i == 0) {
            $('#main-slider-prev').show();
        }
        if (i == slides.length - 2) {
            $('#main-slider-next').hide();
        }
        i = ++i % slides.length;
        $('.slider-wrapper').animate({
            'left': -(slides.eq(i).position().left)
        }, 600, "swing");
    });
    $('#main-slider-prev').click(function () {
        if (i == 1) {
            $('#main-slider-prev').hide();
        }
        if (i == slides.length - 1) {
            $('#main-slider-next').show();
        }
        i = --i % slides.length;
        $('.slider-wrapper').animate({
            'left': -(slides.eq(i).position().left)
        }, 600, "swing");
    });
    
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
    
    $('.fadein img:gt(0)').hide();
    setInterval(function () {
        $('.fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein');
    }, 2000);
});