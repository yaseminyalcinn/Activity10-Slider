$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true, 
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        moveSlides: 1,
        pause: 3000, 
        pagerCustom: '#pager' 
    });
});
