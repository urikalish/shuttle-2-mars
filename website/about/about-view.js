angular.module('mainApp').directive('aboutView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'about/about-view.html'
	};
});

angular.module('mainApp').controller('aboutCtrl', function abouteCtrl($scope) {

	$scope.model = {
	};

});
