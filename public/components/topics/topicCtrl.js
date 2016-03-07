
(function () {
    'use strict';

    
    //$routeParams comes with ngRoute. We use it to create dynamic paths by including ":routename" in our routeprovider.
    app.controller("topicsCtrl", ["$scope","$routeParams", '$http', function($scope,$routeParams, $http){
        $scope.resources = [];

        $scope.url = 'https://spreadsheets.google.com/feeds/list/1mjePr-P66WAHm0LINEuquvSPhOtfkCf6vWaqLJK09VI/default/public/values?alt=json';
        $http.get($scope.url)
        .then(function(res){
            $scope.topics = res.data.feed.entry;

            // here i will go through each topic and find where 
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

            for(var item in entries) {
               console.log(entries[item].gsx$topic.$t, $routeParams.topicTitle);  
                // console.log(entries[item]);
                if(entries[item].gsx$topic.$t === $routeParams.topicTitle){
                    $scope.resources.push(entries[item]);
                };
            };
            console.log($scope.resources);

            // console.log(res.data, res);
        });   


        $scope.mediaFilter = '';
        $scope.gradeFilter = '';
        $scope.searchFilter = '';

        $scope.filterResources = function (grade, media){
            $scope.gradeFilter = grade;
            $scope.mediaFilter = media;
        };//how can we implement filtering for resources that may have more than one grade assigned to them?
          //let's set up one view for an actual subtopic

        // $scope.topic = topics[Suppy]
        
        $scope.topicTitle = $routeParams.topicTitle;

        $scope.topics = [ 
        {
            subject : "Macro",
            title   : "Supply, demand, and market equilibrium",
            description: "The core ideas in microeconomics.  Supply, demand and equilibrium.",
            resources:  [
                {type: "video", title: "Video 1", description: "lorm ipsum blah bala", grade : ["elem","hs"],link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "audio", title: "Audio 1", description: "lorm ipsum blah bala", grade : "elem",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 2", description: "lorm ipsum blah bala", grade : "elem",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "audio", title: "Audio 2", description: "lorm ipsum blah bala", grade : "elem",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 3", description: "lorm ipsum blah bala", grade : "elem",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 4", description: "lorm ipsum blah bala", grade : "elem",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},

                {type: "video", title: "Video 6", description: "lorm ipsum blah bala", grade : "hs",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "audio", title: "Audio 2", description: "lorm ipsum blah bala", grade : "hs",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 8", description: "lorm ipsum blah bala", grade : "hs",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "audio", title: "Audio 2", description: "lorm ipsum blah bala", grade : "hs",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "literature", title: "Video 3", description: "lorm ipsum blah bala", grade : "hs",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 4", description: "lorm ipsum blah bala", grade : "elem",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},

                {type: "video", title: "Video 1", description: "lorm ipsum blah bala", grade : "college",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "audio", title: "Funky Music 1", description: "lorm ipsum blah bala", grade : "college",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 2", description: "lorm ipsum blah bala", grade : "college",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "audio", title: "Audio 2", description: "lorm ipsum blah bala", grade : "college",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 3", description: "lorm ipsum blah bala", grade : "college",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                {type: "video", title: "Video 4", description: "lorm ipsum blah bala", grade : "college",link : "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium", source : "khanacademy", rating: 0, icon : "link",comments : []},
                
            ]
        }
    ];

 
        
    }]);
    
    
    
    
   
    
    
    
//    app.directive('topic', economicDirective);
//
//    function economicDirective() {
//        return {
//            restrict: 'E',
//            templateUrl: 'components/macro/economic/economic.html',
//            scope: {},
//            controller: economicController,
//            controllerAs: 'vm',
//            bindToController: true
//        };
//    }
//
//
//    function economicController() {
//        var vm = this;
//        
//        vm.resource ={description: "text", link: "hyperlink"};
   
})();