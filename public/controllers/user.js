angular.module('MyApp')
  .controller('UserCtrl', ['$scope', '$rootScope', '$routeParams', 'Show',
    function($scope, $rootScope, $routeParams, Show) {
        $scope.user = $rootScope.currentUser.email;
        $scope.shows = [];
        Show.query().$promise.then(function(shows){
                var index;
                for (index=0; index < shows.length; ++index){
                    if (shows[index].subscribers.indexOf($rootScope.currentUser._id) !== -1)
                        $scope.shows.push(shows[index]);
                }
            }, function(err){
                console.log(err);
            });
        /*$scope.shows = [];
        var show;
        for (show in Show.query()){
            if (show.subscribers.indexOf($rootScope.currentUser._id) !== -1)
	        	$scope.shows.push(show);
        }*/
    }]);