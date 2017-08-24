angular.module('mainApp').directive('homeView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'home/home-view.html'
	};
});

angular.module('mainApp').controller('homeCtrl', function homeCtrl($scope, $interval) {

	$scope.model = {
		nextLaunchDate: new Date(2029,6,16,6,32,0,0),
		timeToNextLaunch: 0
	};

	function updateTimeToNextLaunch() {
		$scope.model.timeToNextLaunch = (($scope.model.nextLaunchDate.getTime() - (new Date()).getTime()) / 1000).toFixed(0);
	}

	updateTimeToNextLaunch();

	$interval(function() {
		updateTimeToNextLaunch();
	}, 1000);
});
