

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

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


$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

app.controller('indexCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.macro = [];   
    $scope.micro = [];



        $scope.url = 'https://spreadsheets.google.com/feeds/list/1mjePr-P66WAHm0LINEuquvSPhOtfkCf6vWaqLJK09VI/default/public/values?alt=json';
        $http.get($scope.url)
        .then(function(res){
            $scope.topics = res.data.feed.entry;


            $scope.topics.forEach(function (element) {
                if (element.gsx$subject.$t === "Macro"){
                    $scope.macro.push(element)
                }
            });
            $scope.topics.forEach(function (element) {
                if (element.gsx$subject.$t === "Micro"){
                    $scope.micro.push(element)
                }
            });
            // here i will go through each topic and find where 
            $scope.feature = $scope.topics.filter(function (el) {
                // the link matches my routeParams.topicsTitle
                 if (el.gsx$link.$t === $routeParams.topicTitle) {
                    // then set $scope.feature to that one El
                    return el;
                 }
            })
            console.log($scope.feature)



        });   

}]);
