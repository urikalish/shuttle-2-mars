angular.module('mainApp').directive('galleryView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'gallery/gallery-view.html'
	};
});

angular.module('mainApp').controller('galleryCtrl', function galleryCtrl($scope) {

	$scope.model = {
	};

});
