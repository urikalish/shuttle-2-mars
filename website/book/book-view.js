angular.module('mainApp').directive('bookView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'book/book-view.html'
	};
});

angular.module('mainApp').controller('bookCtrl', function bookCtrl($scope, $interval) {

	$scope.model = {
		launches: [
			{name: 'JUN 2029', date: new Date(Date.UTC(2029,5,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 001, Mars'},
			{name: 'JUL 2029', date: new Date(Date.UTC(2029,6,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 002, Mars'},
			{name: 'AUG 2029', date: new Date(Date.UTC(2029,7,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 003, Mars'},
			{name: 'SEP 2029', date: new Date(Date.UTC(2029,8,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 001, Mars'},
			{name: 'OCT 2029', date: new Date(Date.UTC(2029,9,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 002, Mars'},
			{name: 'NOV 2029', date: new Date(Date.UTC(2029,10,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 003, Mars'},
			{name: 'DEC 2029', date: new Date(Date.UTC(2029,11,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 001, Mars'},
			{name: 'JAN 2030', date: new Date(Date.UTC(2030,0,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 002, Mars'},
			{name: 'FEB 2030', date: new Date(Date.UTC(2030,1,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 003, Mars'},
			{name: 'MAR 2030', date: new Date(Date.UTC(2030,2,16,13,32,0,0)), from: 'Cape Canaveral, Florida', to: 'Station 001, Mars'}
		],
		selectedLaunch: null,
		timeToLaunch: 0
	};

	function updateTimeToLaunch() {
		$scope.model.timeToLaunch = (($scope.model.selectedLaunch.date.getTime() - (new Date()).getTime()) / 1000).toFixed(0);
	}

	$scope.launchChanged = function launchChanged() {
		updateTimeToLaunch();
	};

	$interval(function() {
		if ($scope.model.selectedLaunch) {
			updateTimeToLaunch();
		}
	}, 1000);

	$scope.model.selectedLaunch = $scope.model.launches[0];
	$scope.launchChanged();

});
