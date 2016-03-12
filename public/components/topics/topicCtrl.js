(function() {
    'use strict';
    //$routeParams comes with ngRoute. We use it to create dynamic paths by including ":routename" in our routeprovider.
    app.controller("topicsCtrl", ["$scope", "$routeParams", '$http', function($scope, $routeParams, $http) {
        $scope.resources = [];
        $scope.topics = [];
        $scope.topicUrl = 'https://spreadsheets.google.com/feeds/list/1mjePr-P66WAHm0LINEuquvSPhOtfkCf6vWaqLJK09VI/default/public/values?alt=json';
        $http.get($scope.topicUrl).then(function(res) {
            $scope.topics = res.data.feed.entry;
            //here i will go through each topic and find where
            $scope.feature = $scope.topics.filter(function(el) {
                // the link matches my routeParams.topicsTitle
                if (el.gsx$link.$t === $routeParams.topicTitle) {
                    // then set $scope.feature to that one El
                    return el;
                }
            });
        });
        $scope.resourcesUrl = 'https://spreadsheets.google.com/feeds/list/1VRch1vAe9vrZytWTcm_JboMLdXx26os10nLBEjKrUUE/default/public/values?alt=json';
        $http.get($scope.resourcesUrl).then(function(res) {
            var entries = res.data.feed.entry;
            $scope.resources = entries.filter(function(el, inn) {
                if (entries[inn].gsx$topic.$t === $routeParams.topicTitle) {
                    return true;
                }
            }).map(function(el, inn) {
                var out = {};
                out.comments = el.gsx$comments.$t;
                out.description = el.gsx$description.$t;
                out.featured = el.gsx$featured.$t;
                out.grade = el.gsx$grade.$t;
                out.icon = el.gsx$icon.$t;
                out.link = el.gsx$link.$t;
                out.rating = el.gsx$rating.$t;
                out.source = el.gsx$source.$t;
                out.subject = el.gsx$subject.$t;
                out.title = el.gsx$title.$t;
                out.topic = el.gsx$topic.$t;
                out.type = el.gsx$type.$t;
                return out;
            });
        });
        $scope.mediaFilter = '';
        $scope.gradeFilter = '';
        $scope.searchFilter = '';
        $scope.filterResources = function(grade, media) {
            $scope.gradeFilter = grade;
            $scope.mediaFilter = media;
        }; //how can we implement filtering for resources that may have more than one grade assigned to them?,
        //let's set up one view for an actual subtopic
        // $scope.topic = topics[Suppy]
        $scope.topicTitle = $routeParams.topicTitle;
    }]);
})();