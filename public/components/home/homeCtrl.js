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



app.controller('homeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.hover = false;

    $scope.sentence = true;
    $scope.video = false;

    $timeout(function() {
    	$scope.sentence = false;
    	$scope.video = true;

    }, 5500)


}]);




