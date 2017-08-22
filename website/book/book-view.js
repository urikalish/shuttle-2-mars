angular.module('mainApp').directive('bookView', function () {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'book/book-view.html'
	};
});

angular.module('mainApp').controller('bookCtrl', function bookCtrl($scope) {

	$scope.model = {
	};

});
