
(function () {
    'use strict';

    
    //$routeParams comes with ngRoute. We use it to create dynamic paths by including ":routename" in our routeprovider.
    app.controller("topicsCtrl", ["$scope","$routeParams", '$http', function($scope,$routeParams, $http){
        $scope.resources = [];
        $scope.topics = [];

        $scope.url = 'https://spreadsheets.google.com/feeds/list/1mjePr-P66WAHm0LINEuquvSPhOtfkCf6vWaqLJK09VI/default/public/values?alt=json';
        $http.get($scope.url)
        .then(function(res){
            $scope.topics = res.data.feed.entry;

             //here i will go through each topic and find where
            $scope.feature = $scope.topics.filter(function (el) {
                // the link matches my routeParams.topicsTitle
                 if (el.gsx$link.$t === $routeParams.topicTitle) {
                    // then set $scope.feature to that one El
                    return el;
                 }
            })



        });   

        $scope.url = 'https://spreadsheets.google.com/feeds/list/1VRch1vAe9vrZytWTcm_JboMLdXx26os10nLBEjKrUUE/default/public/values?alt=json';
        $http.get($scope.url)
        .then(function(res){
            var entries = res.data.feed.entry;
            //console.log(res.data);

            for(var item in entries) {
               //console.log(entries[item].gsx$topic.$t, $routeParams.topicTitle);
               //  console.log(entries[item]);

                if(entries[item].gsx$topic.$t === $routeParams.topicTitle){
                    $scope.resources.push(entries[item]);
                };
            };

            // console.log(res.data, res);
        });


        $scope.mediaFilter = '';
        $scope.gradeFilter = '';
        $scope.searchFilter = '';

        $scope.filterResources = function (grade, media){
            $scope.gradeFilter = grade;
            $scope.mediaFilter = media;
            console.log($scope.gradeFilter, $scope.mediaFilter )
        };//how can we implement filtering for resources that may have more than one grade assigned to them?,
        //let's set up one view for an actual subtopic

        // $scope.topic = topics[Suppy]
        
        $scope.topicTitle = $routeParams.topicTitle;

 
        
    }]);
    
    
    




})();