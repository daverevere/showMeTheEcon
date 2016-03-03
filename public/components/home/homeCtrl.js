// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var pageScroll = $('a.page-scroll')
        
        pageScroll.bind('click', function(event) {
        var $anchor = $(this);
        console.log($anchor.attr('scrollTo'))
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('scrollTo')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });    
});


