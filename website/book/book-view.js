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
		timeToLaunch: 0,
		numberOfHumans: 1,
		numberOfCats: 0,
		canReset: false,
		canBook: true
	};

	function reset() {
		$scope.model.selectedLaunch = $scope.model.launches[0];
		$scope.launchChanged();
		$scope.model.numberOfHumans = 1;
		$scope.model.numberOfCats = 0;
		disableReset();
		enableBook();
	}

	function enableReset() {
		$scope.model.canReset = true;
	}

	function disableReset() {
		$scope.model.canReset = false;
	}

	function enableBook() {
		$scope.model.canBook = true;
	}

	function disableBook() {
		$scope.model.canBook = false;
	}

	function updateTimeToLaunch() {
		$scope.model.timeToLaunch = (($scope.model.selectedLaunch.date.getTime() - (new Date()).getTime()) / 1000).toFixed(0);
	}

	$scope.launchChanged = function launchChanged() {
		updateTimeToLaunch();
		enableReset();
	};

	$scope.increaseNumberOfHumans = function increaseNumberOfHumans() {
		$scope.model.numberOfHumans++;
		enableReset();
		enableBook();
	};

	$scope.decreaseNumberOfHumans = function decreaseNumberOfHumans() {
		if ($scope.model.numberOfHumans > 0) {
			$scope.model.numberOfHumans--;
			enableReset();
		}
		if ($scope.model.numberOfHumans === 0) {
			disableBook();
		}
	};

	$scope.increaseNumberOfCats = function increaseNumberOfCats() {
		$scope.model.numberOfCats++;
		enableReset();
		enableBook();
	};

	$scope.decreaseNumberOfCats = function decreaseNumberOfCats() {
		if ($scope.model.numberOfCats > 0) {
			$scope.model.numberOfCats--;
			enableReset();
		}
	};

	$scope.onResetClicked = function onResetClicked() {
		reset();
	};

	$interval(function() {
		updateTimeToLaunch();
	}, 1000);

	reset();

});
