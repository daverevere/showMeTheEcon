(function() {
    'use strict';
    //$routeParams comes with ngRoute. We use it to create dynamic paths by including ":routename" in our routeprovider.
    app.controller("topicsCtrl", ["$scope", "$routeParams", '$http', function($scope, $routeParams, $http) {
        var topicsSheetUrl = 'https://spreadsheets.google.com/feeds/list/1mjePr-P66WAHm0LINEuquvSPhOtfkCf6vWaqLJK09VI/default/public/values?alt=json';
        var resourceSheetUrl = 'https://spreadsheets.google.com/feeds/list/1VRch1vAe9vrZytWTcm_JboMLdXx26os10nLBEjKrUUE/default/public/values?alt=json';
        $scope.mediaFilter = '';
        $scope.gradeFilter = '';
        $scope.searchFilter = '';
        $scope.resources = [];
        $scope.topicsSheet = [];
        $scope.currentTopic = $routeParams.currentTopic; // This is the current topic you're in. if you're in http://localhost:2001/#/topics/Inflation, then $routeParams.currentTopic is "Inflation"
        $scope.filterResources = filterResources; // filterResources is a function Defined at the bottom of this script

        // $http.get Will retrive our data from the google sheet
        $http.get(topicsSheetUrl).then(function(res) {
            // then set the data received to $scope.topicSheet
            var topicsSheet = res.data.feed.entry;
            // featured topics are included in the topicsSheet
            // But we must find the correct featured topic using filter. 
            // matchesCurentPage is a function. Defined at the bottom of the script. 
            // removeGsx$ is a function define at the bottom
            // removeGsx$ cleans the properties in the object provided. 
            // removeGsx$ turns obj.gsx$description.$t to simply obj.description
            $scope.featuredTopic = topicsSheet.map(removeGsx$).filter(matchesCurentPage)[0];//filter removes anything that's false
        });

        // $http.get Will retrive our data from the google sheet
        $http.get(resourceSheetUrl).then(function(res) {
            // then set the data received to sheet
            var sheet = res.data.feed.entry;
            // sheet includes all resources for every single topic. We must filter the resources to only the ones relevant to current page 
            // matchesCurentPage is a function. Defined at the bottom of the script. 
            // removeGsx$ is a function define at the bottom
            // removeGsx$ cleans the properties in the object provided. 
            // removeGsx$ turns obj.gsx$description.$t to simply obj.description
            $scope.resources = sheet.map(removeGsx$).filter(matchesCurentPage);
        });


        function matchesCurentPage (topicObj){
            // this returns simply true or false
            // this is used by Array.filters
            // compares a topic object to the current page RouteParams
            return (topicObj.page === $routeParams.currentTopic)? true : false;
        }
        
        function removeGsx$ (resourceObj) { 
           console.log(resourceObj)
            // this function receives an input object (resourceObj) and outputs/returns a new one (newObj)
            // removeGsx$ cleans the properties in the object provided. 
            // removeGsx$ turns obj.gsx$description.$t to simply obj.description
            var newObj = {};
            for(var prop in resourceObj ){
                if (prop.substring(0,4) === "gsx$"){
                    // console.log(prop);
                    var str = prop.substring(4,prop.length);
                    // console.log(str)
                    console.log(resourceObj[prop].$t)
                    newObj[str] = resourceObj[prop].$t;//newObj gets a str property set to 
                }
            }
            // console.log(newObj)
            return newObj;
        }

        function deleteProps (inputObj,str1,str2,str3) {
            // this function is not used 
            // We may use it later
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