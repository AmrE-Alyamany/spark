/*Currency*/
$(".dropdown-item").click(function () {
    $("#currency").attr('data-text',$(this).attr('data-label'));
});
/*Show Search*/
$(".nav-item .fa-search ").click(function () {
        $(".search input").toggle(250);
        $(".searchIcon").toggleClass("fa-search").toggleClass("fa-plus fa-rotate-45");
});
/*Testimonials slick slider*/
$('.responsiveSlid').slick({
    centerMode: true,
    centerPadding: '70px',
    dots: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
        {
            breakpoint: 9999,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
/*count to number*/
/*
$('.timer1').countTo({
    speed: 4000,
    refreshInterval: 100
});
$('.timer2').countTo({
    speed: 3000,
    refreshInterval: 100
});
$('.timer3').countTo({
    speed: 1000,
    refreshInterval: 2
});
$('.timer1,.timer2,.timer3').countTo('stop');
//start counter
var startCount = $(window).scroll ( function () {
    scroll = $(window).scrollTop() + $(window).height();
    post = $(".statistics").position().top;
    if ( scroll >= post ){
        setTimeout(function () {$('.timer1,.timer2,.timer3').countTo('start');}, 700);
        clearInterval(startCount)
    }
});
*/
/*Animation with scrolling*/
var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();
/*
//function not complete

$(document).ready(function() {


function scrollAnimate(selector, triggerElement, classEffect, duration = 0 ) {
    var t =$(triggerElement);
    var s = $(selector);
    var p = s.offset().top; //selection position top
    setTimeout(function () {
        var viewTop = $(window).scrollTop() ; //scroll position
        var viewDown = $(window).scrollTop() + $(window).height() ; //scroll position
        // var sh = p + s.height() ; //selection height
        if ( viewTop <= p <= viewDown ) {
            t.addClass(classEffect);
        }
        else {
            t.removeClass(classEffect);

        }
    },duration)


}
$(window).scroll(function() {

scrollAnimate(".purchase","#aPurchase1","fadeInLeftBig");

});

});*/