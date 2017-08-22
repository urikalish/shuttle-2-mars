angular.module('mainApp').directive('homeView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'home/home-view.html'
	};
});

angular.module('mainApp').controller('homeCtrl', function homeCtrl($scope) {

	$scope.model = {
	};

});
