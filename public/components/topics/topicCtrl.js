(function() {
    'use strict';
    
    app.controller("topicsCtrl", ["$scope", "$routeParams", '$http', function($scope, $routeParams, $http) {
        var topicsSheetUrl = 'https://spreadsheets.google.com/feeds/list/1mjePr-P66WAHm0LINEuquvSPhOtfkCf6vWaqLJK09VI/default/public/values?alt=json';
        var resourceSheetUrl = 'https://spreadsheets.google.com/feeds/list/1VRch1vAe9vrZytWTcm_JboMLdXx26os10nLBEjKrUUE/default/public/values?alt=json';
        $scope.mediaFilter = '';
        $scope.gradeFilter = '';
        $scope.searchFilter = '';
        $scope.resources = [];
        $scope.topicsSheet = [];
        $scope.currentTopic = $routeParams.currentTopic; 
        $scope.filterResources = filterResources;

        $http.get(topicsSheetUrl).then(function(res) {
            $scope.topicsSheet = res.data.feed.entry;
            $scope.featuredTopic = $scope.topicsSheet.map(removeGsx$).filter(matchesCurentPage)[0];
        });

        $http.get(resourceSheetUrl).then(function(res) {
            var sheet = res.data.feed.entry;
            $scope.resources = sheet.map(removeGsx$).filter(matchesCurentPage);
        });

        function matchesCurentPage (topicObj){
            return (topicObj.page === $routeParams.currentTopic)? true : false;
        }
        function removeGsx$ (resourceObj) { 
            var newObj = {};
            for(var prop in resourceObj ){
                if (prop.substring(0,4) === "gsx$"){
                    var str = prop.substring(4,prop.length);
                    newObj[str] = resourceObj[prop].$t;
                }
            }
            return newObj;
        }
        function deleteProps (inputObj,str1,str2,str3) {
            for (var ii = 1; ii < arguments.length; ii++) {
                delete inputObj[arguments[ii]];
            }
            return inputObj;
        }
        function filterResources (grade, media) {
            $scope.gradeFilter = grade;
            $scope.mediaFilter = media;
        } 

    }]);
})();