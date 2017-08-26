angular.module('mainApp').directive('bookView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'book/book-view.html'
	};
});

angular.module('mainApp').controller('bookCtrl', function bookCtrl($scope, $interval) {

	$scope.model = {
		nextLaunchDate: new Date(Date.UTC(2029,6,16,13,32,0,0)),
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
