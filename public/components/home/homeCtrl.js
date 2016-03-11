// // jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     var pageScroll = $('a.page-scroll');
//         console.log(pageScroll);

//         pageScroll.bind('click', function(event) {

//         var $anchor = $(this);

//         console.log($anchor);

//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('scrollTo')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });    
// });



app.controller('homeCtrl', ['$scope', function ($scope) {

    $scope.hover = false;
}]);




