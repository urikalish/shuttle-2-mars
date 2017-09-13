angular.module('mainApp').directive('homeView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'home/home-view.html'
	};
});

angular.module('mainApp').controller('homeCtrl', function homeCtrl($scope, $interval) {

	$scope.model = {
		launch: {name: 'JUN 2029', date: new Date(Date.UTC(2029,5,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 001, Mars'},
		timeToLaunch: 0
	};

	function updateTimeToNextLaunch() {
		$scope.model.timeToLaunch = (($scope.model.launch.date.getTime() - (new Date()).getTime()) / 1000).toFixed(0);
	}

	updateTimeToNextLaunch();

	$interval(function() {
		updateTimeToNextLaunch();
	}, 1000);
});
