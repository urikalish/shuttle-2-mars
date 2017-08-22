angular.module('mainApp').directive('prepareView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'prepare/prepare-view.html'
	};
});

angular.module('mainApp').controller('prepareCtrl', function prepareCtrl($scope) {

	$scope.model = {
	};

});
